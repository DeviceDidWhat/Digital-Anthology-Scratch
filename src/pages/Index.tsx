import { useLayoutEffect } from "react"; // Switched from useEffect
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";

const Index = () => {
  useLayoutEffect(() => {
    // This happens BEFORE the paint, eliminating the 'laggy' jump
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, []);

  return (
    // 'w-full' and 'overflow-x-hidden' prevent layout shifts
    <div className="min-h-screen w-full font-sans bg-[#FFFDF9] text-[#2D241E] overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <HeroSection />
        <CategoriesSection />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;