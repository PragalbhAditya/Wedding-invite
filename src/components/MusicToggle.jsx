import { motion } from 'framer-motion';
import { VolumeX } from 'lucide-react';

const BAR_HEIGHTS = [
  ['20%', '100%', '55%', '20%'],
  ['60%', '30%', '100%', '60%'],
  ['40%', '80%', '20%', '40%'],
];

export default function MusicToggle({ muted, onToggle }) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={muted ? 'Unmute music' : 'Mute music'}
      className="fixed bottom-8 right-6 z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-ink/75 text-gold backdrop-blur-md transition-colors hover:border-gold/70 hover:bg-gold/15"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {muted ? (
        <VolumeX size={17} strokeWidth={1.5} />
      ) : (
        <div className="flex h-4 items-end gap-[3px]" aria-hidden="true">
          {BAR_HEIGHTS.map((frames, i) => (
            <motion.span
              key={i}
              className="w-[3px] rounded-full bg-gold"
              animate={{ height: frames }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.18,
              }}
            />
          ))}
        </div>
      )}
    </motion.button>
  );
}
