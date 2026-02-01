import React from 'react';
import { useEffect } from "react";
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar'; 
import { motion, useScroll, useTransform } from 'framer-motion'; // Added scroll hooks

const AboutPage = () => {
  const { scrollY } = useScroll();
  
  // Premium Parallax Effect: Background moves slower than content
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Custom cubic-bezier for "snappy" feel
  } as const;

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } }
  } as const;

  return (
    <div className="min-h-screen font-sans bg-[#FFFDF9] text-[#2D241E]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
        {/* PARALLAX BACKGROUND */}
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/rajasthan-bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat',
              maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            }}
          />
        </motion.div>

        {/* CONTENT OVERLAY */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative container mx-auto px-4 text-center pt-24 z-10"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-primary text-sm font-bold tracking-widest uppercase shadow-sm"
          >
            IIT Jodhpur Digital Initiative
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-primary tracking-tighter drop-shadow-sm">
            Rangilo <span className="text-[#000000] italic">Rajasthan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            A Digital Symphony of Heritage, Culture & Innovation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 rounded-full shadow-lg shadow-primary/20 transition-all">
                Explore Now
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="px-10 rounded-full bg-white/40 backdrop-blur-sm hover:bg-black hover:text-white border-primary/20 text-primary transition-all">
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full fill-[#fefefe]">
            <path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 px-4 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto max-w-5xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
             <motion.div variants={fadeInUp} className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Rangilo Rajasthan serves as a bridge between the ancient soul of the Thar Desert and the limitless potential of the digital age. 
                  Our primary goal is to ensure that the <strong>intangible cultural heritage</strong> of Rajasthan is not just archived, but experienced through interactive storytelling and play.
                </p>
             </motion.div>
             <motion.div variants={fadeInUp} className="flex-1 grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }} 
                  className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 flex flex-col items-center text-center group transition-all"
                >
                   <span className="text-4xl mb-3 group-hover:rotate-12 transition-transform">🎨</span>
                   <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Preserve</h4>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }} 
                  className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 flex flex-col items-center text-center group transition-all"
                >
                   <span className="text-4xl mb-3 group-hover:rotate-12 transition-transform">🎮</span>
                   <h4 className="font-bold text-primary uppercase text-xs tracking-widest">Play</h4>
                </motion.div>
             </motion.div>
          </div>
        </motion.div>
      </section>

      {/* WHAT IS SCRATCH ANTHOLOGY */}
      <section className="py-24 bg-[#2D241E] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none ajrakh-pattern" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container mx-auto max-w-4xl px-4 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">What is a Digital Scratch Anthology?</h2>
          <p className="text-lg opacity-80 leading-relaxed mb-10 font-light">
            Unlike static museums, a "Scratch Anthology" is an evolving digital canvas. We use <strong>computational creativity</strong> and 
            interactive coding to allow users to "scratch" beneath the surface of traditional art forms. It’s where technology helps reveal the mathematics in <em>Mandana</em> art and the physics in folk music.
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-secondary/30 text-secondary text-sm font-bold uppercase tracking-widest"
          >
            <span className="animate-pulse">●</span> STEM meets Heritage
          </motion.div>
        </motion.div>
      </section>

      {/* ADDITIONAL FEATURES & STATS */}
      <section className="py-24 px-4">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl grid md:grid-cols-4 gap-8"
        >
           {[
             { label: "Games", val: "30+", icon: "🎯" },
             { label: "Learners", val: "15K+", icon: "👥" },
             { label: "Accuracy", val: "100%", icon: "📜" },
             { label: "Rating", val: "4.9★", icon: "⭐" }
           ].map((stat, i) => (
             <motion.div 
               key={i} 
               variants={fadeInUp}
               whileHover={{ scale: 1.05, backgroundColor: "#FFF7ED" }}
               className="text-center p-8 rounded-3xl bg-orange-50/50 border border-orange-100 transition-colors"
             >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-black text-primary mb-1">{stat.val}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-foreground/40">{stat.label}</div>
             </motion.div>
           ))}
        </motion.div>
      </section>

      <footer className="py-12 px-4 border-t border-orange-100 text-center">
         <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="text-xs text-foreground/40 font-medium tracking-[0.3em] uppercase"
         >
            © 2026 Rangilo Rajasthan • IIT Jodhpur Project
         </motion.p>
      </footer>
    </div>
  );
};

export default AboutPage;