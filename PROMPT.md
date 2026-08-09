# ABTalks — 60-Day Coding Challenge | AI Build Prompt

> This `PROMPT.md` documents the exact prompt and AI workflow used to design & build the three screens. Use it to reproduce the project in any AI workflow (Arena, Claude, ChatGPT, Lovable, v0, etc.).

---

## 1. Original Brief (Situation)

```
ABTalks runs a 60-day coding challenge for Indian college students.

Students pick a track, build something every day, and maintain a public learning streak by submitting:

A GitHub commit
A LinkedIn post

This daily proof of work helps them build consistency and become visible to recruiters.

Most students use the platform on their phones, late at night after college.

The product works. It has never been designed.
```

### Ship at Minimum — Build these 3 screens:

1. **Landing Page (/)**
   The first experience for a student who has never heard of ABTalks.
   Show enough trust, clarity, and motivation that they're willing to commit to a 60-day challenge.

2. **Student Dashboard (/dashboard)**
   The home screen after logging in. Include essentials such as:
   - Current streak
   - Today's task
   - Progress through the challenge
   - Overall completion
   - Student standing or achievements

3. **Challenge Day (/day/12)**
   The complete experience of a single challenge day. A student should be able to:
   - Read the day's task
   - Understand what needs to be built
   - Submit proof of work (GitHub repository/commit, LinkedIn post)

Along with your repository and live deployment URL, include a Route Map. Provide the three routes below, one per line, in this exact order:
/
 /dashboard
 /day/12

We'll open every submission at 390px width (mobile viewport) and automatically capture screenshots of these routes.

### What We're Looking For
- Be designed mobile-first (390px), with desktop as a secondary consideration.
- Be understandable to a student who has never heard of ABTalks.
- Handle real-world edge cases such as: First day with no streak, A missed day, An empty profile
- Introduce at least one thoughtful idea that improves the student experience.

### Out of Scope
- Do not need to build: Authentication, Real user accounts, A production database. Use mocked data instead. A simple JSON file (written by you or generated using AI) is sufficient.
- Also out of scope: Recruiter dashboard, Admin panel, Matching ABTalks' current tech stack
- Build using any framework your AI workflow is most productive with.

```

---

## 2. Master AI Build Prompt (Copy-Paste to Reproduce)

```
You are a senior product designer + frontend engineer. Build ABTalks 60-day challenge redesign.

BRAND: ABTalks, warm paper bg #FFFBF0, ink #0E0F13, accent #FF4D00, accent2 #FFD230, success #22C55E, LinkedIn #0A66C2. Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (mono).

CONSTRAINTS:
- Mobile-first 390px, desktop secondary (max-w-[390px] md:max-w-[1100px] mx-auto)
- Thumb-friendly: 44-48px CTAs, 13-15px body, high contrast
- Use mocked data in src/data.js (student, progress, day12, tracks, wallOfProof)
- React + Vite + Tailwind v4 + react-router-dom. No auth.

THOUGHTFUL IDEA TO IMPLEMENT:
"Night Owl Window + Streak Freeze + One-Tap LinkedIn Caption Generator"
Most students open at 10PM-2AM. So day counts till 2:00 AM IST, 1 Freeze per 15 days, and a button that turns GitHub URL into LinkedIn caption (copy + open LinkedIn).

EDGE CASES (must be visible in UI):
- First day with no streak: seed empty state "No streak yet — that's perfect."
- Missed day: Day 8 missed banner "You missed Day 8 — and that's okay. You recovered 4 straight."
- Empty profile: GitHub connected, LinkedIn missing -> "Add LinkedIn to get discovered (4x views)" nudge.

ROUTES (exact, in order):
/
 /dashboard
 /day/12
 /day/:id (generic)

BUILD THESE 3 PAGES IN DETAIL:

**PAGE 1: Landing (/)**
- Sticky nav: AB logo + 60-DAY CHALLENGE pill + Dashboard + Start Day 1 CTA
- Trust pill: LIVE 812 shipping today + avatar stack (4.8/5)
- Hero: "Get hired before you graduate." with underline on "before", subhead 60 days one commit one post, CTA Start Day 1 — It's free (orange) + meta 10-60 min/day, No credit card, 2 AM grace
- Phone mock on right: Day 12 Today, Weather App 45 min, 11 day streak, TODAY'S PROOF 2 done (GitHub Committed + LinkedIn Posted), Streak keep-alive Submit before 2 AM, Completion 18% + Views 47, floating badges Night Owl till 2 AM + 1 freeze available. Use custom GithubIcon/LinkedinIcon SVG (lucide has no brand icons).
- Trusted strip: Students placed at Razorpay Zomato Flipkart Infosys TCS Swiggy
- How it works 3 cards (Pick track, Build daily, Submit proof) + Thoughtful Idea block (black card, Moon icon, 2 AM IST + Freeze)
- Tracks 4 cards (Frontend, Backend, AI/ML, DSA) with emoji, color, level
- What you'll ship in 60 days: 6 sprints W1-2 Foundations etc + Day 60 Capstone black bar
- Wall of proof: 3 LinkedIn-style posts (featured 60/60 finisher)
- Final CTA black card Start tonight + FAQ 3 details + Footer with ROUTE MAP

**PAGE 2: Dashboard (/dashboard)**
- Sticky header: AB + DASHBOARD pill, Day 12 of 60 18%, 11 day streak flame, avatar AM
- Greeting: Hey, Aarav 👋 RVCE Frontend + Continue Day 12 CTA desktop
- Your Journey: 11/60 18% bar with milestones Day 1, Day 30, Day 60 + 3 stats COMPLETED 11 | REMAINING 49 | RANK #342
- Current streak card: 11 days, Longest 11, 7-day calendar strip (JUL 7 done green, JUL 8 missed red X, JUL 9-11 done, AUG 12 today black, AUG 13 upcoming), Missed Day 8 red banner + Freeze saved, expandable Night Owl info, footer CONSISTENCY 92%
- Today's Task card: link to /day/12, orange top border, tag FRONTEND, INTERMEDIATE, 45-60 min, title Weather App..., brief, 3 objective tiles (Fetch live weather etc), Start building CTA + BookOpen icon, 812 shipped today Live
- 2-col grid: Standing (#342 Top 32% +24 this week + percentile bar 68%) + Recruiter visibility (47 VIEWS, 12x this week, tip screenshot 3x)
- Achievements 3/6 unlocked grid (First Commit, 7 Day Streak, Night Owl unlocked green, others locked)
- 2-col: This week list (Day 9-10-11 SHIPPED green, Day 12 TODAY black, Day 13 LOCKED) + Your profile black card (AM avatar, Aarav Mehta, GitHub connected aaravmehta, LinkedIn Not added + Add URL, Empty profile tip 4x)
- Help footer: Shipping late tonight? window closes 2 AM Remind me + Route Map pills

**PAGE 3: Challenge Day (/day/12 and /day/:id)**
- Sticky header: back arrow to /dashboard, DAY 12 OF 60 center, Dashboard pill + AM avatar
- Progress: back link desktop, progress bar 11/60 + Due 5h42m, mobile Due 2 AM + 11 streak
- Submitted state (if submitted): green success F0FDF4 banner Submitted Day 12 secured, streak now 12, Back to dashboard + Edit
- Title block: pills DAY 12, FRONTEND, INTERMEDIATE, 45-60 min + title Weather App that doesn't look like tutorial + description + Night Owl banner black Moon icon Till 2 AM IST Freeze available
- 2-col md: left 1.2fr right 0.8fr
  Left:
  - What to build card: checklist 4 objectives (Fetch live weather etc) checkboxes, PRO TIPS (cache, skeleton loaders, what to wear)
  - STARTER & STACK: github.com/abtalks/starter-day12-weather HTML CSS JS, Open starter + Watch 12-min guide
  - How you'll be reviewed: 3 deliverables Live demo, GitHub repo, LinkedIn post all REQUIRED
  - Resources: OpenWeather Free Tier, Figma inspo, 12-min video
  Right sticky:
  - Submit proof card: header Submit proof + 812 today, status stepper 2 bars INCOMPLETE->READY->SHIPPED, form GitHub repo/commit URL (validate includes github.com) + LinkedIn post URL (linkedin.com) + real-time green/red states + Must be public pills
  - Thoughtful: Can't write the post? Generate draft button -> turns GitHub into LinkedIn caption textarea (Day 12/60 Built weather app... Stack React + OpenWeather... Building in public #ABTalks...), Copy caption + Open LinkedIn
  - Before you submit checklist (public + README etc)
  - Submit Day 12 CTA (disabled gray until both valid, then orange) + peer review explainer 3 steps
  - Footer Streak freeze available + What happens after submit + Need help Discord
- Bottom nav: Day 11 <- Dashboard -> Day 13 + Route Map pills
- Handle validation: touched + !valid -> red border + AlertCircle error, touched + valid -> green border + Check
- Mock submit: canSubmit = isGithubValid && isLinkedinValid, on submit setSubmitted true

DESIGN TOKENS: bg #FFFBF0 surface #FFFFFF ink #0E0F13 muted #6B7280 border #E7E5E4 accent #FF4D00. Use lucide-react icons (no Github/Linkedin, use custom SVG). Use Tailwind arbitrary values.

Create src/data.js with all mocked data. Provide vite.config.js with allowedHosts:true for E2B preview. Provide ROUTE_MAP.txt with 3 lines.
```

---

## 3. GitHub Pages Fix Prompt

```
If deploying to GitHub Pages project site https://username.github.io/abtalk/:
- vite.config.js: base: mode === "production" ? "/abtalk/" : "/"
- App.jsx: <BrowserRouter basename={import.meta.env.BASE_URL}>
- package.json: add "predeploy":"npm run build", "deploy":"gh-pages -d dist" and devDep gh-pages
- Change REPO_NAME to your repo name. For local dev keep "/".
- After change: npm install && npm run deploy . Set Pages source to gh-pages branch.
```

---

## 4. Video Dialog Prompt

```
Create a 3-4 minute voiceover script for a screen recording (1920x958, 4:07) scrolling Landing -> Dashboard -> Day 12.
Language: Natural Indian English (en-IN), masculine narration, conversational, warm.
Tone: Senior helping junior, encouraging, not salesy.
Structure:
0:00-1:06 Landing hero, trust, 3 steps, Night Owl Window
1:06-2:06 Tracks, 6 sprints, Dashboard (streak 11, Day 8 miss, journey, today's task)
2:06-3:07 Day 12 checklist, Submit proof, One-Tap Caption Generator, closing 3 routes.
Each chunk <1500 chars for TTS. Generate 3 MP3 parts and concat.
```

---

## 5. Route Map

```
/
/dashboard
/day/12
```

---

## 6. Tech Stack

- Vite ^8.2.0 + React ^19.2.8 + react-router-dom ^7.18.2
- Tailwind CSS ^4.3.3 via @tailwindcss/vite
- lucide-react ^1.30.0 (custom GithubIcon/LinkedinIcon SVG)
- gh-pages ^6.3.0 for deploy
- Node 18+

## 7. File Map

- src/pages/Landing.jsx
- src/pages/Dashboard.jsx
- src/pages/Day.jsx
- src/data.js (+ data.json)
- src/App.jsx
- vite.config.js
- index.html
- ROUTE_MAP.txt
- PROMPT.md (this file)
```

