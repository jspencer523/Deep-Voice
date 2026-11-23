/* ========================================
   DEEP VOICE - LANDING PAGE ENHANCEMENTS
   Updated with clickable recommendations + proper formatting
======================================== */

const DEEPVOICE_DATA = {
  schools: {
    stoicism: {
      id: 'stoicism',
      name: 'Stoicism',
      greek: 'Στωϊκισμός',
      greek_romanization: 'Stōïkismós',
      tagline: 'Live according to nature.',
      blurb: 'The art of building an unshakeable inner citadel.',
      philosophers: ['seneca', 'aurelius', 'cicero'],
      trending_rank: 1,
      readers_week: 1847
    },
    confucianism: {
      id: 'confucianism',
      name: 'Confucianism',
      chinese: '儒家',
      pinyin: 'Rújiā',
      tagline: 'Social harmony through proper relationships.',
      blurb: 'Social harmony through proper relationships, moral cultivation.',
      philosophers: ['confucius', 'mengzi'],
      trending_rank: 2,
      readers_week: 923
    },
    african_philosophy: {
      id: 'african_philosophy',
      name: 'African Philosophy',
      tagline: 'Ubuntu - I am because we are.',
      blurb: 'Postcolonial thought and liberation philosophy.',
      philosophers: ['fanon'],
      trending_rank: 3,
      readers_week: 892
    },
    historical_greece: {
      id: 'historical_greece',
      name: 'Greek Historical & Strategic Writing',
      greek: 'Ἑλληνική Ιστορία',
      greek_romanization: 'Hellēnikī́ Historía',
      tagline: 'War, leadership, and survival against impossible odds.',
      blurb: 'First-hand accounts of military campaigns, exile, and return.',
      philosophers: ['xenophon'],
      trending_rank: null,
      readers_week: 456
    },
    rationalism: {
      id: 'rationalism',
      name: 'Rationalism',
      latin: 'Ex Ratione',
      tagline: 'Reason as the source of knowledge.',
      blurb: 'Knowledge arises from intellectual deduction, not sensory experience.',
      philosophers: [],
      trending_rank: null,
      readers_week: 0
    },
    empiricism: {
      id: 'empiricism',
      name: 'Empiricism',
      latin: 'Ex Experientia',
      tagline: 'Experience is the foundation of knowledge.',
      blurb: 'All knowledge originates in sensory experience and observation.',
      philosophers: [],
      trending_rank: null,
      readers_week: 0
    },
    existentialism: {
      id: 'existentialism',
      name: 'Existentialism',
      german: 'Existentialismus',
      tagline: 'Existence precedes essence.',
      blurb: 'Freedom, authenticity, and the search for meaning in an absurd world.',
      philosophers: [],
      trending_rank: null,
      readers_week: 0
    }
  },

  philosophers: {
    confucius: {
      id: 'confucius',
      display_name: '孔子',
      romanization: 'Kǒngzǐ',
      dates: '551 – 479 BCE',
      era: 'ancient',
      culture: 'chinese',
      hue: 35,
      initials: 'KZ',
      oneLiner: 'Master who shaped Chinese civilization.',
      bio: ['Born in the state of Lu during political fragmentation.', 'His teachings became Confucianism.', 'Despite being ignored in his lifetime, his legacy shaped East Asian civilization.'],
      timeline: [
        { yr: '551 BCE', ev: 'Born in Qufu, state of Lu' },
        { yr: 'c. 530 BCE', ev: 'Begins teaching career' },
        { yr: '479 BCE', ev: 'Dies; disciples mourn for three years' }
      ],
      books: [
        { id: 'analects', title: 'The Analects', chinese: '論語', sub: 'Collected sayings', available: true,
          passages: [
            { id: 1, title: 'Chapter 1: Learning and Practice', text: 'Is it not delightful to have friends coming from distant quarters? Is he not a man of complete virtue, who feels no discomposure though men may take no note of him?', duration: '30s',
            audioFile: 'theanalects_chapter1-learning-and-practice_by_Kongzi.mp3'
            },
            { id: 2, title: 'Chapter 2: Virtue and Governance', text: 'He who exercises government by means of his virtue may be compared to the north polar star, which keeps its place and all the stars turn towards it.', duration: '25s', audioFile: 'theanalects_chapter2-virtue-and-governance_by_Kongzi.mp3'

            }
          ]
        }
      ]
    },

    plato: {
      id: 'plato',
      display_name: 'Πλάτων',
      romanization: 'Plátōn',
      dates: '428/7 – 348/7 BCE',
      era: 'ancient',
      culture: 'greek',
      hue: 210,
      initials: 'PLT',
      oneLiner: 'Founded the Academy; wrote dialogues that shaped Western philosophy.',
      bio: ['Born into aristocracy in Athens, witnessed Socrates\' execution in 399 BCE.', 'Founded the Academy in 387 BCE.', 'Wrote exclusively in dialogue form, exploring metaphysics, ethics, politics.', 'The "Socratic Problem": scholars debate which ideas belong to historical Socrates vs. Plato.'],
      timeline: [
        { yr: '428/7 BCE', ev: 'Born in Athens' },
        { yr: '405 BCE', ev: 'Witnesses Socrates\' trial and death' },
        { yr: '387 BCE', ev: 'Founds the Academy' },
        { yr: '348/7 BCE', ev: 'Dies in Athens on his birthday' }
      ],
      books: [
        { id: 'apology', title: 'Apology of Socrates', greek: 'Ἀπολογία Σωκράτους', sub: 'Socrates\' defense (closest to actual words)', available: true,
          passages: [
            { id: 1, title: 'Opening Argument', text: 'How you, O Athenians, have been affected by my accusers, I cannot tell; but I know that their persuasive words almost made me forget who I was—so powerful was their effect.', duration: '45s' },
            { id: 2, title: 'The Unexamined Life', text: 'The greatest good of man is daily to converse about virtue, and to examine myself and others; for the unexamined life is not worth living.', duration: '35s' }
          ],
          socratic_source: true
        },
        { id: 'republic', title: 'The Republic', greek: 'Πολιτεία', sub: 'Justice, ideal city, philosopher-kings', available: true,
          passages: [
            { id: 1, title: 'Book I: Justice Defined', text: 'May I beg you to settle what you mean by justice, for you say that justice is speaking truth and paying back what one owes.', duration: '30s' }
          ]
        }
      ]
    },

    aurelius: {
      id: 'aurelius',
      display_name: 'Μάρκος Αὐρήλιος',
      romanization: 'Márkos Aurḗlios',
      dates: '121 – 180 CE',
      era: 'ancient',
      culture: 'roman',
      hue: 210,
      initials: 'MA',
      oneLiner: 'The philosopher-emperor.',
      bio: ['Born into privilege and marked early for imperial power.', 'Ruled Rome during decades of constant warfare.', 'His Meditations were private notes—never intended for publication.', 'Last of the "Five Good Emperors."'],
      timeline: [
        { yr: '121 CE', ev: 'Born in Rome' },
        { yr: '161 CE', ev: 'Becomes emperor' },
        { yr: '170s CE', ev: 'Composes Meditations during wars' },
        { yr: '180 CE', ev: 'Dies on campaign at Vienna' }
      ],
      books: [
        { id: 'meditations', title: 'Meditations', greek: 'Τὰ εἰς ἑαυτόν', sub: 'Private Stoic reflections', available: true,
          passages: [
            { id: 1, title: 'Book 2: Morning Reflection', text: 'Say to yourself in the morning: I shall meet interference, ingratitude, insolence, disloyalty, ill-will, and selfishness—all owing to the ignorance of those who do them.', duration: '40s',
           audioFile: 'meditations_book2_morning-reflection_by_Marcus_Aurelius.mp3.mp3'
            },
            { id: 2, title: 'Book 4: Nature\'s Will', text: 'Everything is here for a purpose; what is there that will not come to an end? Am I to complain if something must cease to be?', duration: '35s' }
          ]
        }
      ]
    },

    fanon: {
      id: 'fanon',
      display_name: 'Frantz Fanon',
      dates: '1925 – 1961',
      era: 'modern',
      culture: 'african',
      hue: 280,
      initials: 'FF',
      oneLiner: 'Voice of decolonization.',
      bio: ['Born in Martinique, fought for Free French forces at 17.', 'Psychiatrist in Algeria witnessing colonial violence firsthand.', 'Immensely influential despite dying of leukemia at age 36.', 'Buried in Algeria as FLN martyr.'],
      timeline: [
        { yr: '1925', ev: 'Born in Fort-de-France, Martinique' },
        { yr: '1952', ev: 'Black Skin, White Masks published' },
        { yr: '1956', ev: 'Resigns from hospital; joins Algerian struggle' },
        { yr: '1961', ev: 'Wretched of the Earth published posthumously' }
      ],
      books: [
        { id: 'wretched', title: 'The Wretched of the Earth', french: 'Les Damnés de la Terre', sub: 'Violence, decolonization, national consciousness', available: true,
          passages: [
            { id: 1,
              title: 'Chapter 1: Violence and Colonialism',
              text: 'At the level of individuals, violence is a cleansing force. It frees the native from his inferiority complex and from his despair and inaction; it makes him fearless and restores his self-respect.',
              duration: '45s',
              audioFile: 'thewretchedoftheearth_chapter1-violence-and-colonialism_by_Franz_Fanon.mp3'
            },
            { id: 2, title: 'Conclusion', text: 'For Europe, for ourselves, and for humanity, comrades, we must turn over a new leaf; we must work out new concepts, and try to set afoot a new man.', duration: '30s',
            audioFile: 'thewretchedoftheearth_chapter2-conclusion_by_Franz_Fanon.mp3'
            }
          ]
        }
      ]
    },

    seneca: {
      id: 'seneca',
      display_name: 'Lucius Annaeus Seneca',
      romanization: 'Lūcius Annaeus Seneca',
      dates: '4 BCE – 65 CE',
      era: 'ancient',
      culture: 'roman',
      hue: 18,
      initials: 'LAS',
      oneLiner: 'Stoic statesman and advisor to Nero.',
      bio: ['Born in Córdoba, Spain.', 'Exiled by Claudius, recalled to tutor young Nero.', 'Forced to commit suicide by Nero in 65 CE.', 'Letters from a Stoic remain among the most accessible Stoic texts.'],
      timeline: [
        { yr: '4 BCE', ev: 'Born in Cordoba, Spain' },
        { yr: '41 CE', ev: 'Exiled by Emperor Claudius' },
        { yr: '49 CE', ev: 'Recalled to tutor Nero' },
        { yr: '65 CE', ev: 'Forced to die by Nero' }
      ],
      books: [
        { id: 'letters', title: 'Letters from a Stoic', sub: 'Epistulae Morales', available: true,
          passages: [
            { id: 1,
              title: 'Letter 1: On Saving Time',
              text: 'It is not that we have a short space of time, but that we waste much of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements if it were well invested.',
              duration: '40s',
              audioFile: 'lettersfrom-stoic_chapter1letter1_on-saving-time_by_Lucius_Annaeus_Seneca.mp3' },
            { id: 2, title: 'Letter 10: Friendship', text: 'Associate with people who are likely to improve you. Welcome those whom you are capable of improving.', duration: '35s', audioFile: 'lettersfrom-stoic_chapter2letter10_friendship_by_Lucius_Annaeus_Seneca.mp3' }
          ]
        }
      ]
    },

    mengzi: {
      id: 'mengzi',
      display_name: '孟子',
      romanization: 'Mèngzǐ',
      dates: '372 – 289 BCE',
      era: 'ancient',
      culture: 'chinese',
      hue: 35,
      initials: 'MZ',
      oneLiner: 'Second Sage of Confucianism.',
      bio: ['Known as the "Second Sage" after Confucius.', 'Argued human nature is good.', 'His book Mencius is one of the Four Books of Confucian canon.'],
      timeline: [
        { yr: '372 BCE', ev: 'Born in Zou, state of Qi' },
        { yr: '289 BCE', ev: 'Dies; teachings preserved in Mencius' }
      ],
      books: [
        { id: 'mencius', title: 'Mencius', chinese: '孟子', sub: 'Goodness of human nature', available: true,
          passages: [
            { id: 1,
              title: 'Human Nature is Good',
              text: 'The tendency of man\'s nature to good is like the tendency of water to flow downwards. There are none but have this tendency to good, just as all water flows downwards.',
              duration: '35s',
              audioFile: 'mencius_chapter1-human-nature-is-good_by_Mengzi.mp3'

            }
          ]
        }
      ]
    },

    xenophon: {
      id: 'xenophon',
      display_name: 'Ξενοφών',
      romanization: 'Xenophōn',
      dates: 'c. 430 – 354 BCE',
      era: 'ancient',
      culture: 'greek',
      hue: 200,
      initials: 'XX',
      oneLiner: 'Soldier, historian, contemporary of Socrates.',
      bio: [
        'Student of Socrates (like Plato), though less known for theory than practice.',
        'Led the Ten Thousand — Greek mercenaries stranded in Persia after Cyrus\' death.',
        'Chronicles their epic march home in the Anabasis.',
        'Wrote on horsemanship, hunting, economics, and Spartan constitutions.'
      ],
      timeline: [
        { yr: 'c. 430 BCE', ev: 'Born near Athens' },
        { yr: '401 BCE', ev: 'Joins Cyrus\' expedition; Battle of Cunaxa' },
        { yr: '400-399 BCE', ev: 'Marches Ten Thousand home through mountains' },
        { yr: 'c. 371 BCE', ev: 'Exiled by Athens; lives in Sparta' },
        { yr: 'c. 354 BCE', ev: 'Dies' }
      ],
      books: [
        {
          id: 'anabasis',
          title: 'Anabasis (The March Up)',
          greek: 'Ανάβασις',
          sub: 'The journey of the Ten Thousand',
          available: true,
          translator: 'H.G. Dakyns (1897)',
          passages: [
            {
              id: 1,
              title: 'Book I: The Gathering (Chapter X)',
              text: 'The soldiers, when they saw their leaders lying dead, were at first overwhelmed with grief and amazement; but soon, when they reflected that their generals had been treacherously murdered, they became indignant, and resolved to take vengeance upon the traitors who had slain them. Clearchus, however, when he understood what had occurred, and that Tissaphernes had done all this with the design of betraying them, determined to send word to the barbarian that he wished to hold a conference with him, and ask why this treatment had been inflicted on the generals.',
              duration: '55s',
              audioFile: 'anabasis_book1chapter10_the-gathering_by_Xenophon.mp3'
            },
            {
              id: 2,
              title: 'Book III: The Sea Appears (Chapter IV)',
              text: 'Then began the cry of "The sea! The sea!" and they kept passing the tidings along. And then all the rear-rank soldiers began running forward, and as each man gained a view of the sea, captains and lieutenants fell in with the fugitives, and drew them up. Then every soldier flung his burden to the ground, and each man, whether he was wearied with carrying provisions or heavy-armed, gave up his pack, and all ran forward together, cheering and crying out to their comrades to follow, and quickly, quickly!',
              duration: '50s',
              audioFile: 'anabasis_book3chapter4_the-sea-appears_by_Xenophon.mp3'
            },
            {
              id: 3,
              title: 'Book VII: Spartan Alliance (Chapter I)',
              text: 'But when Xenophon learned the state of affairs, he summoned the commanders of the Greeks and asked them if they would listen to the proposals which he had to make to them. They assembled. He said: "The Spartans, I hear, desire to make alliance with us; but before accepting, I wish to consult with you." The officers agreed, and the assembly resolved to consider the matter with care.',
              duration: '45s',
              audioFile:'anabasis_book7chapter1_spartan-alliance_by_Xenophon.mp3'
            },
            {
              id: 4,
              title: 'Book V: Hardships of the March (Chapter VI)',
              text: 'And now the winter grew severe, and snow fell heavily upon them. The cold was intense; and many of the soldiers, being destitute of shoes and cloaks, perished. Others, however, wrapped themselves in the skins of the oxen they had slaughtered, and others, again, tied round their feet the hides they wore, and thus managed to endure the hardship.',
              duration: '48s',
              audioFile: 'anabasis_book5chapter6_hardships-of-the-march_by_Xenophon.mp3'
            }
          ]
        },
        { id: 'hellenica', title: 'Hellenica', greek: 'Ελληνικά', sub: 'History of Greece 411-362 BCE', available: false }
      ]
    },

    cicero: {
      id: 'cicero',
      display_name: 'Marcus Tullius Cicero',
      romanization: 'Marcus Tullius Cicerō',
      dates: '106 – 43 BCE',
      era: 'ancient',
      culture: 'roman',
      hue: 15,
      initials: 'MT',
      oneLiner: 'Roman statesman, orator, and philosopher of the Republic.',
      bio: [
        'Born in Arpinum, a small town southeast of Rome, to a wealthy municipal family.',
        'Rome\'s greatest orator and a towering intellectual figure of the late Republic.',
        'Exposed and thwarted the Catiline conspiracy, saving the Republic — temporarily.',
        'His political writings, especially De Republica, explore justice, governance, and the ideal state.',
        'Murdered by agents of the Second Triumvirate in 43 BCE, his hands and head displayed in the Roman Forum.'
      ],
      timeline: [
        { yr: '106 BCE', ev: 'Born in Arpinum' },
        { yr: '79 BCE', ev: 'Studies rhetoric and philosophy in Greece and Asia Minor' },
        { yr: '63 BCE', ev: 'Consul; suppresses Catiline conspiracy' },
        { yr: '54–51 BCE', ev: 'Composes De Republica (contains Dream of Scipio)' },
        { yr: '43 BCE', ev: 'Assassinated on orders of the Triumvirate' }
      ],
      books: [
        {
          id: 'dream-of-scipio',
          title: 'Dream of Scipio',
          latin: 'Somnium Scipionis',
          sub: 'From De Republica, Book VI — cosmology, virtue, and the immortal soul',
          available: true,
          translator: 'Public Domain Translation',
          passages: [
            {
              id: 1,
              title: 'The Cosmic Vision',
              text: `I addressed my father thus: "You best and
              most venerable of parents, since this is the only substantial life, why should I linger on earth,
              and not rather hasten to where you are?" He
              replied: "That is impossible; unless that God, whose temples is all
              that vast expanse you behold, shall free you from the fetters of
              the body, you can have no admission into this place. Mankind
              have received their being on this very condition, that they
              should labor for the preservation of that globe, which is
              situated, as you see, in the midst of this temple, and is called earth"`,
              duration: '60s',
              audioFile: 'derepublica_book6_by_Cicero.mp3',
              imageUrl: 'scipios-dream-p4.jpeg',
            },
            {
              id: 2,
              title: 'The Immortal Soul',
              text: '[PLACEHOLDER: Excerpt on the immortality of the soul and the insignificance of earthly fame compared to cosmic virtue.]',
              duration: '55s',
              audioFile: '',
              imageUrl: ''
            }
          ]
        }
      ]
    }

  },

  popular_order: ['confucius', 'plato', 'aurelius', 'fanon', 'seneca', 'mengzi', 'xenophon', 'cicero'],
  recommendations: [
    { book_id: 'meditations', author_id: 'aurelius', title: 'Meditations', author: 'Marcus Aurelius', reason: 'Based on your reading of Stoicism' },
    { book_id: 'analects', author_id: 'confucius', title: 'The Analects', author: 'Confucius', reason: 'Popular among Confucianism readers' },
    { book_id: 'wretched', author_id: 'fanon', title: 'Wretched of the Earth', author: 'Frantz Fanon', reason: 'Trending in African Philosophy' }
  ],

  time_periods: {
    ancient: { name: 'Ancient (7000 BCE – 500 CE)', count: 45 },
    medieval: { name: 'Medieval (500 – 1400)', count: 12 },
    renaissance: { name: 'Renaissance (1400 - 1650)'},
    enlightenment: { name: 'Enlightenment (1650 – 1800)', count: 15 },
    modern: { name: 'Modern (1800 – 1950)', count: 28 },
    contemporary: { name: 'Contemporary (1950 – Present)', count: 34 }
  },

  cultures: [
    { id: 'chinese', name: 'Chinese', flag: '🇨🇳' },
    { id: 'greek', name: 'Greek', flag: '🇬🇷' },
    { id: 'roman', name: 'Roman', flag: '🇮🇹' },
    { id: 'african', name: 'African', flag: '🌍' },
    { id: 'french', name: 'French', flag: '🇫🇷' }
  ],

  trending: [
    { school_id: 'stoicism', readers: 1847, trend_up: true },
    { school_id: 'confucianism', readers: 923, trend_up: true },
    { school_id: 'african_philosophy', readers: 892, trend_up: true },
    { school_id: 'historical_greece', readers: 456, trend_up: true }
  ]
};

/* ========== ROUTER STATE (FIXED) ========== */
let routeStack = [];
let isFirstVisit = !localStorage.getItem('deepvoice_visited');
let activeFilters = {
  eras: [],
  cultures: [],
  schools: []
};
let pendingFilters = {
  eras: [],
  cultures: []
};
const app = document.getElementById('app');
const backBtn = document.getElementById('backBtn');

// Initialize navigation
window.addEventListener('DOMContentLoaded', () => {
  console.log('[Deep Voice] Initializing...');
  attachNavigationHandlers();
  navigateTo(null);
});

function attachNavigationHandlers() {
  backBtn.addEventListener('click', () => {
    console.log('[Deep Voice] Back button clicked');
    if (routeStack.length > 0) {
      routeStack.pop();
      render();
    }
  });

  // Add touch gesture support (swipe back)
  let startX = 0;
  document.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  document.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 100 && routeStack.length > 0) {
      console.log('[Deep Voice] Swipe back detected');
      routeStack.pop();
      render();
    }
  });
}

function setView(html) {
  app.innerHTML = html;
  window.scrollTo({ top: 0, behavior: 'instant' });
  updateBackButton();
}

function updateBackButton() {
  const hasHistory = routeStack.length > 0;
  backBtn.classList.toggle('show', hasHistory);
  backBtn.setAttribute('aria-hidden', !hasHistory);
  console.log(`[Deep Voice] Stack depth: ${routeStack.length}, Back button: ${hasHistory ? 'visible' : 'hidden'}`);
}

function navigateTo(view) {
    console.log('[Deep Voice] Navigating to:', view);
    if(!view) {
        routeStack = [];
    } else {
        routeStack.push (view);
    }
    render();
}


function goBack() {
  if (routeStack.length > 0) {
    routeStack.pop();
    render();
  }
}

function goHome() {
  routeStack = [];
  render();
}

function getCurrentRoute() {
  return routeStack[routeStack.length - 1] || null;
}

/* ========== RENDER FUNCTIONS ========== */
function render() {
  const current = getCurrentRoute();
  console.log('[Deep Voice] Rendering route:', current?.t || 'HOME');

  if (!current) {
    return renderHome();
  }
  if (current.t === 'school') return renderSchool(current.s);
  if (current.t === 'phil') return renderPhil(current.s, current.p);
  if (current.t === 'book') return renderBook(current.s, current.p, current.b);
  if (current.t === 'search') return renderSearchResults(current.q);
}

/* === LANDING PAGE ENHANCEMENTS === */
/* ========== FILTER LOGIC ========== */
function getFilteredPhilosophers() {
  let philosophers = [...DEEPVOICE_DATA.popular_order];

  // Filter by era
  if (activeFilters.eras.length > 0) {
    philosophers = philosophers.filter(id => {
      const p = DEEPVOICE_DATA.philosophers[id];
      return p && activeFilters.eras.includes(p.era);
    });
  }

  // Filter by culture
  if (activeFilters.cultures.length > 0) {
    philosophers = philosophers.filter(id => {
      const p = DEEPVOICE_DATA.philosophers[id];
      return p && activeFilters.cultures.includes(p.culture);
    });
  }

  // Filter by school
  if (activeFilters.schools.length > 0) {
    philosophers = philosophers.filter(id => {
      const p = DEEPVOICE_DATA.philosophers[id];
      return p && activeFilters.schools.some(schoolId => {
        const school = DEEPVOICE_DATA.schools[schoolId];
        return school && school.philosophers.includes(id);
      });
    });
  }

  return philosophers;
}

/* ========== PRIORITY E: SEARCH ========== */
function renderSearchResults(query) {
  console.log('[Deep Voice] Render Search:', query);
  const q = query.toLowerCase();

  const results = [];

  // 1. Search philosophers
  Object.values(DEEPVOICE_DATA.philosophers).forEach(p => {
    const haystack = [
      p.display_name,
      p.romanization || '',
      p.dates,
      p.oneLiner
    ].join(' ').toLowerCase();
    if (haystack.includes(q)) {
      results.push({
        type: 'author',
        title: p.display_name,
        subtitle: `${p.romanization ? p.romanization + ' | ' : ''}${p.dates}`,
        detail: p.oneLiner,
        schoolId: findSchoolForPhilosopher(p.id),
                   philId: p.id
      });
    }
  });

  // 2. Search books
  Object.values(DEEPVOICE_DATA.philosophers).forEach(p => {
    p.books.forEach(b => {
      const haystack = [
        b.title,
        b.sub || '',
        b.greek || b.chinese || b.latin || b.french || '',
        b.translator || ''
      ].join(' ').toLowerCase();
      if (haystack.includes(q)) {
        results.push({
          type: 'book',
          title: b.title,
          subtitle: p.display_name,
          detail: b.sub,
          schoolId: findSchoolForPhilosopher(p.id),
                     philId: p.id,
                     bookId: b.id
        });
      }
    });
  });

  // 3. Search schools
  Object.values(DEEPVOICE_DATA.schools).forEach(s => {
    const haystack = [
      s.name,
      s.tagline || '',
      s.blurb || '',
      s.greek || s.chinese || s.latin || ''
    ].join(' ').toLowerCase();
    if (haystack.includes(q)) {
      results.push({
        type: 'school',
        title: s.name,
        subtitle: (s.greek || s.chinese || s.latin || ''),
                   detail: s.tagline,
                   schoolId: s.id
      });
    }
  });

  // Remove duplicates
  const seen = new Set();
  const uniqueResults = results.filter(r => {
    const key = r.type + '|' + (r.bookId || r.philId || r.schoolId);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const resultsHTML = uniqueResults.length === 0
  ? `<div style="padding:30px;text-align:center;color:var(--muted);">
  🔍 No results for "<b>${query}</b>"<br><small>Try an author, title, or school of thought.</small>
  </div>`
  : uniqueResults.map(r => {
    const icon = r.type === 'author' ? '👤' : r.type === 'book' ? '📖' : '🏛️';
    const target = r.type === 'author'
    ? `navigateTo({t:'phil', p:'${r.philId}'})`
    : r.type === 'book'
    ? `navigateTo({t:'book', s:'${r.schoolId}', p:'${r.philId}', b:'${r.bookId}'})`
    : `navigateTo({t:'school', s:'${r.schoolId}'})`;
    return `<button class="phil-row full" onclick="${target}">
    <span class="meta"><h4>${icon} ${r.title}</h4>
    <div class="dates">${r.subtitle}</div>
    <p>${r.detail}</p>
    </span>
    <span class="chev">›</span>
    </button>`;
  }).join('');

  setView(`
  <div class="screen">
  <div class="hero" style="padding-top:14px">
  <h1 style="font-size:26px">Search Results</h1>
  <p>Found <b>${uniqueResults.length}</b> result${uniqueResults.length === 1 ? '' : 's'} for "<b>${query}</b>"</p>
  </div>
  <div class="section-label">Results</div>
  ${resultsHTML}
  <div class="foot">Press the back button to return.</div>
  </div>
  `);
}

function findSchoolForPhilosopher(pid) {
  for (const [schoolId, school] of Object.entries(DEEPVOICE_DATA.schools)) {
    if (school.philosophers.includes(pid)) {
      return schoolId;
    }
  }
  return null;
}
/* === LANDING PAGE ENHANCEMENTS === */
//

function renderHome() {
  console.log('[Deep Voice] Render Home');

  const searchBar = `
    <div class="search-box">
      <span class="search-icon">🔍</span>
      <input type="text" id="searchInput" placeholder="Search by title, author, or keyword..." onkeyup="handleSearch(event)">
    </div>`;

  let recommendationsHTML = '';
  if (isFirstVisit) {
    recommendationsHTML = `
      <div class="welcome-overlay">
        <h2>Welcome to Deep Voice</h2>
        <p>Discover philosophy from Confucius to Fanon, told through comics and read aloud.</p>
        <button class="cta-button" onclick="navigateTo({t:'school', s:'stoicism'})">Start Exploring →</button>
      </div>`;
  } else {
    // UPDATED: Clickable book titles that navigate to philosopher profiles
    const recs = DEEPVOICE_DATA.recommendations.map(r => `
      <div class="rec-item clickable-rec" onclick="navigateTo({t:'phil', p:'${r.author_id}'})">
        <div class="title">${r.title}</div>
        <div class="author">${r.author} • ${r.reason}</div>
      </div>`).join('');
    recommendationsHTML = `
      <div class="recommendations">
        <h3>💡 Recommended For You</h3>
        ${recs}
      </div>`;
  }



  // UPDATED: Trending with romanization attached to non-Roman characters
  // Popular Authors carousel - FIXED with proper avatars
  const popularAuthors = getFilteredPhilosophers().map(id => {
      const phil = DEEPVOICE_DATA.philosophers[id];
      return `<button class="phil-row carousel-phil" onclick="navigateTo({t:'phil', p:'${id}'})">
      <span class="avatar lg"><img src="${portrait(phil.initials, phil.hue)}" alt="${phil.display_name}" /></span>
      <span class="meta-carousel">
      <h4 class="script-name">${phil.display_name}</h4>
      <div class="romanization">${phil.romanization || phil.dates}</div>
      </span>
      </button>`;
  }).join('');

  // Show message if no philosophers match filters
  const filterMessage = (getFilteredPhilosophers().length === 0)
  ? '<div style="padding:30px;text-align:center;color:var(--muted);font-size:14px;">No philosophers match your filters. Try clearing some filters.</div>'
  : '';

  const trending = DEEPVOICE_DATA.trending.map(t => {
      const s = DEEPVOICE_DATA.schools[t.school_id];
      const displayName = s.greek
      ? `${s.greek} (${s.greek_romanization || ''})`
      : s.chinese
      ? `${s.chinese} (${s.pinyin || ''})`
      : s.name;

      return `<div class="trend-item" onclick="navigateTo({t:'school', s:'${s.id}'})">
      <div class="trend-name"><span class="trend-fire">🔥</span>${displayName}</div>
      <div class="trend-count">${t.readers.toLocaleString()} this week</div>
      </div>`;
  }).join('');

  const schoolsGrid = Object.values(DEEPVOICE_DATA.schools).map(s => {
    const script = s.greek || s.chinese || s.latin || s.french || s.german ;
    return `<button class="school-card" onclick="navigateTo({t:'school', s:'${s.id}'})">
    <span class="count">${s.philosophers.length} thinkers</span>
    <div class="gk">${script}</div>
    <div class="multilingual-label">
    <div class="primary-text">${s.name}</div>
    ${script ? `<div class="script-text">${script}</div>` : ''}
    <div class="romanization">${s.pinyin || s.greek_romanization || ''}</div>
    </div>
    <p>${s.tagline}</p>
    </button>`;
  }).join('');

  const timePeriods = Object.entries(DEEPVOICE_DATA.time_periods).map(([id, tp]) => `
    <button class="time-btn" onclick="filterByTime('${id}')">
      <div class="period-name">${tp.name}</div>
      <div class="period-count">${tp.count} texts</div>
    </button>`).join('');

  const cultureTags = DEEPVOICE_DATA.cultures.map(c => `
    <span class="culture-tag" onclick="toggleCultureFilter('${c.id}')">
      ${c.flag} ${c.name}
    </span>`).join('');

  setView(`
    <div class="screen">
      ${searchBar}
      ${recommendationsHTML}
      <div class="section-label">Popular Authors</div>
      ${filterMessage}
      <div class="popular-carousel">${popularAuthors}</div>
      <div class="section-label">Trending This Week 🔥</div>
      <div class="trending-section"><h3>🔥 Hot Topics</h3>${trending}</div>
      <div class="section-label">All Schools of Thought</div>
      <div class="schools-grid">${schoolsGrid}</div>
      <div class="section-label">Browse by Time Period</div>
      <div class="time-browser"><h3>🕐 Historical Eras</h3><div class="time-periods">${timePeriods}</div></div>
      <div class="section-label">Cultural Backgrounds</div>
      <div class="culture-filters">${cultureTags}</div>
      <button class="filter-btn" style="width:100%" onclick="openFilterModal()">See All Filters ▼</button>
      <div class="foot">A reading library where text meets <b>comic</b> and <b>voice</b>.</div>
    </div>`);

  localStorage.setItem('deepvoice_visited', 'true');
}

function renderSchool(sid) {
  console.log('[Deep Voice] Render School:', sid);
  const s = DEEPVOICE_DATA.schools[sid];
  const rows = s.philosophers.map(p => {
    const phil = DEEPVOICE_DATA.philosophers[p];
    return `<button class="phil-row full" onclick="navigateTo({t:'phil',s:'${s.id}',p:'${p}'})">
      <span class="avatar"><img src="${portrait(phil.initials,phil.hue)}" alt="${phil.display_name}" width="58" height="58"></span>
      <span class="meta"><h4>${phil.display_name}</h4><div class="dates">${phil.romanization || phil.dates}</div><p>${phil.oneLiner}</p></span>
      <span class="chev">›</span>
    </button>`;
  }).join('');

  setView(`
    <div class="screen">
      <div class="hero" style="padding-top:14px">
        <div class="gk" style="color:var(--gold);font-family:var(--serif);font-size:15px">${s.greek || s.chinese || ''}</div>
        <h1 style="font-size:30px;margin-top:2px">${s.name}</h1>
        <p>${s.blurb}</p>
      </div>
      <div class="section-label">Philosophers</div>
      ${rows}
    </div>`);
}

function renderPhil(sid, pid) {
  console.log('[Deep Voice] Render Phil:', sid, pid);

  // Auto-find school if sid is missing
  if (!sid) {
    for (const [schoolId, school] of Object.entries(DEEPVOICE_DATA.schools)) {
      if (school.philosophers.includes(pid)) {
        sid = schoolId;
        break;
      }
    }
  }

  const s = DEEPVOICE_DATA.schools[sid];
  const p = DEEPVOICE_DATA.philosophers[pid];

  if (!p) {
    console.error('[Deep Voice] Philosopher not found:', pid);
    return;
  }

  const bio = p.bio.map(t => `<p>${t}</p>`).join('');
  const tl = p.timeline.map(i => `<div class="tl-item"><div class="yr">${i.yr}</div><div class="ev">${i.ev}</div></div>`).join('');
  const books = p.books.map(b => `<button class="book" onclick="navigateTo({t:'book',s:'${s.id}',p:'${pid}',b:'${b.id}'})">
  <span class="spine"></span>
  <span class="bmeta"><h4>${b.title}</h4><div class="sub">${b.chinese || b.greek || b.french || b.sub}</div></span>
  <span class="pill read">Read</span>
  </button>`).join('');

  const socraticNote = pid === 'plato' ? `
  <button class="socratic-info-trigger" onclick="openSocraticProblemModal()">ℹ️ Why Socrates has no texts</button>
  ` : '';

  setView(`
  <div class="screen">
  <div class="phil-head">
  <span class="avatar lg"><img src="${portrait(p.initials,p.hue)}" alt="${p.display_name}" width="104" height="104"></span>
  <h2>${p.display_name}</h2>
  <div class="dates">${p.romanization || ''} | ${p.dates}</div>
  <span class="tag">${s ? s.name : 'Philosopher'}</span>
  </div>
  <div class="section-label">Biography</div>
  <div class="bio">${bio}</div>
  ${socraticNote}
  <div class="section-label">Career timeline</div>
  <div class="timeline">${tl}</div>
  <div class="section-label">Works</div>
  ${books}
  <div class="foot">Tap a work to begin reading.</div>
  </div>`);
}

/* === CORE FEATURE B: AUDIO PLAYER INTEGRATION === */
function renderBook(sid, pid, bid) {
  console.log('[Deep Voice] Render Book:', sid, pid, bid);
  const s = DEEPVOICE_DATA.schools[sid];
  const p = DEEPVOICE_DATA.philosophers[pid];
  const b = p.books.find(book => book.id === bid);

  if (!p || !s) {
    console.error('[Deep Voice] Philosopher or School not found:', sid, pid);
    return;
  }

  // Generate passages with audio players
    const passagesHTML = b.passages.map((passage, index) => {
    // Clean up author name for filename (remove diacritics, special chars)
    const cleanAuthorName = p.romanization ? p.romanization.replace(/[^\w\s]/gi, '') : p.display_name.replace(/[^\w\s]/gi, '');
    // YOUR naming convention: book_chapter-passages_by_Author.mp3
    // YOUR EXACT naming convention: [bookID]_[chapter-passage-detail]_by_[Author Name].mp3
    // Example: lettersfrom-stoic_chapter1letter1_on-saving-time_by_Lucius_Annaeus_Seneca.mp3


    const audioFileName = passage.audioFile || `${bid}_ch${index + 1}.mp3`;
    const imageUrl = passage.imageUrl || '';

    return `
    <div class="chapter-nav">
    <button class="chapter-btn" onclick="showPassage('${bid}', ${index})">
    Chapter ${index + 1}: ${passage.title} (${passage.duration})
    </button>
    </div>
    <div id="passage-${bid}-${index}" class="block enr" style="display:${index === 0 ? 'block' : 'none'}">
    <div class="num">${index + 1}</div>
    <p class="passage-title" style="color:var(--gold);font-weight:600;margin-bottom:10px">${passage.title}</p>
    <p class="passage-text">${passage.text}</p>

    <!-- PLACEHOLDER: Your comic panel goes here -->
    <!-- YOUR COMIC PANEL -->
    <div class="comic-panel" style="border:2px solid var(--line);border-radius:10px;padding:10px;margin:20px 0;background:var(--bg2);">
    ${imageUrl ? `<img src="assets/images/${imageUrl}" alt="${passage.title}" style="max-width:100%;height:auto;display:block;border-radius:5px;" onerror="this.parentElement.innerHTML='<div style=\'padding:40px;text-align:center;color:var(--muted)\'>🎨 [Illustration pending]</div>'; console.log('[Image] 404:', '${imageUrl}');" />` : '<div style="padding:40px;text-align:center;color:var(--muted)">🎨 [Illustration pending]</div>'}
    </div>

    <!-- AUDIO PLAYER -->
    <div class="audio-player-container" style="background:var(--bg2);border-radius:10px;padding:20px;margin:20px 0;">
    <div style="margin-bottom:15px;color:var(--gold);font-size:14px;font-weight:600">
    ▶️ Audio Narration
    </div>
    <audio
    id="audio-${bid}-${index}"
    controls
    preload="metadata"
    style="width:100%;height:40px"
   onplay="console.log('[Audio] Playing:', '${audioFileName}')"
    onended="console.log('[Audio] Finished:', '${audioFileName}')"
    >
    <source src="assets/audio/${audioFileName}" type="audio/mpeg">
    Your browser does not support the audio element.
    </audio>
    <div style="margin-top:10px;font-size:12px;color:var(--muted);text-align:center">
    ${passage.duration} • ${p.display_name}
    </div>
    <div class="audio-status" id="status-${bid}-${index}" style="text-align:center;font-size:11px;color:var(--accent);margin-top:5px;min-height:15px"></div>
    </div>
    </div>
    `;
  }).join('');

  setView(`
  <div class="screen">
  <div class="reader-head">
  <div class="by">${p.display_name}</div>
  <h2>${b.title}</h2>
  <div class="src">${b.sub} | ${b.translator || 'Public Domain Translation'}</div>
  </div>

  <div class="section-label">Chapters</div>
  ${passagesHTML}

  <div class="foot">
  Tap chapters to navigate.<br>
  <b>Your artwork</b> will appear between passages.<br>
  <b>Narration audio</b> plays below text.<br>
  Place your recordings in: <code>assets/audio/${sid}/</code>
  </div>
  </div>
  `);

  window.currentBookId = bid;
}

function showPassage(bookId, passageIndex) {
  // Hide all passages
  document.querySelectorAll('.block.enr').forEach(el => el.style.display = 'none');
  // Show selected passage
  const target = document.getElementById(`passage-${bookId}-${passageIndex}`);
  if (target) target.style.display = 'block';
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function portrait(initials, hue) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'>
    <defs><linearGradient id='b' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0%' stop-color='hsl(${hue},38%,30%)'/><stop offset='100%' stop-color='hsl(${hue},42%,14%)'/></linearGradient></defs>
    <rect width='120' height='120' fill='url(#b)'/>
    <g fill='none' stroke='hsl(45,60%,62%)' stroke-width='2' opacity='.55'>
      <path d='M26 96 q10 -22 34 -22 q24 0 34 22'/><circle cx='60' cy='48' r='20'/>
    </g>
    <text x='60' y='112' font-family='Georgia' font-size='15' fill='hsl(45,70%,75%)' text-anchor='middle' opacity='.9'>${initials}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function openSocraticProblemModal() {
  const modal = document.getElementById('socraticProblemModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeSocraticModal() {
  const modal = document.getElementById('socraticProblemModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function navigateToApology() {
  closeSocraticModal();
  navigateTo({ t: 'book', s: 'stoicism', p: 'plato', b: 'apology' });
  showToast('Opening Apology of Socrates...');
}

function openFilterModal() {
  // Start a fresh draft from the currently active filters
  pendingFilters = {
    eras: [...activeFilters.eras],
    cultures: [...activeFilters.cultures]
  };

  const timeButtons = Object.entries(DEEPVOICE_DATA.time_periods).map(([id, tp]) => {
    const isActive = pendingFilters.eras.includes(id);     // ← now checks DRAFT selections
    return `<button class="filter-btn ${isActive ? 'selected' : ''}"
    onclick="toggleEraFilter('${id}')">${tp.name}</button>`;
  }).join('');

  const cultureButtons = DEEPVOICE_DATA.cultures.map(c => {
    const isActive = pendingFilters.cultures.includes(c.id);  // ← checks DRAFT selections
    return `<button class="filter-btn ${isActive ? 'selected' : ''}"
    onclick="toggleCultureFilter('${c.id}')">${c.flag} ${c.name}</button>`;
  }).join('');

  const actionButtons = `
  <div style="display:flex;gap:10px;margin-top:20px;">
  <button class="filter-btn" style="flex:1;background:var(--bg3);color:var(--gold);" onclick="cancelFilters()">Cancel</button>
  <button class="filter-btn selected" style="flex:1;background:var(--gold);color:var(--bg);font-weight:600;" onclick="applyFilters()">✔ Apply Filters</button>
  </div>`;

  const filterModal = document.getElementById('filterModal');
  const timeFilters = document.getElementById('timeFilters');
  const cultureFilters = document.getElementById('cultureFilters');

  if (filterModal && timeFilters && cultureFilters) {
    timeFilters.innerHTML = timeButtons;
    cultureFilters.innerHTML = cultureButtons;

    // Add "Clear All" button if any filters are active
    const hasActiveFilters = activeFilters.eras.length > 0 || activeFilters.cultures.length > 0;
    let clearBtnHTML = hasActiveFilters
    ? '<button class="filter-btn" style="margin-top:15px;width:100%;background:var(--bg3);color:var(--gold);" onclick="clearAllFilters()">🗑 Clear All Filters</button>'
    : '';

    // Append clear button to the time filters section
    timeFilters.innerHTML += clearBtnHTML;

    filterModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeFilterModal() {
  const filterModal = document.getElementById('filterModal');
  if (filterModal) {
    filterModal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function toggleEraFilter(eraId) {
  if (pendingFilters.eras.includes(eraId)) {
    pendingFilters.eras = pendingFilters.eras.filter(e => e !== eraId);
  } else {
    pendingFilters.eras.push(eraId);
  }
  // Only update button highlight — do NOT apply yet
  const idx = pendingFilters.eras.indexOf(eraId);
  event.target.classList.toggle('selected', idx !== -1);
}

function toggleCultureFilter(cultureId) {
  if (pendingFilters.cultures.includes(cultureId)) {
    pendingFilters.cultures = pendingFilters.cultures.filter(c => c !== cultureId);
  } else {
    pendingFilters.cultures.push(cultureId);
  }
  const idx = pendingFilters.cultures.indexOf(cultureId);
  event.target.classList.toggle('selected', idx !== -1);
}

function applyFilters() {
  // Commit the draft to the active filters
  activeFilters.eras = [...pendingFilters.eras];
  activeFilters.cultures = [...pendingFilters.cultures];
  closeFilterModal();
  render();
}

function cancelFilters() {
  // Discard the draft
  pendingFilters = { eras: [], cultures: [] };
  closeFilterModal();
}

function clearAllFilters() {
  activeFilters = { eras: [], cultures: [], schools: [] };
  pendingFilters = { eras: [], cultures: [] };
  closeFilterModal();
  render();
}

function handleSearch(e) {
  if (e.key === 'Enter') {
    const query = e.target.value.trim();
    if (query.length === 0) return;
    console.log('[Deep Voice] Searching for:', query);
    navigateTo({ t: 'search', q: query });
  }
}

function filterByTime(periodId) {
  console.log('[Deep Voice] Filter by time:', periodId);
  showToast(`Filtering: ${DEEPVOICE_DATA.time_periods[periodId]?.name || periodId}`);
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
    background: var(--bg3); border: 1px solid var(--gold-soft); padding: 12px 24px;
    border-radius: 10px; z-index: 2000; font-size: 14px; color: var(--gold);
    animation: toastFade 0.3s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/* ========== EVENT LISTENERS ========== */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeSocraticModal();
    closeFilterModal();
  }
});

const socraticModal = document.getElementById('socraticProblemModal');
if (socraticModal) {
  socraticModal.addEventListener('click', function(e) {
    if (e.target === this) closeSocraticModal();
  });
}

const filterModal = document.getElementById('filterModal');
if (filterModal) {
  filterModal.addEventListener('click', function(e) {
    if (e.target === this) closeFilterModal();
  });
}

/* ========== INITIALIZE ON LOAD ========== */
console.log('[Deep Voice] Script loaded');
attachNavigationHandlers();
navigateTo(null);

window.navigateTo = navigateTo;
window.goBack = goBack;
window.goHome = goHome;
window.openSocraticProblemModal = openSocraticProblemModal;
window.closeSocraticModal = closeSocraticModal;
window.openFilterModal = openFilterModal;
window.closeFilterModal = closeFilterModal;
window.toggleEraFilter = toggleEraFilter;
window.toggleCultureFilter = toggleCultureFilter;
window.handleSearch = handleSearch;
window.filterByTime = filterByTime;
window.showPassage = showPassage;
window.toggleEraFilter = toggleEraFilter;
window.clearAllFilters = clearAllFilters;
window.toggleTimeFilter = toggleEraFilter;
