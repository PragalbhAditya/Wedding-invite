import { Camera } from 'lucide-react';

// Jewel-tone gradients used for placeholder photo tiles.
export const TILE_BG = {
  emerald: 'linear-gradient(150deg, #0f3d2e, #08201a)',
  burgundy: 'linear-gradient(150deg, #5b1a2b, #260c16)',
  navy: 'linear-gradient(150deg, #16294a, #091523)',
  gold: 'linear-gradient(150deg, #8c6b1e, #4a3a12)',
};

// Placeholder content shown until a real image `src` is supplied.
export function Frame({ label }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-gold/60">
      <Camera size={32} strokeWidth={1.25} />
      <span className="font-body text-xs uppercase tracking-[0.3em]">{label}</span>
    </div>
  );
}
