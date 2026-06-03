import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gallery } from '../data/content';
import { EASE, viewport } from '../lib/motion';
import Reveal from '../components/Reveal';
import Lightbox from './Lightbox';
import { TILE_BG, Frame } from './galleryTile';

export default function Gallery() {
  const [index, setIndex] = useState(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i + gallery.length - 1) % gallery.length),
    [],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % gallery.length),
    [],
  );

  return (
    <section id="gallery" className="relative bg-ink-2 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-gold">
            Moments
          </p>
          <h2 className="mt-3 font-display text-4xl text-ivory sm:text-5xl">
            Gallery
          </h2>
          <div className="rule-gold mx-auto mt-6 w-24" />
        </Reveal>

        <div className="mt-14 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {gallery.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              layoutId={`g-${item.id}`}
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: EASE, delay: (i % 3) * 0.08 }}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className={`group relative block w-full overflow-hidden rounded-sm border border-gold/15 ${
                item.tall ? 'aspect-[3/4]' : 'aspect-square'
              }`}
              style={{ background: TILE_BG[item.tone] }}
              aria-label={`Open ${item.label}`}
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <Frame label={item.label} />
              )}
              <span className="pointer-events-none absolute inset-0 bg-gold/0 transition-colors duration-300 group-hover:bg-gold/10" />
              {/* Diagonal gold shine sweep on hover */}
              <span className="pointer-events-none absolute inset-0 overflow-hidden">
                <span className="absolute -inset-y-8 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-gold/25 to-transparent transition-all duration-700 ease-out group-hover:left-[110%]" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {index !== null && (
          <Lightbox
            items={gallery}
            index={index}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
