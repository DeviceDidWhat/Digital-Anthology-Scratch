import { GameSpotlight } from "@/components/cards/GameSpotlight";
import { DecorativeDivider } from "@/components/decorative/DecorativeDivider";

export const GameOfDaySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display text-primary mb-4">
            Game of the Day
          </h2>
          <p className="text-muted-foreground">
            Today's featured challenge — earn bonus points by completing it!
          </p>
        </div>

        <DecorativeDivider className="mb-12" />

        <GameSpotlight
          title="Bandhani Pattern Match"
          description="Test your memory and learn the intricate tie-dye patterns of Rajasthani Bandhani textiles. Match the dots, discover the designs, and become a textile master!"
          category="Textiles & Prints"
          difficulty={3}
          playTime="5-8 min"
          icon="🔴"
        />
      </div>
    </section>
  );
};
