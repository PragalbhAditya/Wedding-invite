import { motion, useReducedMotion } from 'framer-motion';
import { EASE, viewport } from '../lib/motion';

// Fade + lift on scroll-into-view. Collapses to a plain fade under reduced motion.
export default function Reveal({
  children,
  as = 'div',
  className = '',
  delay = 0,
  y = 32,
  amount,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.3 : 0.7, ease: EASE, delay },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={amount ? { ...viewport, amount } : viewport}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
