import { DecorativeDivider } from "@/components/decorative/DecorativeDivider";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/i18n/translations";

export const FeaturesSection = () => {
  const { language } = useLanguage();
  const copy = getTranslations(language).features;

  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl text-primary md:text-5xl">
            {copy.title}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {copy.description}
          </p>
        </div>

        <DecorativeDivider className="mb-12" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {copy.items.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-card p-6 text-center shadow-soft hover-lift animate-fade-in md:p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-mustard/20 to-terracotta/20 text-4xl transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-display text-primary transition-colors group-hover:text-mustard">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <blockquote className="mx-auto max-w-3xl font-display text-2xl italic text-secondary md:text-3xl">
            "पधारो म्हारे देश"
          </blockquote>
          <p className="mt-2 text-muted-foreground">- {copy.quoteLabel}</p>
        </div>
      </div>
    </section>
  );
};
