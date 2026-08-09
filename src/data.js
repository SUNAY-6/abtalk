export const student = {
  name: "Aarav Mehta",
  college: "RV College of Engineering",
  year: "3rd Year • CSE",
  track: "Frontend",
  avatar: "AM",
  streak: 11,
  longestStreak: 11,
  completed: 11,
  total: 60,
  rank: 342,
  percentile: 68,
  recruiterViews: 47,
  freezesAvailable: 1,
  freezesUsed: 0,
  joinedOn: "2025-06-27",
  // for edge case handling
  isFirstDay: false,
}

export const progressDays = Array.from({ length: 60 }, (_, i) => {
  const day = i + 1
  if (day <= 7) return { day, status: "completed" }
  if (day === 8) return { day, status: "missed" }
  if (day <= 11) return { day, status: "completed" }
  if (day === 12) return { day, status: "today" }
  if (day === 13) return { day, status: "upcoming" }
  return { day, status: "locked" }
})

export const streakCalendar = [
  { date: "Jul 28", day: 7, status: "done" },
  { date: "Jul 29", day: 8, status: "missed" },
  { date: "Jul 30", day: 9, status: "done" },
  { date: "Jul 31", day: 10, status: "done" },
  { date: "Aug 01", day: 11, status: "done" },
  { date: "Aug 02", day: 12, status: "today" },
  { date: "Aug 03", day: 13, status: "upcoming" },
]

export const achievements = [
  { id: 1, title: "First Commit", icon: "🌱", unlocked: true, desc: "Day 1 done" },
  { id: 2, title: "7 Day Streak", icon: "🔥", unlocked: true, desc: "Week warrior" },
  { id: 3, title: "Night Owl", icon: "🦉", unlocked: true, desc: "5 late-night submissions" },
  { id: 4, title: "Shipper", icon: "🚀", unlocked: false, desc: "15 days — lock in" },
  { id: 5, title: "Viral Post", icon: "👀", unlocked: false, desc: "500+ views on LinkedIn" },
  { id: 6, title: "Comeback", icon: "💪", unlocked: false, desc: "Recover a missed day" },
]

export const day12 = {
  day: 12,
  track: "Frontend",
  title: "Weather App that doesn’t look like a tutorial",
  difficulty: "Intermediate",
  time: "45–60 min",
  brief: "Build a weather app that people would actually keep on their phone. Pretty, fast, and useful — not just another API dump.",
  description: "Most weather apps show data. Yours should tell a story. Think: today vs tomorrow, what to wear, and whether to carry an umbrella. Design for the glance.",
  objectives: [
    "Fetch live weather for any Indian city (OpenWeather API)",
    "Show current temp, feels-like, humidity, wind + 3-day forecast",
    "Add location search with debounce + error states",
    "Make it thumb-friendly — big tap targets, no tiny inputs",
  ],
  deliverables: [
    { label: "Live demo or screenshot", required: true },
    { label: "GitHub repo with README", required: true },
    { label: "LinkedIn post reflecting on what you learned", required: true },
  ],
  resources: [
    { type: "API", title: "OpenWeather Free Tier", url: "#", meta: "Free • No card" },
    { type: "Figma", title: "Weather UI inspo board", url: "#", meta: "6 references" },
    { type: "Video", title: "Fetch + error handling in 12 min", url: "#", meta: "YouTube • ABTalks" },
  ],
  starter: {
    repo: "github.com/abtalks/starter-day12-weather",
    stack: "HTML • CSS • JS — or React if you’re on that track",
  },
  hints: [
    "Cache last searched city in localStorage",
    "Show skeleton loaders, not spinners",
    "Bonus: Add 'What to wear' based on temp"
  ],
  submissionsToday: 812,
}

export const tracks = [
  { id: "frontend", name: "Frontend", emoji: "🎨", color: "#FF4D00", desc: "React, JS, clean UI", level: "Beginner to Pro", days: "60 projects" },
  { id: "backend", name: "Backend", emoji: "⚙️", color: "#0E0F13", desc: "Node, APIs, DB", level: "Intermediate", days: "60 projects" },
  { id: "aiml", name: "AI / ML", emoji: "🧠", color: "#6D28D9", desc: "Python, models, datasets", level: "Intermediate", days: "60 projects" },
  { id: "dsa", name: "DSA", emoji: "🧩", color: "#0EA5E9", desc: "Patterns, not grinds", level: "All levels", days: "60 problems" },
]

export const wallOfProof = [
  { name: "Priya S.", college: "VIT", day: 34, text: "Day 34 — Built a habit tracker. 3 recruiters DM'd this week. This challenge hits different.", likes: 312, time: "2h ago" },
  { name: "Karan J.", college: "BITS Pilani", day: 12, text: "Weather app done at 1:47 AM. Night Owl Window saved me. Streak alive 🔥", likes: 89, time: "8h ago" },
  { name: "Ananya R.", college: "NSIT", day: 60, text: "60/60 DONE. From zero GitHub to 60 commits. Placed at Razorpay. Thank you ABTalks 🧡", likes: 1.2, time: "1d ago", featured: true },
]
