// components/layout/AuroraBackground.tsx
export default function AuroraBackground() {
  return (
    <>
      <div className="aurora-bg" />
      <div
        className="aurora-orb"
        style={{ width: 520, height: 520, background: "#7c3aed", top: "0%", left: "-12%" }}
      />
      <div
        className="aurora-orb"
        style={{ width: 420, height: 420, background: "#db2777", bottom: "8%", right: "-10%", animationDelay: "-7s" }}
      />
      <div
        className="aurora-orb"
        style={{ width: 360, height: 360, background: "#0891b2", top: "45%", left: "58%", animationDelay: "-3.5s" }}
      />
      <div className="grain" />
    </>
  );
}