import { JharokhaFrame } from "@/components/decorative/JharokhaFrame";
import { Button } from "@/components/ui/button";

interface GameSpotlightProps {
  title: string;
  description: string;
  category: string;
  difficulty: number;
  playTime: string;
  icon: string;
}

export const GameSpotlight = ({
  title,
  description,
  category,
  difficulty,
  playTime,
  icon
}: GameSpotlightProps) => {
  return (
    <JharokhaFrame className="max-w-4xl mx-auto">
      <div className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Game illustration placeholder */}
          <div className="w-full md:w-1/3 aspect-square rounded-xl bg-gradient-to-br from-mustard/20 to-terracotta/20 flex items-center justify-center text-8xl animate-float">
            {icon}
          </div>

          {/* Game info */}
          <div className="flex-1 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-mustard/10 text-mustard px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <span className="animate-pulse">⭐</span>
              Game of the Day
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-display text-primary mb-3">
              {title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground mb-6 max-w-lg">
              {description}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 text-sm">
                <span className="text-peacock">🏷️</span>
                {category}
              </span>
              <span className="inline-flex items-center gap-2 text-sm">
                <span className="text-terracotta">⏱️</span>
                {playTime}
              </span>
              <span className="inline-flex items-center gap-2 text-sm">
                {/* Indian-style difficulty stars using traditional motifs */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <span 
                    key={i} 
                    className={i < difficulty ? "text-mustard" : "text-muted"}
                  >
                    ✦
                  </span>
                ))}
              </span>
            </div>

            {/* CTA */}
            <Button variant="mustard" size="lg" className="group">
              Play Now
              <span className="inline-block transition-transform group-hover:translate-x-1">🎮</span>
            </Button>
          </div>
        </div>
      </div>
    </JharokhaFrame>
  );
};
