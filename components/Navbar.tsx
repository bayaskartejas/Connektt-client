'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Professionals', href: '/influencers' },
    { name: 'Discover', href: '/discover' },
    { name: 'Journey', href: '/journey' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl lg:text-3xl font-bold text-white">
              CONNEKTT
            </Link>
            
            

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Book Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="w-full flex justify-between items-center border-2 border-white rounded-full pr-4 pl-4 py-2 text-white hover:bg-white hover:text-black hover:font-semibold
                transition-all duration-300"
              >
                Book Now
              </Link>


              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-white p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Offcanvas Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Offcanvas */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-black border-l border-gray-800 z-50 lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold text-white">CONNEKTT</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white p-2"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block text-white text-lg font-medium py-3 border-b border-gray-800 hover:text-gray-300 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-4"
                  >
                    <Link
                      href="/book"
                      onClick={() => setIsOpen(false)}
                      className="w-full flex justify-center items-center border-2 border-white rounded-full pr-4 pl-4 py-2 text-white hover:bg-white hover:text-black hover:font-bold transition-all duration-300"
                    >
                      Book a Professional
                    </Link>

                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;