import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { useContent } from '../lib/LanguageContext';
import { EASE } from '../lib/motion';
import Reveal from '../components/Reveal';

export default function Contact() {
  const { contacts, ui, lang } = useContent();

  return (
    <section id="contact" className="relative bg-ink-2 py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <p className={`text-gold ${lang === 'hi' ? 'font-deva text-sm' : 'font-body text-xs uppercase tracking-[0.4em]'}`}>
            {ui.contact.eyebrow}
          </p>
          <h2 className={`mt-3 text-4xl text-ivory sm:text-5xl ${lang === 'hi' ? 'font-deva' : 'font-display'}`}>
            {ui.contact.heading}
          </h2>
          <div className="rule-gold mx-auto mt-6 w-24" />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {contacts.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              className="flex flex-col border border-gold/20 bg-surface/40 p-7 text-center"
            >
              {/* Gold monogram circle */}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                <span className="font-display text-xl text-gold">
                  {c.name.charAt(0)}
                </span>
              </div>

              <p className={`text-lg text-ivory ${lang === 'hi' ? 'font-deva' : 'font-display'}`}>
                {c.name}
              </p>
              <p className={`mt-1 text-xs text-gold ${lang === 'hi' ? 'font-deva text-sm' : 'font-body uppercase tracking-[0.2em]'}`}>
                {c.role}
              </p>

              <div className="rule-gold mx-auto my-5 w-10" />

              <div className="mt-auto space-y-3">
                <a
                  href={`tel:${c.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 font-body text-sm text-ivory-dim transition-colors hover:text-gold"
                >
                  <Phone size={14} className="shrink-0 text-gold" />
                  {c.phone}
                </a>
                <a
                  href={`mailto:${c.email}`}
                  className="flex items-center justify-center gap-2 font-body text-sm text-ivory-dim transition-colors hover:text-gold"
                >
                  <Mail size={14} className="shrink-0 text-gold" />
                  {c.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
