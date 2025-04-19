// components/landing/Hero.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#a62493]/30 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#a62493]/20 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#022179] dark:text-[#022179]">
              Create your own <span className="relative">
                <span className="relative z-10">AI Assistants</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#a62493]/20 rounded-lg -z-0"></span>
              </span>
            </h1>
            
            <p className="text-xl text-[#022179] max-w-md">
              Build custom AI assistants powered by your own data. Deploy anywhere with enhanced privacy and zero server costs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#022179] hover:bg-[#022179]/90 text-white text-lg px-8 py-6 h-auto">
                Try it now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-[#a62493] text-[#a62493] hover:bg-[#a62493]">
                Book a demo
              </Button>
            </div>
            
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <div className="bg-[#a62493] h-full w-full"></div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#022179]">
                <span className="font-medium text-[#a62493]">3+</span> businesses trust Edge AI Innovations
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-card to-background rounded-lg border p-6 shadow-xl">
              <div className="absolute -top-12 -left-12">
                <div className="bg-background border shadow rounded-lg p-3 w-24">
                  <div className="h-2 w-12 bg-[#a62493]/50 rounded mb-1"></div>
                  <div className="h-2 w-16 bg-[#a62493]/30 rounded"></div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-8">
                <div className="bg-background border shadow rounded-lg p-3 w-20">
                  <div className="h-2 w-10 bg-[#a62493]/50 rounded mb-1"></div>
                  <div className="h-2 w-14 bg-[#a62493]/30 rounded"></div>
                </div>
              </div>
              

                <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/Ehq8wkxIUZM"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#022179]/10 to-[#a62493]/30 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}