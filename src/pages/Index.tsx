import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ArtisanShowcase from "@/components/ArtisanShowcase";
import AiStoryGenerator from "@/components/AiStoryGenerator";
import Footer from "@/components/Footer";
import CraftScene from "@/components/3d/CraftScene";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* 3D Background Scene */}
      <Suspense fallback={null}>
        <CraftScene />
      </Suspense>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        <Hero />
        <Features />
        <ArtisanShowcase />
        <AiStoryGenerator />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
