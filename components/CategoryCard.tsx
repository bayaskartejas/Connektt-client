'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    icon: string;
  };
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <Link href={`/influencers?category=${encodeURIComponent(category.name)}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ 
          scale: 1.05, 
          y: -5,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl lg:p-10 p-5 border border-white/20 hover:border-white/40 transition-all duration-300 text-center group cursor-pointer lg:h-48"
      >
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
          className="md:text-5xl text-3xl mb-4 group-hover:scale-110 transition-transform duration-300"
        >
          {category.icon}
        </motion.div>
        <h3 className="lg:text-xl text-sm font-semibold text-white group-hover:text-gray-200 transition-colors">
          {category.name}
        </h3>
      </motion.div>
    </Link>
  );
}