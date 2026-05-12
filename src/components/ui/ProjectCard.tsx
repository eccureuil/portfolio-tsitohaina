import type { FC } from "react";
import type { Project } from "../../data/portfolio";
import { Star } from "lucide-react";

interface Props {
  project: Project;
  delay?: number;
}

const ProjectCard: FC<Props> = ({ project, delay = 0 }) => (
  <div
    className="glass-card p-7 flex flex-col gap-4 h-full fade-in"
    style={{ transitionDelay: `${delay}s` }}
  >
    <div className="flex items-start justify-between gap-4">
      <div
        className="w-[46px] h-[46px] rounded-xl flex items-center justify-center text-xl shrink-0"
        style={{ background: project.iconBg }}
      >
        {project.icon}
      </div>
      {project.featured && (
        <span className="inline-flex items-center gap-1.5 text-[0.65rem] tracking-[0.1em] uppercase px-2 py-[3px] rounded-full bg-purple-600/15 border border-purple-400/25 text-accent-purple self-start">
          <Star size={11} className="fill-current" /> Featured
        </span>
      )}
    </div>

    <div className="font-display text-[1.1rem] font-semibold text-slate-100">
      {project.name}
    </div>
    <div className="text-[0.9rem] text-slate-100/60 leading-relaxed flex-1">
      {project.desc}
    </div>

    <div className="flex gap-1.5 flex-wrap">
      {project.tags.map((t) => (
        <span key={t} className="tag">{t}</span>
      ))}
    </div>

    <div className="flex gap-3 mt-auto pt-2 border-t border-white/6">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="text-[0.8rem] text-slate-100/60 no-underline flex items-center gap-1.5 transition-all duration-200 hover:text-slate-100 hover:gap-[9px]"
      >
        Code <span>↗</span>
      </a>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[0.8rem] text-accent-blue no-underline flex items-center gap-1.5 transition-all duration-200 hover:gap-[9px]"
        >
          Voir le projet <span>→</span>
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
