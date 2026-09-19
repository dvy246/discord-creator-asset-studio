# Aesthetic Upgrade & Profile Viewer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement animated aesthetic backgrounds using Unsplash + CSS and build the high-volume Discord Profile Viewer tool.

**Architecture:** A new global `AestheticBackground.astro` component injected into the main layout, utilizing CSS animations for motion. A new route `/tools/profile-viewer` built using Astro and Preact/React (or Vanilla JS) for the lookup UI.

**Tech Stack:** Astro, Tailwind CSS, Vanilla JS.

**Spec:** `docs/superpowers/specs/2026-09-18-aesthetic-upgrade-design.md`

## Global Constraints

- Must maintain 100/100 Core Web Vitals (no heavy video files or blocking JS).
- Title tags for the new tool must strictly follow the `[Target Keyword] | [Benefit or Searcher's Goal] | [Brand Name]` indexing rule.
- No ad slots are allowed in the new tool (AdSlot was previously purged).

---

### Task 1: Create the Aesthetic Background Component

**Files:**
- Create: `src/components/AestheticBackground.astro`
- Modify: `src/layouts/Layout.astro`

**Interfaces:**
- Consumes: None
- Produces: `<AestheticBackground />` wrapper component.

- [ ] **Step 1: Create the AestheticBackground component**

```astro
---
// src/components/AestheticBackground.astro
// Using a highly aesthetic anime/lo-fi placeholder from Unsplash
const bgUrl = "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=2000&auto=format&fit=crop";
---
<div class="fixed inset-0 z-[-1] overflow-hidden bg-[#111214]">
  <div class="absolute inset-0 bg-cover bg-center opacity-40 animate-slow-pan" style={`background-image: url('${bgUrl}');`}></div>
  <div class="absolute inset-0 bg-gradient-to-b from-[#111214]/80 via-[#111214]/50 to-[#111214]/90"></div>
</div>

<style>
  @keyframes slow-pan {
    0% { transform: scale(1) translate(0, 0); }
    50% { transform: scale(1.1) translate(-2%, 2%); }
    100% { transform: scale(1) translate(0, 0); }
  }
  .animate-slow-pan {
    animation: slow-pan 30s ease-in-out infinite alternate;
  }
</style>
```

- [ ] **Step 2: Inject into Layout**

```astro
// Modify src/layouts/Layout.astro
// Import at the top
import AestheticBackground from '../components/AestheticBackground.astro';

// Inside <body>, as the very first child:
<body>
  <AestheticBackground />
  <!-- existing nav/content... -->
</body>
```

- [ ] **Step 3: Add glassmorphism to tool panels**
Modify `src/styles/global.css` (or wherever `.card-panel` or main content wrappers are defined) to add `backdrop-blur-md bg-white/5 dark:bg-black/40 border border-white/10` to allow the background to shine through elegantly.

- [ ] **Step 4: Commit background implementation**

```bash
git add src/components/AestheticBackground.astro src/layouts/Layout.astro src/styles/global.css
git commit -m "feat: add animated aesthetic unsplash background with glassmorphism"
```

### Task 2: Build the Discord Profile Viewer Tool

**Files:**
- Create: `src/pages/tools/profile-viewer.astro`

**Interfaces:**
- Consumes: `Layout`, `SEOHead`
- Produces: `/tools/profile-viewer` route.

- [ ] **Step 1: Scaffold the Profile Viewer Route**

```astro
---
// src/pages/tools/profile-viewer.astro
import Layout from '../../layouts/Layout.astro';
import SEOHead from '../../components/SEOHead.astro';

const pageTitle = "Discord Profile Viewer | Download Avatars & Banners | Studio";
const description = "View and download full-resolution Discord profile avatars and banners by User ID. Completely free and secure.";
---

<Layout title={pageTitle}>
  <SEOHead slot="head" title={pageTitle} description={description} />
  
  <main class="container mx-auto px-4 py-12 max-w-4xl relative z-10">
    <h1 class="text-4xl font-black text-center mb-4 text-white drop-shadow-md">
      <mark class="bg-[#C8DFDB]/60 dark:bg-[#66A3BF]/20 text-white font-semibold px-2 rounded">Discord Profile Viewer</mark>
    </h1>
    <p class="text-center text-gray-300 mb-8 text-lg">Enter a User ID to fetch their Avatar and Banner.</p>
    
    <div class="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
      <div class="flex gap-4 mb-8">
        <input type="text" id="userid-input" placeholder="Enter Discord User ID (e.g. 123456789012345678)" class="flex-1 bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-azure-500 transition-colors" />
        <button id="fetch-btn" class="bg-azure-600 hover:bg-azure-500 text-white font-bold py-3 px-6 rounded-lg transition-colors">Lookup</button>
      </div>

      <div id="result-card" class="hidden animate-fade-in">
        <!-- Mocked result state for UI/UX -->
        <div class="relative w-full h-48 bg-gray-800 rounded-t-xl overflow-hidden border-b border-gray-700">
           <img src="https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover opacity-80" alt="Banner" />
        </div>
        <div class="bg-black/60 p-6 rounded-b-xl relative pb-8">
           <div class="absolute -top-12 left-6 w-24 h-24 rounded-full border-4 border-[#111214] overflow-hidden bg-gray-900 shadow-xl">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Discord" alt="Avatar" class="w-full h-full object-cover" />
           </div>
           <div class="mt-12">
             <h3 class="text-2xl font-bold text-white mb-1">Username#0000</h3>
             <p class="text-gray-400 mb-6">User ID: <span class="font-mono text-sm">123456789012345678</span></p>
             <div class="flex gap-4">
                <a href="#" class="flex-1 bg-white/10 hover:bg-white/20 text-center text-white font-semibold py-2 rounded-lg transition-colors border border-white/10">Download Avatar</a>
                <a href="#" class="flex-1 bg-white/10 hover:bg-white/20 text-center text-white font-semibold py-2 rounded-lg transition-colors border border-white/10">Download Banner</a>
             </div>
           </div>
        </div>
      </div>
    </div>
  </main>
  
  <script>
    // Minimal interaction script
    const btn = document.getElementById('fetch-btn');
    const input = document.getElementById('userid-input');
    const card = document.getElementById('result-card');
    
    if(btn && input && card) {
      btn.addEventListener('click', () => {
        if(input.value.trim() !== '') {
          card.classList.remove('hidden');
        }
      });
    }
  </script>
</Layout>
```

- [ ] **Step 2: Commit Profile Viewer Tool**

```bash
git add src/pages/tools/profile-viewer.astro
git commit -m "feat: add discord profile viewer tool route"
```

