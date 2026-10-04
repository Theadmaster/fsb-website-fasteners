/* ==========================================================================
   SFB Fasteners — site behaviour
   ========================================================================== */

/* ---------- Shared chrome (header / footer / inquiry bar) ---------- */
const NAV = [
  { id: 'home', href: 'index.html', label: 'Home' },
  { id: 'products', href: 'products.html', label: 'Products' },
  { id: 'about', href: 'about.html', label: 'About Us' },
  { id: 'contact', href: 'contact.html', label: 'Contact & RFQ' }
];

const LOGO_SVG = `
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect width="48" height="48" rx="10" fill="#10263f"/>
  <g fill="none" stroke="#fff" stroke-width="2.4" stroke-linejoin="round">
    <polygon points="24,10 35,17.5 35,30.5 24,38 13,30.5 13,17.5"/>
    <circle cx="24" cy="24" r="6.5"/>
  </g>
  <circle cx="24" cy="24" r="2.6" fill="#e87722"/>
</svg>`;

function renderChrome() {
  const page = document.body.dataset.page || '';
  const header = document.getElementById('site-header');
  if (header) {
    header.innerHTML = `
    <div class="topbar">
      <div class="container">
        <div class="tb-links">
          <span class="tb-item">✉ victor.nicejob@gmail.com</span>
          <span class="tb-item">☎ WhatsApp +86 198 5818 5202</span>
        </div>
        <div class="tb-links">
          <span class="tb-item">ISO 9001 : 2015 Certified Manufacturer</span>
          <span class="tb-item">Mon – Sat · 8:00–18:00 (GMT+8)</span>
        </div>
      </div>
    </div>
    <div class="container header-inner">
      <a class="brand" href="index.html">
        <span class="brand-mark">${LOGO_SVG}</span>
        <span class="brand-text">
          <span class="brand-name">SFB <span>Fasteners</span></span>
          <span class="brand-tag">Nuts &amp; Washers Manufacturer</span>
        </span>
      </a>
      <nav class="main-nav" id="mainNav">
        ${NAV.map(n => `<a href="${n.href}" class="${page === n.id ? 'active' : ''}">${n.label}</a>`).join('')}
      </nav>
      <a class="btn header-cta" href="contact.html">Request a Quote</a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>`;

    const t = document.getElementById('navToggle');
    t.addEventListener('click', () => document.getElementById('mainNav').classList.toggle('open'));
  }

  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML = `
    <div class="container footer-main">
      <div class="footer-brand">
        <a class="brand" href="index.html">
          <span class="brand-mark">${LOGO_SVG}</span>
          <span class="brand-text"><span class="brand-name">SFB <span>Fasteners</span></span></span>
        </a>
        <p>Manufacturer and exporter of industrial nuts and washers, supplying DIN / ISO / ASTM standard fasteners to distributors and OEM buyers in 40+ countries.</p>
        <div class="footer-cert"><span>ISO 9001</span><span>EN 10204 3.1</span><span>RoHS · REACH</span></div>
      </div>
      <div>
        <h4>Products</h4>
        <ul>
          <li><a href="products.html?cat=nuts">Hex &amp; Heavy Hex Nuts</a></li>
          <li><a href="products.html?cat=nuts&amp;type=lock">Lock &amp; Flange Nuts</a></li>
          <li><a href="products.html?cat=washers">Flat &amp; Fender Washers</a></li>
          <li><a href="products.html?cat=washers&amp;type=spring">Spring &amp; Lock Washers</a></li>
          <li><a href="products.html">Full Catalogue</a></li>
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About SFB</a></li>
          <li><a href="about.html#quality">Quality Control</a></li>
          <li><a href="about.html#certificates">Certificates</a></li>
          <li><a href="contact.html">Contact &amp; RFQ</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li>No. 128 Haitong Industrial Road,<br>Ningbo 315000, Zhejiang, China</li>
          <li>✉ <a href="mailto:victor.nicejob@gmail.com">victor.nicejob@gmail.com</a></li>
          <li>☎ <a href="tel:+8619858185202">WhatsApp +86 198 5818 5202</a></li>
          <li>⌁ WhatsApp / WeChat: +86 198 5818 5202</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container" style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <span>© ${new Date().getFullYear()} SFB Fasteners Co., Ltd. All rights reserved.</span>
        <span>Nuts &amp; Washers · DIN / ISO / ASTM Standards · Factory-Direct Export</span>
      </div>
    </div>`;
  }

  /* sticky mobile inquiry bar */
  if (page !== 'contact') {
    const bar = document.createElement('div');
    bar.className = 'inquiry-bar';
    bar.innerHTML = `<a class="btn" href="contact.html">Send Inquiry / RFQ</a>`;
    document.body.appendChild(bar);
  }
}

/* ---------- Product card ---------- */
function productCard(p) {
  return `
  <article class="p-card">
    <a class="thumb" href="product.html?id=${p.id}">${DRAWINGS[p.drawing]()}</a>
    <div class="body">
      <div class="std">${p.standards.join(' · ')}</div>
      <h3><a href="product.html?id=${p.id}" style="color:inherit;text-decoration:none">${p.name}</a></h3>
      <div class="specs">
        <b>Size:</b> ${p.sizeNote}<br>
        <b>Material:</b> ${p.materials.map(m => MATERIALS[m]).join(', ')}<br>
        <b>Finish:</b> ${p.finishes.map(f => FINISHES[f]).join(', ')}
      </div>
      <div class="foot">
        <a class="btn" href="contact.html?product=${encodeURIComponent(p.name + ' (' + p.standards[0] + ')')}">Get Quote</a>
        <a class="details" href="product.html?id=${p.id}">Details →</a>
      </div>
    </div>
  </article>`;
}

/* ---------- Home: featured products & categories ---------- */
function renderHome() {
  const catWrap = document.getElementById('catGrid');
  if (catWrap) {
    catWrap.innerHTML = Object.entries(CATEGORIES).map(([key, c]) => `
      <a class="cat-card" href="products.html?cat=${key}">
        <span class="thumb">${DRAWINGS[c.icon]()}</span>
        <span class="body">
          <h3>${c.name}</h3>
          <span class="desc">${c.desc}</span>
          <span class="link-more">Browse ${c.items} product lines →</span>
        </span>
      </a>`).join('');
  }
  const feat = document.getElementById('featuredGrid');
  if (feat) {
    feat.innerHTML = PRODUCTS.filter(p => p.hot).map(productCard).join('');
  }
}

/* ---------- Catalogue page ---------- */
function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const params = new URLSearchParams(location.search);
  const state = {
    q: params.get('q') || '',
    cat: params.get('cat') || 'all',
    material: new Set(),
    finish: new Set(),
    std: new Set()
  };

  /* build filter UI */
  const buildRows = (box, dict, set) => {
    box.innerHTML = Object.entries(dict).map(([k, v]) => `
      <label class="frow"><input type="checkbox" value="${k}" ${set.has(k) ? 'checked' : ''}>
      <span>${v}</span></label>`).join('');
    box.querySelectorAll('input').forEach(i =>
      i.addEventListener('change', () => {
        i.checked ? set.add(i.value) : set.delete(i.value);
        apply();
      }));
  };
  buildRows(document.getElementById('fMaterial'), MATERIALS, state.material);
  buildRows(document.getElementById('fFinish'), FINISHES, state.finish);
  document.getElementById('fStd').innerHTML = ['DIN / ISO', 'ASTM / ASME'].map(s => `
    <label class="frow"><input type="checkbox" value="${s}"><span>${s}</span></label>`).join('');
  document.querySelectorAll('#fStd input').forEach(i =>
    i.addEventListener('change', () => apply()));

  const searchInput = document.getElementById('searchInput');
  searchInput.value = state.q;
  let deb;
  searchInput.addEventListener('input', () => {
    clearTimeout(deb);
    deb = setTimeout(() => { state.q = searchInput.value.trim(); apply(); }, 250);
  });

  document.getElementById('resetFilters').addEventListener('click', () => {
    state.q = ''; searchInput.value = '';
    state.cat = 'all'; state.material.clear(); state.finish.clear(); state.std.clear();
    document.querySelectorAll('.filters input').forEach(i => { if (i.type === 'checkbox') i.checked = false; });
    apply();
  });

  /* category nav counts */
  const catList = document.getElementById('catList');
  catList.innerHTML = `
    <label class="frow"><input type="radio" name="cat" value="all" ${state.cat === 'all' ? 'checked' : ''}><span>All Products</span><span class="count">${PRODUCTS.length}</span></label>
    ${Object.entries(CATEGORIES).map(([k, c]) => `
      <label class="frow"><input type="radio" name="cat" value="${k}" ${state.cat === k ? 'checked' : ''}>
      <span>${c.name}</span><span class="count">${c.items}</span></label>`).join('')}`;
  catList.querySelectorAll('input').forEach(i =>
    i.addEventListener('change', () => { state.cat = i.value; apply(); }));

  function matches() {
    const q = state.q.toLowerCase();
    return PRODUCTS.filter(p => {
      if (state.cat !== 'all' && p.cat !== state.cat) return false;
      if (state.material.size && !p.materials.some(m => state.material.has(m))) return false;
      if (state.finish.size && !p.finishes.some(f => state.finish.has(f))) return false;
      if (state.std.size) {
        const all = p.standards.join(' ');
        const ok = [...state.std].some(s =>
          s === 'DIN / ISO' ? /DIN|ISO/.test(all) : /ASTM|ASME|ANSI|EN /.test(all));
        if (!ok) return false;
      }
      if (q) {
        const hay = (p.name + ' ' + p.standards.join(' ') + ' ' + p.sizeNote + ' ' + p.summary).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function activeTag() {
    const wrap = document.getElementById('activeTags');
    const tags = [];
    if (state.cat !== 'all') tags.push(['cat', CATEGORIES[state.cat].name]);
    state.material.forEach(m => tags.push(['material', MATERIALS[m]]));
    state.finish.forEach(f => tags.push(['finish', FINISHES[f]]));
    document.querySelectorAll('#fStd input:checked').forEach(i => tags.push(['std', i.value]));
    wrap.innerHTML = tags.map(([k, v]) => `<button class="tag" data-k="${k}">✕ ${v}</button>`).join('');
    wrap.querySelectorAll('.tag').forEach(btn => btn.addEventListener('click', () => {
      const k = btn.dataset.k, v = btn.textContent.replace('✕ ', '');
      if (k === 'cat') { state.cat = 'all'; catList.querySelector('input[value=all]').checked = true; }
      if (k === 'material') { state.material.delete(v === MATERIALS.carbon ? 'carbon' : 'stainless'); document.querySelector(`#fMaterial input[value=${v === MATERIALS.carbon ? 'carbon' : 'stainless'}]`).checked = false; }
      if (k === 'finish') { const key = Object.keys(FINISHES).find(x => FINISHES[x] === v); state.finish.delete(key); document.querySelector(`#fFinish input[value=${key}]`).checked = false; }
      if (k === 'std') { document.querySelector(`#fStd input[value="${v}"]`).checked = false; }
      apply();
    }));
  }

  function apply() {
    const list = matches();
    grid.innerHTML = list.length
      ? list.map(productCard).join('')
      : `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-muted)">
           <h3 style="margin-bottom:10px">No matching products</h3>
           <p>Try removing some filters, or <a href="contact.html">send us your specification</a> — we produce to drawing as well.</p>
         </div>`;
    document.getElementById('resultInfo').textContent = `${list.length} product line${list.length === 1 ? '' : 's'}`;
    activeTag();
  }

  apply();
}

/* ---------- Product detail ---------- */
function renderDetail() {
  const wrap = document.getElementById('pdWrap');
  if (!wrap) return;
  const id = new URLSearchParams(location.search).get('id');
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];

  document.title = `${p.name} — ${p.standards.join(' / ')} | SFB Fasteners`;

  wrap.innerHTML = `
  <div class="pd">
    <div class="pd-gallery">
      <div class="main-img">${DRAWINGS[p.drawing]()}</div>
      <div class="badges">
        ${p.standards.map(s => `<span class="badge">${s}</span>`).join('')}
        <span class="badge">${p.cat === 'nuts' ? 'Nut Series' : 'Washer Series'}</span>
      </div>
    </div>
    <div class="pd-info">
      <h1>${p.name}</h1>
      <div class="std-line">${p.standards.join('  ·  ')}</div>
      <p class="summary">${p.summary}</p>
      <table class="spec-table">
        <tbody>
          <tr><th>Size Range</th><td>${p.sizeNote}</td></tr>
          <tr><th>Materials</th><td>${p.materials.map(m => MATERIALS[m]).join(' · ')}</td></tr>
          <tr><th>Surface Finishes</th><td>${p.finishes.map(f => FINISHES[f]).join(' · ')}</td></tr>
          <tr><th>MOQ</th><td>${p.moq}</td></tr>
        </tbody>
      </table>
      <div class="cta-row">
        <a class="btn" href="contact.html?product=${encodeURIComponent(p.name + ' (' + p.standards[0] + ')')}" style="font-size:1.05rem;padding:13px 30px">Request a Quote →</a>
        <a class="btn btn-outline" href="products.html">← All Products</a>
      </div>
      <p class="micro">Typical reply within 24 hours · Samples available for stock items · EN 10204 3.1 MTC with every shipment</p>
    </div>
  </div>

  <div class="pd-section">
    <h2>Technical Specifications</h2>
    <div class="table-wrap"><table class="spec-table" style="width:100%">
      <tbody>${p.specs.map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join('')}</tbody>
    </table></div>
  </div>

  <div class="pd-section">
    <h2>Product Description</h2>
    <p>${p.desc}</p>
  </div>

  ${p.dims ? `
  <div class="pd-section">
    <h2>${p.dims.title}</h2>
    <div class="table-wrap">
      <table class="dim-table">
        <thead><tr>${p.dims.head.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${p.dims.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
    <p style="margin-top:12px;font-size:.85rem">Dimensions shown for reference — full range and drawings available on request. Custom sizes produced to drawing.</p>
  </div>` : ''}

  <div class="pd-section">
    <h2>Typical Applications</h2>
    <ul class="tick">${p.applications.map(a => `<li>${a}</li>`).join('')}</ul>
  </div>`;

  /* related products */
  const rel = document.getElementById('relatedGrid');
  const related = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 3);
  if (related.length) {
    document.getElementById('relatedSec').style.display = '';
    rel.innerHTML = related.map(productCard).join('');
  } else {
    document.getElementById('relatedSec').style.display = 'none';
  }
}

/* ---------- Contact page ---------- */
function renderContact() {
  const form = document.getElementById('rfqForm');
  if (!form) return;
  const product = new URLSearchParams(location.search).get('product');
  if (product) document.getElementById('fProduct').value = product;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('fName').value.trim();
    document.getElementById('formSuccess').style.display = 'block';
    document.getElementById('successName').textContent = name || 'there';
    form.querySelector('button[type=submit]').disabled = true;
    document.getElementById('formSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

/* ---------- boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderChrome();
  const page = document.body.dataset.page;
  if (page === 'home') renderHome();
  if (page === 'products') renderCatalog();
  if (page === 'product') renderDetail();
  if (page === 'contact') renderContact();
});
