import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SummitPage() {
  const upcomingEvent = {
    title: "Edge AI Innovations Summit 2023",
    date: "November 15-17, 2023",
    location: "Hyatt Regency, Toronto, Canada",
    description: "Join industry leaders, researchers, and practitioners for three days of in-depth discussions, workshops, and networking focused on the latest advancements in Edge AI technologies.",
    features: [
      "Keynote presentations from AI industry leaders",
      "Technical workshops on implementing Edge AI solutions",
      "Networking opportunities with leading experts",
      "Product demonstrations and case studies",
      "Panel discussions on the future of AI at the edge"
    ]
  };

  return (
    <div className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#022179] to-[#b67bad]">
            Edge AI Innovations Summit
          </h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Connecting leaders and innovators in the Edge AI ecosystem
          </p>
          
          <Card className="border-[#022179]/20 overflow-hidden mb-12">
            <div className="h-2 bg-gradient-to-r from-[#b67bad] to-[#022179]"></div>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">{upcomingEvent.title}</h2>
              
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-[#9f5396]" />
                  <span>{upcomingEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-[#9f5396]" />
                  <span>{upcomingEvent.location}</span>
                </div>
              </div>
              
              <p className="text-lg mb-8">{upcomingEvent.description}</p>
              
              <h3 className="text-xl font-bold mb-4">Event Highlights</h3>
              <ul className="grid gap-2 mb-8">
                {upcomingEvent.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-6 w-6 flex-shrink-0 rounded-full bg-[#9f5396]/10 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-[#9f5396]"></div>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#022179] hover:bg-[#022179]/90 text-white">
                  Register Now
                </Button>
                <Button variant="outline">
                  View Full Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-[#022179]/20 hover:border-[#022179]/80 transition-all overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Past Recordings</h3>
                <p className="text-muted-foreground mb-4">
                  Access recordings and materials from our previous summits and webinars.
                </p>
                <Button variant="outline" className="w-full">Browse Library</Button>
              </CardContent>
            </Card>
            
            <Card className="border-[#022179]/20 hover:border-[#022179]/80 transition-all overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Become a Speaker</h3>
                <p className="text-muted-foreground mb-4">
                  Share your expertise and insights with our community of AI professionals.
                </p>
                <Button variant="outline" className="w-full">Submit Proposal</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 