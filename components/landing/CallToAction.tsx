// components/landing/CallToAction.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#9f5396]/10 to-[#9f5396]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl  md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#022179] to-[#9f5396]">Ready to build your custom AI assistant?</h2>
          <p className="text-lg text-muted-foreground">Start creating powerful AI solutions that understand your business and your data.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-[#9f5396] hover:bg-[#8a4681] text-white text-lg px-8 py-6 h-auto">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}