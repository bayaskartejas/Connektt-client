'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Users, Shield, Star, ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingBox from '@/components/BookingBox';
import CategoryCard from '@/components/CategoryCard';
import { categories, testimonials } from '@/lib/mock-data';

export default function Home() {
  const [email, setEmail] = useState('');

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
        staggerChildren: 0.2
      }
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto text-center pt-20">
          <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-left"
    >
      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
      >
        <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Book Creative Talent.
        </span>
        <span className="block text-3xl md:text-4xl text-gray-300 mt-4">
          On-Demand.
        </span>
      </motion.h1>
      </motion.div>

          <div className="max-w-4xl mx-auto">
            <BookingBox />
          </div>
        </div>
      </section>

{/* How It Works Section - Final Perfected Version */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
  <div className="max-w-4xl mx-auto">
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Effortless Booking Experience
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Your perfect event starts with just three simple steps
      </p>
    </motion.div>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative pl-10 md:pl-16"
    >
      {/* Vertical timeline line */}
      
      <div className="space-y-12">
        {[
          {
            step: "01",
            title: "Discover Your Perfect Match",
            description: "Browse our curated selection of top-rated professionals and find your ideal fit",
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )
          },
          {
            step: "02",
            title: "Secure Your Booking Instantly",
            description: "Confirm your reservation with our safe, one-click payment system",
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8V4L8 8M12 4L16 8M4 16V12M4 12V8M4 12H8M4 12H20M20 12V16M20 12V8M20 12H16M8 12H12M12 12H16M12 12V16M12 12V8" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 16V20H8V16H16Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )
          },
          {
            step: "03",
            title: "Experience Magic Unfold",
            description: "Relax and enjoy as our professionals create unforgettable moments",
            icon: (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 10L12 12M12 12L9 10M12 12L12 21M12 7C13.6569 7 15 5.65685 15 4C15 2.34315 13.6569 1 12 1C10.3431 1 9 2.34315 9 4C9 5.65685 10.3431 7 12 7Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 4C20.6569 4 22 5.34315 22 7C22 8.65685 20.6569 10 19 10C17.3431 10 16 8.65685 16 7C16 5.34315 17.3431 4 19 4Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 4C6.65685 4 8 5.34315 8 7C8 8.65685 6.65685 10 5 10C3.34315 10 2 8.65685 2 7C2 5.34315 3.34315 4 5 4Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUpVariants}
            className="relative group"
          >
            {/* Timeline dot */}
            <div className="absolute -left-10 md:-left-16 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 z-10 border-2 border-white"></div>
            
            <motion.div
              whileHover={{ x: 5 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 shadow-lg ml-4"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 text-purple-300 p-2">
                  {item.icon}
                </div>
                <div>
                  <span className="text-sm font-semibold text-purple-300 block mb-1">STEP {item.step}</span>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

      {/* Top Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Top Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our most popular influencer categories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.slice(0, 10).map((category, index) => (
              <CategoryCard key={category.name} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Connekkt Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Connekkt?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The trusted platform for booking verified professionals
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Shield, title: 'Verified Professionals', description: 'All influencers are background checked and verified' },
              { icon: Star, title: 'Top Rated', description: 'Only the highest rated professionals make it to our platform' },
              { icon: CheckCircle, title: 'Quality Guaranteed', description: 'Satisfaction guaranteed or your money back' },
              { icon: Users, title: '10,000+ Happy Clients', description: 'Join thousands of satisfied customers' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real experiences from real people
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUpVariants}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest updates on new influencers and exclusive offers
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Subscribe</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}