import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Lightweight floating gold dust. Renders nothing under reduced motion.
export default function Particles({ count = 26, className = '' }) {
  const reduce = useReducedMotion();

  const dots = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        delay: Math.random() * 6,
        dur: Math.random() * 6 + 7,
        drift: Math.random() * 30 - 15,
      })),
    [count],
  );

  if (reduce) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            background: 'var(--color-gold-hi)',
            boxShadow: '0 0 6px var(--color-gold)',
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.85, 0], y: [0, -44], x: [0, d.drift] }}
          transition={{
            duration: d.dur,
            delay: d.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
