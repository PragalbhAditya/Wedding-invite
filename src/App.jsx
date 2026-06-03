import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLenis } from './lib/useLenis';
import { LanguageProvider } from './lib/LanguageContext';
import EnvelopeIntro from './components/EnvelopeIntro';
import Nav from './components/Nav';
import SectionIndicator from './components/SectionIndicator';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import Story from './sections/Story';
import Events from './sections/Events';
import Gallery from './sections/Gallery';
import Venue from './sections/Venue';
import Footer from './sections/Footer';

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  useLenis();

  return (
    <LanguageProvider>
      <ScrollProgress />
      <Nav />
      <SectionIndicator />
      <main>
        <Hero />
        <Story />
        <Events />
        <Gallery />
        <Venue />
      </main>
      <Footer />

      <AnimatePresence>
        {!introDone && <EnvelopeIntro key="intro" onOpen={() => setIntroDone(true)} />}
      </AnimatePresence>
    </LanguageProvider>
  );
}
