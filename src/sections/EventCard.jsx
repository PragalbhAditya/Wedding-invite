import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Flower2, Music4, Flame, Wine, Clock, MapPin, Shirt } from 'lucide-react';
import { useContent } from '../lib/LanguageContext';
import { EASE, viewport } from '../lib/motion';

const ICONS = { flower: Flower2, music: Music4, flame: Flame, glass: Wine };

const TONES = {
  haldi: {
    bg: 'radial-gradient(ellipse at 50% 40%, #1c4a30 0%, #123524 55%, #0c2419 100%)',
    accent: '#e7c873',
  },
  sangeet: {
    bg: 'radial-gradient(ellipse at 50% 40%, #0f3d2e 0%, #0c2c22 55%, #08201a 100%)',
    accent: '#c9a24b',
  },
  wedding: {
    bg: 'radial-gradient(ellipse at 50% 40%, #5b1a2b 0%, #3d1320 55%, #260c16 100%)',
    accent: '#e7c873',
  },
  reception: {
    bg: 'radial-gradient(ellipse at 50% 40%, #16294a 0%, #0e1d36 55%, #091523 100%)',
    accent: '#c9a24b',
  },
};

const item = (delay) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
});

export default function EventCard({ event }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { lang } = useContent();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const yIcon = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  const Icon = ICONS[event.icon] ?? Flower2;
  const tone = TONES[event.tone] ?? TONES.sangeet;

  return (
    <section
      ref={ref}
      className="relative flex min-h-dvh snap-start items-center justify-center overflow-hidden px-6 py-24"
      style={{ background: tone.bg }}
    >
      {/* Oversized parallax motif */}
      <motion.div
        style={{ y: yIcon, rotate }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <Icon
          size={460}
          strokeWidth={0.4}
          className="max-w-[90vw] opacity-[0.06]"
          color={tone.accent}
        />
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-md text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ ...viewport, amount: 0.4 }}
        whileHover={reduce ? {} : { y: -6 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <motion.div
          className="border border-gold/25 bg-ink/30 px-8 py-12 backdrop-blur-sm"
          variants={item(0)}
        >
          <motion.span
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40"
            style={{ color: tone.accent }}
            variants={{
              hidden: { scale: reduce ? 1 : 0, rotate: reduce ? 0 : -90, opacity: 0 },
              show: {
                scale: 1,
                rotate: 0,
                opacity: 1,
                transition: { type: 'spring', stiffness: 200, damping: 14, delay: 0.1 },
              },
            }}
          >
            <Icon size={30} strokeWidth={1.25} />
          </motion.span>

          <motion.h3
            className={`mt-6 text-4xl text-ivory sm:text-5xl ${lang === 'hi' ? 'font-deva' : 'font-display'}`}
            variants={item(0.2)}
          >
            {event.name}
          </motion.h3>
          <motion.p
            className={`mt-3 text-3xl text-gold ${lang === 'hi' ? 'font-deva' : 'font-script'}`}
            variants={item(0.3)}
          >
            {event.date}
          </motion.p>

          <motion.div className="rule-gold mx-auto my-6 w-16" variants={item(0.38)} />

          <motion.ul
            className={`space-y-3 text-left text-sm text-ivory-dim ${lang === 'hi' ? 'font-deva text-base leading-relaxed' : 'font-body'}`}
            variants={item(0.46)}
          >
            <li className="flex items-center gap-3">
              <Clock size={16} className="shrink-0 text-gold" />
              {event.time}
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="shrink-0 text-gold" />
              {event.venue}
            </li>
            <li className="flex items-center gap-3">
              <Shirt size={16} className="shrink-0 text-gold" />
              {event.dress}
            </li>
          </motion.ul>

          <motion.p
            className={`mt-6 text-lg text-ivory ${lang === 'hi' ? 'font-deva' : 'font-display italic'}`}
            variants={item(0.56)}
          >
            “{event.note}”
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
