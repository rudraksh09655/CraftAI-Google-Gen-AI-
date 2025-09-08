import { Card } from "./ui/card";
import { 
  Brain, 
  Globe, 
  Users, 
  TrendingUp, 
  MessageCircle, 
  Shield, 
  Sparkles,
  Camera
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Story Generation",
      description: "Transform your craft journey into compelling narratives that resonate with customers worldwide.",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Camera,
      title: "Smart Product Photography",
      description: "AI-powered photo enhancement and background removal to showcase your products professionally.",
      color: "from-secondary to-[hsl(215_60%_45%)]"
    },
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Connect with international buyers and expand your reach beyond traditional local markets.",
      color: "from-accent to-[hsl(35_80%_75%)]"
    },
    {
      icon: TrendingUp,
      title: "Price Optimization",
      description: "AI-driven pricing recommendations based on market trends, quality, and craftsmanship complexity.",
      color: "from-primary to-accent"
    },
    {
      icon: MessageCircle,
      title: "Multi-language Support",
      description: "Communicate with customers in their language with real-time translation capabilities.",
      color: "from-secondary to-primary"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connect with fellow artisans, share techniques, and learn from traditional masters.",
      color: "from-accent to-secondary"
    },
    {
      icon: Shield,
      title: "Heritage Protection",
      description: "Document and preserve traditional techniques for future generations through digital archives.",
      color: "from-primary to-secondary"
    },
    {
      icon: Sparkles,
      title: "Trend Analysis",
      description: "Stay ahead with AI insights on market trends and customer preferences in your craft category.",
      color: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Powerful Features
            </span>
            <br />
            for Modern Artisans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leverage cutting-edge AI technology to transform your traditional craft business and reach global markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-warm transition-all duration-300 group border-0 bg-card/50 backdrop-blur-sm"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}