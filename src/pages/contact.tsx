import type { FormEvent } from "react";
import { useFadeIn } from "../hooks/useFadeIn";
import SectionHeader from "../components/ui/SectionHeader";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "../components/ui/SocialIcons";

export default function Contact() {
  useFadeIn();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: intégrer un service d'envoi (EmailJS, Formspree, Web3Forms, etc.)
    // Exemple Formspree : action="https://formspree.io/f/tonID"
    // Exemple EmailJS : appeler emailjs.sendForm() ici
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <SectionHeader
              tag="Contact"
              title="Me contacter"
              desc="Une question, un projet ou une opportunité ? N'hésitez pas à m'écrire."
              center
            />

            <form onSubmit={handleSubmit} className="mt-12 fade-in">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nom</label>
                <input
                  id="name"
                  name="from_name"
                  type="text"
                  className="form-input"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  name="reply_to"
                  type="email"
                  className="form-input"
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Votre message..."
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Envoyer
              </button>
            </form>

            <div className="mt-16 fade-in">
              <h3 className="font-display text-lg font-semibold text-center text-slate-100 mb-6">
                Ou retrouvez-moi sur
              </h3>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/eccureuil"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/7 border border-white/15 flex items-center justify-center text-slate-100/60 no-underline transition-all duration-200 hover:bg-purple-600/20 hover:text-accent-purple hover:border-purple-400/30"
                >
                  <GithubIcon size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/miradotsitohaina-rakotoniaina-193922360"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/7 border border-white/15 flex items-center justify-center text-slate-100/60 no-underline transition-all duration-200 hover:bg-purple-600/20 hover:text-accent-purple hover:border-purple-400/30"
                >
                  <LinkedinIcon size={22} />
                </a>
                <a
                  href="https://web.facebook.com/liantsoa.mirado.tsitohaina"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/7 border border-white/15 flex items-center justify-center text-slate-100/60 no-underline transition-all duration-200 hover:bg-purple-600/20 hover:text-accent-purple hover:border-purple-400/30"
                >
                  <FacebookIcon size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
