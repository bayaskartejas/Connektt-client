'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { professionals } from '@/lib/mock-data';
import ProfessionalVideoCard from '@/components/ProfessionalVideoCard';
import Image from 'next/image';

export default function DiscoverVibe() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...new Set(professionals.flatMap(p => p.categories))];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const filteredProfessionals = activeCategory === 'All' 
    ? professionals 
    : professionals.filter(p => p.categories.includes(activeCategory));

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Discover the
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Vibe
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Explore Portfolios From Our Top-Rated Professionals
          </motion.p>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProfessionals.map((professional) => (
              professional.media.type === 'video' ? (
                <ProfessionalVideoCard 
                  key={professional.id} 
                  professional={professional} 
                />
              ) : (
                <motion.div
                  key={professional.id}
                  variants={fadeInUpVariants}
                  className="relative group rounded-xl overflow-hidden aspect-square"
                  whileHover="hover"
                >
                  {/* Portfolio Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={professional.media.url}
                      alt={professional.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500" />
                  </div>
                  
                  {/* Hover Content */}
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-6"
                    initial={{ opacity: 0, y: 20 }}
                    variants={{
                      hover: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.3 }
                      }
                    }}
                  >
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {professional.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {professional.categories.map((category) => (
                          <span
                            key={category}
                            className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm text-white"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(professional.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-sm text-gray-300 ml-1">
                          ({professional.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Find the perfect professional for your next project
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Browse Professionals
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}