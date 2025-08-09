const TrustedBrands = () => {
  const logos = [
    { name: "TechFlow", logo: "🚀" },
    { name: "DataCorp", logo: "📊" },
    { name: "AIVision", logo: "👁️" },
    { name: "CloudNext", logo: "☁️" },
    { name: "InnovateLab", logo: "🔬" },
    { name: "SmartWave", logo: "🌊" },
    { name: "FutureLink", logo: "🔗" },
    { name: "QuantumEdge", logo: "⚡" },
    { name: "NeuralNet", logo: "🧠" },
    { name: "CodeCraft", logo: "⚙️" },
    { name: "PixelPro", logo: "🎨" },
    { name: "DigiForge", logo: "🔥" }
  ];

  // Duplicate the array for seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by <span className="bg-gradient-primary bg-clip-text text-transparent">50+ Companies</span> Globally
          </h2>
          <p className="text-foreground/60">Leading businesses choose our AI solutions to transform their operations</p>
        </div>
        
        {/* Moving Logo Carousel */}
        <div className="relative">
          <div className="flex animate-[scroll_30s_linear_infinite] space-x-8">
            {duplicatedLogos.map((brand, index) => (
              <div 
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="h-20 w-32 bg-gradient-card rounded-lg border border-border/20 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-glow hover:border-primary/50 group-hover:scale-105">
                  <span className="text-2xl mb-1">{brand.logo}</span>
                  <span className="text-xs font-medium text-foreground/60 group-hover:text-foreground transition-colors">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-card rounded-full px-6 py-3 border border-border/20">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-primary rounded-full animate-glow" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground/80">From 60+ successful AI implementations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;