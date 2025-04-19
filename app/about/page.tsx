import React from "react";
import { Shield, Fingerprint, Cpu, Database, Lock, BarChart } from "lucide-react";
import { Header } from "@/components/landing/Header";

// Changed from lowercase 'page' to uppercase 'Page' and to a default export
export default function Page() {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Data Privacy",
      description: "Keep sensitive information secure with on-premises AI processing"
    },
    {
      icon: <Fingerprint className="h-6 w-6 text-white" />,
      title: "Compliance",
      description: "Meet regulatory requirements with auditable AI systems"
    },
    {
      icon: <Cpu className="h-6 w-6 text-white" />,
      title: "AI Customization",
      description: "Tailor AI solutions to your specific business challenges"
    },
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: "Internal Infrastructure",
      description: "Run everything within your existing security perimeter"
    },
    {
      icon: <Lock className="h-6 w-6 text-white" />,
      title: "Operational Control",
      description: "Maintain complete oversight of your AI deployments"
    },
    {
      icon: <BarChart className="h-6 w-6 text-white" />,
      title: "Competitive Advantage",
      description: "Transform challenges into intelligent, scalable solutions"
    }
  ];

  return (
    <>
      <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#022179]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#b67bad]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left column - Content */}
              <div>
                <div className="inline-block mb-6 px-4 py-1 rounded-full bg-[#022179]/10 text-[#022179] font-medium text-sm">
                  About EdgeAI Innovations
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#022179] to-[#b67bad]">
                  Enterprise-Grade AI Solutions
                </h2>
                
                <div className="space-y-6 text-slate-700">
                  <p className="text-lg">
                    EdgeAI Innovations provides enterprise-grade AI solutions that solve the most critical challenges facing modern businesses: data privacy, compliance, and AI customization.
                  </p>
                  
                  <p className="text-lg">
                    We deliver secure, tailored AI agents that run entirely within your infrastructure, enabling companies to leverage advanced artificial intelligence without exposing sensitive data or compromising operational control.
                  </p>
                  
                  <p className="text-lg">
                    Our technology transforms your unique business challenges into intelligent, scalable solutions that drive innovation and competitive advantage.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-[#022179] to-[#9f5396] text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all">
                    Learn More
                  </button>
                  <button className="px-6 py-3 border border-[#022179]/30 text-[#022179] rounded-lg font-medium hover:bg-[#022179]/5 transition-all">
                    Contact Us
                  </button>
                </div>
              </div>
              
              {/* Right column - Feature grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100 h-full hover:shadow-lg transition-all hover:border-[#022179]/20 group-hover:translate-y-[-2px] duration-300">
                      <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-[#022179] to-[#9f5396] inline-flex">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-[#022179] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            

          </div>
        </div>
      </section>
    </>
  );
}