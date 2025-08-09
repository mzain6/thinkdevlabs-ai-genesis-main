import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Brain, 
  CheckCircle,
  MessageSquare,
  Calendar,
  Sparkles,
  Zap,
  Heart,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    services: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "0d98b5b2-3eaf-47cd-9ab0-1b40832ac708");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        toast({
          title: "Message Sent Successfully! 🎉",
          description: "We'll get back to you within 24 hours with a personalized proposal.",
        });
        setFormData({
          name: "",
          email: "",
          industry: "",
          services: "",
          message: ""
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please check your connection and try again.",
        variant: "destructive"
      });
    }
  };

  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services",
    "E-commerce & Retail",
    "Manufacturing",
    "Technology",
    "Education",
    "Real Estate",
    "Media & Entertainment",
    "Transportation & Logistics",
    "Other"
  ];

  const serviceOptions = [
    "AI Web Development",
    "AI App Development", 
    "Machine Learning Solutions",
    "Natural Language Processing",
    "Computer Vision",
    "AI Automation",
    "Data Analytics & BI",
    "AI Consulting",
    "Custom AI Models",
    "AI Integration"
  ];

  const contactCards = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@thinkdevlabs.com",
      action: "Send Email",
      description: "Get a response within 2 hours",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      onClick: () => window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=info@thinkdevlabs.com",
        "_blank"
      )
      
    },
    {
      icon: Phone,
      title: "Whatsapp Us",
      details: "+92 (320) 14177 85",
      action: "Whatsapp Us",
      description: "Mon-Fri 9AM-6PM PST",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      onClick: () => window.open("https://wa.me/923201417785", "_blank")
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Lahore, Pakistan",
      action: "Get Directions",
      description: "Schedule an in-person meeting",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      onClick: () => window.open("https://www.google.com/maps?q=G1+Johar+Town+Lahore", "_blank")
    },
    {
      icon: Calendar,
      title: "Book Meeting",
      details: "Free Consultation",
      action: "Schedule Now",
      description: "30-minute strategy session",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      onClick: () => window.open("https://wa.me/923201417785", "_blank")
    }
  ];
  

  const benefits = [
    {
      icon: Zap,
      title: "Fast Response",
      description: "We respond to all inquiries within 2 hours during business days"
    },
    {
      icon: Heart,
      title: "Personalized Solutions",
      description: "Every solution is tailored specifically to your business needs"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Work directly with our senior AI engineers and consultants"
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "500+ successful projects with measurable ROI improvements"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 px-3 sm:px-4 py-1.5 sm:py-2 text-sm">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                Let's Build Something Amazing
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight px-2">
              Ready to Transform
              <span className="block">Your Business?</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              Connect with our AI experts and discover how we can revolutionize your operations, 
              boost efficiency, and drive unprecedented growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground px-4">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Free Consultation
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                24/7 Support
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                Custom Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card
                key={card.title}
                onClick={card.onClick}
                className="group bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:scale-105 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${card.bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-8 w-8 ${card.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-foreground font-medium mb-1">{card.details}</p>
                  <p className="text-sm text-muted-foreground mb-3">{card.description}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:bg-primary/10 group-hover:translate-y-[-2px] transition-transform"
                  >
                    {card.action}
                  </Button>
                </CardContent>
              </Card>
              
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="bg-gradient-card border-border/50 shadow-2xl hover:shadow-glow transition-all duration-500">
              <CardHeader className="pb-6 sm:pb-8">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl self-start">
                    <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                    Tell Us About Your Vision
                  </CardTitle>
                </div>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Share your project details and let's create something extraordinary together.
                </p>
              </CardHeader>
              <CardContent className="space-y-6 sm:space-y-8">
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-foreground font-medium text-sm sm:text-base">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your full name"
                        required
                        className="h-11 sm:h-12 bg-background/50 border-border/50 focus:border-primary/70 focus:ring-1 focus:ring-primary/20 text-sm sm:text-base"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-foreground font-medium text-sm sm:text-base">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your.email@company.com"
                        required
                        className="h-11 sm:h-12 bg-background/50 border-border/50 focus:border-primary/70 focus:ring-1 focus:ring-primary/20 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="industry" className="text-foreground font-medium text-sm sm:text-base">Industry</Label>
                      <Select name="industry" onValueChange={(value) => setFormData({...formData, industry: value})}>
                        <SelectTrigger className="h-11 sm:h-12 bg-background/50 border-border/50 focus:border-primary/70 text-sm sm:text-base">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="services" className="text-foreground font-medium text-sm sm:text-base">Services Needed</Label>
                      <Select name="services" onValueChange={(value) => setFormData({...formData, services: value})}>
                        <SelectTrigger className="h-11 sm:h-12 bg-background/50 border-border/50 focus:border-primary/70 text-sm sm:text-base">
                          <SelectValue placeholder="What do you need?" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-foreground font-medium text-sm sm:text-base">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your project vision, goals, timeline, budget range, and any specific requirements. The more details you share, the better we can help you!"
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary/70 focus:ring-1 focus:ring-primary/20 resize-none text-sm sm:text-base min-h-[120px] sm:min-h-[160px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-12 sm:h-14 bg-gradient-primary hover:shadow-glow transition-all duration-300 group text-base sm:text-lg font-semibold"
                  >
                    <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 group-hover:translate-x-1 transition-transform" />
                    <span className="hidden sm:inline">Send Message & Get Free Consultation</span>
                    <span className="sm:hidden">Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8 mt-6 lg:mt-0">
            {/* Why Choose Us */}
            <Card className="bg-gradient-card border-border/50 shadow-xl">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl font-bold text-foreground flex items-center">
                  <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2 sm:mr-3" />
                  Why Choose ThinkDevLabs?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div 
                      key={benefit.title}
                      className="flex items-start space-x-3 sm:space-x-4 animate-slide-up"
                      style={{ animationDelay: `${(index + 4) * 100}ms` }}
                    >
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{benefit.title}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-primary/10 border-primary/20 shadow-xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4 sm:mb-6 animate-glow" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  500+ Projects Delivered
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Join hundreds of satisfied clients who've transformed their businesses with our AI solutions.
                </p>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-primary">98%</div>
                    <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-primary">24/7</div>
                    <div className="text-xs text-muted-foreground">Support Coverage</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-primary">45%</div>
                    <div className="text-xs text-muted-foreground">Avg ROI Increase</div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;