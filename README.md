# // Project Scheduler

**A capacity-constrained multi-project milestone scheduler that runs entirely in your browser.**

No server, no signup, no dependencies — just open the HTML file and start planning.

![Screenshot](screenshot.png)

---

## What it does

You have **multiple projects**, each with **milestones**, and **several teams** that contribute effort (in person-days) to each milestone. The scheduler finds the earliest possible month for each milestone, respecting:

- **Sequential milestones** — within a project, milestones must happen in order
- **Team capacity limits** — no team can exceed its monthly capacity in any given month
- **Greedy-forward scheduling** — each milestone is assigned to the earliest month where all involved teams still have enough capacity

The result is a **Gantt chart** with a **capacity utilization heatmap** and automatic **overload warnings**.

---

## Features

### Core Scheduling
- Greedy capacity-constrained scheduling algorithm
- Sequential milestone ordering per project
- Configurable start month and year
- Up to 48 months planning horizon

### Dynamic Teams
- Add and remove teams freely (no fixed limit)
- Custom team names and per-team monthly capacity (in person-days)
- Click the color badge to cycle through 15 colors
- At least one team is always required

### Data Management
- **CSV Import** — load your project data from a CSV file (`;` or `,` separated, auto-detected)
- **CSV Export** — save the plan including scheduled months back to CSV
- **Auto-save** — state is saved to `localStorage` every 5 seconds
- **Example data** — one-click load of 8 sample projects with 19 milestones
- Inline editing of all fields directly in the table

### Visualization
- **Gantt Chart** — color-coded bars per project, showing total effort per milestone
- **Capacity Heatmap** — per-team utilization bars for each month (green = ok, red = overloaded)
- **Analysis Panel** — lists all months where a team exceeds its capacity, with exact numbers

### Internationalization
- Full **German (DE)** and **English (EN)** UI
- One-click language toggle in the header
- All labels, buttons, tooltips, warnings, CSV headers, and toasts are translated
- Language preference is persisted

### Privacy
- **100% client-side** — all data stays in your browser's `localStorage`
- No server, no cookies, no tracking, no analytics
- No external API calls — the only external resources are Google Fonts

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

The CSV uses `;` as separator (`,` is also auto-detected). The first row contains headers:

```
Project;Milestone;Development (PT);Design (PT);QA/Testing (PT)
Webshop;Concept;10;5;0
Webshop;Development;15;0;8
Webshop;Test & Go-Live;5;3;12
```

**Import behavior:**
- Team columns are auto-detected from headers (everything after Project and Milestone that ends in `(PT)` or `(PD)`)
- Team names are extracted from the headers (stripping the unit suffix)
- Existing teams are replaced by the teams found in the CSV

**Export adds** an extra column `Planned Month` with the scheduled month if scheduling has been run.

---

## How the Algorithm Works

1. Projects are processed in the order they appear in the data
2. Within each project, milestones are scheduled sequentially (the next milestone can start at the earliest one month after the previous one)
3. For each milestone, the algorithm scans forward from the earliest possible month
4. A milestone "fits" into a month if **every team** involved has enough remaining capacity
5. Once placed, the team capacities for that month are reserved
6. If no month fits within 48 months, the milestone is placed at month 48 (fallback)

This is a **greedy heuristic**, not an optimal solver. It works well for typical project portfolios but does not guarantee the globally shortest schedule. Project order matters — projects listed first get priority access to capacity.

---

## Tech Stack

- **Zero dependencies** — single HTML file, vanilla JavaScript, CSS
- **Google Fonts** — JetBrains Mono + DM Sans (loaded via CDN)
- **No build step** — no npm, no bundler, no framework
- Tested in Chrome, Firefox, Safari, Edge

---

## Contributing

1. Fork the repo
2. Edit `index.html`
3. Open a Pull Request

Since it's a single file, there's no build process — just edit and test in the browser.

---

## Support

If you find this tool useful:

- ⭐ [Star this repo](https://github.com/mindactuate/multi-project-milestone-calculator)
- ☕ [Buy me a coffee](https://paypal.me/mindactuate)

---

## License

GPLv3 — see [LICENSE](LICENSE) for details.
