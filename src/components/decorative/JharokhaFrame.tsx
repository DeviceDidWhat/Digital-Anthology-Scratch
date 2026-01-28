import { cn } from "@/lib/utils";

interface JharokhaFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const JharokhaFrame = ({ children, className }: JharokhaFrameProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Arch top decoration */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3/4">
        <svg viewBox="0 0 200 30" className="w-full h-auto fill-primary">
          <path d="M0,30 Q100,0 200,30 L200,30 L0,30 Z" />
        </svg>
      </div>
      
      {/* Main content with decorative frame */}
      <div className="relative bg-card rounded-xl border-4 border-primary/20 overflow-hidden shadow-card">
        {/* Corner ornaments */}
        <div className="absolute top-2 left-2 text-mustard text-xl opacity-60">❋</div>
        <div className="absolute top-2 right-2 text-mustard text-xl opacity-60">❋</div>
        <div className="absolute bottom-2 left-2 text-mustard text-xl opacity-60">❋</div>
        <div className="absolute bottom-2 right-2 text-mustard text-xl opacity-60">❋</div>
        
        {children}
      </div>
    </div>
  );
};
