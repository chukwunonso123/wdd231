
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606926694526-073434dbc300?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="container relative pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Discover Your City <br />
            <span className="text-ebike-electric-blue">On Two Wheels</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Join our vibrant e-bike community to explore new trails, meet fellow riders,
            and embrace the joy of electric-powered adventures.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="btn-primary">
              <Link to="/membership" className="flex items-center">
                Join The Club <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Link to="/events">Upcoming Rides</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
