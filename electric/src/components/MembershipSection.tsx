
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const MembershipSection = () => {
  const tiers = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for newcomers",
      features: [
        "Access to community forum",
        "Monthly newsletter",
        "Attend public events",
        "Basic route maps",
      ]
    },
    {
      name: "Standard",
      price: "$49/year",
      description: "Our most popular option",
      features: [
        "All Basic features",
        "Priority event registration",
        "Exclusive group rides",
        "10% discount on merchandise",
        "Access to premium routes",
      ],
      highlight: true
    },
    {
      name: "Premium",
      price: "$99/year",
      description: "For dedicated enthusiasts",
      features: [
        "All Standard features",
        "Quarterly maintenance clinics",
        "20% discount on merchandise",
        "Guest passes for friends",
        "Complete route library access",
        "Special partner discounts",
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Membership Benefits</h2>
          <p className="text-gray-600 text-lg">
            Join our community and enjoy exclusive benefits designed to enhance your e-biking experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`${
                tier.highlight 
                  ? 'border-ebike-electric-blue shadow-lg relative' 
                  : 'border-gray-200'
              } bg-white rounded-xl border-2 p-8`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-ebike-electric-blue text-white py-1 px-4 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <div className="mt-4 mb-4">
                <span className="text-3xl font-bold">{tier.price}</span>
              </div>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-ebike-forest-green shrink-0 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/membership">
                <Button 
                  className={`w-full ${tier.highlight ? 'btn-primary' : ''}`}
                  variant={tier.highlight ? "default" : "outline"}
                >
                  {tier.name === "Basic" ? "Join for Free" : "Select Plan"}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
