
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bike, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex w-full justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Bike className="h-6 w-6 text-ebike-electric-blue" />
            <span className="font-display text-xl font-bold">ElectricRides</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/membership" className="nav-link">Membership</Link>
            <Link to="/community" className="nav-link">Community</Link>
            <Link to="/resources" className="nav-link">Resources</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/routes" className="nav-link">Routes</Link>
            <Button className="ml-4">Sign In</Button>
          </nav>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col space-y-3">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/events" className="nav-link">Events</Link>
            <Link to="/membership" className="nav-link">Membership</Link>
            <Link to="/community" className="nav-link">Community</Link>
            <Link to="/resources" className="nav-link">Resources</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/routes" className="nav-link">Routes</Link>
            <Button className="w-full mt-2">Sign In</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
