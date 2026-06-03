import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '../lib/motion';
import { useContent } from '../lib/LanguageContext';
import GoldText from './GoldText';
import Particles from './Particles';

// Tap-to-open envelope shown over the site on first load.
export default function EnvelopeIntro({ onOpen }) {
  const reduce = useReducedMotion();
  const [opening, setOpening] = useState(false);
  const { couple, ui, lang, setLang } = useContent();
  const t = ui.envelope;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const open = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, reduce ? 500 : 2200);
  };

  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open();
    }
  };

  const monogram = `${couple.bride[0]} & ${couple.groom[0]}`;

  // animate-target helper (no transforms under reduced motion)
  const a = (target) => (opening && !reduce ? target : {});

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-6"
      style={{
        background:
          'radial-gradient(ellipse at 50% 40%, #14294a 0%, #0b1a2e 55%, #091523 100%)',
        perspective: 1400,
      }}
      initial={{ opacity: 1 }}
      animate={
        opening
          ? { opacity: 0, transition: { duration: reduce ? 0.4 : 0.7, delay: reduce ? 0.1 : 1.35 } }
          : {}
      }
      role="dialog"
      aria-label={t.dialogLabel}
    >
      <Particles count={26} />

      {/* Language toggle */}
      {!opening && (
        <div className="absolute top-5 right-5 flex items-center gap-1" aria-label="Select language">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLang('en'); }}
            className={`px-2.5 py-1 rounded-sm border text-xs font-body uppercase tracking-[0.2em] transition-all duration-300 ${
              lang === 'en'
                ? 'border-gold/55 text-gold bg-gold/10'
                : 'border-gold/20 text-ivory-dim hover:border-gold/40 hover:text-ivory'
            }`}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
          <span className="text-gold/30 text-xs select-none" aria-hidden="true">|</span>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLang('hi'); }}
            className={`px-2.5 py-1 rounded-sm border font-deva text-sm leading-none transition-all duration-300 ${
              lang === 'hi'
                ? 'border-gold/55 text-gold bg-gold/10'
                : 'border-gold/20 text-ivory-dim hover:border-gold/40 hover:text-ivory'
            }`}
            aria-pressed={lang === 'hi'}
          >
            हिं
          </button>
        </div>
      )}

      {/* Idle float wrapper (sets the envelope size) */}
      <motion.div
        className="relative"
        style={{ width: 'min(380px, 86vw)', aspectRatio: '3 / 2' }}
        animate={
          !opening && !reduce ? { y: [0, -9, 0] } : {}
        }
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute -inset-16 blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(201,162,75,0.16), transparent 70%)',
          }}
          aria-hidden="true"
        />
        {/* Grounding shadow */}
        <div
          className="pointer-events-none absolute -bottom-7 left-1/2 h-7 w-2/3 -translate-x-1/2 rounded-[50%] bg-black/50 blur-xl"
          aria-hidden="true"
        />

        <motion.button
          type="button"
          onClick={open}
          onKeyDown={onKey}
          aria-label={t.btnLabel}
          className="absolute inset-0 cursor-pointer outline-none"
          style={{ transformStyle: 'preserve-3d' }}
          animate={a({ scale: 1.35, y: -28, transition: { duration: 0.8, delay: 1.0, ease: EASE } })}
          whileHover={opening ? {} : { scale: 1.025 }}
        >
          {/* Envelope back panel */}
          <div
            className="absolute inset-0 rounded-sm"
            style={{ background: 'linear-gradient(160deg, #0e1d36, #091523)' }}
          />

          {/* Invitation card (hidden inside, then slides up and out) */}
          <motion.div
            className={`absolute left-1/2 top-[8%] flex h-[80%] w-[80%] -translate-x-1/2 flex-col items-center justify-center rounded-sm px-5 text-center ${
              opening && !reduce ? 'z-50' : 'z-10'
            }`}
            style={{
              background: 'linear-gradient(160deg, #16283f, #0b1a2e)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.45)',
            }}
            animate={a({ y: '-74%', transition: { duration: 0.9, delay: 0.55, ease: EASE } })}
          >
            <div className="pointer-events-none absolute inset-2 rounded-sm border border-gold/30" />
            <div className="pointer-events-none absolute inset-[7px] rounded-sm border border-gold/15" />
            <p className="font-deva text-xs text-gold sm:text-sm">{couple.invocation}</p>
            <div className="rule-gold my-2 w-12" />
            <p className={`text-[9px] text-ivory-dim transition-all duration-300 ${
              lang === 'en'
                ? 'font-body uppercase tracking-[0.35em]'
                : 'font-deva text-[11px] tracking-wide'
            }`}>
              {t.invited}
            </p>
            <p className="mt-1 font-script text-2xl leading-tight sm:text-3xl">
              <GoldText>
                {couple.bride} &amp; {couple.groom}
              </GoldText>
            </p>
            <p className="mt-1 font-display text-[10px] uppercase tracking-[0.25em] text-ivory-dim">
              {couple.date}
            </p>
          </motion.div>

          {/* Opaque front panel with engraving + corner accents */}
          <svg
            viewBox="0 0 360 240"
            preserveAspectRatio="none"
            className="absolute inset-0 z-20 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="frontGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#102544" />
                <stop offset="1" stopColor="#0a1c36" />
              </linearGradient>
              <radialGradient id="sheen" cx="0.5" cy="0.52" r="0.5">
                <stop offset="0" stopColor="#1b3457" stopOpacity="0.9" />
                <stop offset="1" stopColor="#0c1f3a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="360" height="240" fill="#0c1f3a" />
            <polygon points="0,240 360,240 180,120" fill="url(#frontGrad)" />
            <rect x="0" y="0" width="360" height="240" fill="url(#sheen)" />
            <line x1="0" y1="0" x2="180" y2="120" stroke="#c9a24b" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="360" y1="0" x2="180" y2="120" stroke="#c9a24b" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="0" y1="240" x2="180" y2="120" stroke="#c9a24b" strokeWidth="1" strokeOpacity="0.3" />
            <line x1="360" y1="240" x2="180" y2="120" stroke="#c9a24b" strokeWidth="1" strokeOpacity="0.3" />
            <rect x="1" y="1" width="358" height="238" fill="none" stroke="#c9a24b" strokeWidth="1" strokeOpacity="0.55" />
            <rect x="9" y="9" width="342" height="222" fill="none" stroke="#c9a24b" strokeWidth="0.75" strokeOpacity="0.22" />
            {[
              [16, 16],
              [344, 16],
              [16, 224],
              [344, 224],
            ].map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" fill="#c9a24b" fillOpacity="0.55" />
            ))}
          </svg>

          {/* Top flap (swings open) */}
          <motion.div
            className="absolute left-0 top-0 z-30 w-full origin-top"
            style={{ height: '50%', transformStyle: 'preserve-3d' }}
            animate={a({ rotateX: -165, transition: { duration: 0.9, delay: 0.3, ease: EASE } })}
          >
            <svg viewBox="0 0 360 120" preserveAspectRatio="none" className="h-full w-full" aria-hidden="true">
              <defs>
                <linearGradient id="flapGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#13294a" />
                  <stop offset="1" stopColor="#0c1f3a" />
                </linearGradient>
              </defs>
              <polygon points="0,0 360,0 180,120" fill="url(#flapGrad)" />
              <polyline points="0,0 180,120 360,0" fill="none" stroke="#c9a24b" strokeWidth="1" strokeOpacity="0.55" />
            </svg>
          </motion.div>

          {/* Wax seal */}
          <motion.span
            className="absolute left-1/2 top-[50%] z-40 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
            style={{
              background: 'radial-gradient(circle at 36% 30%, #8a2a40, #5a1626 55%, #3d1020 100%)',
              boxShadow:
                '0 6px 16px rgba(0,0,0,0.55), inset 0 2px 5px rgba(255,255,255,0.18), inset 0 -3px 6px rgba(0,0,0,0.4)',
              border: '2px solid rgba(201,162,75,0.65)',
            }}
            animate={a({ scale: 0, opacity: 0, transition: { duration: 0.4, ease: EASE } })}
          >
            <span className="absolute inset-[5px] rounded-full border border-gold/30" />
            <span
              className="absolute left-[22%] top-[20%] h-3 w-3 rounded-full bg-white/25 blur-[2px]"
              aria-hidden="true"
            />
            <span
              className="relative font-display text-sm tracking-wide"
              style={{ color: '#e7c873', textShadow: '0 1px 1px rgba(0,0,0,0.5)' }}
            >
              {monogram}
            </span>
          </motion.span>
        </motion.button>
      </motion.div>

      {!opening && (
        <motion.div
          className="mt-14 flex items-center gap-3"
          animate={reduce ? {} : { opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
          <p className={`text-ivory-dim transition-all duration-300 ${
            lang === 'en'
              ? 'font-body text-xs uppercase tracking-[0.35em]'
              : 'font-deva text-sm'
          }`}>
            {t.tap}
          </p>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/50" />
        </motion.div>
      )}
    </motion.div>
  );
}
