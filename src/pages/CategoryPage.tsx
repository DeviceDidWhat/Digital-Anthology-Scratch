import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { GameCard } from "@/components/cards/GameCard";
import { CategoryFilters } from "@/components/filters/CategoryFilters";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { DecorativeDivider } from "@/components/decorative/DecorativeDivider";
import { categories, getCategoryInfo, getGamesByCategory } from "@/data/games";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  formatGameCount,
  getLocalizedValue,
  getTranslations,
} from "@/i18n/translations";
import type { Game } from "@/data/games";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { language } = useLanguage();
  const copy = getTranslations(language).categoryPage;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const categoryInfo = categoryId ? getCategoryInfo(categoryId) : null;
  const allGames = categoryId ? getGamesByCategory(categoryId) : [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [categoryId]);

  const filteredGames = useMemo(() => {
    return allGames.filter((game: Game) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const englishText = `${game.title} ${game.description}`.toLowerCase();
        const hindiText = `${game.titleHi} ${game.descriptionHi}`.toLowerCase();

        if (!englishText.includes(query) && !hindiText.includes(query)) {
          return false;
        }
      }

      if (selectedDifficulty && game.difficulty !== selectedDifficulty) {
        return false;
      }

      if (selectedTime) {
        if (selectedTime === "quick" && game.playTime >= 7) return false;
        if (
          selectedTime === "medium" &&
          (game.playTime < 7 || game.playTime > 10)
        ) {
          return false;
        }
        if (selectedTime === "long" && game.playTime <= 10) return false;
      }

      return true;
    });
  }, [allGames, searchQuery, selectedDifficulty, selectedTime]);

  if (!categoryInfo) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 items-center justify-center pt-16">
          <div className="py-20 text-center">
            <span className="mb-4 block text-6xl">🏜️</span>
            <h1 className="mb-4 text-3xl font-display text-primary">
              {copy.categoryNotFound}
            </h1>
            <p className="mb-6 text-muted-foreground">{copy.categoryMissing}</p>
            <Link to="/" className="text-mustard hover:underline">
              ← {copy.returnHome}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryTitle = getLocalizedValue(
    language,
    categoryInfo.title,
    categoryInfo.titleHi,
  );
  const categoryDescription = getLocalizedValue(
    language,
    categoryInfo.description,
    categoryInfo.descriptionHi,
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <section
          className={`${categoryInfo.gradient} relative overflow-hidden py-12 md:py-16`}
        >
          <div className="absolute inset-0 opacity-10 bandhani-pattern" />

          <div className="absolute left-4 top-4 text-4xl text-white/20">❋</div>
          <div className="absolute bottom-4 right-4 text-4xl text-white/20">
            ❋
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <BreadcrumbNav items={[{ label: categoryTitle }]} />

            <div className="mt-6 flex items-center gap-4 md:gap-6">
              <span className="text-5xl md:text-7xl">{categoryInfo.icon}</span>
              <div>
                <h1 className="mb-2 font-display text-3xl text-white md:text-5xl">
                  {categoryTitle}
                </h1>
                <p className="max-w-xl text-sm text-white/80 md:text-base">
                  {categoryDescription}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-1">
                <span>🎮</span>
                <span>{formatGameCount(language, allGames.length)}</span>
              </span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="flex items-center gap-1">
                <span>⭐</span>
                <span>{copy.allSkillLevels}</span>
              </span>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8 md:py-12">
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

          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              {copy.showing}{" "}
              <span className="font-medium text-foreground">
                {filteredGames.length}
              </span>{" "}
              {language === "hi"
                ? "गेम"
                : filteredGames.length === 1
                  ? "game"
                  : "games"}{" "}
              {(searchQuery || selectedDifficulty || selectedTime) &&
                copy.filtered}
            </p>
          </div>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredGames.map((game, index) => (
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
                  delay={index * 0.05}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <span className="mb-4 block text-5xl">🔍</span>
              <h3 className="mb-2 text-xl font-display text-primary">
                {copy.noGamesFound}
              </h3>
              <p className="mb-4 text-muted-foreground">{copy.adjustFilters}</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDifficulty(null);
                  setSelectedTime(null);
                }}
                className="text-mustard hover:underline"
              >
                {copy.clearFilters}
              </button>
            </div>
          )}
        </section>

        <section className="container mx-auto mb-8 px-4 py-8">
          <h2 className="mb-6 text-center font-display text-2xl text-primary">
            {copy.exploreOther}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(categories)
              .filter((category) => category.id !== categoryId)
              .map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="group flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 transition-all hover:border-mustard hover:bg-mustard/10"
                >
                  <span>{category.icon}</span>
                  <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    {getLocalizedValue(
                      language,
                      category.title,
                      category.titleHi,
                    )}
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
