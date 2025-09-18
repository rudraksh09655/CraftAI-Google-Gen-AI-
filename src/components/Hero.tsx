import { Link } from "react-router-dom";
// Corrected the import paths to be relative, which is more robust.
import { HeroButton } from "./ui/hero-button";
import { Sparkles, Users, TrendingUp, Heart } from "lucide-react";
import heroImage from "../assets/pottery-hero.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center artisan-pattern overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Heritage Marketplace</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Empower
              </span>
              <br />
              <span className="text-foreground">Indian Artisans</span>
              <br />
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                with AI
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Bridge traditional craftsmanship with modern digital markets. Our AI helps artisans tell their stories, reach global audiences, and preserve cultural heritage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* This button is now wrapped in a Link to navigate to the 'join' page */}
              <Link to="/join">
                <HeroButton variant="primary" size="lg" className="floating-animation">
                  Start Your Journey
                  <Sparkles className="w-5 h-5" />
                </HeroButton>
              </Link>
              <HeroButton variant="outline" size="lg">
                Explore Artisans
                <Users className="w-5 h-5" />
              </HeroButton>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Artisans</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-[hsl(215_60%_45%)] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">₹2Cr+</div>
                  <div className="text-sm text-muted-foreground">Revenue Generated</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-[hsl(35_80%_75%)] flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Craft Types</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-deep">
              <img 
                src={heroImage} 
                alt="Traditional Indian pottery making"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center floating-animation craft-glow">
              <Sparkles className="w-12 h-12 text-primary-foreground" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-accent to-[hsl(35_80%_75%)] rounded-full flex items-center justify-center floating-animation" style={{ animationDelay: "2s" }}>
              <Heart className="w-10 h-10 text-accent-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

