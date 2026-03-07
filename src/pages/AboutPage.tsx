import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/i18n/translations";

const AboutPage = () => {
  const { language } = useLanguage();
  const copy = getTranslations(language).aboutPage;
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  } as const;

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } },
  } as const;

  return (
    <div className="min-h-screen bg-[#FFFDF9] font-sans text-[#2D241E]">
      <Navbar />

      <section className="relative flex min-h-[120vh] items-center justify-center overflow-hidden">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url(/rajasthan-bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
              maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 80%, transparent 100%)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative container mx-auto px-4 pt-24 text-center z-10"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="mb-4 inline-block rounded-full border border-white/40 bg-white/30 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-primary shadow-sm backdrop-blur-md"
          >
            {copy.badge}
          </motion.div>

          <h1 className="mb-6 text-6xl font-black tracking-tighter text-primary drop-shadow-sm md:text-8xl">
            {copy.titleFirst}{" "}
            <span className="italic text-[#000000]">{copy.titleSecond}</span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-xl font-medium leading-relaxed text-foreground/80 md:text-2xl">
            {copy.subtitle}
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="rounded-full bg-primary px-10 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
              >
                {copy.exploreNow}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary/20 bg-white/40 px-10 text-primary backdrop-blur-sm transition-all hover:bg-black hover:text-white"
              >
                {copy.learnMore}
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

      <section className="relative z-10 px-4 py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
          className="container mx-auto max-w-5xl"
        >
          <div className="mb-20 flex flex-col items-center gap-12 md:flex-row">
            <motion.div variants={fadeInUp} className="flex-1">
              <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
                {copy.missionTitle}
              </h2>
              <p className="text-lg leading-relaxed text-foreground/70">
                {copy.missionPart1}
                <strong>{copy.missionHighlight}</strong>
                {copy.missionPart2}
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="grid flex-1 grid-cols-2 gap-4">
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                }}
                className="group flex flex-col items-center rounded-2xl border border-orange-100 bg-white p-6 text-center shadow-sm transition-all"
              >
                <span className="mb-3 text-4xl transition-transform group-hover:rotate-12">
                  🎨
                </span>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                  {copy.preserve}
                </h4>
              </motion.div>
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                }}
                className="group flex flex-col items-center rounded-2xl border border-orange-100 bg-white p-6 text-center shadow-sm transition-all"
              >
                <span className="mb-3 text-4xl transition-transform group-hover:rotate-12">
                  🎮
                </span>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary">
                  {copy.play}
                </h4>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-[#2D241E] py-24 text-white">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-5 ajrakh-pattern" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 container mx-auto max-w-4xl px-4 text-center"
        >
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            {copy.anthologyTitle}
          </h2>
          <p className="mb-10 text-lg font-light leading-relaxed opacity-80">
            {copy.anthologyPart1}
            <strong>{copy.anthologyHighlight}</strong>
            {copy.anthologyPart2}
            <em>{copy.anthologyMandana}</em>
            {copy.anthologyPart3}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 rounded-full border border-secondary/30 px-6 py-2 text-sm font-bold uppercase tracking-widest text-secondary"
          >
            <span className="animate-pulse">●</span> {copy.stemHeritage}
          </motion.div>
        </motion.div>
      </section>

      <section className="px-4 py-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="container mx-auto grid max-w-6xl gap-8 md:grid-cols-4"
        >
          {copy.stats.map((stat, index) => (
            <motion.div
              key={`${stat.label}-${index}`}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, backgroundColor: "#FFF7ED" }}
              className="rounded-3xl border border-orange-100 bg-orange-50/50 p-8 text-center transition-colors"
            >
              <div className="mb-2 text-2xl">{stat.icon}</div>
              <div className="mb-1 text-4xl font-black text-primary">
                {stat.val}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-foreground/40">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <footer className="border-t border-orange-100 px-4 py-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-foreground/40"
        >
          {copy.footer}
        </motion.p>
      </footer>
    </div>
  );
};

export default AboutPage;
