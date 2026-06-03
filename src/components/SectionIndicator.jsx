import { useEffect, useState } from 'react';
import { useContent } from '../lib/LanguageContext';

// Fixed vertical dot navigation (desktop only). Active dot tracks the
// section currently in view via IntersectionObserver.
export default function SectionIndicator() {
  const { navItems, lang } = useContent();
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex"
      aria-label="Section navigation"
    >
      {navItems.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group relative flex items-center"
            aria-label={item.label}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className={`absolute right-6 whitespace-nowrap text-ivory-dim opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${lang === 'hi' ? 'font-deva text-sm' : 'font-body text-[11px] uppercase tracking-[0.18em]'}`}>
              {item.label}
            </span>
            <span
              className={`block rounded-full border border-gold transition-all duration-300 ${
                isActive
                  ? 'h-3 w-3 bg-gold'
                  : 'h-2 w-2 bg-transparent group-hover:bg-gold/40'
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
