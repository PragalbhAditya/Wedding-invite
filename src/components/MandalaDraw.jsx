import { motion, useReducedMotion } from 'framer-motion';

// A self-drawing mandala motif (stroke-dash via Framer `pathLength`).
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i = 0) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2.2, ease: 'easeInOut', delay: i * 0.12 },
      opacity: { duration: 0.4, delay: i * 0.12 },
    },
  }),
};

export default function MandalaDraw({ className = '', size = 380 }) {
  const reduce = useReducedMotion();
  const stroke = 'var(--color-gold)';
  const petals = Array.from({ length: 12 });

  const motion_ = reduce
    ? { initial: false, animate: { pathLength: 1, opacity: 0.55 } }
    : {
        variants: draw,
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, amount: 0.4 },
      };

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      fill="none"
      stroke={stroke}
    >
      <motion.circle cx="100" cy="100" r="94" strokeWidth="0.6" custom={0} {...motion_} />
      <motion.circle cx="100" cy="100" r="84" strokeWidth="1" custom={0.3} {...motion_} />
      {petals.map((_, i) => (
        <motion.ellipse
          key={i}
          cx="100"
          cy="38"
          rx="9"
          ry="30"
          strokeWidth="0.8"
          transform={`rotate(${i * 30} 100 100)`}
          custom={0.6 + i * 0.04}
          {...motion_}
        />
      ))}
      <motion.circle cx="100" cy="100" r="48" strokeWidth="1" custom={1.1} {...motion_} />
      {petals.map((_, i) => (
        <motion.path
          key={`p${i}`}
          d="M100 64 Q108 84 100 100 Q92 84 100 64 Z"
          strokeWidth="0.7"
          transform={`rotate(${i * 30 + 15} 100 100)`}
          custom={1.4 + i * 0.03}
          {...motion_}
        />
      ))}
      <motion.circle cx="100" cy="100" r="16" strokeWidth="1" custom={1.9} {...motion_} />
      <motion.circle cx="100" cy="100" r="4" fill={stroke} stroke="none" custom={2.1} {...motion_} />
    </svg>
  );
}
