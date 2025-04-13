
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventsSection from '@/components/EventsSection';

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-ebike-electric-blue to-ebike-forest-green py-16">
          <div className="container">
            <h1 className="text-4xl font-bold text-white">Upcoming Events</h1>
            <p className="text-white/90 mt-4 max-w-2xl">
              Join our organized rides, workshops, and social gatherings for e-bike enthusiasts of all levels.
            </p>
          </div>
        </div>
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Events;
