import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="bandhani-pattern h-full w-full" />
      </div>

      {/* Floating decorations */}
      <div className="absolute top-20 left-20 text-6xl opacity-30 animate-float">🐪</div>
      <div className="absolute bottom-20 right-20 text-6xl opacity-30 animate-float" style={{ animationDelay: "1s" }}>🏜️</div>

      <div className="relative text-center max-w-md">
        {/* 404 number */}
        <h1 className="text-8xl md:text-9xl font-display text-primary mb-4">
          404
        </h1>

        {/* Decorative element */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-mustard text-xl">❋</span>
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-secondary">◆</span>
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-mustard text-xl">❋</span>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-display text-foreground mb-2">
          Oops! Page not found
        </h2>
        <p className="text-muted-foreground mb-8">
          Looks like you've wandered into the desert! Let's get you back to the colorful world of Rajasthan.
        </p>

        {/* CTA */}
        <Link to="/">
          <Button variant="mustard" size="lg" className="group">
            <span className="mr-2">🏠</span>
            Return to Home
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
