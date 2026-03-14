// ═══════════════════════════════════════════════════════
//  Palette & Icons
// ═══════════════════════════════════════════════════════
const PALETTE = ['#4e9af5','#f59e0b','#34d399','#a78bfa','#f472b6','#22d3ee','#f97316','#6366f1','#e879f9','#84cc16','#fb923c','#2dd4bf','#f43f5e','#818cf8','#fbbf24'];
const GANTT_COLORS = ['#7c6fcd','#c2785c','#4a9e8f','#c75b8e','#8fa844','#c9953e','#5b8ebf','#b35d5d','#6aab9a','#9b7db8','#cb8c3e','#5c84a8'];
const GH='<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>';
const PP='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.56A.859.859 0 0 1 5.79 1.84h5.943c2.604 0 4.473.53 5.467 1.624.468.515.756 1.058.907 1.707.159.681.164 1.497.01 2.494l-.013.083v.73l.57.326a3.4 3.4 0 0 1 1.024.852c.308.39.522.862.636 1.397.118.554.118 1.204-.005 1.929-.14.836-.403 1.563-.787 2.16a4.55 4.55 0 0 1-1.325 1.403c-.521.353-1.14.614-1.842.774a9.226 9.226 0 0 1-2.27.263h-.539a1.63 1.63 0 0 0-1.611 1.376l-.04.219-.682 4.321-.03.156a.158.158 0 0 1-.158.135H7.076z"/></svg>';

// ═══════════════════════════════════════════════════════
//  i18n
// ═══════════════════════════════════════════════════════
const i18n = {
  de: {
    months:['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],
    title:'Projekt-Scheduler',
    githubTip:'⭐ Repo auf GitHub', githubLabel:'Star on GitHub',
    paypalTip:'Einen Kaffee spendieren ☕', paypalLabel:'Kaffee spendieren',
    ready:'bereit', saving:'speichert...', saved:'gespeichert',
    btnLoadCSV:'⬆ CSV laden', btnSaveCSV:'⬇ CSV speichern',
    btnExample:'◆ Beispiel laden', btnAddRow:'+ Zeile',
    btnSchedule:'▶ Scheduling starten', btnClear:'✕ Alles löschen',
    stratParallel:'⇉ Parallel', stratSpeed:'⚡ Speed',
    stratParallelTip:'Alle Projekte gleichzeitig — freie Kapazität wird verteilt',
    stratSpeedTip:'Höchste Prio zuerst komplett abarbeiten',
    overlapTip:'Wenn aktiv: Team kann nächsten Meilenstein starten sobald es selbst fertig ist, auch wenn andere Teams noch am vorherigen arbeiten',
    thWait:'Wartet',
    waitTip:'🔒 = Meilenstein wartet bis vorheriger komplett fertig ist',
    panelCapacity:'Team-Kapazitäten (PT / Monat)',
    panelData:'Projektdaten', panelGantt:'Zeitplan (Gantt)', panelAnalysis:'Analyse',
    lblStart:'Start:', lblYear:'Jahr:',
    thProject:'Projekt', thMilestone:'Meilenstein',
    thPrio:'Prio',
    prioTip:'Projektpriorität — oben = höchste Prio (im Speed-Modus relevant)',
    phProject:'Projekt', phMilestone:'Meilenstein',
    addTeam:'+ Team',
    entries: n => `${n} Einträge`,
    emptyState:'Noch keine Daten. Lade ein CSV oder klicke <code>Beispiel laden</code>.',
    schedInfo:(m,p,s) => `${m} Monate · ${p} Projekte · ${s==='parallel'?'⇉ Parallel':'⚡ Speed'}`,
    capUtilTitle:'Kapazitätsauslastung',
    capUtilHint:'Zur Bearbeitung einzelner Monate die Kapazitäts-Tabelle oben verwenden.',
    capMonthlyHint:'Standard-Wert gilt für alle Monate. Einzelne Monate überschreiben: Wert ändern (wird orange). Gleichen Wert wie Standard eingeben = Override entfernen.',
    lblMonths:'Monate:',
    warnOver:(name,lbl,used,cap,pct) => `⚠ ${name} in ${lbl}: ${used} PT geplant, nur ${cap} PT verfügbar (${pct}%)`,
    warnOk:'✓ Alle Teams innerhalb der Kapazitätsgrenzen',
    warnFinish:(proj,m) => `✓ ${proj} fertig in ${m}`,
    warnTimeout:'⚠ Planung unvollständig — nicht alle Meilensteine konnten innerhalb von 48 Monaten fertiggestellt werden. Kapazitäten erhöhen oder Aufwände reduzieren.',
    toastCSVLoaded: n => `CSV geladen — ${n} Zeilen`,
    toastCSVExported:'CSV exportiert', toastNoData:'Keine Daten vorhanden',
    toastNoExport:'Keine Daten zum Exportieren',
    toastExampleLoaded:'Beispieldaten geladen', toastCleared:'Daten gelöscht',
    toastScheduled:'Scheduling abgeschlossen', confirmClear:'Alle Daten löschen?',
    toastMinTeam:'Mindestens ein Team erforderlich',
    disclaimer:'🔒 Alle Daten werden ausschließlich lokal in deinem Browser gespeichert (localStorage). Es werden keine Daten an einen Server gesendet.',
    csvProject:'Projekt', csvMilestone:'Meilenstein', csvPlannedMonth:'Geplanter Monat',
    csvStart:'Start', csvEnd:'Ende',
    exTeams:[{name:'Entwicklung',cap:20},{name:'Design',cap:20},{name:'QA/Test',cap:20}],
    footerImpressum:'Impressum', footerDatenschutz:'Datenschutz',
  },
  en: {
    months:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    title:'Project Scheduler',
    githubTip:'⭐ Repo on GitHub', githubLabel:'Star on GitHub',
    paypalTip:'Buy me a coffee ☕', paypalLabel:'Buy me a coffee',
    ready:'ready', saving:'saving...', saved:'saved',
    btnLoadCSV:'⬆ Load CSV', btnSaveCSV:'⬇ Save CSV',
    btnExample:'◆ Load example', btnAddRow:'+ Row',
    btnSchedule:'▶ Run scheduler', btnClear:'✕ Clear all',
    stratParallel:'⇉ Parallel', stratSpeed:'⚡ Speed',
    stratParallelTip:'All projects simultaneously — free capacity is distributed',
    stratSpeedTip:'Highest priority project completed first',
    overlapTip:'When active: a team can start the next milestone once it finishes, even if other teams are still working on the previous one',
    thWait:'Waits',
    waitTip:'🔒 = Milestone waits until the previous one is fully complete',
    panelCapacity:'Team Capacities (PD / month)',
    panelData:'Project Data', panelGantt:'Schedule (Gantt)', panelAnalysis:'Analysis',
    lblStart:'Start:', lblYear:'Year:',
    thProject:'Project', thMilestone:'Milestone',
    thPrio:'Prio',
    prioTip:'Project priority — top = highest priority (relevant in Speed mode)',
    phProject:'Project', phMilestone:'Milestone',
    addTeam:'+ Team',
    entries: n => `${n} entries`,
    emptyState:'No data yet. Load a CSV or click <code>Load example</code>.',
    schedInfo:(m,p,s) => `${m} months · ${p} projects · ${s==='parallel'?'⇉ Parallel':'⚡ Speed'}`,
    capUtilTitle:'Capacity Utilization',
    capUtilHint:'To edit individual months use the capacity table above.',
    capMonthlyHint:'Default applies to all months. Override individual months by changing a value (shown in orange). Entering the default value removes the override.',
    lblMonths:'Months:',
    warnOver:(name,lbl,used,cap,pct) => `⚠ ${name} in ${lbl}: ${used} PD planned, only ${cap} PD available (${pct}%)`,
    warnOk:'✓ All teams within capacity limits',
    warnFinish:(proj,m) => `✓ ${proj} finished in ${m}`,
    warnTimeout:'⚠ Scheduling incomplete — not all milestones could be completed within 48 months. Increase capacity or reduce effort.',
    toastCSVLoaded: n => `CSV loaded — ${n} rows`,
    toastCSVExported:'CSV exported', toastNoData:'No data available',
    toastNoExport:'No data to export',
    toastExampleLoaded:'Example data loaded', toastCleared:'Data cleared',
    toastScheduled:'Scheduling complete', confirmClear:'Delete all data?',
    toastMinTeam:'At least one team required',
    disclaimer:'🔒 All data is stored exclusively in your browser\'s local storage. No data is ever sent to a server.',
    csvProject:'Project', csvMilestone:'Milestone', csvPlannedMonth:'Planned Month',
    csvStart:'Start', csvEnd:'End',
    exTeams:[{name:'Development',cap:20},{name:'Design',cap:20},{name:'QA/Testing',cap:20}],
    footerImpressum:'Legal Notice', footerDatenschutz:'Privacy Policy',
  }
};

// ═══════════════════════════════════════════════════════
//  Legal Content
// ═══════════════════════════════════════════════════════
const legalContent = {
  impressum: {
    de: `<h2>Impressum</h2><h3>Angaben gemäß § 5 DDG</h3><div class="placeholder">⚠ HIER DEINE DATEN EINTRAGEN:<br>Vor- und Nachname<br>Straße Hausnummer<br>PLZ Ort<br>Deutschland</div><h3>Kontakt</h3><div class="placeholder">⚠ E-Mail: deine@email.de</div><h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3><div class="placeholder">⚠ Vor- und Nachname<br>Adresse wie oben</div><h3>Haftung für Inhalte</h3><p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p><h3>Haftung für Links</h3><p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.</p>`,
    en: `<h2>Legal Notice (Impressum)</h2><h3>Information according to § 5 DDG</h3><div class="placeholder">⚠ INSERT YOUR DETAILS HERE:<br>First and Last Name<br>Street and Number<br>ZIP City<br>Country</div><h3>Contact</h3><div class="placeholder">⚠ Email: your@email.com</div><h3>Responsible for content according to § 18 Abs. 2 MStV</h3><div class="placeholder">⚠ First and Last Name<br>Address as above</div><h3>Liability for Content</h3><p>As a service provider, we are responsible for our own content on these pages in accordance with general legislation pursuant to § 7 (1) DDG.</p><h3>Liability for Links</h3><p>Our site contains links to external websites of third parties over whose content we have no influence.</p>`
  },
  datenschutz: {
    de: `<h2>Datenschutzerklärung</h2><h3>1. Verantwortlicher</h3><div class="placeholder">⚠ HIER DEINE DATEN EINTRAGEN</div><h3>2. Hosting</h3><p>Diese Website wird über <strong>GitHub Pages</strong> gehostet (GitHub Inc., USA). Beim Besuch erfasst GitHub technische Daten in Server-Logfiles (u.a. IP-Adresse). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank">GitHub Privacy Statement</a></p><h3>3. Lokale Datenspeicherung</h3><p>Alle Daten werden ausschließlich <strong>lokal in Ihrem Browser</strong> (localStorage) gespeichert. <strong>Keine Daten werden an uns oder Dritte übermittelt.</strong></p><h3>4. Keine Cookies</h3><p>Diese Website verwendet keine Cookies.</p><h3>5. Keine externen Ressourcen</h3><p>Diese Website lädt keine externen Schriftarten, Skripte oder Tracking-Pixel.</p><h3>6. Ihre Rechte</h3><p>Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21), Beschwerde bei Aufsichtsbehörde (Art. 77 DSGVO).</p>`,
    en: `<h2>Privacy Policy</h2><h3>1. Data Controller</h3><div class="placeholder">⚠ INSERT YOUR DETAILS HERE</div><h3>2. Hosting</h3><p>Hosted via <strong>GitHub Pages</strong> (GitHub Inc., USA). GitHub collects technical data in server logs (incl. IP address). Legal basis: Art. 6(1)(f) GDPR. <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank">GitHub Privacy Statement</a></p><h3>3. Local Data Storage</h3><p>All data is stored <strong>exclusively in your browser</strong> (localStorage). <strong>No data is transmitted to us or third parties.</strong></p><h3>4. No Cookies</h3><p>This website does not use cookies.</p><h3>5. No External Resources</h3><p>No external fonts, scripts, or tracking pixels are loaded.</p><h3>6. Your Rights</h3><p>Access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18), portability (Art. 20), objection (Art. 21), complaint to supervisory authority (Art. 77 GDPR).</p>`
  }
};

// ═══════════════════════════════════════════════════════
//  State
// ═══════════════════════════════════════════════════════
let _nextId = 4;
function newId() {
  const existing = new Set(state.teams.map(t => t.id));
  while (existing.has('t' + _nextId)) _nextId++;
  return 't' + (_nextId++);
}

let state = {
  teams: [
    { id:'t1', name:'Team A', capacity:20, color:PALETTE[0], capOverrides:{} },
    { id:'t2', name:'Team B', capacity:20, color:PALETTE[1], capOverrides:{} },
    { id:'t3', name:'Team C', capacity:20, color:PALETTE[2], capOverrides:{} },
  ],
  rows: [],
  startMonth: 0,
  startYear: 2026,
  strategy: 'parallel',
  msStart: null,
  msEnd: null,
  usedCapacity: null,
  schedulingTimedOut: false,
  lang: 'de',
  _nextId: 4
};

function L(k) { return i18n[state.lang][k]; }

// HTML-escape for use in attribute values and text content
function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }

// JS-string-escape for use in single-quoted JS strings inside HTML onclick attributes
function escJS(s) {
  return String(s)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n')
    .replace(/</g, '\\x3c');
}

function getTeamCap(team, month) {
  if (!team.capOverrides) team.capOverrides = {};
  const key = String(month);
  return team.capOverrides.hasOwnProperty(key) ? team.capOverrides[key] : team.capacity;
}

// ═══════════════════════════════════════════════════════
//  LocalStorage + debounced save
// ═══════════════════════════════════════════════════════
let storageOk = false;
try { localStorage.setItem('__t','1'); localStorage.removeItem('__t'); storageOk = true; } catch(e) {}

function saveState() {
  if (!storageOk) return;
  try {
    state._nextId = _nextId;
    const dot = document.getElementById('saveDot');
    const st  = document.getElementById('saveStatus');
    dot.classList.add('saving'); st.textContent = L('saving');
    localStorage.setItem('scheduler_v3', JSON.stringify(state));
    setTimeout(() => {
      dot.classList.remove('saving');
      st.textContent = L('saved')+' '+new Date().toLocaleTimeString(state.lang==='de'?'de-DE':'en-US');
    }, 300);
  } catch(e) {}
}

function loadState() {
  if (!storageOk) return false;
  try {
    const d = localStorage.getItem('scheduler_v3');
    if (d) { state = { ...state, ...JSON.parse(d) }; _nextId = state._nextId || 4; return true; }
  } catch(e) {}
  return false;
}

// Debounced save — fires 1.5 s after the last change
let _saveTimer = null;
function scheduleSave() {
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(saveState, 1500);
}

// ═══════════════════════════════════════════════════════
//  Team Management
// ═══════════════════════════════════════════════════════
function addTeam() {
  const id = newId();
  state.teams.push({ id, name:'Team '+state.teams.length, capacity:20, color:PALETTE[state.teams.length%PALETTE.length], capOverrides:{} });
  state.rows.forEach(r => { r.efforts[id] = 0; });
  state.msStart = null;
  renderCapacity(); renderTableHeaders(); renderTable(); hideSchedule();
  scheduleSave();
}

function removeTeam(id) {
  if (state.teams.length <= 1) { toast(L('toastMinTeam')); return; }
  state.teams = state.teams.filter(t => t.id !== id);
  state.rows.forEach(r => { delete r.efforts[id]; });
  state.msStart = null;
  renderCapacity(); renderTableHeaders(); renderTable(); hideSchedule();
  scheduleSave();
}

function updateTeam(id, prop, val) {
  const team = state.teams.find(t => t.id === id);
  if (!team) return;
  team[prop] = val;
  renderTableHeaders();
  // When default capacity changes, refresh the monthly table so non-overridden cells show the new value
  if (prop === 'capacity') renderCapMonthly();
  if (state.msStart) renderGantt();
  scheduleSave();
}

function cycleColor(id) {
  const team = state.teams.find(t => t.id === id);
  if (!team) return;
  team.color = PALETTE[(PALETTE.indexOf(team.color) + 1) % PALETTE.length];
  renderCapacity();
  if (state.msStart) renderGantt();
  scheduleSave();
}

function hideSchedule() {
  document.getElementById('ganttPanel').style.display = 'none';
  document.getElementById('warnPanel').style.display = 'none';
}

// ═══════════════════════════════════════════════════════
//  Render: Header, Toolbar, Labels
// ═══════════════════════════════════════════════════════
function renderHeader() {
  document.getElementById('appHeader').innerHTML = `
    <header>
      <h1><span>//</span> ${L('title')}</h1>
      <div class="header-right">
        <a href="https://github.com/mindactuate/multi-project-milestone-calculator" target="_blank" class="header-link" title="${L('githubTip')}">${GH}<span>${L('githubLabel')}</span></a>
        <a href="https://paypal.me/mindactuate" target="_blank" class="header-link paypal-link" title="${L('paypalTip')}">${PP}<span>${L('paypalLabel')}</span></a>
        <div class="lang-toggle">
          <button onclick="setLang('de')" class="${state.lang==='de'?'active':''}">DE</button>
          <button onclick="setLang('en')" class="${state.lang==='en'?'active':''}">EN</button>
        </div>
        <div class="save-indicator"><div class="save-dot" id="saveDot"></div><span id="saveStatus">${L('ready')}</span></div>
      </div>
    </header>`;
}

function renderToolbar() {
  document.getElementById('appToolbar').innerHTML = `
    <div class="toolbar">
      <button class="btn" onclick="document.getElementById('csvInput').click()">${L('btnLoadCSV')}</button>
      <button class="btn" onclick="exportCSV()">${L('btnSaveCSV')}</button>
      <button class="btn" onclick="loadExample()">${L('btnExample')}</button>
      <button class="btn" onclick="addRow()">${L('btnAddRow')}</button>
      <div class="strategy-toggle">
        <button class="btn ${state.strategy==='parallel'?'active':''}" onclick="setStrategy('parallel')" title="${L('stratParallelTip')}">${L('stratParallel')}</button>
        <button class="btn ${state.strategy==='speed'?'active':''}" onclick="setStrategy('speed')" title="${L('stratSpeedTip')}">${L('stratSpeed')}</button>
      </div>
      <button class="btn primary" onclick="runScheduler()">${L('btnSchedule')}</button>
      <button class="btn danger" onclick="clearAll()">${L('btnClear')}</button>
    </div>`;
}

function setStrategy(s) { state.strategy = s; renderToolbar(); if (state.msStart) runScheduler(); }
function setLang(lang) { state.lang = lang; document.documentElement.lang = lang; document.title = L('title'); renderAll(); saveState(); }

function renderAll() {
  renderHeader(); renderToolbar(); renderStaticLabels(); renderFooter();
  renderMonthSelector(); renderCapacity(); renderTableHeaders(); renderTable();
  if (state.msStart) renderGantt();
}

function renderStaticLabels() {
  document.getElementById('panelCapTitle').textContent    = L('panelCapacity');
  document.getElementById('panelDataTitle').textContent   = L('panelData');
  document.getElementById('panelGanttTitle').textContent  = L('panelGantt');
  document.getElementById('panelAnalysisTitle').textContent= L('panelAnalysis');
  document.getElementById('lblStart').textContent = L('lblStart');
  document.getElementById('lblYear').textContent  = L('lblYear');
}

function renderFooter() {
  const f = document.getElementById('appFooter');
  f.className = 'app-footer';
  f.innerHTML = `${L('disclaimer')}<div class="footer-links"><a onclick="openModal('impressum')">${L('footerImpressum')}</a><a onclick="openModal('datenschutz')">${L('footerDatenschutz')}</a></div>`;
}

function renderMonthSelector() {
  const sel = document.getElementById('startMonth');
  sel.innerHTML = '';
  L('months').forEach((m,i) => { const o=document.createElement('option'); o.value=i; o.textContent=m; sel.appendChild(o); });
  sel.value = state.startMonth;
}

// ═══════════════════════════════════════════════════════
//  Capacity
// ═══════════════════════════════════════════════════════
function renderCapacity() {
  const g = document.getElementById('capacityGrid');
  g.innerHTML = '';
  state.teams.forEach((team, idx) => {
    const c = document.createElement('div');
    c.className = 'cap-card';
    c.innerHTML = `
      <div class="cap-badge" style="background:${team.color}" onclick="cycleColor('${team.id}')">${idx+1}</div>
      <input type="text" class="cap-name-input" value="${esc(team.name)}" oninput="updateTeam('${team.id}','name',this.value)">
      <input type="number" class="cap-num-input" min="1" value="${team.capacity}" oninput="updateTeam('${team.id}','capacity',parseInt(this.value)||1)">
      <span class="cap-unit">PT/Mon</span>
      <button class="cap-del" onclick="removeTeam('${team.id}')">×</button>`;
    g.appendChild(c);
  });
  const addBtn = document.createElement('div');
  addBtn.className = 'cap-add'; addBtn.onclick = addTeam; addBtn.textContent = L('addTeam');
  g.appendChild(addBtn);
  renderCapMonthly();
}

function renderCapMonthly() {
  const el = document.getElementById('capMonthlyGrid');
  const mo = L('months');
  const numMonths = (state.msEnd ? Math.max(...state.msEnd) + 2 : 12);
  const num = Math.max(numMonths, 12);

  let html = `<div class="cap-monthly"><table><thead><tr><th></th>`;
  for (let m = 0; m < num; m++) {
    const mi = (state.startMonth + m) % 12;
    const yr = state.startYear + Math.floor((state.startMonth + m) / 12);
    html += `<th>${mo[mi]}<br>${String(yr).slice(2)}</th>`;
  }
  html += '</tr></thead><tbody>';

  state.teams.forEach(team => {
    if (!team.capOverrides) team.capOverrides = {};
    html += `<tr><td style="color:${team.color}">${esc(team.name)}</td>`;
    for (let m = 0; m < num; m++) {
      const key = String(m);
      const hasOvr = team.capOverrides.hasOwnProperty(key);
      // Always show the effective value — override is orange, default is normal
      const effectiveVal = hasOvr ? team.capOverrides[key] : team.capacity;
      html += `<td><input type="number" min="0" class="${hasOvr?'override':''}" value="${effectiveVal}" oninput="setCapOverride('${team.id}',${m},this)"></td>`;
    }
    html += '</tr>';
  });

  html += `</tbody></table></div>`;
  html += `<div class="cap-monthly-hint">${L('capMonthlyHint')}</div>`;
  el.innerHTML = html;
}

function setCapOverride(teamId, month, input) {
  const team = state.teams.find(t => t.id === teamId);
  if (!team) return;
  if (!team.capOverrides) team.capOverrides = {};
  const key = String(month);
  const raw = input.value.trim();
  const val = parseFloat(raw);

  if (raw === '' || isNaN(val) || val < 0) {
    // Invalid input — reset to current effective value without creating an override
    input.value = team.capacity;
    delete team.capOverrides[key];
    input.classList.remove('override');
  } else if (val === team.capacity) {
    // Typed the default value — remove override
    delete team.capOverrides[key];
    input.classList.remove('override');
  } else {
    team.capOverrides[key] = val;
    input.classList.add('override');
  }
  scheduleSave();
}

// ═══════════════════════════════════════════════════════
//  Table
// ═══════════════════════════════════════════════════════
function renderTableHeaders() {
  const tr = document.getElementById('tableHead');
  let html = `<th title="${L('prioTip')}" style="cursor:help;width:70px">${L('thPrio')}</th><th>${L('thProject')}</th><th>${L('thMilestone')}</th>`;
  state.teams.forEach(team => { html += `<th style="color:${team.color}">${esc(team.name)} (PT)</th>`; });
  html += `<th title="${L('waitTip')}" style="cursor:help">🔒</th>`;
  html += '<th style="width:40px"></th>';
  tr.innerHTML = html;
}

function renderTable() {
  const body = document.getElementById('dataBody');
  const empty = document.getElementById('emptyState');
  body.innerHTML = '';
  if (state.rows.length === 0) {
    empty.style.display = ''; empty.innerHTML = L('emptyState');
    document.getElementById('rowCount').textContent = L('entries')(0); return;
  }
  empty.style.display = 'none';
  document.getElementById('rowCount').textContent = L('entries')(state.rows.length);

  const projectOrder = [];
  const projectCount = {};
  state.rows.forEach((row) => {
    if (row.canOverlap === undefined) row.canOverlap = true;
    if (!projectCount[row.project]) {
      projectOrder.push(row.project);
      projectCount[row.project] = 0;
    }
    projectCount[row.project]++;
  });

  const seenProjects = new Set();

  state.rows.forEach((row, i) => {
    const isFirst = !seenProjects.has(row.project);
    if (row.project) seenProjects.add(row.project);

    const prioIdx = projectOrder.indexOf(row.project);
    const isFirstProject = prioIdx === 0;
    const isLastProject = prioIdx === projectOrder.length - 1;

    const tr = document.createElement('tr');
    let html = '';

    if (isFirst) {
      const msCount = projectCount[row.project];
      // Use escJS() for the project name inside the single-quoted JS string
      const projJS = escJS(row.project);
      html += `<td rowspan="${msCount}"><div class="prio-cell">
        <div style="display:flex;flex-direction:column;gap:1px;">
          <button class="prio-btn" onclick="moveProject('${projJS}',-1)" ${isFirstProject?'disabled':''} title="▲">▲</button>
          <button class="prio-btn" onclick="moveProject('${projJS}',1)" ${isLastProject?'disabled':''} title="▼">▼</button>
        </div>
        <span class="prio-num">${prioIdx + 1}</span>
      </div></td>`;
    }

    html += `<td><input type="text" value="${esc(row.project)}" oninput="state.rows[${i}].project=this.value;scheduleSave()" placeholder="${L('phProject')}"></td>
      <td><input type="text" value="${esc(row.milestone)}" oninput="state.rows[${i}].milestone=this.value;scheduleSave()" placeholder="${L('phMilestone')}"></td>`;
    state.teams.forEach(team => {
      html += `<td><input type="number" min="0" value="${row.efforts[team.id]||0}" oninput="state.rows[${i}].efforts['${team.id}']=parseFloat(this.value)||0;scheduleSave()"></td>`;
    });

    if (isFirst) {
      html += `<td><button class="ms-lock first" title="—" disabled>—</button></td>`;
    } else {
      const locked = !row.canOverlap;
      html += `<td><button class="ms-lock ${locked?'locked':'unlocked'}" onclick="toggleRowOverlap(${i})" title="${locked ? L('waitTip') : L('overlapTip')}">${locked?'🔒':'🔓'}</button></td>`;
    }
    html += `<td><button class="row-del" onclick="deleteRow(${i})">×</button></td>`;
    tr.innerHTML = html; body.appendChild(tr);
  });
}

function toggleRowOverlap(i) {
  state.rows[i].canOverlap = !state.rows[i].canOverlap;
  renderTable();
  if (state.msStart) runScheduler();
  scheduleSave();
}

function moveProject(projName, dir) {
  const blocks = [];
  let currentProj = null, currentBlock = [];
  state.rows.forEach(r => {
    if (r.project !== currentProj) {
      if (currentBlock.length) blocks.push({ name: currentProj, rows: currentBlock });
      currentProj = r.project;
      currentBlock = [r];
    } else {
      currentBlock.push(r);
    }
  });
  if (currentBlock.length) blocks.push({ name: currentProj, rows: currentBlock });

  const idx = blocks.findIndex(b => b.name === projName);
  if (idx < 0) return;
  const targetIdx = idx + dir;
  if (targetIdx < 0 || targetIdx >= blocks.length) return;

  [blocks[idx], blocks[targetIdx]] = [blocks[targetIdx], blocks[idx]];
  state.rows = blocks.flatMap(b => b.rows);
  state.msStart = null;
  renderTable();
  hideSchedule();
  scheduleSave();
}

function addRow() {
  const efforts = {}; state.teams.forEach(t => { efforts[t.id] = 0; });
  state.rows.push({ project:'', milestone:'', efforts, canOverlap: true });
  renderTable();
  scheduleSave();
}

function deleteRow(i) {
  state.rows.splice(i, 1);
  renderTable();
  scheduleSave();
}

// ═══════════════════════════════════════════════════════
//  CSV Import / Export
// ═══════════════════════════════════════════════════════
function importCSV(ev) {
  const file = ev.target.files[0]; if (!file) return;
  const r = new FileReader();
  r.onload = e => {
    parseCSV(e.target.result);
    renderCapacity(); renderTableHeaders(); renderTable();
    toast(L('toastCSVLoaded')(state.rows.length));
    saveState();
  };
  r.readAsText(file); ev.target.value = '';
}

function parseCSV(text) {
  const lines = text.trim().split('\n'); if (lines.length < 2) return;
  const sep = lines[0].includes(';') ? ';' : ',';
  const headers = lines[0].split(sep).map(h => h.trim().replace(/^"|"$/g,''));
  const teamCols = [];
  for (let c = 2; c < headers.length; c++) {
    const h = headers[c];
    if (/geplanter|planned|start|ende|end/i.test(h)) break;
    const name = h.replace(/\s*\(P[TD]\)\s*$/i, '').trim();
    if (name) teamCols.push({ colIdx: c, name });
  }
  if (teamCols.length > 0) {
    state.teams = teamCols.map((tc, i) => ({ id:'t'+(i+1), name:tc.name, capacity:20, color:PALETTE[i%PALETTE.length], capOverrides:{} }));
    _nextId = teamCols.length + 1;
  }
  state.rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(sep).map(c => c.trim().replace(/^"|"$/g,''));
    if (cols.length < 3) continue;
    const efforts = {};
    state.teams.forEach((team, ti) => { efforts[team.id] = parseFloat(cols[teamCols[ti]?.colIdx]) || 0; });
    state.rows.push({ project: cols[0]||'', milestone: cols[1]||'', efforts, canOverlap: true });
  }
  state.msStart = null;
}

function exportCSV() {
  if (state.rows.length === 0) { toast(L('toastNoExport')); return; }
  const mo = L('months');
  let csv = `${L('csvProject')};${L('csvMilestone')}`;
  state.teams.forEach(t => { csv += `;${t.name} (PT)`; });
  if (state.msStart) csv += `;${L('csvStart')};${L('csvEnd')}`;
  csv += '\n';
  state.rows.forEach((r, i) => {
    let line = `${r.project};${r.milestone}`;
    state.teams.forEach(t => { line += `;${r.efforts[t.id]||0}`; });
    if (state.msStart) {
      const fmt = m => { const mi=(state.startMonth+m)%12; const yr=state.startYear+Math.floor((state.startMonth+m)/12); return `${mo[mi]} ${yr}`; };
      line += `;${fmt(state.msStart[i])};${fmt(state.msEnd[i])}`;
    }
    csv += line + '\n';
  });
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download='projektplan.csv'; a.click();
  URL.revokeObjectURL(url);
  toast(L('toastCSVExported'));
}

// ═══════════════════════════════════════════════════════
//  SCHEDULER — Multi-month simulation
// ═══════════════════════════════════════════════════════
function runScheduler() {
  if (state.rows.length === 0) { toast(L('toastNoData')); return; }
  // State is kept in sync by oninput handlers — no DOM re-read needed

  const projects = {}, order = [];
  state.rows.forEach((r,i) => {
    if (!projects[r.project]) { projects[r.project]=[]; order.push(r.project); }
    projects[r.project].push({ ...r, idx:i });
  });

  const N = state.rows.length;
  const MAX = 48;

  const rem = state.rows.map(r => {
    const o = {};
    state.teams.forEach(t => { o[t.id] = r.efforts[t.id] || 0; });
    return o;
  });

  const msStart = new Array(N).fill(-1);
  const msEnd   = new Array(N).fill(-1);
  const used    = {};

  function isMsDone(idx) {
    return state.teams.every(t => rem[idx][t.id] <= 0);
  }

  function allDone() {
    for (let i = 0; i < N; i++) if (!isMsDone(i)) return false;
    return true;
  }

  function ensureUsed(m) {
    if (!used[m]) { used[m] = {}; state.teams.forEach(t => { used[m][t.id] = 0; }); }
  }

  function allocate(month, idx, teamId, amount) {
    if (amount <= 0) return 0;
    const actual = Math.min(amount, rem[idx][teamId]);
    if (actual <= 0) return 0;
    rem[idx][teamId] -= actual;
    ensureUsed(month);
    used[month][teamId] += actual;
    if (msStart[idx] === -1) msStart[idx] = month;
    return actual;
  }

  function getEligible(teamId, doneBeforeMonth) {
    const eligible = [];
    order.forEach(proj => {
      const milestones = projects[proj];
      for (let mi = 0; mi < milestones.length; mi++) {
        const idx = milestones[mi].idx;
        const row = state.rows[idx];
        const teamDone = rem[idx][teamId] <= 0;

        if (mi > 0) {
          const prevIdx = milestones[mi - 1].idx;
          if (row.canOverlap === false) {
            if (!doneBeforeMonth.has(prevIdx)) {
              if (rem[prevIdx][teamId] > 0) eligible.push(prevIdx);
              break;
            }
          } else {
            if (rem[prevIdx][teamId] > 0) { eligible.push(prevIdx); break; }
          }
        }

        if (!teamDone) { eligible.push(idx); break; }
      }
    });
    return eligible;
  }

  for (let month = 0; month < MAX; month++) {
    if (allDone()) break;

    const doneBeforeMonth = new Set();
    for (let i = 0; i < N; i++) { if (isMsDone(i)) doneBeforeMonth.add(i); }

    state.teams.forEach(team => {
      let cap = getTeamCap(team, month);
      if (cap <= 0) return;

      if (state.strategy === 'speed') {
        let safety = 0;
        while (cap > 0.001 && safety++ < 50) {
          const eligible = getEligible(team.id, doneBeforeMonth);
          if (eligible.length === 0) break;
          const idx = eligible[0];
          const spent = allocate(month, idx, team.id, cap);
          cap -= spent;
          if (spent === 0) break;
        }
      } else {
        const eligible = getEligible(team.id, doneBeforeMonth);
        if (eligible.length === 0) return;
        const totalNeed = eligible.reduce((s, idx) => s + rem[idx][team.id], 0);
        if (totalNeed <= 0) return;
        const availCap = Math.min(cap, totalNeed);

        let allocated = 0;
        eligible.forEach((idx, ei) => {
          const need = rem[idx][team.id];
          let share;
          if (ei === eligible.length - 1) {
            share = availCap - allocated;
          } else {
            share = Math.round(availCap * need / totalNeed * 100) / 100;
          }
          const spent = allocate(month, idx, team.id, Math.min(share, need));
          allocated += spent;
        });
      }
    });

    for (let i = 0; i < N; i++) {
      if (msEnd[i] === -1 && isMsDone(i)) msEnd[i] = month;
    }
  }

  // Flag if simulation timed out before all milestones were done
  state.schedulingTimedOut = !allDone();

  // Handle zero-effort milestones and unfinished ones
  for (let i = 0; i < N; i++) {
    const totalEffort = state.teams.reduce((s, t) => s + (state.rows[i].efforts[t.id] || 0), 0);
    if (totalEffort === 0) {
      for (const proj of order) {
        const ms = projects[proj];
        const mi = ms.findIndex(m => m.idx === i);
        if (mi === -1) continue;
        if (mi === 0) { msStart[i] = 0; msEnd[i] = 0; }
        else { const pe = msEnd[ms[mi-1].idx]; msStart[i] = pe >= 0 ? pe : 0; msEnd[i] = msStart[i]; }
        break;
      }
    }
    if (msStart[i] === -1) msStart[i] = 0;
    if (msEnd[i] === -1) msEnd[i] = MAX - 1;
  }

  state.msStart = msStart;
  state.msEnd = msEnd;
  state.usedCapacity = used;
  renderGantt();
  saveState();
  toast(L('toastScheduled'));
}

// ═══════════════════════════════════════════════════════
//  Gantt — multi-month bars
// ═══════════════════════════════════════════════════════
function renderGantt() {
  if (!state.msStart) return;
  document.getElementById('ganttPanel').style.display = '';

  const maxM = Math.max(...state.msEnd) + 1;
  const num  = Math.max(maxM, 6);
  const mo   = L('months');
  const CW = 80;

  const pc = {}; let ci = 0;
  state.rows.forEach(r => { if (!pc.hasOwnProperty(r.project)) { pc[r.project] = ci % 8; ci++; } });

  let html = '<div class="gantt-header">';
  for (let m = 0; m < num; m++) {
    const mi = (state.startMonth+m) % 12;
    const yr = state.startYear + Math.floor((state.startMonth+m)/12);
    html += `<div class="gantt-month">${mo[mi]} ${String(yr).slice(2)}</div>`;
  }
  html += '</div>';

  state.rows.forEach((row, i) => {
    const s = state.msStart[i], e = state.msEnd[i];
    const totalPT = state.teams.reduce((sum, t) => sum + (row.efforts[t.id]||0), 0);
    const left = s * CW + 4;
    const width = Math.max((e - s + 1) * CW - 8, 20);
    const dur = e - s + 1;

    html += `<div class="gantt-row"><div class="gantt-label"><span class="proj-tag">${esc(row.project)}</span>${esc(row.milestone)}</div><div class="gantt-bars">`;
    for (let j = 0; j < num; j++) html += '<div class="gantt-cell"></div>';
    html += `<div class="gantt-bar" style="background:${GANTT_COLORS[pc[row.project]]};left:${left}px;width:${width}px;">${totalPT > 0 ? totalPT+'PT · '+dur+'M' : ''}</div>`;
    html += '</div></div>';
  });

  document.getElementById('ganttChart').innerHTML = html;
  renderCapOverview(num);
  renderWarnings(num);
  document.getElementById('schedInfo').textContent = L('schedInfo')(num, Object.keys(pc).length, state.strategy);
}

function renderCapOverview(num) {
  const mo = L('months');
  let html = `<h3 style="font-family:var(--mono);font-size:11px;color:var(--text2);margin-bottom:6px;text-transform:uppercase;letter-spacing:1px;">${L('capUtilTitle')}</h3>`;
  html += `<p style="font-family:var(--mono);font-size:10px;color:var(--text2);margin-bottom:10px;">${L('capUtilHint')}</p>`;
  state.teams.forEach(team => {
    if (!team.capOverrides) team.capOverrides = {};
    html += `<div class="cap-row"><div class="cap-row-label"><div class="cap-badge" style="background:${team.color};width:22px;height:22px;font-size:10px;border-radius:4px;display:inline-flex;align-items:center;justify-content:center;color:#fff;font-family:var(--mono);font-weight:700;">&nbsp;</div> ${esc(team.name)}</div><div class="cap-cells">`;
    for (let m = 0; m < num; m++) {
      const u = (state.usedCapacity && state.usedCapacity[m] && state.usedCapacity[m][team.id]) || 0;
      const cap = getTeamCap(team, m);
      const hasOvr = team.capOverrides.hasOwnProperty(String(m));
      const pct = cap > 0 ? Math.round(u/cap*100) : 0;
      const w = Math.min(pct, 100);
      const over = pct > 100;
      const mi = (state.startMonth + m) % 12;
      const yr = state.startYear + Math.floor((state.startMonth + m) / 12);
      const editHint = state.lang === 'de' ? 'In Kapazitäts-Tabelle oben anpassen' : 'Edit in capacity panel above';
      html += `<div class="cap-cell${hasOvr?' has-override':''}" title="${esc(team.name)} ${mo[mi]} ${yr}: ${Math.round(u*10)/10}/${cap} PT (${pct}%)${hasOvr?' ★':''} — ${editHint}"><div class="cap-fill" style="width:${w}%;background:${over?'var(--red)':team.color};">${pct>30?`<span class="cap-pct">${pct}%</span>`:''}</div></div>`;
    }
    html += '</div></div>';
  });
  document.getElementById('capOverview').innerHTML = html;
}

function renderWarnings(num) {
  const mo = L('months'), w = [];

  // 48-month timeout warning
  if (state.schedulingTimedOut) {
    w.push({ type:'over', text: L('warnTimeout') });
  }

  // Capacity over-allocation warnings
  for (let m = 0; m < num; m++) {
    state.teams.forEach(team => {
      const u = (state.usedCapacity && state.usedCapacity[m] && state.usedCapacity[m][team.id]) || 0;
      const cap = getTeamCap(team, m);
      const mi = (state.startMonth+m)%12;
      const yr = state.startYear + Math.floor((state.startMonth+m)/12);
      if (u > cap + 0.01) w.push({type:'over', text: L('warnOver')(team.name, `${mo[mi]} ${yr}`, Math.round(u), cap, Math.round(u/cap*100))});
    });
  }

  // Project completion info
  const projects = {};
  state.rows.forEach((r,i) => { if (!projects[r.project]) projects[r.project] = []; projects[r.project].push(i); });
  Object.entries(projects).forEach(([proj, indices]) => {
    const lastEnd = Math.max(...indices.map(i => state.msEnd[i]));
    const mi = (state.startMonth+lastEnd)%12;
    const yr = state.startYear + Math.floor((state.startMonth+lastEnd)/12);
    w.push({type:'info', text: L('warnFinish')(proj, `${mo[mi]} ${yr}`)});
  });

  if (w.filter(x=>x.type==='over').length === 0) {
    w.unshift({type:'ok', text: L('warnOk')});
  }

  document.getElementById('warnPanel').style.display = '';
  document.getElementById('warnings').innerHTML = w.map(x => `<li class="${x.type}">${x.text}</li>`).join('');
}

// ═══════════════════════════════════════════════════════
//  Example Data
// ═══════════════════════════════════════════════════════
function loadExample() {
  const ex = L('exTeams');
  state.teams = ex.map((t,i) => ({ id:'t'+(i+1), name:t.name, capacity:t.cap, color:PALETTE[i%PALETTE.length], capOverrides:{} }));
  _nextId = ex.length + 1;
  const e = (a,b,c) => ({t1:a,t2:b,t3:c});
  state.rows = [
    {project:'Webshop',milestone:'Konzept',efforts:e(10,5,0),canOverlap:true},
    {project:'Webshop',milestone:'Entwicklung',efforts:e(15,0,8),canOverlap:true},
    {project:'Webshop',milestone:'Test & Go-Live',efforts:e(5,3,12),canOverlap:false},
    {project:'CRM Migration',milestone:'Analyse',efforts:e(0,12,4),canOverlap:true},
    {project:'CRM Migration',milestone:'Datenmigration',efforts:e(8,18,6),canOverlap:false},
    {project:'CRM Migration',milestone:'Rollout',efforts:e(3,10,10),canOverlap:false},
    {project:'API Gateway',milestone:'Design',efforts:e(12,0,0),canOverlap:true},
    {project:'API Gateway',milestone:'Implementierung',efforts:e(20,5,3),canOverlap:false},
    {project:'Mobile App',milestone:'UX Design',efforts:e(0,8,6),canOverlap:true},
    {project:'Mobile App',milestone:'Entwicklung',efforts:e(10,15,10),canOverlap:true},
    {project:'Mobile App',milestone:'Launch',efforts:e(5,5,15),canOverlap:false},
    {project:'Data Warehouse',milestone:'Architektur',efforts:e(14,0,3),canOverlap:true},
    {project:'Data Warehouse',milestone:'ETL Pipelines',efforts:e(18,4,10),canOverlap:false},
    {project:'Compliance',milestone:'Audit',efforts:e(0,10,15),canOverlap:true},
    {project:'Compliance',milestone:'Umsetzung',efforts:e(6,12,8),canOverlap:false},
    {project:'Intranet',milestone:'Redesign',efforts:e(8,10,5),canOverlap:true},
    {project:'Intranet',milestone:'Content Migration',efforts:e(3,15,4),canOverlap:true},
    {project:'IoT Dashboard',milestone:'Prototyp',efforts:e(12,6,4),canOverlap:true},
    {project:'IoT Dashboard',milestone:'Produktivsystem',efforts:e(16,8,12),canOverlap:false},
  ];
  state.msStart = null;
  renderCapacity(); renderTableHeaders(); renderTable(); hideSchedule();
  toast(L('toastExampleLoaded'));
  saveState();
}

function clearAll() {
  try { if (!confirm(L('confirmClear'))) return; } catch(e) { /* confirm blocked in sandbox */ }
  state.rows = []; state.msStart = null; state.msEnd = null; state.usedCapacity = null; state.schedulingTimedOut = false;
  renderTable(); hideSchedule(); saveState(); toast(L('toastCleared'));
}

// ═══════════════════════════════════════════════════════
//  Modals, Toast, Init
// ═══════════════════════════════════════════════════════
function openModal(type) {
  const id = type === 'impressum' ? 'modalImpressum' : 'modalDatenschutz';
  document.getElementById(id+'Content').innerHTML = '<button class="modal-close" onclick="closeModal(\''+id+'\')">×</button>' + legalContent[type][state.lang];
  document.getElementById(id).classList.add('open');
}
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.addEventListener('keydown', e => { if (e.key==='Escape') document.querySelectorAll('.modal-overlay.open').forEach(m=>m.classList.remove('open')); });

function toast(msg) { const el=document.getElementById('toast'); el.textContent=msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'),2500); }

(function init() {
  const loaded = loadState();
  renderAll();
  document.getElementById('startMonth').addEventListener('change', function() {
    state.startMonth = parseInt(this.value);
    if (state.msStart) runScheduler(); else renderCapMonthly();
    scheduleSave();
  });
  document.getElementById('startYear').addEventListener('change', function() {
    state.startYear = parseInt(this.value) || 2026;
    if (state.msStart) runScheduler(); else renderCapMonthly();
    scheduleSave();
  });
  document.getElementById('startMonth').value = state.startMonth;
  document.getElementById('startYear').value  = state.startYear;
  if (loaded && state.msStart) renderGantt();
})();
