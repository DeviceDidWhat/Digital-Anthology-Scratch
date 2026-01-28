import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Ajrakh pattern band at top */}
      <div className="h-4 bg-gradient-to-r from-mustard via-secondary to-peacock opacity-80" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5 ajrakh-border pointer-events-none" />

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl animate-diya">🪔</span>
              <span className="text-xl font-display text-primary-foreground">
                Rangilo Rajasthan
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A joyful journey through the vibrant culture, traditions, and artistry of Rajasthan.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg text-mustard mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/textiles" className="text-primary-foreground/70 hover:text-mustard transition-colors">Textiles & Prints</Link></li>
              <li><Link to="/category/folk-art" className="text-primary-foreground/70 hover:text-mustard transition-colors">Folk Art & Handicrafts</Link></li>
              <li><Link to="/category/desert-life" className="text-primary-foreground/70 hover:text-mustard transition-colors">Desert Life & Nature</Link></li>
              <li><Link to="/category/music-dance" className="text-primary-foreground/70 hover:text-mustard transition-colors">Music & Dance</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-mustard mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-mustard transition-colors">About Us</Link></li>
              <li><Link to="/how-to-play" className="text-primary-foreground/70 hover:text-mustard transition-colors">How to Play</Link></li>
              <li><Link to="/achievements" className="text-primary-foreground/70 hover:text-mustard transition-colors">Achievements</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-mustard transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Cultural Note */}
          <div>
            <h4 className="font-display text-lg text-mustard mb-4">Padharo Mhare Desh</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              "Welcome to our land" — Experience the warmth and hospitality of Rajasthan through interactive learning.
            </p>
            <div className="flex gap-3">
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer">🐪</span>
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer">🏜️</span>
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer">🎨</span>
              <span className="text-2xl hover:scale-110 transition-transform cursor-pointer">🎵</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © 2024 Rangilo Rajasthan. Made with ❤️ for Rajasthani culture.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-mustard text-xl">❋</span>
              <span className="text-secondary text-lg">◆</span>
              <span className="text-peacock text-xl">❋</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
