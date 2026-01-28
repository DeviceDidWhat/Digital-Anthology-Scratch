import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CategoryFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedDifficulty: string | null;
  onDifficultyChange: (difficulty: string | null) => void;
  selectedTime: string | null;
  onTimeChange: (time: string | null) => void;
}

const difficultyOptions = [
  { value: 'easy', label: 'Easy', icon: '✦' },
  { value: 'medium', label: 'Medium', icon: '✦✦' },
  { value: 'hard', label: 'Hard', icon: '✦✦✦' },
];

const timeOptions = [
  { value: 'quick', label: '< 7 min', icon: '⚡' },
  { value: 'medium', label: '7-10 min', icon: '⏱️' },
  { value: 'long', label: '10+ min', icon: '🕐' },
];

export const CategoryFilters = ({
  searchQuery,
  onSearchChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedTime,
  onTimeChange,
}: CategoryFiltersProps) => {
  return (
    <div className="space-y-4">
      {/* Search bar with decorative border */}
      <div className="relative">
        <div className="absolute inset-0 bg-primary/5 rounded-xl -m-1" />
        <div className="relative flex items-center gap-2 bg-card border-2 border-border rounded-lg px-4 py-2 focus-within:border-mustard transition-colors">
          <span className="text-xl">🔍</span>
          <Input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 placeholder:text-muted-foreground/60"
          />
          {searchQuery && (
            <button 
              onClick={() => onSearchChange('')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-3">
        {/* Difficulty filters */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground font-medium">Difficulty:</span>
          <div className="flex gap-1.5">
            {difficultyOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onDifficultyChange(selectedDifficulty === option.value ? null : option.value)}
                className={`
                  px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                  ${selectedDifficulty === option.value 
                    ? 'bg-mustard text-mustard-foreground shadow-md scale-105' 
                    : 'bg-card border border-border text-muted-foreground hover:border-mustard hover:text-foreground'
                  }
                `}
              >
                <span className="mr-1 text-xs">{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px bg-border self-stretch" />

        {/* Time filters */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground font-medium">Time:</span>
          <div className="flex gap-1.5">
            {timeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onTimeChange(selectedTime === option.value ? null : option.value)}
                className={`
                  px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                  ${selectedTime === option.value 
                    ? 'bg-peacock text-peacock-foreground shadow-md scale-105' 
                    : 'bg-card border border-border text-muted-foreground hover:border-peacock hover:text-foreground'
                  }
                `}
              >
                <span className="mr-1">{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clear all button */}
        {(selectedDifficulty || selectedTime || searchQuery) && (
          <button
            onClick={() => {
              onDifficultyChange(null);
              onTimeChange(null);
              onSearchChange('');
            }}
            className="px-3 py-1.5 rounded-full text-sm font-medium text-secondary hover:bg-secondary/10 transition-colors"
          >
            Clear all ✕
          </button>
        )}
      </div>
    </div>
  );
};
