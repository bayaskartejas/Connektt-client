'use client';

import { motion } from 'framer-motion';
import { Users, Rocket, Search, Code, Shield, Calendar, Lightbulb, Handshake, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OurJourney() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Journey
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            From Vision To Reality - The Story Of Connektt
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                The Minds Behind Connektt
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the passionate individuals building the future of creative collaboration
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
              {
                name: "Tushar Deshmukh",
                role: "Founder & Visionary Leader",
                description: "Drives the vision, strategy, and overall direction of Connektt",
                icon: <Rocket className="w-6 h-6" />
              },
              {
                name: "Prem Ardak",
                role: "Co-Founder, Operations Head & Cybersecurity Professional",
                description: "Leads platform operations, ensures smooth execution, and oversees platform security",
                icon: <Shield className="w-6 h-6" />
              },
              {
                name: "Prajwal Kukatkar",
                role: "Marketing Head & Expansion Lead",
                description: "Drives brand growth, partnerships, and nationwide market expansion",
                icon: <Users className="w-6 h-6" />
              },
              {
                name: "Tejas Bayaskar",
                role: "Tech Head & Developer",
                description: "Oversees platform architecture, development, and continuous innovation",
                icon: <Code className="w-6 h-6" />
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:bg-gray-800/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 text-purple-300">
                  {member.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-300 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                From Vision to Reality
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Follow our journey of innovation and growth
            </p>
          </motion.div>

          <div className="relative pl-8 md:pl-16">
            {/* Vertical timeline line */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>

            {[
              {
                date: "December 2024",
                title: "The Beginning",
                description: "Identified a major gap in connecting creative professionals with clients instantly",
                icon: <Lightbulb className="w-5 h-5" />
              },
              {
                date: "January 2025",
                title: "Team Formation",
                description: "Tushar joined hands with Prem, Prajwal, and Mandar to bring the vision to life",
                icon: <Handshake className="w-5 h-5" />
              },
              {
                date: "February 2025",
                title: "Research Phase",
                description: "Conducted in-depth research on market gaps, competitor analysis, and pricing models",
                icon: <Search className="w-5 h-5" />
              },
              {
                date: "March 2025",
                title: "Prototype Development",
                description: "Started building the Connektt prototype with real service provider profiles",
                icon: <Layers className="w-5 h-5" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pb-12 pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white flex items-center justify-center">
                  {item.icon}
                </div>
                
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <p className="text-sm font-semibold text-purple-300 mb-1">{item.date}</p>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '10,000+', label: 'Happy Clients' },
              { number: '2,500+', label: 'Verified Influencers' },
              { number: '50+', label: 'Cities Covered' },
              { number: '99.9%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                className="text-center p-6 bg-gray-900/50 rounded-xl"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the revolution in creative professional connections
            </p>
            
            <motion.div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="/influencers"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-all duration-300"
              >
                Find Talent
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white/10 border border-white/20 text-white font-bold py-4 px-8 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}