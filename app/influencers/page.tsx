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
import { useProfessionals } from '../context/ProfessionalsContext';

function InfluencersContent() {
  const apiURL  = process.env.NEXT_PUBLIC_API_URL
  const searchParams = useSearchParams();
  const [filteredInfluencers, setFilteredInfluencers] = useState<Influencer[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);
  const { setProfessionals } = useProfessionals()
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || '');
    setSelectedLocation(searchParams.get('location') || '');
    setSelectedDate(searchParams.get('date') || '');
  }, []);

useEffect(() => {
  if (!selectedLocation) {
    setFilteredInfluencers([]);
    if (selectedCategory || selectedDate) {
      alert('Please select a location to search.');
    }
    return;
  }

  const fetchData = async () => {
    try {
      setIsLoading(true); // start loading
      let endpoint = '';

      if (selectedLocation && !selectedCategory && !selectedDate) {
        endpoint = `${apiURL}/api/pro/${encodeURIComponent(selectedLocation)}/all`;
      } else if (selectedLocation && selectedCategory && !selectedDate) {
        endpoint = `${apiURL}/api/pro/${encodeURIComponent(selectedLocation)}/${encodeURIComponent(selectedCategory)}`;
      } else if (selectedLocation && !selectedCategory && selectedDate) {
        endpoint = `${apiURL}/api/pro/${encodeURIComponent(selectedLocation)}/${selectedDate}/all`;
      } else if (selectedLocation && selectedCategory && selectedDate) {
        endpoint = `${apiURL}/api/pro/${encodeURIComponent(selectedLocation)}/${selectedDate}/${encodeURIComponent(selectedCategory)}`;
      }

      if (!endpoint) return;

      const res = await fetch(endpoint);
      if (!res.ok) throw new Error('Failed to fetch professionals');
      const data: Influencer[] = await res.json();

      setFilteredInfluencers(data);
      setProfessionals(data);
    } catch (err) {
      console.error(err);
      alert('Failed to load professionals. Please try again.');
    } finally {
      setIsLoading(false); // stop loading
    }
  };

  fetchData();
}, [selectedLocation, selectedCategory, selectedDate]);


  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

const handleFilterChange = (key: 'category' | 'location' | 'date', value: string) => {
  if (key === 'category') setSelectedCategory(value);
  if (key === 'location') setSelectedLocation(value);
  if (key === 'date') setSelectedDate(value);

  const params = new URLSearchParams(window.location.search);
  if (value) {
    params.set(key, value);
  } else {
    params.delete(key);
  }
  window.history.pushState({}, '', `?${params.toString()}`);
};


  const hasActiveFilters = selectedCategory || selectedLocation || selectedDate;

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
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {hasActiveFilters 
                ? `Showing ${filteredInfluencers.length} results`
                : 'Browse by category or search for specific professionals'
              }
            </p>
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
            
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${showFilters ? 'block' : 'hidden md:grid'}`}>
              <select
                value={selectedCategory}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name} className="text-black">
                    {cat.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location} className="text-black">
                    {location}
                  </option>
                ))}
              </select>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => handleFilterChange('date', e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid (only show if no active filters) */}
      {!hasActiveFilters && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
              <p className="text-gray-300 text-lg">Choose from our wide range of professional services</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <CategoryCard key={category.id} category={category} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

    {/* Influencer Results */}
    {hasActiveFilters && (
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : filteredInfluencers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInfluencers.map((influencer, index) => (
                <InfluencerCard key={influencer.id} influencer={influencer} index={index} />
              ))}
            </div>
          ) : (
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
          )}
        </div>
      </section>
    )}


      {/* Featured Influencers (show when no filters) */}
      {!hasActiveFilters && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Professionals</h2>
              <p className="text-gray-300 text-lg">Discover our top-rated professionals</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInfluencers.slice(0, 6).map((influencer, index) => (
                <InfluencerCard key={influencer.id} influencer={influencer} index={index} />
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => {
                  const params = new URLSearchParams();
                  params.set('category', 'all');
                  window.history.pushState({}, '', `?${params.toString()}`);
                }}
                className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                View All Professionals
              </button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default function Influencers() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
      <InfluencersContent />
    </Suspense>
  );
}