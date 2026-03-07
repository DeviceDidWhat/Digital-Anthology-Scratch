import { Button } from "@/components/ui/button";

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

const DifficultyStars = ({ difficulty }: { difficulty: 'easy' | 'medium' | 'hard' }) => {
  const count = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3;
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((star) => (
        <span 
          key={star} 
          className={`text-sm ${star <= count ? 'text-mustard' : 'text-muted-foreground/30'}`}
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
  delay = 0 
}: GameCardProps) => {
  const handlePlayClick = () => {
    if (externalUrl) {
      window.open(externalUrl, '_blank', 'noopener,noreferrer');
    }
  };
  return (
    <div 
      className="group card-rajasthani hover-lift overflow-hidden"
      style={{ 
        animationDelay: `${delay}s`,
      }}
    >
      {/* Top decorative band with icon */}
      <div className={`${gradient} relative h-32 flex items-center justify-center overflow-hidden`}>
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${patternColor} 1px, transparent 1px)`,
            backgroundSize: '12px 12px',
          }}
        />
        
        {/* Floating icon */}
        <div className="relative z-10">
          <span className="text-5xl group-hover:animate-float drop-shadow-lg">
            {icon}
          </span>
        </div>

        {/* Decorative corners */}
        <div className="absolute top-2 left-2 text-white/40 text-lg">❋</div>
        <div className="absolute top-2 right-2 text-white/40 text-lg">❋</div>
      </div>

      {/* Content */}
      <div className="p-5">
        {badgeLabel && (
          <div className="mb-3 inline-flex items-center rounded-full bg-mustard/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-mustard">
            {badgeLabel}
          </div>
        )}

        <h3 className="font-display text-xl text-primary mb-2 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Meta info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Difficulty */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-muted-foreground">Difficulty:</span>
              <DifficultyStars difficulty={difficulty} />
            </div>
          </div>
          
          {/* Play time */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>⏱️</span>
            <span>{playTime} min</span>
          </div>
        </div>

        {/* Play button */}
        <Button 
          variant="mustard" 
          className="w-full group-hover:shadow-lg transition-shadow"
          onClick={handlePlayClick}
          disabled={!externalUrl}
        >
          {externalUrl ? 'Play Now' : 'Coming Soon'}
          {externalUrl && <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>}
        </Button>
      </div>

      {/* Bottom decorative border */}
      <div 
        className="h-1.5"
        style={{
          background: `linear-gradient(90deg, ${patternColor}40, ${patternColor}, ${patternColor}40)`
        }}
      />
    </div>
  );
};
