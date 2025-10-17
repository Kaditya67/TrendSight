# TrendSight

A full‑stack analytics dashboard built with TypeScript, React, and Node.js. TrendSight provides modular frontend and backend components for data visualization, storage, and extensible analytics.

## Key features
- Interactive React dashboard with reusable chart components
- Modular TypeScript/JavaScript codebase (frontend + backend)
- Node.js + Express API for data access and persistence
- Fast local development with Vite
- Extensible for BI, SaaS, or custom visualization needs

## Project structure
```
TrendSight/
├─ backend/                 # Node.js + Express API, data modules
├─ frontend/trendsight/     # Vite + React (TypeScript)
│  ├─ public/
│  └─ src/
├─ .gitignore
├─ package.json             # workspace / root scripts (optional)
├─ README.md
└─ directory_structure.txt
```

## Prerequisites
- Node.js v16+
- npm (or yarn)

## Local development

### Frontend
```bash
cd frontend/trendsight
npm install
npm run dev
# Open http://localhost:5173
```

### Backend
```bash
cd backend
npm install
npm run dev   # or npm start for production mode
# API typically on http://localhost:5000
```

## Build for production

### Frontend
```bash
cd frontend/trendsight
npm run build
# Serve dist/ with a static server or integrate with backend
```

### Backend
- Ensure environment variables are set (see `.env.example`).
- Use a process manager (pm2) or Docker for production deployment.

## Configuration
Create a `.env` file in `backend/` (example):
```
PORT=5000
DATABASE_URL=postgres://user:pass@host:port/dbname
NODE_ENV=development
```
Adjust frontend API base URL in `frontend/trendsight/src/config` or env variables (Vite: VITE_API_URL).

## Usage
- Open the frontend URL in a browser.
- Connect the backend to your data source (database or external APIs).
- Use the dashboard to visualize datasets and configure charts/dashboards.

## Testing
- Add and run unit/integration tests in each package:
```bash
# example
cd frontend/trendsight
npm test

cd backend
npm test
```

## Contributing
1. Fork the repo
2. Create a branch: git checkout -b feature/your-feature
3. Commit changes: git commit -m "Add feature"
4. Push and open a PR

Follow the code style and include tests for new features.

## License
MIT — see LICENSE for details.

## Notes
- Keep backend API stable for frontend contracts.
- Add CI (GitHub Actions) to run tests and builds on PRs.

