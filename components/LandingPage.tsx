// components/LandingPage.tsx
import React from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Steps } from "@/components/landing/Steps";
import { ValueProps } from "@/components/landing/ValueProps";
import { Leadership } from "@/components/landing/Leadership";
import {VideoSection} from "@/components/landing/VideoSection";
import { CallToAction } from "@/components/landing/CallToAction";
import { Footer } from "@/components/landing/Footer";
import {Customers} from "@/components/landing/Customers"
import { Partners } from "@/components/landing/Partners";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Hero />
      <Steps/>
      <ValueProps />
      <Customers/>
      <Leadership />
      <Partners />
      <VideoSection/>
      <CallToAction />
      <Footer />
    </div>
  );
}