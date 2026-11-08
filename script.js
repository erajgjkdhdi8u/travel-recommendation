/* TravelBloom — Coursera Final Project
   All recommendations are local JavaScript data: no API key is required.
   Image URLs are served by Unsplash. */

const photo = (id, width = 1000) =>
  'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=' + width + '&q=82';

/* Every recommendation has TWO different images for the grading rubric. */
const destinations = [
  {
    category: 'beach',
    title: 'Whitehaven Beach',
    country: 'Australia',
    description: 'Walk along bright white silica sand and take in the swirling turquoise waters of the Whitsunday Islands.',
    tags: ['beach', 'coast', 'ocean', 'island', 'australia'],
    images: ['photo-1507525428034-b723cf961d3e', 'photo-1519046904884-53103b34b206']
  },
  {
    category: 'beach',
    title: 'Maldives Atolls',
    country: 'Maldives',
    description: 'Find calm lagoons, coral reefs and overwater hideaways on a collection of dreamy Indian Ocean islands.',
    tags: ['beach', 'island', 'sea', 'maldives'],
    images: ['photo-1514282401047-d79a71a590e8', 'photo-1500375592092-40eb2168fd21']
  },
  {
    category: 'beach',
    title: 'Railay Beach',
    country: 'Thailand',
    description: 'Discover dramatic limestone cliffs, soft sandy bays and vivid tropical scenery along the Andaman Sea.',
    tags: ['beach', 'coast', 'thailand', 'tropical'],
    images: ['photo-1473116763249-2faaef81ccda', 'photo-1507525428034-b723cf961d3e']
  },
  {
    category: 'temple',
    title: 'Fushimi Inari Shrine',
    country: 'Japan',
    description: 'Explore beautiful Japanese architecture, forest trails and the spiritual traditions of ancient Kyoto.',
    tags: ['temple', 'shrine', 'japan', 'kyoto', 'culture'],
    images: ['photo-1493976040374-85c8e12f0c0e', 'photo-1528360983277-13d401cdc186']
  },
  {
    category: 'temple',
    title: 'Tanah Lot Temple',
    country: 'Indonesia',
    description: 'Experience the atmosphere of Bali and its sacred coastal landmarks framed by warm tropical light.',
    tags: ['temple', 'bali', 'indonesia', 'spiritual'],
    images: ['photo-1537996194471-e657df975ab4', 'photo-1518548419970-58e3b4079ab2']
  },
  {
    category: 'temple',
    title: 'Wat Arun',
    country: 'Thailand',
    description: 'Discover intricate Thai temple details and an unforgettable cultural heritage along Bangkok’s riverfront.',
    tags: ['temple', 'thailand', 'bangkok', 'culture'],
    images: ['photo-1563492065599-3520f775eeed', 'photo-1545569341-9eb8b30979d9']
  },
  {
    category: 'country',
    title: 'Experience Japan',
    country: 'Japan',
    description: 'Travel from timeless shrines and peaceful gardens to colorful neighborhoods and fascinating modern culture.',
    tags: ['country', 'countries', 'japan', 'asia', 'tokyo', 'kyoto'],
    images: ['photo-1528360983277-13d401cdc186', 'photo-1542051841857-5f90071e7989']
  },
  {
    category: 'country',
    title: 'Explore Brazil',
    country: 'Brazil',
    description: 'Discover lively cities, magnificent landscapes and the vibrant warmth of South American culture.',
    tags: ['country', 'countries', 'brazil', 'rio', 'south america'],
    images: ['photo-1483729558449-99ef09a8c325', 'photo-1516306580123-e6e52b1b7b5f']
  },
  {
    category: 'country',
    title: 'Discover Australia',
    country: 'Australia',
    description: 'From extraordinary coastlines to the iconic Sydney skyline, Australia rewards every kind of explorer.',
    tags: ['country', 'countries', 'australia', 'sydney', 'oceania'],
    images: ['photo-1506973035872-a4ec16b8e8d9', 'photo-1523482580672-f109ba8cb9be']
  },
  {
    category: 'country',
    title: 'Escape to Italy',
    country: 'Italy',
    description: 'Admire coastal villages, romantic canals and places filled with art, history and unforgettable flavors.',
    tags: ['country', 'countries', 'italy', 'venice', 'europe'],
    images: ['photo-1533105079780-92b9be482077', 'photo-1523906834658-6e24ef2386f9']
  },
  {
    category: 'country',
    title: 'Dream of Greece',
    country: 'Greece',
    description: 'Discover whitewashed villages, deep blue seas and historic Mediterranean charm.',
    tags: ['country', 'countries', 'greece', 'santorini', 'europe'],
    images: ['photo-1613395877344-13d4a8e0d49e', 'photo-1533105079780-92b9be482077']
  },
  {
    category: 'country',
    title: 'Fall for France',
    country: 'France',
    description: 'Wander through beautiful streets, discover cultural landmarks and make memories in the heart of Europe.',
    tags: ['country', 'countries', 'france', 'paris', 'europe'],
    images: ['photo-1502602898657-3e91760cbb34', 'photo-1499856871958-5b9627545d1a']
  }
];

function createPhoto(imageId, description, width) {
  const img = document.createElement('img');
  img.src = photo(imageId, width);
  img.alt = description;
  img.loading = 'lazy';
  img.decoding = 'async';
  img.addEventListener('error', () => {
    if (img.dataset.fallback) return;
    img.dataset.fallback = 'true';
    const message = 'Travel destination photo';
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="500" viewBox="0 0 600 500"><rect width="600" height="500" fill="#b9d4cb"/><circle cx="454" cy="130" r="53" fill="#e4f1d5"/><path d="M0 400L180 180l135 154 90-86 195 185v67H0Z" fill="#658d83"/><text x="300" y="462" text-anchor="middle" font-family="Arial" font-size="20" fill="#ffffff">' + message + '</text></svg>';
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }, { once: true });
  return img;
}

function createDestinationCard(destination) {
  const card = document.createElement('article');
  card.className = 'destination-card';

  const media = document.createElement('div');
  media.className = 'destination-media';
  media.append(
    createPhoto(destination.images[0], destination.title + ' — travel photo one', 900),
    createPhoto(destination.images[1], destination.title + ' — travel photo two', 480)
  );
  const content = document.createElement('div');
  content.className = 'destination-content';
  const tag = document.createElement('span');
  tag.className = 'destination-category';
  tag.textContent = destination.category.toUpperCase() + ' · ' + destination.country.toUpperCase();
  const title = document.createElement('h4');
  title.textContent = destination.title;
  const description = document.createElement('p');
  description.textContent = destination.description;
  const bottom = document.createElement('div');
  bottom.className = 'destination-bottom';
  const photosLabel = document.createElement('span');
  photosLabel.textContent = '2 DESTINATION PHOTOS';
  const arrow = document.createElement('span');
  arrow.setAttribute('aria-hidden', 'true');
  arrow.textContent = '↗';
  bottom.append(photosLabel, arrow);
  content.append(tag, title, description, bottom);
  card.append(media, content);
  return card;
}

function findDestinations(term) {
  const q = term.toLocaleLowerCase().trim();
  if (!q) return [];
  if (/^(beaches?|coasts?|пляжи?|пляж)$/.test(q)) {
    return destinations.filter(item => item.category === 'beach');
  }
  if (/^(temples?|shrines?|храмы?|храм)$/.test(q)) {
    return destinations.filter(item => item.category === 'temple');
  }
  if (/^(countr(y|ies)|страны|страна|countries)$/.test(q)) {
    return destinations.filter(item => item.category === 'country');
  }
  if (/^(all|destinations?|travel|explore)$/.test(q)) return destinations;
  return destinations.filter(item =>
    [item.title, item.country, item.description, item.category, ...item.tags]
      .some(value => value.toLocaleLowerCase().includes(q))
  );
}

function setupMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

function setupHomeSearch() {
  const form = document.getElementById('search-form');
  const input = document.getElementById('search-input');
  const reset = document.getElementById('clear-search');
  const resultsSection = document.getElementById('results-section');
  const resultsGrid = document.getElementById('results-grid');
  const resultsCount = document.getElementById('results-count');
  const resultsHeading = document.getElementById('results-heading');
  const featuredSection = document.getElementById('featured-section');
  const emptyState = document.getElementById('empty-state');
  const emptyDescription = document.getElementById('empty-description');
  const discover = document.getElementById('discover');

  if (!form || !input || !resultsSection || !resultsGrid) return;

  function setSearchUrl(term) {
    const url = new URL(window.location.href);
    if (term) url.searchParams.set('q', term);
    else url.searchParams.delete('q');
    window.history.replaceState({}, '', url);
  }

  function runSearch(term, scroll = true) {
    const query = term.trim();
    if (!query) return;
    input.value = query;
    const matches = findDestinations(query);
    resultsGrid.replaceChildren(...matches.map(createDestinationCard));
    resultsHeading.textContent = 'Results for “' + query + '”';
    resultsCount.textContent = matches.length + (matches.length === 1 ? ' DESTINATION' : ' DESTINATIONS');
    emptyState.hidden = matches.length !== 0;
    emptyDescription.textContent = 'No matches for “' + query + '”. Try beach, temple, country or Japan.';
    resultsSection.hidden = false;
    featuredSection.hidden = true;
    setSearchUrl(query);
    if (scroll) discover.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function clearSearch() {
    input.value = '';
    resultsGrid.replaceChildren();
    resultsSection.hidden = true;
    emptyState.hidden = true;
    featuredSection.hidden = false;
    setSearchUrl('');
    discover.scrollIntoView({ behavior: 'smooth', block: 'start' });
    input.focus({ preventScroll: true });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    runSearch(input.value);
  });

  if (reset) reset.addEventListener('click', clearSearch);
  document.querySelectorAll('[data-search]').forEach(button => {
    button.addEventListener('click', () => runSearch(button.dataset.search));
  });

  const explore = document.getElementById('explore-trigger');
  if (explore) {
    explore.addEventListener('click', () => {
      discover.scrollIntoView({ behavior: 'smooth', block: 'start' });
      input.focus({ preventScroll: true });
    });
  }

  const initialQuery = new URLSearchParams(window.location.search).get('q');
  if (initialQuery) runSearch(initialQuery, false);
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const name = document.getElementById('contact-name').value.trim().split(/\s+/)[0];
    feedback.textContent = 'Thank you, ' + name + '! Your form is valid. This is a demonstration website, so the message has not been sent to a server.';
    feedback.hidden = false;
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  if (document.body.dataset.page === 'home') setupHomeSearch();
  if (document.body.dataset.page === 'contact') setupContactForm();
});