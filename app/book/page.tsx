'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import InfluencerCard from '@/components/InfluencerCard';
import { categories, locations, Influencer } from '@/lib/mock-data';
import { Filter, Search } from 'lucide-react';

function InfluencersContent() {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const searchParams = useSearchParams();

  const [filteredInfluencers, setFilteredInfluencers] = useState<Influencer[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const hasActiveFilters = selectedCategory || selectedLocation || selectedDate;

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Handle URL param change
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || '');
    setSelectedLocation(searchParams.get('location') || '');
    setSelectedDate(searchParams.get('date') || '');
  }, [searchParams]);

  // Fetch data from backend
  useEffect(() => {
    if (!selectedLocation) {
      setFilteredInfluencers([]);
      if (hasActiveFilters) {
        setErrorMessage('Please select a location to search.');
      }
      return;
    }

    const fetchData = async () => {
      try {
        let endpoint = '';

        if (selectedLocation && !selectedCategory && !selectedDate) {
          endpoint = `${apiURL}/api/pro/${selectedLocation}/all`;
        } else if (selectedLocation && selectedCategory && !selectedDate) {
          endpoint = `${apiURL}/api/pro/${selectedLocation}/${selectedCategory}`;
        } else if (selectedLocation && !selectedCategory && selectedDate) {
          endpoint = `${apiURL}/api/pro/${selectedLocation}/${selectedDate}/all`;
        } else if (selectedLocation && selectedCategory && selectedDate) {
          endpoint = `${apiURL}/api/pro/${selectedLocation}/${selectedDate}/${selectedCategory}`;
        }

        if (!endpoint) return;

        const res = await fetch(endpoint);
        if (!res.ok) throw new Error('Failed to fetch professionals');
        const data: Influencer[] = await res.json();

        setFilteredInfluencers(data);
        setErrorMessage('');
      } catch (err) {
        console.error(err);
        setErrorMessage('Failed to load professionals. Please try again.');
      }
    };

    fetchData();
  }, [selectedLocation, selectedCategory, selectedDate, apiURL]);

  // Update URL params helper
  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    window.history.pushState({}, '', `?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {hasActiveFilters ? 'Search Results' : 'Find Professionals'}
            </h1>
            {errorMessage ? (
              <p className="text-red-400">{errorMessage}</p>
            ) : (
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {hasActiveFilters
                  ? `Showing ${filteredInfluencers.length} results`
                  : 'Browse by category or search for specific professionals'}
              </p>
            )}
          </motion.div>

          {/* Filters */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center space-x-2 text-gray-300 hover:text-white"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>

            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${
                showFilters ? 'block' : 'hidden md:grid'
              }`}
            >
              <select
                value={selectedCategory}
                onChange={(e) => updateParam('category', e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id} className="text-black">
                    {cat.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => updateParam('location', e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="">Select Location</option>
                {locations.map((location) => (
                  <option key={location} value={location} className="text-black">
                    {location}
                  </option>
                ))}
              </select>

              <input
                type="date"
                value={selectedDate}
                onChange={(e) => updateParam('date', e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      {hasActiveFilters && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredInfluencers.length > 0 && !errorMessage ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredInfluencers.map((influencer, index) => (
                  <InfluencerCard
                    key={influencer.id}
                    influencer={influencer}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              !errorMessage && (
                <div className="text-center py-20">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">No Results Found</h3>
                  <p className="text-gray-300 mb-8">
                    Try adjusting your filters or browse all categories above
                  </p>
                  <button
                    onClick={() => {
                      window.history.pushState({}, '', '/influencers');
                      setSelectedCategory('');
                      setSelectedLocation('');
                      setSelectedDate('');
                    }}
                    className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              )
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default function Influencers() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <InfluencersContent />
    </Suspense>
  );
}
