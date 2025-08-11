import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Connekkt - Find & Book Your Perfect Influencer',
  description: 'Connect with verified influencers and creative professionals. From hair stylists to choreographers, book your perfect match for any occasion.',
  keywords: 'influencers, booking, hair stylist, makeup artist, photographer, choreographer, fashion designer, content creator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}