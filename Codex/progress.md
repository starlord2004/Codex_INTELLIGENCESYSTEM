# Hackathon Progress

## 2026-04-28 14:54 +05:30

### Tasks Completed
- Read the problem statement theme: "Intelligent Systems for Real-World Decision Making."
- Reviewed `Hackathon_Rules.pdf`.
- Reviewed `Github_Rules.pdf`.
- Identified the key competition constraints:
  - Public GitHub repository during the event.
  - Repository name format: `TeamName_ProjectName`.
  - Meaningful code pushes at least once every 3 hours.
  - All team members should make relevant contributions.
  - `progress.md` must be updated regularly with completed tasks, current progress, and next steps.
  - Final repository must include `README.md`, setup steps, demo instructions, and tech stack.

### Idea Shortlist

| Rank | Idea | Domain | Why It Fits | Risk |
| --- | --- | --- | --- | --- |
| 1 | CivicSense: Public Service Complaint Triage and Resource Planner | Public services | Uses data analysis, ML classification, prioritization, and automation to help officials decide what to fix first. Easy to demo with sample data. | Needs a polished dashboard and good sample data. |
| 2 | SmartClinic Flow: Patient Queue and Bed Allocation Assistant | Healthcare operations | Strong impact and clear decision-making use case. | Must avoid medical diagnosis claims; harder to validate safely. |
| 3 | DemandWise: Local Business Demand Forecasting and Stock Planner | Business | Practical and easier to build quickly with forecasting charts. | More common hackathon idea; may feel less novel. |
| 4 | CommuteGuard: Road Incident and Route Priority Assistant | Transportation | Good real-world value and map-based demo potential. | Real-time data/API dependency can become risky. |
| 5 | CampusOps: Smart Campus Maintenance Decision System | Public/campus services | Easy to scope and test locally. | Smaller impact unless framed well. |

### Recommended Build

**Build CivicSense: an intelligent public service decision assistant.**

Core concept:
- Citizens submit or upload complaints such as potholes, garbage overflow, streetlight failure, water leakage, traffic blockage, or public safety issues.
- The system classifies complaint category and urgency.
- A dashboard ranks cases by impact, urgency, age, location density, and available response teams.
- It recommends which issues should be handled first and explains why.

Why this is the strongest idea:
- It directly matches the theme: real-world decision making through data analysis, machine learning, and automation.
- It avoids high-risk medical/legal claims.
- It can be built without paid APIs or large datasets.
- It has a clear demo story for judges.
- It naturally supports multiple team contributions: frontend, backend, ML/data, docs/demo.

Suggested tech stack:
- Frontend: React or Next.js dashboard.
- Backend: Python FastAPI or Node/Express API.
- ML/data: Python, pandas, scikit-learn, simple priority scoring model.
- Storage: SQLite or JSON/CSV for hackathon speed.
- Visualization: charts, priority table, optional map view.

### Current Progress
- Project direction selected at idea level.
- Rules and GitHub requirements are understood.
- Progress tracking file has been created.

### Next Steps
- Confirm team name and project name for the GitHub repository format.
- Decide exact stack based on what the team is comfortable with.
- Create initial repository structure.
- Add starter `README.md` with project description, setup steps, demo flow, and tech stack.
- Build the first version of the dashboard using sample complaints.
- Update this file before each meaningful commit.

## 2026-04-28 14:58 +05:30

### Tasks Completed
- Built a working MVP named **CivicSense**.
- Added `index.html` for the dashboard structure.
- Added `styles.css` for responsive dashboard styling.
- Added `app.js` for classification, priority scoring, filtering, charts, ward heat map, form intake, and resource planning.
- Added `README.md` with problem, solution, tech stack, demo flow, rule alignment, and future improvements.
- Ran a JavaScript syntax check with Node successfully.

### Current Progress
- The project is now demo-ready as a static web app.
- The app can be opened directly from `index.html`.
- No external dependencies are required.

### Next Steps
- Create a GitHub repository using the format `TeamName_ProjectName`.
- Commit these first files as the initial meaningful progress commit.
- Ask each teammate to make a small meaningful contribution.
- Demo the app by adding a high-severity complaint and showing how the priority queue updates automatically.

## 2026-04-28 14:59 +05:30

### Tasks Completed
- Added `.gitignore` to keep the repository clean.
- Initialized a local Git repository in the project folder.

### Current Progress
- The local project is ready for the first commit and GitHub upload.

### Next Steps
- Run the first commit with a meaningful message.
- Create the public GitHub repository using `TeamName_ProjectName`.
- Push this local repository to GitHub.

## 2026-04-28 15:00 +05:30

### Tasks Completed
- Staged the project files for the first Git commit.
- Re-ran the JavaScript syntax check successfully.

### Current Progress
- Files are staged in Git.
- A commit still needs Git identity details (`user.name` and `user.email`) before it can be created.

### Next Steps
- Configure Git identity locally or globally.
- Commit with message: `Initial CivicSense MVP`.
