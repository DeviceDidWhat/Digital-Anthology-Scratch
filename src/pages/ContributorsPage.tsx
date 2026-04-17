import { useEffect } from "react";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { contributors, mentors } from "@/data/team";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedValue, getTranslations } from "@/i18n/translations";

const ContributorsPage = () => {
  const { language } = useLanguage();
  const copy = getTranslations(language).contributorsPage;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2D241E]">
      <Navbar />

      <main className="pt-16">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-mustard/10 py-20 md:py-28">
          <div className="absolute inset-0 opacity-10 ajrakh-pattern" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="mb-8 flex justify-center">
              <div className="rounded-[2rem] border border-primary/15 bg-white/90 p-5 shadow-soft">
                <img
                  src="/iitj-logo.jpg"
                  alt="IIT Jodhpur logo"
                  className="w-48 md:w-64 object-contain"
                />
              </div>
            </div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
              <span>✦</span>
              <span>{copy.instituteLabel}</span>
            </div>

            <h1 className="mb-6 font-display text-4xl text-primary md:text-6xl">
              {copy.title}
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-foreground/70">
              {copy.subtitle}
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="mb-10 rounded-3xl border border-primary/10 bg-gradient-to-br from-white to-primary/5 p-8 shadow-soft">
            <h2 className="mb-4 font-display text-3xl text-primary md:text-4xl">
              {copy.instituteTitle}
            </h2>
            <p className="mb-4 text-base leading-relaxed text-foreground/70">
              {copy.instituteDescription}
            </p>
            <p className="text-base leading-relaxed text-foreground/70">
              {copy.instituteDescription2}
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-8">
          <div className="mb-10">
            <h2 className="mb-3 font-display text-3xl text-primary md:text-4xl">
              {copy.mentorsTitle}
            </h2>
            <p className="max-w-3xl text-foreground/70">
              {copy.mentorsDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {mentors.map((member, index) => (
              <motion.article
                key={`${member.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl border border-border bg-card p-8 shadow-soft"
              >
                <div className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                  {getLocalizedValue(language, member.role, member.roleHi)}
                </div>
                <h3 className="mb-2 font-display text-2xl text-primary">
                  {member.name}
                </h3>
                <p className="mb-5 leading-relaxed text-foreground/70">
                  {getLocalizedValue(language, member.bio, member.bioHi)}
                </p>
                <div className="space-y-2 text-sm">
                  {member.email && (
                    <p>
                      <span className="font-semibold text-primary">
                        {copy.emailLabel}:{" "}
                      </span>
                      <span className="text-foreground/70">{member.email}</span>
                    </p>
                  )}
                  {member.phone && (
                    <p>
                      <span className="font-semibold text-primary">
                        {copy.phoneLabel}:{" "}
                      </span>
                      <span className="text-foreground/70">{member.phone}</span>
                    </p>
                  )}
                  {member.education && (
                    <p>
                      <span className="font-semibold text-primary">
                        {copy.educationLabel}:{" "}
                      </span>
                      <span className="text-foreground/70">
                        {getLocalizedValue(
                          language,
                          member.education,
                          member.educationHi,
                        )}
                      </span>
                    </p>
                  )}
                  <p>
                    <span className="font-semibold text-primary">
                      {copy.detailLabel}:{" "}
                    </span>
                    <span className="text-foreground/70">
                      {getLocalizedValue(language, member.focus, member.focusHi)}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-primary">
                      {copy.affiliationLabel}:{" "}
                    </span>
                    <span className="text-foreground/70">
                      {getLocalizedValue(
                        language,
                        member.affiliation,
                        member.affiliationHi,
                      )}
                    </span>
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="mb-10">
            <h2 className="mb-3 font-display text-3xl text-primary md:text-4xl">
              {copy.contributorsTitle}
            </h2>
            <p className="max-w-3xl text-foreground/70">
              {copy.contributorsDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {contributors.map((member, index) => (
              <motion.article
                key={`${member.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1,y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border border-border bg-white p-8 shadow-soft"
              >
                {/* <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-mustard/30" /> */}
                <h3 className="mb-2 font-display text-2xl text-primary">
                  {member.name}
                </h3>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  {getLocalizedValue(language, member.role, member.roleHi)}
                </p>
                <p className="mb-5 leading-relaxed text-foreground/70">
                  {getLocalizedValue(language, member.bio, member.bioHi)}
                </p>
                <div className="space-y-2 text-sm">
                  {/* {member.funFact && (
                    <p>
                      <span className="font-semibold text-primary">
                        {copy.funFactLabel}:{" "}
                      </span>
                      <span className="text-foreground/70">{member.funFact}</span>
                    </p>
                  )} */}
                  <p>
                    <span className="font-semibold text-primary">
                      {copy.detailLabel}:{" "}
                    </span>
                    <span className="text-foreground/70">
                      {getLocalizedValue(language, member.focus, member.focusHi)}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold text-primary">
                      {copy.affiliationLabel}:{" "}
                    </span>
                    <span className="text-foreground/70">
                      {getLocalizedValue(
                        language,
                        member.affiliation,
                        member.affiliationHi,
                      )}
                    </span>
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ContributorsPage;
