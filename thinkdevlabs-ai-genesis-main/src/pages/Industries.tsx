import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Gamepad2,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  Award,
  Target,
  Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const industries = [
    { 
      icon: Building2, 
      name: "Real Estate", 
      color: "text-blue-400",
      description: "Transform property management and client experiences with AI-powered solutions.",
      solutions: [
        "Property valuation AI",
        "Virtual property tours",
        "Lead qualification bots", 
        "Market analysis tools"
      ],
      caseStudy: "40% increase in qualified leads for a major real estate firm",
      clients: "50+"
    },
    { 
      icon: ShoppingCart, 
      name: "E-commerce", 
      color: "text-green-400",
      description: "Boost sales and customer satisfaction with intelligent shopping experiences.",
      solutions: [
        "Product recommendation engines",
        "Chatbot customer service",
        "Inventory optimization",
        "Fraud detection systems"
      ],
      caseStudy: "60% increase in conversion rates for online retailers",
      clients: "75+"
    },
    { 
      icon: GraduationCap, 
      name: "Education", 
      color: "text-purple-400",
      description: "Enhance learning outcomes with personalized AI-driven educational tools.",
      solutions: [
        "Personalized learning paths",
        "Automated grading systems",
        "Student support chatbots",
        "Performance analytics"
      ],
      caseStudy: "35% improvement in student engagement rates",
      clients: "30+"
    },
    { 
      icon: Heart, 
      name: "Healthcare", 
      color: "text-pink-400",
      description: "Improve patient care and operational efficiency with healthcare AI solutions.",
      solutions: [
        "Patient triage systems",
        "Medical imaging analysis",
        "Treatment recommendation AI",
        "Administrative automation"
      ],
      caseStudy: "50% reduction in administrative overhead",
      clients: "25+"
    },
    { 
      icon: Banknote, 
      name: "Finance & Banking", 
      color: "text-yellow-400",
      description: "Secure, intelligent financial services with advanced AI capabilities.",
      solutions: [
        "Risk assessment models",
        "Algorithmic trading systems",
        "Customer service automation",
        "Compliance monitoring"
      ],
      caseStudy: "45% improvement in risk prediction accuracy",
      clients: "40+"
    },
    { 
      icon: Factory, 
      name: "Manufacturing", 
      color: "text-orange-400",
      description: "Optimize production and quality control with smart manufacturing solutions.",
      solutions: [
        "Predictive maintenance",
        "Quality control automation",
        "Supply chain optimization",
        "Production planning AI"
      ],
      caseStudy: "30% reduction in downtime and maintenance costs",
      clients: "35+"
    },
    { 
      icon: Car, 
      name: "Automotive", 
      color: "text-red-400",
      description: "Drive innovation in automotive with AI-powered vehicle and service solutions.",
      solutions: [
        "Autonomous vehicle systems",
        "Predictive maintenance",
        "Customer service bots",
        "Supply chain management"
      ],
      caseStudy: "25% improvement in vehicle diagnostics accuracy",
      clients: "20+"
    },
    { 
      icon: Plane, 
      name: "Travel & Tourism", 
      color: "text-cyan-400",
      description: "Create exceptional travel experiences with intelligent booking and support systems.",
      solutions: [
        "Dynamic pricing algorithms",
        "Travel recommendation engines",
        "Customer support automation",
        "Itinerary optimization"
      ],
      caseStudy: "55% increase in booking conversion rates",
      clients: "45+"
    },
    { 
      icon: Utensils, 
      name: "Food & Restaurants", 
      color: "text-emerald-400",
      description: "Enhance dining experiences and operations with food service AI solutions.",
      solutions: [
        "Menu optimization AI",
        "Order prediction systems",
        "Customer service chatbots",
        "Inventory management"
      ],
      caseStudy: "40% reduction in food waste through predictive ordering",
      clients: "60+"
    },
    { 
      icon: Home, 
      name: "Hospitality", 
      color: "text-indigo-400",
      description: "Deliver superior guest experiences with intelligent hospitality solutions.",
      solutions: [
        "Guest service automation",
        "Room optimization systems",
        "Concierge chatbots",
        "Revenue management AI"
      ],
      caseStudy: "38% increase in guest satisfaction scores",
      clients: "55+"
    },
    { 
      icon: Briefcase, 
      name: "Professional Services", 
      color: "text-violet-400",
      description: "Streamline operations and enhance client services with professional AI tools.",
      solutions: [
        "Document automation",
        "Client communication bots",
        "Project management AI",
        "Knowledge management systems"
      ],
      caseStudy: "50% reduction in document processing time",
      clients: "70+"
    },
    { 
      icon: Gamepad2, 
      name: "Entertainment", 
      color: "text-rose-400",
      description: "Create engaging content and experiences with entertainment-focused AI.",
      solutions: [
        "Content recommendation engines",
        "Audience analysis tools",
        "Interactive entertainment bots",
        "Content creation AI"
      ],
      caseStudy: "65% increase in user engagement rates",
      clients: "40+"
    }
  ];

  const stats = [
    { icon: Users, label: "Industries Served", value: "12+" },
    { icon: Award, label: "Successful Projects", value: "500+" },
    { icon: TrendingUp, label: "Average ROI Increase", value: "45%" },
    { icon: Clock, label: "Years of Experience", value: "5+" }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Industry-Specific Solutions",
      description: "Tailored AI solutions that understand your industry's unique challenges and opportunities."
    },
    {
      icon: Zap,
      title: "Rapid Implementation", 
      description: "Fast deployment with minimal disruption to your existing operations and workflows."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of delivering measurable improvements in efficiency and revenue."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated team of industry experts and AI specialists for ongoing success."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 mb-6">
            Industries We Serve
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            AI Solutions Tailored
            <span className="block">for Your Industry</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            From startups to enterprises, we create intelligent solutions that understand 
            your industry's unique challenges and drive meaningful results.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={stat.label}
                  className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card 
                key={industry.name}
                className={`group bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow cursor-pointer animate-scale-in ${
                  selectedIndustry === industry.name ? 'ring-2 ring-primary border-primary/50' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedIndustry(selectedIndustry === industry.name ? null : industry.name)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-background/50 rounded-full group-hover:scale-110 transition-transform">
                      <industry.icon className={`h-8 w-8 ${industry.color} group-hover:text-primary transition-colors`} />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {industry.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="text-xs text-primary font-medium mb-4">
                      {industry.clients} Clients Served
                    </div>

                    {selectedIndustry === industry.name && (
                      <div className="w-full space-y-4 animate-slide-up">
                        <div>
                          <h4 className="font-medium text-foreground mb-2">AI Solutions:</h4>
                          <ul className="space-y-1">
                            {industry.solutions.map((solution) => (
                              <li key={solution} className="flex items-center text-xs text-muted-foreground">
                                <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <div className="text-xs font-medium text-primary mb-1">Case Study:</div>
                          <div className="text-xs text-muted-foreground">{industry.caseStudy}</div>
                        </div>
                        
                        <Button size="sm" className="w-full bg-gradient-primary hover:shadow-glow">
                          Learn More
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Why Choose Industry-Specific AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Generic solutions don't deliver the results your business needs. Our industry-focused approach ensures maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={benefit.title}
                  className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-foreground mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Industry CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-primary/20 shadow-glow">
            <CardContent className="p-12 text-center">
              <Building2 className="h-16 w-16 text-primary mx-auto mb-6 animate-glow" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Don't See Your Industry?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We specialize in creating custom AI solutions for any business vertical. 
                Let's discuss your unique requirements and challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  Discuss Custom Solution
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/20 hover:bg-primary/10"
                >
                  View Case Studies
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

export default Industries;