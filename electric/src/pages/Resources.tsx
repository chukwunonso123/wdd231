
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResourcesSection from '@/components/ResourcesSection';

const Resources = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-ebike-electric-blue to-ebike-forest-green py-16">
          <div className="container">
            <h1 className="text-4xl font-bold text-white">E-Bike Resources</h1>
            <p className="text-white/90 mt-4 max-w-2xl">
              Access guides, tutorials, and expert advice to enhance your e-biking experience.
            </p>
          </div>
        </div>
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
