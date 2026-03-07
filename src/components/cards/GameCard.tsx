import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatMinuteLabel, getTranslations } from "@/i18n/translations";

interface GameCardProps {
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  playTime: number;
  icon: string;
  gradient: string;
  patternColor: string;
  externalUrl?: string;
  badgeLabel?: string;
  delay?: number;
}

const DifficultyStars = ({
  difficulty,
}: {
  difficulty: "easy" | "medium" | "hard";
}) => {
  const count = difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3;

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((star) => (
        <span
          key={star}
          className={`text-sm ${star <= count ? "text-mustard" : "text-muted-foreground/30"}`}
        >
          ✦
        </span>
      ))}
    </div>
  );
};

export const GameCard = ({
  title,
  description,
  difficulty,
  playTime,
  icon,
  gradient,
  patternColor,
  externalUrl,
  badgeLabel,
  delay = 0,
}: GameCardProps) => {
  const { language } = useLanguage();
  const copy = getTranslations(language).gameCard;

  const handlePlayClick = () => {
    if (externalUrl) {
      window.open(externalUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="group card-rajasthani hover-lift overflow-hidden"
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className={`${gradient} relative flex h-32 items-center justify-center overflow-hidden`}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${patternColor} 1px, transparent 1px)`,
            backgroundSize: "12px 12px",
          }}
        />

        <div className="relative z-10">
          <span className="text-5xl drop-shadow-lg group-hover:animate-float">
            {icon}
          </span>
        </div>

        <div className="absolute left-2 top-2 text-lg text-white/40">❋</div>
        <div className="absolute right-2 top-2 text-lg text-white/40">❋</div>
      </div>

      <div className="p-5">
        {badgeLabel && (
          <div className="mb-3 inline-flex items-center rounded-full bg-mustard/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-mustard">
            {badgeLabel}
          </div>
        )}

        <h3 className="mb-2 font-display text-xl text-primary transition-colors group-hover:text-secondary">
          {title}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-muted-foreground">
                {copy.difficulty}
              </span>
              <DifficultyStars difficulty={difficulty} />
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>⏱️</span>
            <span>{formatMinuteLabel(language, playTime)}</span>
          </div>
        </div>

        <Button
          variant="mustard"
          className="w-full transition-shadow group-hover:shadow-lg"
          onClick={handlePlayClick}
          disabled={!externalUrl}
        >
          {externalUrl ? copy.playNow : copy.comingSoon}
          {externalUrl && (
            <span className="ml-1 transition-transform group-hover:translate-x-1">
              →
            </span>
          )}
        </Button>
      </div>

      <div
        className="h-1.5"
        style={{
          background: `linear-gradient(90deg, ${patternColor}40, ${patternColor}, ${patternColor}40)`,
        }}
      />
    </div>
  );
};
