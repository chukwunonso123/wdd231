
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Downtown Exploration Ride",
      date: "Apr 15, 2025",
      time: "9:00 AM",
      location: "City Park Entrance",
      description: "A leisurely ride through downtown, exploring urban trails and scenic spots.",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1626663011551-5cd4ed7364b0?q=80&w=1374&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Mountain Trail Adventure",
      date: "Apr 22, 2025",
      time: "8:30 AM",
      location: "Mountain Base Station",
      description: "Experience thrilling mountain trails with spectacular views and challenging terrain.",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=1374&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Sunset Beach Cruise",
      date: "Apr 29, 2025",
      time: "5:00 PM",
      location: "Beachfront Pavilion",
      description: "Ride along the stunning coastline and enjoy the sunset with fellow e-bikers.",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1595703013566-db085ae93c04?q=80&w=1374&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl">
              Join us for organized rides and social gatherings. Our events cater to all experience levels.
            </p>
          </div>
          <Link to="/events">
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Events
            </Button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{event.date}</span>
                  <Clock className="ml-4 mr-1 h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4" /> {event.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{event.description}</p>
                <div className="mt-4 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                  <Users className="mr-1 h-3 w-3" /> {event.difficulty}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
