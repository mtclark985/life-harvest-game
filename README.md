# Life Harvest

A financial literacy game where your farm reflects your financial health.

> **Status:** Active development — features and content are actively being added.

---

## Concept

Life Harvest is a browser-based educational game that teaches real-world personal finance through the lens of a living, breathing farm. Inspired by the structure of **The Game of Life** and the visuals of **Farmville**, players spin a wheel each turn to draw a financial event and must make a meaningful money decision in response.

The twist: your farm is a direct visual metaphor for your financial health. Make smart decisions — negotiate a raise, build an emergency fund, avoid predatory schemes — and your farm flourishes with sunflowers, silos, and horses. Make poor choices and watch it wither back to a shack and weeds.

The game supports two modes:

- **Kid Mode (under 10)** — simplified events around allowances, lemonade stands, and piggy banks, designed to introduce core saving concepts
- **Adult Mode (10+)** — real-world scenarios covering student loans, 401(k) enrollment, rent vs. buy decisions, salary negotiation, and investment scams

Every decision surfaces a short financial lesson and personalized feedback, making the learning feel earned rather than lectured.

---

## Tech Stack

- **React 19** (Create React App)
- **CSS Modules** — component-scoped styles, no CSS framework
- **Vanilla JS** — no state management library; game state lives in React component state
- **Emoji-driven UI** — farm visuals, wheel segments, and event cards are rendered with emoji for a lightweight, expressive look

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm

```bash
# Clone the repo
git clone https://github.com/your-username/life-harvest-game.git
cd life-harvest-game

# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app hot-reloads on save.

### Other Scripts

| Command | Description |
|---|---|
| `npm test` | Run tests in interactive watch mode |
| `npm run build` | Build optimized production bundle to `/build` |

---

## Project Structure

```
src/
  components/       # UI components (GameScreen, Farm, EventCard, SpinWheel, etc.)
  data/
    gameData.js     # All events, farm items, wheel segments, and initial state
  App.js            # Root component and top-level screen routing
```

Game logic is driven by `gameData.js` — adding new events, farm items, or wheel segments requires only editing that file.
