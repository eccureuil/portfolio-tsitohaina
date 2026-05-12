import type { FC } from "react";

interface Props {
  name: string;
  pct: number;
  delay?: number;
}

const SkillBar: FC<Props> = ({ name, pct, delay = 0 }) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex justify-between items-center">
      <span className="text-[0.9rem] text-slate-100">{name}</span>
      <span className="text-[0.75rem] text-slate-100/60">{pct}%</span>
    </div>
    <div className="h-[3px] bg-white/8 rounded overflow-hidden">
      <div
        className="h-full rounded animate-bar-grow"
        style={{
          width: `${pct}%`,
          animationDelay: `${delay}s`,
          background: "linear-gradient(to right, #7c3aed, #38bdf8)",
        }}
      />
    </div>
  </div>
);

export default SkillBar;
