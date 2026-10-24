const projects = {
  vericall: {
    title: "VeriCall",
    repo: "https://github.com/PhiBao/vericall",
    kicker: "01 / 06 — agent payments / escrow",
    tags: ["Arc mainnet", "USDC escrow", "Schema-aware"],
    detail: "Escrow a USDC payment for a software-to-software API call and settle it against the promise the API published.",
    proof: "Payment releases only when latency and response schema match — and splits to upstream dependencies in the same transaction.",
  },
  verbatim: {
    title: "Verbatim",
    repo: "https://github.com/PhiBao/verbatim",
    kicker: "02 / 06 — research / verification",
    tags: ["Deterministic verifier", "Receipts", "Research agent"],
    detail: "A research agent where every sentence carries a receipt.",
    proof: "An independent verifier re-reads each cited source; claims that fail are struck and re-researched instead of being asserted.",
  },
  pylon: {
    title: "Pylon",
    repo: "https://github.com/PhiBao/pylon-mezo",
    kicker: "03 / 06 — DeFi / leverage",
    tags: ["Mezo", "Flash leverage", "Non-custodial"],
    detail: "Non-custodial flash leverage, self-deleveraging, and a redemption shield for Bitcoin on Mezo.",
    proof: "Works on the user's existing native trove — no proprietary vault, no upfront capital — proven with live testnet transactions.",
  },
  fairbuy: {
    title: "FairBuy",
    repo: "https://github.com/PhiBao/fairbuy",
    kicker: "04 / 06 — execution safety / RWA",
    tags: ["Solana", "Tokenised stocks", "Policy engine"],
    detail: "An execution-safety layer for 24/7 tokenised stocks: a fair reference beside every quote and a policy engine that blocks overpaying fills.",
    proof: "Policy rules block bad fills before signature, and a ledger learns your trading patterns over time.",
  },
  kindly: {
    title: "Kindly",
    repo: "https://github.com/PhiBao/kindly",
    kicker: "05 / 06 — agentic commerce",
    tags: ["PayPal", "Agent limits", "Collections"],
    detail: "A collections agent that chases, negotiates, and settles unpaid invoices over PayPal — without the awkward part.",
    proof: "Limits are set once in plain language; the agent refuses to be talked out of them and asks whenever a limit would be crossed.",
  },
  wemadeit: {
    title: "WeMadeIt",
    repo: "https://github.com/PhiBao/wemadeit",
    kicker: "06 / 06 — consumer payments / escrow",
    tags: ["Monad", "Escrow", "Consumer"],
    detail: "Makes group payments conditional onchain: friends commit funds into non-custodial escrow that only moves if the group means it.",
    proof: "Verified contracts on mainnet and testnet, 18/18 tests passing and Sourcify exact-match on both chains.",
  },
  rakshak: {
    title: "Rakshak",
    repo: "https://github.com/PhiBao/rakshak",
    kicker: "01 / 06 — voice AI / safety",
    tags: ["Voice AI", "Real-time alerts", "Evidence packs"],
    detail: "An AI guardian for phone fraud: recognises scam scripts during a call, warns the person being targeted, and alerts their family.",
    proof: "Beyond a chatbot: Hindi and English voice warnings, a live family transcript, and a filing-ready complaint pack.",
  },
  advocate: {
    title: "Advocate",
    repo: "https://github.com/PhiBao/advocate",
    kicker: "02 / 06 — agentic workflows / trust",
    tags: ["Cloudflare Workers", "DO case agent", "Verified drafts"],
    detail: "An AI advocate that fights medical bills and claim denials end to end, with per-case agents and verifiable appeal letters.",
    proof: "Trust by construction: every draft must pass a deterministic amount check and an independent LLM audit before it can be approved.",
  },
  wpilot: {
    title: "Wpilot",
    repo: "https://github.com/PhiBao/wpilot",
    kicker: "03 / 06 — supervised autonomy",
    tags: ["Strands Agents", "Approval gates", "Kill-and-resume"],
    detail: "A backfill agent for volunteer shifts that texts eligible people one by one and atomically books the first yes.",
    proof: "Deterministic core, agentic edge: scheduling math is code, and the booking tool refuses to fire without a durably recorded human yes.",
  },
  recall: {
    title: "Recall",
    repo: "https://github.com/PhiBao/recall",
    kicker: "04 / 06 — memory / retrieval",
    tags: ["CockroachDB vectors", "Hybrid search", "Cited answers"],
    detail: "A relationship-memory agent that turns one-line notes into searchable facts and proactive daily follow-ups.",
    proof: "Every answer cites the exact source memories, with relational rows and vector embeddings kept in a single transactional store.",
  },
  signedoff: {
    title: "Signed Off",
    repo: "https://github.com/PhiBao/signed-off",
    kicker: "05 / 06 — verification / DX",
    tags: ["CLI", "Browser evidence", "Client handover"],
    detail: "A CLI that turns a signed project scope into a promise inventory and verifies each promise against a real browser build.",
    proof: "It downgrades false passes: verdicts are cross-checked against sealed evidence, so a green suite cannot hide a real bug.",
  },
  halt: {
    title: "Halt",
    repo: "https://github.com/PhiBao/halt",
    kicker: "06 / 06 — agent safety / onchain",
    tags: ["GenLayer", "Constitutions", "Emergency halt"],
    detail: "A circuit breaker for the agentic economy: agents register a natural-language constitution and watchdogs can freeze rogue spenders.",
    proof: "Freeze-first, appeal-after — the loss stops in the report transaction, with AI validators adjudicating and bounties for true reports.",
  },
  guarded: {
    title: "Guarded Alpha",
    repo: "https://github.com/PhiBao/guarded-alpha",
    detail: "Self-custodial AI trading agent for BNB Chain. 4th place on Track 1 of BNB Hack and a $2,000 prize.",
  },
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
  "open signed-off": "open signedoff",
  "open signed off": "open signedoff",
  "open pylon-mezo": "open pylon",
  "open pylon mezo": "open pylon",
  "open we-made-it": "open wemadeit",
  "open we made it": "open wemadeit",
  "open guarded-alpha": "open guarded",
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

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function link(url, label) {
  return `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`;
}

function runCommand(rawCommand) {
  const command = (rawCommand || "help").trim().toLowerCase();
  const normalized = Object.hasOwn(aliases, command) ? aliases[command] : command;

  line(`<span class="prompt">kiter$</span> ${escapeHtml(rawCommand || "help")}`);

  if (normalized === "help") {
    line(`<span class="prompt">help</span> commands: projects, ${Object.keys(projects).slice(0, 4).map((key) => `open ${key}`).join(", ")}, links, clear`);
    return;
  }

  if (normalized === "projects") {
    const names = Object.keys(projects)
      .map((key) => `<button class="inline-command" data-command="open ${key}">${escapeHtml(key)}</button>`)
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
    const project = Object.hasOwn(projects, key) ? projects[key] : null;

    if (!project) {
      line(`<span class="prompt">error</span> unknown dossier "${escapeHtml(key)}". Run projects.`);
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
  const project = Object.hasOwn(projects, projectKey) ? projects[projectKey] : null;

  if (!project || !feedDetail) {
    return;
  }

  feedDetail.innerHTML = `
    <p class="card-kicker">${project.kicker}</p>
    <h3 id="build-detail-title">${project.title}</h3>
    <div class="feed-meta">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    <p>${project.detail}</p>
    <p class="feed-proof">${project.proof}</p>
    <div class="card-actions">
      <a href="${project.repo}" target="_blank" rel="noreferrer">Explore repo ↗</a>
    </div>
  `;
}

function activateFeedRow(row) {
  feedRows.forEach((item) => {
    item.classList.remove("is-active", "is-shifting");
    item.setAttribute("aria-pressed", String(item === row));
  });
  row.classList.add("is-active", "is-shifting");
  renderFeedDetail(row.dataset.project);
  window.setTimeout(() => row.classList.remove("is-shifting"), 500);
}

if (feedRows.length) {
  let activeIndex = Math.max(0, feedRows.findIndex((row) => row.classList.contains("is-active")));
  renderFeedDetail(feedRows[activeIndex].dataset.project);
  feedRows.forEach((row, index) => {
    row.addEventListener("click", () => {
      activeIndex = index;
    });
  });

  const feedToggle = document.querySelector("[data-feed-toggle]");
  const feedStatus = document.querySelector("[data-feed-status]");
  const autoAdvance = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let cycling = false;

  const setFeedState = (label) => {
    feedRows.forEach((row) => row.setAttribute("aria-pressed", row.classList.contains("is-active") ? "true" : "false"));
    if (feedStatus) {
      feedStatus.textContent = label;
    }
  };

  const stopCycling = () => {
    cycling = false;
    window.clearInterval(intervalId);
    if (feedToggle) {
      feedToggle.textContent = "Resume feed";
      feedToggle.setAttribute("aria-pressed", "false");
    }
    if (feedStatus) {
      feedStatus.textContent = "feed paused";
    }
  };

  const startCycling = () => {
    cycling = true;
    intervalId = window.setInterval(tick, 2400);
    if (feedToggle) {
      feedToggle.textContent = "Pause feed";
      feedToggle.setAttribute("aria-pressed", "true");
    }
    if (feedStatus) {
      feedStatus.textContent = "auto cycling";
    }
  };

  const tick = () => {
    const activeElement = document.activeElement;
    const feedHasFocus = activeElement && activeElement.closest(".build-console");
    const feedIsHovered = document.querySelector(".build-console").matches(":hover");

    if (document.hidden || feedHasFocus || feedIsHovered) {
      return;
    }

    activeIndex = (activeIndex + 1) % feedRows.length;
    activateFeedRow(feedRows[activeIndex]);
    setFeedState(`auto / ${String(activeIndex + 1).padStart(2, "0")} of ${String(feedRows.length).padStart(2, "0")}`);
  };

  let intervalId = 0;

  if (feedToggle) {
    feedToggle.hidden = false;
    feedToggle.addEventListener("click", () => {
      if (cycling) {
        stopCycling();
      } else {
        startCycling();
      }
    });
  }

  if (autoAdvance) {
    startCycling();
  } else {
    stopCycling();
  }
}

feedRows.forEach((card) => {
  card.setAttribute("aria-label", `Show ${card.querySelector(".repo-name").textContent} project details`);

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

document.querySelectorAll('.win-card[aria-hidden="true"] a').forEach((link) => {
  link.tabIndex = -1;
});

const finePointerMotion = window.matchMedia("(hover: hover) and (pointer: fine)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const cursorAura = document.querySelector(".cursor-aura");

if (finePointerMotion.matches && !reducedMotion.matches && cursorAura) {
  const lerp = (from, to, factor) => from + (to - from) * factor;
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;
  let auraX = pointerX;
  let auraY = pointerY;
  let running = false;
  let visible = false;

  const hoverCards = Array.from(document.querySelectorAll(".operator-card, .win-card, .feed-detail"));

  const writeCard = (card, x, y) => {
    const bounds = card.getBoundingClientRect();
    card.style.setProperty("--light-x", `${Math.round(x - bounds.left)}px`);
    card.style.setProperty("--light-y", `${Math.round(y - bounds.top)}px`);
  };

  const tiltHandler = (card, event) => {
    const bounds = card.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;
    writeCard(card, event.clientX, event.clientY);
    card.style.setProperty("--tilt-x", `${(0.5 - relativeY) * 10}deg`);
    card.style.setProperty("--tilt-y", `${(relativeX - 0.5) * 10}deg`);
    card.style.setProperty("--shadow-x", `${Math.round((0.5 - relativeX) * 18)}px`);
    card.style.setProperty("--shadow-y", `${Math.round((0.5 - relativeY) * 12 + 10)}px`);
  };

  hoverCards.forEach((card) => {
    card.addEventListener("pointerenter", () => card.classList.add("is-lit"));
    card.addEventListener("pointermove", (event) => tiltHandler(card, event));
    card.addEventListener("pointerleave", () => {
      card.classList.remove("is-lit");
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });

  const frame = () => {
    auraX = lerp(auraX, pointerX, 0.16);
    auraY = lerp(auraY, pointerY, 0.16);
    cursorAura.style.transform = `translate3d(${auraX - 260}px, ${auraY - 260}px, 0)`;

    if (visible && (Math.abs(auraX - pointerX) > 0.2 || Math.abs(auraY - pointerY) > 0.2)) {
      requestAnimationFrame(frame);
    } else {
      running = false;
    }
  };

  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;

    if (!visible) {
      visible = true;
      cursorAura.classList.add("is-visible");
      if (!running) {
        running = true;
        requestAnimationFrame(frame);
      }
    }
  }, { passive: true });

  document.addEventListener("pointerleave", (event) => {
    if (event.relatedTarget) {
      return;
    }

    visible = false;
    cursorAura.classList.remove("is-visible");
  });
}

const revealTargets = document.querySelectorAll("[data-reveal]");

if (revealTargets.length && "IntersectionObserver" in window && !reducedMotion.matches) {
  document.documentElement.classList.add("reveal-ready");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-revealed");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  revealTargets.forEach((target) => revealObserver.observe(target));
}

const heroTitle = document.querySelector("#hero-title");

if (heroTitle && !reducedMotion.matches) {
  const finalText = heroTitle.textContent.trim();
  const scrambleGlyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@$<>/";
  const accessibleText = document.createElement("span");
  const scrambleText = document.createElement("span");

  accessibleText.className = "sr-only";
  accessibleText.textContent = finalText;
  scrambleText.setAttribute("aria-hidden", "true");
  heroTitle.textContent = "";
  heroTitle.append(accessibleText, scrambleText);

  let revealed = 0;

  const decode = () => {
    revealed += 1;
    scrambleText.textContent = finalText
      .split("")
      .map((character, index) => {
        if (character === " ") {
          return " ";
        }

        if (index < revealed) {
          return character;
        }

        return scrambleGlyphs[Math.floor(Math.random() * scrambleGlyphs.length)];
      })
      .join("");

    if (revealed < finalText.length) {
      window.setTimeout(decode, 42);
    } else {
      scrambleText.textContent = finalText;
    }
  };

  decode();
}

if (finePointerMotion.matches && !reducedMotion.matches) {
  let magneticElement = null;

  document.addEventListener("pointermove", (event) => {
    const next = event.target.closest(".button, .card-actions a");

    if (magneticElement && magneticElement !== next) {
      magneticElement.style.transform = "";
      magneticElement = null;
    }

    if (!next) {
      return;
    }

    const bounds = next.getBoundingClientRect();
    const offsetX = (event.clientX - (bounds.left + bounds.width / 2)) / bounds.width;
    const offsetY = (event.clientY - (bounds.top + bounds.height / 2)) / bounds.height;
    next.style.transform = `translate(${(offsetX * 8).toFixed(2)}px, ${(offsetY * 6).toFixed(2)}px)`;
    magneticElement = next;
  });

  document.addEventListener("pointerleave", () => {
    if (magneticElement) {
      magneticElement.style.transform = "";
      magneticElement = null;
    }
  });
}

const winTrack = document.querySelector(".win-track");

if (winTrack && !reducedMotion.matches) {
  let lastScrollY = window.scrollY;
  let marqueeSkew = 0;
  let skewFrame = 0;

  const settleSkew = () => {
    marqueeSkew *= 0.9;
    winTrack.style.setProperty("--marquee-skew", `${marqueeSkew.toFixed(3)}deg`);

    if (Math.abs(marqueeSkew) > 0.05) {
      skewFrame = window.requestAnimationFrame(settleSkew);
    } else {
      winTrack.style.setProperty("--marquee-skew", "0deg");
      skewFrame = 0;
    }
  };

  window.addEventListener("scroll", () => {
    const velocity = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;
    marqueeSkew = Math.max(-8, Math.min(8, marqueeSkew + velocity * 0.35));

    if (!skewFrame) {
      skewFrame = window.requestAnimationFrame(settleSkew);
    }
  }, { passive: true });
}
