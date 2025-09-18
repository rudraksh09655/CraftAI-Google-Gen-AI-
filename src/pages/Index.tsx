import { Suspense } from "react";
// Corrected import paths to use relative paths to resolve the module error.
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ArtisanShowcase from "../components/ArtisanShowcase";
import AiStoryGenerator from "../components/AiStoryGenerator";
import Footer from "../components/Footer";
import CraftScene from "../components/3d/CraftScene";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* This will render your 3D background scene */}
      <Suspense fallback={null}>
        <CraftScene />
      </Suspense>

      {/* Your site's main navigation bar */}
      <Navigation />

      {/* The main content of your homepage */}
      <main className="relative">
        <Hero />
        <Features />
        <ArtisanShowcase />
        <AiStoryGenerator />
      </main>

      {/* Your site's footer */}
      <Footer />
    </div>
  );
};

export default Index;

