import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Path not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-[#FFF9F0]">
      
      {/* 1. Ethnic Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Custom Bandhani/Mandala Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')] opacity-30" />
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full border-[32px] border-mustard/20" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full border-[32px] border-primary/20" />
      </div>

      {/* 2. Floating Cultural Icons */}
      <div className="absolute top-10 left-10 text-7xl opacity-20 animate-pulse delay-700 transition-all">🐫</div>
      <div className="absolute top-20 right-20 text-6xl opacity-20 animate-pulse delay-700">🪘</div>
      <div className="absolute bottom-20 left-20 text-6xl opacity-20 animate-pulse delay-700">🕌</div>

      <div className="relative z-10 text-center max-w-xl">
        {/* 3. The "Jharokha" (Window) Style Frame */}
        <div className="inline-block p-1 bg-gradient-to-b from-mustard via-primary to-secondary rounded-t-full mb-8 shadow-xl">
          <div className="bg-[#FFF9F0] px-12 py-8 rounded-t-full flex flex-col items-center border-b-4 border-primary">
             <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-mustard drop-shadow-sm leading-none">
              404
            </h1>
            <div className="mt-4 text-mustard text-3xl font-serif">पधारे सा!</div>
          </div>
        </div>

        {/* 4. Decorative Separator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-mustard" />
          <span className="text-primary text-2xl">✽</span>
          <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-mustard" />
        </div>

        {/* 5. Copywriting */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4 font-serif">
          Lost in the Golden Sands?
        </h2>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          The path you're looking for has been hidden by a desert storm. 
          Let’s guide you back to the <span className="text-primary font-bold italic">Haveli</span>.
        </p>

        {/* 6. Action Button */}
        <Link to="/">
          <Button 
            className="bg-primary hover:bg-secondary text-white px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <span className="mr-3 text-2xl group-hover:rotate-12 transition-transform inline-block">🏰</span>
            Take me back to the Home
            <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
          </Button>
        </Link>
      </div>

      {/* 7. Bottom Border Decoration */}
      <div className="absolute bottom-0 w-full h-4 bg-[repeating-linear-gradient(45deg,#E91E63,#E91E63_10px,#FFC107_10px,#FFC107_20px)] opacity-60" />
    </div>
  );
};

export default NotFound;