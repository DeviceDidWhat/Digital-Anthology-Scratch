import { Button } from "@/components/ui/button";
import heroLandscape from "@/assets/hero-landscape.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/i18n/translations";

export const HeroSection = () => {
  const { language } = useLanguage();
  const copy = getTranslations(language).hero;

  const handleExploreClick = () => {
    const section = document.getElementById("categories");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroLandscape})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-32">
        <div className="absolute left-[10%] top-4 h-32 w-20 origin-top rotate-12 animate-wave rounded-b-full bg-secondary/80" />
        <div
          className="absolute left-[25%] top-2 h-28 w-16 origin-top -rotate-6 animate-wave rounded-b-full bg-primary/80"
          style={{ animationDelay: "0.3s" }}
        />
        <div
          className="absolute right-[20%] top-6 h-30 w-18 origin-top rotate-6 animate-wave rounded-b-full bg-mustard/80"
          style={{ animationDelay: "0.6s" }}
        />
        <div
          className="absolute right-[35%] top-3 h-24 w-14 origin-top -rotate-12 animate-wave rounded-b-full bg-peacock/80"
          style={{ animationDelay: "0.9s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="text-3xl animate-diya">🪔</span>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-mustard to-transparent" />
          <span className="text-2xl text-mustard">❋</span>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-mustard to-transparent" />
          <span className="text-3xl animate-diya" style={{ animationDelay: "0.5s" }}>
            🪔
          </span>
        </div>

        <h1 className="mb-6 animate-fade-in font-display text-5xl text-primary drop-shadow-lg md:text-7xl lg:text-8xl">
          {copy.title}
        </h1>

        <p
          className="mx-auto mb-10 max-w-2xl animate-fade-in font-body text-xl leading-relaxed text-foreground/90 md:text-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          {copy.tagline}
        </p>

        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button
            variant="hero"
            size="xl"
            className="group"
            onClick={handleExploreClick}
          >
            <span>{copy.cta}</span>
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Button>
        </div>

        <div
          className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in md:gap-16"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="text-center">
            <p className="font-display text-3xl text-mustard md:text-4xl">25+</p>
            <p className="text-sm text-muted-foreground">{copy.miniGames}</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl text-secondary md:text-4xl">6</p>
            <p className="text-sm text-muted-foreground">{copy.categories}</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl text-peacock md:text-4xl">∞</p>
            <p className="text-sm text-muted-foreground">{copy.funLearning}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full fill-background">
          <path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
