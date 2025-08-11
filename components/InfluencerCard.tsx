'use client';

import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Award } from 'lucide-react';
import { Influencer } from '@/lib/mock-data';
import Link from 'next/link';

interface InfluencerCardProps {
  influencer: Influencer;
  index: number;
}

export default function InfluencerCard({ influencer, index }: InfluencerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
    >
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center text-2xl">
          {influencer.profession.includes('Choreographer') && '💃'}
          {influencer.profession.includes('Makeup') && '💄'}
          {influencer.profession.includes('Photographer') && '📸'}
          {influencer.profession.includes('Hair') && '✂️'}
          {influencer.profession.includes('Content') && '🎬'}
          {influencer.profession.includes('Fashion') && '👗'}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">
            {influencer.name} – {influencer.profession}
          </h3>
          <div className="flex items-center space-x-4 text-gray-300 text-sm">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {influencer.location}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
              {influencer.rating} ({influencer.reviews} reviews)
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center text-gray-300 text-sm">
          <Clock className="w-4 h-4 mr-2" />
          <span>Experience: {influencer.experience}</span>
        </div>

        <div>
          <div className="flex items-center text-white text-sm font-medium mb-2">
            <Award className="w-4 h-4 mr-2" />
            Specialties:
          </div>
          <div className="flex flex-wrap gap-2">
            {influencer.specialties.map((specialty, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white/20 rounded-full text-xs text-white"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">📅 Available for:</h4>
          <ul className="space-y-1">
            {influencer.availableFor.map((service, idx) => (
              <li key={idx} className="text-gray-300 text-sm flex items-center">
                <span className="w-2 h-2 bg-white/60 rounded-full mr-2"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3">💼 Service Packages:</h4>
          <div className="space-y-2">
            {influencer.packages.map((pkg, idx) => (
              <div key={idx} className="flex justify-between items-center text-sm">
                <span className="text-gray-300">{idx + 1}. {pkg.name}</span>
                <span className="text-white font-semibold">₹{pkg.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

        <Link href={`/book?influencer=${influencer.id}`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 mt-4"
          >
            Book Now
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}