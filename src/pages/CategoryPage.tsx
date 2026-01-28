import { useState, useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GameCard } from "@/components/cards/GameCard";
import { CategoryFilters } from "@/components/filters/CategoryFilters";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { DecorativeDivider } from "@/components/decorative/DecorativeDivider";
import { getGamesByCategory, getCategoryInfo, categories } from "@/data/games";
import type { Game } from "@/data/games";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const categoryInfo = categoryId ? getCategoryInfo(categoryId) : null;
  const allGames = categoryId ? getGamesByCategory(categoryId) : [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [categoryId]);

  // Filter games based on search and filters
  const filteredGames = useMemo(() => {
    return allGames.filter((game: Game) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!game.title.toLowerCase().includes(query) && 
            !game.description.toLowerCase().includes(query)) {
          return false;
        }
      }

      // Difficulty filter
      if (selectedDifficulty && game.difficulty !== selectedDifficulty) {
        return false;
      }

      // Time filter
      if (selectedTime) {
        if (selectedTime === 'quick' && game.playTime >= 7) return false;
        if (selectedTime === 'medium' && (game.playTime < 7 || game.playTime > 10)) return false;
        if (selectedTime === 'long' && game.playTime <= 10) return false;
      }

      return true;
    });
  }, [allGames, searchQuery, selectedDifficulty, selectedTime]);

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">🏜️</span>
            <h1 className="text-3xl font-display text-primary mb-4">Category Not Found</h1>
            <p className="text-muted-foreground mb-6">This category seems to have wandered into the desert.</p>
            <Link to="/" className="text-mustard hover:underline">
              ← Return to Homepage
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero banner */}
        <section className={`${categoryInfo.gradient} relative py-12 md:py-16 overflow-hidden`}>
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10 bandhani-pattern" />
          
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 text-white/20 text-4xl">❋</div>
          <div className="absolute bottom-4 right-4 text-white/20 text-4xl">❋</div>
          
          <div className="container mx-auto px-4 relative z-10">
            <BreadcrumbNav 
              items={[
                { label: categoryInfo.title }
              ]} 
            />
            
            <div className="mt-6 flex items-center gap-4 md:gap-6">
              <span className="text-5xl md:text-7xl animate-float">
                {categoryInfo.icon}
              </span>
              <div>
                <h1 className="text-3xl md:text-5xl font-display text-white mb-2">
                  {categoryInfo.title}
                </h1>
                <p className="text-white/80 text-sm md:text-base max-w-xl">
                  {categoryInfo.description}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 text-white/70 text-sm">
              <span className="flex items-center gap-1">
                <span>🎮</span>
                <span>{allGames.length} games</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="flex items-center gap-1">
                <span>⭐</span>
                <span>All skill levels</span>
              </span>
            </div>
          </div>
        </section>

        {/* Filters and games grid */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          {/* Filters */}
          <div className="mb-8">
            <CategoryFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedDifficulty={selectedDifficulty}
              onDifficultyChange={setSelectedDifficulty}
              selectedTime={selectedTime}
              onTimeChange={setSelectedTime}
            />
          </div>

          <DecorativeDivider className="mb-8" />

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-medium">{filteredGames.length}</span> 
              {filteredGames.length === 1 ? ' game' : ' games'}
              {(searchQuery || selectedDifficulty || selectedTime) && ' (filtered)'}
            </p>
          </div>

          {/* Games grid */}
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.map((game, index) => (
                <GameCard
                  key={game.id}
                  {...game}
                  delay={index * 0.05}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-5xl mb-4 block">🔍</span>
              <h3 className="text-xl font-display text-primary mb-2">No games found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDifficulty(null);
                  setSelectedTime(null);
                }}
                className="text-mustard hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>

        {/* Other categories suggestion */}
        <section className="container mx-auto px-4 py-8 mb-8">
          <h2 className="text-2xl font-display text-primary mb-6 text-center">
            Explore Other Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(categories)
              .filter(cat => cat.id !== categoryId)
              .map(cat => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.id}`}
                  className="px-4 py-2 rounded-full bg-card border border-border hover:border-mustard hover:bg-mustard/10 transition-all flex items-center gap-2 group"
                >
                  <span>{cat.icon}</span>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                    {cat.title}
                  </span>
                </Link>
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
