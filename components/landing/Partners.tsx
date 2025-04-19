'use client';
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Globe, Cpu, Server } from "lucide-react";
import { motion } from "framer-motion";

export function Partners() {
  const [activePartner, setActivePartner] = useState("nvidia");
  
  const partners = [
    {
      id: "nvidia",
      name: "NVIDIA",
      logo: "/Nvidia.png",
      description: "Leveraging state-of-the-art GPU technologies to accelerate AI computational capabilities",
      icon: <Globe className="w-8 h-8 text-green-500" />,
      details: "Our partnership with NVIDIA enables us to harness their cutting-edge GPU architecture, providing unmatched performance for deep learning and computer vision applications.",
      color: "from-green-500 to-emerald-700"
    },
    {
      id: "intel",
      name: "Intel",
      logo: "/intel.png",
      description: "Utilizing advanced CPU and AI acceleration technologies for enterprise-grade computing",
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      details: "Intel's robust processors and AI accelerators power our enterprise solutions, delivering reliable performance for mission-critical deployments.",
      color: "from-blue-500 to-indigo-700"
    },
    {
      id: "advantech",
      name: "Advantech",
      logo: "/Advantech.png",
      description: "Providing robust, industrial-grade edge computing hardware designed for mission-critical AI deployments",
      icon: <Server className="w-8 h-8 text-purple-500" />,
      details: "Advantech's industrial-grade hardware ensures our solutions perform reliably even in the most demanding environments, from factory floors to remote installations.",
      color: "from-purple-500 to-violet-700"
    }
  ];
  
  const selectedPartner = partners.find(p => p.id === activePartner);

  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#022179] to-[#b67bad]">
              Strategic Partnerships
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Our alliances with industry leaders ensure we deliver cutting-edge performance, reliability, and innovation in every solution we build.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {partners.map((partner) => (
                <button
                  key={partner.id}
                  onClick={() => setActivePartner(partner.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    activePartner === partner.id 
                      ? `bg-gradient-to-r ${partner.color} text-white shadow-md` 
                      : "bg-white border border-muted hover:border-primary/50"
                  }`}
                >
                  {partner.name}
                  {activePartner === partner.id && <ChevronRight className="w-4 h-4" />}
                </button>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-[#022179]/10">
              <div className="flex items-center gap-4 mb-4">
                {selectedPartner?.icon}
                <h3 className="text-xl font-semibold">{selectedPartner?.name}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{selectedPartner?.description}</p>
              <p>{selectedPartner?.details}</p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#022179]/5 to-[#b67bad]/5 rounded-full animate-pulse"></div>
              <div className="absolute inset-8 bg-white rounded-full shadow-xl flex items-center justify-center p-8">
                <div className="relative h-48 w-48">
                  {selectedPartner && (
                    <Image
                      src={selectedPartner.logo}
                      alt={`${selectedPartner.name} logo`}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="p-1"
                    />
                  )}
                </div>
              </div>
              {partners.map((partner, index) => {
                const angle = (index * (360 / partners.length)) * (Math.PI / 180);
                const x = Math.cos(angle) * 45 + 50;
                const y = Math.sin(angle) * 45 + 50;
                
                return (
                  <div 
                    key={partner.id}
                    className={`absolute w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center p-2 cursor-pointer transition-all duration-300 ${
                      activePartner === partner.id ? "scale-125 border-2 border-primary" : "scale-100"
                    }`}
                    style={{ 
                      left: `${x}%`, 
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => setActivePartner(partner.id)}
                  >
                    <div className="relative h-10 w-10">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="collaboration" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
            <TabsTrigger value="integration">Integration</TabsTrigger>
            <TabsTrigger value="innovation">Innovation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="collaboration" className="bg-white p-6 rounded-lg shadow-sm border border-[#022179]/10">
            <h3 className="text-xl font-semibold mb-3">Strategic Collaboration</h3>
            <p className="text-muted-foreground">
              Our partnerships extend beyond mere business relationships. We work closely with our technology partners to co-develop solutions that address the most pressing challenges in AI implementation.
            </p>
          </TabsContent>
          
          <TabsContent value="integration" className="bg-white p-6 rounded-lg shadow-sm border border-[#022179]/10">
            <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
            <p className="text-muted-foreground">
              We ensure that hardware and software components work together flawlessly, creating unified solutions that deliver on the promise of artificial intelligence without technical barriers.
            </p>
          </TabsContent>
          
          <TabsContent value="innovation" className="bg-white p-6 rounded-lg shadow-sm border border-[#022179]/10">
            <h3 className="text-xl font-semibold mb-3">Continuous Innovation</h3>
            <p className="text-muted-foreground">
              Together with our partners, we continually push the boundaries of what's possible, incorporating the latest advancements in AI technology to keep our solutions at the cutting edge.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}