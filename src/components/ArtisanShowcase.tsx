import { Card } from "./ui/card";
import { HeroButton } from "./ui/hero-button";
import { Star, MapPin, Calendar, ExternalLink } from "lucide-react";
import weavingArtisan from "@/assets/weaving-artisan.jpg";
import jewelryCraft from "@/assets/jewelry-craft.jpg";

export default function ArtisanShowcase() {
  const artisans = [
    {
      id: 1,
      name: "Meera Sharma",
      craft: "Traditional Weaving",
      location: "Varanasi, Uttar Pradesh",
      experience: "25 years",
      rating: 4.9,
      reviews: 127,
      image: weavingArtisan,
      description: "Master weaver specializing in Banarasi silk sarees with intricate gold thread work.",
      price: "₹8,000 - ₹50,000",
      specialties: ["Banarasi Silk", "Brocade Work", "Traditional Motifs"]
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      craft: "Jewelry Making",
      location: "Jaipur, Rajasthan",
      experience: "18 years",
      rating: 4.8,
      reviews: 89,
      image: jewelryCraft,
      description: "Traditional jewelry artisan creating exquisite pieces using age-old Rajasthani techniques.",
      price: "₹5,000 - ₹1,50,000",
      specialties: ["Kundan Work", "Meenakari", "Gemstone Setting"]
    },
    {
      id: 3,
      name: "Lakshmi Devi",
      craft: "Pottery",
      location: "Kumartuli, West Bengal",
      experience: "30 years",
      rating: 4.9,
      reviews: 156,
      image: "/api/placeholder/400/300",
      description: "Renowned potter known for creating beautiful terracotta sculptures and functional pottery.",
      price: "₹500 - ₹25,000",
      specialties: ["Terracotta Sculptures", "Traditional Pots", "Decorative Items"]
    }
  ];

  return (
    <section id="artisans" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Featured Artisans</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover master craftspeople who are keeping Indian heritage alive through their extraordinary skills and passion.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {artisans.map((artisan) => (
            <Card key={artisan.id} className="overflow-hidden hover:shadow-warm transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={artisan.image} 
                  alt={artisan.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary">{artisan.price}</span>
                </div>
                
                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{artisan.rating}</span>
                    <span className="text-sm text-white/80">({artisan.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{artisan.name}</h3>
                  <p className="text-lg text-primary font-semibold">{artisan.craft}</p>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{artisan.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{artisan.experience} experience</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {artisan.description}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {artisan.specialties.map((specialty, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <HeroButton variant="primary" size="sm" className="flex-1">
                    View Profile
                    <ExternalLink className="w-4 h-4" />
                  </HeroButton>
                  <HeroButton variant="outline" size="sm" className="flex-1">
                    Contact
                  </HeroButton>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <HeroButton variant="secondary" size="lg">
            Explore All Artisans
            <ExternalLink className="w-5 h-5" />
          </HeroButton>
        </div>
      </div>
    </section>
  );
}