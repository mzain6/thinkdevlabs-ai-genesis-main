import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  MessageSquare, 
  BarChart3, 
  Workflow, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  Lightbulb,
  Code,
  Brain,
  Database,
  Smartphone,
  Globe
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services" },
    { id: "development", name: "Development" },
    { id: "ai", name: "AI Solutions" },
    { id: "consulting", name: "Consulting" }
  ];

  const services = [
    {
      icon: Bot,
      title: "Custom AI Agents",
      description: "Tailor-made intelligent agents designed specifically for your business needs and workflows.",
      features: ["Natural Language Processing", "Machine Learning", "Automated Decision Making", "24/7 Operation"],
      category: "ai",
      timeline: "4-8 weeks",
      rating: 4.9
    },
    {
      icon: MessageSquare,
      title: "Conversational AI",
      description: "Advanced chatbots and virtual assistants that provide human-like customer interactions.",
      features: ["24/7 Customer Support", "Multi-language Support", "Context Awareness", "Integration Ready"],
      category: "ai",
      timeline: "2-4 weeks",
      rating: 4.8
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data-driven AI solutions that provide actionable insights and predictive analytics.",
      features: ["Real-time Analytics", "Predictive Modeling", "Performance Tracking", "Custom Dashboards"],
      category: "ai",
      timeline: "3-6 weeks",
      rating: 4.9
    },
    {
      icon: Workflow,
      title: "AI Web & App Development",
      description: "Custom web applications and mobile apps powered by artificial intelligence.",
      features: ["React/Next.js Development", "AI Integration", "Responsive Design", "Performance Optimization"],
      category: "development",
      timeline: "6-12 weeks",
      rating: 5.0
    },
    {
      icon: Smartphone,
      title: "Mobile AI Applications",
      description: "Native and cross-platform mobile apps with integrated AI capabilities.",
      features: ["iOS & Android", "Cross-platform Development", "AI-powered Features", "App Store Optimization"],
      category: "development",
      timeline: "8-16 weeks",
      rating: 4.8
    },
    {
      icon: Database,
      title: "Data Engineering & ML Ops",
      description: "Complete data pipeline and machine learning operations infrastructure.",
      features: ["Data Pipeline Setup", "Model Deployment", "Monitoring & Scaling", "Cloud Infrastructure"],
      category: "ai",
      timeline: "4-8 weeks",
      rating: 4.9
    },
    {
      icon: Brain,
      title: "AI Strategy Consulting",
      description: "Expert guidance on AI implementation strategy and digital transformation.",
      features: ["Strategy Development", "Technology Assessment", "ROI Analysis", "Implementation Roadmap"],
      category: "consulting",
      timeline: "1-3 weeks",
      rating: 4.7
    },
    {
      icon: Code,
      title: "API Development & Integration",
      description: "Custom APIs and seamless integration with existing systems.",
      features: ["RESTful APIs", "GraphQL", "Third-party Integrations", "API Documentation"],
      category: "development",
      timeline: "2-5 weeks",
      rating: 4.8
    },
    {
      icon: Globe,
      title: "Enterprise AI Solutions",
      description: "Large-scale AI implementations for enterprise organizations.",
      features: ["Scalable Architecture", "Enterprise Security", "Custom Training", "24/7 Support"],
      category: "ai",
      timeline: "12-24 weeks",
      rating: 5.0
    }
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const processSteps = [
    {
      icon: Lightbulb,
      title: "Discovery & Planning",
      description: "We analyze your needs and create a detailed project roadmap."
    },
    {
      icon: Code,
      title: "Development & Testing",
      description: "Our experts build and rigorously test your AI solution."
    },
    {
      icon: Zap,
      title: "Deployment & Training",
      description: "We deploy your solution and train your team for success."
    },
    {
      icon: Shield,
      title: "Support & Maintenance",
      description: "Ongoing support and updates to keep your AI running smoothly."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 mb-6">
            Our Services
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Comprehensive AI Solutions
            <span className="block">for Every Business Need</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            From custom AI agents to full-stack development, we deliver cutting-edge solutions 
            that transform your business operations and drive growth.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id 
                  ? "bg-gradient-primary hover:shadow-glow" 
                  : "border-primary/20 hover:bg-primary/10"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Card 
                key={service.title}
                className="group bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-muted-foreground">{service.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{service.timeline}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                    onClick={() => window.location.href = "/contact"}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful delivery of your AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={step.title}
                  className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up text-center"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    <div className="mt-4 text-primary font-bold">Step {index + 1}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-card border-primary/20 shadow-glow">
            <CardContent className="p-12">
              <Users className="h-16 w-16 text-primary mx-auto mb-6 animate-glow" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Start Your AI Project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your requirements and create a custom solution that drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  onClick={() => window.open("https://wa.me/923201417785", "_blank")}
                >
                  Schedule Free Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/20 hover:bg-primary/10"
                  onClick={() => window.location.href = "/solutions"}
                >
                  View Solutions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
