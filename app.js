/* ================= DATA ================= */

function mapsLink(query){
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
}

const CREW = {
  silvi: { initials: "SI", color: "#2F6B5E", name: "Silvi" },
  abi:   { initials: "AB", color: "#C1272D", name: "Abi" },
  lotta: { initials: "LO", color: "#E4B23C", name: "Lotta" },
  jose:  { initials: "JO", color: "#3B7A4E", name: "Jose" },
};

const RING_COLORS = ["#C1272D", "#3B7A4E", "#E4B23C"];

const ROUTE_STOPS = [
  { code: "BUC", city: "București", shape: "round" },
  { code: "BRV", city: "Brașov", shape: "rect" },
  { code: "BRN", city: "Bran", shape: "round" },
  { code: "CND", city: "Constanța", shape: "rect" },
  { code: "CRB", city: "Corbu", shape: "round" },
];

const ICONS = {
  flight: "✈️", train: "🚆", car: "🚗", stay: "🛏️", food: "🍽️",
  sight: "🏛️", beach: "🏖️", hike: "🥾", free: "☕", drinks: "🥂"
};

const ADDR = {
  silvi: "Strada Coralului Nr. 7, Bragadiru, Romania",
  iulia: "Strada Cerbului 28, Brașov, Romania",
  casaAdrian: "Casa Adrian, Corbu, Romania",
};

const SPOTIFY_PLAYLIST_ID = "4vMDfydiovk9mtKqeGFCyu";

const GALLERY_IMAGES = [
  { src: "assets/images/haystacks-countryside.jpg", alt: "Traditional haystacks in the Romanian countryside" },
  { src: "assets/images/bucharest-parliament-palace.jpg", alt: "Palace of the Parliament and the fountains of Bucharest" },
  { src: "assets/images/transfagarasan.jpg", alt: "The Transfăgărășan winding through the Carpathians" },
  { src: "assets/images/bucharest-old-town.jpg", alt: "A street in Bucharest's Old Town" },
  { src: "assets/images/bran-castle.jpg", alt: "Bran Castle in the hills of Transylvania" },
  { src: "assets/images/danube-delta-horse.jpg", alt: "A wild horse in the Danube Delta" },
  { src: "assets/images/carved-wooden-gate.jpg", alt: "A traditional carved wooden gate" },
];

const BRASOV_GALLERY_IMAGES = [
  { src: "assets/images/brasov-hollywood-sign.jpg", alt: "The Brașov sign on Tâmpa mountain, overlooking the city" },
  { src: "assets/images/brasov-council-square-aerial.jpg", alt: "Aerial view of Piața Sfatului, Brașov's council square" },
  { src: "assets/images/brasov-black-church-square.jpg", alt: "The Black Church towering over Piața Sfatului" },
  { src: "assets/images/brasov-cable-car.jpg", alt: "The cable car up Tâmpa mountain in Brașov" },
  { src: "assets/images/bran-castle-hillside.jpg", alt: "Bran Castle perched on its hillside near Brașov" },
];

const ROMANIA_FACTS = [
  { k: "Capital", v: "Bucharest" },
  { k: "Population", v: "≈ 19 million" },
  { k: "Language", v: "Romanian, a Romance language" },
  { k: "Currency", v: "Romanian Leu (RON)" },
  { k: "EU / NATO", v: "EU since 2007, NATO since 2004" },
  { k: "Landscape", v: "Carpathians, Danube Delta, Black Sea coast" },
];

const TRIP_YEAR = 2026;

const DAYS = [
  {
    id: "d0", date: "Aug 07", weekday: "Fri evening", title: "Arrival in Bragadiru",
    present: ["silvi"],
    joins: [{ id: "abi", time: "23:55" }, { id: "lotta", time: "23:55" }],
    events: [
      { time: "23:55", type: "flight", text: "Abi &amp; Lotta land at Bucharest Otopeni Airport" },
      { time: "~00:30", type: "car", text: "Bolt/Uber to Silvi's place, Bragadiru", addr: ADDR.silvi },
      { time: "evening", type: "food", text: "Dinner &amp; overnight at Silvi's" },
    ]
  },
  {
    id: "d1", date: "Aug 08", weekday: "Saturday", title: "Bragadiru → Brașov",
    present: ["silvi", "abi", "lotta"],
    events: [
      { time: "morning", type: "food", text: "Breakfast with Bubu (with real tomatoes from the garden), view over Bragadiru.", image: "assets/images/bubu-the-cat.png" },
      { time: "12:21", type: "train", text: "Departure to Brașov, train IC531", cta: { label: "View ticket", image: "assets/images/cfr-ticket-brasov.png" } },
      { time: "14:36", type: "train", text: "Arrival in Brașov, check in at Iulia's", addr: ADDR.iulia },
      { time: "midday", type: "food", text: "Lunch in Brașov" },
      { time: "afternoon", type: "sight", text: "Exploring Brașov" },
      { time: "evening", type: "drinks", text: "Dinner &amp; drinks in town", meetup: "Meeting up with Sabina &amp; Christian" },
    ],
    gallery: BRASOV_GALLERY_IMAGES
  },
  {
    id: "d2", date: "Aug 09", weekday: "Sunday", title: "Hiking around Brașov",
    present: ["silvi", "abi", "lotta"],
    events: [
      { time: "morning", type: "food", text: "Breakfast at Iulia's" },
      { time: "morning", type: "hike", text: "Hiking in the Brașov area", meetup: "With Sabina, Christian, possibly Cristiana, Tullio &amp; Parmi (the dog)" },
      { time: "midday", type: "food", text: "Lunch out on the trail" },
      { time: "evening", type: "food", text: "Dinner in Brașov", meetup: "With Iulia" },
    ]
  },
  {
    id: "d3", date: "Aug 10", weekday: "Monday", title: "Bran Castle → back to Bucharest",
    present: ["silvi", "abi", "lotta"],
    events: [
      { time: "morning", type: "food", text: "Breakfast at Iulia's" },
      { time: "morning", type: "sight", text: "Visiting Bran Castle" },
      { time: "from 14:00", type: "train", text: "Lunch, then train back to Bucharest" },
      { time: "evening", type: "car", text: "Arrival in Bucharest, Bolt/Uber onward to Bragadiru" },
      { time: "evening", type: "drinks", text: "Dinner &amp; drinks in town" },
    ]
  },
  {
    id: "d4", date: "Aug 11", weekday: "Tuesday", title: "Bucharest → Constanța → Corbu",
    present: ["silvi", "abi", "lotta"],
    joins: [{ id: "jose", time: "10:45" }],
    events: [
      { time: "morning", type: "food", text: "Breakfast at Silvi's", addr: ADDR.silvi },
      { time: "10:45", type: "flight", text: "Jose lands in Bucharest, on to Gara de Nord (North Station)" },
      { time: "12:00", type: "train", text: "All four meet at Bucharest North Station" },
      { time: "~12:xx", type: "train", text: "Departure to Constanța (about 2h by train)" },
      { time: "14–15", type: "train", text: "Arrival in Constanța" },
      { time: "afternoon", type: "car", text: "Uber from Constanța to Corbu" },
      { time: "afternoon", type: "stay", text: "Check in at Casa Adrian, Corbu", addr: ADDR.casaAdrian },
      { time: "evening", type: "beach", text: "Afternoon at Corbu Beach, dinner by the Black Sea" },
    ]
  },
  {
    id: "d5", date: "Aug 12", weekday: "Wednesday", title: "Corbu beach day",
    present: ["silvi", "abi", "lotta", "jose"],
    events: [
      { time: "all day", type: "beach", text: "Chilling at the beach in Corbu" },
    ]
  },
  {
    id: "d6", date: "Aug 13", weekday: "Thursday", title: "Danube Delta or Constanța — to be decided",
    present: ["silvi", "abi", "lotta", "jose"],
    events: [],
    options: {
      label: "Still open — deciding together, kept spontaneous on purpose",
      items: [
        "Option 1: Day trip to the Danube Delta from Constanța",
        "Option 2: Morning in Constanța (Casino, Marina, City Center), afternoon at the beach"
      ]
    }
  },
  {
    id: "d7", date: "Aug 14", weekday: "Friday", title: "Corbu → Bucharest",
    present: ["silvi", "abi", "lotta", "jose"],
    events: [
      { time: "morning", type: "stay", text: "Breakfast &amp; check-out" },
      { time: "morning", type: "car", text: "Uber to Constanța, then train to Bucharest" },
      { time: "~12:00", type: "train", text: "Arrival in Bucharest" },
      { time: "afternoon", type: "sight", text: "Lunch, exploring Bucharest" },
      { time: "evening", type: "car", text: "On to Bragadiru by Bolt/Uber" },
      { time: "evening", type: "drinks", text: "Dinner &amp; drinks in town, overnight at Silvi's", addr: ADDR.silvi },
    ]
  },
  {
    id: "d8", date: "Aug 15", weekday: "Saturday", title: "Goodbyes",
    present: ["silvi", "abi", "lotta", "jose"],
    byes: [{ id: "jose", time: "05:45" }, { id: "abi", time: "19:10" }, { id: "lotta", time: "19:10" }],
    events: [
      { time: "05:45", type: "flight", text: "Jose flies out" },
      { time: "morning", type: "free", text: "Free-style morning: coffee &amp; more Bucharest sightseeing", meetup: "Lotta, Abi &amp; Silvi" },
      { time: "19:10", type: "flight", text: "Lotta &amp; Abi fly out" },
    ]
  },
];

const CITIES = [
  { id: "bucuresti", name: "Bucharest", ready: true },
  { id: "brasov", name: "Brașov", ready: false },
  { id: "bran", name: "Bran", ready: false },
  { id: "constanta", name: "Constanța &amp; Corbu", ready: false },
];

const CITY_CONTENT = {
  bucuresti: {
    kultur: "Bucharest earned the nickname \"Little Paris of the East\" in the late 19th and early 20th century, when French-trained Romanian architects rebuilt the city after a major fire with wide boulevards and Belle Époque facades. That layer still sits right next to communist-era architecture, so the city reads as a mix of styles rather than one look.",
    gastro: "Local staples to try: mici (grilled minced-meat rolls, no casing), sarmale (cabbage rolls with rice and meat, Romania's unofficial national dish), mămăligă (polenta, served alongside almost everything), ciorbă de burtă (sour tripe soup) and papanași (fried dough with cheese, cream and jam) for dessert. Caru' cu Bere in the Old Town is a well-known historic spot for a first taste.",
    sights: [
      "Old Town / Lipscani — the historic core, restaurants, bars, and the Macca-Villacrosse Passage with its yellow glass roof",
      "Palace of the Parliament — the second-largest administrative building in the world, built under Ceaușescu",
      "Stavropoleos Monastery — small 1724 church, one of the city's architectural highlights",
      "Revolution Square — site of the 1989 revolution that ended Ceaușescu's regime",
      "Village Museum (Muzeul Satului) — open-air museum with over 300 traditional rural buildings"
    ],
    history: "Bucharest became the capital of Wallachia in 1659 and capital of a united Romania in 1859. In the early 1980s, Ceaușescu demolished roughly 30,000 historic houses, schools and churches to build the Civic Center and the Palace of the Parliament, which still defines the city's silhouette today.",
    funfact: "The Palace of the Parliament is the second-heaviest building in the world and was built almost entirely from Romanian materials.",
    sprache: [
      { ro: "Bună", en: "Hi" },
      { ro: "Mulțumesc", en: "Thank you" },
      { ro: "Noroc!", en: "Cheers!" },
      { ro: "Cât costă?", en: "How much is it?" },
      { ro: "Nu înțeleg", en: "I don't understand" },
    ]
  }
};

const CITY_SECTIONS = [
  { key: "kultur", label: "Culture", icon: "🎭" },
  { key: "gastro", label: "Food &amp; Drink", icon: "🍲" },
  { key: "sights", label: "Sights", icon: "📍" },
  { key: "history", label: "History", icon: "📜" },
  { key: "funfact", label: "Fun Fact", icon: "✨" },
  { key: "sprache", label: "A Few Words", icon: "🗣️" },
];

const ESSENTIALS = [
  { icon: "💶", title: "Currency", body: "Romanian Leu (RON). Coming soon: current exchange rate, card vs. cash situation, ATM notes." },
  { icon: "🌤️", title: "Weather", body: "Coming soon: live forecast per leg of the trip, once the weather feature is wired up." },
  { icon: "✅", title: "Do's &amp; Don'ts", body: "Coming soon: local customs, tipping etiquette, what tends to land well in Romania and what doesn't." },
];

/* ================= RENDER ================= */
function avatarHtml(id){
  const c = CREW[id];
  return `<div class="avatar" style="background:${c.color}" title="${c.name}">${c.initials}</div>`;
}

function addrHtml(addr, tbd){
  if (tbd) return `<span class="addr tbd">📍 ${addr}</span>`;
  return `<a class="addr" href="${mapsLink(addr)}" target="_blank" rel="noopener">📍 ${addr} · Open in Maps</a>`;
}

// Original artwork built from real "semne românești" vocabulary: the eight-point
// star rosette (stea) is drawn from two overlapping squares, a classic Romanian
// folk-embroidery construction, flanked by small crosses (cruce) — not copied
// from any single source, just the same traditional geometric grammar.
const WELCOME_GLYPH = `
<svg width="110" height="90" viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(55,45)">
    <rect x="-24" y="-24" width="48" height="48" fill="none" stroke="#C1272D" stroke-width="3.5"/>
    <rect x="-24" y="-24" width="48" height="48" fill="none" stroke="#C1272D" stroke-width="3.5" transform="rotate(45)"/>
    <circle r="8" fill="none" stroke="#241C15" stroke-width="3.5"/>
  </g>
  <g stroke="#3B7A4E" stroke-width="3" stroke-linecap="round">
    <path d="M10,10 v12 M4,16 h12"/>
    <path d="M100,10 v12 M94,16 h12"/>
    <path d="M10,80 v-12 M4,74 h12"/>
    <path d="M100,80 v-12 M94,74 h12"/>
  </g>
</svg>`;

function renderWelcome(){
  const el = document.getElementById("welcomeContent");
  const factsHtml = ROMANIA_FACTS.map(f => `
    <div class="fact"><div class="k">${f.k}</div><div class="v">${f.v}</div></div>
  `).join("");

  el.innerHTML = `
    <div class="welcome-card">
      <div class="glyph">${WELCOME_GLYPH}</div>
      <h3>Bine ai venit!</h3>
      <p>Glad you've finally made it. Nine days, four cities, one coastline, and a lot of good food ahead of us. Let's have a great time in România.</p>
    </div>
    <div class="facts-grid">${factsHtml}</div>
    <div class="gallery-wrap">
      <div class="gallery-scroll" id="gallery">
        <div class="gallery-track" id="galleryTrack">
          ${[...GALLERY_IMAGES, ...GALLERY_IMAGES].map(g => `<div class="gallery-item"><img src="${g.src}" alt="${g.alt}" draggable="false"></div>`).join("")}
        </div>
      </div>
    </div>
    <div class="spotify-embed">
      <iframe src="https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator" width="100%" height="152" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  `;

  initGallery("gallery", "galleryTrack");
}

function galleryHtml(images, wrapId, trackId){
  return `
    <div class="gallery-wrap">
      <div class="gallery-scroll" id="${wrapId}">
        <div class="gallery-track" id="${trackId}">
          ${[...images, ...images].map(g => `<div class="gallery-item"><img src="${g.src}" alt="${g.alt}" draggable="false"></div>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function initGallery(wrapId, trackId){
  const wrap = document.getElementById(wrapId);
  const track = document.getElementById(trackId);
  if (!wrap || !track) return;

  const SPEED = 30; // px per second, continuous right-to-left drift
  let half = 0;        // width of one full image set, for the seamless wrap
  let offset = 0;       // current translateX distance (px)
  let dragging = false;
  let startX = 0, startOffset = 0;
  let paused = false;
  let last = performance.now();

  function measure(){
    half = track.scrollWidth / 2;
  }

  function apply(){
    if (half > 0){
      offset = ((offset % half) + half) % half; // wrap seamlessly, never hits an end
    }
    track.style.transform = `translateX(${-offset}px)`;
  }

  function tick(now){
    const dt = now - last;
    last = now;
    if (!dragging && !paused){
      offset += (SPEED * dt) / 1000;
    }
    apply();
    requestAnimationFrame(tick);
  }

  function onDown(x){
    dragging = true;
    paused = true;
    startX = x;
    startOffset = offset;
    wrap.classList.add("dragging");
  }
  function onMove(x){
    if (!dragging) return;
    offset = startOffset - (x - startX);
    apply();
  }
  function onUp(){
    if (!dragging) return;
    dragging = false;
    wrap.classList.remove("dragging");
    paused = false;
  }

  wrap.addEventListener("mousedown", (e) => { onDown(e.pageX); e.preventDefault(); });
  window.addEventListener("mousemove", (e) => onMove(e.pageX));
  window.addEventListener("mouseup", onUp);

  wrap.addEventListener("touchstart", (e) => onDown(e.touches[0].pageX), { passive: true });
  wrap.addEventListener("touchmove", (e) => onMove(e.touches[0].pageX), { passive: true });
  wrap.addEventListener("touchend", onUp, { passive: true });

  window.addEventListener("resize", measure);
  requestAnimationFrame(() => {
    measure();
    last = performance.now();
    requestAnimationFrame(tick);
  });
}

// Passport-stamp look, two variants for variety: round stamps arc the city
// name around the ring like a real entry stamp, rectangular stamps stack
// straight lines of text like a customs block stamp. Every stamp tilts
// slightly so nothing looks machine-perfect.
function passportStampRound(city, code, color, idx){
  const cx = 60, cy = 60, r = 46;
  const topArc = `M ${cx-r},${cy} A ${r},${r} 0 0 1 ${cx+r},${cy}`;
  const botArc = `M ${cx+r},${cy} A ${r},${r} 0 0 1 ${cx-r},${cy}`;
  const tilt = (idx % 2 === 0 ? -1 : 1) * (4 + (idx * 3) % 5);
  return `
  <svg width="92" height="92" viewBox="0 0 120 120" style="transform:rotate(${tilt}deg); overflow:visible;">
    <defs>
      <path id="topArc${idx}" d="${topArc}" fill="none"/>
      <path id="botArc${idx}" d="${botArc}" fill="none"/>
    </defs>
    <circle cx="${cx}" cy="${cy}" r="56" fill="none" stroke="${color}" stroke-width="3"/>
    <circle cx="${cx}" cy="${cy}" r="47" fill="none" stroke="${color}" stroke-width="1.2"/>
    <text font-family="IBM Plex Mono, monospace" font-size="11" font-weight="600" letter-spacing="1.5" fill="${color}">
      <textPath href="#topArc${idx}" startOffset="50%" text-anchor="middle">${city.toUpperCase()}</textPath>
    </text>
    <text font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="2.5" fill="${color}">
      <textPath href="#botArc${idx}" startOffset="50%" text-anchor="middle">ROMÂNIA</textPath>
    </text>
    <text x="${cx}" y="${cy+9}" font-family="Yeseva One, serif" font-size="22" fill="${color}" text-anchor="middle">${code}</text>
  </svg>`;
}

function passportStampRect(city, code, color, idx){
  const tilt = (idx % 2 === 0 ? 1 : -1) * (3 + (idx * 2) % 4);
  return `
  <svg width="92" height="92" viewBox="0 0 120 120" style="transform:rotate(${tilt}deg); overflow:visible;">
    <rect x="8" y="20" width="104" height="80" rx="8" fill="none" stroke="${color}" stroke-width="3"/>
    <rect x="14" y="26" width="92" height="68" rx="4" fill="none" stroke="${color}" stroke-width="1.2"/>
    <text x="60" y="46" font-family="IBM Plex Mono, monospace" font-size="9" font-weight="600" letter-spacing="1.5" fill="${color}" text-anchor="middle">ROMÂNIA</text>
    <text x="60" y="72" font-family="Yeseva One, serif" font-size="21" fill="${color}" text-anchor="middle">${code}</text>
    <text x="60" y="87" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="1" fill="${color}" text-anchor="middle">${city.toUpperCase()}</text>
  </svg>`;
}

function renderRouteStrip(){
  const el = document.getElementById("routeStrip");
  el.innerHTML = ROUTE_STOPS.map((s, i) => `
    <div class="stamp">
      <div class="ring">${s.shape === "rect" ? passportStampRect(s.city, s.code, RING_COLORS[i % RING_COLORS.length], i) : passportStampRound(s.city, s.code, RING_COLORS[i % RING_COLORS.length], i)}</div>
    </div>
    ${i < ROUTE_STOPS.length - 1 ? '<div class="dots"></div>' : ''}
  `).join("");
}

function currentDayIndex(){
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tripDates = DAYS.map(d => new Date(`${d.date} ${TRIP_YEAR}`));
  if (today <= tripDates[0]) return 0;
  if (today >= tripDates[tripDates.length - 1]) return tripDates.length - 1;
  return tripDates.findIndex(t => t.getTime() === today.getTime());
}

function renderDays(){
  const tabsEl = document.getElementById("dayTabs");
  const panelsEl = document.getElementById("dayPanels");
  const activeIndex = currentDayIndex();

  tabsEl.innerHTML = DAYS.map((d, i) => `<button data-day="${d.id}" class="${i===activeIndex ? 'active' : ''}">${d.date}</button>`).join("");

  panelsEl.innerHTML = DAYS.map((d, i) => {
    const joinFlags = (d.joins || []).map(j => `<span class="join-flag">👋 ${CREW[j.id].name} joins · ${j.time}</span>`).join("");
    const byeFlags = (d.byes || []).map(j => `<span class="bye-flag">🥲 ${CREW[j.id].name} leaves · ${j.time}</span>`).join("");

    const eventsHtml = d.events.map(e => `
      <div class="event">
        <div class="time">${e.time}</div>
        <div class="ico">${ICONS[e.type] || "•"}</div>
        <div class="txt">
          ${e.image ? `<img class="event-photo" src="${e.image}" alt="">` : ""}
          ${e.text}
          ${e.addr ? addrHtml(e.addr, e.tbd) : ""}
          ${e.meetup ? `<span class="meetup-tag">${e.meetup}</span>` : ""}
          ${e.cta ? `<button type="button" class="event-cta" data-lightbox="${e.cta.image}">${e.cta.label}</button>` : ""}
        </div>
      </div>
    `).join("");

    const optionsHtml = d.options ? `
      <div class="options-box">
        <b>${d.options.label}</b>
        ${d.options.items.map(o => `<div>${o}</div>`).join("")}
      </div>
    ` : "";

    return `
      <div class="city-panel ${i===activeIndex ? 'active' : ''}" id="day-${d.id}">
        <div class="day">
          <div class="day-head">
            <div class="date-row">
              <span class="daynum">${d.date}</span>
              <span class="weekday">${d.weekday}</span>
            </div>
            <h3>${d.title}</h3>
            <div class="crew-row">
              ${d.present.map(avatarHtml).join("")}
              ${joinFlags}${byeFlags}
            </div>
          </div>
          <div class="events">${eventsHtml}${optionsHtml}</div>
          ${d.gallery ? `<div class="day-gallery">${galleryHtml(d.gallery, `gallery-${d.id}`, `galleryTrack-${d.id}`)}</div>` : ""}
        </div>
      </div>
    `;
  }).join("");

  DAYS.filter(d => d.gallery).forEach(d => initGallery(`gallery-${d.id}`, `galleryTrack-${d.id}`));

  tabsEl.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      tabsEl.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      panelsEl.querySelectorAll(".city-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("day-" + btn.dataset.day).classList.add("active");
    });
  });

  panelsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".event-cta");
    if (btn) openLightbox(btn.dataset.lightbox);
  });
}

function openLightbox(src){
  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightboxImg").src = src;
  lightbox.classList.add("active");
}

function closeLightbox(){
  document.getElementById("lightbox").classList.remove("active");
  document.getElementById("lightboxImg").src = "";
}

function renderCitySection(cityId, key, label, icon){
  const content = CITY_CONTENT[cityId] && CITY_CONTENT[cityId][key];
  let body = `<p class="placeholder-note">Coming soon</p>`;
  if (content){
    if (key === "sights"){
      body = `<ul>${content.map(li => `<li>${li}</li>`).join("")}</ul>`;
    } else if (key === "sprache"){
      body = content.map(w => `<div class="word-row"><span class="ro">${w.ro}</span><span>${w.en}</span></div>`).join("");
    } else {
      body = `<p>${content}</p>`;
    }
  }
  return `<div class="info-block"><h4>${icon} ${label}</h4>${body}</div>`;
}

function renderCities(){
  const tabsEl = document.getElementById("cityTabs");
  const panelsEl = document.getElementById("cityPanels");

  tabsEl.innerHTML = CITIES.map((c, i) => `<button data-city="${c.id}" class="${i===0 ? 'active' : ''}">${c.name}</button>`).join("");

  panelsEl.innerHTML = CITIES.map((c, i) => `
    <div class="city-panel ${i===0 ? 'active' : ''}" id="city-${c.id}">
      ${!c.ready ? `<p class="placeholder-note">Content for ${c.name} is being researched and will be added before we get there.</p>` : ""}
      ${CITY_SECTIONS.map(s => renderCitySection(c.id, s.key, s.label, s.icon)).join("")}
    </div>
  `).join("");

  tabsEl.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      tabsEl.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      panelsEl.querySelectorAll(".city-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("city-" + btn.dataset.city).classList.add("active");
    });
  });
}

function renderEssentials(){
  const el = document.getElementById("essentialsList");
  el.innerHTML = ESSENTIALS.map(e => `
    <div class="info-block">
      <h4>${e.icon} ${e.title}</h4>
      <p>${e.body}</p>
    </div>
  `).join("");
}

function initTabs(){
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.view).classList.add("active");
      window.scrollTo({top:0, behavior:"instant"});
    });
  });
}

renderWelcome();
renderRouteStrip();
renderDays();
renderCities();
renderEssentials();
initTabs();
