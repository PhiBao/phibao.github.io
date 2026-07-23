const projects = {
  gotham: {
    title: "Gotham Court",
    repo: "https://github.com/PhiBao/gotham-court",
    live: "https://gotham-court.vercel.app",
    detail: "GenLayer Bradbury Onchain Justice winner. AI-native decentralized dispute resolution with transparent case flows.",
  },
  sovibe: {
    title: "SoVibe",
    repo: "https://github.com/PhiBao/so-vibe",
    live: "https://so-vibe.vercel.app",
    detail: "SoSoValue Buildathon rewarded project. AI-powered multi-strategy terminal for SoDex.",
  },
  hush: {
    title: "Hush",
    repo: "https://github.com/PhiBao/hush",
    live: "https://hush-murex-iota.vercel.app",
    detail: "Confidential payroll for the creator economy — encrypted subscriptions on Zama fhEVM.",
  },
  yield: {
    title: "Yield Mind",
    repo: "https://github.com/PhiBao/yield-mind",
    live: "https://yield-mind-henna.vercel.app",
    detail: "AI-native yield automation for crypto strategy workflows.",
  },
  somtinel: {
    title: "Somtinel",
    repo: "https://github.com/PhiBao/somtinel",
    live: "https://somtinel.vercel.app",
    detail: "Agent-driven treasury risk responder built in Somnia.",
  },
  aether: {
    title: "Aether",
    repo: "https://github.com/PhiBao/aether",
    live: "https://aether-swarm-blush.vercel.app",
    detail: "Gamified AI trading signal terminal with swarm consensus, market data, and sentiment.",
  },
  trustgrid: {
    title: "Trust Grid Sol",
    repo: "https://github.com/PhiBao/trust-grid-sol",
    live: "https://trust-grid-sol.vercel.app",
    detail: "AI agent hiring and trustless payment marketplace on Solana.",
  },
  blinddeal: {
    title: "BlindDeal",
    repo: "https://github.com/PhiBao/blind-deal",
    live: "https://blind-deal.vercel.app",
    detail: "Confidential P2P price negotiation on Fhenix. Achieved Runner-up level and got rewarded on Akindo.",
  },
  signalforge: {
    title: "Signal Forge",
    repo: "https://github.com/PhiBao/signal-forge",
    live: "https://signal-forge-pink.vercel.app",
    detail: "Reasoning as a Service: an autonomous AI agent that sells its thinking.",
  },
};

const aliases = {
  "open gotham-court": "open gotham",
  "open gothamcourt": "open gotham",
  "open so-vibe": "open sovibe",
  "open so vibe": "open sovibe",
  "open yield-mind": "open yield",
  "open guarded-alpha": "open hush",
  "open guarded": "open hush",
  "open trust-grid-sol": "open trustgrid",
  "open blind-deal": "open blinddeal",
  "open blind deal": "open blinddeal",
  "open signal-forge": "open signalforge",
  "open signal forge": "open signalforge",
};

const output = document.querySelector("#terminal-output");
const form = document.querySelector("#terminal-form");
const input = document.querySelector("#terminal-input");
const feedRows = Array.from(document.querySelectorAll(".feed-row"));
const feedDetail = document.querySelector("[data-feed-detail]");

function line(html) {
  const p = document.createElement("p");
  p.innerHTML = html;
  output.appendChild(p);
  output.scrollTop = output.scrollHeight;
}

function link(url, label) {
  return `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`;
}

function runCommand(rawCommand) {
  const command = (rawCommand || "help").trim().toLowerCase();
  const normalized = aliases[command] || command;

  line(`<span class="prompt">kiter$</span> ${rawCommand || "help"}`);

  if (normalized === "help") {
    line("<span class=\"prompt\">help</span> commands: projects, open gotham, open hush, open blinddeal, links, clear");
    return;
  }

  if (normalized === "projects") {
    const names = Object.keys(projects)
      .map((key) => `<button class="inline-command" data-command="open ${key}">${key}</button>`)
      .join(" / ");
    line(`<span class="prompt">projects</span> ${names}`);
    return;
  }

  if (normalized === "links") {
    line(`<span class="prompt">links</span> ${link("https://github.com/PhiBao", "GitHub")} / ${link("https://www.linkedin.com/in/kiter-phi-bao/", "LinkedIn")} / ${link("https://x.com/0xKiter", "X @0xKiter")} / ${link("https://t.me/kiter9", "TG @kiter9")} / ${link("https://myanimelist.net/profile/Kiter", "MAL")}`);
    return;
  }

  if (normalized === "clear") {
    output.innerHTML = "";
    return;
  }

  if (normalized.startsWith("open ")) {
    const key = normalized.replace("open ", "");
    const project = projects[key];

    if (!project) {
      line(`<span class="prompt">error</span> unknown dossier "${key}". Run projects.`);
      return;
    }

    const liveLink = project.live ? ` / ${link(project.live, "live")}` : "";
    line(`<span class="prompt">${project.title}</span> ${project.detail} ${link(project.repo, "repo")}${liveLink}`);
    return;
  }

  line(`<span class="prompt">error</span> command not found. Try help.`);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  runCommand(input.value);
  input.value = "";
});

output.addEventListener("click", (event) => {
  const button = event.target.closest("[data-command]");

  if (!button) {
    return;
  }

  runCommand(button.dataset.command);
});

function renderFeedDetail(projectKey) {
  const project = projects[projectKey];

  if (!project || !feedDetail) {
    return;
  }

  const liveLink = project.live ? `<a href="${project.live}" target="_blank" rel="noreferrer">Live</a>` : "";
  feedDetail.innerHTML = `
    <p class="card-kicker">selected build</p>
    <h3>${project.title}</h3>
    <p>${project.detail}</p>
    <div class="card-actions">
      <a href="${project.repo}" target="_blank" rel="noreferrer">Repo</a>
      ${liveLink}
    </div>
  `;
}

function activateFeedRow(row) {
  feedRows.forEach((item) => item.classList.remove("is-active", "is-shifting"));
  row.classList.add("is-active", "is-shifting");
  renderFeedDetail(row.dataset.project);
  window.setTimeout(() => row.classList.remove("is-shifting"), 500);
}

if (feedRows.length) {
  let activeIndex = Math.max(0, feedRows.findIndex((row) => row.classList.contains("is-active")));
  renderFeedDetail(feedRows[activeIndex].dataset.project);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.setInterval(() => {
      const activeElement = document.activeElement;
      const feedHasFocus = activeElement && activeElement.closest("[data-live-feed]");
      const feedIsHovered = feedRows.some((row) => row.matches(":hover"));

      if (feedHasFocus || feedIsHovered) {
        return;
      }

      activeIndex = (activeIndex + 1) % feedRows.length;
      activateFeedRow(feedRows[activeIndex]);
    }, 2400);
  }
}

feedRows.forEach((card) => {
  card.setAttribute("aria-label", `Open ${card.querySelector(".repo-name").textContent} dossier in terminal`);

  card.addEventListener("click", () => {
    activateFeedRow(card);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.click();
    }
  });
});
