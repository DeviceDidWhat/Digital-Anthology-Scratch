import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navbar = () => {

  const handleExploreClick = () => {
    const section = document.getElementById("categories");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 ajrakh-border pointer-events-none" />
      
      <nav className="relative container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl animate-diya">🪔</span>
          <span className="text-xl md:text-2xl font-display text-primary-foreground group-hover:text-mustard transition-colors">
            Rangilo Rajasthan
          </span>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className="text-primary-foreground/80 hover:text-mustard transition-colors relative group font-medium"
          >
            Explore Games
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mustard transition-all group-hover:w-full" />
          </Link>
          <Link 
            to="/about" 
            className="text-primary-foreground/80 hover:text-mustard transition-colors relative group font-medium"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mustard transition-all group-hover:w-full" />
          </Link>
          <Link 
            to="/learn" 
            className="text-primary-foreground/80 hover:text-mustard transition-colors relative group font-medium"
          >
            Learn More
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mustard transition-all group-hover:w-full" />
          </Link>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Search button */}
          <button className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-mustard/20 flex items-center justify-center transition-colors text-primary-foreground">
            🔍
          </button>
          
          {/* Profile/Start button */}
          <Button 
            variant="mustard" 
            size="sm" 
            className="hidden sm:flex"
            onClick={handleExploreClick}
          >
            Start Learning
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-mustard/20 flex items-center justify-center transition-colors text-primary-foreground text-xl">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
};
