// components/landing/VideoSection.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

export function VideoSection() {
  const videos = [
    {
      id: "elU01SbNaqw",
      title: "Moorche Serverless RAG Demonstration",
      url: "https://youtu.be/elU01SbNaqw",
    },
    {
      id: "lVZz56UyQ6I",
      title: "Edge AI Platform Overview",
      url: "https://youtu.be/lVZz56UyQ6I",
    },
  ];

  return (
    <section id="videos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl  md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#022179] to-[#9f5396]">
          See Moorche in Action
        </h2>
        <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Watch our demos to see how Moorche Serverless RAG works and how it can transform your AI applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videos.map((video) => (
            <VideoCard key={video.id} id={video.id} title={video.title} url={video.url} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface VideoCardProps {
  id: string;
  title: string;
  url: string;
}

function VideoCard({ id, title, url }: VideoCardProps) {
  return (
    <Card className="border-[#022179]/20 hover:border-[#022179]/80 transition-all overflow-hidden group">
      <div className="h-2 bg-gradient-to-r from-[#b67bad] to-[#022179]"></div>
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold group-hover:text-[#9f5396] transition-all">{title}</h3>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center text-[#9f5396] font-medium hover:underline"
          >
            <Play className="h-4 w-4 mr-1" /> Watch on YouTube
          </a>
        </div>
      </CardContent>
    </Card>
  );
}