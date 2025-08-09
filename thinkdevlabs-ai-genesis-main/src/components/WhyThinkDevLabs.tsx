import { Card, CardContent } from "@/components/ui/card";
import { Users, DollarSign, Clock, Award, Lightbulb, HeadphonesIcon } from "lucide-react";

const WhyThinkDevLabs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Skilled Team",
      description: "Our expert developers and AI specialists have years of experience building cutting-edge solutions."
    },
    {
      icon: DollarSign,
      title: "Affordable Rates",
      description: "High-quality AI solutions at competitive prices. Get enterprise-grade technology without breaking the bank."
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "We understand time is money. Our agile development process ensures quick turnaround without compromising quality."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "200+ successful projects delivered. Our portfolio speaks for our expertise and commitment to excellence."
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "We stay ahead of the curve with latest AI technologies and development practices to give you a competitive edge."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your AI solutions run smoothly. We're here whenever you need us."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">ThinkDevLabs?</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            We combine expertise, affordability, and innovation to deliver AI solutions that drive real business results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={reason.title}
              className="group bg-gradient-card border-border/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 bg-gradient-card rounded-full px-8 py-4 border border-border/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="text-sm text-foreground/60">Projects Completed</div>
            </div>
            <div className="w-px h-8 bg-border/40"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-foreground/60">Client Satisfaction</div>
            </div>
            <div className="w-px h-8 bg-border/40"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-foreground/60">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThinkDevLabs;