
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618255697744-b45454ae6b39?q=80&w=1374&auto=format&fit=crop')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-r from-ebike-electric-blue/80 to-ebike-forest-green/80"></div>
          </div>
          
          {/* Content */}
          <div className="relative py-16 px-8 md:py-20 md:px-12 text-white text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our E-Bike Community?</h2>
            <p className="text-white/90 text-lg mb-8">
              Experience the joy of e-biking with a community that shares your passion.
              Join events, access exclusive resources, and connect with fellow riders.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/membership">
                <Button size="lg" className="bg-white text-ebike-electric-blue hover:bg-white/90">
                  Join Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/events">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Explore Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
