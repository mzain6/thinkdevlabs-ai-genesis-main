import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      image: "👩‍💼",
      rating: 5,
      review: "ThinkDevLabs created an amazing chatbot for our customer service. It handles 80% of our queries automatically and our customers love the instant responses. The team was professional and delivered on time.",
      service: "Chatbot Development"
    },
    {
      name: "Michael Chen",
      company: "EcommerceMax",
      image: "👨‍💻",
      rating: 5,
      review: "The website they built for us is incredible! Modern design, lightning fast, and the AI features they integrated have boosted our conversion rates by 40%. Highly recommend their web development services.",
      service: "Website Development"
    },
    {
      name: "Emily Rodriguez",
      company: "HealthCare Solutions",
      image: "👩‍⚕️",
      rating: 5,
      review: "Our AI chatbot from ThinkDevLabs has revolutionized patient interactions. It schedules appointments, answers medical FAQs, and provides 24/7 support. The implementation was seamless and the results are outstanding.",
      service: "AI Chatbot"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Real feedback from businesses we've helped transform with AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={review.name}
              className="group bg-gradient-card border-border/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">{review.image}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{review.name}</h3>
                    <p className="text-sm text-foreground/60">{review.company}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4">
                  "{review.review}"
                </p>

                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
                  <span className="text-xs font-medium text-primary">{review.service}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;