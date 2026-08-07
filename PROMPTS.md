# Prompts

**Project:** ABTalks
**User:** Shishir Singh

---

### 2026-08-08 02:07:08
**Prompt:** Build the core foundation for a Next.js (App Router) project with Tailwind CSS and Lucide-react icons for the ABTalks 60-day challenge application.

1. App Layout Container (390px Constraint):
In `app/layout.tsx`, create a dark, responsive shell that centers a fixed mobile view container (`max-w-[390px]` width, `min-h-screen`, `bg-neutral-950` text-white) on the screen. Any background outside this 390px container should be `bg-neutral-900`.

2. Mock Data Store (`data/mockData.json`):
Create a `data/mockData.json` file with realistic mock data for a student on Day 12 of 60:
- studentName: "Rahul Sharma"
- avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
- currentStreak: 12
- targetDays: 60
- completionPercentage: 20
- gracePeriodActive: true (Late-night 2 AM grace window flag)
- streakShieldsAvailable: 1
- leaderboardRank: "#14 in Cohort"
- currentDayTask: {
    "dayNumber": 12,
    "title": "Build a Weather Dashboard Component",
    "track": "Full-Stack Web Dev",
    "description": "Create a responsive UI using OpenWeather API to display real-time weather and a 5-day forecast.",
    "requirements": [
      "Fetch live data from OpenWeather API or mock endpoint",
      "Display temperature, humidity, and wind speed",
      "Include a dark mode toggle"
    ],
    "linkedInDraft": "Day 12/60 of the ABTalks Challenge done! 🚀 Built a responsive Weather Dashboard component today. Focused on clean API handling and sleek mobile UI. Onward to Day 13! #ABTalks #100DaysOfCode #WebDev"
  }

3. Route Structure:
Scaffold three basic pages reading from this JSON file:
- Landing Page (`app/page.tsx`) -> Route `/`
- Dashboard (`app/dashboard/page.tsx`) -> Route `/dashboard`
- Challenge Day Page (`app/day/12/page.tsx`) -> Route `/day/12`

Keep the layout clean, sleek, and dark-mode mobile native.

---

### 2026-08-08 02:12:53
**Prompt:** update the implmentation plan

---

### 2026-08-08 02:14:42
**Prompt:** Verify Localhost: Run npm run dev and click through /, /dashboard, and /day/12 to confirm the 390px mobile layout holds together.

Commit the Foundation:

Bash
git add .
git commit -m "chore: initialize Next.js root, 390px layout, and mock data"
git push origin main

https://github.com/shishirsingh3370-hue/ABTalks.git
