import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { TILE_BG, Frame } from './galleryTile';

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Scrim */}
      <div
        className="absolute inset-0 bg-ink/85 backdrop-blur-md"
        onClick={onClose}
      />

      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-10 text-ivory transition-colors hover:text-gold"
        aria-label="Close"
      >
        <X size={30} strokeWidth={1.5} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 z-10 text-ivory transition-colors hover:text-gold md:left-8"
        aria-label="Previous photo"
      >
        <ChevronLeft size={40} strokeWidth={1.25} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 z-10 text-ivory transition-colors hover:text-gold md:right-8"
        aria-label="Next photo"
      >
        <ChevronRight size={40} strokeWidth={1.25} />
      </button>

      <motion.div
        layoutId={`g-${item.id}`}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.4}
        onDragEnd={(_, info) => {
          if (Math.abs(info.offset.y) > 120) onClose();
        }}
        className="relative z-[5] aspect-[3/4] w-full max-w-md overflow-hidden rounded-sm border border-gold/30 shadow-2xl"
        style={{ background: TILE_BG[item.tone] }}
      >
        {item.src ? (
          <img
            src={item.src}
            alt={item.label}
            className="h-full w-full object-cover"
          />
        ) : (
          <Frame label={item.label} />
        )}
      </motion.div>
    </motion.div>
  );
}
