/* ============================================================
   ELIAS WYSS — PORTFOLIO
   script.js
   ============================================================ */

'use strict';

/* ============================================================
   TRANSLATIONS
   All copy lives here — update once, applies everywhere.
   ============================================================ */
const translations = {
  en: {
    // Nav
    nav_home:     'Home',
    nav_projects: 'Projects',
    nav_about:    'About',
    nav_journey:  'Journey',
    nav_skills:   'Skills',
    nav_contact:  'Contact',

    // Hero
    status_open:        'Open to collabs',
    cta_projects:       'View Projects',
    cta_contact:        'Contact Me',
    currently_building: 'Currently building: PolyMotion',

    // About
    label_about:  'About',
    about_title:  'Who I Am',
    about_p1:
      "My name is Elias Wyss. I'm a student and self-taught developer from Switzerland " +
      "who builds things that actually ship. I've been creating games and software since " +
      "my early teens, driven by an entrepreneurial mindset and a genuine desire to make " +
      "products that people actually use.",
    about_p2:
      "My first major release is PolyMotion, a local multiplayer car racing game I built " +
      "over four months with two teammates. It's live on the Microsoft Store and was my " +
      "first experience taking a product all the way from concept to real-world release, " +
      "covering multiplayer networking, Unity development, and the full publishing process.",
    about_p3:
      "Alongside game development, I also build web-based projects like EliasOS, a " +
      "browser-based operating system that runs entirely in your browser. Outside of coding, " +
      "I have a strong interest in cybersecurity, web infrastructure, and space exploration.",
    motto:        '"Life is like Git. Nothing will change if you don\'t commit."',

    sidebar_interests_title: 'Interests',
    tag_gamedev:   'Game Development',
    tag_unity:     'Unity / C#',
    tag_cyber:     'Cybersecurity',
    tag_webinfra:  'Web Infrastructure',
    tag_space:     'Space Exploration',
    tag_motorsport:'Motorsport',

    sidebar_info_title: 'Info',
    info_location: 'Switzerland',
    info_languages:'DE, EN',
    info_focus:    'Game Dev & Software',

    // Projects
    label_projects:  'Work',
    projects_title:  'Projects',
    badge_published: 'Published ✓',
    badge_wip:       'WIP 🔧',
    badge_soon:      'Soon',
    polymotion_desc:
      "A local multiplayer racing game for Windows with a custom peer-to-peer networking system. " +
      "Built and shipped in 4 months with a team of three. Published on the Microsoft Store.",
    eliasos_title: 'EliasOS',
    eliasos_desc:
      "A browser-based operating system built entirely with web technologies. " +
      "No installation needed, it runs straight in your browser.",
    btn_try:      'Try it Live',
    next_title:   'Next Project',
    next_desc:    'Something new is in the works. Check back soon.',
    btn_visit:    'Visit Website',
    btn_github:   'GitHub',
    btn_soon:     'Coming Soon',

    // Skills
    label_skills: 'Tech',
    skills_title: 'Skills',
    skills_row1:  'Languages & Tools',
    skills_row2:  'Platforms & Other',

    // Contact
    label_contact:    'Say hello',
    contact_title:    'Get in Touch',
    contact_subtitle:
      "Have a project in mind, a question, or just want to say hi? " +
      "I usually respond within a day.",
    form_name:    'Name',
    form_email:   'Email',
    form_message: 'Message',
    form_submit:  'Send Message',
    form_success: "Thanks! I'll be in touch soon. 👋",
    socials_title:'Find me online',

    // Footer
    footer_built: 'Built by',

    // Nav
    nav_journey: 'Journey',

    // Journey section
    label_journey: 'Journey',
    journey_title: 'How It Started',
    j2022_title: 'Sparked by Curiosity',
    j2022_desc:  'Discovered a passion for computers and technology. Started to understand how software and systems actually work under the hood.',
    j2023_title: 'First Lines of Code',
    j2023_desc:  'Took the first real steps into programming. Started writing code, making small experiments, and building an understanding of how things fit together.',
    j2024_title: 'Deep Dive',
    j2024_desc:  'Passion for software development grew significantly. Spent a lot of time learning, building, and exploring different areas of tech from game dev to web infrastructure.',
    j2025_title: 'First Real Games',
    j2025_desc:  'Built the first proper 2D games from scratch and started working with Unity 3D, extending existing templates and learning the engine in depth.',
    j2026a_title: 'PolyMotion Ships',
    j2026a_desc:  'Launched PolyMotion on the Microsoft Store. A local multiplayer car racing game with a custom P2P networking system, built together with two teammates.',
    j2026b_year:  'Summer 2026',
    j2026b_title: 'Informatik Mittelschule',
    j2026b_desc:  'Starting a new chapter this summer. Joining a computer science focused secondary school to go deeper into software engineering and formal CS education.',
  },

  de: {
    // Nav
    nav_home:     'Start',
    nav_projects: 'Projekte',
    nav_about:    'Über mich',
    nav_journey:  'Werdegang',
    nav_skills:   'Fähigkeiten',
    nav_contact:  'Kontakt',

    // Hero
    status_open:        'Offen für Zusammenarbeiten',
    cta_projects:       'Projekte ansehen',
    cta_contact:        'Kontakt aufnehmen',
    currently_building: 'Aktuell in Arbeit: PolyMotion',

    // About
    label_about:  'Über mich',
    about_title:  'Wer ich bin',
    about_p1:
      "Mein Name ist Elias Wyss. Ich bin ein Schüler aus der Schweiz, der sich das " +
      "Programmieren selbst beigebracht hat und Dinge baut, die wirklich erscheinen. Seit " +
      "meiner frühen Jugend entwickle ich Spiele und Software, angetrieben von einem " +
      "unternehmerischen Denken und dem echten Wunsch, Produkte zu schaffen, die Menschen " +
      "wirklich nutzen.",
    about_p2:
      "Meine erste grössere Veröffentlichung ist PolyMotion, ein lokales Multiplayer-Autorennspiel " +
      "für Windows, das ich in vier Monaten zusammen mit zwei Teamkollegen entwickelt habe. " +
      "Es ist im Microsoft Store erhältlich und war eine sehr lehrende Erfahrung, ein Produkt " +
      "vom Konzept bis zur echten Veröffentlichung zu begleiten, inklusive Multiplayer-Networking, " +
      "Unity-Entwicklung und dem gesamten Publishing-Prozess.",
    about_p3:
      "Neben der Spieleentwicklung baue ich auch webbasierte Projekte wie EliasOS, ein " +
      "browserbasiertes Betriebssystem, das direkt im Browser läuft. Ausserhalb des Programmierens " +
      "interessiere ich mich stark für Cybersicherheit, Webinfrastruktur und Weltraumforschung.",
    motto: '„Das Leben ist wie Git. Nichts ändert sich, wenn du nicht committest."',

    sidebar_interests_title: 'Interessen',
    tag_gamedev:   'Spieleentwicklung',
    tag_unity:     'Unity / C#',
    tag_cyber:     'Cybersicherheit',
    tag_webinfra:  'Web-Infrastruktur',
    tag_space:     'Weltraumforschung',
    tag_motorsport:'Motorsport',

    sidebar_info_title: 'Info',
    info_location: 'Schweiz',
    info_languages:'DE, EN',
    info_focus:    'Game Dev & Software',

    // Projects
    label_projects:  'Arbeiten',
    projects_title:  'Projekte',
    badge_published: 'Veröffentlicht ✓',
    badge_wip:       'In Arbeit 🔧',
    badge_soon:      'Bald',
    polymotion_desc:
      "Ein lokales Multiplayer-Autorennspiel für Windows, in 4 Monaten " +
      "entwickelt und im Microsoft Store veröffentlicht.",
    eliasos_title: 'EliasOS',
    eliasos_desc:
      "Ein browserbasiertes Betriebssystem, komplett mit Web-Technologien gebaut. " +
      "Keine Installation nötig, es läuft direkt im Browser.",
    btn_try:      'Jetzt ausprobieren',
    next_title:   'Nächstes Projekt',
    next_desc:    'Etwas Neues ist in Arbeit. Schau bald wieder vorbei.',
    btn_visit:    'Webseite besuchen',
    btn_github:   'GitHub',
    btn_soon:     'Demnächst',

    // Skills
    label_skills: 'Technologien',
    skills_title: 'Fähigkeiten',
    skills_row1:  'Sprachen & Tools',
    skills_row2:  'Plattformen & Weiteres',

    // Contact
    label_contact:    'Hallo sagen',
    contact_title:    'Kontakt',
    contact_subtitle:
      "Du hast ein Projekt, eine Frage oder willst einfach Hallo sagen? " +
      "Ich antworte meist innerhalb eines Tages.",
    form_name:    'Name',
    form_email:   'E-Mail',
    form_message: 'Nachricht',
    form_submit:  'Nachricht senden',
    form_success: 'Danke! Ich melde mich bald. 👋',
    socials_title:'Wo du mich findest',

    // Footer
    footer_built: 'Erstellt von',

    // Nav
    nav_journey: 'Werdegang',

    // Journey section
    label_journey: 'Werdegang',
    journey_title: 'Wie es begann',
    j2022_title: 'Der erste Funke',
    j2022_desc:  'Entdeckte eine Leidenschaft für Computer und Technologie. Begann zu verstehen, wie Software und Systeme wirklich funktionieren.',
    j2023_title: 'Erste Codezeilen',
    j2023_desc:  'Die ersten echten Schritte ins Programmieren. Kleine Experimente, erstes Verständnis dafür, wie die Dinge zusammenpassen.',
    j2024_title: 'Volle Begeisterung',
    j2024_desc:  'Die Leidenschaft für Softwareentwicklung wuchs stark. Viel Zeit fürs Lernen und Bauen, von Game-Dev bis hin zu Webinfrastruktur.',
    j2025_title: 'Erste echte Spiele',
    j2025_desc:  'Die ersten richtigen 2D-Spiele von Grund auf entwickelt und mit Unity 3D gearbeitet, bestehende Templates erweitert und die Engine vertieft.',
    j2026a_title: 'PolyMotion wird veröffentlicht',
    j2026a_desc:  'PolyMotion im Microsoft Store gelauncht. Ein lokales Multiplayer-Autorennspiel mit eigenem P2P-Netzwerksystem, zusammen mit zwei Teamkollegen entwickelt.',
    j2026b_year:  'Sommer 2026',
    j2026b_title: 'Informatik Mittelschule',
    j2026b_desc:  'Ein neues Kapitel beginnt diesen Sommer. Wechsel in eine Informatik-Mittelschule, um tiefer in Software-Engineering und formale Informatik einzutauchen.',
  },
};

/* ============================================================
   TYPED TAGLINES
   ============================================================ */
const taglines = {
  en: [
    'Student. Developer. Game Creator.',
    'Building things that actually ship.',
    'Open source builder from Switzerland.',
  ],
  de: [
    'Schüler. Entwickler. Spieleentwickler.',
    'Produkte, die wirklich erscheinen.',
    'Open-Source-Entwickler aus der Schweiz.',
  ],
};


/* ============================================================
   STATE
   ============================================================ */
let currentLang    = 'en';
let typedIndex     = 0;
let charIndex      = 0;
let isDeleting     = false;
let typedTimer     = null;
let cursorGlowOn   = false;


/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */
function applyLanguage(lang) {
  currentLang = lang;

  // Update all [data-key] elements
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Lang button shows the OTHER language
  document.getElementById('lang-toggle').textContent = lang === 'en' ? 'DE' : 'EN';

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Restart typed animation for new language
  clearTimeout(typedTimer);
  typedIndex = 0;
  charIndex  = 0;
  isDeleting = false;
  document.getElementById('typed-text').textContent = '';
  typeLoop();
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'de' : 'en');
});


/* ============================================================
   TYPED TEXT ANIMATION
   ============================================================ */
function typeLoop() {
  const lines  = taglines[currentLang];
  const target = lines[typedIndex % lines.length];
  const el     = document.getElementById('typed-text');

  if (isDeleting) {
    charIndex--;
    el.textContent = target.slice(0, charIndex);
  } else {
    charIndex++;
    el.textContent = target.slice(0, charIndex);
  }

  let delay = isDeleting ? 45 : 85;

  if (!isDeleting && charIndex === target.length) {
    // Pause at full line
    delay = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typedIndex++;
    delay = 400;
  }

  typedTimer = setTimeout(typeLoop, delay);
}


/* ============================================================
   NAVBAR — scroll state + active section highlight
   ============================================================ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// Active nav link via IntersectionObserver
const sections     = document.querySelectorAll('section[id]');
const navLinks     = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === id);
      });
    }
  });
}, {
  rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue('--nav-height').trim()} 0px -60% 0px`,
  threshold: 0,
});

sections.forEach(s => sectionObserver.observe(s));


/* ============================================================
   HAMBURGER / MOBILE MENU
   ============================================================ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu(open) {
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';
}

hamburger.addEventListener('click', () => {
  toggleMenu(!hamburger.classList.contains('open'));
});

// Close on any mobile link click
mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => toggleMenu(false));
});

// Close on overlay backdrop (click outside links)
mobileMenu.addEventListener('click', e => {
  if (e.target === mobileMenu) toggleMenu(false);
});


/* ============================================================
   SCROLL REVEAL — IntersectionObserver
   ============================================================ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  // Stagger siblings within the same parent
  const siblings = el.parentElement
    ? Array.from(el.parentElement.querySelectorAll(':scope > .reveal'))
    : [];
  const siblingIndex = siblings.indexOf(el);
  if (siblingIndex > 0 && !el.style.getPropertyValue('--card-delay')) {
    el.style.setProperty('--reveal-delay', `${siblingIndex * 100}ms`);
  }
  revealObserver.observe(el);
});


/* ============================================================
   PROFILE PHOTO FALLBACK
   ============================================================ */
const profilePhoto    = document.getElementById('profile-photo');
const profileFallback = document.getElementById('profile-fallback');

profilePhoto.addEventListener('error', () => {
  profilePhoto.style.display      = 'none';
  profileFallback.style.display   = 'flex';
  profileFallback.removeAttribute('aria-hidden');
});


/* ============================================================
   CONTACT FORM — mailto + success message
   ============================================================ */
const contactForm   = document.getElementById('contact-form');
const formSuccess   = document.getElementById('form-success');

contactForm.addEventListener('submit', () => {
  // The mailto fires natively. We just show the success state after a tick.
  setTimeout(() => {
    contactForm.style.display = 'none';
    formSuccess.hidden = false;
    // Update success text if language already switched
    const key = 'form_success';
    formSuccess.querySelector('[data-key]').textContent = translations[currentLang][key];
  }, 300);
});


/* ============================================================
   CURSOR GLOW
   ============================================================ */
const cursorGlow      = document.getElementById('cursor-glow');
const cursorToggleBtn = document.getElementById('cursor-toggle');

document.addEventListener('mousemove', e => {
  if (!cursorGlowOn) return;
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top  = `${e.clientY}px`;
}, { passive: true });

cursorToggleBtn.addEventListener('click', () => {
  cursorGlowOn = !cursorGlowOn;
  cursorGlow.classList.toggle('active', cursorGlowOn);
  cursorToggleBtn.classList.toggle('active', cursorGlowOn);
  cursorToggleBtn.setAttribute('title', cursorGlowOn ? 'Cursor glow on' : 'Cursor glow off');
});


/* ============================================================
   FOOTER YEAR
   ============================================================ */
document.getElementById('footer-year').textContent = new Date().getFullYear();


/* ============================================================
   INIT
   ============================================================ */
applyLanguage('en');
