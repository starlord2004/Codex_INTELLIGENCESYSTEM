# CivicSense

CivicSense is an intelligent public service decision-making dashboard built for the hackathon theme **"Intelligent Systems for Real-World Decision Making."**

It helps a city or campus operations team classify citizen complaints, calculate priority scores, and recommend which issue should be handled first.

## Problem

Public service teams receive many complaints at the same time: water leaks, streetlight failures, garbage overflow, potholes, traffic blocks, and safety issues. Manual ordering can miss urgent cases or delay issues affecting many people.

## Solution

CivicSense converts complaint data into an actionable decision queue:

- Classifies each issue into a service category using keyword-based intelligence.
- Calculates a priority score using severity, people affected, issue age, ward density, category load, and safety context.
- Shows the highest-priority case with an explanation.
- Visualizes category load and ward heat.
- Generates a suggested response plan based on available team capacity.
- Allows new complaints to be added and prioritized instantly.

## Tech Stack

- HTML
- CSS
- JavaScript
- No external dependencies

## Demo Instructions

Open `index.html` in a browser.

Suggested demo flow:

1. Show the dashboard metrics and top AI recommendation.
2. Explain the scoring factors: severity, affected people, age, density, and safety keywords.
3. Filter the queue by critical, water, or safety cases.
4. Click **Generate Plan** to show automated team assignment.
5. Add a new complaint from the form, such as:
   - Title: `Open drain near school`
   - Description: `Children are walking near an open drain and it is dangerous during rain`
   - Ward: `Central`
   - People affected: `300`
   - Severity: `Emergency`
   - Age: `4`
6. Show how the queue updates automatically.

## Hackathon Rule Alignment

- Fits the problem statement by using data analysis and automation for real-world decision-making.
- Keeps the repository lightweight.
- Includes demo instructions and tech stack.
- Maintains `progress.md` for regular work updates.

## Future Improvements

- Add authentication for citizens and officials.
- Store complaints in a database.
- Add real map integration.
- Replace keyword classification with a trained ML model.
- Add SMS or email alerts for high-priority cases.
