# // Project Scheduler

**A capacity-constrained multi-project milestone scheduler that runs entirely in your browser.**

No server, no signup, no dependencies — just open the HTML file and start planning.

Link: [https://mindactuate.github.io/multi-project-milestone-calculator/](https://mindactuate.github.io/multi-project-milestone-calculator/)

![Screenshot 1](screenshot1.png)

![Screenshot 2](screenshot2.png)

---

## What it does

You have **multiple projects**, each with **milestones**, and **several teams** that contribute effort (in person-days) to each milestone. The scheduler simulates **month-by-month execution**, where teams work off their effort over multiple months, respecting:

- **Team capacity limits** — each team has a monthly budget in person-days
- **Multi-month milestones** — if a milestone needs 50 PD from a team with 20 PD/month, it takes 3 months
- **Per-milestone dependencies** — each milestone can be marked as 🔒 (must wait for predecessor to fully complete) or 🔓 (team can start once it individually finishes the predecessor)
- **Two scheduling strategies** — maximize parallelization across projects, or prioritize completing high-priority projects first

The result is a **Gantt chart** with multi-month bars, a **capacity utilization heatmap**, and automatic **overload warnings** and **project completion dates**.

---

## Features

### Core Scheduling
- **Multi-month simulation** — teams work off effort over time, not "one milestone = one month"
- **Two scheduling strategies:** Max. Parallelization and Max. Speed/Priority
- **Parallel mode N-control** — set how many projects run simultaneously (default: 2); `∞` = all at once
- **Per-milestone dependency control** — 🔒/🔓 toggle per milestone row
- **Cross-project dependencies** — any milestone can wait for a milestone in a different project to fully complete
- **Project priority** — ▲/▼ arrows to reorder project blocks (top = highest priority in Speed mode)
- One-click strategy toggle with automatic re-scheduling
- Configurable start month and year
- Up to 48 months planning horizon

### Dynamic Teams
- Add and remove teams freely (no fixed limit)
- Custom team names and per-team monthly capacity (in person-days)
- Click the color badge to cycle through 15 colors
- At least one team is always required

### Multiple Plannings
- **Create, switch, rename, and delete** multiple independent plannings within a single browser
- **Duplicate planning** — one-click deep copy of the active planning (⧉ button on the active tab)
- **Tab-based UI** — planning tabs above the toolbar; double-click to rename, × to delete
- **Share link adds a new planning** — recipients keep their existing plannings; the shared data is added as a new tab instead of overwriting
- **Cross-tab sync** — open the app in multiple browser tabs and changes sync automatically at the planning level:
  - Edits to non-active plannings are applied silently
  - If another tab edits the same planning you're working on, a persistent toast lets you **apply** the remote changes when you're ready
  - If another tab deletes your active planning, an **undo** toast lets you restore it
  - Language and theme changes sync across all tabs
- Seamless switching between plannings with full state preservation (teams, rows, schedule, capacity overrides)
- Automatic migration from single-planning format (v3 → v4) — existing data is preserved

### Data Management
- **CSV Import** — load your project data from a CSV file (`;` or `,` separated, auto-detected)
- **CSV Export** — full round-trip fidelity: team capacities, monthly overrides, lock states, cross-project dependencies, and scheduled months are all preserved
- **Auto-save** — state is continuously saved to `localStorage`
- **Share link** — encodes the full plan as a gzip-compressed URL hash; recipients get it as a new planning tab
- **Example data** — one-click load of 8 sample projects with 19 milestones
- Inline editing of all fields directly in the table

### Visualization
- **Gantt Chart** — multi-month color-coded bars per project, showing total effort and duration
- **Capacity Heatmap** — per-team utilization bars for each month (green = ok, red = overloaded)
- **Analysis Panel** — capacity warnings, plus project completion dates
- **Bottleneck Analysis** — after scheduling, automatically simulates +5 PD/month per team and shows which capacity increase shortens the plan the most (e.g., "Development +5 PD/month → overall plan 2 months shorter")
- **Sticky table header** — column headers stay visible when scrolling through many rows
- **Responsive columns** — project and milestone columns maintain readable widths even with many teams

### Internationalization
- Full **German (DE)** and **English (EN)** UI
- One-click language toggle in the header
- All labels, buttons, tooltips, warnings, CSV headers, and toasts are translated
- Language preference is persisted

### Privacy & Legal
- **100% client-side** — all data stays in your browser's `localStorage`, prominently shown at the top of the UI
- No server, no cookies, no tracking, no analytics
- **No external resources** — no Google Fonts, no CDN calls, no tracking pixels
- System fonts only (SF Mono, Segoe UI, etc.) — zero network requests beyond the initial file load

---

## Getting Started

### Option 1: Just open it
1. Download `index.html`
2. Open it in any modern browser
3. Done.

### Option 2: Use the hosted version
Visit the GitHub Pages deployment (if enabled) or open the raw HTML file directly.

---

## CSV Format

The CSV uses `;` as separator (`,` is also auto-detected). Headers include the team's default capacity in brackets for full round-trip fidelity:

```
Project;Milestone;Development [20] (PT);Design [20] (PT);QA/Testing [20] (PT);Wait;DependsOn
__cap_ovr__;Development;2;10;;;
Webshop;Concept;10;5;0;0;
Webshop;Development;15;0;8;0;
Webshop;Test & Go-Live;5;3;12;1;
CRM;Rollout;3;0;8;0;Webshop/Test & Go-Live
```

**Column reference:**

| Column | Description |
|--------|-------------|
| `Project` | Project name |
| `Milestone` | Milestone name |
| `TeamName [cap] (PT)` | Effort in person-days; `[cap]` = default monthly capacity |
| `Wait` | `1` = 🔒 strict lock on predecessor, `0` = 🔓 overlap allowed |
| `DependsOn` | Cross-project dependency as `Project/Milestone`; empty = none |
| `Start` / `End` | Scheduled months (added on export if scheduling was run) |

**Special rows:**

`__cap_ovr__;TeamName;MonthIndex;Value` — overrides a team's capacity for a specific month (0-based index). These rows are written at the top of the file and parsed on re-import.

**Import behavior:**
- Team columns are auto-detected (everything before `Wait`/`DependsOn`/`Start`/`End` that ends in `(PT)` or `(PD)`)
- Default capacity is read from `[N]` in the column header; falls back to 20 if absent
- `Wait`, `DependsOn`, and capacity overrides are all restored on import
- Existing teams are replaced by the teams found in the CSV

---

## How the Algorithm Works

The scheduler runs a **month-by-month simulation**. Each month, every team distributes its available capacity across *eligible* milestones according to the chosen strategy.

### What makes a milestone eligible?

A milestone is eligible for a team if:

1. The team still has remaining effort on it (`rem > 0`), **and**
2. Its within-project predecessor is unblocked (see 🔒/🔓 below), **and**
3. Its cross-project dependency (if any) has been fully completed by all teams in a previous month

### Per-Milestone Dependencies (🔒/🔓)

Each milestone (except the first in a project) has a dependency toggle that controls when a team may *start* it:

| Mode | Meaning |
|------|---------|
| **🔓 Overlap allowed** (default) | A team starts this milestone as soon as *it* finishes the predecessor — even if other teams are still working on it |
| **🔒 Strict wait** | This milestone starts only after *all* teams have fully completed the predecessor |

**Example:**

```
Dev has 20 PD/month.  QA has 20 PD/month.

Milestone "Development":  Dev=40 PD,  QA=0 PD
Milestone "Testing":      Dev=0  PD,  QA=30 PD
```

With **🔓** on Testing:
- Month 1: Dev works on Development (20 PD done, 20 left). QA has nothing yet.
- Month 2: Dev finishes Development. QA can now start Testing immediately (Dev is done with its portion).
- Month 2: QA works on Testing (20 PD). Month 3: QA finishes.

With **🔒** on Testing:
- Month 1–2: same as above — Dev finishes in month 2.
- Month 3: *Now* QA may start (all teams finished Development). Month 3–4: QA finishes.

> The 🔒 lock costs one extra month here because Dev completed its last portion of Development during month 2, but Testing could not open until month 3. This is the expected behavior for a monthly-granularity scheduler — it prevents testing from starting before the sprint boundary where development is confirmed done.

Use 🔓 when teams can work in parallel (e.g. writing docs while code is still being reviewed). Use 🔒 when a hard handover is required (e.g. testing can't begin until the build is signed off).

### Cross-Project Dependencies

Any milestone can declare that it must wait for a milestone in a *different* project to fully complete. This is separate from the within-project 🔒/🔓 toggle.

**Example:** The "Rollout" milestone of project CRM should only start after the "Test & Go-Live" milestone of project Webshop is done (because CRM depends on the new Webshop API).

Set `DependsOn = Webshop/Test & Go-Live` on the CRM Rollout milestone. The scheduler will hold all teams back from working on CRM Rollout (and anything after it in CRM) until Webshop Test & Go-Live is globally complete.

### ⇉ Max. Parallelization

Each team distributes its monthly capacity **proportionally** across the top-N eligible projects (by priority order). All active projects progress simultaneously; projects outside the N-slot queue up and start as soon as a slot opens.

**The N control** (the `−`/`+` stepper next to the Parallel button) sets how many projects are active at once:

| N | Behaviour |
|---|-----------|
| 1 | Identical to Speed mode |
| 2 | Two highest-priority projects run simultaneously |
| 3–4 | Good balance for most portfolios |
| ∞ | All projects simultaneously — only useful for very small portfolios (≤ 3 projects) |

> **Why not always use ∞?** With 8 projects and 3 teams, each team's 20 PD/month gets split 8 ways (≈ 2–3 PD/project). A 40 PD milestone takes 13+ months instead of 2. Dependency chains multiply the effect — the scheduler can time out at 48 months before finishing. N = 2 or 3 avoids this fragmentation while still making multiple projects progress simultaneously.

**Example — one team (20 PD/month), three projects, N = 2:**

```
Project Alpha (prio 1):  A1 — 30 PD
Project Beta  (prio 2):  B1 — 20 PD
Project Gamma (prio 3):  C1 — 40 PD   ← outside the N=2 window, queued
```

Month 1: Alpha + Beta active. A1 gets `20 × 30/50 = 12 PD`, B1 gets `20 × 20/50 = 8 PD`.
Month 2: A1 has 18 left, B1 has 12 left. Same split: A1 gets 12, B1 gets 8.
Month 3: A1 finishes (6 PD left → done). Gamma enters the active window. Leftover goes to B1 + C1.
...

If a milestone finishes mid-month and its 🔓 successor opens up, the remaining budget is immediately redistributed to the new eligible set in the same month.

**When to use:** When you have contractual or stakeholder commitments to multiple projects and cannot leave any of them completely idle — but still want meaningful progress on each, not a thin spread across all of them at once.

### ⚡ Max. Speed (Priority)

Each team puts **all capacity into the highest-priority eligible milestone** first. Only if there's leftover capacity does it spill to the next priority level. Projects higher in the table have higher priority — use the ▲/▼ arrows in the Prio column to reorder.

This is equivalent to Parallel mode with N = 1, but the intent is different: Speed is optimised for the fastest possible completion of the most important project, not for balanced progress.

**Example — same setup, Alpha is priority 1:**

```
Project Alpha (prio 1):  Milestone A1 — 30 PD remaining
Project Beta  (prio 2):  Milestone B1 — 10 PD remaining
```

Month 1: All 20 PD → A1. (30 − 20 = 10 remaining)
Month 2: 10 PD → A1 (done), 10 PD leftover → B1 (done).

Alpha finishes in month 2 instead of month 3. Beta also finishes in month 2 because the leftover capacity spills over. Total calendar time is the same here, but Alpha's completion is front-loaded.

**When to use:** When one project has a hard deadline or a business-critical dependency and must finish as fast as possible, even at the expense of slower progress on lower-priority projects.

### Common rules

- Teams work off their effort over multiple months (e.g., 50 PD at 20 PD/month = 3 months)
- A milestone is complete only when **all** teams have finished their portion
- Capacity overrides (e.g., a team has reduced capacity in December) are respected by both strategies
- Both strategies are greedy heuristics — they produce good schedules for typical portfolios but do not guarantee a globally optimal solution

---

## Tech Stack

- **Zero dependencies** — vanilla JavaScript, no npm, no bundler, no framework
- **Three files** — `index.html`, `app.js`, `style.css`
- **System fonts** — no external font loading (DSGVO-compliant, no Google Fonts CDN)
- **No external requests** — completely self-contained, zero network requests at runtime
- Tested in Chrome, Firefox, Safari, Edge

---

## Contributing

1. Fork the repo
2. Edit `index.html`, `app.js`, and/or `style.css`
3. Open a Pull Request

There's no build process — just edit and test in the browser.

---

## Support

If you find this tool useful:

- ⭐ [Star this repo](https://github.com/mindactuate/multi-project-milestone-calculator)
- ☕ [Buy me a coffee](https://paypal.me/mindactuate)

---

## License

GPLv3 — see [LICENSE](LICENSE) for details.
