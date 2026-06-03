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
      date: 'Saturday, 5 December 2026',
      city: 'Godda, Jharkhand',
      hashtag: '#AdityaWedsBarbie',
      intro:
        'Together with their families, request the honour of your presence as two hearts, two families, and two worlds become one.',
    },

    navItems: [
      { id: 'home', label: 'Home' },
      { id: 'story', label: 'Our Story' },
      { id: 'events', label: 'Events' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'travel', label: 'Travel' },
      { id: 'contact', label: 'Contact' },
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
        date: 'Thu, 3 Dec 2026',
        time: '10:00 AM onwards',
        venue: 'Garden Courtyard, The Wedding Venue',
        dress: 'Yellows, greens & florals',
        note: 'A morning of turmeric, henna, song and sunshine.',
        tone: 'haldi',
      },
      {
        key: 'sangeet',
        name: 'Sangeet & Mandap',
        icon: 'music',
        date: 'Fri, 4 Dec 2026',
        time: '7:00 PM onwards',
        venue: 'Crystal Ballroom, The Wedding Venue',
        dress: 'Mandap glam — jewel tones',
        note: 'A night of music, dance and a little friendly choreography rivalry.',
        tone: 'sangeet',
      },
      {
        key: 'wedding',
        name: 'Wedding Ceremony',
        icon: 'flame',
        date: 'Sat, 5 Dec 2026',
        time: '6:00 PM (Baraat 5:00 PM)',
        venue: 'Mandap Lawn, The Wedding Venue',
        dress: 'Traditional Indian formals',
        note: 'Seven steps, seven vows, and the sacred fire as witness.',
        tone: 'wedding',
      },
      {
        key: 'reception',
        name: 'Reception',
        icon: 'glass',
        date: 'Tue, 8 Dec 2026',
        time: '7:30 PM onwards',
        venue: 'Hotel Panache Kautilya, Patna',
        dress: 'Black-tie elegant',
        note: 'Raise a glass to the newlyweds beneath the winter stars.',
        tone: 'reception',
      },
    ],

    venue: {
      name: 'The Wedding Venue',
      address: 'Godda, Jharkhand 814133, India',
      mapQuery: 'Godda Jharkhand',
      reception: {
        name: 'Hotel Panache Kautilya',
        address: 'Patna, Bihar, India',
        mapQuery: 'Hotel Panache Kautilya Patna',
      },
      hotels: [
        { name: 'Hotel Rajmahal', note: 'Closest to the venue. Room block under "Aditya–Barbie". Shuttle to all events.' },
        { name: 'Hotel Godda Inn', note: '10 min by road. Comfortable stay at a wedding rate.' },
        { name: 'OYO Rooms Godda', note: 'Budget-friendly option, 15 min from the venue.' },
      ],
      travel: [
        { title: 'By Air', text: 'Deoghar Airport (DGH) for Godda (~90 km). For Reception in Patna, fly into Jay Prakash Narayan Airport (PAT), 20 min from Hotel Panache Kautilya.' },
        { title: 'By Train', text: 'Godda Railway Station (5 min from wedding venue). For Reception, Patna Junction is the nearest railhead, ~15 min from the hotel.' },
        { title: 'Getting Around', text: 'Shuttles run between partner hotels and both venues. Godda ↔ Patna is ~5 hrs by road.' },
      ],
    },

    ui: {
      hero: { tagline: "We're getting married" },
      story: { eyebrow: 'How it began', heading: 'Our Story' },
      events: { eyebrow: 'Four days of celebration', heading: 'The Events' },
      gallery: { eyebrow: 'Moments', heading: 'Gallery' },
      venue: { eyebrow: 'Getting there', heading: 'Venue & Travel', directions: 'Get directions', whereToStay: 'Where to Stay', weddingVenue: 'Wedding Ceremony', receptionVenue: 'Reception' },
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
      date: 'शनिवार, 5 दिसंबर 2026',
      city: 'गोड्डा, झारखंड',
      hashtag: '#AdityaWedsBarbie',
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
        date: 'गुरुवार, 3 दिसंबर 2026',
        time: 'प्रातः 10:00 बजे से',
        venue: 'गार्डन कोर्टयार्ड, विवाह स्थल',
        dress: 'पीला, हरा और फूलों वाले रंग',
        note: 'हल्दी, मेहंदी, संगीत और धूप से भरी एक सुबह।',
        tone: 'haldi',
      },
      {
        key: 'sangeet',
        name: 'संगीत और मंडप',
        icon: 'music',
        date: 'शुक्रवार, 4 दिसंबर 2026',
        time: 'सायं 7:00 बजे से',
        venue: 'क्रिस्टल बॉलरूम, विवाह स्थल',
        dress: 'मंडप ग्लैम — रत्न रंग',
        note: 'संगीत, नृत्य और थोड़ी कोरियोग्राफी की मैत्रीपूर्ण प्रतिस्पर्धा की एक शाम।',
        tone: 'sangeet',
      },
      {
        key: 'wedding',
        name: 'विवाह समारोह',
        icon: 'flame',
        date: 'शनिवार, 5 दिसंबर 2026',
        time: 'सायं 6:00 बजे (बारात 5:00 बजे)',
        venue: 'मंडप लॉन, विवाह स्थल',
        dress: 'पारंपरिक भारतीय वेशभूषा',
        note: 'सात कदम, सात वचन और पवित्र अग्नि की साक्षी में।',
        tone: 'wedding',
      },
      {
        key: 'reception',
        name: 'रिसेप्शन',
        icon: 'glass',
        date: 'मंगलवार, 8 दिसंबर 2026',
        time: 'सायं 7:30 बजे से',
        venue: 'होटल पनाचे कौटिल्य, पटना',
        dress: 'ब्लैक-टाई एलीगेंट',
        note: 'सर्दियों के सितारों तले नवविवाहितों की खुशी में एक गिलास उठाएँ।',
        tone: 'reception',
      },
    ],

    venue: {
      name: 'विवाह स्थल',
      address: 'गोड्डा, झारखंड 814133, भारत',
      mapQuery: 'Godda Jharkhand',
      reception: {
        name: 'होटल पनाचे कौटिल्य',
        address: 'पटना, बिहार, भारत',
        mapQuery: 'Hotel Panache Kautilya Patna',
      },
      hotels: [
        { name: 'होटल राजमहल', note: 'स्थल के सबसे नज़दीक। "आदित्य–बार्बी" के नाम पर रूम ब्लॉक। सभी कार्यक्रमों के लिए शटल सेवा।' },
        { name: 'होटल गोड्डा इन', note: 'सड़क मार्ग से 10 मिनट। विशेष विवाह दर उपलब्ध।' },
        { name: 'ओयो रूम्स गोड्डा', note: 'बजट-अनुकूल, स्थल से 15 मिनट दूर।' },
      ],
      travel: [
        { title: 'हवाई मार्ग से', text: 'गोड्डा के लिए देवघर हवाई अड्डा (DGH, ~90 किमी)। पटना रिसेप्शन के लिए जय प्रकाश नारायण हवाई अड्डा (PAT), होटल से 20 मिनट।' },
        { title: 'रेल मार्ग से', text: 'गोड्डा रेलवे स्टेशन विवाह स्थल से 5 मिनट दूर। रिसेप्शन के लिए पटना जंक्शन, होटल से ~15 मिनट।' },
        { title: 'आवागमन', text: 'दोनों स्थलों के लिए शटल सेवा उपलब्ध। गोड्डा से पटना सड़क मार्ग से लगभग 5 घंटे।' },
      ],
    },

    ui: {
      hero: { tagline: 'हम विवाह बंधन में बंध रहे हैं' },
      story: { eyebrow: 'शुरुआत कैसे हुई', heading: 'हमारी कहानी' },
      events: { eyebrow: 'चार दिन का उत्सव', heading: 'कार्यक्रम' },
      gallery: { eyebrow: 'यादें', heading: 'गैलरी' },
      venue: { eyebrow: 'कैसे पहुँचें', heading: 'स्थल और यात्रा', directions: 'दिशा-निर्देश पाएँ', whereToStay: 'कहाँ ठहरें', weddingVenue: 'विवाह समारोह', receptionVenue: 'रिसेप्शन' },
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
