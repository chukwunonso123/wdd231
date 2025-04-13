
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MembershipSection from '@/components/MembershipSection';

const Membership = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-ebike-electric-blue to-ebike-forest-green py-16">
          <div className="container">
            <h1 className="text-4xl font-bold text-white">Join Our Club</h1>
            <p className="text-white/90 mt-4 max-w-2xl">
              Become a member of our thriving e-bike community and enjoy exclusive benefits and access.
            </p>
          </div>
        </div>
        <MembershipSection />
      </main>
      <Footer />
    </div>
  );
};

export default Membership;
