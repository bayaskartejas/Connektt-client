'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Volume2, VolumeX } from 'lucide-react';

interface Professional {
  id: number;
  name: string;
  categories: string[];
  media: {
    type: string;
    url: string;
    thumbnail?: string;
  };
  rating: number;
  reviews: number;
}

const ProfessionalVideoCard = ({ professional }: { professional: Professional }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      className="relative group rounded-xl overflow-hidden aspect-square"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover="hover"
    >
      {/* Video Player */}
      <div className="absolute inset-0">
        <video 
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={professional.media.thumbnail || '/images/default-thumbnail.jpg'}
        >
          <source src={professional.media.url} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500" />
      </div>
      
      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-white" />
        ) : (
          <Volume2 className="w-5 h-5 text-white" />
        )}
      </button>
      
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
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 ${i < professional.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-700 text-gray-700'}`}
              />
            ))}
            <span className="text-sm text-gray-300 ml-1">
              ({professional.reviews} reviews)
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

};

export default ProfessionalVideoCard;