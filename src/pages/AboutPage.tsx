import React from 'react';
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar'; 

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen font-sans bg-[#FFFDF9] text-[#2D241E]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
        {/* THE BACKGROUND IMAGE CONTAINER */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/rajasthan-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'top center', // Focus on the top part as requested
            backgroundRepeat: 'no-repeat',
            // This mask creates the smooth fade-out effect at the bottom
            maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          }}
        />

        {/* CONTENT OVERLAY */}
        <div className="relative container mx-auto px-4 text-center pt-24 z-10">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-primary text-sm font-bold tracking-widest uppercase shadow-sm">
            IIT Jodhpur Digital Initiative
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-primary tracking-tighter drop-shadow-sm">
            Rangilo <span className="text-[#000000] italic">Rajasthan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            A Digital Symphony of Heritage, Culture & Innovation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 rounded-full shadow-lg shadow-primary/20 transition-transform hover:scale-105">
              Explore Now
            </Button>
            <Button size="lg" variant="outline" className="px-10 rounded-full bg-white/40 backdrop-blur-sm hover:bg-black hover:scale-110 border-primary/20 text-primary transition-all">
              Learn More
            </Button>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full fill-[#fefefe]">
            <path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* MISSION SECTION - Starts immediately after the fade */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
             <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Rangilo Rajasthan serves as a bridge between the ancient soul of the Thar Desert and the limitless potential of the digital age. 
                  Our primary goal is to ensure that the <strong>intangible cultural heritage</strong> of Rajasthan is not just archived, but experienced through interactive storytelling and play.
                </p>
             </div>
             <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 flex flex-col items-center text-center group hover:border-primary/30 transition-all">
                   <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎨</span>
                   <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Preserve</h4>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 flex flex-col items-center text-center group hover:border-primary/30 transition-all">
                   <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎮</span>
                   <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Play</h4>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* WHAT IS SCRATCH ANTHOLOGY */}
      <section className="py-24 bg-[#2D241E] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none ajrakh-pattern" />
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What is a Digital Scratch Anthology?</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-10 font-light">
            Unlike static museums, a "Scratch Anthology" is an evolving digital canvas. We use <strong>computational creativity</strong> and 
            interactive coding to allow users to "scratch" beneath the surface of traditional art forms. It’s where technology helps reveal the mathematics in <em>Mandana</em> art and the physics in folk music.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-secondary/30 text-secondary text-sm font-bold uppercase tracking-widest">
            <span className="animate-pulse">●</span> STEM meets Heritage
          </div>
        </div>
      </section>

      {/* ADDITIONAL FEATURES & STATS (Simplified for Clean UI) */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-4 gap-8">
           {[
             { label: "Games", val: "30+", icon: "🎯" },
             { label: "Learners", val: "15K+", icon: "👥" },
             { label: "Accuracy", val: "100%", icon: "📜" },
             { label: "Rating", val: "4.9★", icon: "⭐" }
           ].map((stat, i) => (
             <div key={i} className="text-center p-8 rounded-3xl bg-orange-50/50 border border-orange-100">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-black text-primary mb-1">{stat.val}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-foreground/40">{stat.label}</div>
             </div>
           ))}
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-orange-100 text-center">
         <p className="text-xs text-foreground/40 font-medium tracking-[0.3em] uppercase">
           © 2026 Rangilo Rajasthan • IIT Jodhpur Project
         </p>
      </footer>
    </div>
  );
};

export default AboutPage;