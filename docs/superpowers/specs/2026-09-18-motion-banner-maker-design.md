# Motion-Driven Banner Maker & Market Positioning Spec

## 1. Context & Goals
The current Discord banner market is saturated with basic, static image tools (like Canva or Kapwing). To stand out as a "premium, award-winning" tool, we must pivot from static graphics to **motion-driven banners** and capture the massive `discord animated banner maker` / `discord profile viewer` traffic. 

## 2. Competitive Market Gaps (Web Search Insights)
Based on web and market research, our competitors leave three massive gaps that we will exploit to become the premium market leader:
1. **The Safe Zone Blindspot:** No tool accurately shows users where Discord's Avatar and Username UI overlay will cover their banner.
2. **The 5-Second Hover Rule:** Discord animations only play on hover. Creators need a "Hover Preview" mode.
3. **The 10MB Compression Ceiling:** High-quality motion usually exports too large for Discord's strict 10MB Nitro limit, forcing users to use third-party compressors.

## 3. The Stand-Out Approach (Evaluating the Options)
The user proposed two primary technical avenues:
- **Option 1:** Nano Banana (AI Image Generation only) - *Static, lacks premium motion.*
- **Option 2:** Hyperframe (Programmatic Animation) + Unsplash MCP (Aesthetic Anime Images).

**Decision:** **Option 2** is the undeniable winner. 
By pulling ultra-aesthetic, high-quality anime/gaming imagery via Unsplash and applying programmatic, silky-smooth motion (Hyperframe/GSAP style CSS panning, breathing effects, and particle overlays), we create a premium, cinematic feel. This perfectly matches the "Discord User Perspective" where lo-fi, anime, and cyberpunk aesthetics dominate.

## 4. The New Tool: Premium Animated Banner Maker
To capture massive search volume (combining `discord banner maker` + `animated`), we will upgrade the Banner tool into a premium suite:
- **UI:** A dark-mode, glassmorphism canvas.
- **Features:** 
  - **Safe Zone Toggle:** A button that overlays a mock Discord profile UI to ensure perfect framing.
  - **Motion Presets:** Apply "Breathing", "Pan", or "Glitch" motion to Unsplash aesthetic backgrounds.
  - **10MB Target Export:** A visual progress bar warning users if their motion duration exceeds Discord's file size limits.
