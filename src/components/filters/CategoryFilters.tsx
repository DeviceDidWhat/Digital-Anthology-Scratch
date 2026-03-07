import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/i18n/translations";

interface CategoryFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedDifficulty: string | null;
  onDifficultyChange: (difficulty: string | null) => void;
  selectedTime: string | null;
  onTimeChange: (time: string | null) => void;
}

export const CategoryFilters = ({
  searchQuery,
  onSearchChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedTime,
  onTimeChange,
}: CategoryFiltersProps) => {
  const { language } = useLanguage();
  const copy = getTranslations(language).filters;

  const difficultyOptions = [
    { value: "easy", label: copy.difficultyOptions.easy, icon: "✦" },
    { value: "medium", label: copy.difficultyOptions.medium, icon: "✦✦" },
    { value: "hard", label: copy.difficultyOptions.hard, icon: "✦✦✦" },
  ];

  const timeOptions = [
    { value: "quick", label: copy.timeOptions.quick, icon: "⚡" },
    { value: "medium", label: copy.timeOptions.medium, icon: "⏱️" },
    { value: "long", label: copy.timeOptions.long, icon: "🕐" },
  ];

  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 -m-1 rounded-xl bg-primary/5" />
        <div className="relative flex items-center gap-2 rounded-lg border-2 border-border bg-card px-4 py-2 transition-colors focus-within:border-mustard">
          <span className="text-xl">🔍</span>
          <Input
            type="text"
            placeholder={copy.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="border-0 bg-transparent px-0 placeholder:text-muted-foreground/60 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            {copy.difficulty}
          </span>
          <div className="flex gap-1.5">
            {difficultyOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() =>
                  onDifficultyChange(
                    selectedDifficulty === option.value ? null : option.value,
                  )
                }
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                  selectedDifficulty === option.value
                    ? "scale-105 bg-mustard text-mustard-foreground shadow-md"
                    : "border border-border bg-card text-muted-foreground hover:border-mustard hover:text-foreground"
                }`}
              >
                <span className="mr-1 text-xs">{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="hidden w-px self-stretch bg-border sm:block" />

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            {copy.time}
          </span>
          <div className="flex gap-1.5">
            {timeOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() =>
                  onTimeChange(selectedTime === option.value ? null : option.value)
                }
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                  selectedTime === option.value
                    ? "scale-105 bg-peacock text-peacock-foreground shadow-md"
                    : "border border-border bg-card text-muted-foreground hover:border-peacock hover:text-foreground"
                }`}
              >
                <span className="mr-1">{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {(selectedDifficulty || selectedTime || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              onDifficultyChange(null);
              onTimeChange(null);
              onSearchChange("");
            }}
            className="rounded-full px-3 py-1.5 text-sm font-medium text-secondary transition-colors hover:bg-secondary/10"
          >
            {copy.clearAll} ✕
          </button>
        )}
      </div>
    </div>
  );
};
