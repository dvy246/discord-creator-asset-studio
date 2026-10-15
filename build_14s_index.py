import os

with open('playbook.html', 'r', encoding='utf-8') as f:
    playbook_src = f.read()

style_start = playbook_src.find('<style>') + len('<style>')
style_end = playbook_src.find('</style>')
base_style = playbook_src[style_start:style_end]

base_style = base_style.replace('transition:transform .2s', '/* transition:none */')

html_content = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=1280, height=720">
  <title>Agentic System Design Playbook (14s Intro)</title>
  <script src="assets/gsap.min.js"></script>
  <style>
{base_style}

    /* Global reset & layout constraints */
    html, body {{
      margin: 0;
      padding: 0;
      width: 1280px;
      height: 720px;
      overflow: hidden;
      background: #0E1628;
      user-select: none;
    }}

    #root {{
      width: 1280px;
      height: 720px;
      position: relative;
      overflow: hidden;
      background: var(--bg);
      --chrome-bg: #EAE1C8;
      --chrome-border: #425B9A;
    }}

    /* Browser Chrome Header (42px) */
    #browser-chrome {{
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
    }}

    .window-dots {{
      display: flex;
      gap: 8px;
      align-items: center;
    }}
    .dot {{
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }}
    .dot.red {{ background: #FF5F56; border: 1px solid #E0443E; }}
    .dot.yellow {{ background: #FFBD2E; border: 1px solid #DEA123; }}
    .dot.green {{ background: #27C93F; border: 1px solid #1AAB29; }}

    .nav-arrows {{
      display: flex;
      gap: 10px;
      color: var(--soft);
      font-size: 14px;
      font-weight: 700;
      margin-left: 6px;
    }}

    .omnibox {{
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
    }}
    .lock-icon {{
      width: 12px;
      height: 12px;
      fill: var(--acc);
    }}
    .omnibox .url {{
      font-weight: 600;
      letter-spacing: 0.01em;
    }}
    .omnibox .badge-offline {{
      margin-left: auto;
      font-size: 11px;
      background: var(--sky);
      color: #1B2542;
      padding: 1px 6px;
      border-radius: 4px;
      font-weight: 700;
    }}

    .window-specs {{
      font-size: 11px;
      color: var(--soft);
      font-family: var(--font-h);
      font-weight: 600;
      letter-spacing: 0.05em;
    }}

    /* Webpage Viewport */
    #browser-viewport {{
      position: absolute;
      top: 42px;
      left: 0;
      width: 1280px;
      height: 678px;
      overflow: hidden;
      background: var(--bg);
      background-image: linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px);
      background-size: 32px 32px;
    }}

    /* Persistent Header strictly at top of viewport (52px) */
    header.top {{
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
    }}
    header.top .brand {{
      font-weight: 700;
      font-size: 1.05rem;
      letter-spacing: -0.01em;
      color: var(--ink);
    }}

    /* Scene views start strictly below header at top: 52px */
    .view-scene {{
      position: absolute;
      top: 52px;
      left: 0;
      width: 1280px;
      height: 626px;
      box-sizing: border-box;
      overflow: hidden;
      display: none;
      opacity: 0;
    }}
    .view-scene.active {{
      display: block;
      opacity: 1;
    }}

    .layout {{
      display: grid;
      grid-template-columns: 210px 1fr;
      gap: 28px;
      padding: 18px 28px 84px 28px;
      box-sizing: border-box;
      max-width: 1240px;
      margin: 0 auto;
      height: 100%;
    }}

    /* Sidebar Progress Map */
    nav.wire {{
      margin: 0;
      padding: 0;
      border-right: 1.5px solid var(--line);
      padding-right: 18px;
    }}
    nav.wire summary {{
      font-weight: 700;
      cursor: pointer;
      font-size: 0.95rem;
      color: var(--ink);
      margin-bottom: 8px;
    }}
    nav.wire ol {{
      list-style: none;
      padding: 0;
      margin: 0;
    }}
    nav.wire li {{
      padding: 4px 0 4px 14px;
      font-size: 0.85rem;
      border-left: 2px solid var(--line);
      position: relative;
      margin-bottom: 4px;
    }}
    nav.wire li.active {{
      border-left-color: var(--acc);
      font-weight: 700;
    }}
    nav.wire li.done {{
      border-left-color: var(--sky);
    }}
    nav.wire li a {{
      color: var(--ink);
      text-decoration: none;
      display: block;
    }}
    nav.wire .tag {{
      font-size: 0.72rem;
      opacity: 0.8;
      display: block;
    }}

    .labframe {{
      padding: 12px 16px;
      margin-bottom: 10px;
      background: var(--panel);
      border: 2px solid var(--line);
      border-radius: 8px;
    }}
    .hero {{
      margin-bottom: 16px;
    }}

    svg.loop {{
      width: 320px;
      height: 220px;
      background: var(--panel);
      border: 2px solid var(--line);
      border-radius: 8px;
      padding: 8px;
    }}
    .loop text {{
      font: 700 15px var(--font-h) !important;
      fill: #1B2542 !important;
    }}

    /* Custom animated cursor */
    #cursor {{
      position: fixed;
      top: 0;
      left: 0;
      width: 28px;
      height: 28px;
      z-index: 25000;
      pointer-events: none;
      filter: drop-shadow(0 3px 6px rgba(0,0,0,0.35));
    }}
    #cursor-ripple {{
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
    }}

    /* Subtitle pill overlay - safe bottom positioning */
    #caption-container {{
      position: fixed;
      bottom: 14px;
      left: 0;
      width: 1280px;
      display: flex;
      justify-content: center;
      z-index: 20000;
      pointer-events: none;
    }}
    #caption-pill {{
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
    }}
    #caption-pill .caption-dot {{
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--pink);
      box-shadow: 0 0 8px var(--pink);
    }}

    .spotlight-box {{
      position: absolute;
      border: 2.5px solid var(--pink);
      border-radius: 8px;
      background: rgba(255, 149, 165, 0.14);
      pointer-events: none;
      opacity: 0;
      z-index: 5000;
      box-shadow: 0 0 16px rgba(255, 149, 165, 0.5);
    }}
  </style>
</head>
<body>
  <div id="root"
       data-composition-id="main"
       data-start="0"
       data-duration="14"
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

      <!-- SCENE 1: HOME PAGE -->
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
                  <circle class="n" cx="90" cy="60" r="34" fill="#76C0EC"/>
                  <text x="90" y="65" text-anchor="middle">Think</text>
                  <circle class="n p" cx="270" cy="60" r="34" fill="#FF95A5"/>
                  <text x="270" y="65" text-anchor="middle">Act</text>
                  <circle class="n" cx="270" cy="200" r="34" fill="#76C0EC"/>
                  <text x="270" y="205" text-anchor="middle">Observe</text>
                  <circle class="n p" cx="90" cy="200" r="34" fill="#FF95A5"/>
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
                <li>Watch your Design Journal grow into an exported design document.</li>
              </ol>
              <p style="font-size:0.85rem;margin:4px 0 0;color:var(--soft);">16 chapters, 16 labs. Works offline. Your progress stays in this browser.</p>
            </section>
          </main>
        </div>
      </div>

      <!-- SCENE 2: CHAPTER 1 -->
      <div class="view-scene" id="view-ch1" data-layout-allow-overflow>
        <div class="layout" data-layout-allow-overflow>
          <nav class="wire" aria-label="Progress map">
            <details open>
              <summary>Progress map</summary>
              <ol>
                <li class="active"><a href="#ch1" aria-current="page">What is an agent?</a><span class="tag">In progress</span></li>
                <li><a href="#ch2">Anatomy of an agent</a><span class="tag">Lab not finished</span></li>
                <li><a href="#ch15">Design studio</a><span class="tag">Lab not finished</span></li>
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

      <!-- SCENE 3: DESIGN STUDIO / CAPSTONE -->
      <div class="view-scene" id="view-ch15" data-layout-allow-overflow>
        <div class="layout" data-layout-allow-overflow>
          <nav class="wire">
            <details open>
              <summary>Progress map</summary>
              <ol>
                <li class="done"><a href="#ch1">What is an agent?</a><span class="tag">Lab finished</span></li>
                <li class="done"><a href="#ch2">Anatomy of an agent</a><span class="tag">Lab finished</span></li>
                <li class="active"><a href="#ch15">Design studio</a><span class="tag">In progress</span></li>
              </ol>
              <p style="margin:10px 0 2px;font-size:0.85rem;"><b>Rank: Architect</b><br><span class="tag">Labs finished: 16 of 16</span></p>
            </details>
          </nav>

          <main data-layout-allow-overflow>
            <article data-layout-allow-overflow>
              <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:8px;">
                <div>
                  <p class="tag" style="margin:0;font-size:0.8rem;">Part 4: Capstone</p>
                  <h1 style="font-size:1.8rem;margin:2px 0 0;">Design studio</h1>
                </div>
                <nav class="pager" style="margin:0;">
                  <button class="btn primary small" id="btn-export-studio">Export journal</button>
                </nav>
              </div>

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

    <!-- AUDIO TRACKS: Voice-Over (14s total duration) -->
    <audio id="vo-1" data-start="0.1" data-duration="4.32" data-track-index="1" data-volume="1.0" src="assets/intro/intro_vo_1.mp3"></audio>
    <audio id="vo-2" data-start="4.6" data-duration="2.18" data-track-index="1" data-volume="1.0" src="assets/intro/intro_vo_2.mp3"></audio>
    <audio id="vo-3" data-start="9.2" data-duration="2.60" data-track-index="1" data-volume="1.0" src="assets/intro/intro_vo_3.mp3"></audio>
    <audio id="vo-4" data-start="12.2" data-duration="1.85" data-track-index="1" data-volume="1.0" src="assets/intro/intro_vo_4.mp3"></audio>

    <!-- AUDIO TRACKS: UI Click SFX -->
    <audio id="sfx-click-1" data-start="4.2" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-2" data-start="5.5" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-3" data-start="6.8" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-4" data-start="8.0" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-5" data-start="9.1" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
    <audio id="sfx-click-6" data-start="12.2" data-duration="0.12" data-track-index="2" data-volume="0.65" src="assets/click.ogg"></audio>
  </div>

  <script>
    window.__timelines = window.__timelines || {{}};
    const tl = gsap.timeline({{ paused: true }});

    // Resting positions
    tl.set("#cursor", {{ x: 920, y: 460 }}, 0);
    tl.set("#cursor-ripple", {{ opacity: 0, scale: 0.4 }}, 0);
    tl.set("#caption-pill", {{ opacity: 0, y: 12 }}, 0);
    tl.set("html", {{ attr: {{ "data-theme": "light" }} }}, 0);

    // Natural curved mouse movement + tactile click feedback
    function addClick(time, targetX, targetY, moveDuration = 0.55) {{
      tl.to("#cursor", {{ x: targetX, y: targetY, duration: moveDuration, ease: "power2.out" }}, time - moveDuration);
      tl.to("#cursor", {{ scale: 0.86, duration: 0.08, ease: "power1.in" }}, time);
      tl.to("#cursor", {{ scale: 1.0, duration: 0.14, ease: "back.out(2)" }}, time + 0.08);
      tl.set("#cursor-ripple", {{ x: targetX - 10, y: targetY - 10, opacity: 0.85, scale: 0.4 }}, time);
      tl.to("#cursor-ripple", {{ opacity: 0, scale: 2.2, duration: 0.35, ease: "power2.out" }}, time + 0.02);
    }}

    // Cinematic Cross-Dissolve Scene Transition
    function transitionScene(outgoingId, incomingId, time, duration = 0.5) {{
      tl.to(outgoingId, {{ opacity: 0, y: -12, scale: 0.99, duration: duration * 0.75, ease: "power2.inOut" }}, time);
      tl.set(outgoingId, {{ display: "none" }}, time + duration * 0.75);

      tl.set(incomingId, {{ display: "block" }}, time + duration * 0.35);
      tl.fromTo(incomingId,
        {{ opacity: 0, y: 12, scale: 0.99 }},
        {{ opacity: 1, y: 0, scale: 1.0, duration: duration, ease: "power3.out" }},
        time + duration * 0.4
      );
    }}

    function setCaption(startTime, text, endTime) {{
      tl.set("#caption-text", {{ textContent: text }}, startTime);
      tl.to("#caption-pill", {{ opacity: 1, y: 0, duration: 0.35, ease: "power3.out", overwrite: "auto" }}, startTime);
      if (endTime) {{
        tl.to("#caption-pill", {{ opacity: 0, y: -6, duration: 0.25, ease: "power2.in", overwrite: "auto" }}, endTime);
      }}
    }}

    // ========================================================
    // SCENE 1: Home page (0.0s - 4.3s)
    // "This is the Agentic System Design Playbook. One file, works offline."
    // ========================================================
    tl.set("#view-home", {{ display: "block", opacity: 1 }}, 0);
    setCaption(0.15, "This is the Agentic System Design Playbook. One file, works offline.", 4.1);

    // Loop dot animation around Think-Act-Observe-Stop
    tl.to("#loop-dot", {{ x: 180, duration: 1.0, ease: "power1.inOut" }}, 0.1);
    tl.to("#loop-dot", {{ y: 140, duration: 1.0, ease: "power1.inOut" }}, 1.1);
    tl.to("#loop-dot", {{ x: 0, duration: 1.0, ease: "power1.inOut" }}, 2.1);
    tl.to("#loop-dot", {{ y: 0, duration: 1.0, ease: "power1.inOut" }}, 3.1);

    // Smooth cursor glide toward "Start Chapter 1"
    tl.to("#cursor", {{ x: 560, y: 280, duration: 1.5, ease: "power2.out" }}, 0.6);
    addClick(4.2, 340, 275, 0.8); // Click "Start Chapter 1"
    tl.to("#btn-start-ch1", {{ scale: 0.95, duration: 0.08, yoyo: true, repeat: 1 }}, 4.2);

    // ========================================================
    // SCENE 2: Chapter 1 — Lab sorting (4.3s - 9.1s)
    // "You predict first, then see the reason."
    // ========================================================
    transitionScene("#view-home", "#view-ch1", 4.3);
    setCaption(4.5, "You predict first, then see the reason.", 8.8);

    // Place System 1 (Translate paragraph) -> Single prompt
    addClick(5.5, 334, 305, 0.65);
    tl.to("#btn-s1-prompt", {{ scale: 0.92, duration: 0.08, yoyo: true, repeat: 1 }}, 5.5);
    tl.to("#card-s1", {{ opacity: 0.4, scale: 0.98, duration: 0.25 }}, 5.5);
    tl.set("#lane-card-s1", {{ display: "block" }}, 5.55);
    tl.fromTo("#lane-card-s1",
      {{ opacity: 0, y: 10, scale: 0.94 }},
      {{ opacity: 1, y: 0, scale: 1.0, duration: 0.45, ease: "back.out(1.5)" }},
      5.55
    );
    tl.set("#ch1-status", {{ textContent: "Placed 1 of 8. Place systems to check." }}, 5.6);

    // Place System 2 (Support helper ticket) -> Agent
    addClick(6.8, 670, 305, 0.65);
    tl.to("#btn-s3-agent", {{ scale: 0.92, duration: 0.08, yoyo: true, repeat: 1 }}, 6.8);
    tl.to("#card-s3", {{ opacity: 0.4, scale: 0.98, duration: 0.25 }}, 6.8);
    tl.set("#lane-card-s3", {{ display: "block" }}, 6.85);
    tl.fromTo("#lane-card-s3",
      {{ opacity: 0, y: 10, scale: 0.94 }},
      {{ opacity: 1, y: 0, scale: 1.0, duration: 0.45, ease: "back.out(1.5)" }},
      6.85
    );
    tl.set("#ch1-status", {{ textContent: "Placed 2 of 8. Place systems to check." }}, 6.9);

    // Click "Check my sorting"
    addClick(8.0, 344, 485, 0.65);
    tl.to("#btn-ch1-check", {{ scale: 0.94, duration: 0.08, yoyo: true, repeat: 1 }}, 8.0);
    tl.set("#reveal-s1, #reveal-s3", {{ display: "block" }}, 8.05);
    tl.fromTo(["#reveal-s1", "#reveal-s3"],
      {{ opacity: 0, y: 8 }},
      {{ opacity: 1, y: 0, duration: 0.45, stagger: 0.1, ease: "power3.out" }},
      8.1
    );
    tl.set("#ch1-status", {{ textContent: "You sorted 2 of 8 correctly. Read each reason below." }}, 8.1);

    // ========================================================
    // SCENE 3: Design Studio in Dark Mode (9.1s - 12.2s)
    // "Sixteen interactive labs. Light and dark."
    // ========================================================
    addClick(9.1, 930, 26, 0.6); // Click Dark mode in top nav
    tl.to("#tbtn", {{ scale: 0.93, duration: 0.08, yoyo: true, repeat: 1 }}, 9.1);

    // Deterministic Dark Mode switch + CSS variable interpolation
    tl.set("html", {{ attr: {{ "data-theme": "dark" }} }}, 9.1);
    tl.to([":root", "#root", "#browser-chrome", "header.top"], {{
      "--bg": "#121A2E",
      "--panel": "#1B2542",
      "--ink": "#FFF6DC",
      "--soft": "#D9D2BC",
      "--acc": "#76C0EC",
      "--line": "#76C0EC",
      "--chrome-bg": "#0E1628",
      "--chrome-border": "#76C0EC",
      duration: 0.55,
      ease: "power2.inOut"
    }}, 9.1);
    tl.set("#tbtn", {{ textContent: "Light mode" }}, 9.15);

    transitionScene("#view-ch1", "#view-ch15", 9.1);
    setCaption(9.2, "Sixteen interactive labs. Light and dark.", 11.9);

    // Show Architecture canvas with connected nodes and approval gate lint
    tl.set("#node-model, #node-write, #canvas-edge, #lint-output", {{ display: "inline" }}, 9.35);
    tl.fromTo(["#node-model", "#node-write"],
      {{ opacity: 0, scale: 0.8 }},
      {{ opacity: 1, scale: 1.0, duration: 0.4, stagger: 0.1, ease: "back.out(1.8)" }},
      9.4
    );
    tl.fromTo("#canvas-edge", {{ opacity: 0 }}, {{ opacity: 1, duration: 0.35, ease: "power2.out" }}, 9.6);
    tl.fromTo("#lint-output",
      {{ opacity: 0, y: 10 }},
      {{ opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }},
      9.7
    );
    tl.fromTo("#lint-spotlight",
      {{ opacity: 0, scale: 0.96 }},
      {{ opacity: 1, scale: 1.0, duration: 0.4, ease: "back.out(1.5)" }},
      10.0
    );

    // Cursor hovers across canvas
    tl.to("#cursor", {{ x: 480, y: 395, duration: 0.8, ease: "power2.out" }}, 10.2);

    // ========================================================
    // SCENE 4: Finale & Brand Lockup (12.2s - 14.0s)
    // "Agentic System Design Playbook."
    // ========================================================
    addClick(12.2, 160, 26, 0.5); // Click brand link
    tl.to("#brand-link", {{ scale: 0.96, duration: 0.08, yoyo: true, repeat: 1 }}, 12.2);

    transitionScene("#view-ch15", "#view-home", 12.2);
    setCaption(12.2, "Agentic System Design Playbook.", 13.9);

    // Continuous loop orbit
    tl.to("#loop-dot", {{ x: 180, duration: 0.8, ease: "power1.inOut" }}, 12.3);
    tl.to("#loop-dot", {{ y: 140, duration: 0.8, ease: "power1.inOut" }}, 13.1);

    // Resting state on brand hero at 14.0s
    tl.to("#cursor", {{ x: 640, y: 340, duration: 0.7, ease: "power2.out" }}, 12.8);

    window.__timelines["main"] = tl;
    tl.seek(0);
  </script>
</body>
</html>
"""

with open('playbook-video/index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Generated refined 14s composition!")
