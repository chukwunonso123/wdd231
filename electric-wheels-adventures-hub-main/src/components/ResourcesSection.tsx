
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, Battery, Bike, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourcesSection = () => {
  const resources = [
    {
      icon: <Wrench className="h-8 w-8 text-ebike-electric-blue" />,
      title: "Maintenance Guide",
      description: "Essential tips for keeping your e-bike in top condition, including battery care, cleaning, and regular check-ups.",
      link: "/resources/maintenance"
    },
    {
      icon: <Battery className="h-8 w-8 text-ebike-forest-green" />,
      title: "Battery Optimization",
      description: "Learn how to maximize your battery life and get the most range from each charge.",
      link: "/resources/battery"
    },
    {
      icon: <Bike className="h-8 w-8 text-ebike-sunset-orange" />,
      title: "Choosing an E-Bike",
      description: "Comprehensive guide to help you select the perfect e-bike based on your needs and preferences.",
      link: "/resources/buying-guide"
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-ebike-energy-yellow" />,
      title: "Essential Accessories",
      description: "Recommended accessories to enhance safety, comfort, and functionality of your e-bike rides.",
      link: "/resources/accessories"
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">E-Bike Resources</h2>
            <p className="text-gray-600 max-w-2xl">
              Educational content to help you get the most out of your e-bike experience.
            </p>
          </div>
          <Link to="/resources">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Resources
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="mb-2">{resource.icon}</div>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 min-h-[80px]">
                  {resource.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={resource.link}>
                  <Button variant="ghost" className="p-0 h-auto">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
