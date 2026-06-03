import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useContent } from '../lib/LanguageContext';
import GoldText from '../components/GoldText';

export default function Footer() {
  const reduce = useReducedMotion();
  const { couple, ui, lang } = useContent();

  return (
    <footer className="relative overflow-hidden bg-ink-2 py-24 text-center">
      {/* Drawn-in flourish */}
      <svg
        viewBox="0 0 240 24"
        className="mx-auto h-6 w-60 text-gold"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <motion.path
          d="M2 12 H92 M148 12 H238 M120 4 L128 12 L120 20 L112 12 Z M100 12 H112 M128 12 H140"
          strokeWidth="1"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
      </svg>

      <motion.p
        className="mt-8 font-script text-5xl sm:text-6xl"
        animate={reduce ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <GoldText>
          {couple.bride} &amp; {couple.groom}
        </GoldText>
      </motion.p>
      <p className={`mt-4 text-sm text-ivory-dim ${lang === 'hi' ? 'font-deva' : 'font-body uppercase tracking-[0.3em]'}`}>
        {couple.date} · {couple.city}
      </p>
      <p className="mt-6 font-display text-xl italic text-ivory">
        {couple.hashtag}
      </p>

      <a
        href="#home"
        className={`mt-10 inline-flex flex-col items-center gap-2 text-ivory-dim transition-colors hover:text-gold ${
          lang === 'hi' ? 'font-deva text-sm' : 'font-body text-xs uppercase tracking-[0.25em]'
        }`}
        aria-label={ui.footer.backToTop}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40">
          <ArrowUp size={16} />
        </span>
        {ui.footer.backToTop}
      </a>

      <p className={`mt-12 text-ivory-dim/50 ${lang === 'hi' ? 'font-deva text-sm' : 'font-body text-[11px] uppercase tracking-[0.2em]'}`}>
        {ui.footer.closing}
      </p>
    </footer>
  );
}
