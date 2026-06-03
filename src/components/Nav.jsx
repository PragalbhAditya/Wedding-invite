import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useContent } from '../lib/LanguageContext';

function LangToggle({ lang, setLang, className = '' }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2 py-0.5 rounded-sm border text-xs font-body uppercase tracking-[0.18em] transition-all duration-300 ${
          lang === 'en'
            ? 'border-gold/55 text-gold bg-gold/10'
            : 'border-gold/20 text-ivory-dim hover:border-gold/40 hover:text-ivory'
        }`}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <span className="text-gold/30 text-[10px] select-none" aria-hidden="true">|</span>
      <button
        type="button"
        onClick={() => setLang('hi')}
        className={`px-2 py-0.5 rounded-sm border font-deva text-sm leading-none transition-all duration-300 ${
          lang === 'hi'
            ? 'border-gold/55 text-gold bg-gold/10'
            : 'border-gold/20 text-ivory-dim hover:border-gold/40 hover:text-ivory'
        }`}
        aria-pressed={lang === 'hi'}
      >
        हिं
      </button>
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { couple, navItems, ui, lang, setLang } = useContent();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const monogram = `${couple.bride[0]} & ${couple.groom[0]}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'border-b border-gold/15 bg-ink/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#home"
          className="font-display text-xl tracking-[0.2em] text-foil"
          aria-label="Back to top"
        >
          {monogram}
        </a>

        {/* Desktop nav + toggle */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`group relative transition-colors hover:text-ivory ${
                    lang === 'hi'
                      ? 'font-deva text-base text-ivory-dim'
                      : 'font-body text-sm uppercase tracking-[0.18em] text-ivory-dim'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <LangToggle lang={lang} setLang={setLang} />
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-ivory"
            aria-label={ui.nav.openMenu}
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-ink/95 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 text-ivory"
              aria-label={ui.nav.closeMenu}
            >
              <X size={28} strokeWidth={1.5} />
            </button>
            {navItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`text-ivory ${lang === 'hi' ? 'font-deva text-4xl' : 'font-display text-3xl'}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i + 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
