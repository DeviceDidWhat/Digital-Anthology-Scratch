import { GameCard } from "@/components/cards/GameCard";
import { DecorativeDivider } from "@/components/decorative/DecorativeDivider";
import { scratchGames } from "@/data/scratchGames";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedValue, getTranslations } from "@/i18n/translations";

export const ScratchGamesSection = () => {
  const { language } = useLanguage();
  const copy = getTranslations(language).scratchSection;

  return (
    <section id="scratch-games" className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-display text-3xl text-primary md:text-5xl">
          {copy.title}
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          {copy.description}
        </p>
      </div>

      <DecorativeDivider className="mb-12" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {scratchGames.map((game, index) => (
          <GameCard
            key={game.id}
            title={getLocalizedValue(language, game.title, game.titleHi)}
            description={getLocalizedValue(
              language,
              game.description,
              game.descriptionHi,
            )}
            difficulty={game.difficulty}
            playTime={game.playTime}
            icon={game.icon}
            gradient={game.gradient}
            patternColor={game.patternColor}
            externalUrl={game.externalUrl}
            badgeLabel={copy.badge}
            delay={index * 0.08}
          />
        ))}
      </div>
    </section>
  );
};
