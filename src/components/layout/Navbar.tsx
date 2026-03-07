import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/i18n/translations";

export const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  const copy = getTranslations(language).navbar;

  const handleExploreClick = () => {
    const section = document.getElementById("categories");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-primary-foreground/10 bg-primary/95 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 opacity-10 ajrakh-border" />

      <nav className="relative container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="group flex items-center gap-2">
          <span className="text-2xl animate-diya">🪔</span>
          <span className="font-display text-xl text-primary-foreground transition-colors group-hover:text-mustard md:text-2xl">
            {copy.brand}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="group relative font-medium text-primary-foreground/80 transition-colors hover:text-mustard"
          >
            {copy.exploreGames}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-mustard transition-all group-hover:w-full" />
          </Link>
          <Link
            to="/about"
            className="group relative font-medium text-primary-foreground/80 transition-colors hover:text-mustard"
          >
            {copy.about}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-mustard transition-all group-hover:w-full" />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="hidden items-center rounded-full border border-primary-foreground/15 bg-primary-foreground/10 p-1 sm:flex"
            aria-label={copy.language}
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                language === "en"
                  ? "bg-mustard text-mustard-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {copy.english}
            </button>
            <button
              type="button"
              onClick={() => setLanguage("hi")}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                language === "hi"
                  ? "bg-mustard text-mustard-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {copy.hindi}
            </button>
          </div>

          <Button
            variant="mustard"
            size="sm"
            className="hidden sm:flex"
            onClick={handleExploreClick}
          >
            {copy.startLearning}
          </Button>

          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-mustard/20 sm:hidden"
            aria-label={copy.language}
          >
            {language === "en" ? "हिं" : "EN"}
          </button>
        </div>
      </nav>
    </header>
  );
};
