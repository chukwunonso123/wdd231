
import React from 'react';
import { BatteryCharging, Map, Users, Shield } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-ebike-electric-blue" />,
      title: "Community",
      description: "Connect with like-minded e-bike enthusiasts and build lasting friendships."
    },
    {
      icon: <Map className="h-10 w-10 text-ebike-forest-green" />,
      title: "Adventure",
      description: "Discover new trails and scenic routes that are perfect for e-bikes."
    },
    {
      icon: <BatteryCharging className="h-10 w-10 text-ebike-energy-yellow" />,
      title: "Support",
      description: "Get assistance with maintenance, repairs, and technical advice."
    },
    {
      icon: <Shield className="h-10 w-10 text-ebike-sunset-orange" />,
      title: "Safety",
      description: "Learn best practices for safe riding in urban and trail environments."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Club</h2>
          <p className="text-gray-600 text-lg">
            Founded in 2020, ElectricRides has grown into a thriving community of e-bike enthusiasts
            who share a passion for exploration, technology, and eco-friendly transportation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md card-hover">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
