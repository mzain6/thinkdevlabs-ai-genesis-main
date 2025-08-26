import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain,
  Bot,
  Workflow,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Rocket,
  Target,
  Users,
  TrendingUp,
  Clock,
  Star,
  Globe,
  Database,
  MessageSquare,
  Code
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Solutions = () => {
  const [activeSolution, setActiveSolution] = useState("ai-agents");

  const solutionCategories = [
    { id: "ai-agents", name: "AI Agents", icon: Bot },
    { id: "automation", name: "Automation", icon: Workflow },
    { id: "analytics", name: "Analytics", icon: BarChart3 },
    { id: "integration", name: "Integration", icon: Globe }
  ];

  const solutions = {
    "ai-agents": {
      title: "Intelligent AI Agents",
      description: "Custom AI agents that understand your business and automate complex tasks with human-like intelligence.",
      features: [
        "Natural Language Processing",
        "Multi-modal AI capabilities", 
        "Custom training on your data",
        "24/7 autonomous operation",
        "Learning and adaptation",
        "Seamless human handoff"
      ],
      benefits: [
        "Reduce operational costs by 40-60%",
        "Improve response times by 10x",
        "Handle unlimited concurrent requests",
        "Consistent service quality"
      ],
      useCases: [
        {
          title: "Customer Service Agent",
          description: "AI-powered support that handles inquiries, resolves issues, and escalates complex cases.",
          roi: "60% reduction in support costs"
        },
        {
          title: "Sales Assistant", 
          description: "Qualify leads, schedule meetings, and provide product information 24/7.",
          roi: "45% increase in qualified leads"
        },
        {
          title: "Content Creation Agent",
          description: "Generate marketing copy, social media posts, and documentation automatically.",
          roi: "70% faster content production"
        }
      ]
    },
    "automation": {
      title: "Intelligent Process Automation",
      description: "Transform manual workflows into intelligent, self-managing processes that adapt and improve over time.",
      features: [
        "Workflow orchestration",
        "Document processing automation",
        "Data entry elimination", 
        "Rule-based decision making",
        "Exception handling",
        "Performance monitoring"
      ],
      benefits: [
        "Eliminate 80% of manual tasks",
        "Reduce processing time by 90%",
        "Minimize human errors",
        "Scale operations effortlessly"
      ],
      useCases: [
        {
          title: "Invoice Processing",
          description: "Automatically extract, validate, and process invoices from multiple sources.",
          roi: "85% reduction in processing time"
        },
        {
          title: "Employee Onboarding",
          description: "Streamline new hire processes from application to first day automation.",
          roi: "50% faster onboarding process"
        },
        {
          title: "Data Migration",
          description: "Intelligent data mapping and migration between systems with validation.",
          roi: "95% accuracy improvement"
        }
      ]
    },
    "analytics": {
      title: "Predictive Analytics & Insights", 
      description: "Transform your data into actionable insights with AI-powered analytics and forecasting.",
      features: [
        "Real-time data processing",
        "Predictive modeling",
        "Anomaly detection",
        "Custom dashboards",
        "Automated reporting",
        "Performance forecasting"
      ],
      benefits: [
        "Predict trends with 90% accuracy", 
        "Identify opportunities 3x faster",
        "Reduce risks through early detection",
        "Data-driven decision making"
      ],
      useCases: [
        {
          title: "Sales Forecasting",
          description: "Predict sales trends and optimize inventory based on multiple data sources.",
          roi: "30% improvement in forecast accuracy"
        },
        {
          title: "Customer Churn Prediction",
          description: "Identify at-risk customers and trigger retention campaigns automatically.",
          roi: "25% reduction in customer churn"
        },
        {
          title: "Market Analysis",
          description: "Real-time market intelligence and competitive analysis for strategic planning.",
          roi: "40% faster market response"
        }
      ]
    },
    "integration": {
      title: "Seamless AI Integration",
      description: "Connect AI capabilities with your existing systems and workflows for maximum impact.",
      features: [
        "API-first architecture",
        "Legacy system integration",
        "Real-time synchronization",
        "Data security compliance",
        "Scalable infrastructure", 
        "Multi-platform support"
      ],
      benefits: [
        "Preserve existing investments",
        "Minimize disruption during rollout",
        "Unified data ecosystem",
        "Enhanced system capabilities"
      ],
      useCases: [
        {
          title: "CRM Enhancement",
          description: "Add AI-powered lead scoring and customer insights to existing CRM systems.",
          roi: "35% increase in sales conversion"
        },
        {
          title: "ERP Integration",
          description: "Intelligent automation within enterprise resource planning systems.",
          roi: "50% reduction in manual data entry"
        },
        {
          title: "E-commerce Platform",
          description: "AI-powered recommendations and personalization for online stores.",
          roi: "25% increase in average order value"
        }
      ]
    }
  };

  const activeSolutionData = solutions[activeSolution as keyof typeof solutions];

  const implementationSteps = [
    {
      icon: Lightbulb,
      title: "Discovery & Strategy",
      description: "Deep dive into your business needs and define the optimal AI solution approach.",
      duration: "1-2 weeks"
    },
    {
      icon: Code,
      title: "Custom Development", 
      description: "Build and train AI models specifically for your use case and data.",
      duration: "4-8 weeks"
    },
    {
      icon: Rocket,
      title: "Deployment & Testing",
      description: "Secure deployment with comprehensive testing and performance validation.",
      duration: "1-2 weeks"
    },
    {
      icon: TrendingUp,
      title: "Optimization & Scale",
      description: "Continuous monitoring, optimization, and scaling based on performance data.",
      duration: "Ongoing"
    }
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Proven Results",
      description: "Over 60+ successful AI implementations with measurable ROI improvements.",
      stat: "60+ Projects"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security and compliance with industry standards and regulations.",
      stat: "100% Secure"
    },
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "Get your AI solutions live in weeks, not months, with our proven methodology.",
      stat: "4-8 Weeks"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated AI specialists and industry experts for every project.",
      stat: "15+ Experts"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/10 mb-6">
            AI Solutions
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Transform Your Business
            <span className="block">with Intelligent Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover how our AI-powered solutions can revolutionize your operations, 
            increase efficiency, and drive unprecedented growth for your business.
          </p>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {solutionCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeSolution === category.id ? "default" : "outline"}
                  onClick={() => setActiveSolution(category.id)}
                  className={`flex items-center space-x-2 ${
                    activeSolution === category.id 
                      ? "bg-gradient-primary hover:shadow-glow" 
                      : "border-primary/20 hover:bg-primary/10"
                  }`}
                  size="lg"
                >
                  <Icon className="h-5 w-5" />
                  <span>{category.name}</span>
                </Button>
              );
            })}
          </div>

          {/* Active Solution Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {activeSolutionData.title}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {activeSolutionData.description}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {activeSolutionData.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Business Benefits</h3>
                <div className="space-y-3">
                  {activeSolutionData.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Real-World Applications</h3>
              {activeSolutionData.useCases.map((useCase, index) => (
                <Card 
                  key={useCase.title}
                  className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-lg">{useCase.title}</span>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {useCase.roi}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <Button variant="ghost" className="group p-0 h-auto">
                     
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              How We Implement Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology ensures successful delivery and maximum ROI for your AI investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={step.title}
                  className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                    <Badge variant="outline" className="text-primary border-primary/20">
                      {step.duration}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Why Choose ThinkDevLabs?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine deep AI expertise with business acumen to deliver solutions that truly transform your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card 
                  key={reason.title}
                  className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 hover:scale-105 animate-slide-up text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-foreground mb-4">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{reason.description}</p>
                    <div className="text-2xl font-bold text-primary">{reason.stat}</div>
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
                Let's discuss how our AI solutions can address your specific challenges and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">

                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  onClick={() => window.location.href = "/contact"}
                >
                  Start Your AI Journey
                </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/20 hover:bg-primary/10"
                  onClick={() => window.open('https://wa.me/923201417785', '_blank')}
                >
                  Schedule Discovery Call
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

export default Solutions;