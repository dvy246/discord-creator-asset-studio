# Aesthetic Upgrade & Profile Viewer Design Spec

## 1. Context & Goals
Elevate the Discord Creator Asset Studio with premium, animated aesthetic backgrounds that resonate with Discord users (anime, gaming, vaporwave). Simultaneously, capture the highest-volume missing keyword opportunity ("discord profile viewer", Vol: >1000) by building a new tool.

## 2. Background Animation Approaches (User's 3 Options)
- **Option 1: Nano Banana (AI Gen)** - Generate custom assets. Heavy API dependency.
- **Option 2: Hyperframe** - Video/GIF loops. High quality but heavy payload, hurting Core Web Vitals.
- **Option 3: Unsplash MCP (Anime/Aesthetic)** - Fetch high-quality static aesthetic images.

**Decision (The Discord User Perspective):** 
We will use **Option 3 (Unsplash Aesthetic Images)** combined with **CSS Animation**. By fetching premium anime/lo-fi aesthetic images from Unsplash and applying a slow, infinite CSS Ken Burns effect (pan & zoom) with a frosted glass (`backdrop-blur`) overlay, we achieve the exact "Creavite" premium animated feel while keeping the page incredibly fast (Core Web Vitals friendly).

## 3. New Tool: Discord Profile Viewer
- **Goal:** Allow users to input a Discord User ID and instantly view/download their Avatar and Profile Banner.
- **UI:** A sleek search bar. Upon entering an ID, a mock Discord profile card renders (using the aesthetic background), displaying the Avatar and Banner with "Download 512x512" buttons.
- **SEO Route:** `src/pages/tools/profile-viewer.astro`
- **Data Source:** To avoid exposing bot tokens on a static site, the UI will be built to accept a Discord ID and simulate the fetch (or hit a public Cloudflare worker if configured). For this spec, we will build the complete UI and state management.

## 4. Architecture & Components
1. `AestheticBackground.astro`: A global layout component that fetches/displays an aesthetic image with CSS panning animations and a dark gradient overlay.
2. `Layout.astro`: Integrate the background.
3. `src/pages/tools/profile-viewer.astro`: The new high-volume tool route with `SoftwareApplication` schema.
