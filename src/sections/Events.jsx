import { useContent } from '../lib/LanguageContext';
import Reveal from '../components/Reveal';
import EventCard from './EventCard';

export default function Events() {
  const { events, ui, lang } = useContent();
  return (
    <section id="events" className="relative bg-ink">
      <div className="px-6 pt-28 text-center md:pt-36">
        <Reveal>
          <p className={`text-gold ${lang === 'hi' ? 'font-deva text-sm' : 'font-body text-xs uppercase tracking-[0.4em]'}`}>
            {ui.events.eyebrow}
          </p>
          <h2 className={`mt-3 text-4xl text-ivory sm:text-5xl ${lang === 'hi' ? 'font-deva' : 'font-display'}`}>
            {ui.events.heading}
          </h2>
          <div className="rule-gold mx-auto mt-6 w-24" />
        </Reveal>
      </div>

      {events.map((event) => (
        <EventCard key={event.key} event={event} />
      ))}
    </section>
  );
}
