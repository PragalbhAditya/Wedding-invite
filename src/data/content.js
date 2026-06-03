// ─────────────────────────────────────────────────────────────
//  PLACEHOLDER CONTENT — edit everything here, no component edits.
//  Bilingual: each top-level key holds `en` and `hi` sub-objects.
// ─────────────────────────────────────────────────────────────

export const content = {
  en: {
    couple: {
      bride: 'Aditya',
      groom: 'Barbie',
      ampersand: '&',
      invocation: '॥ शुभ विवाह ॥',
      date: 'Saturday, 12 December 2026',
      city: 'Udaipur, Rajasthan',
      hashtag: '#AdityaWedsBabita',
      intro:
        'Together with their families, request the honour of your presence as two hearts, two families, and two worlds become one.',
    },

    navItems: [
      { id: 'home', label: 'Home' },
      { id: 'story', label: 'Our Story' },
      { id: 'events', label: 'Events' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'travel', label: 'Travel' },
    ],

    story: [
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
    ],

    events: [
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
    ],

    venue: {
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
    },

    ui: {
      hero: { tagline: "We're getting married" },
      story: { eyebrow: 'How it began', heading: 'Our Story' },
      events: { eyebrow: 'Four days of celebration', heading: 'The Events' },
      gallery: { eyebrow: 'Moments', heading: 'Gallery' },
      venue: { eyebrow: 'Getting there', heading: 'Venue & Travel', directions: 'Get directions', whereToStay: 'Where to Stay' },
      footer: { backToTop: 'Back to top', closing: 'With love & blessings' },
      envelope: { invited: "You're invited", tap: 'Tap to open', dialogLabel: 'Open your wedding invitation', btnLabel: 'Tap to open the invitation' },
      nav: { openMenu: 'Open menu', closeMenu: 'Close menu' },
    },
  },

  hi: {
    couple: {
      bride: 'Aditya',
      groom: 'Barbie',
      ampersand: '&',
      invocation: '॥ शुभ विवाह ॥',
      date: 'शनिवार, 12 दिसंबर 2026',
      city: 'उदयपुर, राजस्थान',
      hashtag: '#AdityaWedsBabita',
      intro:
        'अपने-अपने परिवारों के साथ, वे आपसे निवेदन करते हैं कि इस पावन अवसर पर उपस्थित हों, जब दो हृदय, दो परिवार और दो दुनियाएँ एक हो जाती हैं।',
    },

    navItems: [
      { id: 'home', label: 'मुख्य पृष्ठ' },
      { id: 'story', label: 'हमारी कहानी' },
      { id: 'events', label: 'कार्यक्रम' },
      { id: 'gallery', label: 'गैलरी' },
      { id: 'travel', label: 'यात्रा' },
    ],

    story: [
      {
        year: '2018',
        title: 'एक अनोखी मुलाकात',
        text: 'मुंबई के एक भीड़भाड़ वाले कैफे में गिरी चाय की चुस्की, दो अजनबी और एक बातचीत जो रुकने का नाम न ले।',
      },
      {
        year: '2020',
        title: 'लंबी बातें',
        text: 'शहरों की दूरियाँ थीं, पर प्यार पुराने अंदाज़ में परवान चढ़ा — उन लंबी फ़ोन कॉल्स में जो सूर्योदय तक चलती थीं।',
      },
      {
        year: '2023',
        title: 'प्रस्ताव',
        text: 'लालटेनों से भरे आकाश तले एक शांत छत पर, एक सवाल ने सब कुछ बदल दिया।',
      },
      {
        year: '2026',
        title: 'हमेशा के लिए',
        text: 'और अब, अपने प्रियजनों के बीच, यह कहानी एक उत्सव बन जाती है।',
      },
    ],

    events: [
      {
        key: 'haldi',
        name: 'हल्दी और मेहंदी',
        icon: 'flower',
        date: 'गुरुवार, 10 दिसंबर 2026',
        time: 'प्रातः 10:00 बजे से',
        venue: 'गार्डन कोर्टयार्ड, द लेक पैलेस',
        dress: 'पीला, हरा और फूलों वाले रंग',
        note: 'हल्दी, मेहंदी, संगीत और धूप से भरी एक सुबह।',
        tone: 'haldi',
      },
      {
        key: 'sangeet',
        name: 'संगीत और कॉकटेल',
        icon: 'music',
        date: 'शुक्रवार, 11 दिसंबर 2026',
        time: 'सायं 7:00 बजे से',
        venue: 'क्रिस्टल बॉलरूम, द लेक पैलेस',
        dress: 'कॉकटेल ग्लैम — रत्न रंग',
        note: 'संगीत, नृत्य और थोड़ी कोरियोग्राफी की मैत्रीपूर्ण प्रतिस्पर्धा की एक शाम।',
        tone: 'sangeet',
      },
      {
        key: 'wedding',
        name: 'विवाह समारोह',
        icon: 'flame',
        date: 'शनिवार, 12 दिसंबर 2026',
        time: 'सायं 6:00 बजे (बारात 5:00 बजे)',
        venue: 'मंडप लॉन, द लेक पैलेस',
        dress: 'पारंपरिक भारतीय वेशभूषा',
        note: 'सात कदम, सात वचन और पवित्र अग्नि की साक्षी में।',
        tone: 'wedding',
      },
      {
        key: 'reception',
        name: 'रिसेप्शन',
        icon: 'glass',
        date: 'रविवार, 13 दिसंबर 2026',
        time: 'सायं 7:30 बजे से',
        venue: 'लेकसाइड टेरेस, द लेक पैलेस',
        dress: 'ब्लैक-टाई एलीगेंट',
        note: 'सर्दियों के सितारों तले नवविवाहितों की खुशी में एक गिलास उठाएँ।',
        tone: 'reception',
      },
    ],

    venue: {
      name: 'द लेक पैलेस',
      address: 'पिछोला, उदयपुर, राजस्थान 313001, भारत',
      mapQuery: 'Lake Palace Udaipur',
      hotels: [
        { name: 'द लेक पैलेस (ऑन-साइट)', note: '"आन्या–विवान" के नाम पर रूम ब्लॉक। सभी कार्यक्रमों के लिए शटल सेवा।' },
        { name: 'ट्राइडेंट उदयपुर', note: 'सड़क मार्ग से 15 मिनट। विशेष विवाह दर उपलब्ध।' },
        { name: 'होटल लेकएंड', note: 'बजट-अनुकूल, झील का दृश्य, 20 मिनट दूर।' },
      ],
      travel: [
        { title: 'हवाई मार्ग से', text: 'महाराणा प्रताप हवाई अड्डा (UDR) — स्थल से 25 मिनट। पिकअप की व्यवस्था की जा सकती है।' },
        { title: 'रेल मार्ग से', text: 'उदयपुर सिटी रेलवे स्टेशन निकटतम रेलवे जंक्शन है, लगभग 20 मिनट दूर।' },
        { title: 'आवागमन', text: 'सभी पार्टनर होटलों और स्थल के बीच पूरे सप्ताहांत निःशुल्क शटल चलती है।' },
      ],
    },

    ui: {
      hero: { tagline: 'हम विवाह बंधन में बंध रहे हैं' },
      story: { eyebrow: 'शुरुआत कैसे हुई', heading: 'हमारी कहानी' },
      events: { eyebrow: 'चार दिन का उत्सव', heading: 'कार्यक्रम' },
      gallery: { eyebrow: 'यादें', heading: 'गैलरी' },
      venue: { eyebrow: 'कैसे पहुँचें', heading: 'स्थल और यात्रा', directions: 'दिशा-निर्देश पाएँ', whereToStay: 'कहाँ ठहरें' },
      footer: { backToTop: 'वापस ऊपर', closing: 'प्रेम और आशीर्वाद सहित' },
      envelope: { invited: 'आप आमंत्रित हैं', tap: 'खोलने के लिए टैप करें', dialogLabel: 'अपना विवाह निमंत्रण खोलें', btnLabel: 'निमंत्रण खोलने के लिए टैप करें' },
      nav: { openMenu: 'मेनू खोलें', closeMenu: 'मेनू बंद करें' },
    },
  },
};

// Gallery has no translatable text — shared across languages.
export const gallery = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  label: `Photo ${i + 1}`,
  src: null,
  tone: ['emerald', 'burgundy', 'navy', 'gold'][i % 4],
  tall: [0, 3, 4, 7].includes(i),
}));
