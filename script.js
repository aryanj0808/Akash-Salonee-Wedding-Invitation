/* ============================================================
   Akash & Salonee — Wedding Invitation
   ============================================================ */

/* ===================== CONFIG ===================== */
const WEDDING_DATE = new Date("2026-07-26T16:50:00+05:30").getTime(); // 4:50 PM IST
const VENUE_QUERY  = "Yashodip Mangal Karyalaya Koregaon Satara";
const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(VENUE_QUERY);

/* ---- PHOTOS (Google Drive file IDs) ----
   Pulled from the shared Drive folder. Add / remove IDs freely.
   These power the animated slideshow, the event-card photos and the gallery. */
const PHOTOS = [
  "12UrzMDVS-2ozJeA2EGQA6bjF5zAo27uX","12K1wpguFooWv41-MbJdBIFSWcxgZ687o","1OlTrX-doHiFB4iof0wqcBR6CAhRk45bm",
  "1v1uRfTWziChnxoJmeS630mniOrIkEvla","18E6J-LXEVBnHp9R99DKVKOwnlaZ5kWUu","1iUGEQ63U3FTMwRbmMoYhnTQdMaGZFe2D",
  "1qgHxdUWkMerA-zTbAA7673JcT1HdjCiw","1FWhUoY3B7EF7u39GGGwUmx8EPqt49vIG","12lzwnfs90lxw3_SJ1xp-YvyawUA7LEN2",
  "1nRbvWZXtssB1KF2p4WYz3imsGyjLVRW8","1TlzlptaQt_9NQzGrlEXX2yae5vN2gAcK","1OD1jWDfq9rZNtEXEVgO_YIwE2n9Jz8HC",
  "1SoaHXk3i4lI9QTX4xLE4dLTq0hkqF9N7","1AlrhS4byOdlhgCSINF--okpiNAtcTGl9","1rTpWMkUND8uKRa6R-Iboy88mEP-TRasD",
  "15hOYp3f9-kDHZLwOjxk4JViI7ax9govt","1tONQYS65x2KnRwEuXrlNKi85FgttQ1Wn","1W9oNjIdYbScCKj9eInPOZUU5YadU_vU9",
  "1S9RGWP5L6fQ7yL97yeIUaOWWf9VQR7wf","1aW9_iaorGNKdNQ5owT4uxKtye47-eLcZ","19bFoEA2zyd3HYVNQ_M8S9lXleCRx2YGF",
  "1Ukwixsx_LL_qaXbi44V2nnvKNofbRohZ","1ZTC8jdJdIEHPZdWDORPRuhdJH0XwgxYK","1wy9sH_jRcYF0HdQbQQGz3nyEpI1LhNHa",
  "1vnYRcfsCHgkVHLjHSFm3V3f-CSvdEP-R","1P7mU-kyS963NiVXcfaQKCtb7uB7pCJyt","1RT-MDaG-Oa4o5dR5oDGcfsFDGdxvAAxs",
  "1uT3Y3wE_KjJPIiI72pUdL8qUJVbYOWkb","1evgwdy3yKS_3Ft6HralbUJhjBvDcu1ob","1Mgs8qQt2j2e47G3p43wbUoDHYhZetm5j",
  "1ysn4KC7Jl13DIJS6csSll2_Cf2-HIBs2","1EGqSRMfsFOX_g-X2CPYfg6UgdEdcczTO","1v_SJEcT7KvR2AGsNVpodBtE5BdbAavJ3",
  "1LFjC6qSGtWYYTxbzEeuqJ7lxMAlD5A5K","1YnegBDpFhwykknb3hjk3oxu78b53yyPY","1tB9ncLnXozw4SXmZP8oCL4vZZ15cAif3",
  "1vT3R5w78h47-KTbGtQQexpP1VgV4EhBm","1SVQIO7VAFgcwL3hKvqFDjh3n6kuAoSoP","1ZIjLQZWq5a0cX9DMHUkJW8J6IFrgecC3",
  "1Q7xiyEwvRKLwI-QlflLUuWZztS5vnJOD","1QUdZEgeZpA3eYXlFb2yNnWfdmxtB0BtT","1bS8TI2qE-Iqf0RkhzMpCsVxyvv00jSrL",
  "1s7aChoqW16pBNxWwYswnGgVS3yBPUZ7N","1yZUZ3NdQPQlHZhfGLl0c_lotyGU_fdjN","1XT-Ta6XEk03qTlSu2GRRrPK_Fm5SlwM4",
  "1B_6QAwsIptHfAlESya5uiwHerAAb0eW4","1Pe1R-ZRZ7cMo9OQucz7woRFzMyjrv8sx","1u_EgSTRMUJvnlJ1-5u2u6zjSE-CoyCvw",
  "1stihY4uWLKa5CBeV4I6zeX4mihD_DOs6","1FqBPc3sIaol2E33wSp4cUUPlZYQGDKbB","1tgCPZ55DWIPVq1Gnf5CpUq1wZDXQ5ggJ",
  "12lh50cF-flDMWOECn6POXbEKsgpQ1ITS","1xWJw0Bz8iQyawqVhCRY1SsMYIx7-Z6kg","1O8I-webNM0yLKSnzXQDmINuKeVjTb7IJ",
  "1Ax-8kgwRlztYjDe8CtqE4mX8cOz1RHGZ","1w37imUok26BBzx_kOsVh0N0ZWWFAPfl-","14mZmq6SWTJ_dtEnpyXQrYhpgFLK-s344",
  "1bSUa6XfTYYWQ-LTQMSXwG0sDD0jX1JEr","1QLsiXf2spXzjERzZdPwDihIrv5P4YsSR","1_qfu2fVPZBB0mDZCC0IFwYXjBNaTOMcm",
  "1lmlRbboWyt1eyK3QUqEQZkbpIICnuN4c","15EHLJE_2DdpKsJG-I7Dm1vRb9bg640QI","1Omb64GDPAFD8-dRjBt1g6os3At4colA8",
  "1Wq_JKXNPMU7qdEHDYIbCT9-KzS-vAqTY","1Rp8F8YJubsG0p3tZy_HHJ5l16gNTCPfg","1CStoWZLwnyQZKZtXBG2AZYLttl8cr9aA",
  "10xZnmi5B_36WZRfvDFkr2gx8barTrsGb","1T3r0t1IB1fWgfTX-zD25Iu8CU9DzzwkR","1iWAvP2sXDD2VsTnMzJ2Mrd52gYhfBDEg",
  "12uc8MJWF37A6ZuZyIGhd-uQNX-YaD4NT","1kjspJANyi44dg6AIof5bviH-EWgKZL0Z","10wnAve677IXRw-3EICWjNWb3Z55B52l4",
  "1rKfDPMWpvx78I2CbPTh7xf9WaJVPR36Q","1vaXV-RvORbSpcvM1HnXT2Gy-rxaommRK","1E429QQJjCloTr63TMxascCRcxxfhFcFt",
  "1cX2dboOpy9VYQV7KQATQd2swEoaFlc3I","1CST0mmG8RN-1XkD7mbV8yUN6flPVQrx7","1YFHwKx0HtGzILIIRtks4VCSmNulqD8oL",
  "1jZ3IGGEjGJWov35VLrS5grTpfjkxZKVv","15h5gLRk79tsEKlbvkkX-JT2Tkd42vLOL","1vr8Yw5LemEQl3BwrFwexEXgXoBiIX9I7",
  "1RpI-nNhh-3mk_UJJ3tDQrcsrQp48Emav","1YsCZRxQl1T_uSWPDz305zN1ZERReh_iI","16H_O3-f3vA1to-brBhpvzg43MLl3OBVz",
  "1Um4oFrgtmwIxvZDX8dHwzEx8pMZhqti6","1lTn5NoOmP5sb4NMdLpJ2L3rXLHhHaCmL","14x74QleGdpxo11mytseXNPhLNLM44p09",
  "1BaWJ6bnZrGHPP27LBpzMgAqUqmCL-En5"
];
const driveImg = (id, w) => `https://drive.google.com/thumbnail?id=${id}&sz=w${w || 1000}`;
/* even spread of `count` items across an array */
function spread(arr, count) {
  if (arr.length <= count) return arr.slice();
  const out = [];
  for (let i = 0; i < count; i++) out.push(arr[Math.round(i * (arr.length - 1) / (count - 1))]);
  return out;
}
const SLIDES  = spread(PHOTOS, 14);              // slideshow
const GALLERY = spread(PHOTOS, 12);              // gallery grid
const EVENT_PHOTOS = spread(PHOTOS, 3);          // Drive fallback — one per event card

/* ---- THEMED EVENT IMAGES ----
   Drop your AI-generated ceremony photos into the `images/` folder using
   these exact file names and they appear automatically. If a file is
   missing, the card falls back to the matching Drive engagement photo above.
   (Generate them from an engagement photo with the prompts in
   docs/event-image-prompts.md — any image tool such as Google Gemini / etc.) */
const EVENT_IMAGES = {
  0: "images/Haldi.png",   // Haldi card
  1: "images/Vivah.png",   // Vivah card
  2: "images/Pooja.png"    // Pooja card
};

/* ===================== SHORTHANDS ===================== */
const $  = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const body = document.body;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ===================== FLORAL SVG (envelope) ===================== */
function floralSVG() {
  const petal = (cx, cy, s) => {
    let g = "";
    for (let k = 0; k < 5; k++) {
      const a = (k / 5) * Math.PI * 2;
      g += `<ellipse cx="${(cx + Math.cos(a) * s).toFixed(1)}" cy="${(cy + Math.sin(a) * s).toFixed(1)}" rx="${(s*0.85).toFixed(1)}" ry="${(s*0.5).toFixed(1)}" transform="rotate(${(a*57.3).toFixed(0)} ${(cx + Math.cos(a) * s).toFixed(1)} ${(cy + Math.sin(a) * s).toFixed(1)})"/>`;
    }
    g += `<circle cx="${cx}" cy="${cy}" r="${(s*0.55).toFixed(1)}"/>`;
    return g;
  };
  const leaf = (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="11" ry="4.5" transform="rotate(${r} ${x} ${y})"/>`;
  const svg =
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 130">
  <g fill="#ffffff" fill-opacity="0.94">
    <path d="M120 128 C120 96 96 84 96 56 M120 128 C120 96 146 82 146 54 M120 118 C120 100 108 92 100 82 M120 112 C120 100 134 94 142 86" stroke="#fff" stroke-opacity="0.9" stroke-width="1.4" fill="none"/>
    ${petal(120,40,15)} ${petal(84,54,11)} ${petal(158,52,12)}
    ${petal(64,74,8)} ${petal(180,72,9)} ${petal(104,74,7)} ${petal(140,76,7)}
    ${leaf(78,90,-30)} ${leaf(164,90,30)} ${leaf(96,100,-15)} ${leaf(146,102,15)}
    ${leaf(54,64,-50)} ${leaf(190,62,50)}
  </g>
</svg>`;
  return "url('data:image/svg+xml;utf8," + encodeURIComponent(svg) + "')";
}
(function paintEnvelope() {
  const f = floralSVG();
  $$(".env-floral").forEach((el) => (el.style.backgroundImage = f));
})();

/* ===================== ENVELOPE SCREEN DECOR ===================== */
(function envDecor() {
  const host = $("#envDecor");
  if (!host || reduceMotion) return;
  const items = ["🌸","🌿","🌼","🦋","🍃","💮"];
  const pos = [[6,12],[24,6],[49,10],[59,12],[93,8],[10,26],[74,20],[3,86],[95,90],[16,72],[88,64]];
  pos.forEach((p, i) => {
    const s = document.createElement("span");
    s.className = "df";
    s.textContent = items[i % items.length];
    s.style.left = p[0] + "%"; s.style.top = p[1] + "%";
    s.style.fontSize = (14 + (i % 4) * 5) + "px";
    host.appendChild(s);
  });
})();

/* ===================== ENVELOPE OPEN ===================== */
const envelopeScreen = $("#envelopeScreen");
const envelope = $("#envelope");
const topControls = $("#topControls");
const musicToggle = $("#musicToggle");

function openInvitation() {
  if (envelope.classList.contains("opening")) return;
  envelope.classList.add("opening");
  tryPlayMusic();
  setTimeout(() => {
    envelopeScreen.classList.add("open");
    body.classList.remove("locked");
    topControls.classList.add("visible");
    musicToggle.classList.add("visible");
    window.scrollTo({ top: 0 });
    revealInView();
    startSlideshow();
  }, 800);
}
envelope.addEventListener("click", openInvitation);

/* ===================== MUSIC ===================== */
const bgMusic = $("#bgMusic");
const musicIcon = $("#musicIcon");
let musicOn = false;
function tryPlayMusic() {
  bgMusic.volume = 0.4;
  const p = bgMusic.play();
  if (p && p.then) {
    p.then(() => { musicOn = true; musicToggle.classList.add("playing"); musicIcon.textContent = "🔊"; })
     .catch(() => { musicOn = false; musicToggle.classList.remove("playing"); });
  }
}
musicToggle.addEventListener("click", () => {
  if (musicOn) { bgMusic.pause(); musicOn = false; musicToggle.classList.remove("playing"); musicIcon.textContent = "🔈"; }
  else tryPlayMusic();
});

/* ===================== DARK / LIGHT MODE ===================== */
const themeToggle = $("#themeToggle");
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  themeToggle.textContent = t === "dark" ? "☀️" : "🌙";
  try { localStorage.setItem("as-theme", t); } catch (e) {}
}
let savedTheme = "light";
try { savedTheme = localStorage.getItem("as-theme") || "light"; } catch (e) {}
applyTheme(savedTheme);
themeToggle.addEventListener("click", () =>
  applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"));

/* ===================== LANGUAGE (EN / MR) ===================== */
const I18N = {
  en: {
    tapOpen:"Tap the envelope to open your invitation",
    mantra:"॥ श्री गणेशाय नमः ॥",
    invite:"We cordially invite you to witness the beginning of our forever<br>and celebrate the wedding ceremony of",
    groom:"Akash", bride:"Salonee", with:"with",
    sonOf:"S/o", daughterOf:"D/o",
    dateLine:"Sunday · 26 July 2026", cityLine:"Yashodip Mangal Karyalaya, Satara", scroll:"Scroll",
    momentsTitle:"Our Moments", momentsCopy:"A glimpse of the journey that brought us here.",
    shubhVivah:"॥ Shubh Vivah ॥", countingDown:"Counting down to our special moment",
    scratchTitle:"Scratch the card to reveal our special day",
    saveTheDate:"Save the Date", vivahMuhurta:"Vivah Muhurta · 4:50 PM",
    scratchHint:"✦  SCRATCH TO REVEAL  ✦",
    days:"Days", hrs:"Hrs", min:"Min", sec:"Sec",
    celebrations:"Events Schedule",
    haldi:"Haldi", haldiSub:"A joyful morning of haldi, blessings and laughter",
    vivah:"Vivah", vivahSub:"The sacred seven vows under the floral mandap",
    pooja:"Pooja", poojaSub:"A blessing ceremony to complete the celebrations",
    dateLabel:"Date", timeLabel:"Time", venueLabel:"Venue", evening:"Evening",
    addCalendar:"Add to Google Calendar",
    noblePresence:"Awaiting Your Noble Presence",
    noblePresenceCopy:"Because meeting two souls requires twice the fun — and you!",
    withLove:"With Love", theFamilies:"The Families",
    groomSide:"Groom's Side", brideSide:"Bride's Side",
    gallery:"Photo Gallery", galleryCopy:"A glimpse of our moments together.",
    venueTitle:"The Wedding Venue", getDirections:"Get Directions",
    shareTitle:"Share the Joy", shareCopy:"Help us spread the happiness — share this invitation.",
    share:"Share", copyLink:"Copy Link",
    dateShort:"26th July 2026",
    todayWedding:"Today is Our Wedding!"
  },
  mr: {
    tapOpen:"निमंत्रण उघडण्यासाठी लिफाफ्यावर टॅप करा",
    mantra:"॥ श्री गणेशाय नमः ॥",
    invite:"आमच्या नव्या आयुष्याच्या प्रारंभाचे साक्षीदार होण्यासाठी<br>आणि विवाह सोहळ्यात सहभागी होण्यासाठी आपल्याला सादर निमंत्रण",
    groom:"आकाश", bride:"सलोनी", with:"आणि",
    sonOf:"सुपुत्र", daughterOf:"सुकन्या",
    dateLine:"रविवार · २६ जुलै २०२६", cityLine:"यशोदीप मंगल कार्यालय, सातारा", scroll:"स्क्रोल करा",
    momentsTitle:"आमचे क्षण", momentsCopy:"इथवर पोहोचवणाऱ्या प्रवासाची एक झलक.",
    shubhVivah:"॥ शुभ विवाह ॥", countingDown:"आमच्या खास क्षणाची प्रतीक्षा",
    scratchTitle:"आमचा खास दिवस पाहण्यासाठी कार्ड खरवडा",
    saveTheDate:"तारीख लक्षात ठेवा", vivahMuhurta:"विवाह मुहूर्त · दु. ४:५०",
    scratchHint:"✦  खरवडून पहा  ✦",
    days:"दिवस", hrs:"तास", min:"मिनिटे", sec:"सेकंद",
    celebrations:"कार्यक्रम पत्रिका",
    haldi:"हळदी", haldiSub:"हळद, आशीर्वाद आणि हास्याची आनंददायी सकाळ",
    vivah:"विवाह", vivahSub:"फुलांच्या मंडपाखाली सप्तपदीचे पवित्र वचन",
    pooja:"पूजा", poojaSub:"सोहळ्याची सांगता करणारा आशीर्वाद समारंभ",
    dateLabel:"दिनांक", timeLabel:"वेळ", venueLabel:"स्थळ", evening:"संध्याकाळी",
    addCalendar:"कॅलेंडरमध्ये जोडा",
    noblePresence:"आपल्या शुभ उपस्थितीच्या प्रतीक्षेत",
    noblePresenceCopy:"दोन जीवांची भेट म्हणजे दुप्पट आनंद — आणि त्यात तुम्हीही!",
    withLove:"सप्रेम", theFamilies:"आमची कुटुंबे",
    groomSide:"वरपक्ष", brideSide:"वधूपक्ष",
    gallery:"छायाचित्र दालन", galleryCopy:"आमच्या सोबतच्या काही क्षणांची झलक.",
    venueTitle:"विवाह स्थळ", getDirections:"दिशा मिळवा",
    shareTitle:"आनंद वाटा", shareCopy:"हा आनंद पसरवण्यास मदत करा — हे निमंत्रण शेअर करा.",
    share:"शेअर करा", copyLink:"लिंक कॉपी करा",
    dateShort:"२६ जुलै २०२६",
    todayWedding:"आज आमचा विवाह आहे!"
  }
};
let lang = "en";
function setLang(next) {
  lang = next;
  body.classList.toggle("mr", next === "mr");
  document.documentElement.lang = next === "mr" ? "mr" : "en";
  const dict = I18N[next];
  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  $$(".lang-switch button").forEach((b) => b.classList.toggle("active", b.dataset.lang === next));
  updateCountdown();
}
$$(".lang-switch button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

/* ===================== FLOATING FLOWERS ===================== */
const flowersLayer = $("#floatingFlowers");
const FLOWERS = ["🌸","🌼","🦋","🌿","🍃","💮","🌸","🦋"];
function spawnFlowers(n) {
  if (reduceMotion) return;
  for (let i = 0; i < n; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.textContent = FLOWERS[i % FLOWERS.length];
    p.style.left = (3 + Math.floor((i / n) * 94) + (i % 3) * 2) + "vw";
    p.style.animationDuration = (11 + (i % 5) * 2.5) + "s";
    p.style.animationDelay = ((i % 8) * 1.6) + "s";
    p.style.fontSize = (15 + (i % 4) * 6) + "px";
    flowersLayer.appendChild(p);
  }
}
spawnFlowers(18);

/* ===================== SCROLL REVEAL ===================== */
$$(".section, .countdown-band").forEach((el, i) => { if (i > 0) el.classList.add("reveal"); });
const reveals = $$(".reveal");
function revealInView() {
  const trigger = window.innerHeight * 0.9;
  reveals.forEach((el) => { if (el.getBoundingClientRect().top < trigger) el.classList.add("visible"); });
}
if ("IntersectionObserver" in window && !reduceMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  reveals.forEach((el) => io.observe(el));
} else reveals.forEach((el) => el.classList.add("visible"));
window.addEventListener("scroll", revealInView, { passive: true });

/* ===================== COUNTDOWN ===================== */
const cd = { days:$("#days"), hours:$("#hours"), minutes:$("#minutes"), seconds:$("#seconds") };
let firedConfetti = false;
function setUnit(node, v) {
  const s = String(v).padStart(2, "0");
  if (node.textContent !== s) { node.textContent = s; node.classList.add("tick"); setTimeout(() => node.classList.remove("tick"), 300); }
}
function updateCountdown() {
  const dist = WEDDING_DATE - Date.now();
  if (dist <= 0) {
    $("#countdown").innerHTML =
      "<div style='grid-column:1/-1;border:0;background:none'><strong>🎉</strong><span>" +
      I18N[lang].todayWedding + "</span></div>";
    if (!firedConfetti) { firedConfetti = true; launchConfetti(6000); }
    return;
  }
  const day=86400000, hour=3600000, minute=60000;
  setUnit(cd.days, Math.floor(dist/day));
  setUnit(cd.hours, Math.floor((dist%day)/hour));
  setUnit(cd.minutes, Math.floor((dist%hour)/minute));
  setUnit(cd.seconds, Math.floor((dist%minute)/1000));
}
updateCountdown();
setInterval(updateCountdown, 1000);

/* ===================== CONFETTI ===================== */
const canvas = $("#confettiCanvas");
const ctx = canvas.getContext("2d");
let confettiPieces = [], confettiTimer = null;
function launchConfetti(duration) {
  if (reduceMotion) return;
  canvas.classList.add("active");
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const colors = ["#c2295b","#c1974a","#7f9160","#d8b878","#e86a95","#a9ba90"];
  confettiPieces = Array.from({ length: 160 }, (_, i) => ({
    x: Math.random()*canvas.width, y: Math.random()*-canvas.height,
    r: 4+Math.random()*6, c: colors[i%colors.length],
    vy: 2+Math.random()*4, vx: -2+Math.random()*4, rot: Math.random()*6, vr: -0.2+Math.random()*0.4
  }));
  const end = Date.now() + (duration || 5000);
  function frame() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    confettiPieces.forEach((p) => {
      p.y += p.vy; p.x += p.vx; p.rot += p.vr;
      if (p.y > canvas.height) p.y = -10;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.c; ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r*1.6); ctx.restore();
    });
    if (Date.now() < end) confettiTimer = requestAnimationFrame(frame);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.classList.remove("active"); }
  }
  cancelAnimationFrame(confettiTimer); frame();
}

/* ===================== PARTY POPPER BURST ===================== */
function launchPopper() {
  if (reduceMotion) return;
  const cv = canvas, c = ctx;
  cv.classList.add("active");
  const W = cv.width = window.innerWidth, H = cv.height = window.innerHeight;
  const colors = ["#c2295b","#c1974a","#7f9160","#d8b878","#e86a95","#a9ba90","#8f1a3f","#ffffff"];
  const parts = [];
  const burst = (ox, oy, a0, a1) => {
    for (let i = 0; i < 120; i++) {
      const a = a0 + Math.random() * (a1 - a0), sp = 9 + Math.random() * 12;
      parts.push({ x: ox, y: oy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        r: 4 + Math.random() * 6, c: colors[(Math.random() * colors.length) | 0],
        rot: Math.random() * 6, vr: -0.3 + Math.random() * 0.6 });
    }
  };
  burst(W * 0.06, H * 0.96, -1.45, -0.55);   // bottom-left  -> up & right
  burst(W * 0.94, H * 0.96, -2.59, -1.69);   // bottom-right -> up & left
  const end = Date.now() + 2800;
  (function frame() {
    c.clearRect(0, 0, W, H);
    parts.forEach((p) => {
      p.vy += 0.28; p.vx *= 0.995; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      c.save(); c.translate(p.x, p.y); c.rotate(p.rot);
      c.fillStyle = p.c; c.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.6); c.restore();
    });
    if (Date.now() < end) requestAnimationFrame(frame);
    else { c.clearRect(0, 0, W, H); cv.classList.remove("active"); }
  })();
}

/* ===================== SCRATCH-TO-REVEAL (Save the Date) ===================== */
(function scratchCard() {
  const stage = $("#scratchStage"), cvs = $("#scratchCanvas"), section = $("#savedate");
  if (!stage || !cvs || !section) return;
  let revealed = false;
  function reveal() {
    if (revealed) return; revealed = true;
    cvs.classList.add("gone");
    section.classList.add("revealed");
    launchPopper();
  }
  stage.setAttribute("tabindex", "0");
  stage.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); reveal(); } });

  if (reduceMotion) { reveal(); return; }   // no scratching for reduced-motion users

  const c = cvs.getContext("2d");
  function paint() {
    const r = stage.getBoundingClientRect();
    cvs.width = Math.max(1, Math.round(r.width));
    cvs.height = Math.max(1, Math.round(r.height));
    const g = c.createLinearGradient(0, 0, cvs.width, cvs.height);
    g.addColorStop(0, "#e7c37a"); g.addColorStop(.5, "#c79a4a"); g.addColorStop(1, "#dcae5f");
    c.globalCompositeOperation = "source-over";
    c.fillStyle = g; c.fillRect(0, 0, cvs.width, cvs.height);
    // subtle sheen
    c.fillStyle = "rgba(255,255,255,.14)";
    c.fillRect(0, 0, cvs.width, cvs.height * 0.4);
    c.fillStyle = "rgba(255,248,230,.92)";
    c.font = "600 16px 'Cormorant Garamond', Georgia, serif";
    c.textAlign = "center"; c.textBaseline = "middle";
    c.fillText((I18N[lang] && I18N[lang].scratchHint) || "SCRATCH TO REVEAL", cvs.width / 2, cvs.height / 2);
  }
  paint();
  window.addEventListener("resize", () => { if (!revealed) paint(); });

  let drawing = false, moves = 0;
  function at(e) {
    const r = cvs.getBoundingClientRect();
    return { x: (e.clientX - r.left) * (cvs.width / r.width), y: (e.clientY - r.top) * (cvs.height / r.height) };
  }
  function scratch(e) {
    if (!drawing || revealed) return;
    e.preventDefault();
    const p = at(e);
    c.globalCompositeOperation = "destination-out";
    c.beginPath(); c.arc(p.x, p.y, 28, 0, Math.PI * 2); c.fill();
    if (++moves % 6 === 0) checkProgress();
  }
  function checkProgress() {
    try {
      const data = c.getImageData(0, 0, cvs.width, cvs.height).data;
      let clear = 0, seen = 0;
      for (let i = 3; i < data.length; i += 32) { seen++; if (data[i] === 0) clear++; }
      if (seen && clear / seen > 0.5) reveal();
    } catch (err) { /* ignore */ }
  }
  cvs.addEventListener("pointerdown", (e) => { drawing = true; try { cvs.setPointerCapture(e.pointerId); } catch (x) {} scratch(e); });
  cvs.addEventListener("pointermove", scratch);
  window.addEventListener("pointerup", () => { drawing = false; });
})();

/* ===================== SLIDESHOW (animated photos) ===================== */
const slideStage = $("#slideStage");
const slideDots  = $("#slideDots");
let slideEls = [], slideLoaded = [], slideIndex = 0, slideTimer = null, slideStarted = false;

function buildSlideshow() {
  if (!SLIDES.length) {
    slideStage.innerHTML = '<div class="slide-empty"><span>📷</span>Add your photo IDs in <b>script.js</b><br>(the PHOTOS list)</div>';
    $("#slidePrev").style.display = $("#slideNext").style.display = "none";
    return;
  }
  SLIDES.forEach((id, i) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    const img = document.createElement("img");
    img.className = "slide-img"; img.alt = "Wedding photo " + (i + 1);
    img.addEventListener("error", () => { img.style.opacity = ".25"; });
    slide.appendChild(img);
    slideStage.appendChild(slide);
    slideEls.push(slide); slideLoaded.push(false);

    const dot = document.createElement("button");
    dot.type = "button"; dot.addEventListener("click", () => { showSlide(i); restartSlideTimer(); });
    slideDots.appendChild(dot);
  });
  showSlide(0);
}
function loadSlide(i) {
  if (i < 0 || i >= slideEls.length || slideLoaded[i]) return;
  slideEls[i].querySelector("img").src = driveImg(SLIDES[i], 1400);
  slideLoaded[i] = true;
}
function showSlide(i) {
  slideIndex = (i + slideEls.length) % slideEls.length;
  loadSlide(slideIndex); loadSlide(slideIndex + 1); loadSlide(slideIndex - 1 + slideEls.length);
  slideEls.forEach((el, k) => el.classList.toggle("active", k === slideIndex));
  slideDots.querySelectorAll("button").forEach((d, k) => d.classList.toggle("on", k === slideIndex));
}
function nextSlide(step) { showSlide(slideIndex + (step || 1)); }
function restartSlideTimer() {
  if (reduceMotion || slideEls.length < 2) return;
  clearInterval(slideTimer);
  slideTimer = setInterval(() => nextSlide(1), 4500);
}
function startSlideshow() {
  if (slideStarted) return; slideStarted = true;
  restartSlideTimer();
}
$("#slidePrev").addEventListener("click", () => { nextSlide(-1); restartSlideTimer(); });
$("#slideNext").addEventListener("click", () => { nextSlide(1); restartSlideTimer(); });
const slideshowEl = $("#slideshow");
slideshowEl.addEventListener("mouseenter", () => clearInterval(slideTimer));
slideshowEl.addEventListener("mouseleave", restartSlideTimer);
buildSlideshow();

/* ===================== EVENT-CARD PHOTOS ===================== */
/* Try each source in order; use the first that loads (local themed image
   first, then the Drive engagement photo). */
function setCardPhoto(card, ph, sources) {
  let i = 0;
  (function tryNext() {
    if (i >= sources.length) { card.classList.add("event-photo-missing"); return; }
    const src = sources[i++];
    const im = new Image();
    im.onload  = () => { ph.style.backgroundImage = `url('${src}')`; };
    im.onerror = tryNext;
    im.src = src;
  })();
}
$$(".event-card").forEach((card) => {
  const idx = parseInt(card.getAttribute("data-photo"), 10) || 0;
  const ph = card.querySelector(".ec-photo");
  if (!ph) return;
  const sources = [];
  if (EVENT_IMAGES[idx]) sources.push(EVENT_IMAGES[idx]);      // local themed image
  const id = EVENT_PHOTOS[idx % EVENT_PHOTOS.length];
  if (id) sources.push(driveImg(id, 900));                     // Drive fallback
  setCardPhoto(card, ph, sources);
});

/* ===================== GALLERY + LIGHTBOX ===================== */
const galleryGrid = $("#galleryGrid");
const lightbox = $("#lightbox"), lbImg = $("#lbImg");
let lbIndex = 0;
function buildGallery() {
  galleryGrid.innerHTML = "";
  if (GALLERY.length) {
    GALLERY.forEach((id, i) => {
      const img = document.createElement("img");
      img.src = driveImg(id, 600); img.loading = "lazy"; img.alt = "Wedding photo " + (i+1);
      img.addEventListener("error", () => img.remove());
      img.addEventListener("click", () => openLightbox(i));
      galleryGrid.appendChild(img);
    });
  } else {
    for (let i = 0; i < 4; i++) {
      const d = document.createElement("div");
      d.className = "g-empty";
      d.innerHTML = "<span>📷</span>Add your photos<br>(see README)";
      galleryGrid.appendChild(d);
    }
  }
}
function openLightbox(i) {
  lbIndex = i; lbImg.src = driveImg(GALLERY[i], 1600);
  lightbox.classList.add("open"); lightbox.setAttribute("aria-hidden","false");
}
function closeLightbox() { lightbox.classList.remove("open"); lightbox.setAttribute("aria-hidden","true"); }
function lbStep(n) { if (!GALLERY.length) return; lbIndex = (lbIndex + n + GALLERY.length) % GALLERY.length; lbImg.src = driveImg(GALLERY[lbIndex],1600); }
$("#lbClose").addEventListener("click", closeLightbox);
$("#lbPrev").addEventListener("click", () => lbStep(-1));
$("#lbNext").addEventListener("click", () => lbStep(1));
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lbStep(-1);
  if (e.key === "ArrowRight") lbStep(1);
});
buildGallery();

/* ===================== MAP ===================== */
$("#mapLink").href = GOOGLE_MAPS_LINK;
$("#mapFrame").src = "https://www.google.com/maps?q=" + encodeURIComponent(VENUE_QUERY) + "&output=embed";

/* ===================== ADD TO GOOGLE CALENDAR ===================== */
$("#calendarBtn").addEventListener("click", () => {
  const url = "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" + encodeURIComponent("Akash & Salonee — Wedding (Vivah)") +
    "&dates=20260726T112000Z/20260726T132000Z" +
    "&details=" + encodeURIComponent("With the blessings of our families. Vivah Muhurta at 4:50 PM.") +
    "&location=" + encodeURIComponent("Yashodip Mangal Karyalaya, Satara Road (Palshi), Ta. Koregaon, Dist. Satara");
  window.open(url, "_blank", "noopener");
});

/* ===================== SHARE ===================== */
const shareText = "You're invited to the wedding of Akash & Salonee — Sunday, 26 July 2026, Yashodip Mangal Karyalaya, Satara. 💍";
const shareUrl = location.href;
$("#shareWhatsApp").addEventListener("click", () =>
  window.open("https://wa.me/?text=" + encodeURIComponent(shareText + " " + shareUrl), "_blank", "noopener"));
$("#shareNative").addEventListener("click", async () => {
  if (navigator.share) { try { await navigator.share({ title:"Akash & Salonee Wedding", text:shareText, url:shareUrl }); } catch(e){} }
  else copyToClipboard();
});
$("#copyLink").addEventListener("click", copyToClipboard);
function copyToClipboard() {
  const done = () => { const b = $("#copyLink"); const t = b.innerHTML; b.innerHTML = "✅ Copied!"; setTimeout(() => b.innerHTML = t, 1800); };
  if (navigator.clipboard) navigator.clipboard.writeText(shareUrl).then(done).catch(done);
  else done();
}

/* ===================== PWA ===================== */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}

/* initial reveal pass */
revealInView();
