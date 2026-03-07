import { GameCard } from "@/components/cards/GameCard";
import { DecorativeDivider } from "@/components/decorative/DecorativeDivider";
import { scratchGames } from "@/data/scratchGames";

export const ScratchGamesSection = () => {
  return (
    <section
      id="scratch-games"
      className="container mx-auto px-4 py-16 md:py-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-display text-primary mb-4">
          Scratch Games
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Play Scratch projects directly from the homepage alongside the rest of
          the anthology.
        </p>
      </div>

      <DecorativeDivider className="mb-12" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {scratchGames.map((game, index) => (
          <GameCard key={game.id} {...game} delay={index * 0.08} />
        ))}
      </div>
    </section>
  );
};
