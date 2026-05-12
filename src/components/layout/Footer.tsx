import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "../ui/SocialIcons";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/about" },
  { label: "Projets", to: "/mes-projets" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { label: "GH", href: "https://github.com", icon: GithubIcon },
  { label: "LI", href: "https://linkedin.com", icon: LinkedinIcon },
  { label: "FB", href: "https://facebook.com", icon: FacebookIcon },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-8 py-10 bg-[rgba(5,5,16,0.6)] backdrop-blur-xl">
      <div className="max-w-[1100px] mx-auto flex justify-between items-center flex-wrap gap-4">
        <div className="flex flex-col gap-1.5">
          <Link
            to="/"
            className="font-display font-extrabold text-base bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent no-underline"
          >
            Tsito.dev
          </Link>
          <span className="text-[0.78rem] text-slate-100/35">
            &copy; 2026 Tsitohaina Rakotoniaina &middot; Fait avec <Heart size={14} className="fill-red-500 text-red-500 -mt-0.5 inline" /> et TypeScript
          </span>
        </div>

        <nav className="flex gap-4 sm:gap-6 flex-wrap justify-center sm:justify-start">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.8rem] text-slate-100/60 no-underline transition-colors duration-200 hover:text-slate-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/12 flex items-center justify-center text-slate-100/60 no-underline transition-all duration-200 hover:bg-purple-600/20 hover:text-accent-purple hover:border-purple-400/30"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
