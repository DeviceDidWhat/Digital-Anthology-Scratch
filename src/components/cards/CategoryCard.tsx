import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatGameCount } from "@/i18n/translations";

interface CategoryCardProps {
  title: string;
  description: string;
  gameCount: number;
  icon: string;
  gradient: string;
  patternColor: string;
  categoryId: string;
  delay?: number;
}

export const CategoryCard = ({
  title,
  description,
  gameCount,
  icon,
  gradient,
  patternColor,
  categoryId,
  delay = 0,
}: CategoryCardProps) => {
  const { language } = useLanguage();

  return (
    <Link to={`/category/${categoryId}`}>
      <article
        className="group relative cursor-pointer overflow-hidden rounded-2xl hover-lift animate-slide-up"
        style={{ animationDelay: `${delay}s` }}
      >
        <div
          className={cn(
            "absolute inset-0 transition-transform duration-500 group-hover:scale-105",
            gradient,
          )}
        />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, ${patternColor} 2px, transparent 2px)`,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="absolute left-0 top-0 h-16 w-16 opacity-20">
          <svg viewBox="0 0 64 64" className="h-full w-full fill-current text-white">
            <path d="M0,0 Q32,0 32,32 L0,32 Z" />
          </svg>
        </div>
        <div className="absolute right-0 top-0 h-16 w-16 rotate-90 opacity-20">
          <svg viewBox="0 0 64 64" className="h-full w-full fill-current text-white">
            <path d="M0,0 Q32,0 32,32 L0,32 Z" />
          </svg>
        </div>

        <div className="relative z-10 flex min-h-[280px] flex-col p-6 text-white md:p-8">
          <div className="mb-4 text-5xl" style={{ animationDelay: `${delay * 0.5}s` }}>
            {icon}
          </div>

          <h3 className="mb-2 font-display text-2xl transition-colors group-hover:text-mustard md:text-3xl">
            {title}
          </h3>

          <p className="mb-4 flex-grow line-clamp-2 text-sm text-white/80">
            {description}
          </p>

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
              <span className="text-mustard">🎮</span>
              {formatGameCount(language, gameCount)}
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-1 group-hover:bg-mustard group-hover:text-mustard-foreground">
              →
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </article>
    </Link>
  );
};
