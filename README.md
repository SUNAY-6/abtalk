# ABTalks — 60 Day Coding Challenge (Redesign)

Mobile-first redesign for ABTalks' 60-day coding challenge. Built for Indian college students who ship late at night on their phones.

**Live Preview (390px):** https://5173-iwnxok2w33ikf82s9fbd2.e2b.app  
*(Dev server running on E2B — best viewed at 390px width. For production, run `npm run build`)*

**Stack:** Vite + React + React Router + Tailwind CSS v4 + lucide-react

### Route Map (for auto screenshots)

```
/
/dashboard
/day/12
```

Open each at 390px width. No auth required — all data mocked.

---

## Screens

### 1. Landing `/`
First experience for a student who has never heard of ABTalks.
- **Hero** with live counter (812 shipping today) + Night Owl hook
- **How it works** in 3 steps (Pick track → Build daily → Submit proof)
- **Thoughtful feature:** Night Owl Window + Streak Freeze highlighted
- **Tracks** (Frontend / Backend / AI/ML / DSA)
- **60-day timeline** (6 sprints)
- **Wall of Proof** — real LinkedIn-style posts (incl. featured 60/60 finisher)
- FAQ + final CTA
- Sticky nav, trust rail (Razorpay, Zomato, etc.)

### 2. Dashboard `/dashboard`
Home after logging in. Essentials + edge cases.
- **Current streak** — 11 days, 7-day calendar strip (✓ done / ✗ missed / today)
- **Missed day handling:** Day 8 missed → empathetic banner ("Everyone misses. You recovered 4 straight.")
- **First-day handling:** Conditional empty state (🌱 "No streak yet — that's perfect")
- **Today's Task** — Day 12 Weather App card (45 min, deliverables + 812 shipped today)
- **Progress** — 11/60 bar (18%), journey milestones, completed/remaining/rank grid
- **Overall completion** — stats + consistency 92%
- **Standing** — #342, percentile bar, +24 this week
- **Recruiter visibility** — 47 views, tip ("screenshot = 3× views")
- **Achievements** — 3/6 unlocked (First Commit, 7-Day, Night Owl)
- **Empty profile edge** — GitHub connected, LinkedIn missing → nudge
- Night Owl banner + Freeze explainer

All data mocked in `src/data.js` (also exportable as JSON).

### 3. Challenge Day `/day/12` (also `/day/:id`)
Complete single-day experience.
- **Day meta:** Day 12/60, Frontend, Intermediate, 45–60 min, time left till 2 AM
- **Brief** + "What to build" checklist (4 objectives, checkboxes)
- **Starter & Stack** + Resources (API, Figma, video)
- **Submission — Proof of Work:**
  - GitHub repo/commit URL (validates `github.com`)
  - LinkedIn post URL (validates `linkedin.com`)
  - Real-time validation, error states, success ticks
  - **Thoughtful idea: One-tap LinkedIn Caption Generator** — turns GitHub URL into a polished LinkedIn draft (copy + open LinkedIn). Saves 10 min of writing at 1 AM.
  - Checklist before submit (public repo, README, public post)
  - Submit button states (incomplete → ready → shipped)
  - Shows streak freeze available, peer review explainer

Handles: invalid URLs, empty state, submitted state, late-night grace period.

---

## Thoughtful Idea

**Night Owl Window + Streak Freeze + Caption Generator**

> Most students open ABTalks 10PM–2AM after college. So we built the product around that reality:

1. **Night Owl Window — submit till 2:00 AM IST** (not midnight). Shown on every screen (hero badge, dashboard streak card, Day header, submission panel). Nudge at 9 PM.
2. **Streak Freeze — 1 per 15 days.** Miss a day without guilt. Dashboard shows "1 FREEZE LEFT", explains how it works, celebrates the comeback after Day 8 miss.
3. **One-tap LinkedIn Caption Generator** on Day page — generates a ready-to-post caption from your GitHub link. Removes the biggest friction (writing a post late at night).

This trio respects real student behavior instead of punishing it.

---

## Edge Cases Handled

- **First day / no streak:** "No streak yet — that's perfect" empty state with CTA, zero-state calendar
- **Missed day:** Empathetic banner on dashboard + Day ("You missed Day 8 — and that's okay"), freeze saved, streak continues
- **Empty profile:** LinkedIn missing → yellow nudge + "Add URL" CTA, explains 4× boost

All rendered with realistic mocked data.

---

## Mobile-first (390px)

- Containers: `max-w-[390px] md:max-w-[1100px] mx-auto` — perfect at 390, expands to 2-col desktop
- Thumb-friendly: 44–48px CTAs, large tap targets, bottom sticky actions avoided (all in-flow)
- Late-night readability: warm paper `#FFFBF0`, high contrast ink `#0E0F13`, orange `#FF4D00` primary, generous 13–15px body, no tiny text
- No horizontal scroll, tested at 390

Desktop is secondary: hero splits 2-col, dashboard grids to 2-col, Day becomes 1.2/0.8 split with sticky submit.

---

## Running Locally

```bash
cd abtalks
npm install
npm run dev      # http://localhost:5173
npm run build    # production
npm run preview
```

### Mocked Data
`src/data.js` exports:
- `student` (streak, rank, freezes)
- `progressDays` (60 days)
- `streakCalendar` (last 7 days)
- `achievements`
- `day12` (task, objectives, resources)
- `tracks`, `wallOfProof`

Swap JSON via `src/data.js` — no backend needed. Auth is mocked (no login).

---

## Design Tokens

- **Bg:** `#FFFBF0` (warm paper) • **Surface:** `#FFFFFF` • **Ink:** `#0E0F13` • **Muted:** `#6B7280` • **Border:** `#E7E5E4`
- **Accent:** `#FF4D00` (CTA) • **Accent2:** `#FFD230` (flame) • **Success:** `#22C55E` • **LinkedIn:** `#0A66C2`
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (mono)

---

## Files

- `/src/pages/Landing.jsx`
- `/src/pages/Dashboard.jsx`
- `/src/pages/Day.jsx`
- `/src/data.js`
- `/src/App.jsx` (Router)
- `/ROUTE_MAP.txt`

Built for 390px auto-capture. Desktop is bonus.
