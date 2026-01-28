import { cn } from "@/lib/utils";

interface DecorativeDividerProps {
  className?: string;
}

export const DecorativeDivider = ({ className }: DecorativeDividerProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-4 py-8", className)}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="flex items-center gap-2">
        <span className="text-mustard text-2xl">❋</span>
        <span className="text-secondary text-xl">◆</span>
        <span className="text-peacock text-2xl">❋</span>
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
};
