import type { FC } from "react";

interface Props {
  tag: string;
  title: string;
  desc?: string;
  center?: boolean;
  delay?: number;
  className?: string;
}

const SectionHeader: FC<Props> = ({ tag, title, desc, center = false, delay = 0, className = "" }) => (
  <div
    className={`fade-in ${center ? "text-center" : "text-left"} ${className}`}
    style={{ transitionDelay: `${delay}s` }}
  >
    <div className={`section-tag ${center ? "justify-center" : ""}`}>
      {tag}
    </div>
    <h2 className="section-title">{title}</h2>
    {desc && (
      <p className={`section-desc ${center ? "mx-auto" : ""}`}>
        {desc}
      </p>
    )}
  </div>
);

export default SectionHeader;
