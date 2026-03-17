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
    stratParallelTip:'Mehrere Projekte gleichzeitig — Kapazität proportional verteilt. N steuert wie viele.',
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
    schedInfo:(m,p,s,n) => `${m} Monate · ${p} Projekte · ${s==='parallel'?`⇉ ${n===0?'∞':n} parallel`:'⚡ Speed'}`,
    parallelNLabel: n => n === 0 ? '∞' : String(n),
    parallelNTip: n => n === 0 ? 'Alle Projekte gleichzeitig (nicht empfohlen bei > 4 Projekten)' : `Maximal ${n} Projekte gleichzeitig aktiv`,
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
    toastEmptyNames:'Bitte alle Projekt- und Meilensteinnamen ausfüllen.',
    toastStorageFull:'Speicher voll — Daten konnten nicht gespeichert werden.',
    btnShare:'⎘ Link teilen',
    toastShareCopied:'Link in Zwischenablage kopiert!',
    toastShareFailed:'Link konnte nicht kopiert werden.',
    disclaimer:'🔒 Alle Daten werden ausschließlich lokal in deinem Browser gespeichert (localStorage). Es werden keine Daten an einen Server gesendet.',
    csvProject:'Projekt', csvMilestone:'Meilenstein', csvPlannedMonth:'Geplanter Monat',
    csvStart:'Start', csvEnd:'Ende', csvWait:'Wartet', csvDep:'AbhängigVon',
    thDep:'Abhängig von',
    exTeams:[{name:'Entwicklung',cap:20},{name:'Design',cap:20},{name:'QA/Test',cap:20}],
    insertMilestone:'Meilenstein einfügen',
    insertProject:'+ Projekt',
    footerImpressum:'Impressum', footerDatenschutz:'Datenschutz',
    planningNew:'+ Neue Planung', planningDuplicate:'Planung duplizieren', planningDelete:'Planung löschen?', planningDefault:'Planung',
    planningShared:'Geteilte Planung', toastPlanningCreated:'Neue Planung erstellt', toastPlanningDuplicated:'Planung dupliziert',
    toastPlanningDeleted:'Planung gelöscht', planningMinOne:'Mindestens eine Planung erforderlich',
    planningRenameTip:'Doppelklick zum Umbenennen',
    bottleneckTitle:'Engpass-Analyse',
    bottleneckHint:'Welche Kapazitätserhöhung (+5 PT/Monat) verkürzt den Plan am meisten?',
    bottleneckResult:(team,inc,delta) => `${team} +${inc} PT/Monat → Gesamtplan ${Math.abs(delta)} ${Math.abs(delta)===1?'Monat':'Monate'} kürzer`,
    bottleneckProject:(proj,delta) => `${proj}: ${Math.abs(delta)} ${Math.abs(delta)===1?'Monat':'Monate'} früher`,
    bottleneckNoEffect:(team,inc) => `${team} +${inc} PT/Monat → kein Zeitgewinn`,
    toastTabSync:'Planungen aus anderem Tab synchronisiert',
    toastTabSyncActiveDeleted:'Aktive Planung wurde in anderem Tab gelöscht',
    toastTabSyncConflict:'Aktive Planung wurde in anderem Tab geändert',
    toastTabSyncApply:'Übernehmen',
    undo:'Rückgängig',
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
    stratParallelTip:'Multiple projects simultaneously — capacity distributed proportionally. N controls how many.',
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
    schedInfo:(m,p,s,n) => `${m} months · ${p} projects · ${s==='parallel'?`⇉ ${n===0?'∞':n} parallel`:'⚡ Speed'}`,
    parallelNLabel: n => n === 0 ? '∞' : String(n),
    parallelNTip: n => n === 0 ? 'All projects simultaneously (not recommended for > 4 projects)' : `At most ${n} projects active simultaneously`,
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
    toastEmptyNames:'Please fill in all project and milestone names.',
    toastStorageFull:'Storage full — data could not be saved.',
    btnShare:'⎘ Share link',
    toastShareCopied:'Link copied to clipboard!',
    toastShareFailed:'Could not copy link.',
    disclaimer:'🔒 All data is stored exclusively in your browser\'s local storage. No data is ever sent to a server.',
    csvProject:'Project', csvMilestone:'Milestone', csvPlannedMonth:'Planned Month',
    csvStart:'Start', csvEnd:'End', csvWait:'Wait', csvDep:'DependsOn',
    thDep:'Depends on',
    exTeams:[{name:'Development',cap:20},{name:'Design',cap:20},{name:'QA/Testing',cap:20}],
    insertMilestone:'Insert milestone',
    insertProject:'+ Project',
    footerImpressum:'Legal Notice', footerDatenschutz:'Privacy Policy',
    planningNew:'+ New Planning', planningDuplicate:'Duplicate planning', planningDelete:'Delete planning?', planningDefault:'Planning',
    planningShared:'Shared Planning', toastPlanningCreated:'New planning created', toastPlanningDuplicated:'Planning duplicated',
    toastPlanningDeleted:'Planning deleted', planningMinOne:'At least one planning required',
    planningRenameTip:'Double-click to rename',
    bottleneckTitle:'Bottleneck Analysis',
    bottleneckHint:'Which capacity increase (+5 PD/month) shortens the plan the most?',
    bottleneckResult:(team,inc,delta) => `${team} +${inc} PD/month → overall plan ${Math.abs(delta)} ${Math.abs(delta)===1?'month':'months'} shorter`,
    bottleneckProject:(proj,delta) => `${proj}: ${Math.abs(delta)} ${Math.abs(delta)===1?'month':'months'} earlier`,
    bottleneckNoEffect:(team,inc) => `${team} +${inc} PD/month → no time savings`,
    toastTabSync:'Plannings synced from another tab',
    toastTabSyncActiveDeleted:'Active planning was deleted in another tab',
    toastTabSyncConflict:'Active planning was changed in another tab',
    toastTabSyncApply:'Apply',
    undo:'Undo',
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
  strategy: 'speed',
  parallelism: 2,   // max simultaneous projects in parallel mode; 0 = unlimited (legacy behaviour)
  msStart: null,
  msEnd: null,
  usedCapacity: null,
  schedulingTimedOut: false,
  lang: 'de',
  theme: 'dark',
  _nextId: 4
};

// ═══════════════════════════════════════════════════════
//  Multiple Plannings
// ═══════════════════════════════════════════════════════
let plannings = [];
let activePlanningId = null;
let _planNextId = 1;
function newPlanId() { return 'p' + (_planNextId++); }

function defaultPlanningData() {
  return {
    teams: [
      { id:'t1', name:'Team A', capacity:20, color:PALETTE[0], capOverrides:{} },
      { id:'t2', name:'Team B', capacity:20, color:PALETTE[1], capOverrides:{} },
      { id:'t3', name:'Team C', capacity:20, color:PALETTE[2], capOverrides:{} },
    ],
    rows: [],
    startMonth: 0,
    startYear: new Date().getFullYear(),
    strategy: 'speed',
    parallelism: 2,
    msStart: null,
    msEnd: null,
    usedCapacity: null,
    schedulingTimedOut: false,
    _nextId: 4
  };
}

function syncStateToPlannings() {
  const idx = plannings.findIndex(p => p.id === activePlanningId);
  if (idx < 0) return;
  const name = plannings[idx].name;
  state._nextId = _nextId;
  plannings[idx] = { id: activePlanningId, name, teams: state.teams, rows: state.rows,
    startMonth: state.startMonth, startYear: state.startYear, strategy: state.strategy,
    parallelism: state.parallelism, msStart: state.msStart, msEnd: state.msEnd,
    usedCapacity: state.usedCapacity, schedulingTimedOut: state.schedulingTimedOut,
    _nextId: _nextId };
}

function loadPlanningIntoState(planning) {
  activePlanningId = planning.id;
  state.teams = planning.teams || defaultPlanningData().teams;
  state.rows = planning.rows || [];
  state.startMonth = planning.startMonth || 0;
  state.startYear = planning.startYear || new Date().getFullYear();
  state.strategy = planning.strategy || 'parallel';
  state.parallelism = planning.parallelism != null ? planning.parallelism : 2;
  state.msStart = planning.msStart || null;
  state.msEnd = planning.msEnd || null;
  state.usedCapacity = planning.usedCapacity || null;
  state.schedulingTimedOut = planning.schedulingTimedOut || false;
  _nextId = planning._nextId || 4;
}

function switchPlanning(id) {
  if (id === activePlanningId) return;
  syncStateToPlannings();
  const planning = plannings.find(p => p.id === id);
  if (!planning) return;
  loadPlanningIntoState(planning);
  renderAll();
  document.getElementById('startMonth').value = state.startMonth;
  document.getElementById('startYear').value  = state.startYear;
  if (state.msStart) renderGantt(); else hideSchedule();
  saveState();
}

function createPlanning(name) {
  syncStateToPlannings();
  const id = newPlanId();
  const data = defaultPlanningData();
  const planning = { id, name: name || (L('planningDefault') + ' ' + (plannings.length + 1)), ...data };
  plannings.push(planning);
  loadPlanningIntoState(planning);
  renderAll();
  document.getElementById('startMonth').value = state.startMonth;
  document.getElementById('startYear').value  = state.startYear;
  hideSchedule();
  saveState();
  toast(L('toastPlanningCreated'));
}

function duplicatePlanning(id) {
  syncStateToPlannings();
  const source = plannings.find(p => p.id === id);
  if (!source) return;
  const newId = newPlanId();
  const copy = JSON.parse(JSON.stringify(source));
  copy.id = newId;
  copy.name = source.name + ' (2)';
  // Insert right after the source
  const idx = plannings.findIndex(p => p.id === id);
  plannings.splice(idx + 1, 0, copy);
  loadPlanningIntoState(copy);
  renderAll();
  document.getElementById('startMonth').value = state.startMonth;
  document.getElementById('startYear').value  = state.startYear;
  if (state.msStart) renderGantt(); else hideSchedule();
  saveState();
  toast(L('toastPlanningDuplicated'));
}

function renamePlanning(id, newName) {
  const planning = plannings.find(p => p.id === id);
  if (!planning || !newName.trim()) return;
  planning.name = newName.trim();
  renderPlanningBar();
  saveState();
}

function deletePlanning(id) {
  if (plannings.length <= 1) { toast(L('planningMinOne')); return; }
  try { if (!confirm(L('planningDelete'))) return; } catch(e) {}
  const idx = plannings.findIndex(p => p.id === id);
  if (idx < 0) return;
  plannings.splice(idx, 1);
  if (id === activePlanningId) {
    const newActive = plannings[Math.min(idx, plannings.length - 1)];
    loadPlanningIntoState(newActive);
    renderAll();
    document.getElementById('startMonth').value = state.startMonth;
    document.getElementById('startYear').value  = state.startYear;
    if (state.msStart) renderGantt(); else hideSchedule();
  } else {
    renderPlanningBar();
  }
  saveState();
  toast(L('toastPlanningDeleted'));
}

function startRenamePlanning(id) {
  const tab = document.querySelector(`.planning-tab[data-id="${id}"] .tab-name`);
  if (!tab) return;
  const planning = plannings.find(p => p.id === id);
  if (!planning) return;
  const input = document.createElement('input');
  input.type = 'text';
  input.value = planning.name;
  input.className = 'tab-rename-input';
  input.style.cssText = 'font:inherit;background:var(--bg);color:var(--text);border:1px solid var(--accent);border-radius:3px;padding:1px 4px;width:' + Math.max(80, planning.name.length * 8) + 'px;outline:none;';
  const finish = () => {
    const val = input.value.trim();
    if (val && val !== planning.name) renamePlanning(id, val);
    else renderPlanningBar();
  };
  input.addEventListener('blur', finish);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') input.blur(); if (e.key === 'Escape') { input.value = planning.name; input.blur(); } });
  tab.replaceWith(input);
  input.focus();
  input.select();
}

function renderPlanningBar() {
  const bar = document.getElementById('planningBar');
  if (!bar) return;
  let html = '<div class="planning-bar">';
  plannings.forEach(p => {
    const active = p.id === activePlanningId ? ' active' : '';
    html += `<div class="planning-tab${active}" data-id="${p.id}">
      <span class="tab-name" onclick="switchPlanning('${p.id}')" ondblclick="startRenamePlanning('${p.id}')" title="${esc(L('planningRenameTip'))}">${esc(p.name)}</span>
      ${active ? `<button class="tab-dup" onclick="event.stopPropagation();duplicatePlanning('${p.id}')" title="${esc(L('planningDuplicate'))}">⧉</button>` : ''}
      ${plannings.length > 1 ? `<button class="tab-del" onclick="event.stopPropagation();deletePlanning('${p.id}')" title="×">×</button>` : ''}
    </div>`;
  });
  html += `<button class="planning-add" onclick="createPlanning()">${L('planningNew')}</button>`;
  html += '</div>';
  bar.innerHTML = html;
}

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
    syncStateToPlannings();
    const dot = document.getElementById('saveDot');
    const st  = document.getElementById('saveStatus');
    dot.classList.add('saving'); st.textContent = L('saving');
    const payload = JSON.stringify({
      activePlanningId,
      lang: state.lang,
      theme: state.theme,
      _planNextId,
      plannings
    });
    localStorage.setItem('scheduler_v4', payload);
    // Set cooldown so the echo from another tab's merge-save is ignored
    _tabSyncCooldown = Date.now();
    setTimeout(() => {
      dot.classList.remove('saving');
      st.textContent = L('saved')+' '+new Date().toLocaleTimeString(state.lang==='de'?'de-DE':'en-US');
    }, 300);
  } catch(e) {
    if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
      toast(L('toastStorageFull'));
    }
  }
}

function loadState() {
  if (!storageOk) return false;
  try {
    // Try v4 format first
    const d4 = localStorage.getItem('scheduler_v4');
    if (d4) {
      const wrapper = JSON.parse(d4);
      plannings = wrapper.plannings || [];
      activePlanningId = wrapper.activePlanningId;
      _planNextId = wrapper._planNextId || plannings.length + 1;
      state.lang = wrapper.lang || 'de';
      state.theme = wrapper.theme || 'dark';
      const active = plannings.find(p => p.id === activePlanningId) || plannings[0];
      if (active) { loadPlanningIntoState(active); return true; }
    }
    // Migrate from v3
    const d3 = localStorage.getItem('scheduler_v3');
    if (d3) {
      const old = JSON.parse(d3);
      state = { ...state, ...old };
      _nextId = state._nextId || 4;
      const id = newPlanId();
      plannings = [{ id, name: L('planningDefault') + ' 1',
        teams: state.teams, rows: state.rows, startMonth: state.startMonth, startYear: state.startYear,
        strategy: state.strategy, parallelism: state.parallelism || 2,
        msStart: state.msStart, msEnd: state.msEnd, usedCapacity: state.usedCapacity,
        schedulingTimedOut: state.schedulingTimedOut, _nextId }];
      activePlanningId = id;
      localStorage.removeItem('scheduler_v3');
      saveState();
      return true;
    }
  } catch(e) {}
  return false;
}

// ═══════════════════════════════════════════════════════
//  Cross-tab sync via storage event (planning-level merge)
// ═══════════════════════════════════════════════════════
let _tabSyncCooldown = 0;

function _showConflictToast(remotePlanning) {
  toast(L('toastTabSyncConflict'), {
    label: L('toastTabSyncApply'),
    persistent: true,
    fn: () => {
      const idx = plannings.findIndex(p => p.id === remotePlanning.id);
      if (idx >= 0) plannings[idx] = remotePlanning;
      loadPlanningIntoState(remotePlanning);
      renderAll();
      document.getElementById('startMonth').value = state.startMonth;
      document.getElementById('startYear').value  = state.startYear;
      if (state.msStart) renderGantt(); else hideSchedule();
      _tabSyncCooldown = Date.now();
      saveState();
    }
  });
}

window.addEventListener('storage', function(e) {
  if (e.key !== 'scheduler_v4' || !e.newValue) return;
  // Cooldown prevents ping-pong: after we save a merged result, the other tab
  // fires back — ignore events within 2s of our own merge-save.
  if (Date.now() - _tabSyncCooldown < 2000) return;
  try {
    const incoming = JSON.parse(e.newValue);
    if (!incoming.plannings || !Array.isArray(incoming.plannings)) return;

    // Sync current active planning into local plannings array before merging
    syncStateToPlannings();

    const incomingMap = new Map(incoming.plannings.map(p => [p.id, p]));
    const localMap = new Map(plannings.map(p => [p.id, p]));

    const merged = [];
    const seenIds = new Set();
    let activeConflict = null; // incoming version of active planning if it differs

    // 1. Walk through incoming plannings (authoritative order)
    for (const ip of incoming.plannings) {
      seenIds.add(ip.id);
      if (ip.id === activePlanningId && localMap.has(ip.id)) {
        // Keep local version of the active planning (user is working on it)
        merged.push(localMap.get(ip.id));
        // Detect if the other tab changed this planning (compare without name, which is cosmetic)
        const local = localMap.get(ip.id);
        const localCmp = JSON.stringify({ ...local, name: '' });
        const incomingCmp = JSON.stringify({ ...ip, name: '' });
        if (localCmp !== incomingCmp) {
          activeConflict = ip;
        }
      } else {
        // Accept the incoming version for all non-active plannings
        merged.push(ip);
      }
    }

    // 2. Keep local-only plannings (just created in this tab, not yet in other tab)
    for (const lp of plannings) {
      if (!seenIds.has(lp.id)) {
        merged.push(lp);
      }
    }

    // 3. Detect if active planning was deleted in the other tab
    const activeDeletedRemotely = activePlanningId
      && !incomingMap.has(activePlanningId)
      && localMap.has(activePlanningId);

    // 4. Update _planNextId to max of both to avoid ID collisions
    _planNextId = Math.max(_planNextId, incoming._planNextId || 0);

    // 5. Sync lang/theme from other tab
    let needFullRender = false;
    if (incoming.lang && incoming.lang !== state.lang) {
      state.lang = incoming.lang;
      document.documentElement.lang = state.lang;
      document.title = L('title');
      needFullRender = true;
    }
    if (incoming.theme && incoming.theme !== state.theme) {
      state.theme = incoming.theme;
      needFullRender = true;
    }

    plannings = merged;

    if (activeDeletedRemotely) {
      // Save the deleted planning so we can undo
      const deletedPlanning = localMap.get(activePlanningId);

      // Switch to another planning (or create a fresh one)
      if (merged.length > 0) {
        loadPlanningIntoState(merged[0]);
        activePlanningId = merged[0].id;
        renderAll();
        document.getElementById('startMonth').value = state.startMonth;
        document.getElementById('startYear').value  = state.startYear;
        if (state.msStart) renderGantt(); else hideSchedule();
      } else {
        createPlanning();
      }

      // Show toast with undo action
      if (deletedPlanning) {
        toast(L('toastTabSyncActiveDeleted'), {
          label: L('undo'),
          fn: () => {
            plannings.push(deletedPlanning);
            loadPlanningIntoState(deletedPlanning);
            activePlanningId = deletedPlanning.id;
            renderAll();
            document.getElementById('startMonth').value = state.startMonth;
            document.getElementById('startYear').value  = state.startYear;
            if (state.msStart) renderGantt(); else hideSchedule();
            _tabSyncCooldown = Date.now();
            saveState();
          }
        });
      } else {
        toast(L('toastTabSyncActiveDeleted'));
      }
    } else if (needFullRender) {
      // Lang or theme changed — full re-render needed
      renderAll();
      if (state.msStart) renderGantt();
      if (activeConflict) {
        _showConflictToast(activeConflict);
      } else {
        toast(L('toastTabSync'));
      }
    } else if (activeConflict) {
      // Active planning was changed in the other tab — let user decide
      renderPlanningBar();
      _showConflictToast(activeConflict);
    } else {
      // Normal sync — update the planning bar (new/renamed/reordered tabs)
      renderPlanningBar();
      toast(L('toastTabSync'));
    }

    // Persist merged state and set cooldown to avoid ping-pong
    _tabSyncCooldown = Date.now();
    saveState();
  } catch(e) {
    // Ignore parse errors from corrupted data
  }
});

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
  if (prop === 'capacity') val = Math.max(1, parseInt(val) || 1);
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
        <div class="theme-toggle">
          <button onclick="setTheme('light')" class="${state.theme==='light'?'active':''}" title="Light">☀</button>
          <button onclick="setTheme('dark')" class="${state.theme==='dark'?'active':''}" title="Dark">☾</button>
        </div>
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
        ${state.strategy==='parallel' ? `<div class="parallel-n" title="${esc(L('parallelNTip')(state.parallelism))}">
          <button class="pn-btn" onclick="adjustParallelism(-1)" ${state.parallelism===1?'disabled':''}>−</button>
          <span class="pn-val">${esc(L('parallelNLabel')(state.parallelism))}</span>
          <button class="pn-btn" onclick="adjustParallelism(1)">+</button>
        </div>` : ''}
        <button class="btn ${state.strategy==='speed'?'active':''}" onclick="setStrategy('speed')" title="${L('stratSpeedTip')}">${L('stratSpeed')}</button>
      </div>
      <button class="btn primary" onclick="runScheduler()">${L('btnSchedule')}</button>
      <button class="btn" onclick="copyShareLink()">${L('btnShare')}</button>
      <button class="btn danger" onclick="clearAll()">${L('btnClear')}</button>
    </div>`;
}

function setStrategy(s) { state.strategy = s; renderToolbar(); if (state.msStart) runScheduler(); scheduleSave(); }

function adjustParallelism(delta) {
  const numProjects = new Set(state.rows.map(r => r.project).filter(Boolean)).size || 8;
  const MAX_N = numProjects; // one step beyond max projects = unlimited (0)
  let next = state.parallelism + delta;
  if (next < 1) return;
  if (next > MAX_N) next = 0; // 0 = ∞
  state.parallelism = next;
  renderToolbar();
  if (state.msStart) runScheduler();
  scheduleSave();
}
function setLang(lang) { state.lang = lang; document.documentElement.lang = lang; document.title = L('title'); renderAll(); saveState(); }

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  renderHeader();
  saveState();
}

function renderAll() {
  document.documentElement.setAttribute('data-theme', state.theme || 'dark');
  renderHeader(); renderDisclaimer(); renderPlanningBar(); renderToolbar(); renderStaticLabels(); renderFooter();
  renderMonthSelector(); renderCapacity(); renderTableHeaders(); renderTable();
  if (state.msStart) renderGantt();
}

function renderDisclaimer() {
  document.getElementById('appDisclaimer').innerHTML =
    `<div class="disclaimer-bar">${L('disclaimer')}</div>`;
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
  f.innerHTML = `<div class="footer-links"><a onclick="openModal('impressum')">${L('footerImpressum')}</a><a onclick="openModal('datenschutz')">${L('footerDatenschutz')}</a></div>`;
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
  let html = `<th title="${L('prioTip')}" style="cursor:help;width:70px">${L('thPrio')}</th><th style="min-width:150px">${L('thProject')}</th><th style="min-width:150px">${L('thMilestone')}</th>`;
  state.teams.forEach(team => { html += `<th style="color:${team.color}">${esc(team.name)} (PT)</th>`; });
  html += `<th title="${L('waitTip')}" style="cursor:help">🔒</th>`;
  html += `<th style="min-width:140px" title="${L('thDep')}">${L('thDep')}</th>`;
  html += '<th style="width:60px"></th>';
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

  // Assign each row a group key: non-empty project names are grouped, empty ones are unique
  const rowGroupKey = [];
  let emptyCounter = 0;
  const projectOrder = [];
  const projectCount = {};
  state.rows.forEach((row) => {
    if (row.canOverlap === undefined) row.canOverlap = true;
    const key = row.project || `__empty_${emptyCounter++}`;
    rowGroupKey.push(key);
    if (!projectCount[key]) {
      projectOrder.push(key);
      projectCount[key] = 1;
    } else {
      projectCount[key]++;
    }
  });

  // Compute PT sums per project per team and total
  const projectSums = {};
  state.rows.forEach((row, i) => {
    const key = rowGroupKey[i];
    if (!projectSums[key]) {
      projectSums[key] = { total: 0 };
      state.teams.forEach(t => { projectSums[key][t.id] = 0; });
    }
    state.teams.forEach(t => {
      const v = row.efforts[t.id] || 0;
      projectSums[key][t.id] += v;
      projectSums[key].total += v;
    });
  });

  const seenProjects = new Set();
  let projectGroupIdx = 0;

  state.rows.forEach((row, i) => {
    const key = rowGroupKey[i];
    const isFirst = !seenProjects.has(key);
    seenProjects.add(key);

    const prioIdx = projectOrder.indexOf(key);
    const isFirstProject = prioIdx === 0;
    const isLastProject = prioIdx === projectOrder.length - 1;
    const bandClass = prioIdx % 2 === 0 ? 'band-even' : 'band-odd';

    // Find last row index of this project group
    let lastInGroup = i;
    for (let k = i + 1; k < state.rows.length; k++) {
      if (rowGroupKey[k] === key) lastInGroup = k; else break;
    }
    const isLast = (i === lastInGroup);

    const tr = document.createElement('tr');
    tr.className = bandClass;
    let html = '';

    if (isFirst) {
      // +1 for the summary row
      const msCount = projectCount[key] + 1;
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

    html += `<td><input type="text" value="${esc(row.project)}" oninput="state.rows[${i}].project=this.value;scheduleSave()" onchange="state.rows[${i}].project=this.value;saveState();renderTable()" placeholder="${L('phProject')}"></td>
      <td><input type="text" value="${esc(row.milestone)}" oninput="state.rows[${i}].milestone=this.value;scheduleSave()" onchange="state.rows[${i}].milestone=this.value;saveState();renderTable()" placeholder="${L('phMilestone')}"></td>`;
    state.teams.forEach(team => {
      html += `<td><input type="number" min="0" value="${row.efforts[team.id]||0}" oninput="state.rows[${i}].efforts['${team.id}']=Math.max(0,parseFloat(this.value)||0);scheduleSave()" onchange="state.rows[${i}].efforts['${team.id}']=Math.max(0,parseFloat(this.value)||0);saveState();renderTable()"></td>`;
    });

    if (isFirst) {
      html += `<td><button class="ms-lock first" title="—" disabled>—</button></td>`;
    } else {
      const locked = !row.canOverlap;
      html += `<td><button class="ms-lock ${locked?'locked':'unlocked'}" onclick="toggleRowOverlap(${i})" title="${locked ? L('waitTip') : L('overlapTip')}">${locked?'🔒':'🔓'}</button></td>`;
    }
    // Cross-project dependency dropdown
    let depHtml = `<select class="dep-select" onchange="setRowDep(${i},this.value)"><option value="">—</option>`;
    state.rows.forEach((r2, j) => {
      if (j === i) return; // skip self
      if (r2.project === row.project) return; // skip same project (handled by canOverlap)
      if (!r2.project || !r2.milestone) return;
      const val = `${r2.project}/${r2.milestone}`;
      const sel = row.waitFor === val ? ' selected' : '';
      depHtml += `<option value="${esc(val)}"${sel}>${esc(r2.project)} · ${esc(r2.milestone)}</option>`;
    });
    depHtml += '</select>';
    html += `<td>${depHtml}</td>`;
    // Actions: insert milestone below + delete
    html += `<td><div class="row-actions"><button class="row-insert" onclick="insertRow(${i + 1})" title="${L('insertMilestone')}">+</button><button class="row-del" onclick="deleteRow(${i})">×</button></div></td>`;
    tr.innerHTML = html; body.appendChild(tr);

    // After last milestone of a project group: render summary row
    if (isLast) {
      const sumTr = document.createElement('tr');
      sumTr.className = `${bandClass} project-sum-row`;
      let sumHtml = `<td colspan="2" class="sum-label">Σ ${esc(row.project)}</td>`;
      state.teams.forEach(team => {
        sumHtml += `<td class="sum-value">${projectSums[key][team.id]}</td>`;
      });
      // Empty cells for lock, dep, actions columns
      sumHtml += `<td></td><td></td><td><button class="row-insert-project" onclick="insertProjectAfter(${lastInGroup})" title="${L('insertProject')}">${L('insertProject')}</button></td>`;
      sumTr.innerHTML = sumHtml; body.appendChild(sumTr);
      projectGroupIdx++;
    }
  });
}

function insertRow(atIndex) {
  const efforts = {}; state.teams.forEach(t => { efforts[t.id] = 0; });
  // Inherit project name from preceding row if available
  const prevProject = atIndex > 0 ? state.rows[atIndex - 1].project : '';
  state.rows.splice(atIndex, 0, { project: prevProject, milestone:'', efforts, canOverlap: true, waitFor: null });
  renderTable();
  scheduleSave();
}

function insertProjectAfter(afterIndex) {
  const efforts = {}; state.teams.forEach(t => { efforts[t.id] = 0; });
  state.rows.splice(afterIndex + 1, 0, { project:'', milestone:'', efforts, canOverlap: true, waitFor: null });
  renderTable();
  scheduleSave();
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
  state.rows.push({ project:'', milestone:'', efforts, canOverlap: true, waitFor: null });
  renderTable();
  scheduleSave();
}

function setRowDep(i, val) {
  state.rows[i].waitFor = val || null;
  if (state.msStart) runScheduler();
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

  // Detect team columns — stop at known non-team column names
  const teamCols = [];
  for (let c = 2; c < headers.length; c++) {
    const h = headers[c];
    if (/geplanter|planned|start|ende|end|wartet|wait|abhängig|dependson/i.test(h)) break;
    // Extract capacity from header like "TeamName [20] (PT)" or "TeamName (PT)"
    const capMatch = h.match(/\[(\d+)\]/);
    const cap = capMatch ? parseInt(capMatch[1]) : 20;
    const name = h.replace(/\s*\[\d+\]\s*/, '').replace(/\s*\(P[TD]\)\s*$/i, '').trim();
    if (name) teamCols.push({ colIdx: c, name, cap });
  }

  // Detect Wait and DepOn column indices
  let waitColIdx = -1, depColIdx = -1;
  headers.forEach((h, i) => {
    if (/^wartet$|^wait$/i.test(h)) waitColIdx = i;
    if (/^abhängigvon$|^dependson$/i.test(h)) depColIdx = i;
  });

  if (teamCols.length > 0) {
    state.teams = teamCols.map((tc, i) => ({
      id: 't'+(i+1), name: tc.name, capacity: tc.cap,
      color: PALETTE[i%PALETTE.length], capOverrides: {}
    }));
    _nextId = teamCols.length + 1;
  }

  state.rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(sep).map(c => c.trim().replace(/^"|"$/g,''));
    if (cols.length < 3) continue;

    // Special override rows: __cap_ovr__;teamName;monthIdx;value
    if (cols[0] === '__cap_ovr__') {
      const team = state.teams.find(t => t.name === cols[1]);
      if (team) {
        const monthIdx = parseInt(cols[2]);
        const val = parseFloat(cols[3]);
        if (!isNaN(monthIdx) && !isNaN(val) && val >= 0) {
          if (!team.capOverrides) team.capOverrides = {};
          team.capOverrides[String(monthIdx)] = val;
        }
      }
      continue;
    }

    const efforts = {};
    state.teams.forEach((team, ti) => { efforts[team.id] = parseFloat(cols[teamCols[ti]?.colIdx]) || 0; });
    const waitVal = waitColIdx >= 0 ? cols[waitColIdx] : '';
    const depVal  = depColIdx  >= 0 ? cols[depColIdx]  : '';
    state.rows.push({
      project: cols[0]||'', milestone: cols[1]||'', efforts,
      canOverlap: waitVal !== '1' && waitVal.toLowerCase() !== 'lock',
      waitFor: depVal || null
    });
  }
  state.msStart = null;
}

function exportCSV() {
  if (state.rows.length === 0) { toast(L('toastNoExport')); return; }
  const mo = L('months');
  // Header: capacity included in team column name for round-trip fidelity
  let csv = `${L('csvProject')};${L('csvMilestone')}`;
  state.teams.forEach(t => { csv += `;${t.name} [${t.capacity}] (PT)`; });
  csv += `;${L('csvWait')};${L('csvDep')}`;
  if (state.msStart) csv += `;${L('csvStart')};${L('csvEnd')}`;
  csv += '\n';

  // Capacity override rows — one row per override
  state.teams.forEach(t => {
    if (!t.capOverrides) return;
    Object.entries(t.capOverrides).forEach(([monthIdx, val]) => {
      csv += `__cap_ovr__;${t.name};${monthIdx};${val};;;`;
      if (state.msStart) csv += ';;';
      csv += '\n';
    });
  });

  // Data rows
  const firstOfProject = new Set();
  state.rows.forEach((r, i) => {
    if (!firstOfProject.has(r.project)) firstOfProject.add(r.project);
    let line = `${r.project};${r.milestone}`;
    state.teams.forEach(t => { line += `;${r.efforts[t.id]||0}`; });
    // Wait: first milestone of a project is always 0 (no predecessor)
    const isFirst = state.rows.findIndex(x => x.project === r.project) === i;
    line += `;${(!isFirst && !r.canOverlap) ? 1 : 0}`;
    line += `;${r.waitFor || ''}`;
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
// Pure scheduling function — no side effects, no global state access
function simulateSchedule(rows, teams, strategy, parallelism) {
  const projects = {}, order = [];
  rows.forEach((r,i) => {
    if (!projects[r.project]) { projects[r.project]=[]; order.push(r.project); }
    projects[r.project].push({ ...r, idx:i });
  });

  const N = rows.length;
  const MAX = 48;

  const rem = rows.map(r => {
    const o = {};
    teams.forEach(t => { o[t.id] = r.efforts[t.id] || 0; });
    return o;
  });

  const msStart = new Array(N).fill(-1);
  const msEnd   = new Array(N).fill(-1);
  const used    = {};

  function isMsDone(idx) {
    return teams.every(t => rem[idx][t.id] <= 0);
  }

  function allDone() {
    for (let i = 0; i < N; i++) if (!isMsDone(i)) return false;
    return true;
  }

  function ensureUsed(m) {
    if (!used[m]) { used[m] = {}; teams.forEach(t => { used[m][t.id] = 0; }); }
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
    const maxProjects = (strategy === 'parallel' && parallelism > 0)
      ? parallelism
      : Infinity;
    let projsContributing = 0;

    for (const proj of order) {
      if (projsContributing >= maxProjects) break;

      const milestones = projects[proj];
      let contributed = false;

      for (let mi = 0; mi < milestones.length; mi++) {
        const idx = milestones[mi].idx;
        const row = rows[idx];
        const teamDone = rem[idx][teamId] <= 0;

        if (row.waitFor) {
          const sep = row.waitFor.lastIndexOf('/');
          const depProj = row.waitFor.slice(0, sep);
          const depMs   = row.waitFor.slice(sep + 1);
          const depIdx  = rows.findIndex(r => r.project === depProj && r.milestone === depMs);
          if (depIdx >= 0 && !doneBeforeMonth.has(depIdx)) {
            break;
          }
        }

        if (mi > 0) {
          const prevIdx = milestones[mi - 1].idx;
          if (row.canOverlap === false) {
            if (!doneBeforeMonth.has(prevIdx)) {
              if (rem[prevIdx][teamId] > 0) { eligible.push(prevIdx); contributed = true; }
              break;
            }
          } else {
            if (rem[prevIdx][teamId] > 0) { eligible.push(prevIdx); contributed = true; break; }
          }
        }

        if (!teamDone) { eligible.push(idx); contributed = true; break; }
      }

      if (contributed) projsContributing++;
    }
    return eligible;
  }

  for (let month = 0; month < MAX; month++) {
    if (allDone()) break;

    const doneBeforeMonth = new Set();
    for (let i = 0; i < N; i++) { if (isMsDone(i)) doneBeforeMonth.add(i); }

    teams.forEach(team => {
      let cap = getTeamCap(team, month);
      if (cap <= 0) return;

      if (strategy === 'speed') {
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
        let budget = cap;
        let outerSafety = 0;
        while (budget > 0.001 && outerSafety++ < 10) {
          const eligible = getEligible(team.id, doneBeforeMonth);
          if (eligible.length === 0) break;
          const totalAvailNeed = eligible.reduce((s, idx) => s + rem[idx][team.id], 0);
          if (totalAvailNeed <= 0) break;
          const roundBudget = Math.min(budget, totalAvailNeed);

          let pending = [...eligible];
          let remaining = roundBudget;
          let innerSafety = 0;
          while (remaining > 0.001 && pending.length > 0 && innerSafety++ < 10) {
            const totalNeed = pending.reduce((s, idx) => s + rem[idx][team.id], 0);
            if (totalNeed <= 0) break;
            const nextPending = [];
            let roundSpent = 0;
            for (let j = 0; j < pending.length; j++) {
              const idx = pending[j];
              const need = rem[idx][team.id];
              const share = j === pending.length - 1
                ? remaining - roundSpent
                : Math.round(remaining * need / totalNeed * 100) / 100;
              const spent = allocate(month, idx, team.id, Math.min(share, need));
              roundSpent += spent;
              if (rem[idx][team.id] > 0.001) nextPending.push(idx);
            }
            remaining -= roundSpent;
            if (nextPending.length === pending.length) break;
            pending = nextPending;
          }

          const usedThisRound = roundBudget - remaining;
          budget -= usedThisRound;
          if (usedThisRound < 0.001) break;
        }
      }
    });

    for (let i = 0; i < N; i++) {
      if (msEnd[i] === -1 && isMsDone(i)) msEnd[i] = month;
    }
  }

  const timedOut = !allDone();

  // Handle zero-effort milestones and unfinished ones
  for (let i = 0; i < N; i++) {
    const totalEffort = teams.reduce((s, t) => s + (rows[i].efforts[t.id] || 0), 0);
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

  return { msStart, msEnd, usedCapacity: used, timedOut };
}

function runScheduler() {
  if (state.rows.length === 0) { toast(L('toastNoData')); return; }
  if (state.rows.some(r => !r.project.trim() || !r.milestone.trim())) { toast(L('toastEmptyNames')); return; }

  const result = simulateSchedule(state.rows, state.teams, state.strategy, state.parallelism);
  state.msStart = result.msStart;
  state.msEnd = result.msEnd;
  state.usedCapacity = result.usedCapacity;
  state.schedulingTimedOut = result.timedOut;

  renderGantt();
  renderCapMonthly();
  saveState();
  toast(L('toastScheduled'));
}

// ── Bottleneck Analysis ──
function runBottleneckAnalysis() {
  if (!state.msEnd || state.rows.length === 0) return [];

  // Baseline: project end months
  const projectEndBaseline = {};
  state.rows.forEach((r, i) => {
    if (!projectEndBaseline[r.project] || state.msEnd[i] > projectEndBaseline[r.project])
      projectEndBaseline[r.project] = state.msEnd[i];
  });
  const baselineTotal = Math.max(...Object.values(projectEndBaseline));

  const CAP_INCREASE = 5;
  const results = [];

  state.teams.forEach(team => {
    // Deep-copy teams with this team's capacity increased
    const modTeams = state.teams.map(t => {
      if (t.id === team.id) {
        return { ...t, capacity: t.capacity + CAP_INCREASE, capOverrides: { ...t.capOverrides } };
      }
      return { ...t, capOverrides: { ...t.capOverrides } };
    });

    const sim = simulateSchedule(state.rows, modTeams, state.strategy, state.parallelism);

    // Project end months in this simulation
    const projectEndSim = {};
    state.rows.forEach((r, i) => {
      if (!projectEndSim[r.project] || sim.msEnd[i] > projectEndSim[r.project])
        projectEndSim[r.project] = sim.msEnd[i];
    });
    const simTotal = Math.max(...Object.values(projectEndSim));

    const projectDeltas = [];
    Object.keys(projectEndBaseline).forEach(proj => {
      const delta = (projectEndSim[proj] || 0) - (projectEndBaseline[proj] || 0);
      if (delta < 0) projectDeltas.push({ project: proj, delta });
    });
    projectDeltas.sort((a, b) => a.delta - b.delta);

    results.push({
      teamId: team.id,
      teamName: team.name,
      capIncrease: CAP_INCREASE,
      totalDelta: simTotal - baselineTotal,
      projectDeltas
    });
  });

  // Sort: biggest improvement first
  results.sort((a, b) => a.totalDelta - b.totalDelta);
  return results;
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
  document.getElementById('schedInfo').textContent = L('schedInfo')(num, Object.keys(pc).length, state.strategy, state.parallelism ?? 2);
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

  // Bottleneck analysis
  let bottleneckHtml = '';
  const bn = runBottleneckAnalysis();
  if (bn.length > 0) {
    bottleneckHtml = `<li class="bottleneck-section"><strong>${L('bottleneckTitle')}</strong><span class="bottleneck-hint">${L('bottleneckHint')}</span></li>`;
    bn.forEach((r, idx) => {
      if (r.totalDelta < 0) {
        const icon = idx === 0 ? '🏆' : '📊';
        let detail = r.projectDeltas.map(pd => L('bottleneckProject')(pd.project, pd.delta)).join(' · ');
        bottleneckHtml += `<li class="bottleneck-item improvement">${icon} ${L('bottleneckResult')(r.teamName, r.capIncrease, r.totalDelta)}${detail ? `<div class="bottleneck-detail">${detail}</div>` : ''}</li>`;
      } else {
        bottleneckHtml += `<li class="bottleneck-item neutral">○ ${L('bottleneckNoEffect')(r.teamName, r.capIncrease)}</li>`;
      }
    });
  }

  document.getElementById('warnPanel').style.display = '';
  document.getElementById('warnings').innerHTML = w.map(x => `<li class="${x.type}">${x.text}</li>`).join('') + bottleneckHtml;
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
//  URL Share  (gzip + base64 for compact links)
// ═══════════════════════════════════════════════════════
async function encodeStateToHash() {
  const payload = {
    teams: state.teams,
    rows: state.rows,
    startMonth: state.startMonth,
    startYear: state.startYear,
    strategy: state.strategy,
    parallelism: state.parallelism,
    lang: state.lang,
    _nextId: _nextId,
  };
  try {
    const json = JSON.stringify(payload);
    if (typeof CompressionStream !== 'undefined') {
      const bytes = new TextEncoder().encode(json);
      const cs = new CompressionStream('gzip');
      const writer = cs.writable.getWriter();
      writer.write(bytes); writer.close();
      const buf = await new Response(cs.readable).arrayBuffer();
      const binary = String.fromCharCode(...new Uint8Array(buf));
      return 'gz:' + btoa(binary);
    }
    // Fallback: plain base64 (no CompressionStream support)
    const bytes = new TextEncoder().encode(json);
    let binary = '';
    bytes.forEach(b => binary += String.fromCharCode(b));
    return btoa(binary);
  } catch(e) { return null; }
}

async function decodeHashToState(hash) {
  try {
    if (hash.startsWith('gz:')) {
      const binary = atob(hash.slice(3));
      const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
      const ds = new DecompressionStream('gzip');
      const writer = ds.writable.getWriter();
      writer.write(bytes); writer.close();
      const buf = await new Response(ds.readable).arrayBuffer();
      return JSON.parse(new TextDecoder().decode(buf));
    }
    // Legacy: plain base64
    const binary = atob(hash);
    const bytes = new Uint8Array([...binary].map(c => c.charCodeAt(0)));
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch(e) { return null; }
}

async function copyShareLink() {
  const encoded = await encodeStateToHash();
  if (!encoded) { toast(L('toastShareFailed')); return; }
  const url = `${location.origin}${location.pathname}#share=${encoded}`;
  navigator.clipboard.writeText(url).then(() => {
    toast(L('toastShareCopied'));
  }).catch(() => {
    toast(L('toastShareFailed'));
  });
}

async function loadFromHash() {
  const hash = location.hash;
  if (!hash.startsWith('#share=')) return false;
  const decoded = await decodeHashToState(hash.slice(7));
  if (!decoded || !decoded.rows || !decoded.teams) return false;
  // Remove hash from URL so refreshing doesn't re-apply it
  history.replaceState(null, '', location.pathname);
  // Determine a name for the shared planning
  const projects = [...new Set(decoded.rows.map(r => r.project).filter(Boolean))];
  const sharedName = projects.length > 0
    ? projects.slice(0, 2).join(', ') + (projects.length > 2 ? ' …' : '')
    : L('planningShared');
  // Save current planning if one exists
  if (activePlanningId) syncStateToPlannings();
  // Create a new planning from the shared data
  const id = newPlanId();
  const planning = {
    id, name: sharedName,
    teams: decoded.teams, rows: decoded.rows,
    startMonth: decoded.startMonth || 0, startYear: decoded.startYear || new Date().getFullYear(),
    strategy: decoded.strategy || 'parallel', parallelism: decoded.parallelism != null ? decoded.parallelism : 2,
    msStart: null, msEnd: null, usedCapacity: null, schedulingTimedOut: false,
    _nextId: decoded._nextId || 4
  };
  plannings.push(planning);
  loadPlanningIntoState(planning);
  if (decoded.lang) state.lang = decoded.lang;
  return true;
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

let _toastTimer = null;
function toast(msg, action) {
  const el = document.getElementById('toast');
  clearTimeout(_toastTimer);
  el.classList.remove('show', 'has-action');
  // Small delay so CSS transition replays if toast is already visible
  requestAnimationFrame(() => {
    if (action) {
      el.innerHTML = '';
      const span = document.createElement('span');
      span.textContent = msg;
      const btn = document.createElement('button');
      btn.className = 'toast-undo';
      btn.textContent = action.label;
      btn.onclick = () => { el.classList.remove('show', 'has-action'); clearTimeout(_toastTimer); action.fn(); };
      el.appendChild(span);
      el.appendChild(btn);
      el.classList.add('show', 'has-action');
      if (!action.persistent) {
        _toastTimer = setTimeout(() => el.classList.remove('show', 'has-action'), 8000);
      }
    } else {
      el.textContent = msg;
      el.classList.add('show');
      _toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
    }
  });
}

(async function init() {
  // Load existing data from localStorage first (needed for loadFromHash to add to plannings)
  loadState();
  // URL hash takes priority — adds a new planning from shared link
  const fromHash = await loadFromHash();
  // If no plannings exist at all, create a default one
  if (plannings.length === 0) {
    const id = newPlanId();
    const data = defaultPlanningData();
    plannings = [{ id, name: L('planningDefault') + ' 1', ...data }];
    activePlanningId = id;
    loadPlanningIntoState(plannings[0]);
  }

  renderAll();
  document.getElementById('startMonth').addEventListener('change', function() {
    state.startMonth = parseInt(this.value);
    if (state.msStart) runScheduler(); else renderCapMonthly();
    scheduleSave();
  });
  document.getElementById('startYear').addEventListener('change', function() {
    state.startYear = Math.max(2000, Math.min(2099, parseInt(this.value) || 2026));
    this.value = state.startYear;
    if (state.msStart) runScheduler(); else renderCapMonthly();
    scheduleSave();
  });
  document.getElementById('startMonth').value = state.startMonth;
  document.getElementById('startYear').value  = state.startYear;

  if (fromHash && state.rows.length > 0) {
    // Auto-schedule so the recipient sees the full plan immediately
    runScheduler();
    saveState();
  } else if (state.msStart) {
    renderGantt();
  }
})();
