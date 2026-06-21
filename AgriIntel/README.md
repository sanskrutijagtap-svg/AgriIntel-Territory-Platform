# AgriIntel — Frontend (React)

Territory Intelligence & Field Activity Management Platform — frontend only, mock data, no backend required to run.

## Stack
- React 18 + Vite
- React Router v6 (routing)
- Recharts (charts — Chart.js-style data, React-friendly)
- Plain CSS design system (green theme matching the prototype)

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Demo login
- Email: `ramesh.kumar@agrintel.com`
- Password: `agrintel123`

Auth is mocked in `src/context/AuthContext.jsx` using `sessionStorage`. Swap the `login()` function for a real API/JWT call when your Spring Boot backend is ready — the rest of the app (routes, profile, logout) won't need to change.

## Project structure

```
src/
  components/      Reusable UI: PageHeader, StatCard
  context/         AuthContext (login/logout/profile state)
  data/            mockData.js — all sample data, swap for API calls
  layouts/         AppLayout — sidebar + topbar shell
  pages/           One file per route (Dashboard, Visits, Farmers, etc.)
  styles/          index.css — design tokens & global styles
  App.jsx          Route definitions
  main.jsx         Entry point
```

## Pages included
Login, Dashboard, Visits (list + details + add), Farmers (list + profile),
Dealers, Villages, Follow-ups, Products & Competitors, Analytics, Settings, Profile (with edit + logout).

## Connecting your Spring Boot backend later
1. Create a `src/api/client.js` with `fetch`/`axios` calls to your endpoints.
2. Replace the arrays in `src/data/mockData.js` with API responses (e.g. via `useEffect` + `useState`, or React Query).
3. In `AuthContext.jsx`, replace the mock credential check with a call to your `/auth/login` endpoint, store the returned JWT, and attach it to subsequent requests.
4. Keep route/component structure as-is — it already separates UI from data.
