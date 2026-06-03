// Shared motion tokens so every animation shares one rhythm.
export const EASE = [0.22, 1, 0.36, 1]; // easeOutExpo-ish, for reveals
export const EASE_SOFT = [0.16, 1, 0.3, 1];
export const SPRING = { type: 'spring', stiffness: 120, damping: 18, mass: 0.6 };

export const DUR = { micro: 0.2, base: 0.6, reveal: 0.7, cinematic: 1.1 };

// In-view viewport config: animate once, when ~25% visible.
export const viewport = { once: true, amount: 0.25 };

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DUR.reveal, ease: EASE, delay: i * 0.08 },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: DUR.base, ease: EASE } },
};

// Parent that staggers its children's entrance.
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
