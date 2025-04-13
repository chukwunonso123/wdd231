
import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bike className="h-6 w-6 text-ebike-electric-blue" />
              <span className="font-display text-xl font-bold">ElectricRides</span>
            </div>
            <p className="text-gray-400">
              Bringing e-bike enthusiasts together for adventure, community, and sustainable exploration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white">Events</Link></li>
              <li><Link to="/membership" className="text-gray-400 hover:text-white">Membership</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-white">Community</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white">Resources</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Safety Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Partner With Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-ebike-electric-blue shrink-0 mt-1" />
                <span className="text-gray-400">123 Trail Road, Bikeville, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-ebike-electric-blue" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-ebike-electric-blue" />
                <span className="text-gray-400">info@electricrides.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ElectricRides Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
