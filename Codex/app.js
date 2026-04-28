const sampleCases = [
  {
    id: 1,
    title: "Water leakage near government school",
    description: "Continuous water leakage outside a school gate. Children are slipping and the street is flooded.",
    ward: "Central",
    people: 230,
    severity: 9,
    age: 18,
    status: "Open"
  },
  {
    id: 2,
    title: "Streetlight failure on main road",
    description: "Five streetlights are not working near the bus stop, creating public safety risk at night.",
    ward: "North",
    people: 160,
    severity: 8,
    age: 12,
    status: "In Progress"
  },
  {
    id: 3,
    title: "Garbage overflow beside market",
    description: "Waste is overflowing near vegetable market and bad smell is affecting vendors.",
    ward: "East",
    people: 120,
    severity: 6,
    age: 30,
    status: "Open"
  },
  {
    id: 4,
    title: "Pothole on ambulance route",
    description: "Large pothole on the hospital approach road. Vehicles slow suddenly and traffic is building.",
    ward: "South",
    people: 260,
    severity: 8,
    age: 20,
    status: "Open"
  },
  {
    id: 5,
    title: "Traffic blockage near railway crossing",
    description: "Heavy traffic jam during office hours, emergency vehicles are delayed.",
    ward: "West",
    people: 420,
    severity: 7,
    age: 8,
    status: "Open"
  },
  {
    id: 6,
    title: "Drain cover missing near apartments",
    description: "Open drain is dangerous for pedestrians and children. Needs barricade and repair.",
    ward: "Central",
    people: 95,
    severity: 9,
    age: 5,
    status: "Open"
  },
  {
    id: 7,
    title: "Tree branch blocking road",
    description: "Broken tree branch blocks half the lane after rain and buses are turning slowly.",
    ward: "Lake Zone",
    people: 70,
    severity: 5,
    age: 7,
    status: "In Progress"
  },
  {
    id: 8,
    title: "Low water supply for two streets",
    description: "Residents report low water pressure since yesterday morning.",
    ward: "North",
    people: 180,
    severity: 6,
    age: 28,
    status: "Open"
  }
];

const teamCapacity = {
  Water: 2,
  Safety: 2,
  Sanitation: 2,
  Roads: 2,
  Traffic: 1,
  Environment: 1,
  General: 1
};

let cases = [];
let activeFilter = "all";

const keywordModel = [
  { category: "Water", words: ["water", "leak", "flood", "pipe", "pressure", "supply"] },
  { category: "Safety", words: ["streetlight", "light", "dark", "safety", "dangerous", "drain", "children"] },
  { category: "Sanitation", words: ["garbage", "waste", "smell", "trash", "overflow", "market"] },
  { category: "Roads", words: ["pothole", "road", "lane", "repair", "ambulance", "vehicle"] },
  { category: "Traffic", words: ["traffic", "jam", "blockage", "bus", "crossing", "delayed"] },
  { category: "Environment", words: ["tree", "branch", "rain", "park", "storm"] }
];

const categoryColors = {
  Water: "#0d7c85",
  Safety: "#b93435",
  Sanitation: "#1f7a4d",
  Roads: "#8f5b00",
  Traffic: "#2769a9",
  Environment: "#647a1f",
  General: "#66736b"
};

function classifyCase(item) {
  const text = `${item.title} ${item.description}`.toLowerCase();
  const match = keywordModel
    .map((entry) => ({
      category: entry.category,
      hits: entry.words.filter((word) => text.includes(word)).length
    }))
    .sort((a, b) => b.hits - a.hits)[0];

  return match && match.hits > 0 ? match.category : "General";
}

function scoreCase(item, allCases) {
  const sameWard = allCases.filter((other) => other.ward === item.ward).length;
  const sameCategory = allCases.filter((other) => other.category === item.category).length;
  const peopleScore = Math.min(item.people / 5, 35);
  const ageScore = Math.min(item.age * 0.8, 20);
  const severityScore = item.severity * 7;
  const densityScore = sameWard * 3 + sameCategory * 2;
  const emergencyBoost = /school|children|ambulance|hospital|danger|flood|open drain|emergency/i.test(`${item.title} ${item.description}`) ? 10 : 0;
  return Math.min(Math.round(severityScore + peopleScore + ageScore + densityScore + emergencyBoost), 100);
}

function explainCase(item) {
  const reasons = [];
  if (item.severity >= 8) reasons.push("high severity");
  if (item.people >= 200) reasons.push(`${item.people} people affected`);
  if (item.age >= 18) reasons.push(`${item.age} hours pending`);
  if (/school|children|ambulance|hospital|danger|flood|open drain|emergency/i.test(`${item.title} ${item.description}`)) {
    reasons.push("sensitive public safety context");
  }
  if (reasons.length === 0) reasons.push("moderate impact and normal response window");
  return reasons.join(", ");
}

function enrichCases(rawCases) {
  const withCategory = rawCases.map((item) => ({ ...item, category: classifyCase(item) }));
  return withCategory
    .map((item) => ({
      ...item,
      score: scoreCase(item, withCategory),
      reason: explainCase(item)
    }))
    .sort((a, b) => b.score - a.score);
}

function priorityLabel(score) {
  if (score >= 85) return "Critical";
  if (score >= 68) return "High";
  if (score >= 45) return "Medium";
  return "Low";
}

function renderMetrics(sortedCases) {
  const total = sortedCases.length;
  const critical = sortedCases.filter((item) => item.score >= 85).length;
  const average = total ? Math.round(sortedCases.reduce((sum, item) => sum + item.score, 0) / total) : 0;
  const resolved = Math.max(2, Math.floor(total * 0.18));

  document.querySelector("#totalCases").textContent = total;
  document.querySelector("#criticalCases").textContent = critical;
  document.querySelector("#avgScore").textContent = average;
  document.querySelector("#resolvedCases").textContent = resolved;
}

function renderDecision(sortedCases) {
  const top = sortedCases[0];
  const decisionBox = document.querySelector("#topDecision");
  if (!top) {
    decisionBox.textContent = "No active complaints.";
    return;
  }

  document.querySelector("#decisionBadge").textContent = `${priorityLabel(top.score)} priority`;
  decisionBox.innerHTML = `
    <div class="decision-title">
      <strong>${top.title}</strong>
      <span class="priority-pill">${top.category}</span>
    </div>
    <div class="decision-body">
      <div class="decision-score" style="--score: ${top.score}%">${top.score}</div>
      <div>
        <p class="decision-reason">
          Dispatch first to <strong>${top.ward}</strong> because the model found ${top.reason}.
          Recommended action: assign a ${top.category.toLowerCase()} response team and mark for coordinator review.
        </p>
        <div class="decision-tags">
          <span>${top.people} affected</span>
          <span>${top.age}h old</span>
          <span>${priorityLabel(top.score)}</span>
        </div>
      </div>
    </div>
  `;
}

function renderCategoryChart(sortedCases) {
  const counts = sortedCases.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  const max = Math.max(1, ...Object.values(counts));
  const rows = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([category, count]) => `
      <div class="bar-row">
        <span>${category}</span>
        <div class="bar-track">
          <div class="bar-fill" style="width: ${(count / max) * 100}%; background: ${categoryColors[category] || categoryColors.General}"></div>
        </div>
        <strong>${count}</strong>
      </div>
    `)
    .join("");

  document.querySelector("#categoryChart").innerHTML = rows;
}

function renderWardMap(sortedCases) {
  const wards = ["North", "South", "East", "West", "Central", "Lake Zone"];
  const totals = wards.map((ward) => {
    const wardCases = sortedCases.filter((item) => item.ward === ward);
    const score = wardCases.reduce((sum, item) => sum + item.score, 0);
    return { ward, count: wardCases.length, score };
  });

  document.querySelector("#wardMap").innerHTML = totals.map((item) => {
    const heatClass = item.score >= 180 ? "hot" : item.score >= 90 ? "warm" : "";
    return `
      <div class="ward ${heatClass}">
        <strong>${item.ward}</strong>
        <span>${item.count} cases · ${item.score} heat</span>
      </div>
    `;
  }).join("");
}

function renderTable(sortedCases) {
  const filtered = sortedCases.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "critical") return item.score >= 85;
    return item.category.toLowerCase() === activeFilter;
  });

  document.querySelector("#caseTable").innerHTML = filtered.map((item, index) => `
    <tr>
      <td>#${index + 1}</td>
      <td>
        <span class="issue-title">${item.title}</span>
        <span class="issue-meta">${item.people} people · ${item.age}h pending</span>
      </td>
      <td>${item.ward}</td>
      <td>${item.category}</td>
      <td class="score-cell">${item.score}</td>
      <td>${item.reason}</td>
      <td class="${item.status === "Open" ? "status-open" : "status-progress"}">${item.status}</td>
    </tr>
  `).join("");
}

function renderPlan(sortedCases) {
  const assigned = {};
  const plan = [];

  sortedCases.forEach((item) => {
    const used = assigned[item.category] || 0;
    const capacity = teamCapacity[item.category] || 1;
    if (used < capacity && item.status === "Open") {
      assigned[item.category] = used + 1;
      plan.push(item);
    }
  });

  document.querySelector("#resourcePlan").innerHTML = plan.slice(0, 5).map((item, index) => `
    <div class="plan-item">
      <strong>${index + 1}. ${item.category} team to ${item.ward}</strong>
      <span>${item.title}. Score ${item.score}. Complete inspection, update status, and re-run prioritization.</span>
    </div>
  `).join("");
}

function renderApp() {
  const sortedCases = enrichCases(cases);
  cases = sortedCases;
  renderMetrics(sortedCases);
  renderDecision(sortedCases);
  renderCategoryChart(sortedCases);
  renderWardMap(sortedCases);
  renderTable(sortedCases);
  renderPlan(sortedCases);
}

function resetSamples() {
  cases = sampleCases.map((item) => ({ ...item }));
  activeFilter = "all";
  document.querySelectorAll(".filter").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === "all");
  });
  renderApp();
}

document.querySelector("#complaintForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const newCase = {
    id: Date.now(),
    title: document.querySelector("#titleInput").value.trim(),
    description: document.querySelector("#descriptionInput").value.trim(),
    ward: document.querySelector("#wardInput").value,
    people: Number(document.querySelector("#peopleInput").value),
    severity: Number(document.querySelector("#severityInput").value),
    age: Number(document.querySelector("#ageInput").value),
    status: "Open"
  };
  cases = [newCase, ...cases];
  event.target.reset();
  document.querySelector("#peopleInput").value = 40;
  document.querySelector("#severityInput").value = 5;
  document.querySelector("#ageInput").value = 6;
  renderApp();
  document.querySelector("#complaints").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#seedButton").addEventListener("click", resetSamples);
document.querySelector("#autoPlanButton").addEventListener("click", () => {
  renderPlan(cases);
  document.querySelector("#planner").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderTable(cases);
  });
});

resetSamples();
