import { motion } from 'framer-motion';
import { MapPin, BedDouble, Navigation } from 'lucide-react';
import { useContent } from '../lib/LanguageContext';
import { EASE } from '../lib/motion';
import Reveal from '../components/Reveal';

export default function Venue() {
  const { venue, ui, lang } = useContent();
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    venue.mapQuery,
  )}`;

  return (
    <section id="travel" className="relative bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className={`text-gold ${lang === 'hi' ? 'font-deva text-sm' : 'font-body text-xs uppercase tracking-[0.4em]'}`}>
            {ui.venue.eyebrow}
          </p>
          <h2 className={`mt-3 text-4xl text-ivory sm:text-5xl ${lang === 'hi' ? 'font-deva' : 'font-display'}`}>
            {ui.venue.heading}
          </h2>
          <div className="rule-gold mx-auto mt-6 w-24" />
        </Reveal>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
          {/* Stylised map with a dropping pin */}
          <Reveal className="relative overflow-hidden rounded-sm border border-gold/20">
            <div
              className="relative aspect-[4/3] w-full"
              style={{
                backgroundColor: '#0e1d36',
                backgroundImage:
                  'linear-gradient(rgba(201,162,75,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,75,0.12) 1px, transparent 1px)',
                backgroundSize: '36px 36px',
              }}
            >
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full text-gold"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ type: 'spring', stiffness: 220, damping: 12, delay: 0.2 }}
              >
                <MapPin size={44} strokeWidth={1.5} fill="currentColor" />
              </motion.div>
              <motion.span
                className="absolute left-1/2 top-1/2 h-3 w-6 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-black/40 blur-sm"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: 0.45 }}
              />
              {/* Expanding ripple where the pin lands */}
              {[0, 1].map((n) => (
                <motion.span
                  key={n}
                  className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/50"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: [0, 3], opacity: [0.6, 0] }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 1.8,
                    ease: 'easeOut',
                    delay: 0.5 + n * 0.5,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className={`text-3xl text-ivory ${lang === 'hi' ? 'font-deva' : 'font-display'}`}>{venue.name}</h3>
            <p className={`mt-2 text-ivory-dim ${lang === 'hi' ? 'font-deva leading-relaxed' : 'font-body'}`}>{venue.address}</p>
            <a
              href={directions}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative mt-6 inline-flex items-center gap-2 overflow-hidden border border-gold px-6 py-3 text-gold transition-colors hover:bg-gold hover:text-ink ${
                lang === 'hi' ? 'font-deva text-base' : 'font-body text-sm uppercase tracking-[0.2em]'
              }`}
            >
              <span className="pointer-events-none absolute inset-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 ease-out group-hover:left-[150%]" />
              <Navigation size={16} />
              {ui.venue.directions}
            </a>
          </Reveal>
        </div>

        {/* Travel tips */}
        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {venue.travel.map((tr, i) => (
            <Reveal
              key={tr.title}
              delay={i * 0.06}
              className="border border-gold/15 bg-surface/40 p-6"
            >
              <h4 className={`text-xl text-gold ${lang === 'hi' ? 'font-deva' : 'font-display'}`}>{tr.title}</h4>
              <p className={`mt-2 text-sm text-ivory-dim ${lang === 'hi' ? 'font-deva text-base leading-relaxed' : 'font-body'}`}>{tr.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Accommodation */}
        <Reveal className="mt-14 flex items-center justify-center gap-3 text-ivory">
          <BedDouble size={20} className="text-gold" />
          <h3 className={`text-2xl ${lang === 'hi' ? 'font-deva' : 'font-display'}`}>{ui.venue.whereToStay}</h3>
        </Reveal>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {venue.hotels.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              className="border border-gold/15 bg-surface/40 p-6"
            >
              <p className={`text-lg text-ivory ${lang === 'hi' ? 'font-deva' : 'font-display'}`}>{h.name}</p>
              <p className={`mt-2 text-sm text-ivory-dim ${lang === 'hi' ? 'font-deva text-base leading-relaxed' : 'font-body'}`}>{h.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
