'use client';

import { motion } from 'framer-motion';
import { Users, Target, Heart, Award, Zap, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
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

  const stats = [
    { number: '10,000+', label: 'Happy Clients' },
    { number: '2,500+', label: 'Verified Influencers' },
    { number: '50+', label: 'Cities Covered' },
    { number: '99.9%', label: 'Success Rate' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To connect people with the perfect influencers for their special moments, making professional services accessible to everyone.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'We believe in trust, quality, and creating memorable experiences through authentic connections between clients and professionals.'
    },
    {
      icon: Award,
      title: 'Our Promise',
      description: 'We guarantee verified professionals, transparent pricing, and exceptional service that exceeds your expectations every time.'
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Verified Professionals',
      description: 'Every influencer on our platform is thoroughly vetted and verified for your peace of mind.'
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Book your favorite influencer instantly with our seamless booking system.'
    },
    {
      icon: Globe,
      title: 'Nationwide Coverage',
      description: 'Find talented professionals in over 50+ cities across the country.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Connekkt
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            We're revolutionizing how people connect with talented influencers and creative professionals
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission, Values, Promise */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Connekkt was born from a simple yet powerful idea: making it easier for people to find and book talented professionals for their special moments. Whether it's a wedding, corporate event, or personal milestone, everyone deserves access to exceptional creative talent.
                </p>
                <p>
                  Founded in 2023, we started with a mission to bridge the gap between talented influencers and people who need their services. We noticed that finding reliable, professional, and affordable talent was often a challenge, especially for important life events.
                </p>
                <p>
                  Today, Connekkt has grown into a thriving platform that connects thousands of clients with verified professionals across multiple categories. We're proud to be the trusted choice for people looking to make their events memorable and special.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/20 to-white/5 rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-300">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied customers and find your perfect influencer today
            </p>
            
            <motion.a
              href="/influencers"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Explore Influencers
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}