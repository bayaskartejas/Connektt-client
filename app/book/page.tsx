'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Star, Calendar, User, Mail, Phone, CreditCard, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Influencer } from '@/lib/mock-data';
import { useProfessionals } from '../context/ProfessionalsContext';

function BookingContent() {
  const searchParams = useSearchParams();
  const {professionals} = useProfessionals()
  const [influencer, setInfluencer] = useState<Influencer | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    selectedPackage: '',
    eventDetails: '',
    address: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  useEffect(() => {
    const influencerId = searchParams.get('influencer');
    if (influencerId) {
      const foundInfluencer = professionals.find(inf => inf.id === influencerId);
      setInfluencer(foundInfluencer || null);
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 4) {
      // Process booking
      console.log('Booking submitted:', formData);
      alert('Booking confirmed! You will receive a confirmation email shortly.');
    } else {
      handleNextStep();
    }
  };

  const getSelectedPackage = () => {
    if (!influencer || !formData.selectedPackage) return null;
    return influencer.packages.find(pkg => pkg.name === formData.selectedPackage);
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (!influencer) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Influencer Not Found</h1>
            <p className="text-gray-300 mb-8">The influencer you're looking for doesn't exist.</p>
            <a
              href="/influencers"
              className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Browse Influencers
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Event Details', icon: Calendar },
    { number: 3, title: 'Package Selection', icon: Star },
    { number: 4, title: 'Payment', icon: CreditCard }
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Book Your Session</h1>
            <p className="text-xl text-gray-300">
              Complete your booking with {influencer.name}
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step.number 
                      ? 'bg-white text-black border-white' 
                      : 'bg-transparent text-white border-white/30'
                  }`}>
                    {currentStep > step.number ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-6 h-6" />
                    )}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <p className={`text-sm font-medium ${
                      currentStep >= step.number ? 'text-white' : 'text-gray-400'
                    }`}>
                      Step {step.number}
                    </p>
                    <p className={`text-lg ${
                      currentStep >= step.number ? 'text-white' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`hidden md:block w-24 h-0.5 ml-8 ${
                      currentStep > step.number ? 'bg-white' : 'bg-white/30'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                            placeholder="Enter your full name"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Event Details */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold mb-6">Event Details</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Event Date *
                          </label>
                          <input
                            type="date"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Event Time *
                          </label>
                          <input
                            type="time"
                            name="eventTime"
                            value={formData.eventTime}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Event Address *
                        </label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                          placeholder="Enter the complete event address"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Additional Details
                        </label>
                        <textarea
                          name="eventDetails"
                          value={formData.eventDetails}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                          placeholder="Tell us more about your event..."
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Package Selection */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold mb-6">Select Package</h2>
                      
                      <div className="space-y-4">
                        {influencer.packages.map((pkg, index) => (
                          <label key={index} className="block">
                            <input
                              type="radio"
                              name="selectedPackage"
                              value={pkg.name}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                              formData.selectedPackage === pkg.name
                                ? 'border-white bg-white/20'
                                : 'border-white/30 bg-white/10 hover:border-white/50'
                            }`}>
                              <div className="flex justify-between items-center">
                                <div>
                                  <h3 className="text-lg font-semibold text-white">{pkg.name}</h3>
                                  {pkg.description && (
                                    <p className="text-gray-300 text-sm mt-1">{pkg.description}</p>
                                  )}
                                </div>
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-white">₹{pkg.price.toLocaleString()}</div>
                                </div>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Payment */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Payment Method
                          </label>
                          <select
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                          >
                            <option value="card" className="text-black">Credit/Debit Card</option>
                            <option value="upi" className="text-black">UPI</option>
                            <option value="netbanking" className="text-black">Net Banking</option>
                          </select>
                        </div>

                        {formData.paymentMethod === 'card' && (
                          <>
                            <div>
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                Card Number *
                              </label>
                              <input
                                type="text"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                required
                                placeholder="1234 5678 9012 3456"
                                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                              />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                  Expiry Date *
                                </label>
                                <input
                                  type="text"
                                  name="expiryDate"
                                  value={formData.expiryDate}
                                  onChange={handleInputChange}
                                  required
                                  placeholder="MM/YY"
                                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                  CVV *
                                </label>
                                <input
                                  type="text"
                                  name="cvv"
                                  value={formData.cvv}
                                  onChange={handleInputChange}
                                  required
                                  placeholder="123"
                                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                  Cardholder Name *
                                </label>
                                <input
                                  type="text"
                                  name="cardName"
                                  value={formData.cardName}
                                  onChange={handleInputChange}
                                  required
                                  placeholder="John Doe"
                                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                      >
                        Previous
                      </button>
                    )}
                    
                    <div className="ml-auto">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all duration-300"
                      >
                        {currentStep === 4 ? 'Complete Booking' : 'Next Step'}
                      </motion.button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <motion.div
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 sticky top-24"
              >
                <h3 className="text-xl font-bold mb-6">Booking Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center text-2xl">
                      {influencer.business.includes('Choreographer') && '💃'}
                      {influencer.business.includes('Makeup') && '💄'}
                      {influencer.business.includes('Photographer') && '📸'}
                      {influencer.business.includes('Hair') && '✂️'}
                      {influencer.business.includes('Content') && '🎬'}
                      {influencer.business.includes('Fashion') && '👗'}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{influencer.name}</h4>
                      <p className="text-gray-300 text-sm">{influencer.business}</p>
                      <div className="flex items-center mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-300">{influencer.rating} ({influencer.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <div className="space-y-2">
                      {formData.eventDate && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">Date:</span>
                          <span className="text-white">{formData.eventDate}</span>
                        </div>
                      )}
                      {formData.eventTime && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">Time:</span>
                          <span className="text-white">{formData.eventTime}</span>
                        </div>
                      )}
                      {formData.selectedPackage && (
                        <div className="flex justify-between">
                          <span className="text-gray-300">Package:</span>
                          <span className="text-white">{formData.selectedPackage}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {getSelectedPackage() && (
                    <div className="border-t border-white/20 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-white">Total:</span>
                        <span className="text-2xl font-bold text-white">
                          ₹{getSelectedPackage()!.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function Book() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}