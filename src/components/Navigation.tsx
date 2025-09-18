import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sparkles, Users, Palette, MessageSquare } from "lucide-react";
// Corrected the import path to use the '@/' alias
import { HeroButton } from "@/components/ui/hero-button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Artisans", icon: Users, href: "#artisans" },
    { name: "Crafts", icon: Palette, href: "#crafts" },
    { name: "AI Stories", icon: MessageSquare, href: "#stories" },
    { name: "About", icon: Sparkles, href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CraftAI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <HeroButton variant="ghost" size="sm">
                Sign In
              </HeroButton>
            </Link>
            <Link to="/join">
              <HeroButton variant="primary" size="sm">
                Join as Artisan
              </HeroButton>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span>{item.name}</span>
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Link to="/signin" onClick={() => setIsOpen(false)}>
                <HeroButton variant="ghost" size="sm" className="w-full justify-center">
                  Sign In
                </HeroButton>
              </Link>
              <Link to="/join" onClick={() => setIsOpen(false)}>
                <HeroButton variant="primary" size="sm" className="w-full justify-center">
                  Join as Artisan
                </HeroButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

