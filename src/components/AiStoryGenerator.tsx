import { useState } from "react";
import { Card } from "./ui/card";
import { HeroButton } from "./ui/hero-button";
import { Sparkles, FileText, Share, Copy } from "lucide-react";
import { toast } from "sonner";

export default function AiStoryGenerator() {
  const [story, setStory] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [craftType, setCraftType] = useState("");
  const [artisanName, setArtisanName] = useState("");

  const generateStory = async () => {
    if (!craftType || !artisanName) {
      toast.error("Please fill in both fields");
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI story generation
    setTimeout(() => {
      const sampleStory = `Meet ${artisanName}, a master of ${craftType} whose family has been preserving this ancient art form for over five generations. In the vibrant workshops of their hometown, ${artisanName} transforms raw materials into breathtaking pieces that tell stories of Indian heritage.

Each ${craftType} piece created by ${artisanName} carries the wisdom of ancestors and the dreams of future generations. Using traditional techniques passed down through generations, combined with innovative designs that speak to modern aesthetics, ${artisanName} bridges the gap between past and present.

The intricate details in every creation reflect not just skill, but a deep spiritual connection to the craft. From the careful selection of materials to the final finishing touches, ${artisanName} infuses each piece with love, patience, and cultural pride.

Today, ${artisanName} seeks to share these magnificent creations with the world, bringing the essence of Indian craftsmanship to global audiences while ensuring the survival and prosperity of this timeless art form.`;

      setStory(sampleStory);
      setIsGenerating(false);
      toast.success("Story generated successfully!");
    }, 2000);
  };

  const copyStory = () => {
    navigator.clipboard.writeText(story);
    toast.success("Story copied to clipboard!");
  };

  return (
    <section id="stories" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Storytelling</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Craft Your Story
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let AI help you tell your artisan journey in a compelling way that connects with customers and preserves your heritage.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 craft-glow">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Form */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Create Your Story
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Artisan Name</label>
                    <input
                      type="text"
                      value={artisanName}
                      onChange={(e) => setArtisanName(e.target.value)}
                      placeholder="Enter artisan name"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Craft Type</label>
                    <select
                      value={craftType}
                      onChange={(e) => setCraftType(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    >
                      <option value="">Select craft type</option>
                      <option value="pottery">Pottery</option>
                      <option value="textiles">Textiles & Weaving</option>
                      <option value="jewelry">Jewelry Making</option>
                      <option value="woodwork">Woodwork</option>
                      <option value="metalwork">Metalwork</option>
                      <option value="painting">Traditional Painting</option>
                      <option value="sculpture">Sculpture</option>
                      <option value="embroidery">Embroidery</option>
                    </select>
                  </div>
                  
                  <HeroButton
                    variant="primary"
                    size="lg"
                    onClick={generateStory}
                    disabled={isGenerating}
                    className="w-full"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent" />
                        Generating Story...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Generate AI Story
                      </>
                    )}
                  </HeroButton>
                </div>
              </div>

              {/* Generated Story */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <Share className="w-6 h-6 text-accent" />
                  Your Generated Story
                </h3>
                
                <div className="bg-muted/50 rounded-lg p-6 min-h-[300px] relative">
                  {story ? (
                    <>
                      <p className="text-sm leading-relaxed whitespace-pre-line">
                        {story}
                      </p>
                      <HeroButton
                        variant="outline"
                        size="sm"
                        onClick={copyStory}
                        className="mt-4"
                      >
                        <Copy className="w-4 h-4" />
                        Copy Story
                      </HeroButton>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      <div className="text-center">
                        <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
                        <p>Your AI-generated story will appear here</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}