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
  guarded: {
    title: "Guarded Alpha",
    repo: "https://github.com/PhiBao/guarded-alpha",
    live: "",
    detail: "Security-first AI trading agent built in Python.",
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
  cipher: {
    title: "Cipher",
    repo: "https://github.com/PhiBao/cipher",
    live: "https://cipher-fhe.vercel.app",
    detail: "Privacy-preserving credit scoring and micro-lending protocol built with Zama FHE.",
  },
};

const aliases = {
  "open gotham-court": "open gotham",
  "open gothamcourt": "open gotham",
  "open so-vibe": "open sovibe",
  "open so vibe": "open sovibe",
  "open yield-mind": "open yield",
  "open guarded-alpha": "open guarded",
  "open trust-grid-sol": "open trustgrid",
};

const output = document.querySelector("#terminal-output");
const form = document.querySelector("#terminal-form");
const input = document.querySelector("#terminal-input");

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
    line("<span class=\"prompt\">help</span> commands: projects, open gotham, open sovibe, links, clear");
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
    line(`<span class="prompt">links</span> ${link("https://github.com/PhiBao", "GitHub")} / ${link("https://www.linkedin.com/in/kiter-phi-bao/", "LinkedIn")} / ${link("https://x.com/0xKiter", "X @0xKiter")} / ${link("https://t.me/kiter9", "TG @kiter9")}`);
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

document.querySelectorAll(".dossier").forEach((card) => {
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Open ${card.querySelector(".repo-name").textContent} dossier in terminal`);

  card.addEventListener("click", () => {
    document.querySelector("#terminal").scrollIntoView({ behavior: "smooth", block: "start" });
    runCommand(`open ${card.dataset.project}`);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.click();
    }
  });
});
