import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  ShoppingCart, 
  GraduationCap, 
  Car, 
  Plane, 
  Heart, 
  Banknote, 
  Factory,
  Utensils,
  Home,
  Briefcase,
  Gamepad2
} from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    { icon: Building2, name: "Real Estate", color: "text-blue-400" },
    { icon: ShoppingCart, name: "E-commerce", color: "text-green-400" },
    { icon: GraduationCap, name: "Education", color: "text-purple-400" },
    { icon: Car, name: "Automotive", color: "text-red-400" },
    { icon: Plane, name: "Travel & Tourism", color: "text-cyan-400" },
    { icon: Heart, name: "Healthcare", color: "text-pink-400" },
    { icon: Banknote, name: "Finance & Banking", color: "text-yellow-400" },
    { icon: Factory, name: "Manufacturing", color: "text-orange-400" },
    { icon: Utensils, name: "Food & Restaurants", color: "text-emerald-400" },
    { icon: Home, name: "Hospitality", color: "text-indigo-400" },
    { icon: Briefcase, name: "Professional Services", color: "text-violet-400" },
    { icon: Gamepad2, name: "Entertainment", color: "text-rose-400" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            AI Agents for <span className="bg-gradient-primary bg-clip-text text-transparent">Every Industry</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            From startups to enterprises, we create intelligent solutions tailored to your industry's unique challenges
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={industry.name}
              className="group bg-gradient-card border-border/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-4 text-center">
                <div className="mb-3 inline-flex items-center justify-center w-12 h-12 bg-background/50 rounded-full group-hover:scale-110 transition-transform">
                  <industry.icon className={`h-6 w-6 ${industry.color} group-hover:text-primary transition-colors`} />
                </div>
                
                <h3 className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors leading-tight">
                  {industry.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-card rounded-2xl px-8 py-6 border border-border/20">
            <h3 className="text-2xl font-bold mb-2">
              Don't See Your Industry?
            </h3>
            <p className="text-foreground/70 mb-4">
              We specialize in creating custom AI solutions for any business vertical
            </p>
            <div className="inline-flex items-center space-x-2 text-primary font-medium">
              <span>Let's discuss your unique requirements</span>
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full animate-glow" style={{ animationDelay: `${i * 0.3}s` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;