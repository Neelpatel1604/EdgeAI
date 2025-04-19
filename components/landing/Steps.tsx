import React from "react";
import { Lock, Server, Brain, Zap, RefreshCw, Cpu, ChevronRight } from "lucide-react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Steps() {
  const steps = [
    {
      number: 1,
      title: "Log in to Moorche Serverless RAG",
      description: "Secure access to our platform with enterprise-grade authentication",
      icon: Lock,
      color: "from-blue-400 to-indigo-600"
    },
    {
      number: 2,
      title: "Upload your Documents",
      description: "Upload PDFs, Word docs, or text files to train your assistant",
      icon: Server,
      color: "from-indigo-500 to-purple-600"
    },
    {
      number: 3,
      title: "Choose an AI model",
      description: "Select from multiple AI models optimized for different use cases",
      icon: Brain,
      color: "from-purple-500 to-fuchsia-600"
    },
    {
      number: 4,
      title: "Start chatting with your own data",
      description: "Interact with an AI that understands your specific content",
      icon: Zap,
      color: "from-fuchsia-500 to-pink-600"
    },
    {
      number: 5,
      title: "Customize prompts (optional)",
      description: "Fine-tune your assistant's behavior with custom instructions",
      icon: RefreshCw,
      color: "from-pink-500 to-rose-600"
    },
    {
      number: 6,
      title: "Use your AI chatbot anywhere",
      description: "Embed your assistant on websites, apps, or internal systems",
      icon: Cpu,
      color: "from-rose-500 to-red-600"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#022179] to-[#9f5396]">
              How It Works
            </h2>
            <p className="text-lg text-center text-slate-600 max-w-2xl">
              Set up your own AI assistant in minutes with our simple six-step process
            </p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#b67bad] to-[#022179] transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16 relative z-10">
              {steps.map((step, index) => (
                <StepCard 
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  Icon={step.icon}
                  color={step.color}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-20 flex justify-center">
            <a href="#get-started" className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-[#022179] to-[#9f5396] px-8 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#9f5396]/50">
              <span className="absolute -end-full transition-all group-hover:end-4">
                <ChevronRight className="h-5 w-5" />
              </span>
              <span className="text-lg font-medium transition-all group-hover:me-4">
                Get Started Today
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  Icon: React.ElementType;
  color: string;
  isLast?: boolean;
}

function StepCard({ number, title, description, Icon, color, isLast }: StepCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 relative">
        <div className={cn(
          "w-20 h-20 rounded-full bg-gradient-to-br", 
          color,
          "flex items-center justify-center shadow-lg relative z-20"
        )}>
          <span className="absolute -top-2 -right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg border border-slate-200 shadow-sm">
            {number}
          </span>
          <Icon className="h-8 w-8 text-white" />
        </div>
        {!isLast && (
          <div className="hidden lg:block absolute top-1/2 left-full h-0.5 w-8 bg-gradient-to-r from-[#b67bad] to-[#022179] transform -translate-y-1/2"></div>
        )}
      </div>
      
      <Card className="w-full border-slate-200 hover:border-[#022179]/50 transition-all shadow-sm hover:shadow-md group">
        <CardContent className="p-6">
          <CardTitle className="text-xl font-semibold mb-3 group-hover:text-[#022179] transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-base text-slate-600">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}