export interface PagePicture {
  src: string;
  alt: string;
  caption?: string;
}

export interface PageData {
  id: string;
  name: string;
  navTitle: string;
  pictures: PagePicture[];
}

export const RETREAT_PAGES: PageData[] = [
  {
    id: 'home',
    name: 'Home',
    navTitle: 'Home',
    pictures: [
      {
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85',
        alt: 'Alpine mountain peaks in morning mist',
        caption: 'The Cottian Alps — High elevation serenity for contemplation',
      },
      {
        src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85',
        alt: 'High elevation Cottian Alps ridge and green slopes',
        caption: 'Val Maira ridges — Open mountain horizons above Marmora',
      },
      {
        src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&q=85',
        alt: 'Hikers in dialogue along an alpine path',
        caption: 'Collaborative inquiry — Walking and conversing in nature',
      },
      {
        src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=85',
        alt: 'Monastic reading room and books',
        caption: 'Shared study — Close reading of Kant texts in fellowship',
      },
    ],
  },
  {
    id: 'val-maira',
    name: 'Val Maira',
    navTitle: 'Val Maira',
    pictures: [
      {
        src: '/val_maira_rocca_la_meja.jpg',
        alt: 'Rocca la Meja (2,831 m) in Val Maira',
        caption: 'Rocca la Meja (2,831 m) — Iconic limestone tower and highland plateau of Val Maira',
      },
      {
        src: '/val_maira_marmora.png',
        alt: 'Panorama of Marmora and mountain hamlets in Val Maira',
        caption: 'Marmora (1,580 m) — The mountain commune and valleys hosting Borgata Superiore',
      },
      {
        src: '/val_maira_chersogno.jpg',
        alt: 'Monte Chersogno (3,026 m) in upper Val Maira',
        caption: 'Monte Chersogno (3,026 m) — The highest mountain summit of upper Val Maira',
      },
      {
        src: '/val_maira_valley.jpg',
        alt: 'Pristine landscape of Val Maira, Piedmont',
        caption: 'Val Maira (CN) — Preserved wilderness and silent alpine paths in the Cottian Alps',
      },
    ],
  },
  {
    id: 'location',
    name: 'Location',
    navTitle: 'Location',
    pictures: [
      {
        src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=85',
        alt: 'Monastic library shelves and study tables',
        caption: 'Padre Sergio’s Library — Preserving thousands of volumes',
      },
      {
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
        alt: 'Monastery stone architecture in Borgata Superiore',
        caption: 'Borgata Superiore (1,580 m) — Historic stone monastery hamlet',
      },
      {
        src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1400&q=85',
        alt: 'Books, notebooks and quiet reading space',
        caption: 'Study tables — Spaces for reading, reflection, and exchange',
      },
      {
        src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85',
        alt: 'Monastery terrace overlooking the valley',
        caption: 'Monastery grounds cared for by Associazione Luoghi di Passaggio',
      },
    ],
  },
  {
    id: 'accomodations',
    name: 'Accomodations',
    navTitle: 'Accomodations',
    pictures: [
      {
        src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85',
        alt: 'Warm wooden mountain refuge interior',
        caption: 'Communal mountain lodge — Simple and welcoming atmosphere',
      },
      {
        src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
        alt: 'Communal wooden dining table for shared meals',
        caption: 'The refectory table — Shared meals prepared collectively',
      },
      {
        src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85',
        alt: 'Simple rustic shared bedrooms at the monastery',
        caption: 'Monastery bedrooms — 4 shared rooms with 9 beds in total',
      },
      {
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85',
        alt: 'Morning light in the mountain valley',
        caption: 'Mountain mornings — Peaceful dawn above the Marmora valley',
      },
    ],
  },
  {
    id: 'program',
    name: 'Program',
    navTitle: 'Program',
    pictures: [
      {
        src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=85',
        alt: 'Colloquium group seated together in discussion',
        caption: 'Collaborative seminars — Paragraph-by-paragraph text reading',
      },
      {
        src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&q=85',
        alt: 'Mountain hike on the high alpine trails',
        caption: 'The Alpine hike — Informal philosophical discourse on the move',
      },
      {
        src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=85',
        alt: 'Philosophy books and reading notes',
        caption: 'Kant text study — Testing and clarifying arguments together',
      },
      {
        src: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1400&q=85',
        alt: 'Summit overlook and rest',
        caption: 'September 6–9, 2027 — A shared 4-day intellectual journey',
      },
    ],
  },
  {
    id: 'practical',
    name: 'Practical',
    navTitle: 'Practical',
    pictures: [
      {
        src: '/hiking_boots.jpg',
        alt: 'Hiking shoes and boots with a good, non-slip sole',
        caption: 'Footwear — Sturdy hiking boots with non-slip sole and mountain grip',
      },
      {
        src: '/water_bottle.jpg',
        alt: 'Stainless steel water bottle for mountain hiking hydration',
        caption: 'Hydration — Water bottle with enough water for several hours on the trail',
      },
      {
        src: '/minibus_travel.jpg',
        alt: 'Participants travelling together in a passenger minibus',
        caption: 'Shared travel — Collective minibus transport organized from Turin to Marmora',
      },
      {
        src: '/groceries_bags.jpg',
        alt: 'Filled reusable and paper grocery bags with fresh vegetables and food',
        caption: 'Communal food — Wholesome groceries bought and prepared together by participants',
      },
    ],
  },
  {
    id: 'download',
    name: 'Download',
    navTitle: 'Download',
    pictures: [
      {
        src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1400&q=85',
        alt: 'Reading texts, syllabus and papers on wooden desk',
        caption: 'Retreat overview — Complete program information sheet',
      },
      {
        src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=85',
        alt: 'Monastic library texts and archives',
        caption: 'Dossier & readings — Printable study notes and syllabus',
      },
      {
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=85',
        alt: 'Valley overview of Marmora and mountain slopes',
        caption: 'Topographic notes — Marmora and upper Maira trail information',
      },
      {
        src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=85',
        alt: 'Study desk and archive documents',
        caption: 'Checklists — Gear, travel instructions, and contact details',
      },
    ],
  },
];

export const RETREAT_INFO = {
  title: 'HIKANT',
  dates: 'September 6 – September 9, 2027',
  location: 'Borgata Superiore, Marmora, Val Maira (CN), Italy',
  elevation: '1,580 m a.s.l.',
  venue: 'Former Benedictine Monastery (Padre Sergio De Piccoli)',
  association: 'Associazione Luoghi di Passaggio',
  library: 'Approx. 62,500 volumes',
  rooms: '4 shared rooms, 9 beds in total (three double rooms, one triple room)',
  bathrooms: '2 shared bathrooms',
  costs: {
    membership: '€15 membership fee (Associazione Luoghi di Passaggio)',
    accommodation: '€15 per night for accommodation (3 nights = €45)',
    travel: 'Contribution to shared travel from Turin to Marmora',
    food: 'Contribution to shared food expenses (bought and prepared together)',
  },
  contactEmail: 'laura.altoe@gmail.com',
};
