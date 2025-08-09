import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  MessageSquare, 
  BarChart3, 
  Workflow, 
  Shield, 
  Zap,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Custom AI Agents",
      description: "Tailor-made intelligent agents designed specifically for your business needs and workflows.",
      features: ["Natural Language Processing", "Machine Learning", "Automated Decision Making"]
      
    },
    {
      icon: MessageSquare,
      title: "Conversational AI",
      description: "Advanced chatbots and virtual assistants that provide human-like customer interactions.",
      features: ["24/7 Customer Support", "Multi-language Support", "Context Awareness"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data-driven AI solutions that provide actionable insights and predictive analytics.",
      features: ["Real-time Analytics", "Predictive Modeling", "Performance Tracking"]
    },
    {
      icon: Workflow,
      title: "AI Web & App Development",
      description: "Custom web applications and mobile apps powered by artificial intelligence and modern technologies.",
      features: ["React/Next.js Development", "AI Integration", "Responsive Design"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with advanced AI threat detection and response capabilities.",
      features: ["Data Encryption", "Threat Detection", "Compliance Ready"]
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Get your AI agents up and running quickly with our streamlined deployment process.",
      features: ["Quick Setup", "Cloud Ready", "Scalable Infrastructure"]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            Comprehensive <span className="bg-gradient-primary bg-clip-text text-transparent">AI Solutions</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            We deliver end-to-end AI agent development services that transform how businesses operate and engage with customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-gradient-card border-border/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-foreground/60">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="group-hover:text-primary group-hover:bg-primary/10 transition-all duration-200 p-0 h-auto font-semibold"
                >
                 
                  
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;