# Design System Specification

## 1. Overview & Creative North Star: "The Neon Architect"

This design system is built to transcend the "cliché" cyberpunk aesthetic. Instead of a chaotic "glitch" look, we are pursuing **The Neon Architect**—a vision of a high-end, augmented reality interface that feels engineered, precise, and authoritative. It is a digital cockpit for a world-class video editor.

We break the "template" look by leaning into **Aggressive Geometry** and **Tactile Depth**. Expect intentional asymmetry, where elements don't just sit on the grid—they "plug into" it. We use high-contrast typography scales and "augmented" UI motifs to ensure the portfolio feels like a professional tool rather than a static webpage.

---

## 2. Colors & Surface Logic

Our palette utilizes high-chroma accents against a deep, void-like foundation. We avoid flat, lifeless blacks in favor of a "Primary Dark" that carries a hint of midnight blue.

### Surface Hierarchy & Nesting
To create a high-tech feel, we treat the UI as a series of physical light-emitting layers. We use **Tonal Nesting** instead of outlines to define structure.
- **Base Layer:** `surface` (#04122d) — The deep background.
- **Sectioning:** `surface_container_low` (#0c1b36) — Use this for large content blocks.
- **Interactive Layers:** `surface_container_high` (#1c2a45) — Use for cards and elevated panels.

### The Rules of Engagement
- **The "No-Line" Rule:** Standard 1px solid borders are strictly prohibited for sectioning. Boundaries are created through background shifts or the "Ghost Border" (see Section 4).
- **The "Glass & Gradient" Rule:** Floating panels (Modals, Navigation) must use Glassmorphism. Utilize `surface_container` with a `backdrop-filter: blur(12px)` and a 60% opacity.
- **Signature Textures:** Apply a subtle **Scanline Overlay** (a repeating linear gradient) at 3% opacity over `surface_container_lowest` to give the UI a "screen" texture. Use `primary` (#46d9e3) to `primary_container` (#0abdc6) gradients for main CTAs to simulate a glow.

---

### 3. Typography: The Augmented Script

The typography is a dialogue between the "Pilot" (Headers) and the "System" (Body).

- **Display & Headlines (Space Grotesk):** These are your high-impact geometric statements. They should be set with tight letter-spacing (-0.02em) to feel industrial and pressurized. 
- **Titles & Body (Inter):** Clean, neutral, and highly legible. This balances the "edgy" headers with professional clarity.
- **Labels (Manrope):** Used for technical metadata (e.g., timestamps, frame rates). These should be uppercase with wide letter-spacing (+0.1em) to mimic telemetry data.

**Visual Identity Tip:** Use `display-lg` for project titles, but pair it with a `label-sm` technical "ID number" (e.g., PROJ_082) in `tertiary` (#d2cb00) to lean into the "augmented UI" motif.

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are too soft for this system. We use **Radiance and Rigid Layering.**

- **The Layering Principle:** Depth is achieved by stacking. Place a `surface_container_highest` panel over a `surface` background to create immediate, sharp elevation.
- **Ambient Glows:** Instead of a grey shadow, use a "Neon Bloom." When an element is active, apply a shadow with a large blur (20px-40px) using the `primary` or `secondary` color at 15% opacity. This mimics light reflecting off a dark surface.
- **The "Ghost Border" Fallback:** If a container needs more definition, use `outline_variant` at 15% opacity. It should feel like a faint laser-etched line, not a box.
- **Clipped Corners:** All containers must feature a "Clipped Corner" motif (45-degree cut) on at least one corner (e.g., top-right) to break the standard rectangular silhouette.

---

## 5. Components

### Buttons
- **Primary:** `primary` background, `on_primary` text. Use a clipped-corner shape.
- **Secondary:** `surface_container_high` background with a `primary` 1px bottom-border "glow bar."
- **Tertiary:** Text-only in `secondary` (#ffaceb), uppercase, with a bracketed hover state: `[ ENTER ]`.

### Input Fields
- **Styling:** No background. Use a `surface_variant` bottom-border only. On focus, the border transitions to `primary` and triggers a subtle `primary` glow.
- **Helper Text:** Must use `label-sm` in `tertiary` (#d2cb00) to look like system warnings.

### Cards & Lists
- **Rule:** Forbid divider lines. Use `surface_container_low` and `surface_container_high` to create separation.
- **Special Card Motif:** Every card should have a "Hexagonal Pattern" watermark in the corner at 5% opacity, reinforcing the high-tech theme.

### Additional: "Augmented HUD" Elements
- **Data Brackets:** Use thin, L-shaped accents in `primary` at the corners of high-priority images or video players to "frame" the content like a viewfinder.
- **Progress Bars:** Use `primary` for the fill, but add a secondary `secondary` (#fc29e9) "glitch" segment at the 90% mark to add visual energy.

---

## 6. Do's and Don'ts

### Do
- **Use Intentional Asymmetry:** Align text to the left but offset technical metadata to the far right.
- **Embrace the Dark:** Ensure the `surface` (#04122d) remains the dominant color to make the neons pop.
- **Use "Telemetry" Details:** Add small, non-functional text like "SYS_VER 4.02" or "LATENCY: 12ms" in `label-sm` to fill whitespace.

### Don't
- **Don't Use Rounded Corners:** Every radius must be `0px`. Roundness kills the aggressive, high-tech vibe.
- **Don't Over-Glow:** If everything glows, nothing is important. Reserve the `primary` and `secondary` glows for interactive or critical status elements.
- **Don't Use Standard Grids:** Avoid perfectly even columns. Try a 60/40 or 70/30 split to give the layout an editorial, "un-templated" feel.
