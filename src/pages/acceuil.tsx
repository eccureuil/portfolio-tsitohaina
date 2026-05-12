import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { useFadeIn } from "../hooks/useFadeIn";
import { projects, skillGroups } from "../data/portfolio";
import ProjectCard from "../components/ui/ProjectCard";
import SkillBar from "../components/ui/SkillBar";
import SectionHeader from "../components/ui/SectionHeader";
import photo from "../assets/tsitohaina.png";

export default function Accueil() {
  useFadeIn();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="min-h-svh flex items-center pt-20 relative">
        <div className="container w-full">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 w-full">
              <div className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full bg-purple-600/12 border-[0.5px] border-purple-400/28 text-accent-purple mb-8 animate-hero-fade">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse-dot" />
                Disponible pour stage · Septembre 2026
              </div>
              <h1
                className="font-display text-[clamp(2.4rem,4vw,4rem)] font-extrabold leading-[1.1] text-slate-100 animate-hero-fade"
                style={{ animationDelay: "0.1s" }}
              >
                Bonjour, je suis{" "}
                <span className="gradient-text">Tsitohaina Rakotoniaina</span>
              </h1>
              <p
                className="text-[1.1rem] font-light text-slate-100/60 leading-relaxed my-6 mb-10 max-w-[520px] animate-hero-fade"
                style={{ animationDelay: "0.2s" }}
              >
                Développeur Full-Stack en 3&egrave;me ann&eacute;e de Licence
                Informatique. Je construis des applications web modernes avec une
                attention particuli&egrave;re &agrave; la qualit&eacute; du code
                et &agrave; l'exp&eacute;rience utilisateur.
              </p>
              <div
                className="flex gap-4 flex-wrap animate-hero-fade"
                style={{ animationDelay: "0.3s" }}
              >
                <Link to="/mes-projets" className="btn-primary">
                  Voir mes projets &rarr;
                </Link>
                <Link to="/contact" className="btn-glass">
                  Me contacter
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <div className="rounded-2xl bg-white/7 border border-white/15 backdrop-blur-2xl p-2 inline-flex shrink-0">
                <img
                  src={photo}
                  alt="Tsitohaina Rakotoniaina"
                  className="w-72 h-72 md:w-72 md:h-72 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-100/35 text-[0.65rem] tracking-[0.18em] uppercase animate-hero-fade"
          style={{ animationDelay: "0.6s" }}
        >
          <span>Scroll</span>
          <div
            className="w-px h-10 animate-scroll-pulse"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)",
            }}
          />
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section>
        <div className="container">
          <div className="flex justify-between items-end flex-wrap gap-4">
            <SectionHeader
              tag="Mes réalisations"
              title="Projets récents"
              desc="Une sélection de mes meilleurs projets."
            />
            <Link
              to="/mes-projets"
              className="btn-glass fade-in text-[0.82rem] px-[18px] py-2 mb-4"
            >
              Tous les projets &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6 mt-12">
            {featuredProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS PREVIEW */}
      <section>
        <div className="container">
          <div className="flex justify-between items-end flex-wrap gap-4">
            <SectionHeader
              tag="Mon arsenal"
              title="Compétences"
              desc="Les technologies que j'utilise au quotidien."
            />
            <Link
              to="/about"
              className="btn-glass fade-in text-[0.82rem] px-[18px] py-2 mb-4"
            >
              En savoir plus &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-12">
            {skillGroups.map((g, gi) => (
              <div
                key={g.title}
                className="glass-card p-7 fade-in"
                style={{ transitionDelay: `${gi * 0.12}s` }}
              >
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="text-xl">{g.icon}</span>
                  <span className="font-display text-[0.85rem] font-semibold tracking-[0.06em] uppercase text-slate-100/60">
                    {g.title}
                  </span>
                </div>
                <div className="flex flex-col gap-[0.9rem]">
                  {g.skills.map((s, si) => (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      pct={s.pct}
                      delay={gi * 0.1 + si * 0.05}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="text-center py-20">
        <div className="container">
          <div className="fade-in">
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold tracking-tight mb-4">
              Travaillons <span className="gradient-text">ensemble</span>
            </h2>
            <p className="text-base text-slate-100/60 mb-8 max-w-[420px] mx-auto leading-relaxed">
              Une opportunité de stage, un projet ou juste envie d'échanger ? Je
              suis disponible et motivé.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact" className="btn-primary">
                Me contacter <Sparkles size={16} className="inline" />
              </Link>
              <a href="/cv-tsitohaina.pdf" download className="btn-glass">
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
