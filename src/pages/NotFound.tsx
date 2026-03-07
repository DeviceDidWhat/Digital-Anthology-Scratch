import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/i18n/translations";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();
  const copy = getTranslations(language).notFound;

  useEffect(() => {
    console.error("404 Error: Path not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#FFF9F0] p-6">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')] opacity-30" />
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full border-[32px] border-mustard/20" />
        <div className="absolute bottom-[-10%] right-[-10%] h-96 w-96 rounded-full border-[32px] border-primary/20" />
      </div>

      <div className="absolute left-10 top-10 text-7xl opacity-20 animate-pulse delay-700">
        🐫
      </div>
      <div className="absolute right-20 top-20 text-6xl opacity-20 animate-pulse delay-700">
        🪘
      </div>
      <div className="absolute bottom-20 left-20 text-6xl opacity-20 animate-pulse delay-700">
        🕌
      </div>

      <div className="relative z-10 max-w-xl text-center">
        <div className="mb-8 inline-block rounded-t-full bg-gradient-to-b from-mustard via-primary to-secondary p-1 shadow-xl">
          <div className="flex flex-col items-center rounded-t-full border-b-4 border-primary bg-[#FFF9F0] px-12 py-8">
            <h1 className="bg-gradient-to-r from-primary to-mustard bg-clip-text text-9xl font-black leading-none text-transparent drop-shadow-sm">
              404
            </h1>
            <div className="mt-4 font-serif text-3xl text-mustard">
              {copy.greeting}
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-mustard" />
          <span className="text-2xl text-primary">✽</span>
          <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-mustard" />
        </div>

        <h2 className="mb-4 font-serif text-3xl font-bold text-slate-800">
          {copy.title}
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-slate-600">
          {copy.description}
        </p>

        <Link to="/">
          <Button className="group rounded-full bg-primary px-10 py-7 text-lg text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-secondary hover:shadow-primary/40">
            <span className="mr-3 inline-block text-2xl transition-transform group-hover:rotate-12">
              🏰
            </span>
            {copy.button}
            <span className="ml-3 transition-transform group-hover:translate-x-2">
              →
            </span>
          </Button>
        </Link>
      </div>

      <div className="absolute bottom-0 h-4 w-full bg-[repeating-linear-gradient(45deg,#E91E63,#E91E63_10px,#FFC107_10px,#FFC107_20px)] opacity-60" />
    </div>
  );
};

export default NotFound;
