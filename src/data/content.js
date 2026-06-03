// ─────────────────────────────────────────────────────────────
//  PLACEHOLDER CONTENT — edit everything here, no component edits.
// ─────────────────────────────────────────────────────────────

export const couple = {
  bride: 'Aditya',
  groom: 'Barbie',
  ampersand: '&',
  invocation: '॥ शुभ विवाह ॥', // Devanagari blessing (optional)
  date: 'Saturday, 12 December 2026',
  city: 'Udaipur, Rajasthan',
  hashtag: '#AdityaWedsBabita',
  intro:
    'Together with their families, request the honour of your presence as two hearts, two families, and two worlds become one.',
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'events', label: 'Events' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'travel', label: 'Travel' },
];

export const story = [
  {
    year: '2018',
    title: 'A Chance Meeting',
    text: 'A spilled cup of chai at a crowded Mumbai cafe, two strangers, and a conversation that refused to end.',
  },
  {
    year: '2020',
    title: 'Long Letters',
    text: 'Cities apart, they fell in love the old-fashioned way — in long phone calls that lasted until sunrise.',
  },
  {
    year: '2023',
    title: 'The Proposal',
    text: 'On a quiet rooftop under a sky full of lanterns, one question changed everything.',
  },
  {
    year: '2026',
    title: 'Forever Begins',
    text: 'And now, surrounded by the people they love most, the story becomes a celebration.',
  },
];

export const events = [
  {
    key: 'haldi',
    name: 'Haldi & Mehndi',
    icon: 'flower',
    date: 'Thu, 10 Dec 2026',
    time: '10:00 AM onwards',
    venue: 'Garden Courtyard, The Lake Palace',
    dress: 'Yellows, greens & florals',
    note: 'A morning of turmeric, henna, song and sunshine.',
    tone: 'haldi',
  },
  {
    key: 'sangeet',
    name: 'Sangeet & Cocktail',
    icon: 'music',
    date: 'Fri, 11 Dec 2026',
    time: '7:00 PM onwards',
    venue: 'Crystal Ballroom, The Lake Palace',
    dress: 'Cocktail glam — jewel tones',
    note: 'A night of music, dance and a little friendly choreography rivalry.',
    tone: 'sangeet',
  },
  {
    key: 'wedding',
    name: 'Wedding Ceremony',
    icon: 'flame',
    date: 'Sat, 12 Dec 2026',
    time: '6:00 PM (Baraat 5:00 PM)',
    venue: 'Mandap Lawn, The Lake Palace',
    dress: 'Traditional Indian formals',
    note: 'Seven steps, seven vows, and the sacred fire as witness.',
    tone: 'wedding',
  },
  {
    key: 'reception',
    name: 'Reception',
    icon: 'glass',
    date: 'Sun, 13 Dec 2026',
    time: '7:30 PM onwards',
    venue: 'Lakeside Terrace, The Lake Palace',
    dress: 'Black-tie elegant',
    note: 'Raise a glass to the newlyweds beneath the winter stars.',
    tone: 'reception',
  },
];

// Placeholder gallery tiles. Swap `src` in later — when a tile has a `src`
// the component renders the image; otherwise it shows a jewel-tone frame.
export const gallery = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  label: `Photo ${i + 1}`,
  src: null,
  // visual variety for placeholders
  tone: ['emerald', 'burgundy', 'navy', 'gold'][i % 4],
  tall: [0, 3, 4, 7].includes(i),
}));

export const venue = {
  name: 'The Lake Palace',
  address: 'Pichola, Udaipur, Rajasthan 313001, India',
  mapQuery: 'Lake Palace Udaipur',
  hotels: [
    { name: 'The Lake Palace (on-site)', note: 'Room block under "Aanya–Vivaan". Shuttle to all events.' },
    { name: 'Trident Udaipur', note: '15 min by road. Special wedding rate available.' },
    { name: 'Hotel Lakend', note: 'Budget-friendly, lake views, 20 min away.' },
  ],
  travel: [
    { title: 'By Air', text: 'Maharana Pratap Airport (UDR) — 25 min to the venue. Pickups can be arranged.' },
    { title: 'By Train', text: 'Udaipur City Station is the nearest railhead, ~20 min away.' },
    { title: 'Getting Around', text: 'A complimentary shuttle runs between partner hotels and the venue all weekend.' },
  ],
};
