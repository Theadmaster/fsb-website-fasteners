/* ==========================================================================
   SFB Fasteners — Product data & technical SVG illustrations
   ========================================================================== */

/* ---------- Technical line-art SVG generators ---------- */
const DWG = {
  stroke: '#1b3a5c',
  accent: '#e87722',
  bg: 'none'
};

function svgWrap(inner, vb = '0 0 200 140') {
  return `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
    <g fill="none" stroke="${DWG.stroke}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round">
      ${inner}
    </g>
    <g stroke="${DWG.accent}" stroke-width="1.4" stroke-dasharray="4 4" fill="none" opacity=".9"></g>
  </svg>`;
}

/* hex nut: top view + side view */
function drawHexNut() {
  return svgWrap(`
    <polygon points="55,28 82,43.5 82,74.5 55,90 28,74.5 28,43.5"/>
    <circle cx="55" cy="59" r="19"/>
    <circle cx="55" cy="59" r="13" stroke-dasharray="4 3"/>
    <line x1="108" y1="47" x2="108" y2="71"/><line x1="108" y1="47" x2="122" y2="40"/><line x1="122" y1="40" x2="164" y2="40"/>
    <line x1="164" y1="40" x2="176" y2="47"/><line x1="176" y1="47" x2="176" y2="71"/><line x1="176" y1="71" x2="122" y2="71"/><line x1="122" y1="71" x2="108" y2="71"/>
    <line x1="108" y1="47" x2="108" y2="71" opacity="0"/>
    <path d="M108 47 L122 40 M108 71 L122 71" />
    <line x1="122" y1="40" x2="122" y2="71" opacity="0"/>
    <path d="M122 40 L164 40 M122 71 L164 71 M164 40 L176 47 M164 71 L176 71 M176 47 L176 71"/>
    <circle cx="142" cy="55.5" r="6" stroke-dasharray="3 3"/>
    <line x1="28" y1="102" x2="176" y2="102" stroke-dasharray="6 4" stroke-width="1.2"/>
  `);
}

/* flat washer: two views */
function drawFlatWasher() {
  return svgWrap(`
    <circle cx="62" cy="62" r="34"/>
    <circle cx="62" cy="62" r="15"/>
    <circle cx="62" cy="62" r="15" opacity="0"/>
    <rect x="106" y="34" width="66" height="18" rx="2"/>
    <path d="M110 34 L110 52 M106 43 L110 43"/>
    <line x1="106" y1="43" x2="172" y2="43" opacity="0"/>
    <rect x="106" y="70" width="66" height="18" rx="2" transform="translate(0,0)" opacity="0"/>
    <line x1="139" y1="20" x2="139" y2="106" stroke-dasharray="6 4" stroke-width="1.2"/>
    <line x1="62" y1="108" x2="172" y2="108" opacity="0"/>
    <path d="M62 98 L62 112" opacity="0"/>
  `);
}

/* large OD / fender washer */
function drawFenderWasher() {
  return svgWrap(`
    <circle cx="70" cy="62" r="40"/>
    <circle cx="70" cy="62" r="12"/>
    <circle cx="70" cy="62" r="12" opacity="0"/>
    <rect x="120" y="30" width="60" height="14" rx="2"/>
    <rect x="120" y="78" width="60" height="14" rx="2" opacity="0"/>
    <line x1="150" y1="16" x2="150" y2="108" stroke-dasharray="6 4" stroke-width="1.2"/>
  `);
}

/* spring lock washer (helical split ring) */
function drawSpringWasher() {
  return svgWrap(`
    <path d="M100 34 A32 32 0 1 0 118 42"/>
    <path d="M100 34 A32 32 0 0 0 118 42" opacity="0"/>
    <path d="M118 42 L128 30 M100 34 L110 22"/>
    <circle cx="100" cy="62" r="14" stroke-dasharray="4 3"/>
    <line x1="52" y1="62" x2="148" y2="62" opacity="0"/>
  `);
}

/* conical spring washer */
function drawConicalWasher() {
  return svgWrap(`
    <path d="M50 78 L82 42 L118 42 L150 78"/>
    <path d="M50 78 L150 78"/>
    <path d="M66 78 L98 50 L134 78" opacity="0"/>
    <path d="M78 78 L100 56 L122 78"/>
    <path d="M78 78 A22 10 0 0 0 122 78"/>
  `);
}

/* tooth lock washer */
function drawToothWasher() {
  const teeth = [];
  const cx = 100, cy = 66, r1 = 34, r2 = 42, n = 14;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    teeth.push(`M${(cx + r1 * Math.cos(a)).toFixed(1)},${(cy + r1 * Math.sin(a)).toFixed(1)} L${(cx + r2 * Math.cos(a)).toFixed(1)},${(cy + r2 * Math.sin(a)).toFixed(1)}`);
  }
  return svgWrap(`
    <circle cx="100" cy="66" r="34"/>
    <circle cx="100" cy="66" r="15"/>
    ${teeth.join('')}
  `);
}

/* flange nut */
function drawFlangeNut() {
  return svgWrap(`
    <polygon points="96,26 122,41 122,71 96,86 70,71 70,41"/>
    <circle cx="96" cy="56" r="15"/>
    <ellipse cx="96" cy="88" rx="40" ry="11"/>
    <path d="M56 82 L56 88 M136 82 L136 88" opacity="0"/>
    <ellipse cx="96" cy="88" rx="40" ry="11" opacity="0"/>
    <path d="M56 84 A40 11 0 0 0 136 84"/>
  `);
}

/* nyloc lock nut */
function drawNylocNut() {
  return svgWrap(`
    <polygon points="55,36 80,50.5 80,79.5 55,94 30,79.5 30,50.5"/>
    <circle cx="55" cy="65" r="17"/>
    <rect x="88" y="52" width="70" height="26" rx="4" fill="rgba(232,119,34,.18)" stroke="${DWG.accent}"/>
    <text x="123" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="${DWG.accent}" stroke="none" font-family="Arial">NYLON</text>
  `);
}

/* jam / thin nut */
function drawJamNut() {
  return svgWrap(`
    <polygon points="55,40 80,54.5 80,83.5 55,98 30,83.5 30,54.5"/>
    <circle cx="55" cy="69" r="17"/>
    <rect x="108" y="58" width="62" height="22" rx="2"/>
    <line x1="55" y1="18" x2="55" y2="112" stroke-dasharray="6 4" stroke-width="1.2"/>
  `);
}

/* cap / acorn nut */
function drawCapNut() {
  return svgWrap(`
    <path d="M78 96 L78 66 Q78 34 100 30 Q122 34 122 66 L122 96 Z"/>
    <path d="M70 96 L130 96"/>
    <circle cx="100" cy="88" r="9" stroke-dasharray="3 3"/>
  `);
}

/* wing nut */
function drawWingNut() {
  return svgWrap(`
    <path d="M86 92 Q60 96 48 74 Q40 56 50 42 Q58 52 72 54 Q80 55 86 52 L86 92 Z"/>
    <path d="M114 92 Q140 96 152 74 Q160 56 150 42 Q142 52 128 54 Q120 55 114 52 L114 92 Z"/>
    <path d="M86 50 Q100 44 114 50 L114 92 Q100 98 86 92 Z"/>
    <circle cx="100" cy="76" r="10"/>
  `);
}

/* square washer */
function drawSquareWasher() {
  return svgWrap(`
    <rect x="34" y="34" width="64" height="56" rx="3"/>
    <circle cx="66" cy="62" r="14"/>
    <rect x="116" y="52" width="60" height="20" rx="2"/>
    <line x1="66" y1="20" x2="66" y2="104" stroke-dasharray="6 4" stroke-width="1.2"/>
  `);
}

/* heavy hex nut */
function drawHeavyNut() {
  return svgWrap(`
    <polygon points="52,24 82,41.5 82,76.5 52,94 22,76.5 22,41.5"/>
    <circle cx="52" cy="59" r="21"/>
    <circle cx="52" cy="59" r="15" stroke-dasharray="4 3"/>
    <rect x="104" y="36" width="72" height="46" rx="2"/>
    <path d="M104 36 L114 27 L186 27" opacity="0"/>
    <path d="M104 36 L114 28 L176 28 L176 44 M104 82 L114 90 L176 90 L176 74" />
    <line x1="52" y1="106" x2="176" y2="106" stroke-dasharray="6 4" stroke-width="1.2"/>
  `);
}

const DRAWINGS = {
  hexnut: drawHexNut,
  heavy: drawHeavyNut,
  nyloc: drawNylocNut,
  jam: drawJamNut,
  flange: drawFlangeNut,
  cap: drawCapNut,
  wing: drawWingNut,
  flat: drawFlatWasher,
  fender: drawFenderWasher,
  spring: drawSpringWasher,
  conical: drawConicalWasher,
  tooth: drawToothWasher,
  square: drawSquareWasher
};

/* ---------- Product catalogue ---------- */
const PRODUCTS = [
  /* ============ NUTS ============ */
  {
    id: 'hex-nut-din934',
    name: 'Hex Nut',
    cat: 'nuts',
    drawing: 'hexnut',
    standards: ['DIN 934', 'ISO 4032', 'ASME B18.2.2'],
    materials: ['carbon', 'stainless'],
    finishes: ['plain', 'zinc', 'hdg', 'black'],
    sizeNote: 'M2 – M64 · 1/4" – 2-1/2"',
    moq: '500 kg per size',
    hot: true,
    summary: 'The most widely used hexagon nut for general fastening, paired with hex bolts, studs and threaded rods. Chamfered both sides, precision tapped 6H thread for smooth assembly.',
    desc: 'Hex nuts per DIN 934 / ISO 4032 are six-sided internally threaded fasteners designed for use with bolts, screws and threaded rods of matching property class. We manufacture the full metric range from M2 to M64 plus inch-series UNC/UNF sizes, in carbon steel property classes 4–12 and stainless steel grades A2-70 / A4-80. Threads are tapped on CNC tapping machines with 6H tolerance class for consistent, galling-resistant assembly. Every production batch is dimensionally inspected against the standard and supplied with mill test certificates on request.',
    specs: [
      ['Standards', 'DIN 934, ISO 4032 (metric); ASME B18.2.2 / ANSI B18.2.4.1M (inch)'],
      ['Size Range', 'M2 – M64; 1/4" – 2-1/2" (UNC / UNF)'],
      ['Thread', 'Metric coarse (standard), metric fine & UNC/UNF on request; tolerance 6H'],
      ['Materials', 'Carbon steel CL 4 / 5 / 6 / 8 / 10 / 12 (ISO 898-2); Stainless A2-70 / A4-70 / A4-80 (ISO 3506-2); brass on request'],
      ['Surface', 'Plain, white/blue/yellow zinc plated, hot-dip galvanized (HDG), black oxide, Dacromet / Geomet'],
      ['Hardness', 'Per property class; stainless 95–100 HRB max'],
      ['Packing', '20–25 kg cartons on export pallets, or small boxes / custom retail packing'],
      ['Certificates', 'EN 10204 3.1 mill test certificate, RoHS / REACH compliance on request']
    ],
    dims: {
      title: 'Dimensions — DIN 934 / ISO 4032 (metric coarse)',
      head: ['Nominal Size', 'Pitch (mm)', 'Width Across Flats s (mm)', 'Height m (mm)'],
      rows: [
        ['M4', '0.7', '7.0', '3.2'],
        ['M6', '1.0', '10.0', '5.0'],
        ['M8', '1.25', '13.0', '6.5'],
        ['M10', '1.5', '17.0', '8.0'],
        ['M12', '1.75', '19.0', '10.0'],
        ['M16', '2.0', '24.0', '13.0'],
        ['M20', '2.5', '30.0', '16.0'],
        ['M24', '3.0', '36.0', '19.0']
      ]
    },
    applications: ['General machinery assembly', 'Construction & structural connections', 'Automotive & agricultural equipment', 'Piping & flange connections']
  },
  {
    id: 'heavy-hex-nut-a194',
    name: 'Heavy Hex Nut',
    cat: 'nuts',
    drawing: 'heavy',
    standards: ['ASTM A194', 'ASME B18.2.2', 'DIN 6915'],
    materials: ['carbon', 'stainless'],
    finishes: ['plain', 'black', 'zinc', 'hdg'],
    sizeNote: '1/4" – 4" · M12 – M100',
    moq: '800 kg per size',
    hot: true,
    summary: 'Thicker, wider heavy-hex nut for structural steelwork and high-pressure flange bolting. Grades 2H, 8, 8M and DH for demanding service.',
    desc: 'Heavy hex nuts offer greater height and width-across-flats than standard hex nuts, delivering higher proof-load capacity for structural steel, petrochemical flanges and heavy machinery. We produce ASTM A194 Grade 2H (carbon steel, quenched & tempered) and Grade 8 / 8M (stainless 304 / 316) nuts, plus DIN 6915 for HV structural bolt assemblies. All Grade 2H nuts are hardness-tested per lot and traceable to heat numbers.',
    specs: [
      ['Standards', 'ASTM A194 Gr. 2H / 8 / 8M; ASME B18.2.2; DIN 6915'],
      ['Size Range', '1/4" – 4" (imperial); M12 – M100 (metric)'],
      ['Thread', 'UNC 2B / UNF 2B (imperial); 6H (metric)'],
      ['Materials', 'Medium carbon steel Q&T (2H); SS304 (8), SS316 (8M)'],
      ['Surface', 'Plain, black oxide, zinc plated, HDG (per ASTM A153)'],
      ['Hardness', '2H: 24–38 HRC per ASTM A194'],
      ['Packing', 'Bulk cartons + export pallets; mylar-lined boxes for stainless'],
      ['Certificates', 'EN 10204 3.1 MTC with heat-number traceability']
    ],
    dims: {
      title: 'Dimensions — Heavy Hex Nut, ASME B18.2.2 (typical sizes)',
      head: ['Nominal Size', 'Width Across Flats s (in)', 'Height m (in)'],
      rows: [
        ['1/2"', '7/8', '35/64'],
        ['5/8"', '1-1/16', '41/64'],
        ['3/4"', '1-1/4', '3/4'],
        ['1"', '1-5/8', '59/64'],
        ['1-1/4"', '2-1/16', '1-11/64'],
        ['1-1/2"', '2-7/16', '1-25/64']
      ]
    },
    applications: ['Structural steel & bridge construction', 'Petrochemical & pressure-vessel flanges', 'Heavy machinery & mining equipment', 'Wind towers & energy infrastructure']
  },
  {
    id: 'nyloc-nut-din985',
    name: 'Nylon Insert Lock Nut (Nyloc)',
    cat: 'nuts',
    drawing: 'nyloc',
    standards: ['DIN 985', 'DIN 982', 'ISO 10511'],
    materials: ['carbon', 'stainless'],
    finishes: ['plain', 'zinc', 'black'],
    sizeNote: 'M3 – M48 · 1/4" – 1-1/2"',
    moq: '300 kg per size',
    hot: false,
    summary: 'Prevailing-torque lock nut with a nylon collar that resists vibration and loosening without damaging the bolt thread. Reusable, non-metallic insert.',
    desc: 'Nyloc nuts feature a non-metallic (nylon 66) collar at the top of the nut that creates a prevailing torque — the threads grip the bolt elastically, keeping the joint tight under vibration and thermal cycling. DIN 985 is the low-height (Type T) version; DIN 982 the higher all-height (Type P) version. Stainless A2/A4 bodies fitted with material-matched collars are available for corrosive environments. Operating temperature limit for the nylon insert is +120 °C continuous.',
    specs: [
      ['Standards', 'DIN 985 (low type), DIN 982 (all-metal height), ISO 10511'],
      ['Size Range', 'M3 – M48; 1/4" – 1-1/2"'],
      ['Thread', 'Metric coarse 6H; UNC/UNF on request'],
      ['Materials', 'Steel CL 8 / 10; Stainless A2-70 / A4-70; insert: Nylon 66'],
      ['Surface', 'Plain, zinc plated (white/blue), black oxide'],
      ['Prevailing Torque', 'Per DIN 267-27; tested 1st and 5th tightening'],
      ['Temp. Limit', '–40 °C to +120 °C (nylon insert)'],
      ['Certificates', 'EN 10204 3.1 MTC on request']
    ],
    dims: null,
    applications: ['Automotive & rail assemblies', 'Electric motors & HVAC equipment', 'Machinery subject to vibration', 'Bicycles, fitness & outdoor equipment']
  },
  {
    id: 'flange-nut-din6923',
    name: 'Flange Nut',
    cat: 'nuts',
    drawing: 'flange',
    standards: ['DIN 6923', 'ISO 4161', 'ASME B18.2.2'],
    materials: ['carbon', 'stainless'],
    finishes: ['plain', 'zinc', 'hdg', 'black'],
    sizeNote: 'M5 – M36 · 1/4" – 1-1/2"',
    moq: '400 kg per size',
    hot: true,
    summary: 'Hex nut with an integrated flange that spreads the clamping load — often eliminates a separate washer. Serrated (non-serrated) versions available.',
    desc: 'Flange nuts integrate a wide bearing flange under the hex body, distributing clamp load over a larger area and reducing surface pressure on soft or painted substrates. Serrated flange versions bite into the mating surface for added anti-loosening security (not recommended where surface damage is unacceptable). Widely used in automotive, agricultural machinery and sheet-metal assemblies where a separate washer would add handling cost.',
    specs: [
      ['Standards', 'DIN 6923, ISO 4161'],
      ['Size Range', 'M5 – M36; 1/4" – 1-1/2"'],
      ['Thread', 'Metric coarse 6H; UNC on request'],
      ['Materials', 'Steel CL 8 / 10; Stainless A2-70 / A4-70'],
      ['Surface', 'Plain, zinc plated, HDG, black oxide, Geomet'],
      ['Flange Type', 'Non-serrated (standard) or serrated (anti-loosening)'],
      ['Packing', '20–25 kg cartons on export pallets'],
      ['Certificates', 'EN 10204 3.1 MTC on request']
    ],
    dims: null,
    applications: ['Automotive chassis & powertrain', 'Agricultural & construction machinery', 'Sheet-metal & thin-wall assemblies', 'General equipment manufacturing']
  },
  {
    id: 'all-metal-lock-nut-din980',
    name: 'All-Metal Prevailing Torque Lock Nut',
    cat: 'nuts',
    drawing: 'hexnut',
    standards: ['DIN 980', 'ISO 7719', 'DIN 6924'],
    materials: ['carbon', 'stainless'],
    finishes: ['plain', 'zinc', 'black'],
    sizeNote: 'M5 – M39 · 1/4" – 1-1/2"',
    moq: '300 kg per size',
    hot: false,
    summary: 'High-temperature locking nut with a crimped metal collar — no polymer insert, service capability up to +300 °C. Ideal for engine and exhaust applications.',
    desc: 'All-metal lock nuts (DIN 980) achieve prevailing torque by elliptically crimping the top section of the nut. Unlike nyloc nuts they contain no polymer, so they withstand temperatures up to +300 °C and resist oils, solvents and fuels — the standard choice for engines, exhaust systems and high-temperature industrial equipment. Stainless A2/A4 versions are widely used in marine and chemical plant maintenance.',
    specs: [
      ['Standards', 'DIN 980, ISO 7719'],
      ['Size Range', 'M5 – M39; 1/4" – 1-1/2"'],
      ['Thread', 'Metric coarse 6H; UNC/UNF on request'],
      ['Materials', 'Steel CL 8 / 10; Stainless A2-70 / A4-70'],
      ['Surface', 'Plain, zinc plated, black oxide'],
      ['Temp. Capability', 'Up to +300 °C (no polymer insert)'],
      ['Prevailing Torque', 'Per DIN 267-27'],
      ['Certificates', 'EN 10204 3.1 MTC on request']
    ],
    dims: null,
    applications: ['Engines, exhaust & turbo systems', 'High-temperature industrial equipment', 'Marine & chemical plant service', 'Rail & commercial vehicles']
  },
  {
    id: 'thin-jam-nut-din439',
    name: 'Thin Hex Nut (Jam Nut)',
    cat: 'nuts',
    drawing: 'jam',
    standards: ['DIN 439', 'ISO 4035', 'ISO 8675'],
    materials: ['carbon', 'stainless'],
    finishes: ['plain', 'zinc', 'black'],
    sizeNote: 'M3 – M52 · 1/4" – 2"',
    moq: '300 kg per size',
    hot: false,
    summary: 'Low-height hex nut used as a lock against a full nut, for space-restricted joints, or on thin threaded fittings where a standard nut is too tall.',
    desc: 'Jam nuts (DIN 439 B, chamfered) are approximately half the height of a standard hex nut. They are tightened against a primary full nut to lock the assembly, used where axial space is limited, or fitted on threaded pipe fittings and sensors. Not recommended as the sole load-carrying nut in highly loaded structural joints.',
    specs: [
      ['Standards', 'DIN 439 B, ISO 4035 (chamfered), ISO 8675 (fine thread)'],
      ['Size Range', 'M3 – M52; 1/4" – 2"'],
      ['Thread', 'Metric coarse 6H; fine pitch & UNC/UNF on request'],
      ['Materials', 'Steel CL 6 / 8 / 10; Stainless A2-70 / A4-70; brass on request'],
      ['Surface', 'Plain, zinc plated, black oxide, nickel plated'],
      ['Packing', '20–25 kg cartons on export pallets'],
      ['Certificates', 'EN 10204 3.1 MTC on request']
    ],
    dims: null,
    applications: ['Locking against full nuts', 'Threaded fittings, sensors & instrumentation', 'Space-restricted assemblies', 'Electrical enclosures']
  },
  {
    id: 'cap-nut-din1587',
    name: 'Cap Nut (Acorn Nut)',
    cat: 'nuts',
    drawing: 'cap',
    standards: ['DIN 1587', 'DIN 917'],
    materials: ['carbon', 'stainless'],
    finishes: ['plain', 'zinc', 'black'],
    sizeNote: 'M4 – M24 · No. 10 – 3/4"',
    moq: '200 kg per size',
    hot: false,
    summary: 'Dome-topped nut that covers exposed threads for safety, weather protection and a clean finished appearance.',
    desc: 'Cap nuts (DIN 1587, tall type) enclose the protruding bolt thread inside a domed top — protecting hands from sharp threads, shielding the thread from corrosion and moisture, and providing an attractive finished look. DIN 917 is the low-dome variant. Popular on machinery guards, furniture, playground equipment, marine hardware and decorative architectural fixings.',
    specs: [
      ['Standards', 'DIN 1587 (tall), DIN 917 (low)'],
      ['Size Range', 'M4 – M24; No. 10 – 3/4"'],
      ['Thread', 'Metric coarse 6H; UNC on request'],
      ['Materials', 'Steel CL 6 / 8; Stainless A2 / A4; brass for decorative use'],
      ['Surface', 'Plain, zinc plated, black oxide, polished / chrome plated (brass)'],
      ['Packing', 'Cartons on export pallets'],
      ['Certificates', 'EN 10204 3.1 MTC on request']
    ],
    dims: null,
    applications: ['Machinery guards & public equipment', 'Furniture & playground fixings', 'Marine hardware', 'Architectural & decorative fastening']
  },
  {
    id: 'wing-nut-din315',
    name: 'Wing Nut',
    cat: 'nuts',
    drawing: 'wing',
    standards: ['DIN 315', 'ANSI B18.6.9'],
    materials: ['carbon', 'stainless'],
    finishes: ['plain', 'zinc', 'black'],
    sizeNote: 'M4 – M24 · No. 8 – 3/4"',
    moq: '200 kg per size',
    hot: false,
    summary: 'Hand-tightenable nut with flat wings for tool-free installation and removal — ideal for fixtures, formwork and equipment requiring frequent adjustment.',
    desc: 'Wing nuts (DIN 315, type A stamped / cold-forged) allow fast manual tightening and release without tools. Widely used on formwork and scaffolding clamps, machine fixtures, battery terminals, hose clamps and adjustable handles. Stainless A2 versions suit outdoor, marine and food-processing environments where frequent washdown and adjustment occur.',
    specs: [
      ['Standards', 'DIN 315 (Form A / B), ANSI B18.6.9'],
      ['Size Range', 'M4 – M24; No. 8 – 3/4"'],
      ['Thread', 'Metric coarse 6H; UNC on request'],
      ['Materials', 'Low carbon steel, stamped or cold-forged; Stainless A2 / A4; brass'],
      ['Surface', 'Plain, zinc plated, black oxide, polished'],
      ['Packing', 'Cartons on export pallets'],
      ['Certificates', 'EN 10204 3.1 MTC on request']
    ],
    dims: null,
    applications: ['Formwork & scaffolding clamps', 'Machine fixtures & adjustable handles', 'Battery & hose clamps', 'Food & marine equipment (stainless)']
  },

  /* ============ WASHERS ============ */
  {
    id: 'flat-washer-din125',
    name: 'Flat Washer',
    cat: 'washers',
    drawing: 'flat',
    standards: ['DIN 125', 'ISO 7089', 'ASME B18.22M'],
    materials: ['carbon', 'stainless'],
    finishes: ['plain', 'zinc', 'hdg', 'black'],
    sizeNote: 'M2 – M64 · 1/4" – 3"',
    moq: '500 kg per size',
    hot: true,
    summary: 'The standard plain washer for metric bolts — spreads clamp load, protects surfaces and bridges oversized holes. Hardness classes 100 HV – 300 HV.',
    desc: 'Flat washers to DIN 125 / ISO 7089 are the most common load-spreading washers, placed under bolt heads and nuts to distribute clamping force, protect the mating surface and provide a consistent bearing face. Type A is chamfered on the outside edge. Available in hardness grades 100 HV (soft, general), 140 HV (standard), 200 HV and 300 HV (hardened, for high-strength 8.8/10.9 bolt assemblies). Inch-series USS and SAE patterns are available for the North American market.',
    specs: [
      ['Standards', 'DIN 125 A/B, ISO 7089 / 7090; ASME B18.22.1 (USS/SAE)'],
      ['Size Range', 'M2 – M64; 1/4" – 3"'],
      ['Materials', 'Low / medium carbon steel; Stainless A2 / A4; brass; nylon'],
      ['Hardness', '100 HV, 140 HV, 200 HV, 300 HV'],
      ['Surface', 'Plain, white/blue/yellow zinc, HDG, black oxide, mechanical galvanizing'],
      ['Tolerance', 'Product grade A (≤ M16 nominal), grade B above'],
      ['Packing', '20–25 kg cartons on export pallets'],
      ['Certificates', 'EN 10204 3.1 MTC, RoHS / REACH on request']
    ],
    dims: {
      title: 'Dimensions — DIN 125 Form A (typical sizes)',
      head: ['For Bolt', 'Hole d1 (mm)', 'OD d2 (mm)', 'Thickness h (mm)'],
      rows: [
        ['M6', '6.4', '12.0', '1.6'],
        ['M8', '8.4', '16.0', '1.6'],
        ['M10', '10.5', '20.0', '2.0'],
        ['M12', '13.0', '24.0', '2.5'],
        ['M16', '17.0', '30.0', '3.0'],
        ['M20', '21.0', '37.0', '3.0'],
        ['M24', '25.0', '44.0', '4.0'],
        ['M30', '33.0', '56.0', '4.0']
      ]
    },
    applications: ['General bolted assemblies', 'Structural & mechanical engineering', 'Automotive & equipment manufacturing', 'Pairing with all hex bolt / nut series']
  },
  {
    id: 'large-flat-washer-din9021',
    name: 'Large OD Flat Washer (Fender Washer)',
    cat: 'washers',
    drawing: 'fender',
    standards: ['DIN 9021', 'ISO 7093', 'ASME B18.22.1'],
    materials: ['carbon', 'stainless'],
    finishes: ['plain', 'zinc', 'hdg', 'black'],
    sizeNote: 'M3 – M52 · 1/4" – 2"',
    moq: '400 kg per size',
    hot: false,
    summary: 'Extra-large outside diameter washer (OD ≈ 3 × ID) for soft materials — wood, plastic, fiberglass and thin sheet — where standard washers would pull through.',
    desc: 'Fender washers to DIN 9021 / ISO 7093 have an outer diameter roughly three times the bolt hole, spreading clamp load across soft or low-strength substrates such as timber, plastics, GRP and thin-gauge sheet metal. Commonly used in automotive fender/bodywork (hence the name), solar mounting systems, signage and marine outfitting.',
    specs: [
      ['Standards', 'DIN 9021, ISO 7093-1; USS pattern (ASME B18.22.1)'],
      ['Size Range', 'M3 – M52; 1/4" – 2"'],
      ['Materials', 'Carbon steel; Stainless A2 / A4; nylon for insulation'],
      ['Hardness', '100 HV / 140 HV'],
      ['Surface', 'Plain, zinc plated, HDG, black oxide'],
      ['Packing', 'Cartons on export pallets'],
      ['Certificates', 'EN 10204 3.1 MTC on request']
    ],
    dims: null,
    applications: ['Wood, plastic & GRP substrates', 'Automotive body & fender work', 'Solar mounting & signage', 'Thin-sheet metal assemblies']
  },
  {
    id: 'spring-washer-din127',
    name: 'Spring Lock Washer',
    cat: 'washers',
    drawing: 'spring',
    standards: ['DIN 127', 'ISO 10673', 'ASME B18.21.1'],
    materials: ['carbon', 'stainless'],
    finishes: ['plain', 'zinc', 'black'],
    sizeNote: 'M2 – M64 · 1/4" – 2-1/2"',
    moq: '400 kg per size',
    hot: true,
    summary: 'Helical split lock washer — under load it bites into the mating surfaces and exerts spring force, adding frictional resistance against rotation.',
    desc: 'DIN 127 B helical spring washers are split rings formed into a left-hand helix. When compressed by the nut they flatten and exert a spring force between bolt and substrate, biting into both surfaces to resist loosening under vibration. Type A has bent-up tangs at both ends; type B has square cut ends (most common). For heavy vibration service we recommend combining with serrated flange nuts or wedge-lock washers.',
    specs: [
      ['Standards', 'DIN 127 B (square ends), DIN 127 A (tanged); ASME B18.21.1 (helical)'],
      ['Size Range', 'M2 – M64; 1/4" – 2-1/2"'],
      ['Materials', 'Spring steel ( quenched & tempered); Stainless A2 / A4'],
      ['Hardness', 'Spring steel: 42–48 HRC; stainless per ISO 3506'],
      ['Surface', 'Plain, zinc plated, black oxide, mechanical galvanizing'],
      ['Packing', 'Bulk cartons on export pallets'],
      ['Certificates', 'EN 10204 3.1 MTC on request']
    ],
    dims: null,
    applications: ['Machinery subject to vibration', 'Automotive & rail fastening', 'Electrical & control panel hardware', 'General engineering joints']
  },
  {
    id: 'conical-washer-din6796',
    name: 'Conical Spring Washer',
    cat: 'washers',
    drawing: 'conical',
    standards: ['DIN 6796'],
    materials: ['carbon', 'stainless'],
    finishes: ['plain', 'zinc', 'black'],
    sizeNote: 'M6 – M30',
    moq: '300 kg per size',
    hot: false,
    summary: 'Heavy-duty conical disc spring washer for high-load bolted joints — compensates for bolt relaxation and thermal movement, maintains preload.',
    desc: 'DIN 6796 conical spring washers act as heavy-duty disc springs in bolted connections. Their conical geometry provides a defined axial spring force that compensates for settling, thermal expansion and micro-movement — keeping preload stable in joints that experience load cycling or temperature change. Standard for power transmission flanges, heavy machinery and rail applications.',
    specs: [
      ['Standards', 'DIN 6796'],
      ['Size Range', 'M6 – M30'],
      ['Materials', 'Spring steel 51CrV4, quenched & tempered; Stainless on request'],
      ['Hardness', '42–50 HRC'],
      ['Surface', 'Plain, zinc plated, black oxide'],
      ['Load', 'Per DIN 6796 load-deflection tables'],
      ['Packing', 'Cartons on export pallets'],
      ['Certificates', 'EN 10204 3.1 MTC on request']
    ],
    dims: null,
    applications: ['High-load bolted joints', 'Power transmission & flanges', 'Rail & heavy machinery', 'Joints with thermal cycling']
  },
  {
    id: 'external-tooth-washer-din6798a',
    name: 'External Tooth Lock Washer',
    cat: 'washers',
    drawing: 'tooth',
    standards: ['DIN 6798 A', 'ISO 6798A', 'ASME B18.21.2'],
    materials: ['carbon', 'stainless'],
    finishes: ['plain', 'zinc', 'black'],
    sizeNote: 'M2 – M20 · No. 2 – 3/4"',
    moq: '200 kg per size',
    hot: false,
    summary: 'Radial external teeth bite into both bearing surfaces under clamp load — compact anti-loosening solution for electrical and sheet-metal assemblies.',
    desc: 'DIN 6798 A external tooth lock washers carry hardened radial teeth around the outside diameter. Under tightening, the teeth dig into the fastener and the substrate, providing positive resistance to counter-clockwise rotation. Their small overall diameter suits electrical equipment, control cabinets, terminal blocks and sheet-metal assemblies where appearance and compactness matter.',
    specs: [
      ['Standards', 'DIN 6798 A (external), ISO 6798A'],
      ['Size Range', 'M2 – M20; No. 2 – 3/4"'],
      ['Materials', 'Spring steel; Stainless A2 / A4'],
      ['Hardness', 'Spring steel: 40–48 HRC'],
      ['Surface', 'Plain, zinc plated, black oxide'],
      ['Packing', 'Bulk cartons, small boxes for OEM lines'],
      ['Certificates', 'EN 10204 3.1 MTC on request']
    ],
    dims: null,
    applications: ['Electrical enclosures & control panels', 'Terminal & busbar connections', 'Sheet-metal & thin-panel assemblies', 'Consumer & light equipment']
  },
  {
    id: 'internal-tooth-washer-din6798i',
    name: 'Internal Tooth Lock Washer',
    cat: 'washers',
    drawing: 'tooth',
    standards: ['DIN 6798 I', 'ISO 6798I', 'ASME B18.21.2'],
    materials: ['carbon', 'stainless'],
    finishes: ['plain', 'zinc', 'black'],
    sizeNote: 'M2 – M20 · No. 2 – 3/4"',
    moq: '200 kg per size',
    hot: false,
    summary: 'Internal-tooth locking washer with teeth inside the bore — clean external appearance, used with small screws and finished surfaces.',
    desc: 'DIN 6798 I internal tooth washers place their radial teeth inside the bore, engaging the screw head and substrate while leaving the washer rim smooth. Preferred where a clean external appearance is required or where the fastener head is small relative to the bearing area — typical in electronics housings, appliances and finished metal panels.',
    specs: [
      ['Standards', 'DIN 6798 I (internal), ISO 6798I'],
      ['Size Range', 'M2 – M20; No. 2 – 3/4"'],
      ['Materials', 'Spring steel; Stainless A2 / A4'],
      ['Hardness', 'Spring steel: 40–48 HRC'],
      ['Surface', 'Plain, zinc plated, black oxide'],
      ['Packing', 'Bulk cartons, small boxes for OEM lines'],
      ['Certificates', 'EN 10204 3.1 MTC on request']
    ],
    dims: null,
    applications: ['Electronics & appliance housings', 'Finished panels & consumer goods', 'Instrumentation assemblies', 'Light sheet-metal joints']
  },
  {
    id: 'square-washer-din436',
    name: 'Square Washer (Timber Washer)',
    cat: 'washers',
    drawing: 'square',
    standards: ['DIN 436', 'ISO 7094'],
    materials: ['carbon'],
    finishes: ['plain', 'zinc', 'hdg'],
    sizeNote: 'M5 – M36',
    moq: '500 kg per size',
    hot: false,
    summary: 'Large square washer for timber construction and structural steel on wood — spreads load on wooden beams, saddles and coach-screw fixings.',
    desc: 'DIN 436 square washers have an oversized square footprint designed for timber construction: they bear on wooden beams, posts and saddles without sinking, and align naturally along the grain. Standard partners to coach bolts (din 603) and anchor screws in timber-frame buildings, purlin connections and agricultural structures. Hot-dip galvanized versions are standard for outdoor exposure.',
    specs: [
      ['Standards', 'DIN 436, ISO 7094'],
      ['Size Range', 'M5 – M36'],
      ['Materials', 'Mild / medium carbon steel'],
      ['Hardness', '100 HV / 140 HV'],
      ['Surface', 'Plain, zinc plated, hot-dip galvanized (outdoor standard)'],
      ['Packing', 'Bulk cartons on export pallets'],
      ['Certificates', 'EN 10204 3.1 MTC on request']
    ],
    dims: null,
    applications: ['Timber-frame & purlin connections', 'Coach bolt assemblies (DIN 603)', 'Agricultural & shed construction', 'Structural steel on wood saddles']
  },
  {
    id: 'hv-structural-washer-din6916',
    name: 'HV Structural Washer',
    cat: 'washers',
    drawing: 'flat',
    standards: ['DIN 6916', 'ISO 7415', 'ASTM F436'],
    materials: ['carbon'],
    finishes: ['plain', 'hdg', 'black'],
    sizeNote: 'M12 – M36 · 1/2" – 1-1/2"',
    moq: '800 kg per size',
    hot: false,
    summary: 'Hardened washer engineered for HV high-strength structural bolting assemblies — required by EN 14399 for preloaded structural joints.',
    desc: 'HV structural washers (DIN 6916 / EN 14399-6) are through-hardened washers sized to match HV structural bolt assemblies used in preloaded, slip-critical steel connections. Their larger OD and hardened face resist embedment and galling under high clamp loads, maintaining preload over the joint life. Compatible with ASTM F436 patterns for the North American market.',
    specs: [
      ['Standards', 'DIN 6916, EN 14399-6; ASTM F436 (imperial)'],
      ['Size Range', 'M12 – M36; 1/2" – 1-1/2"'],
      ['Materials', 'Medium carbon steel, through hardened'],
      ['Hardness', 'Per EN 14399-6 (≥ 35 HRC core) / F436 (38–45 HRC)'],
      ['Surface', 'Plain, HDG (ASTM A153 / EN ISO 10684), black'],
      ['System', 'K2 assembly component (HV sets: bolt + nut + washer)'],
      ['Packing', 'Bulk cartons on export pallets'],
      ['Certificates', 'EN 10204 3.1 MTC with heat-number traceability']
    ],
    dims: null,
    applications: ['Preloaded structural steel joints', 'Bridges & high-rise steel frames', 'Wind towers & transmission towers', 'Crane rails & heavy equipment foundations']
  }
];

/* ---------- Category meta ---------- */
const CATEGORIES = {
  nuts: {
    name: 'Nuts',
    icon: 'hexnut',
    desc: 'Hex, heavy hex, lock, flange, cap and wing nuts in carbon & stainless steel, M2 – M100.',
    items: PRODUCTS.filter(p => p.cat === 'nuts').length
  },
  washers: {
    name: 'Washers',
    icon: 'flat',
    desc: 'Flat, fender, spring, tooth, conical and structural washers, M2 – M64.',
    items: PRODUCTS.filter(p => p.cat === 'washers').length
  }
};

/* filter vocabulary */
const MATERIALS = { carbon: 'Carbon Steel', stainless: 'Stainless Steel A2 / A4' };
const FINISHES = { plain: 'Plain', zinc: 'Zinc Plated', hdg: 'Hot-Dip Galvanized', black: 'Black Oxide' };
