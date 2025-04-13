
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const CommunitySection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Club Member since 2021",
      quote: "Joining ElectricRides was the best decision I've made for my outdoor lifestyle. The community is welcoming, and I've discovered trails I never knew existed!",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Michael Chen",
      title: "Premium Member",
      quote: "Not only have I made great friends, but the technical support from fellow members has helped me get the most out of my e-bike. Can't imagine riding without this group now.",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      name: "Elena Rodriguez",
      title: "Event Coordinator",
      quote: "What started as curiosity about e-bikes turned into a passion. The club's events and resources made the transition easy, and now I help organize rides for new members.",
      avatar: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Community</h2>
          <p className="text-gray-300 text-lg">
            Hear from our members about their experiences and adventures with ElectricRides.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 card-hover">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="rounded-full w-20 h-20 border-2 border-ebike-electric-blue"
                  />
                </div>
                <blockquote className="text-gray-300 text-center mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center">
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-ebike-electric-blue to-ebike-forest-green rounded-xl p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join the Conversation</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with fellow e-bike enthusiasts, share your experiences, and get advice in our community forum.
          </p>
          <Link to="/community">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <MessageCircle className="mr-2 h-5 w-5" /> Visit Community Forum
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
