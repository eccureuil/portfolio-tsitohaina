import { useFadeIn } from "../hooks/useFadeIn";
import { projects } from "../data/portfolio";
import ProjectCard from "../components/ui/ProjectCard";
import SectionHeader from "../components/ui/SectionHeader";

export default function MesProjets() {
  useFadeIn();

  return (
    <>
      <section>
        <div className="container">
          <SectionHeader
            tag="Mes réalisations"
            title="Tous mes projets"
            desc="L'ensemble des projets que j'ai développés."
            center
            className="mb-12"
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
