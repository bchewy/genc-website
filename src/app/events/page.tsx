import SharedLayout from "@/components/shared-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventsPage() {
  // Sample upcoming events - in a real app, these would come from a database
  const upcomingEvents = [
    {
      id: 1,
      title: "Introduction to Prompt Engineering Workshop",
      description: "Learn the fundamentals of crafting effective prompts for generative AI models.",
      date: "June 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "AWS Office, Mapletree Business City",
      category: "Workshop",
    },
    {
      id: 2,
      title: "LLM Fine-tuning Masterclass",
      description: "Advanced techniques for fine-tuning large language models for specific applications.",
      date: "June 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Online via Zoom",
      category: "Masterclass",
    },
    {
      id: 3,
      title: "Gen-C Community Meetup",
      description: "Join us for networking, knowledge sharing, and discussions on the latest in generative AI.",
      date: "July 5, 2025",
      time: "6:30 PM - 8:30 PM",
      location: "The Working Capitol, Robinson Road",
      category: "Networking",
    },
    {
      id: 4,
      title: "Generative AI in Finance Panel Discussion",
      description: "Industry experts discuss the applications and implications of generative AI in the financial sector.",
      date: "July 12, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Singapore Management University",
      category: "Panel Discussion",
    },
  ];

  // Sample past events
  const pastEvents = [
    {
      id: 101,
      title: "Building AI Applications with AWS",
      description: "A hands-on workshop on building AI-powered applications using AWS services.",
      date: "May 25, 2025",
      category: "Workshop",
    },
    {
      id: 102,
      title: "Gen-C Launch Event",
      description: "The official launch of the Gen-C community in Singapore.",
      date: "May 10, 2025",
      category: "Launch",
    },
  ];

  return (
    <SharedLayout>
      {/* Hero Section */}
      <section className="pt-12 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Events
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join us for workshops, meetups, and other events to enhance your generative AI skills and connect with the community.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">
              Upcoming Events
            </h2>

            <div className="grid grid-cols-1 gap-8">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden border-l-4 border-l-primary">
                  <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr]">
                    <div>
                      <CardHeader>
                        <div className="mb-2">
                          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {event.category}
                          </span>
                        </div>
                        <CardTitle className="text-2xl">{event.title}</CardTitle>
                        <CardDescription className="text-base">
                          {event.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-5 w-5 text-gray-400" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="h-5 w-5 text-gray-400" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="h-5 w-5 text-gray-400" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                    <div className="bg-gray-50 p-6 flex flex-col justify-center items-center">
                      <Button className="w-full mb-3">Register Now</Button>
                      <Button variant="outline" className="w-full">Add to Calendar</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">
              Past Events
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="bg-white">
                  <CardHeader>
                    <div className="mb-2">
                      <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {event.category}
                      </span>
                    </div>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between border-t pt-4">
                    <span className="text-sm text-gray-500">{event.date}</span>
                    <Button variant="ghost" size="sm">View Recording</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated on Future Events
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive notifications about upcoming events, workshops, and community activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Subscribe to Newsletter
              </Button>
              <Button size="lg" variant="outline">
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SharedLayout>
  );
} 