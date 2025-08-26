import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, Target, Zap, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutTeamImage from "@/assets/about-team.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "60+", label: "AI Projects Delivered", icon: Brain },
    { number: "98%", label: "Client Satisfaction", icon: Award },
    { number: "24/7", label: "Support Coverage", icon: Zap },
    { number: "15+", label: "Expert Team Members", icon: Users },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of the curve with cutting-edge AI technologies and methodologies.",
      icon: Brain,
    },
    {
      title: "Client-Centric",
      description: "Your success is our priority. We build solutions tailored to your unique challenges.",
      icon: Target,
    },
    {
      title: "Excellence Driven",
      description: "We deliver high-quality solutions that exceed expectations and drive real results.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10">
                  About ThinkDevLabs
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Transforming Ideas Into 
                  <span className="block">AI-Powered Reality</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We are a team of passionate AI engineers, developers, and innovators dedicated to building 
                  intelligent solutions that drive business growth and technological advancement.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize AI technology by creating accessible, powerful, and ethical AI solutions 
                  that empower businesses to thrive in the digital age.
                </p>
              </div>
<Link to="/contact">
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
          >
                
                Get Started with Us
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
            </div>

            <div 
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="relative">
                <img
                  src={aboutTeamImage}
                  alt="ThinkDevLabs Team"
                  className="rounded-2xl shadow-3d hover:shadow-glow transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl"></div>
                
                {/* Floating stats */}
                <Card className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur border-primary/20">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                
                <Card className="absolute -top-6 -right-6 bg-card/90 backdrop-blur border-accent/20">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-accent">AI</div>
                    <div className="text-sm text-muted-foreground">Specialists</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={stat.label}
                  className={`bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values shape every project we undertake and every solution we deliver.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title}
                  className={`bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up group`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
              <Brain className="h-16 w-16 text-primary mx-auto mb-6 animate-glow" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how AI can revolutionize your operations and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  onClick={() => window.location.href = "/contact"}
                >
                  Start Your AI Journey
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/20 hover:bg-primary/10"
                  onClick={() => window.open('https://wa.me/923201417785', '_blank')}
                >
                  Schedule Consultation
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

export default About;