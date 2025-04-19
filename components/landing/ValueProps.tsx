// components/landing/ValueProps.tsx
import React from "react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, MessageSquareText, Server, RefreshCw, Database, ShieldCheck } from "lucide-react";

export function ValueProps() {
  return (
    <section id="value-props" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#022179] to-[#9f5396]">
          Why Choose Moorche Serverless RAG?
        </h2>
        
        <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Moorche is a revolutionary mathematical and algorithmic approach to Vector Search, enabling efficient AI chatbots on edge devices and serverless platforms.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueCard 
            icon={<Shield className="h-6 w-6 text-[#9f5396]" />}
            title="Privacy First"
            description="Maintain strict data privacy and comply with industry regulations while developing your own customer-facing AI Chatbots and Agents."
          />
          <ValueCard 
            icon={<Database className="h-6 w-6 text-[#9f5396]" />}
            title="Superior Performance"
            description="Moorche offers 40% Higher Semantic Accuracy, requires 32x Less Memory, and 100x Less Computation compared to other vector search methods."
          />
          <ValueCard 
            icon={<Server className="h-6 w-6 text-[#9f5396]" />}
            title="No Server Costs"
            description="Run a full RAG system on Edge or Serverless Cloud with no need to pay for servers or clusters. Resources are only used during interaction."
          />
          <ValueCard 
            icon={<MessageSquareText className="h-6 w-6 text-[#9f5396]" />}
            title="Simple Integration"
            description="Test and customize on Moorche Serverless RAG. Deploy on your website or application with a simple API and scale to millions of documents."
          />
          <ValueCard 
            icon={<RefreshCw className="h-6 w-6 text-[#9f5396]" />}
            title="Model Flexibility"
            description="Moorche is compatible with all embedding models, LLMs, and multimodal AI models. Switch seamlessly between foundation models as they become available."
          />
          <ValueCard 
            icon={<ShieldCheck className="h-6 w-6 text-[#9f5396]" />}
            title="Kiosk Mode Security"
            description="Moorche is the only RAG system with pre-emptive guardrails. When active, responses are restricted to questions about uploaded documents only."
          />
        </div>
      </div>
    </section>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <Card className="border-[#022179]/20 hover:border-[#022179]/80 transition-all overflow-hidden group">
      <div className="h-2 bg-gradient-to-r from-[#b67bad] to-[#022179]"></div>
      <CardContent className="pt-6 relative">
        <div className="h-12 w-12 bg-[#9f5396]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#9f5396]/20 transition-all">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold mb-2 group-hover:text-[#9f5396] transition-all">{title}</CardTitle>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}