# Premium Animated Banner Maker Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the existing banner maker into a premium, motion-driven Animated Banner Maker utilizing aesthetic Unsplash imagery and exploiting market gaps (Safe Zones & Compression limits).

**Architecture:** We will enhance the existing `src/pages/tools/banner.astro` with an interactive Preact/Vanilla JS canvas. It will feature a "Discord UI Safe Zone" overlay and CSS-based motion presets that can be previewed.

**Tech Stack:** Astro, Tailwind CSS, Vanilla JS / HTML5 Canvas.

**Spec:** `docs/superpowers/specs/2026-09-18-motion-banner-maker-design.md`

## Global Constraints
- Core Web Vitals must remain perfect; avoid shipping massive JS libraries if CSS motion suffices for the preview.
- All titles must strictly follow the `seo-indexing-rule.md` format.

---

### Task 1: Add the Discord Profile Safe Zone Overlay

**Files:**
- Modify: `src/pages/tools/banner.astro`

**Interfaces:**
- Consumes: Existing Banner UI
- Produces: A toggleable visual mask mimicking Discord's UI.

- [ ] **Step 1: Inject the Safe Zone HTML overlay**
Inside the main banner preview `<div class="canvas-container">` (or equivalent), add an absolute-positioned overlay that represents the Discord Avatar cutout (bottom left) and the username text block.

```html
<!-- Safe Zone Overlay (Hidden by default) -->
<div id="safe-zone-overlay" class="hidden absolute inset-0 pointer-events-none z-50">
  <div class="absolute bottom-[-40px] left-6 w-24 h-24 rounded-full bg-black/80 border-4 border-[#313338] backdrop-blur-sm flex items-center justify-center text-white/50 text-xs">Avatar</div>
  <div class="absolute bottom-2 left-32 w-32 h-6 bg-black/60 rounded backdrop-blur-sm flex items-center px-2 text-white/50 text-xs">Username</div>
</div>
```

- [ ] **Step 2: Add the Toggle Button**
Add a "Toggle Safe Zones" button to the control panel to switch the `hidden` class on the overlay.

- [ ] **Step 3: Commit**
```bash
git add src/pages/tools/banner.astro
git commit -m "feat: add discord safe zone overlay to banner maker"
```

### Task 2: Integrate Unsplash Aesthetic Backgrounds & Motion Presets

**Files:**
- Modify: `src/pages/tools/banner.astro`

**Interfaces:**
- Consumes: The background selection UI.
- Produces: Selectable aesthetic backgrounds with CSS motion classes.

- [ ] **Step 1: Build the Aesthetic Selection Gallery**
Add a grid of buttons fetching premium aesthetic themes from Unsplash (e.g., Anime, Vaporwave, Cyberpunk, Lo-Fi).
```html
<div class="grid grid-cols-4 gap-2 mt-4">
  <button class="bg-btn bg-[url('https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600')] bg-cover h-16 rounded border border-white/10" data-bg="unsplash-anime"></button>
  <!-- Add 3 more aesthetic categories -->
</div>
```

- [ ] **Step 2: Add Motion Presets UI**
Add a select dropdown or buttons for "Motion Type": Static, Slow Pan (Ken Burns), Pulse, or Breathing.

- [ ] **Step 3: Wire up the JS Logic**
Write the JavaScript to apply these backgrounds to the preview canvas/div, and attach Tailwind animation classes (`animate-slow-pan`, `animate-pulse`) based on the selected motion preset.

- [ ] **Step 4: Commit**
```bash
git add src/pages/tools/banner.astro
git commit -m "feat: integrate unsplash aesthetics and motion presets"
```

### Task 3: 10MB Export Warning System

**Files:**
- Modify: `src/pages/tools/banner.astro`

**Interfaces:**
- Consumes: Export settings.
- Produces: A visual UI warning.

- [ ] **Step 1: Add the Warning UI**
Add a small progress-bar-style UI near the Export/Download button that estimates file size. If Motion is enabled, display a warning: *"Animated Banners require Discord Nitro and must be under 10MB."*

- [ ] **Step 2: Commit**
```bash
git add src/pages/tools/banner.astro
git commit -m "feat: add nitro 10mb limit warning UI"
```

