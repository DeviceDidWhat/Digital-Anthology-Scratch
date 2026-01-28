import { DecorativeDivider } from "@/components/decorative/DecorativeDivider";

const features = [
  {
    icon: "🎮",
    title: "25+ Interactive Games",
    description: "From memory matches to quizzes, puzzles to creative challenges"
  },
  {
    icon: "📚",
    title: "Authentic Learning",
    description: "Content crafted with cultural experts and historians"
  },
  {
    icon: "🏆",
    title: "Earn Achievements",
    description: "Collect badges and track your cultural knowledge journey"
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "For All Ages",
    description: "Suitable for ages 8+ with varying difficulty levels"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display text-primary mb-4">
            Why Learn with Us?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience Rajasthani heritage through joyful, engaging gameplay
          </p>
        </div>

        <DecorativeDivider className="mb-12" />

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group text-center p-6 md:p-8 rounded-2xl bg-card shadow-soft hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-mustard/20 to-terracotta/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-display text-primary mb-2 group-hover:text-mustard transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Cultural quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-display text-secondary italic max-w-3xl mx-auto">
            "पधारो म्हारे देश"
          </blockquote>
          <p className="text-muted-foreground mt-2">
            — Welcome to our land
          </p>
        </div>
      </div>
    </section>
  );
};
