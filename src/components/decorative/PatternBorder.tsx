import { cn } from "@/lib/utils";

interface PatternBorderProps {
  children: React.ReactNode;
  className?: string;
  variant?: "ajrakh" | "bandhani" | "paisley";
}

export const PatternBorder = ({ 
  children, 
  className,
  variant = "ajrakh" 
}: PatternBorderProps) => {
  const patterns = {
    ajrakh: "before:ajrakh-border",
    bandhani: "before:bandhani-pattern",
    paisley: "before:fabric-texture"
  };

  return (
    <div className={cn("relative", className)}>
      <div className={cn(
        "absolute inset-0 opacity-20 pointer-events-none rounded-xl",
        patterns[variant]
      )} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
