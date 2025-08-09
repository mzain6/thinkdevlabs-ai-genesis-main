import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";
import heroImage from "@/assets/hero-ai-brain.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-8 sm:pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-5 w-5 text-primary animate-glow" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                AI Revolution Starts Here
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">AI Agents that</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transform
              </span>{" "}
              <span className="text-foreground">&</span>
              <br />
              <span className="text-foreground">Scale</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Business
              </span>
            </h1>

            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              ThinkDevLabs creates intelligent AI agents that automate workflows,
              enhance customer experiences, and drive exponential growth for modern businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = "/contact"}
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                onClick={() => window.open('https://wa.me/923201417785', '_blank')}
              >
                WhatsApp Us
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-foreground/60">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="h-4 w-4 text-accent" />
                <span>Advanced AI</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20 animate-glow" />
            <div className="relative bg-gradient-card rounded-3xl p-8 shadow-3d border border-border/20">
              <img
                src={heroImage}
                alt="AI Brain Network"
                className="w-full h-auto rounded-2xl shadow-elevation"
              />

              {/* Floating UI elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-glow animate-float">
                99.9% Uptime
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-glow animate-float"
                style={{ animationDelay: "1s" }}
              >
                Smart AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
