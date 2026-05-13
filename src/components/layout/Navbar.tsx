import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/about" },
  { label: "Projets", to: "/mes-projets" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] px-8 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(5,5,16,0.82)] border-b border-white/7"
          : "bg-[rgba(5,5,16,0.5)] border-b-[0.5px] border-white/12"
      }`}
      style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
    >
      <Link
        to="/"
        className="font-display font-extrabold text-[1.2rem] bg-gradient-to-r from-accent-purple via-accent-blue to-accent-pink bg-clip-text text-transparent tracking-tight no-underline"
      >
        Tsito.dev
      </Link>

      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row ${
          menuOpen
            ? "fixed top-[60px] left-0 right-0 bg-[rgba(5,5,16,0.95)] backdrop-blur-xl p-6 border-b-[0.5px] border-white/8 gap-2 z-50"
            : "gap-1"
        } md:static md:bg-transparent md:backdrop-blur-none md:p-0 md:border-0 md:gap-1 items-center list-none`}
      >
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className={`text-[0.82rem] font-normal tracking-[0.06em] uppercase no-underline px-3.5 py-[6px] rounded-full transition-all duration-200 ${
                location.pathname === l.to
                  ? "text-slate-100 bg-purple-400/12 border border-purple-400/20"
                  : "text-slate-100/60 hover:text-slate-100 hover:bg-white/6"
              }`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="hidden md:inline-block px-[18px] py-[7px] rounded-full bg-gradient-to-r from-aurora-1 to-aurora-2 text-white text-[0.8rem] font-medium no-underline transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
      >
        Me contacter
      </Link>

      <button
        className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-2"
        onClick={() => setMenuOpen((p) => !p)}
        aria-label="Menu"
      >
        <span
          className="block w-[22px] h-[1.5px] bg-slate-100/60 rounded transition-all duration-300"
          style={menuOpen ? { transform: "rotate(45deg) translate(4px, 4px)" } : {}}
        />
        <span
          className="block w-[22px] h-[1.5px] bg-slate-100/60 rounded transition-all duration-300"
          style={menuOpen ? { opacity: 0 } : {}}
        />
        <span
          className="block w-[22px] h-[1.5px] bg-slate-100/60 rounded transition-all duration-300"
          style={menuOpen ? { transform: "rotate(-45deg) translate(4px, -4px)" } : {}}
        />
      </button>
    </nav>
  );
}
