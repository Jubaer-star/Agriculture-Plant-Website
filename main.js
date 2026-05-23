// FILTER 
function filterPlants() {
 const q = document.getElementById('searchInput').value.toLowerCase();
 const cat = document.getElementById('categoryFilter').value;
 filtered = plants.filter(p => {
 const matchQ = !q || p.name.toLowerCase().includes(q) || p.bengali.includes(q) || p.sci.toLowerCase().includes(q) || p.uses.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.family.toLowerCase().includes(q) || p.type.includes(q);
 const matchCat = !cat || p.type === cat;
 return matchQ && matchCat;
 });
 currentPage = 1;
 renderPlants();
}

// STATE 
let currentPage = 1;
const ITEMS_PER_PAGE = 20;
let filtered = [];
let counter = 0;
let sessionExplored = 0;
let currentUser = null;


// WIKIPEDIA IMAGE CACHE 
const imgCache = {};

// Try iNaturalist first (real plant photos, no API key), then Wikimedia Commons as fallback
async function loadPlantImage(plantId, sciName) {
 if (imgCache[plantId] !== undefined) return imgCache[plantId];

 // 1. iNaturalist — community plant photos, no API key needed
 try {
 const inatUrl = `https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(sciName)}&rank=species&per_page=1`;
 const res = await fetch(inatUrl);
 const data = await res.json();
 const taxon = data.results?.[0];
 const img = taxon?.default_photo?.medium_url || null;
 if (img) { imgCache[plantId] = img; return img; }
 } catch {}

 // 2. Wikimedia Commons — Wikipedia page thumbnail as fallback
 try {
 const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(sciName.replace(/ /g,"_"))}&prop=pageimages&format=json&pithumbsize=500&origin=*`;
 const res = await fetch(wikiUrl);
 const data = await res.json();
 const pages = data.query.pages;
 const img = pages[Object.keys(pages)[0]]?.thumbnail?.source || null;
 imgCache[plantId] = img;
 return img;
 } catch {}

 imgCache[plantId] = null;
 return null;
}

async function applyPlantImages(pagePlants) {
 await Promise.all(pagePlants.map(async p => {
 const container = document.getElementById(`card-img-${p.id}`);
 if (!container) return;
 const imgUrl = await loadPlantImage(p.id, p.sci);
 if (imgUrl) {
 const badge = container.querySelector(".plant-card-badge").outerHTML;
 container.innerHTML = `<img src="${imgUrl}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">${badge}`;
 }
 }));
}
// Generate default extra data for plants 11-100
function getDefaultExtra(p) {
 const monthMap = {tree:"Year-round",herb:"Oct–Mar",fruit:"Varies",crop:"Season-specific",flower:"Spring/Monsoon",medicinal:"Year-round",shrub:"Year-round",vine:"Warm months"};
 return {
 production:[
 {icon:"",label:"When to Produce",val:`${p.name} is harvested during: ${p.season}. Timing depends on local climate and variety.`},
 {icon:"",label:"Where Produced",val:`Primary production region: ${p.dist}. ${p.habitat} conditions required.`},
 {icon:"",label:"Planting Season",val:"June–August (monsoon) for most varieties. Saplings/seeds planted in prepared beds or field."},
 {icon:"",label:"Production Scale",val:`Cultivated across Bangladesh for ${p.type === 'crop' ? 'commercial' : 'domestic/medicinal'} use. Important part of local agricultural economy.`}
 ],
 varieties:[
 {name:`Local Deshi (দেশি)`,best:true,why:` BEST — Traditional local variety of ${p.name}. Highest flavor/medicinal quality. Adapted to Bangladesh's climate over centuries.`},
 {name:"Improved / BARI Variety",best:false,why:"Government-developed high-yielding variety. Better disease resistance and productivity for commercial farmers."},
 {name:"Regional Specialty",best:false,why:`Distinctive variety from ${p.dist} with unique characteristics prized by local communities.`}
 ],
 care:[
 {icon:"",label:"Watering",text:`Water ${p.type === 'herb' || p.type === 'crop' ? 'regularly (every 3–5 days)' : 'weekly when young, less once established'}. Avoid waterlogging around roots.`},
 {icon:"",label:"Soil",text:"Well-drained loamy soil, pH 6.0–7.5. Incorporate organic compost before planting for best results."},
 {icon:"",label:"Fertilizing",text:"Apply NPK fertilizer (10:10:10) at planting and again mid-season. Supplement with organic compost annually."},
 {icon:"",label:"Pruning / Maintenance",text:"Remove dead or diseased parts promptly. Prune to shape and improve air circulation. Annual light pruning recommended."},
 {icon:"",label:"Sunlight",text:"Requires full sun to partial shade (6+ hours daily). Inadequate sunlight reduces yield and medicinal potency."}
 ],
 cure:[
 {icon:"",label:"Insect Pests",text:"Inspect regularly for caterpillars, aphids, or borers. Spray neem oil (5ml/L) as first-line organic treatment."},
 {icon:"",label:"Fungal Disease",text:"Ensure good drainage and air circulation. Apply copper-based fungicide (0.3%) if leaf spots or wilting appear."},
 {icon:"",label:"Nutrient Deficiency",text:"Yellowing leaves indicate nitrogen deficiency — apply urea (2g/L) foliar spray. Purple leaves indicate phosphorus shortage."},
 {icon:"",label:"Viral/Bacterial Issues",text:"Remove and destroy infected plant parts. Control insect vectors. Maintain sanitation by removing fallen debris."}
 ]
 };
}

// COUNTER 
function changeCounter(n) {
 counter = Math.max(0, counter + n);
 document.getElementById('counterNum').textContent = counter;
}
function resetCounter() {
 counter = 0;
 document.getElementById('counterNum').textContent = 0;
}

// NAV 
function toggleNav() {
 document.getElementById('navLinks').classList.toggle('open');
}
function navScrollTo(id) {
 document.getElementById(id).scrollIntoView({behavior: 'smooth'});
 document.getElementById('navLinks').classList.remove('open');
}

// FORM VALIDATION 
function togglePw(id, btnId) {
 const inp = document.getElementById(id);
 inp.type = inp.type === 'password' ? 'text' : 'password';
}

function submitForm() {
 let valid = true;

 const clearError = (field, errId) => {
 document.getElementById(field).classList.remove('error');
 document.getElementById(errId).classList.remove('show');
 };
 const showError = (field, errId) => {
 document.getElementById(field).classList.add('error');
 document.getElementById(errId).classList.add('show');
 valid = false;
 };

 clearError('firstName','firstNameErr'); clearError('lastName','lastNameErr');
 clearError('email','emailErr'); clearError('password','passErr');
 clearError('confirmPass','confirmPassErr'); clearError('role','roleErr');
 document.getElementById('notifErr').classList.remove('show');
 document.getElementById('termsErr').classList.remove('show');
 document.getElementById('formAlert').className = 'form-alert';

 const fn = document.getElementById('firstName').value.trim();
 const ln = document.getElementById('lastName').value.trim();
 const em = document.getElementById('email').value.trim();
 const pw = document.getElementById('password').value;
 const cpw = document.getElementById('confirmPass').value;
 const role = document.getElementById('role').value;
 const notif = document.querySelector('input[name="notif"]:checked');
 const agree = document.getElementById('agreeTerms').checked;

 if (!fn) showError('firstName','firstNameErr');
 if (!ln) showError('lastName','lastNameErr');
 if (!em || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) showError('email','emailErr');
 if (!pw || pw.length < 8) showError('password','passErr');
 if (pw !== cpw) showError('confirmPass','confirmPassErr');
 if (!role) showError('role','roleErr');
 if (!notif) { document.getElementById('notifErr').classList.add('show'); valid = false; }
 if (!agree) { document.getElementById('termsErr').classList.add('show'); valid = false; }

 const alert = document.getElementById('formAlert');
 if (!valid) {
 alert.className = 'form-alert error-alert';
 alert.textContent = ' Please fix the errors above before submitting.';
 alert.scrollIntoView({behavior: 'smooth', block: 'center'});
 return;
 }

 alert.className = 'form-alert success';
 alert.textContent = ` Welcome to BanglaBotanica, ${fn}! Your account has been created successfully.`;
 alert.scrollIntoView({behavior: 'smooth', block: 'center'});
}

// THEME 
function setTheme(theme, btn) {
 document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
 btn.classList.add('active');
 const root = document.documentElement;
 const themes = {
 default: { '--green-deep':'#1a3d2b','--green-mid':'#2d6a4f','--green-bright':'#52b788','--green-light':'#95d5b2','--green-pale':'#d8f3dc','--gold':'#e9c46a','--cream':'#fefae0' },
 golden: { '--green-deep':'#3d2b00','--green-mid':'#7a5c00','--green-bright':'#e9a100','--green-light':'#ffd166','--green-pale':'#fff5d6','--gold':'#e76f51','--cream':'#fffbf0' },
 ocean: { '--green-deep':'#0a3d62','--green-mid':'#1a6a8a','--green-bright':'#2196f3','--green-light':'#90caf9','--green-pale':'#e3f2fd','--gold':'#ff9800','--cream':'#f0f8ff' },
 earth: { '--green-deep':'#4a2c0a','--green-mid':'#7d4a1a','--green-bright':'#c17f3b','--green-light':'#e8c48a','--green-pale':'#faf0e0','--gold':'#d4a017','--cream':'#fdf5e6' }
 };
 const t = themes[theme] || themes.default;
 Object.entries(t).forEach(([k,v]) => root.style.setProperty(k,v));
}

// DARK MODE 
function toggleDark() {
 const isDark = document.body.classList.toggle('dark');
 document.getElementById('darkIcon').textContent = isDark ? 'Dark' : 'Light';
 localStorage.setItem('bb_dark', isDark ? '1' : '0');
}
(function initDark() {
 if (localStorage.getItem('bb_dark') === '1') {
 document.body.classList.add('dark');
 document.getElementById('darkIcon').textContent = 'Dark';
 }
})();


// TOAST NOTIFICATION 
function showToast(msg, isError = false) {
 const existing = document.getElementById('bb-toast');
 if (existing) existing.remove();
 const t = document.createElement('div');
 t.id = 'bb-toast';
 t.textContent = msg;
 Object.assign(t.style, {
 position:'fixed', bottom:'1.5rem', right:'1.5rem', zIndex:'9999',
 background: isError ? '#ef4444' : '#1a3d2b',
 color:'white', padding:'12px 20px', borderRadius:'12px',
 fontSize:'0.9rem', fontWeight:'600', boxShadow:'0 8px 24px rgba(0,0,0,0.25)',
 animation:'fadeInUp 0.3s ease', maxWidth:'340px'
 });
 document.body.appendChild(t);
 setTimeout(() => t.remove(), 2800);
}




// SCROLL REVEAL 
const observer = new IntersectionObserver(entries => {
 entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// INIT 
// Initialisation is handled in index.html after JSON data loads via loadData()