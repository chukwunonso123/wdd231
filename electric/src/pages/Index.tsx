
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import MembershipSection from '@/components/MembershipSection';
import ResourcesSection from '@/components/ResourcesSection';
import CommunitySection from '@/components/CommunitySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <EventsSection />
        <MembershipSection />
        <CommunitySection />
        <ResourcesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
