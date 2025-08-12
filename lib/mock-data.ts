export interface Influencer {
  id: string;
  name: string;
  business: string;
  location: string;
  rating: number;
  reviews: number;
  experience: string;
  specialties: string[];
  availableFor: string[];
  packages: {
    name: string;
    price: number;
    description?: string;
  }[];
  image: string;
  category: string;
}

export const categories = [
  { id: 'hair-stylist', name: 'Hair Stylist', icon: '✂️' },
  { id: 'makeup-artist', name: 'Makeup Artist', icon: '💄' },
  { id: 'photographer', name: 'Photographer', icon: '📸' },
  { id: 'reel-maker', name: 'Reel Maker', icon: '🎬' },
  { id: 'fashion-designer', name: 'Fashion Designer', icon: '👗' },
  { id: 'musicians-bands', name: 'Musicians + Bands', icon: '🎵' },
  { id: 'choreographers', name: 'Choreographers + Dancers', icon: '💃' },
  { id: 'wardrobe', name: 'Need A Wardrobe', icon: '👔' },
  { id: 'studio', name: 'Renting A Classy Studio', icon: '🏢' },
  { id: 'equipment', name: 'Professional Equipments', icon: '📹' },
];

export const locations = [
  'Amravati',
  'Nagpur',
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Chennai',
  'Kolkata',
  'Hyderabad',
  'Pune',
  'Ahmedabad',
];

// export const mockInfluencers: Influencer[] = [
//   {
//     id: '1',
//     name: 'Arjun Mehra',
//     profession: 'Professional Choreographer',
//     location: 'Mumbai',
//     rating: 4.9,
//     reviews: 198,
//     experience: '9+ years',
//     specialties: ['Bollywood', 'Hip-Hop', 'Contemporary'],
//     availableFor: ['Wedding Sangeet', 'Annual Gatherings', 'Corporate Shows'],
//     packages: [
//       { name: 'Solo Routine', price: 3200 },
//       { name: 'Group Performance', price: 15500 },
//       { name: 'Platinum School Package', price: 21000 },
//     ],
//     image: 'https://images.pexels.com/photos/1484727/pexels-photo-1484727.jpeg',
//     category: 'choreographers',
//   },
//   {
//     id: '2',
//     name: 'Priya Sharma',
//     profession: 'Celebrity Makeup Artist',
//     location: 'Delhi',
//     rating: 4.8,
//     reviews: 234,
//     experience: '12+ years',
//     specialties: ['Bridal Makeup', 'HD Makeup', 'Special Effects'],
//     availableFor: ['Weddings', 'Fashion Shoots', 'Events'],
//     packages: [
//       { name: 'Bridal Package', price: 8500 },
//       { name: 'Party Makeup', price: 4200 },
//       { name: 'Photoshoot Glam', price: 6800 },
//     ],
//     image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg',
//     category: 'makeup-artist',
//   },
//   {
//     id: '3',
//     name: 'Rohit Kapoor',
//     profession: 'Fashion Photographer',
//     location: 'Bangalore',
//     rating: 4.7,
//     reviews: 156,
//     experience: '8+ years',
//     specialties: ['Portrait', 'Fashion', 'Commercial'],
//     availableFor: ['Fashion Shoots', 'Portfolio Building', 'Brand Campaigns'],
//     packages: [
//       { name: 'Basic Portfolio', price: 12000 },
//       { name: 'Premium Fashion Shoot', price: 25000 },
//       { name: 'Commercial Campaign', price: 45000 },
//     ],
//     image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg',
//     category: 'photographer',
//   },
//   {
//     id: '4',
//     name: 'Sneha Patel',
//     profession: 'Hair Styling Expert',
//     location: 'Mumbai',
//     rating: 4.9,
//     reviews: 289,
//     experience: '11+ years',
//     specialties: ['Bridal Hair', 'Color Specialist', 'Keratin Treatments'],
//     availableFor: ['Weddings', 'Fashion Shows', 'Personal Styling'],
//     packages: [
//       { name: 'Bridal Hair Package', price: 7500 },
//       { name: 'Color & Cut', price: 4800 },
//       { name: 'Special Occasion Styling', price: 3500 },
//     ],
//     image: 'https://images.pexels.com/photos/3865711/pexels-photo-3865711.jpeg',
//     category: 'hair-stylist',
//   },
//   {
//     id: '5',
//     name: 'Vikash Singh',
//     profession: 'Content Creator & Reel Maker',
//     location: 'Delhi',
//     rating: 4.6,
//     reviews: 145,
//     experience: '5+ years',
//     specialties: ['Instagram Reels', 'YouTube Shorts', 'Brand Content'],
//     availableFor: ['Brand Campaigns', 'Personal Branding', 'Product Launches'],
//     packages: [
//       { name: 'Basic Reel Package', price: 2500 },
//       { name: 'Brand Campaign Reels', price: 8500 },
//       { name: 'Complete Content Strategy', price: 18000 },
//     ],
//     image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
//     category: 'reel-maker',
//   },
//   {
//     id: '6',
//     name: 'Anita Desai',
//     profession: 'Fashion Designer',
//     location: 'Chennai',
//     rating: 4.8,
//     reviews: 167,
//     experience: '15+ years',
//     specialties: ['Traditional Wear', 'Contemporary Fashion', 'Bridal Couture'],
//     availableFor: ['Custom Designs', 'Fashion Shows', 'Wardrobe Consultation'],
//     packages: [
//       { name: 'Custom Outfit Design', price: 15000 },
//       { name: 'Bridal Couture', price: 35000 },
//       { name: 'Wardrobe Makeover', price: 22000 },
//     ],
//     image: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg',
//     category: 'fashion-designer',
//   },
// ];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Bride',
    content: 'Connektt helped me find the perfect makeup artist for my wedding. The booking process was seamless!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Raj Patel',
    role: 'Event Organizer',
    content: 'Amazing platform! Found a choreographer for our corporate event within minutes. Highly recommended.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Meera Kulkarni',
    role: 'Influencer',
    content: 'As a photographer, Connektt has connected me with amazing clients. Great platform for professionals!',
    rating: 5,
  },
];

export const professionals = [
  {
    id: 1,
    name: "Akshay Mankar",
    categories: ["Hair Stylist", "Fashion"],
    media: {
      type: "video",
      url: "/videos/Akshay_mankar_Hairstylist.mp4",
      thumbnail: "/images/professionals/akshay-thumb.jpg"
    },
    rating: 5,
    reviews: 124,
  },
  {
    id: 2,
    name: "Kashmira",
    categories: ["Choreographer"],
    media: {
      type: "video",
      url: "/videos/Kashmira_Choreographer1.mp4"
    },
    rating: 4,
    reviews: 89,
  },
  {
    id: 3,
    name: "Yashraj",
    categories: ["Singer", "Band"],
    media: {
      type: "video",
      url: "/videos/Yashraj_Singer.mp4"
    },
    rating: 5,
    reviews: 29,
  },
  {
    id: 4,
    name: "Shraddha Mankar",
    categories: ["Makeup Artist"],
    media: {
      type: "image",
      url: "/images/Shraddha_mankar_MakeupArtistImg.jpg"
    },
    rating: 5,
    reviews: 109,
  },
  {
    id: 5,
    name: "Yashraj Band",
    categories: ["Band", "Singer"],
    media: {
      type: "video",
      url: "/videos/Yashraj_Singer_live.mp4"
    },
    rating: 4,
    reviews: 89,
  },
  {
    id: 6,
    name: "Shraddha Mankar",
    categories: ["Makeup Artist"],
    media: {
      type: "video",
      url: "/videos/Shraddha_mankar_MakeupArtist.mp4"
    },
    rating: 4,
    reviews: 89,
  },

  // ... other professionals
];