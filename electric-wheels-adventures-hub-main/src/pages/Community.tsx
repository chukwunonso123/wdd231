
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommunitySection from '@/components/CommunitySection';

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-ebike-electric-blue to-ebike-forest-green py-16">
          <div className="container">
            <h1 className="text-4xl font-bold text-white">Community</h1>
            <p className="text-white/90 mt-4 max-w-2xl">
              Connect with fellow e-bike enthusiasts, share experiences, and participate in discussions.
            </p>
          </div>
        </div>
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Community;
