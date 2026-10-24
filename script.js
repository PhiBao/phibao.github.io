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
  ratchet: {
    title: "Ratchet",
    repo: "https://github.com/PhiBao/ratchet",
    kicker: "WIN / 01 — agentic trading",
    tags: ["Binance Agent OS", "Track A winner", "Winner build"],
    detail: "A self-improving Binance spot-trading agent. Every trade carries a checkable thesis, every close is graded on decision quality, and each session writes the lesson into a versioned playbook.",
    proof: "A walk-forward A/B harness pits the frozen v0 playbook against the evolved one on held-out data, so improvement is measured instead of claimed.",
  },
  parity: {
    title: "Parity",
    repo: "https://github.com/PhiBao/parity",
    kicker: "WIN / 02 — RWA pricing",
    tags: ["CoinMarketCap API", "Top 30", "Winner build"],
    detail: "A fair-price and wrapper-spread layer for tokenised stocks, built on CoinMarketCap's RWA API — see the premium before you pay it.",
    proof: "The spread is decomposed into the underlying, the wrapper, and the venue premium, so a quote can be judged before execution.",
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
    detail: "SoSoValue Buildathon winner build. AI-powered multi-strategy terminal for SoDex.",
  },
  blinddeal: {
    title: "BlindDeal",
    repo: "https://github.com/PhiBao/blind-deal",
    live: "https://blind-deal.vercel.app",
    detail: "Confidential P2P price negotiation on Fhenix. Winner build on Akindo.",
  },
  guarded: {
    title: "Guarded Alpha",
    repo: "https://github.com/PhiBao/guarded-alpha",
    detail: "Self-custodial AI trading agent for BNB Chain. 4th place on Track 1 of BNB Hack and a $2,000 prize.",
  },
  rakshak: {
    title: "Rakshak",
    repo: "https://github.com/PhiBao/rakshak",
    detail: "An AI guardian for phone fraud: recognises scam scripts during a call, warns the person being targeted, and alerts their family.",
  },
  advocate: {
    title: "Advocate",
    repo: "https://github.com/PhiBao/advocate",
    detail: "An AI advocate that fights medical bills and claim denials end to end, with per-case agents and verifiable appeal letters.",
  },
  wpilot: {
    title: "Wpilot",
    repo: "https://github.com/PhiBao/wpilot",
    detail: "A backfill agent for volunteer shifts that texts eligible people one by one and atomically books the first yes.",
  },
  recall: {
    title: "Recall",
    repo: "https://github.com/PhiBao/recall",
    detail: "A relationship-memory agent that turns one-line notes into searchable facts and proactive daily follow-ups.",
  },
  signedoff: {
    title: "Signed Off",
    repo: "https://github.com/PhiBao/signed-off",
    detail: "A CLI that turns a signed project scope into a promise inventory and verifies each promise against a real browser build.",
  },
  halt: {
    title: "Halt",
    repo: "https://github.com/PhiBao/halt",
    detail: "A circuit breaker for the agentic economy: agents register a natural-language constitution and watchdogs can freeze rogue spenders.",
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

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

/* ------------------------------------------------------------------ terminal */

const output = document.querySelector("#terminal-output");
const form = document.querySelector("#terminal-form");
const input = document.querySelector("#terminal-input");
const terminal = document.querySelector("[data-terminal]");

function line(html) {
  const p = document.createElement("p");
  p.innerHTML = html;
  output.appendChild(p);
  output.scrollTop = output.scrollHeight;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
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
    line(`<span class="prompt">help</span> commands: projects, wins, contact, links, whoami, ${Object.keys(projects).slice(0, 3).map((key) => `open ${key}`).join(", ")}, clear`);
    return;
  }

  if (normalized === "projects") {
    const names = Object.keys(projects)
      .map((key) => `<button class="inline-command" data-command="open ${key}">${escapeHtml(key)}</button>`)
      .join(" / ");
    line(`<span class="prompt">projects</span> ${names}`);
    return;
  }

  if (normalized === "wins") {
    const wins = [
      ["Ratchet", "Binance Agent OS — Track A winner", "https://github.com/PhiBao/ratchet"],
      ["Parity", "CoinMarketCap API — Top 30", "https://github.com/PhiBao/parity"],
      ["Gotham Court", "GenLayer — Onchain Justice winner", "https://github.com/PhiBao/gotham-court"],
      ["Guarded Alpha", "BNB Hack — 4th, Track 1", "https://github.com/PhiBao/guarded-alpha"],
      ["SoVibe", "SoSoValue Buildathon — winner build", "https://github.com/PhiBao/so-vibe"],
      ["BlindDeal", "Akindo Buildathon — winner build", "https://github.com/PhiBao/blind-deal"],
    ];
    line(`<span class="prompt">wins</span> 06 winner builds`);
    wins.forEach(([name, award, url]) => line(`&nbsp;&nbsp;${link(url, name)} — ${award}`));
    return;
  }

  if (normalized === "contact" || normalized === "links") {
    line(`<span class="prompt">${normalized}</span> ${link("https://t.me/kiter9", "Telegram")} / ${link("https://x.com/0xKiter", "X @0xKiter")} / ${link("https://github.com/PhiBao", "GitHub")} / ${link("https://myanimelist.net/profile/Kiter", "MAL")}`);
    return;
  }

  if (normalized === "whoami") {
    line(`<span class="prompt">whoami</span> kiter — phi bao. Independent builder shipping agents, market infrastructure, and onchain products. 06 winner builds.`);
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

if (form && output && input) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    runCommand(input.value);
    input.value = "";
  });

  output.addEventListener("click", (event) => {
    const button = event.target.closest("[data-command]");

    if (button) {
      runCommand(button.dataset.command);
    }
  });

  if (terminal) {
    terminal.addEventListener("click", (event) => {
      if (event.target.closest("a, button, input, label")) {
        return;
      }

      input.focus();
    });
  }
}

/* ----------------------------------------------------------------- build feed */

const feedRows = Array.from(document.querySelectorAll(".build-row"));
const feedDetail = document.querySelector("[data-feed-detail]");
const consolePanel = document.querySelector(".console");
const feedToggle = document.querySelector("[data-feed-toggle]");
const feedStatus = document.querySelector("[data-feed-status]");

const pad = (value) => String(value).padStart(2, "0");

function setFeedStatus(value) {
  if (feedStatus) {
    feedStatus.textContent = value;
  }
}

function renderFeedDetail(projectKey) {
  const project = Object.hasOwn(projects, projectKey) ? projects[projectKey] : null;

  if (!project || !feedDetail) {
    return;
  }

  feedDetail.innerHTML = `
    <div class="build-detail-top">
      <span class="build-count">${project.kicker}</span>
      <span class="build-repo-state">repo / public</span>
    </div>
    <div class="build-scan" aria-hidden="true"><span></span></div>
    <h3 id="build-detail-title">${project.title}</h3>
    <p class="build-detail-copy">${project.detail}</p>
    <div class="chips">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    <div class="proof">
      <span class="proof-label">Proof</span>
      <p>${project.proof}</p>
    </div>
    <a class="build-link" href="${project.repo}" target="_blank" rel="noreferrer">
      Explore repo <span aria-hidden="true">↗</span>
    </a>
  `;
}

function activateFeedRow(row) {
  feedRows.forEach((item) => {
    item.classList.remove("is-active");
    item.setAttribute("aria-pressed", String(item === row));
  });
  row.classList.add("is-active");
  renderFeedDetail(row.dataset.project);
}

if (feedRows.length) {
  let activeIndex = Math.max(0, feedRows.findIndex((row) => row.classList.contains("is-active")));
  let cycling = false;
  let intervalId = 0;

  renderFeedDetail(feedRows[activeIndex].dataset.project);

  const updateCycleStatus = () => {
    setFeedStatus(`auto / ${pad(activeIndex + 1)} of ${pad(feedRows.length)}`);
  };

  const setPausedState = (paused) => {
    if (!consolePanel) {
      return;
    }

    consolePanel.classList.toggle("is-paused", paused);
  };

  const stopCycling = (status = "paused") => {
    cycling = false;
    window.clearInterval(intervalId);
    setPausedState(true);

    if (feedToggle) {
      feedToggle.textContent = "Resume";
      feedToggle.setAttribute("aria-pressed", "false");
    }

    setFeedStatus(status);
  };

  const startCycling = () => {
    cycling = true;
    window.clearInterval(intervalId);
    intervalId = window.setInterval(tick, 4800);
    setPausedState(false);

    if (feedToggle) {
      feedToggle.textContent = "Pause";
      feedToggle.setAttribute("aria-pressed", "true");
    }

    updateCycleStatus();
  };

  const tick = () => {
    const activeElement = document.activeElement;
    const feedHasFocus = activeElement && activeElement.closest(".console");
    const feedIsHovered = consolePanel && consolePanel.matches(":hover");

    if (document.hidden || feedHasFocus || feedIsHovered) {
      return;
    }

    activeIndex = (activeIndex + 1) % feedRows.length;
    activateFeedRow(feedRows[activeIndex]);
    updateCycleStatus();
  };

  const autoAdvance = !reducedMotion.matches && window.matchMedia("(min-width: 901px)").matches;

  if (feedToggle) {
    feedToggle.hidden = !autoAdvance;
    feedToggle.addEventListener("click", () => {
      if (cycling) {
        stopCycling();
      } else {
        startCycling();
      }
    });
  }

  feedRows.forEach((row, index) => {
    row.addEventListener("click", () => {
      activeIndex = index;

      if (cycling) {
        stopCycling();
      }

      activateFeedRow(row);
      setFeedStatus(`manual / ${pad(activeIndex + 1)} of ${pad(feedRows.length)}`);

      if (feedDetail && window.matchMedia("(max-width: 900px)").matches) {
        window.setTimeout(() => {
          feedDetail.scrollIntoView({
            behavior: reducedMotion.matches ? "auto" : "smooth",
            block: "nearest",
          });
        }, 80);
      }
    });
  });

  if (autoAdvance) {
    startCycling();
  } else {
    setPausedState(true);
    setFeedStatus(`manual / 01 of ${pad(feedRows.length)}`);
  }

  if (consolePanel) {
    const suspendScan = () => {
      if (cycling) {
        setPausedState(true);
      }
    };

    const resumeScan = () => {
      if (cycling) {
        setPausedState(false);
      }
    };

    consolePanel.addEventListener("pointerenter", suspendScan);
    consolePanel.addEventListener("pointerleave", resumeScan);
    consolePanel.addEventListener("focusin", suspendScan);
    consolePanel.addEventListener("focusout", resumeScan);
  }
}

/* --------------------------------------------------------------------- clock */

const clock = document.querySelector("[data-clock]");

if (clock) {
  const updateClock = () => {
    const now = new Date();
    clock.textContent = [now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()]
      .map(pad)
      .join(":");
  };

  updateClock();
  window.setInterval(updateClock, 1000);
}

/* ------------------------------------------------------------- scroll chrome */

const progress = document.querySelector("[data-progress]");

if (progress) {
  let progressFrame = 0;

  const writeProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progress.style.transform = `scaleX(${value.toFixed(4)})`;
    progressFrame = 0;
  };

  window.addEventListener("scroll", () => {
    if (!progressFrame) {
      progressFrame = window.requestAnimationFrame(writeProgress);
    }
  }, { passive: true });

  window.addEventListener("resize", writeProgress);
  writeProgress();
}

const navLinks = Array.from(document.querySelectorAll(".nav a"));

if (navLinks.length && "IntersectionObserver" in window) {
  const sections = navLinks
    .map((navLink) => document.querySelector(navLink.getAttribute("href")))
    .filter(Boolean);

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((navLink) => {
        navLink.classList.toggle("is-active", navLink.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-38% 0px -56% 0px", threshold: 0 });

  sections.forEach((section) => navObserver.observe(section));
}

/* -------------------------------------------------------------------- reveals */

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
  }, { threshold: 0.08, rootMargin: "0px 0px -7% 0px" });

  revealTargets.forEach((target) => revealObserver.observe(target));
}

/* ------------------------------------------------------------------- scramble */

const scrambleTarget = document.querySelector("[data-scramble]");

if (scrambleTarget && !reducedMotion.matches) {
  const finalText = scrambleTarget.dataset.scramble.trim();
  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@$<>/";
  const accessible = document.createElement("span");
  const visual = document.createElement("span");

  accessible.className = "sr-only";
  accessible.textContent = finalText;
  visual.setAttribute("aria-hidden", "true");
  scrambleTarget.textContent = "";
  scrambleTarget.append(accessible, visual);

  let revealed = 0;

  const decode = () => {
    revealed += 1;
    visual.textContent = finalText
      .split("")
      .map((character, index) => {
        if (character === " ") {
          return " ";
        }

        if (index < revealed) {
          return character;
        }

        return glyphs[Math.floor(Math.random() * glyphs.length)];
      })
      .join("");

    if (revealed < finalText.length) {
      window.setTimeout(decode, 26);
    } else {
      visual.textContent = finalText;
    }
  };

  window.setTimeout(decode, 280);
}

/* --------------------------------------------------------------------- cursor */

const cursor = document.querySelector(".cursor");

if (cursor && finePointer.matches && !reducedMotion.matches) {
  const ring = cursor.querySelector(".cursor-ring");
  const dot = cursor.querySelector(".cursor-dot");
  const lerp = (from, to, factor) => from + (to - from) * factor;

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let ringX = targetX;
  let ringY = targetY;
  let running = false;
  let visible = false;

  const frame = () => {
    ringX = lerp(ringX, targetX, 0.18);
    ringY = lerp(ringY, targetY, 0.18);
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;

    if (visible && (Math.abs(ringX - targetX) > 0.2 || Math.abs(ringY - targetY) > 0.2)) {
      window.requestAnimationFrame(frame);
    } else {
      running = false;
    }
  };

  window.addEventListener("pointermove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;

    if (!visible) {
      visible = true;
      cursor.classList.add("is-visible");
    }

    if (!running) {
      running = true;
      window.requestAnimationFrame(frame);
    }
  }, { passive: true });

  window.addEventListener("pointerover", (event) => {
    cursor.classList.toggle("is-active", Boolean(event.target.closest("a, button, .inline-command")));
  });

  document.addEventListener("pointerleave", (event) => {
    if (event.relatedTarget) {
      return;
    }

    visible = false;
    cursor.classList.remove("is-visible");
  });
}

/* ------------------------------------------------------------------ spotlight */

if (finePointer.matches && !reducedMotion.matches) {
  const litTargets = Array.from(document.querySelectorAll(".case, .terminal, .console, .dossier"));

  litTargets.forEach((target) => {
    target.addEventListener("pointerenter", () => target.classList.add("is-lit"));
    target.addEventListener("pointermove", (event) => {
      const bounds = target.getBoundingClientRect();
      target.style.setProperty("--x", `${Math.round(event.clientX - bounds.left)}px`);
      target.style.setProperty("--y", `${Math.round(event.clientY - bounds.top)}px`);
    });
    target.addEventListener("pointerleave", () => target.classList.remove("is-lit"));
  });
}

/* ------------------------------------------------------------------- magnetic */

if (finePointer.matches && !reducedMotion.matches) {
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const bounds = button.getBoundingClientRect();
      const offsetX = (event.clientX - (bounds.left + bounds.width / 2)) / bounds.width;
      const offsetY = (event.clientY - (bounds.top + bounds.height / 2)) / bounds.height;
      button.style.setProperty("--mx", `${(offsetX * 5).toFixed(2)}px`);
      button.style.setProperty("--my", `${(offsetY * 4).toFixed(2)}px`);
    });

    button.addEventListener("pointerleave", () => {
      button.style.setProperty("--mx", "0px");
      button.style.setProperty("--my", "0px");
    });
  });
}

/* ------------------------------------------------------------------ ticker skew */

const tickerTrack = document.querySelector("[data-ticker]");

if (tickerTrack && !reducedMotion.matches) {
  let lastScrollY = window.scrollY;
  let tickerSkew = 0;
  let skewFrame = 0;

  const settleSkew = () => {
    tickerSkew *= 0.9;
    tickerTrack.style.setProperty("--ticker-skew", `${tickerSkew.toFixed(3)}deg`);

    if (Math.abs(tickerSkew) > 0.04) {
      skewFrame = window.requestAnimationFrame(settleSkew);
    } else {
      tickerTrack.style.setProperty("--ticker-skew", "0deg");
      skewFrame = 0;
    }
  };

  window.addEventListener("scroll", () => {
    const velocity = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;
    tickerSkew = Math.max(-5, Math.min(5, tickerSkew + velocity * 0.22));

    if (!skewFrame) {
      skewFrame = window.requestAnimationFrame(settleSkew);
    }
  }, { passive: true });
}
