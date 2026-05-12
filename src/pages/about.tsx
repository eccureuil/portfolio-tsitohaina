import { useFadeIn } from "../hooks/useFadeIn";
import { skillGroups, experiences } from "../data/portfolio";
import SectionHeader from "../components/ui/SectionHeader";
import SkillBar from "../components/ui/SkillBar";
import photo from "../assets/tsitohaina.png";

export default function About() {
  useFadeIn();

  return (
    <>
      <section>
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="shrink-0">
              <div className="rounded-2xl bg-white/7 border border-white/15 backdrop-blur-2xl p-2 inline-flex">
                <img
                  src={photo}
                  alt="Tsitohaina Rakotoniaina"
                  className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-xl"
                />
              </div>
            </div>
            <div>
              <SectionHeader
                tag="À propos"
                title="Qui suis-je ?"
                desc="Développeur Full-Stack passionné par les technologies web modernes."
              />
              <p className="text-[0.95rem] text-slate-100/60 leading-relaxed max-w-[560px]">
                Actuellement en 3&egrave;me ann&eacute;e de Licence Informatique,
                je construis des applications web avec une attention particuli&egrave;re
                &agrave; la qualit&eacute; du code, aux performances et &agrave;
                l'exp&eacute;rience utilisateur. Je suis toujours &agrave; la
                recherche de nouveaux d&eacute;fis et d'opportunit&eacute;s pour
                apprendre et grandir en tant que d&eacute;veloppeur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <SectionHeader
            tag="Compétences"
            title="Mes technologies"
            desc="Les outils et langages que j'utilise au quotidien."
            center
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-6 mt-12">
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

      <section>
        <div className="container">
          <SectionHeader
            tag="Parcours"
            title="Expériences"
            desc="Mon parcours académique et professionnel."
            center
          />
          <div className="space-y-6 mt-12 max-w-3xl mx-auto">
            {experiences.map((exp, i) => (
              <div
                key={exp.title + exp.year}
                className="glass-card p-7 fade-in"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <span className="text-accent-purple text-[0.8rem] font-semibold whitespace-nowrap shrink-0 mt-0.5">
                    {exp.year}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.1rem] font-semibold text-slate-100">
                      {exp.title}
                    </h3>
                    <p className="text-[0.85rem] text-slate-100/60 mb-2">
                      {exp.company}
                    </p>
                    <p className="text-[0.9rem] text-slate-100/60 leading-relaxed">
                      {exp.desc}
                    </p>
                    <div className="flex gap-1.5 flex-wrap mt-3">
                      {exp.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
