import { Button } from "@/components/ui/button";
import heroLandscape from "@/assets/hero-landscape.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroLandscape})` }}
      >
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Floating textile banners decoration */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none">
        <div className="absolute top-4 left-[10%] w-20 h-32 bg-secondary/80 rotate-12 animate-wave origin-top rounded-b-full" />
        <div className="absolute top-2 left-[25%] w-16 h-28 bg-primary/80 -rotate-6 animate-wave origin-top rounded-b-full" style={{ animationDelay: "0.3s" }} />
        <div className="absolute top-6 right-[20%] w-18 h-30 bg-mustard/80 rotate-6 animate-wave origin-top rounded-b-full" style={{ animationDelay: "0.6s" }} />
        <div className="absolute top-3 right-[35%] w-14 h-24 bg-peacock/80 -rotate-12 animate-wave origin-top rounded-b-full" style={{ animationDelay: "0.9s" }} />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center px-6 py-20 max-w-4xl mx-auto">
        {/* Decorative element above title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-3xl animate-diya">🪔</span>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-mustard to-transparent" />
          <span className="text-mustard text-2xl">❋</span>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-mustard to-transparent" />
          <span className="text-3xl animate-diya" style={{ animationDelay: "0.5s" }}>🪔</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-primary mb-6 drop-shadow-lg animate-fade-in">
          Rangilo Rajasthan
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-foreground/90 font-body mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Learn the colors, crafts, and stories of Rajasthan through play
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" size="xl" className="group">
            <span>Start Exploring</span>
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Button>
        </div>

        {/* Stats or quick info */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display text-mustard">25+</p>
            <p className="text-sm text-muted-foreground">Mini Games</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display text-secondary">6</p>
            <p className="text-sm text-muted-foreground">Categories</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-display text-peacock">∞</p>
            <p className="text-sm text-muted-foreground">Fun & Learning</p>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full fill-background">
          <path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
