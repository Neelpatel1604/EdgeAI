// components/landing/Community.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Community() {
  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Community Initiatives</h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          We're committed to advancing AI knowledge and creating opportunities for the next generation of innovators.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <CommunityCard
            title="Edge AI Engineering Course"
            description="A self-paced program covering secure AI infrastructure, edge compute architecture, model optimization, and privacy-preserving techniques."
            tags={["Online", "Self-paced", "Certificate"]}
            buttonText="Enroll Now"
          />
          <CommunityCard
            title="GenAI Genesis Hackathon"
            description="Canada's largest AI hackathon (March 21-23, 2025) bringing together developers and researchers to create solutions using AI, with opportunities for seed funding and mentorship."
            tags={["In-person", "Prizes", "Funding"]}
            buttonText="Register Now"
          />
        </div>
      </div>
    </section>
  );
}

interface CommunityCardProps {
  title: string;
  description: string;
  tags: string[];
  buttonText: string;
}

function CommunityCard({ title, description, tags, buttonText }: CommunityCardProps) {
  return (
    <Card className="border-[#9f5396]/20 hover:border-[#9f5396]/80 transition-all overflow-hidden">
      <div className="h-3 bg-gradient-to-r from-[#9f5396] to-[#b67bad]"></div>
      <CardContent className="pt-6">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-base mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-[#9f5396]/10 text-[#9f5396] text-xs font-medium px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <Button variant="outline" className="w-full">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}