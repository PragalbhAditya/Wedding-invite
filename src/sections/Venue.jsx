import { motion } from 'framer-motion';
import { MapPin, BedDouble, Navigation } from 'lucide-react';
import { useContent } from '../lib/LanguageContext';
import { EASE } from '../lib/motion';
import Reveal from '../components/Reveal';

function VenueCard({ label, name, address, mapQuery, directionsLabel, lang, delay = 0, realMap = false }) {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  return (
    <Reveal delay={delay}>
      {/* Label above the card */}
      <p className={`mb-5 text-center text-gold ${lang === 'hi' ? 'font-deva text-base' : 'font-body text-xs uppercase tracking-[0.3em]'}`}>
        {label}
      </p>

      <div className="grid items-center gap-10 md:grid-cols-2">
        {realMap ? (
          <div className="relative overflow-hidden rounded-sm border border-gold/20">
            <iframe
              title={name}
              src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
              className="aspect-[4/3] w-full grayscale-[0.2]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ) : (
        /* Stylised map */
        <div className="relative overflow-hidden rounded-sm border border-gold/20">
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
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: 'spring', stiffness: 220, damping: 12, delay: delay + 0.2 }}
            >
              <MapPin size={44} strokeWidth={1.5} fill="currentColor" />
            </motion.div>
            <motion.span
              className="absolute left-1/2 top-1/2 h-3 w-6 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-black/40 blur-sm"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: delay + 0.45 }}
            />
            {[0, 1].map((n) => (
              <motion.span
                key={n}
                className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/50"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: [0, 3], opacity: [0.6, 0] }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 1.8,
                  ease: 'easeOut',
                  delay: delay + 0.5 + n * 0.5,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
        )}

        {/* Info */}
        <div>
          <h3 className={`text-3xl text-ivory ${lang === 'hi' ? 'font-deva' : 'font-display'}`}>{name}</h3>
          <p className={`mt-2 text-ivory-dim ${lang === 'hi' ? 'font-deva leading-relaxed' : 'font-body'}`}>{address}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative mt-6 inline-flex items-center gap-2 overflow-hidden border border-gold px-6 py-3 text-gold transition-colors hover:bg-gold hover:text-ink ${
              lang === 'hi' ? 'font-deva text-base' : 'font-body text-sm uppercase tracking-[0.2em]'
            }`}
          >
            <span className="pointer-events-none absolute inset-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 ease-out group-hover:left-[150%]" />
            <Navigation size={16} />
            {directionsLabel}
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Venue() {
  const { venue, ui, lang } = useContent();

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

        {/* Wedding venue */}
        <div className="mt-14">
          <VenueCard
            label={ui.venue.weddingVenue}
            name={venue.name}
            address={venue.address}
            mapQuery={venue.mapQuery}
            directionsLabel={ui.venue.directions}
            lang={lang}
            delay={0}
            realMap
          />
        </div>

        {/* Divider */}
        <div className="my-14 flex items-center gap-4">
          <div className="h-px flex-1 bg-gold/15" />
          <span className="text-gold/40 text-lg" aria-hidden="true">✦</span>
          <div className="h-px flex-1 bg-gold/15" />
        </div>

        {/* Reception venue */}
        <VenueCard
          label={ui.venue.receptionVenue}
          name={venue.reception.name}
          address={venue.reception.address}
          mapQuery={venue.reception.mapQuery}
          directionsLabel={ui.venue.directions}
          lang={lang}
          delay={0.05}
          realMap
        />

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
