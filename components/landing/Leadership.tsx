import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl  md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#022179] to-[#9f5396]">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <LeaderCard
            name="Tara Khani"
            title="Co-Founder and CEO"
            imagePath="/pic_tara.png"
            bio="With 17 years of experience in engineering and leadership, Tara brings expertise from major firms such as Keyence, Mitutoyo, and SOTI. Her background includes senior engineering roles, enterprise management, and deep understanding of customer needs."
            linkedinUrl="https://www.linkedin.com/in/tara-khani-297103b/"
          />
          <LeaderCard
            name="Dr. Majid Fekri"
            title="Co-Founder and CTO"
            imagePath="/pic_majid.png"
            bio="With 12 years of experience in data science and AI, Dr. Fekri holds a PhD in Atmospheric Sciences from McGill University. His blend of scientific knowledge and practical data science expertise drives our technological innovations."
            linkedinUrl="https://www.linkedin.com/in/majid-fekri/"
          />
        </div>
      </div>
    </section>
  );
}

interface LeaderCardProps {
  name: string;
  title: string;
  imagePath: string;
  bio: string;
  linkedinUrl: string;
}

function LeaderCard({ name, title, imagePath, bio, linkedinUrl }: LeaderCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all">
      <div className="h-64 bg-gradient-to-r from-[#9f5396]/20 to-[#9f5396]/40 flex items-center justify-center relative">
        <Image 
          src={imagePath} 
          alt={name}
          width={240}
          height={240}
          className="rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-lg font-medium text-muted-foreground mb-4">{title}</p>
        <p className="text-base mb-4">{bio}</p>
        <div className="flex gap-3">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#9f5396]">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" className="text-muted-foreground hover:text-[#9f5396] hidden">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}