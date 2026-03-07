import { CategoryCard } from "@/components/cards/CategoryCard";
import { DecorativeDivider } from "@/components/decorative/DecorativeDivider";
import { categories, games } from "@/data/games";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedValue, getTranslations } from "@/i18n/translations";

export const CategoriesSection = () => {
  const { language } = useLanguage();
  const copy = getTranslations(language).categoriesSection;

  return (
    <section id="categories" className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-display text-3xl text-primary md:text-5xl">
          {copy.title}
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          {copy.description}
        </p>
      </div>

      <DecorativeDivider className="mb-12" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {Object.values(categories).map((category, index) => (
          <CategoryCard
            key={category.id}
            categoryId={category.id}
            title={getLocalizedValue(language, category.title, category.titleHi)}
            description={getLocalizedValue(
              language,
              category.description,
              category.descriptionHi,
            )}
            gameCount={games.filter((game) => game.category === category.id).length}
            icon={category.icon}
            gradient={category.gradient}
            patternColor="#d4a574"
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};
