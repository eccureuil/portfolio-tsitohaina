import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useFadeIn } from "../hooks/useFadeIn";

emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });
import SectionHeader from "../components/ui/SectionHeader";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "../components/ui/SocialIcons";

export default function Contact() {
  useFadeIn();

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.currentTarget,
      );
      setStatus("sent");
      e.currentTarget.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
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

            {status === "sent" ? (
              <div className="mt-12 fade-in text-center">
                <p className="text-accent-purple font-semibold text-lg">
                  Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            ) : (
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
                <button type="submit" className="btn-primary w-full justify-center" disabled={status === "sending"}>
                  {status === "sending" ? "Envoi en cours…" : "Envoyer"}
                </button>
                {status === "error" && (
                  <p className="text-red-400 text-sm text-center mt-4">
                    Une erreur est survenue. Veuillez réessayer ou m'écrire directement par email.
                  </p>
                )}
              </form>
            )}

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
