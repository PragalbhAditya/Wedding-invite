import { events } from '../data/content';
import Reveal from '../components/Reveal';
import EventCard from './EventCard';

export default function Events() {
  return (
    <section id="events" className="relative bg-ink">
      <div className="px-6 pt-28 text-center md:pt-36">
        <Reveal>
          <p className="font-body text-xs uppercase tracking-[0.4em] text-gold">
            Four days of celebration
          </p>
          <h2 className="mt-3 font-display text-4xl text-ivory sm:text-5xl">
            The Events
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
