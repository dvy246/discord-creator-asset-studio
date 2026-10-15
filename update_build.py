import os, re

with open('playbook.html', 'r', encoding='utf-8') as f:
    playbook_src = f.read()

style_start = playbook_src.find('<style>') + len('<style>')
style_end = playbook_src.find('</style>')
base_style = playbook_src[style_start:style_end]

# Remove CSS transitions that could interfere with deterministic seeking
base_style = base_style.replace('transition:transform .2s', '/* transition:none */')

template = """<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=1280, height=720">
  <title>Agentic System Design Playbook - Walkthrough</title>
  <script src="assets/gsap.min.js"></script>
  <style>
/* __BASE_STYLE__ */

    /* Global reset & Frame setup */
    html, body {
      margin: 0;
      padding: 0;
      width: 1280px;
      height: 720px;
      overflow: hidden;
      background: #0E1628;
      user-select: none;
    }

    #root {
      width: 1280px;
      height: 720px;
      position: relative;
      overflow: hidden;
      background: var(--bg);
      --chrome-bg: #EAE1C8;
      --chrome-border: #425B9A;
    }

    /* Mock Browser Window Chrome */
    #browser-chrome {
      position: absolute;
      top: 0;
      left: 0;
      width: 1280px;
      height: 42px;
      background: var(--chrome-bg);
      border-bottom: 2px solid var(--chrome-border);
      display: flex;
      align-items: center;
      padding: 0 16px;
      gap: 16px;
      z-index: 10000;
      box-sizing: border-box;
    }

    .window-dots {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    .dot.red { background: #FF5F56; border: 1px solid #E0443E; }
    .dot.yellow { background: #FFBD2E; border: 1px solid #DEA123; }
    .dot.green { background: #27C93F; border: 1px solid #1AAB29; }

    .nav-arrows {
      display: flex;
      gap: 10px;
      color: var(--soft);
      font-size: 14px;
      font-weight: 700;
      margin-left: 6px;
    }

    .omnibox {
      flex: 0 0 520px;
      margin: 0 auto;
      height: 28px;
      background: var(--panel);
      border: 1.5px solid var(--line);
      border-radius: 6px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      gap: 8px;
      font-family: var(--font-b);
      font-size: 13px;
      color: var(--ink);
    }
    .lock-icon {
      width: 12px;
      height: 12px;
      fill: var(--acc);
    }
    .omnibox .url {
      font-weight: 600;
      letter-spacing: 0.01em;
    }
    .omnibox .badge-offline {
      margin-left: auto;
      font-size: 11px;
      background: var(--sky);
      color: #1B2542;
      padding: 1px 6px;
      border-radius: 4px;
      font-weight: 700;
    }

    .window-specs {
      font-size: 11px;
      color: var(--soft);
      font-family: var(--font-h);
      font-weight: 600;
      letter-spacing: 0.05em;
    }

    /* Webpage Viewport Container */
    #browser-viewport {
      position: absolute;
      top: 42px;
      left: 0;
      width: 1280px;
      height: 678px;
      overflow: hidden;
      background: var(--bg);
      background-image: linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px);
      background-size: 32px 32px;
    }

    /* App Header - FIXED AT TOP OF VIEWPORT */
    header.top {
      position: absolute;
      top: 0;
      left: 0;
      width: 1280px;
      height: 52px;
      padding: 0 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      border-bottom: 2px solid var(--line);
      background: var(--bg);
      z-index: 1000;
    }
    header.top .brand {
      font-weight: 700;
      font-size: 1.05rem;
      letter-spacing: -0.01em;
      color: var(--ink);
    }

    /* Scene Views - STRICTLY BELOW HEADER (top: 52px, height: 626px) */
    .view-scene {
      position: absolute;
      top: 52px;
      left: 0;
      width: 1280px;
      height: 626px;
      box-sizing: border-box;
      overflow: hidden;
      display: none;
      opacity: 0;
    }
    .view-scene.active {
      display: block;
      opacity: 1;
    }

    .layout {
      display: grid;
      grid-template-columns: 210px 1fr;
      gap: 28px;
      padding: 18px 28px 84px 28px;
      box-sizing: border-box;
      max-width: 1240px;
      margin: 0 auto;
      height: 100%;
    }

    /* Sidebar Progress Map Styling */
    nav.wire {
      margin: 0;
      padding: 0;
      border-right: 1.5px solid var(--line);
      padding-right: 18px;
    }
    nav.wire summary {
      font-weight: 700;
      cursor: pointer;
      font-size: 0.95rem;
      color: var(--ink);
      margin-bottom: 8px;
    }
    nav.wire ol {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    nav.wire li {
      padding: 4px 0 4px 14px;
      font-size: 0.85rem;
      border-left: 2px solid var(--line);
      position: relative;
      margin-bottom: 4px;
    }
    nav.wire li.active {
      border-left-color: var(--acc);
      font-weight: 700;
    }
    nav.wire li.done {
      border-left-color: var(--sky);
    }
    nav.wire li a {
      color: var(--ink);
      text-decoration: none;
      display: block;
    }
    nav.wire .tag {
      font-size: 0.72rem;
      opacity: 0.8;
      display: block;
    }

    /* Compact lab framing to prevent vertical overflow */
    .labframe {
      padding: 12px 16px;
      margin-bottom: 10px;
      background: var(--panel);
      border: 2px solid var(--line);
      border-radius: 8px;
    }
    .hero {
      margin-bottom: 16px;
    }

    /* Animated Loop SVG in Hero */
    svg.loop {
      width: 320px;
      height: 220px;
      background: var(--panel);
      border: 2px solid var(--line);
      border-radius: 8px;
      padding: 8px;
    }

    /* Mouse Cursor */
    #cursor {
      position: fixed;
      top: 0;
      left: 0;
      width: 28px;
      height: 28px;
      z-index: 25000;
      pointer-events: none;
      filter: drop-shadow(0 3px 6px rgba(0,0,0,0.35));
    }
    #cursor-ripple {
      position: absolute;
      top: 0;
      left: 0;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 2.5px solid var(--pink);
      background: rgba(255, 149, 165, 0.3);
      opacity: 0;
      pointer-events: none;
    }

    /* Cinematic Caption Pill Overlay - DEDICATED BOTTOM ZONE */
    #caption-container {
      position: fixed;
      bottom: 14px;
      left: 0;
      width: 1280px;
      display: flex;
      justify-content: center;
      z-index: 20000;
      pointer-events: none;
    }
    #caption-pill {
      background: rgba(18, 26, 46, 0.94);
      border: 1.5px solid rgba(118, 192, 236, 0.65);
      border-radius: 9999px;
      padding: 6px 22px;
      color: #FFF6DC;
      font-family: var(--font-b);
      font-size: 15px;
      font-weight: 600;
      letter-spacing: 0.015em;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
      display: flex;
      align-items: center;
      gap: 10px;
      opacity: 0;
    }
    #caption-pill .caption-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--pink);
      box-shadow: 0 0 8px var(--pink);
    }

    /* Highlight spotlight callout box */
    .spotlight-box {
      position: absolute;
      border: 2.5px solid var(--pink);
      border-radius: 8px;
      background: rgba(255, 149, 165, 0.14);
      pointer-events: none;
      opacity: 0;
      z-index: 5000;
      box-shadow: 0 0 16px rgba(255, 149, 165, 0.5);
    }
  </style>
</head>
<body>
  <div id="root"
       data-composition-id="main"
       data-start="0"
       data-duration="50"
       data-width="1280"
       data-height="720"
       data-layout-allow-overflow>

    <!-- Browser Chrome Header -->
    <div id="browser-chrome" data-layout-allow-overlap>
      <div class="window-dots">
        <div class="dot red"></div>
        <div class="dot yellow"></div>
        <div class="dot green"></div>
      </div>
      <div class="nav-arrows">
        <span>&larr;</span>
        <span>&rarr;</span>
        <span>&#x21bb;</span>
      </div>
      <div class="omnibox">
        <svg class="lock-icon" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
        <span class="url">playbook.html</span>
        <span class="badge-offline">Offline &bull; Ready</span>
      </div>
      <div class="window-specs">1280 &times; 720 px</div>
    </div>

    <!-- Browser Viewport with Playbook App -->
    <div id="browser-viewport" data-layout-allow-overflow>

      <!-- App Header: Strictly at top (52px) -->
      <header class="top" data-layout-allow-overlap>
        <span class="brand" id="brand-link">Agentic System Design Playbook</span>
        <nav class="row">
          <button class="btn small" id="nav-btn-contents">Contents</button>
          <button class="btn small" id="nav-btn-glossary">Glossary</button>
          <button class="btn small" id="nav-btn-cheat">Cheat sheet</button>
          <button class="btn small" id="nav-btn-journal">Journal</button>
          <button class="btn small" id="tbtn">Dark mode</button>
        </nav>
      </header>

      <!-- VIEW 1: HOME PAGE (Scenes 1 & 8) -->
      <div class="view-scene active" id="view-home" data-layout-allow-overflow>
        <div class="layout" data-layout-allow-overflow>
          <nav class="wire" aria-label="Progress map">
            <details open>
              <summary>Progress map</summary>
              <ol>
                <li id="wire-ch1"><a href="#ch1">What is an agent?</a><span class="tag">Lab not finished</span></li>
                <li id="wire-ch2"><a href="#ch2">Anatomy of an agent</a><span class="tag">Lab not finished</span></li>
                <li id="wire-ch3"><a href="#ch3">Tools a model can use well</a><span class="tag">Lab not finished</span></li>
                <li id="wire-ch4"><a href="#ch4">Context engineering</a><span class="tag">Lab not finished</span></li>
                <li id="wire-ch5"><a href="#ch5">Workflow patterns</a><span class="tag">Lab not finished</span></li>
                <li id="wire-ch15"><a href="#ch15">Design studio</a><span class="tag">Lab not finished</span></li>
              </ol>
              <p style="margin:10px 0 2px;font-size:0.85rem;"><b>Rank: Apprentice</b><br><span class="tag">Labs finished: 0 of 16</span></p>
              <p style="font-weight:700;margin:4px 0 0;font-size:0.85rem;">Badges: 0 of 8</p>
            </details>
          </nav>

          <main id="main-home" data-layout-allow-overflow>
            <section class="block hero" style="display:grid;grid-template-columns:1.2fr 1fr;gap:20px;align-items:center;">
              <div>
                <h1 style="font-size:2.2rem;line-height:1.15;margin-bottom:10px;">Design agents you can defend</h1>
                <p style="font-size:0.95rem;margin-bottom:14px;">Learn by doing. In each chapter you make a design decision, see why it works or fails, and save it to your own design document.</p>
                <a class="btn primary" id="btn-start-ch1" href="#ch1" style="display:inline-block;padding:8px 18px;font-size:0.95rem;">Start Chapter 1</a>
              </div>
              <div style="display:flex;justify-content:center;">
                <svg class="loop" viewBox="0 0 360 260" role="img">
                  <defs>
                    <marker id="lh" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                      <path d="M0 0 L12 6 L0 12 z" fill="var(--acc)"/>
                    </marker>
                  </defs>
                  <path d="M126 60 H232" marker-end="url(#lh)"/>
                  <path d="M270 96 V162" marker-end="url(#lh)"/>
                  <path d="M234 200 H128" marker-end="url(#lh)"/>
                  <path d="M90 164 V98" marker-end="url(#lh)"/>
                  <circle class="n" cx="90" cy="60" r="34"/>
                  <text x="90" y="65" text-anchor="middle">Think</text>
                  <circle class="n p" cx="270" cy="60" r="34"/>
                  <text x="270" y="65" text-anchor="middle">Act</text>
                  <circle class="n" cx="270" cy="200" r="34"/>
                  <text x="270" y="205" text-anchor="middle">Observe</text>
                  <circle class="n p" cx="90" cy="200" r="34"/>
                  <text x="90" y="205" text-anchor="middle">Stop?</text>
                  <circle id="loop-dot" r="7" fill="#FF95A5" stroke="#1B2542" stroke-width="2" cx="90" cy="60"/>
                </svg>
              </div>
            </section>

            <section class="block how" style="margin-top:10px;">
              <h2 style="font-size:1.25rem;margin-bottom:6px;">How it works</h2>
              <ol style="font-size:0.88rem;margin:0 0 6px 18px;padding:0;">
                <li>Read a short story scene and a plain English concept.</li>
                <li>Make a prediction in the lab, then see why it was right or wrong.</li>
                <li>Answer the checkpoint questions, each with a reason.</li>
                <li>Watch your Design Journal grow into an exported design document.</li>
              </ol>
              <p style="font-size:0.85rem;margin:4px 0 0;color:var(--soft);">16 chapters, 16 labs. Works offline. Your progress stays in this browser.</p>
            </section>
          </main>
        </div>
      </div>

      <!-- VIEW 2: CHAPTER 1 (Scene 2) -->
      <div class="view-scene" id="view-ch1" data-layout-allow-overflow>
        <div class="layout" data-layout-allow-overflow>
          <nav class="wire" aria-label="Progress map">
            <details open>
              <summary>Progress map</summary>
              <ol>
                <li class="active"><a href="#ch1" aria-current="page">What is an agent?</a><span class="tag">In progress</span></li>
                <li><a href="#ch2">Anatomy of an agent</a><span class="tag">Lab not finished</span></li>
                <li><a href="#ch4">Context engineering</a><span class="tag">Lab not finished</span></li>
              </ol>
            </details>
          </nav>

          <main data-layout-allow-overflow>
            <article data-layout-allow-overflow>
              <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:8px;">
                <div>
                  <p class="tag" style="margin:0;font-size:0.8rem;">Part 1: Basics</p>
                  <h1 style="font-size:1.8rem;margin:2px 0 0;">What is an agent?</h1>
                </div>
                <nav class="pager" style="margin:0;">
                  <a class="btn small" id="ch1-btn-contents" href="#home">Contents</a>
                  <a class="btn primary small" id="ch1-btn-next" href="#ch2">Next chapter</a>
                </nav>
              </div>

              <section class="block labframe" id="ch1-labframe" data-layout-allow-overflow>
                <h3 style="margin:0 0 4px;font-size:1.05rem;">Lab: Sort the systems</h3>
                <div class="predict" style="margin:4px 0;">
                  <p style="font-size:0.88rem;margin:0;">Predict: put each system in the lane you think fits. Use buttons on a card.</p>
                </div>

                <!-- Card Pool -->
                <ul class="cards" id="ch1-pool" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:6px 0;padding:0;list-style:none;">
                  <li class="card" id="card-s1" style="padding:6px 8px;">
                    <p style="margin:0 0 6px;font-size:0.86rem;line-height:1.3;">Translate one paragraph into French.</p>
                    <div class="row" id="row-s1-buttons">
                      <button class="btn small" id="btn-s1-prompt" style="font-size:0.75rem;padding:2px 6px;">Single prompt</button>
                      <button class="btn small" style="font-size:0.75rem;padding:2px 6px;">Workflow</button>
                      <button class="btn small" style="font-size:0.75rem;padding:2px 6px;">Agent</button>
                    </div>
                  </li>
                  <li class="card" id="card-s3" style="padding:6px 8px;">
                    <p style="margin:0 0 6px;font-size:0.86rem;line-height:1.3;">Support helper reads ticket, looks up order, and refunds.</p>
                    <div class="row" id="row-s3-buttons">
                      <button class="btn small" style="font-size:0.75rem;padding:2px 6px;">Single prompt</button>
                      <button class="btn small" style="font-size:0.75rem;padding:2px 6px;">Workflow</button>
                      <button class="btn small" id="btn-s3-agent" style="font-size:0.75rem;padding:2px 6px;">Agent</button>
                    </div>
                  </li>
                </ul>

                <!-- Lanes -->
                <div class="lanes" data-layout-allow-overflow style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:6px 0;">
                  <section class="lanebox" data-layout-allow-overflow style="padding:6px 8px;min-height:64px;">
                    <h4 style="font-size:0.85rem;margin:0 0 4px;">Single prompt</h4>
                    <ul class="cards" id="lane-prompt" style="padding:0;margin:0;list-style:none;">
                      <li class="card" id="lane-card-s1" style="display:none;padding:5px 6px;">
                        <p style="margin:0;font-size:0.8rem;">Translate paragraph.</p>
                        <p class="reveal ok" id="reveal-s1" style="display:none;margin-top:3px;font-size:0.76rem;padding:2px 4px;">Correct. One model call, one answer.</p>
                      </li>
                    </ul>
                  </section>
                  <section class="lanebox" data-layout-allow-overflow style="padding:6px 8px;min-height:64px;">
                    <h4 style="font-size:0.85rem;margin:0 0 4px;">Workflow</h4>
                    <ul class="cards" id="lane-workflow" style="padding:0;margin:0;list-style:none;"></ul>
                  </section>
                  <section class="lanebox" data-layout-allow-overflow style="padding:6px 8px;min-height:64px;">
                    <h4 style="font-size:0.85rem;margin:0 0 4px;">Agent</h4>
                    <ul class="cards" id="lane-agent" style="padding:0;margin:0;list-style:none;">
                      <li class="card" id="lane-card-s3" style="display:none;padding:5px 6px;">
                        <p style="margin:0;font-size:0.8rem;">Support helper loop.</p>
                        <p class="reveal ok" id="reveal-s3" style="display:none;margin-top:3px;font-size:0.76rem;padding:2px 4px;">Correct. Model picks action in a loop.</p>
                      </li>
                    </ul>
                  </section>
                </div>

                <div class="row" style="margin-top:8px;align-items:center;">
                  <button class="btn primary small" id="btn-ch1-check">Check my sorting</button>
                  <button class="btn small" id="btn-ch1-reset">Reset lab</button>
                  <span class="status" id="ch1-status" style="margin-left:8px;font-size:0.85rem;">Placed 0 of 8. Place systems to check.</span>
                </div>
              </section>
            </article>
          </main>
        </div>
      </div>

      <!-- VIEW 3: CHAPTER 2 (Scene 3) -->
      <div class="view-scene" id="view-ch2" data-layout-allow-overflow>
        <div class="layout" data-layout-allow-overflow>
          <nav class="wire" aria-label="Progress map">
            <details open>
              <summary>Progress map</summary>
              <ol>
                <li class="done"><a href="#ch1">What is an agent?</a><span class="tag">Lab finished</span></li>
                <li class="active"><a href="#ch2">Anatomy of an agent</a><span class="tag">In progress</span></li>
                <li><a href="#ch4">Context engineering</a><span class="tag">Lab not finished</span></li>
              </ol>
            </details>
          </nav>

          <main data-layout-allow-overflow>
            <article data-layout-allow-overflow>
              <p class="tag" style="margin:0;font-size:0.8rem;">Part 1: Basics</p>
              <h1 style="font-size:1.8rem;margin:2px 0 8px;">Anatomy of an agent</h1>

              <section class="block labframe" data-layout-allow-overflow style="padding:10px 14px;">
                <h3 style="margin:0 0 4px;font-size:1.05rem;">Lab: Agent loop stepper</h3>
                <p style="margin:2px 0 6px;font-size:0.86rem;">Task: Order 1042 is late. Check it and fix it if the policy allows.</p>

                <!-- Context Meter -->
                <div style="margin:4px 0;">
                  <p id="ch2-meter-label" style="font-weight:600;font-size:0.84rem;margin:0 0 3px;">Context so far: about 35 tokens.</p>
                  <div class="bar" role="img" aria-label="Context size meter" style="height:10px;">
                    <span id="ch2-bar-fill" style="width: 15%;background:var(--acc);"></span>
                  </div>
                </div>

                <!-- Context box -->
                <pre class="ctx" id="ch2-ctx" tabindex="0" style="max-height:115px;margin:6px 0;font-size:0.8rem;padding:6px;line-height:1.35;">You are a support agent. Use tools. Stop when the customer question is answered.
Order 1042 is late. Check it and fix it if the policy allows.</pre>

                <!-- Action Buttons -->
                <div id="ch2-predict-box" style="margin-top:6px;">
                  <div class="predict" style="margin:0 0 4px;">
                    <p id="ch2-step-title" style="margin:0;font-size:0.85rem;">Predict step 1 of 4: which tool will the agent use next?</p>
                  </div>
                  <div class="row" style="margin-top:4px;">
                    <button class="btn small" id="btn-tool-order">get_order</button>
                    <button class="btn small" id="btn-tool-policy">get_policy</button>
                    <button class="btn small" id="btn-tool-refund">request_refund</button>
                    <button class="btn small" id="btn-tool-finish">finish</button>
                  </div>
                </div>

                <p class="reveal ok" id="ch2-reveal" style="display:none;margin-top:6px;font-size:0.82rem;padding:3px 6px;"></p>
              </section>
            </article>
          </main>
        </div>
      </div>

      <!-- VIEW 4: CHAPTER 4 (Scene 4) -->
      <div class="view-scene" id="view-ch4" data-layout-allow-overflow>
        <div class="layout" data-layout-allow-overflow>
          <nav class="wire">
            <details open>
              <summary>Progress map</summary>
              <ol>
                <li class="done"><a href="#ch1">What is an agent?</a><span class="tag">Lab finished</span></li>
                <li class="done"><a href="#ch2">Anatomy of an agent</a><span class="tag">Lab finished</span></li>
                <li class="active"><a href="#ch4">Context engineering</a><span class="tag">In progress</span></li>
              </ol>
            </details>
          </nav>

          <main data-layout-allow-overflow>
            <article data-layout-allow-overflow>
              <p class="tag" style="margin:0;font-size:0.8rem;">Part 1: Basics</p>
              <h1 style="font-size:1.8rem;margin:2px 0 8px;">Context engineering</h1>

              <section class="block labframe" data-layout-allow-overflow style="padding:10px 14px;">
                <h3 style="margin:0 0 4px;font-size:1.05rem;">Lab: Context budget board</h3>

                <fieldset class="q" style="margin-bottom:6px;padding:6px 10px;">
                  <legend style="font-size:0.82rem;">Your numbers, in tokens</legend>
                  <div class="row" style="gap:6px;font-size:0.8rem;">
                    <label>System <input type="number" id="inp-sys" style="width:4.2rem;padding:2px 4px;"></label>
                    <label>Tools <input type="number" id="inp-tools" style="width:4.2rem;padding:2px 4px;"></label>
                    <label>History <input type="number" id="inp-history" style="width:4.2rem;padding:2px 4px;"></label>
                    <label>Retrieved <input type="number" id="inp-retrieved" style="width:4.2rem;padding:2px 4px;"></label>
                    <label>Tool out <input type="number" id="inp-toolout" style="width:4.2rem;padding:2px 4px;"></label>
                    <label>Window <input type="number" id="inp-window" style="width:4.6rem;padding:2px 4px;"></label>
                  </div>
                </fieldset>

                <div class="row" style="margin-bottom:6px;align-items:center;">
                  <button class="btn small" id="btn-fill-numbers">Fill example numbers</button>
                  <label style="font-size:0.84rem;display:flex;align-items:center;margin-left:8px;"><input type="radio" name="strat" id="radio-trim" checked> Trim history</label>
                  <button class="btn primary small" id="btn-show-effect" style="margin-left:auto;">Show the effect</button>
                  <span id="ch4-fill-status" style="display:none;"></span>
                </div>

                <!-- Effect output -->
                <div id="ch4-effect-out" data-layout-allow-overflow style="display:none;background:var(--bg);border:1.5px solid var(--line);border-radius:6px;padding:6px 10px;margin:4px 0;">
                  <p style="font-weight:700;margin:0 0 2px;font-size:0.82rem;">Before: 16000 tokens &bull; After: 11500 tokens &bull; Window: 12000</p>
                  <div class="bar" style="height:8px;margin:3px 0;"><span style="width:96%;background:var(--sky);"></span></div>
                  <p class="reveal ok" style="margin:2px 0;font-size:0.8rem;padding:2px 6px;">It fits, with 500 tokens to spare.</p>
                </div>

                <!-- Loop Run Game -->
                <div id="ch4-game" data-layout-allow-overflow style="display:none;border-top:1px solid var(--line);padding-top:4px;margin-top:4px;">
                  <div class="row" style="align-items:center;margin-bottom:4px;">
                    <h4 style="margin:0;font-size:0.9rem;">Loop Run:</h4>
                    <button class="btn small" id="btn-game-keep" style="font-size:0.75rem;padding:2px 6px;margin-left:6px;">Keep as is</button>
                    <button class="btn small" id="btn-game-offload" style="font-size:0.75rem;padding:2px 6px;">Offload output</button>
                  </div>
                  <ul id="game-rounds-list" style="padding-left:14px;font-size:0.8rem;margin:0;line-height:1.3;"></ul>
                </div>
              </section>
            </article>
          </main>
        </div>
      </div>

      <!-- VIEW 5: CHAPTER 15 (Scene 5) -->
      <div class="view-scene" id="view-ch15" data-layout-allow-overflow>
        <div class="layout" data-layout-allow-overflow>
          <nav class="wire">
            <details open>
              <summary>Progress map</summary>
              <ol>
                <li class="done"><a href="#ch1">What is an agent?</a><span class="tag">Lab finished</span></li>
                <li class="done"><a href="#ch4">Context engineering</a><span class="tag">Lab finished</span></li>
                <li class="active"><a href="#ch15">Design studio</a><span class="tag">In progress</span></li>
              </ol>
            </details>
          </nav>

          <main data-layout-allow-overflow>
            <article data-layout-allow-overflow>
              <p class="tag" style="margin:0;font-size:0.8rem;">Part 4: Capstone</p>
              <h1 style="font-size:1.8rem;margin:2px 0 6px;">Design studio</h1>

              <section class="block labframe" data-layout-allow-overflow style="padding:10px 14px;">
                <h3 style="margin:0 0 4px;font-size:1.05rem;">Lab: Architecture canvas</h3>

                <div id="ch15-reqs" style="font-size:0.8rem;margin:0 0 6px;padding:3px 8px;background:var(--bg);border-radius:4px;">
                  <b>Support agent brief:</b> Looks up orders &bull; Answers from help pages &bull; Requests refunds with human approval.
                </div>

                <!-- Canvas controls -->
                <div class="row" style="gap:6px;margin-bottom:6px;font-size:0.84rem;align-items:center;">
                  <label style="display:flex;align-items:center;gap:4px;">Component:
                    <select id="sel-comp-type" style="padding:2px 4px;min-height:28px;">
                      <option value="model">Model</option>
                      <option value="toolWrite">Write tool</option>
                    </select>
                  </label>
                  <button class="btn small" id="btn-add-comp">Add component</button>
                  <button class="btn small" id="btn-connect" style="margin-left:6px;">Connect</button>
                  <button class="btn primary small" id="btn-check-design" style="margin-left:auto;">Check my design</button>
                </div>

                <!-- Canvas Diagram SVG -->
                <div style="background:var(--bg);border:1.5px solid var(--line);border-radius:6px;padding:4px;margin-bottom:6px;">
                  <svg id="canvas-svg" viewBox="0 0 640 80" style="width:100%;height:65px;" role="img">
                    <defs>
                      <marker id="ah" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                        <path d="M0 0 L10 5 L0 10 z" fill="var(--acc)"/>
                      </marker>
                    </defs>
                    <line id="canvas-edge" x1="140" y1="35" x2="218" y2="35" stroke="var(--acc)" stroke-width="2.5" marker-end="url(#ah)" style="display:none;"/>
                    <g id="node-model" style="display:none;">
                      <rect x="20" y="15" width="120" height="38" rx="6" fill="#76C0EC" stroke="#1B2542" stroke-width="2"/>
                      <text x="80" y="39" text-anchor="middle" font-size="12" font-weight="600" fill="#1B2542" font-family="inherit">Model 1</text>
                    </g>
                    <g id="node-write" style="display:none;">
                      <rect x="220" y="15" width="120" height="38" rx="6" fill="#FF95A5" stroke="#1B2542" stroke-width="2"/>
                      <text x="280" y="39" text-anchor="middle" font-size="12" font-weight="600" fill="#1B2542" font-family="inherit">Write tool 2</text>
                    </g>
                  </svg>
                </div>

                <!-- Lint findings -->
                <div id="lint-output" data-layout-allow-overflow style="display:none;">
                  <div id="spotlight-lint" style="position:relative;margin:2px 0;">
                    <p class="reveal bad" id="lint-msg-gate" style="margin:0;font-size:0.82rem;padding:4px 8px;line-height:1.3;">Fix this. Every write tool sits behind an approval gate. A write tool that nobody approves can act on a mistake straight away.</p>
                    <div class="spotlight-box" id="lint-spotlight" data-layout-allow-overflow style="inset:-3px;"></div>
                  </div>
                </div>
              </section>
            </article>
          </main>
        </div>
      </div>

      <!-- VIEW 6: JOURNAL (Scene 6) -->
      <div class="view-scene" id="view-journal" data-layout-allow-overflow>
        <div class="layout" data-layout-allow-overflow>
          <nav class="wire">
            <details open>
              <summary>Progress map</summary>
              <ol>
                <li class="done"><a href="#ch1">What is an agent?</a><span class="tag">Lab finished</span></li>
                <li class="done"><a href="#ch2">Anatomy of an agent</a><span class="tag">Lab finished</span></li>
                <li class="done"><a href="#ch4">Context engineering</a><span class="tag">Lab finished</span></li>
                <li class="done"><a href="#ch15">Design studio</a><span class="tag">Lab finished</span></li>
              </ol>
              <p style="margin:8px 0 2px;font-size:0.85rem;"><b>Rank: Architect</b><br><span class="tag">Labs finished: 4 of 16</span></p>
            </details>
          </nav>

          <main data-layout-allow-overflow>
            <section class="block" data-layout-allow-overflow>
              <h1 style="font-size:1.8rem;margin:0 0 4px;">Design Journal</h1>
              <p style="font-size:0.88rem;margin:0 0 6px;color:var(--soft);">Every decision you make in a lab is saved here and becomes your design document.</p>

              <pre class="ctx" id="journal-pre" tabindex="0" data-layout-allow-overflow style="height:210px;font-size:0.82rem;padding:8px 10px;margin:4px 0 8px;line-height:1.4;overflow:hidden;"># My design journal

## What is an agent?
- Translate one paragraph into French. Decision: Single prompt
- A support helper reads the ticket... Decision: Agent

## Anatomy of an agent
- Agent loop: predicted 4 of 4 steps. Safe stop rule chosen.

## Context engineering
- Context budget: predicted History as largest part. Chose trim history.

## Design studio
- Design studio: Support agent. Components: Model 1, Write tool 2.
- Identified lint finding: write tool requires approval gate.</pre>

              <div class="row" style="margin-top:6px;align-items:center;">
                <button class="btn primary small" id="btn-export-journal">Export journal</button>
                <button class="btn small">Print journal</button>
                <span id="export-toast" style="font-size:0.85rem;font-weight:700;color:var(--ink);display:none;margin-left:8px;">&check; design-journal.md downloaded</span>
              </div>
            </section>
          </main>
        </div>
      </div>

      <!-- VIEW 7: GLOSSARY (Scene 7) -->
      <div class="view-scene" id="view-glossary" data-layout-allow-overflow>
        <div class="layout" data-layout-allow-overflow>
          <nav class="wire">
            <details open>
              <summary>Quick links</summary>
              <ol>
                <li><a href="#home">Home</a></li>
                <li><a href="#ch1">Chapter 1</a></li>
                <li><a href="#ch15">Chapter 15</a></li>
              </ol>
            </details>
          </nav>

          <main data-layout-allow-overflow>
            <section class="block" id="glossary-section" data-layout-allow-overflow>
              <h2 style="font-size:1.8rem;margin:0 0 6px;">Glossary</h2>
              <label for="gsearch-input" style="display:block;margin-bottom:8px;font-weight:600;font-size:0.88rem;">Search the glossary:
                <input type="search" id="gsearch-input" style="margin-left:8px;width:220px;padding:3px 8px;" value="Agent">
              </label>

              <dl style="margin-top:8px;font-size:0.88rem;line-height:1.35;">
                <dt style="font-size:1.05rem;color:var(--acc);margin-top:4px;font-weight:700;">Agent</dt>
                <dd style="margin:2px 0 6px 0;">A system where the model chooses its own next steps and tools, in a loop.</dd>

                <dt style="font-size:1.05rem;color:var(--acc);margin-top:4px;font-weight:700;">A2A</dt>
                <dd style="margin:2px 0 6px 0;">Agent2Agent protocol. An open standard for communication between independent agents.</dd>

                <dt style="font-size:1.05rem;color:var(--acc);margin-top:4px;font-weight:700;">Approval gate</dt>
                <dd style="margin:2px 0 6px 0;">A step where a person must say yes before a costly or hard to undo action runs.</dd>

                <dt style="font-size:1.05rem;color:var(--acc);margin-top:4px;font-weight:700;">Context window</dt>
                <dd style="margin:2px 0 6px 0;">The limit on how much text the model can see on one turn.</dd>
              </dl>
            </section>
          </main>
        </div>
      </div>

    </div>

    <!-- Mouse Cursor -->
    <div id="cursor" data-layout-allow-overlap>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 3L18 13L11.5 14L8.5 21L5.5 19.5L8.5 13L4 3Z" fill="#1B2542" stroke="#FFF6DC" stroke-width="1.8" stroke-linejoin="round"/>
      </svg>
      <div id="cursor-ripple"></div>
    </div>

    <!-- Subtitle / Caption Pill Overlay -->
    <div id="caption-container" data-layout-allow-occlusion data-layout-allow-overlap>
      <div id="caption-pill" data-layout-allow-occlusion data-layout-allow-overlap>
        <div class="caption-dot"></div>
        <span id="caption-text">This is the Agentic System Design Playbook. One file, works offline.</span>
      </div>
    </div>

    <!-- AUDIO TRACKS: Voice-Over -->
    <audio id="vo-1" data-start="0.1" data-duration="4.65" data-track-index="1" data-volume="1.0" src="assets/vo_1.mp3"></audio>
    <audio id="vo-2" data-start="5.1" data-duration="2.35" data-track-index="1" data-volume="1.0" src="assets/vo_2.mp3"></audio>
    <audio id="vo-3" data-start="12.1" data-duration="1.90" data-track-index="1" data-volume="1.0" src="assets/vo_3.mp3"></audio>
    <audio id="vo-4" data-start="20.1" data-duration="2.36" data-track-index="1" data-volume="1.0" src="assets/vo_4.mp3"></audio>
    <audio id="vo-5" data-start="28.1" data-duration="2.70" data-track-index="1" data-volume="1.0" src="assets/vo_5.mp3"></audio>
    <audio id="vo-6" data-start="36.1" data-duration="2.42" data-track-index="1" data-volume="1.0" src="assets/vo_6.mp3"></audio>
    <audio id="vo-7" data-start="43.1" data-duration="2.48" data-track-index="1" data-volume="1.0" src="assets/vo_7.mp3"></audio>
    <audio id="vo-8" data-start="48.1" data-duration="1.85" data-track-index="1" data-volume="1.0" src="assets/vo_8.mp3"></audio>

    <!-- AUDIO TRACKS: UI Click SFX -->
    <audio id="sfx-click-1" data-start="5.2" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-2" data-start="7.2" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-3" data-start="8.6" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-4" data-start="10.0" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-5" data-start="12.3" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-6" data-start="14.0" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-7" data-start="15.8" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-8" data-start="17.4" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-9" data-start="19.0" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-10" data-start="20.3" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-11" data-start="21.6" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-12" data-start="22.8" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-13" data-start="24.0" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-14" data-start="25.5" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-15" data-start="26.8" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-16" data-start="28.3" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-17" data-start="30.1" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-18" data-start="31.0" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-19" data-start="31.9" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-20" data-start="32.9" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-21" data-start="36.5" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-22" data-start="39.5" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-23" data-start="43.8" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-24" data-start="45.3" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-25" data-start="48.2" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
  </div>

  <script>
    window.__timelines = window.__timelines || {};
    const tl = gsap.timeline({ paused: true });

    // Initial resting positions
    tl.set("#cursor", { x: 920, y: 460 }, 0);
    tl.set("#cursor-ripple", { opacity: 0, scale: 0.4 }, 0);
    tl.set("#caption-pill", { opacity: 0, y: 12 }, 0);

    // Natural curved mouse movement + tactile click feedback
    function addClick(time, targetX, targetY, moveDuration = 0.6) {
      tl.to("#cursor", { x: targetX, y: targetY, duration: moveDuration, ease: "power2.out" }, time - moveDuration);
      tl.to("#cursor", { scale: 0.86, duration: 0.08, ease: "power1.in" }, time);
      tl.to("#cursor", { scale: 1.0, duration: 0.14, ease: "back.out(2)" }, time + 0.08);
      tl.set("#cursor-ripple", { opacity: 0.85, scale: 0.4 }, time);
      tl.to("#cursor-ripple", { opacity: 0, scale: 2.2, duration: 0.35, ease: "power2.out" }, time + 0.02);
    }

    // Cinematic Cross-Dissolve Scene Transition
    function transitionScene(outgoingId, incomingId, time, duration = 0.55) {
      // Outgoing scene smoothly fades and floats up slightly
      tl.to(outgoingId, { opacity: 0, y: -14, scale: 0.99, duration: duration * 0.75, ease: "power2.inOut" }, time);
      tl.set(outgoingId, { display: "none" }, time + duration * 0.75);

      // Incoming scene softly floats in
      tl.set(incomingId, { display: "block" }, time + duration * 0.35);
      tl.fromTo(incomingId,
        { opacity: 0, y: 14, scale: 0.99 },
        { opacity: 1, y: 0, scale: 1.0, duration: duration, ease: "power3.out" },
        time + duration * 0.4
      );
    }

    // Caption transition with smooth fade and drift
    function setCaption(startTime, text, endTime) {
      tl.set("#caption-text", { textContent: text }, startTime);
      tl.to("#caption-pill", { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }, startTime);
      if (endTime) {
        tl.to("#caption-pill", { opacity: 0, y: -6, duration: 0.28, ease: "power2.in" }, endTime);
      }
    }

    // ========================================================
    // SCENE 1: Home page (0.0s - 5.0s)
    // "This is the Agentic System Design Playbook. One file, works offline."
    // ========================================================
    tl.set("#view-home", { display: "block", opacity: 1 }, 0);
    setCaption(0.2, "This is the Agentic System Design Playbook. One file, works offline.", 4.7);

    // Continuous smooth loop dot animation along think-act-observe-stop
    tl.to("#loop-dot", { x: 180, duration: 1.2, ease: "power1.inOut" }, 0.2);
    tl.to("#loop-dot", { y: 140, duration: 1.2, ease: "power1.inOut" }, 1.4);
    tl.to("#loop-dot", { x: 0, duration: 1.2, ease: "power1.inOut" }, 2.6);
    tl.to("#loop-dot", { y: 0, duration: 1.2, ease: "power1.inOut" }, 3.8);

    // Natural cursor glide toward Start Chapter 1
    tl.to("#cursor", { x: 580, y: 220, duration: 1.5, ease: "power2.out" }, 1.0);
    tl.to("#cursor", { x: 380, y: 280, duration: 1.2, ease: "power2.inOut" }, 3.2);

    // ========================================================
    // SCENE 2: Chapter 1 — What is an agent? (5.0s - 12.0s)
    // "You predict first, then see the reason."
    // ========================================================
    addClick(5.2, 380, 280); // Click "Start Chapter 1"
    tl.to("#btn-start-ch1", { scale: 0.95, duration: 0.08, yoyo: true, repeat: 1 }, 5.2);

    // Cinematic crossfade into Chapter 1
    transitionScene("#view-home", "#view-ch1", 5.25);
    setCaption(5.2, "You predict first, then see the reason.", 11.7);

    // Place System 1 (Translate paragraph) -> Single prompt
    addClick(7.2, 400, 310); // Click "Single prompt" button
    tl.to("#btn-s1-prompt", { scale: 0.92, duration: 0.08, yoyo: true, repeat: 1 }, 7.2);
    tl.to("#card-s1", { opacity: 0.4, scale: 0.98, duration: 0.25 }, 7.2);
    tl.set("#lane-card-s1", { display: "block" }, 7.25);
    tl.fromTo("#lane-card-s1", 
      { opacity: 0, y: 10, scale: 0.94 }, 
      { opacity: 1, y: 0, scale: 1.0, duration: 0.45, ease: "back.out(1.5)" }, 
      7.25
    );
    tl.set("#ch1-status", { textContent: "Placed 1 of 8. Place systems to check." }, 7.3);

    // Place System 2 (Support helper ticket) -> Agent
    addClick(8.6, 680, 310); // Click "Agent" button on Card 2
    tl.to("#btn-s3-agent", { scale: 0.92, duration: 0.08, yoyo: true, repeat: 1 }, 8.6);
    tl.to("#card-s3", { opacity: 0.4, scale: 0.98, duration: 0.25 }, 8.6);
    tl.set("#lane-card-s3", { display: "block" }, 8.65);
    tl.fromTo("#lane-card-s3", 
      { opacity: 0, y: 10, scale: 0.94 }, 
      { opacity: 1, y: 0, scale: 1.0, duration: 0.45, ease: "back.out(1.5)" }, 
      8.65
    );
    tl.set("#ch1-status", { textContent: "Placed 2 of 8. Place systems to check." }, 8.7);

    // Click "Check my sorting"
    addClick(10.0, 370, 485);
    tl.to("#btn-ch1-check", { scale: 0.94, duration: 0.08, yoyo: true, repeat: 1 }, 10.0);
    tl.set("#reveal-s1, #reveal-s3", { display: "block" }, 10.1);
    tl.fromTo(["#reveal-s1", "#reveal-s3"],
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.1, ease: "power3.out" },
      10.15
    );
    tl.set("#ch1-status", { textContent: "You sorted 2 of 8 correctly. Read each reason below." }, 10.15);

    // ========================================================
    // SCENE 3: Chapter 2 — Agent loop & Context growth (12.0s - 20.0s)
    // "See the loop and the context grow."
    // ========================================================
    addClick(12.3, 980, 110); // Click "Next chapter" button
    tl.to("#ch1-btn-next", { scale: 0.94, duration: 0.08, yoyo: true, repeat: 1 }, 12.3);

    // Cinematic crossfade into Chapter 2
    transitionScene("#view-ch1", "#view-ch2", 12.35);
    setCaption(12.2, "See the loop and the context grow.", 19.7);

    // Step 1: Click get_order
    addClick(14.0, 360, 435);
    tl.to("#btn-tool-order", { scale: 0.93, duration: 0.08, yoyo: true, repeat: 1 }, 14.0);
    tl.to("#ch2-bar-fill", { width: "38%", duration: 0.65, ease: "power3.out" }, 14.05);
    tl.set("#ch2-meter-label", { textContent: "Context so far: about 86 tokens." }, 14.1);
    tl.set("#ch2-ctx", { textContent: "You are a support agent. Use tools. Stop when the customer question is answered.\\nOrder 1042 is late. Check it and fix it if the policy allows.\\nThink: I need the order record first.\\nAct: get_order(id=1042)\\nObserve: status=shipped, promised=Oct 1, delivered=none" }, 14.1);
    tl.set("#ch2-reveal", { display: "block", textContent: "Correct. The agent cannot judge lateness without the order." }, 14.1);

    // Step 2: Click get_policy
    addClick(15.8, 460, 435);
    tl.to("#btn-tool-policy", { scale: 0.93, duration: 0.08, yoyo: true, repeat: 1 }, 15.8);
    tl.to("#ch2-bar-fill", { width: "62%", duration: 0.65, ease: "power3.out" }, 15.85);
    tl.set("#ch2-meter-label", { textContent: "Context so far: about 142 tokens." }, 15.9);
    tl.set("#ch2-ctx", { textContent: "You are a support agent. Use tools. Stop when the customer question is answered.\\nOrder 1042 is late. Check it and fix it if the policy allows.\\nThink: I need the order record first.\\nAct: get_order(id=1042)\\nObserve: status=shipped, promised=Oct 1, delivered=none\\nThink: The order looks late. I need the refund policy.\\nAct: get_policy(topic=late delivery)\\nObserve: Refund shipping fee if delivery > 3 days late." }, 15.9);
    tl.set("#ch2-reveal", { textContent: "Correct. Refunding before reading the policy would be a guess." }, 15.9);

    // Step 3: Click request_refund
    addClick(17.4, 580, 435);
    tl.to("#btn-tool-refund", { scale: 0.93, duration: 0.08, yoyo: true, repeat: 1 }, 17.4);
    tl.to("#ch2-bar-fill", { width: "85%", duration: 0.65, ease: "power3.out" }, 17.45);
    tl.set("#ch2-meter-label", { textContent: "Context so far: about 195 tokens." }, 17.5);
    tl.set("#ch2-ctx", { textContent: "You are a support agent. Use tools. Stop when the customer question is answered.\\nOrder 1042 is late. Check it and fix it if the policy allows.\\n...\\nThink: Today is Oct 6. Promised Oct 1 means 5 days late. The policy applies.\\nAct: request_refund(order=1042, item=shipping fee)\\nObserve: queued: a human must approve this refund" }, 17.5);

    // Step 4: Click finish
    addClick(19.0, 680, 435);
    tl.to("#btn-tool-finish", { scale: 0.93, duration: 0.08, yoyo: true, repeat: 1 }, 19.0);
    tl.to("#ch2-bar-fill", { width: "100%", duration: 0.55, ease: "power3.out" }, 19.05);
    tl.set("#ch2-meter-label", { textContent: "Context so far: about 228 tokens (Full loop)." }, 19.1);

    // ========================================================
    // SCENE 4: Chapter 4 — Context engineering (20.0s - 28.0s)
    // "Use your own numbers. Survive the loop."
    // ========================================================
    addClick(20.3, 110, 210); // Click "Context engineering" in sidebar
    transitionScene("#view-ch2", "#view-ch4", 20.35);
    setCaption(20.2, "Use your own numbers. Survive the loop.", 27.7);

    // Click "Fill example numbers"
    addClick(21.6, 390, 310);
    tl.to("#btn-fill-numbers", { scale: 0.93, duration: 0.08, yoyo: true, repeat: 1 }, 21.6);
    tl.set("#inp-sys", { value: 1000 }, 21.7);
    tl.set("#inp-tools", { value: 2000 }, 21.7);
    tl.set("#inp-history", { value: 6000 }, 21.7);
    tl.set("#inp-retrieved", { value: 3000 }, 21.7);
    tl.set("#inp-toolout", { value: 4000 }, 21.7);
    tl.set("#inp-window", { value: 12000 }, 21.7);

    // Pick a way to make room: Click "Trim history"
    addClick(22.8, 510, 310);
    tl.set("#radio-trim", { checked: true }, 22.8);

    // Click "Show the effect"
    addClick(24.0, 710, 310);
    tl.to("#btn-show-effect", { scale: 0.94, duration: 0.08, yoyo: true, repeat: 1 }, 24.0);
    tl.set("#ch4-effect-out, #ch4-game", { display: "block" }, 24.05);
    tl.fromTo(["#ch4-effect-out", "#ch4-game"],
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "power3.out" },
      24.1
    );

    // Play Loop Run Round 1: Keep as is
    addClick(25.5, 410, 425);
    tl.to("#btn-game-keep", { scale: 0.92, duration: 0.08, yoyo: true, repeat: 1 }, 25.5);
    tl.call(() => {
      const list = document.getElementById("game-rounds-list");
      if (list && list.children.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Round 1 (Keep as is): 15,500 tokens. Fits within limits.";
        list.appendChild(li);
      }
    }, [], 25.6);

    // Play Loop Run Round 2: Offload output
    addClick(26.8, 510, 425);
    tl.to("#btn-game-offload", { scale: 0.92, duration: 0.08, yoyo: true, repeat: 1 }, 26.8);
    tl.call(() => {
      const list = document.getElementById("game-rounds-list");
      if (list && list.children.length === 1) {
        const li = document.createElement("li");
        li.textContent = "Round 2 (Offload output): 11,600 tokens. Fits comfortably.";
        list.appendChild(li);
      }
    }, [], 26.9);

    // ========================================================
    // SCENE 5: Chapter 15 — Design studio (28.0s - 36.0s)
    // "Draw your design. The lint shows what is missing."
    // ========================================================
    addClick(28.3, 110, 240); // Click Chapter 15 in sidebar
    transitionScene("#view-ch4", "#view-ch15", 28.35);
    setCaption(28.2, "Draw your design. The lint shows what is missing.", 35.7);

    // Add Component: Model
    addClick(30.1, 490, 260); // Click "Add component"
    tl.to("#btn-add-comp", { scale: 0.93, duration: 0.08, yoyo: true, repeat: 1 }, 30.1);
    tl.set("#node-model", { display: "inline" }, 30.15);
    tl.fromTo("#node-model",
      { opacity: 0, scale: 0.8, transformOrigin: "80px 35px" },
      { opacity: 1, scale: 1.0, duration: 0.35, ease: "back.out(2)" },
      30.15
    );

    // Change dropdown to Write tool & Add component
    tl.set("#sel-comp-type", { value: "toolWrite" }, 30.8);
    addClick(31.0, 490, 260);
    tl.to("#btn-add-comp", { scale: 0.93, duration: 0.08, yoyo: true, repeat: 1 }, 31.0);
    tl.set("#node-write", { display: "inline" }, 31.05);
    tl.fromTo("#node-write",
      { opacity: 0, scale: 0.8, transformOrigin: "280px 35px" },
      { opacity: 1, scale: 1.0, duration: 0.35, ease: "back.out(2)" },
      31.05
    );

    // Connect Model 1 to Write tool 2
    addClick(31.9, 580, 260); // Click "Connect"
    tl.to("#btn-connect", { scale: 0.93, duration: 0.08, yoyo: true, repeat: 1 }, 31.9);
    tl.set("#canvas-edge", { display: "inline" }, 31.95);
    tl.fromTo("#canvas-edge", { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" }, 31.95);

    // Click "Check my design"
    addClick(32.9, 720, 260);
    tl.to("#btn-check-design", { scale: 0.94, duration: 0.08, yoyo: true, repeat: 1 }, 32.9);
    tl.set("#lint-output", { display: "block" }, 33.0);
    tl.fromTo("#lint-output",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
      33.05
    );

    // Smooth cursor glide to point at lint message & spotlight reveal
    tl.to("#cursor", { x: 520, y: 440, duration: 0.75, ease: "power2.out" }, 33.8);
    tl.fromTo("#lint-spotlight",
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1.0, duration: 0.45, ease: "back.out(1.5)" },
      34.2
    );

    // ========================================================
    // SCENE 6: Journal page — Export journal (36.0s - 43.0s)
    // "Every decision becomes your design document."
    // ========================================================
    addClick(36.5, 850, 26); // Click "Journal" button in top nav
    tl.to("#nav-btn-journal", { scale: 0.93, duration: 0.08, yoyo: true, repeat: 1 }, 36.5);

    transitionScene("#view-ch15", "#view-journal", 36.55);
    setCaption(36.2, "Every decision becomes your design document.", 42.7);

    // Click "Export journal"
    addClick(39.5, 380, 480);
    tl.to("#btn-export-journal", { scale: 0.94, duration: 0.08, yoyo: true, repeat: 1 }, 39.5);
    tl.set("#export-toast", { display: "inline-block" }, 39.6);
    tl.fromTo("#export-toast",
      { opacity: 0, x: -14 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" },
      39.6
    );

    // ========================================================
    // SCENE 7: Dark mode & Glossary (43.0s - 48.0s)
    // "Light and dark, with a searchable glossary."
    // ========================================================
    addClick(43.8, 930, 26); // Click "Dark mode" in top nav
    tl.to("#tbtn", { scale: 0.93, duration: 0.08, yoyo: true, repeat: 1 }, 43.8);

    // Smooth CSS Variable color-morph transition into Dark Mode
    tl.to(["#root", "#browser-chrome", "header.top"], {
      "--bg": "#121A2E",
      "--panel": "#1B2542",
      "--ink": "#FFF6DC",
      "--soft": "#D9D2BC",
      "--acc": "#76C0EC",
      "--line": "#76C0EC",
      "--chrome-bg": "#0E1628",
      "--chrome-border": "#76C0EC",
      duration: 0.65,
      ease: "power2.inOut"
    }, 43.8);
    tl.set("#tbtn", { textContent: "Light mode" }, 43.9);

    setCaption(43.2, "Light and dark, with a searchable glossary.", 47.7);

    // Click "Glossary" in top nav
    addClick(45.3, 680, 26);
    tl.to("#nav-btn-glossary", { scale: 0.93, duration: 0.08, yoyo: true, repeat: 1 }, 45.3);

    transitionScene("#view-journal", "#view-glossary", 45.35);

    // Cursor hovers over glossary search and Agent definition
    tl.to("#cursor", { x: 580, y: 220, duration: 0.85, ease: "power2.out" }, 46.1);

    // ========================================================
    // SCENE 8: Back to Home Page in Dark Mode (48.0s - 50.0s)
    // "Agentic System Design Playbook."
    // ========================================================
    addClick(48.2, 160, 26); // Click brand link in nav
    tl.to("#brand-link", { scale: 0.96, duration: 0.08, yoyo: true, repeat: 1 }, 48.2);

    transitionScene("#view-glossary", "#view-home", 48.25);
    setCaption(48.1, "Agentic System Design Playbook.", 49.9);

    // Smooth resting state on home page until 50.0s
    tl.to("#cursor", { x: 640, y: 340, duration: 1.0, ease: "power2.out" }, 48.6);

    // Expose timeline to HyperFrames
    window.__timelines["main"] = tl;
    tl.seek(0);
  </script>
</body>
</html>
"""

html = template.replace('/* __BASE_STYLE__ */', base_style)

with open('playbook-video/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated playbook-video/index.html successfully! Size:", len(html))
