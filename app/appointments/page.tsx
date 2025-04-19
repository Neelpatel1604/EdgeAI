// app/appointments/page.tsx
import React from "react";
import { Calendar, Clock, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AppointmentsPage() {
  const appointmentTypes = [
    {
      title: "Product Demo",
      description: "See our Edge AI platform in action with a personalized demo",
      duration: "30 min",
      icon: <Video className="h-6 w-6 text-[#9f5396]" />
    },
    {
      title: "Consultation",
      description: "Discuss your AI needs with our solution architects",
      duration: "45 min",
      icon: <Users className="h-6 w-6 text-[#9f5396]" />
    },
    {
      title: "Technical Deep Dive",
      description: "Explore the technical aspects of our platform with our engineers",
      duration: "60 min",
      icon: <Clock className="h-6 w-6 text-[#9f5396]" />
    }
  ];
  
  return (
    <div className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#022179] to-[#b67bad]">
            Schedule an Appointment
          </h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Book time with our team to learn more about our AI solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {appointmentTypes.map((type, index) => (
              <Card key={index} className="border-[#022179]/20 hover:border-[#022179]/80 transition-all overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-[#b67bad] to-[#022179]"></div>
                <CardHeader>
                  <div className="h-12 w-12 bg-[#9f5396]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#9f5396]/20 transition-all">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-[#9f5396] transition-all">
                    {type.title}
                  </CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4" />
                    <span>{type.duration}</span>
                  </div>
                  <Button className="w-full bg-[#022179] hover:bg-[#022179]/90 text-white">
                    Book {type.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="border-[#022179]/20 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-[#b67bad] to-[#022179]"></div>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Need a customized session?</h3>
                  <p className="text-muted-foreground mb-6">
                    If you have specific requirements or would like a tailored session with our team, we're happy to accommodate your needs.
                  </p>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Contact Us
                  </Button>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="h-48 w-48 rounded-full bg-gradient-to-r from-[#9f5396]/20 to-[#022179]/20 flex items-center justify-center">
                    <Calendar className="h-16 w-16 text-[#9f5396]" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}