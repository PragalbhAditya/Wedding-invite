import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLenis } from './lib/useLenis';
import { LanguageProvider } from './lib/LanguageContext';
import EnvelopeIntro from './components/EnvelopeIntro';
import MusicToggle from './components/MusicToggle';
import Nav from './components/Nav';
import SectionIndicator from './components/SectionIndicator';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import Events from './sections/Events';
import Gallery from './sections/Gallery';
import Venue from './sections/Venue';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);
  useLenis();

  useEffect(() => {
    const audio = new Audio('/music/background.mp3');
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    const fadeIn = () => {
      let vol = 0;
      const id = setInterval(() => {
        vol = Math.min(vol + 0.03, 0.45);
        audio.volume = vol;
        if (vol >= 0.45) clearInterval(id);
      }, 160);
    };

    // Try immediate autoplay; fall back to first user interaction
    audio.play().then(fadeIn).catch(() => {
      const onInteract = () => {
        audio.play().then(fadeIn).catch(() => {});
      };
      document.addEventListener('click', onInteract, { once: true });
      document.addEventListener('touchstart', onInteract, { once: true });
    });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const handleOpen = () => setIntroDone(true);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted((m) => !m);
  };

  return (
    <LanguageProvider>
      <ScrollProgress />
      <Nav />
      <SectionIndicator />
      <main>
        <Hero />
        <Events />
        <Gallery />
        <Venue />
        <Contact />
      </main>
      <Footer />

      <MusicToggle muted={muted} onToggle={toggleMute} />

      <AnimatePresence>
        {!introDone && <EnvelopeIntro key="intro" onOpen={handleOpen} />}
      </AnimatePresence>
    </LanguageProvider>
  );
}
