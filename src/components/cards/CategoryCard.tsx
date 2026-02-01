import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  description: string;
  gameCount: number;
  icon: string;
  gradient: string;
  patternColor: string;
  categoryId?: string;
  delay?: number;
}

// Map category titles to their route IDs
const getCategoryId = (title: string): string => {
  const mapping: Record<string, string> = {
    "Textiles & Prints": "textiles",
    "Folk Art & Handicrafts": "folk-art",
    "Desert Life & Nature": "desert-life",
    "Music & Dance": "music-dance",
    "Cuisine & Spices": "cuisine",
    "Festivals & Traditions": "festivals",
  };
  return mapping[title] || title.toLowerCase().replace(/\s+/g, '-');
};

export const CategoryCard = ({
  title,
  description,
  gameCount,
  icon,
  gradient,
  patternColor,
  categoryId,
  delay = 0
}: CategoryCardProps) => {
  const routeId = categoryId || getCategoryId(title);

  return (
    <Link to={`/category/${routeId}`}>
      <article 
        className="group relative overflow-hidden rounded-2xl hover-lift cursor-pointer animate-slide-up"
        style={{ animationDelay: `${delay}s` }}
      >
        {/* Background with gradient */}
        <div className={cn(
          "absolute inset-0 transition-transform duration-500 group-hover:scale-105",
          gradient
        )} />
        
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, ${patternColor} 2px, transparent 2px)`,
            backgroundSize: "20px 20px"
          }}
        />

        {/* Decorative corner arches */}
        <div className="absolute top-0 left-0 w-16 h-16 opacity-20">
          <svg viewBox="0 0 64 64" className="w-full h-full fill-current text-white">
            <path d="M0,0 Q32,0 32,32 L0,32 Z" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-16 h-16 opacity-20 rotate-90">
          <svg viewBox="0 0 64 64" className="w-full h-full fill-current text-white">
            <path d="M0,0 Q32,0 32,32 L0,32 Z" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-8 text-white min-h-[280px] flex flex-col">
          {/* Icon */}
          <div className="text-5xl mb-4" style={{ animationDelay: `${delay * 0.5}s` }}>
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-display mb-2 group-hover:text-mustard transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-white/80 text-sm mb-4 flex-grow line-clamp-2">
            {description}
          </p>

          {/* Game count badge */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium">
              <span className="text-mustard">🎮</span>
              {gameCount} Games
            </span>
            
            {/* Arrow indicator */}
            <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-mustard group-hover:text-mustard-foreground transition-all duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </article>
    </Link>
  );
};
