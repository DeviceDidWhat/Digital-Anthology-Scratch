import { Link } from "react-router-dom";
import { categories } from "@/data/games";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedValue, getTranslations } from "@/i18n/translations";

export const Footer = () => {
  const { language } = useLanguage();
  const copy = getTranslations(language).footer;

  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-5 ajrakh-border" />

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="mb-4 flex items-center gap-2">
              <span className="text-2xl animate-diya">🪔</span>
              <span className="text-xl font-display text-primary-foreground">
                {getTranslations(language).navbar.brand}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              {copy.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg text-mustard">
              {copy.categories}
            </h4>
            <ul className="space-y-2 text-sm">
              {Object.values(categories).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.id}`}
                    className="text-primary-foreground/70 transition-colors hover:text-mustard"
                  >
                    {getLocalizedValue(
                      language,
                      category.title,
                      category.titleHi,
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg text-mustard">
              {copy.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/70 transition-colors hover:text-mustard"
                >
                  {copy.aboutUs}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg text-mustard">
              {copy.culturalNoteTitle}
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-primary-foreground/70">
              {copy.culturalNote}
            </p>
            <div className="flex gap-3">
              {Object.values(categories).map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="text-2xl transition-transform hover:scale-110"
                >
                  {category.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-primary-foreground/50">{copy.copyright}</p>
            <div className="flex items-center gap-3">
              <span className="text-xl text-mustard">❋</span>
              <span className="text-lg text-secondary">◆</span>
              <span className="text-xl text-peacock">❋</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
