import { useRef } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import { story } from '../data/content';
import { EASE, viewport } from '../lib/motion';
import Reveal from '../components/Reveal';

export default function Story() {
  const reduce = useReducedMotion();
  const railRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 65%', 'end 75%'],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    mass: 0.4,
  });

  return (
    <section id="story" className="relative bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-gold">
            How it began
          </p>
          <h2 className="mt-3 font-display text-4xl text-ivory sm:text-5xl">
            Our Story
          </h2>
          <div className="rule-gold mx-auto mt-6 w-24" />
        </Reveal>

        <div ref={railRef} className="relative mt-16 pl-10 md:pl-14">
          {/* Track + animated fill */}
          <div className="absolute bottom-1 left-[7px] top-1 w-px bg-gold/20 md:left-[11px]" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-1 left-[7px] top-1 w-px origin-top bg-gradient-to-b from-gold-hi to-gold md:left-[11px]"
          />

          <div className="space-y-14">
            {story.map((item) => (
              <motion.div
                key={item.year}
                className="relative"
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                {/* Node */}
                <motion.span
                  className="absolute -left-10 top-1.5 flex h-4 w-4 items-center justify-center md:-left-14"
                  variants={{
                    hidden: { scale: reduce ? 1 : 0 },
                    show: {
                      scale: 1,
                      transition: { type: 'spring', stiffness: 320, damping: 16, delay: 0.15 },
                    },
                  }}
                >
                  <span className="h-3 w-3 rounded-full border border-gold bg-ink" />
                  <span className="absolute h-3 w-3 animate-ping rounded-full bg-gold/30" />
                </motion.span>

                <motion.p
                  className="font-script text-3xl text-gold"
                  variants={{
                    hidden: { opacity: 0, scale: reduce ? 1 : 0.6 },
                    show: {
                      opacity: 1,
                      scale: 1,
                      transition: { type: 'spring', stiffness: 240, damping: 18, delay: 0.1 },
                    },
                  }}
                >
                  {item.year}
                </motion.p>
                <motion.h3
                  className="mt-1 font-display text-2xl text-ivory sm:text-3xl"
                  variants={{
                    hidden: { opacity: 0, x: reduce ? 0 : -40 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE, delay: 0.18 } },
                  }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="mt-2 max-w-prose font-body text-ivory-dim"
                  variants={{
                    hidden: { opacity: 0, x: reduce ? 0 : -40 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE, delay: 0.28 } },
                  }}
                >
                  {item.text}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
