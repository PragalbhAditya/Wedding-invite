import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useContent } from '../lib/LanguageContext';
import { EASE } from '../lib/motion';
import GoldText from '../components/GoldText';
import MandalaDraw from '../components/MandalaDraw';
import Particles from '../components/Particles';

// Name that rises from behind a clipping edge — the foil gradient stays
// continuous because the whole word moves as one element.
function CurtainName({ children, delay, reduce }) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className="block"
        initial={reduce ? { opacity: 0 } : { y: '110%' }}
        animate={reduce ? { opacity: 1 } : { y: '0%' }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      >
        <GoldText>{children}</GoldText>
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { couple, ui, lang } = useContent();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Layered parallax as the hero scrolls away.
  const yMandala = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const enter = (delay) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: EASE, delay },
  });

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-dvh items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 30%, #14294a 0%, #0b1a2e 55%, #091523 100%)',
      }}
    >
      <Particles count={30} />

      {/* Breathing glow behind the names */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(201,162,75,0.16), transparent 70%)',
        }}
        animate={reduce ? {} : { scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <motion.div
        style={{ y: yMandala }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          animate={reduce ? {} : { rotate: 360 }}
          transition={{ duration: 160, repeat: Infinity, ease: 'linear' }}
        >
          <MandalaDraw size={620} className="max-w-[92vw] opacity-30" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 px-6 text-center"
      >
        <motion.p
          {...enter(0.1)}
          className="font-deva text-lg tracking-wide text-gold sm:text-xl"
        >
          {couple.invocation}
        </motion.p>

        <motion.p
          {...enter(0.25)}
          className={`mt-6 text-ivory-dim ${
            lang === 'hi'
              ? 'font-deva text-base'
              : 'font-body text-xs uppercase tracking-[0.45em]'
          }`}
        >
          {ui.hero.tagline}
        </motion.p>

        <h1 className="mt-4 leading-none">
          <span className="block font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            <CurtainName delay={0.4} reduce={reduce}>
              {couple.bride}
            </CurtainName>
          </span>
          <motion.span
            {...enter(0.7)}
            className="block font-display text-3xl italic text-ivory-dim sm:text-4xl"
          >
            {couple.ampersand}
          </motion.span>
          <span className="block font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            <CurtainName delay={0.85} reduce={reduce}>
              {couple.groom}
            </CurtainName>
          </span>
        </h1>

        <motion.div {...enter(0.9)} className="mx-auto mt-8 max-w-xs">
          <div className="rule-gold" />
          <p className="mt-4 font-display text-xl tracking-wide text-ivory sm:text-2xl">
            {couple.date}
          </p>
          <p className="mt-1 font-body text-sm uppercase tracking-[0.3em] text-ivory-dim">
            {couple.city}
          </p>
        </motion.div>
      </motion.div>

      <motion.a
        href="#story"
        aria-label="Scroll to our story"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ChevronDown size={28} strokeWidth={1.5} />
        </motion.span>
      </motion.a>
    </section>
  );
}
