'use client';
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Users, Briefcase, ArrowRight } from "lucide-react";

interface Customer {
  id: string;
  name: string;
  imagePath: string;
  description: string;
  fullDescription: string;
  partnership: string;
  services: string[];
  testimonial: string;
}

export function Customers() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const customers: Customer[] = [
    {
      id: "coraxess",
      name: "CORAXESS™",
      imagePath: "/CoraxessCustomer.png",
      description: "CORAXESS™ is a leading software service provider for legal professionals that is transforming the way they manage their practice, collaborate with others, and streamline their workflows.",
      fullDescription: "CORAXESS™ is a leading software service provider for legal professionals that is transforming the way they manage their practice, collaborate with others, and streamline their workflows. It offers a comprehensive suite of tools for practice management, team management, client interaction, and document automation. The platform is designed to enhance user experience and is poised to take it to the next level by integrating secure AI assistants and agents.",
      partnership: "Edge AI Innovations is helping them design and deploy their proprietary AI agents.",
      services: ["AI Agents", "Practice Management", "Document Automation"],
      testimonial: "Edge AI Innovations has been instrumental in helping us develop cutting-edge AI capabilities that set our platform apart in the legal tech space."
    },
    {
      id: "99ravens",
      name: "99Ravens.ai",
      imagePath: "/99RavensCustomer.png",
      description: "99Ravens.ai offers AI-powered tools specifically designed for Chief Marketing Officers (CMOs).",
      fullDescription: "99Ravens.ai offers AI-powered tools specifically designed for Chief Marketing Officers (CMOs). Their flagship product, Raven, is an AI agent that acts like a CMO's personal assistant. Raven helps CMOs with crucial and time-consuming tasks such as market research and brief evaluation. Essentially, 99Ravens.ai aims to empower CMOs with AI, allowing them to be more efficient, strategic, and impactful in their roles.",
      partnership: "Edge AI Innovations is helping them design and deploy their advanced modular and scalable AI agents.",
      services: ["AI Assistant", "Market Research", "Brief Evaluation"],
      testimonial: "The modular AI agent architecture designed by Edge AI Innovations has allowed us to rapidly scale our capabilities while maintaining performance and reliability."
    }
  ];

  const openCustomerDialog = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsDialogOpen(true);
  };

  return (
    <section id="customers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl  md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#022179] to-[#9f5396]">
          Our Customers
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {customers.map((customer) => (
            <CustomerCard 
              key={customer.id}
              customer={customer}
              onClick={() => openCustomerDialog(customer)}
            />
          ))}
        </div>
        
        {selectedCustomer && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <span className="h-12 w-12 relative inline-block mr-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                      <span className="text-primary font-bold">{selectedCustomer.name.charAt(0)}</span>
                    </div>
                  </span>
                  {selectedCustomer.name}
                </DialogTitle>
                <DialogDescription>
                  Our partnership and solutions
                </DialogDescription>
              </DialogHeader>

              <Tabs defaultValue="overview" className="mt-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="testimonial">Testimonial</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="py-4">
                  <p className="text-muted-foreground mb-4">
                    {selectedCustomer.fullDescription}
                  </p>
                  <div className="bg-primary/5 p-4 rounded-md mt-4">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Briefcase size={18} />
                      Partnership
                    </h4>
                    <p className="text-primary font-medium">
                      {selectedCustomer.partnership}
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="services" className="py-4">
                  <h4 className="font-medium mb-4 flex items-center gap-2">
                    <Users size={18} />
                    Services Provided
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedCustomer.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-4">
                    Request similar services
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </TabsContent>
                
                <TabsContent value="testimonial" className="py-4">
                  <div className="bg-muted/50 p-6 rounded-lg border">
                    <blockquote className="italic">
                      "{selectedCustomer.testimonial}"
                    </blockquote>
                    <div className="mt-4 font-medium">
                      — {selectedCustomer.name} Team
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        )}
        
        <div className="mt-16">
          <h3 className="text-2xl  md:text-2xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#022179] to-[#9f5396]">
            Empowering Small and Medium Enterprises with Advanced AI Capabilities
          </h3>
          
          <MoorcheFeature />
        </div>
      </div>
    </section>
  );
}

interface CustomerCardProps {
  customer: Customer;
  onClick: () => void;
}

function CustomerCard({ customer, onClick }: CustomerCardProps) {
  return (
    <Card className="border-[#022179]/20 hover:border-[#022179]/80 transition-all overflow-hidden group" onClick={onClick}>
      <div className="h-2 bg-gradient-to-r from-[#b67bad] to-[#022179]"></div>
      <CardContent className="p-0">
        <div className="p-6 flex flex-col h-full">
          <div className="h-16 w-full flex items-center mb-6 relative">
            <div className="relative h-12 w-auto">
              <Image 
                src={customer.imagePath} 
                alt={`${customer.name} logo`}
                width={180}
                height={48}
                className="object-contain"
              />
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4">
            {customer.description}
          </p>
          
          <div className="flex justify-between items-center mt-auto">
            <p className="text-[#9f5396] font-medium">
              View partnership details
            </p>
            <ChevronRight className="text-[#9f5396] group-hover:translate-x-1 transition-transform" size={18} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface FeatureTab {
  id: string;
  title: string;
  description: string;
}

function MoorcheFeature() {
  const [activeTab, setActiveTab] = useState("overview");
  
  const features: FeatureTab[] = [
    { 
      id: "overview", 
      title: "Moorche Serverless RAG", 
      description: "Small and medium enterprises (SMEs) often grapple with delivering high-quality, personalized customer support without overextending budgets or technical resources. That's where Moorche Serverless RAG comes in."
    },
    { 
      id: "kiosk", 
      title: "Kiosk Mode", 
      description: "One of Moorche's standout benefits for SMEs is Kiosk Mode, which ensures all chatbot interactions remain strictly within the context of your supplied documents. This feature delivers a focused conversation flow, enabling your team to address customer queries in real-time."
    },
    { 
      id: "ranking", 
      title: "Smart Ranking", 
      description: "Moorche incorporates a universal scoring system and a built-in re-ranking capability to evaluate how closely each retrieved context chunk matches a user's query—before it's even sent to your chosen language model."
    },
    { 
      id: "usability", 
      title: "Easy to Use & Scale", 
      description: "Simply upload your documents, select an AI model, and deploy—no extra servers or clusters required. As new language models hit the market, you can switch to the latest AI foundation with a single click."
    }
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="h-2 bg-gradient-to-r from-[#b67bad] to-[#022179]"></div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-muted p-4 md:p-6">
          <div className="flex flex-col space-y-2">
            {features.map((feature) => (
              <Button 
                key={feature.id}
                variant={activeTab === feature.id ? "default" : "ghost"} 
                className={`justify-start text-left h-auto py-3 ${activeTab === feature.id ? "" : "hover:text-[#022179] "}`}
                onClick={() => setActiveTab(feature.id)}
              >
                <div>
                  <div className="font-medium">{feature.title}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2 p-6 md:p-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={activeTab === feature.id ? "block" : "hidden"}
            >
              <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              
              {feature.id === "overview" && (
                <div className="mt-6">
                  <p className="text-muted-foreground">
                    Our platform offers the robust power of large-scale AI solutions—like custom chatbots and advanced document retrieval—while eliminating the hefty overhead of continuous server usage or specialized machine learning expertise.
                  </p>
                  <a href="#learn-more" className="group relative inline-flex items-center overflow-hidden rounded-full mt-2 bg-gradient-to-r from-[#022179] to-[#9f5396] px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#9f5396]/50">
                    <span className="absolute -end-full transition-all group-hover:end-4">
                        <ChevronRight className="h-5 w-5" />
                    </span>
                    <span className="text-lg font-medium transition-all group-hover:me-4">
                       Learn More About Moorche
                    </span>
                    </a>
                </div>
              )}
              
              {feature.id === "kiosk" && (
                <div className="bg-primary/5 p-4 rounded-md mt-4">
                  <h5 className="font-medium mb-2">Perfect For:</h5>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Websites</li>
                    <li>Retail kiosks</li>
                    <li>Live events</li>
                  </ul>
                </div>
              )}
              
              {feature.id === "ranking" && (
                <div className="mt-4">
                  <p className="mb-4">
                    This guarantees highly relevant responses, reducing unnecessary back-and-forth and improving overall user satisfaction.
                  </p>
                  <div className="bg-green-50 text-green-800 p-3 rounded-md text-sm">
                    Thanks to its super fast and efficient design, Moorche can seamlessly scale to accommodate higher volumes of inquiries without straining your resources or budget.
                  </div>
                </div>
              )}
              
              {feature.id === "usability" && (
                <div className="mt-4">
                  <p className="mb-4">
                    The result? A flexible, cost-effective AI solution that evolves alongside your enterprise, keeping operational costs low and quality standards high.
                  </p>
                  <p>
                    By harnessing the power of Moorche Serverless RAG, SMEs gain an edge typically reserved for larger organizations—delivering meaningful, intelligent interactions to customers at scale while safeguarding data and managing expenses.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Customers;