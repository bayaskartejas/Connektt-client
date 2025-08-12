'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { categories, locations } from '@/lib/mock-data';

export default function BookingBox() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: '',
    category: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (formData.date) params.set('date', formData.date);
    if (formData.category) params.set('category', formData.category);
    if (formData.location) params.set('location', formData.location);
    
    router.push(`/influencers?${params.toString()}`);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
    >
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Find Your Perfect Professional
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Date Field */}
          <div className="relative">
            <label className="block text-white text-sm font-medium mb-2">
              <Calendar className="inline w-4 h-4 mr-2" />
              Date
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
          </div>

          {/* Category Field */}
          <div className="relative">
            <label className="block text-white text-sm font-medium mb-2">
              <Users className="inline w-4 h-4 mr-2" />
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name} className="text-black">
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Location Field */}
          <div className="relative">
            <label className="block text-white text-sm font-medium mb-2">
              <MapPin className="inline w-4 h-4 mr-2" />
              Location
            </label>
            <select
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            >
              <option value="">Select Location</option>
              {locations.map((location) => (
                <option key={location} value={location} className="text-black">
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <Search className="w-5 h-5" />
          <span>Search Professionals</span>
        </motion.button>
      </form>
    </motion.div>
  );
}