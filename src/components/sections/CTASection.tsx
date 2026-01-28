import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-secondary opacity-95" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="bandhani-pattern h-full w-full" />
      </div>

      {/* Floating decorations */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">🪔</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>🐪</div>
      <div className="absolute top-1/2 right-20 text-4xl opacity-15 animate-float" style={{ animationDelay: "0.5s" }}>✦</div>
      <div className="absolute top-1/3 left-20 text-4xl opacity-15 animate-float" style={{ animationDelay: "1.5s" }}>✦</div>

      <div className="relative container mx-auto px-4 text-center">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-mustard text-2xl">❋</span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-mustard/50 to-transparent" />
          <span className="text-mustard text-3xl">◆</span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-mustard/50 to-transparent" />
          <span className="text-mustard text-2xl">❋</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-display text-primary-foreground mb-4">
          Ready to Begin Your Journey?
        </h2>
        
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
          Start exploring the rich tapestry of Rajasthani culture through 25+ engaging mini-games
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="mustard" size="xl" className="group">
            Start Playing Now
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Button>
          <Button 
            variant="outline" 
            size="xl" 
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-12">
          <div className="text-center">
            <p className="text-4xl font-display text-mustard">10K+</p>
            <p className="text-primary-foreground/70 text-sm">Happy Learners</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-display text-mustard">100+</p>
            <p className="text-primary-foreground/70 text-sm">Cultural Facts</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-display text-mustard">4.9★</p>
            <p className="text-primary-foreground/70 text-sm">User Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};
