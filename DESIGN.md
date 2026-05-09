```markdown
# Design System Document: The Grandmaster Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Tactical Monolith"**

This design system is built to bridge the gap between the ancient, cerebral tradition of chess and the razor-sharp precision of modern computational theory. We are moving away from "app-like" interfaces toward a high-end editorial experience. 

The aesthetic is defined by **intentional asymmetry** and **tonal depth**. Rather than using a standard 12-column grid for everything, we use "The Tactical Offset"—where elements like headlines or chess diagrams might bleed off-center or overlap nested containers. This creates a sense of movement and "planned tension," mimicking the complexity of a mid-game position. We prioritize breathing room and high-contrast typography to ensure the user feels they are in a space of quiet, focused luxury.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep obsidian tones, punctuated by the "Ivory" of the pieces and the "Regal Gold" of strategic victory.

### Surface Hierarchy & Nesting
We reject the flat, "card-on-background" look. Instead, use the **Surface Tiers** to create a physical sense of depth.
*   **Base Layer:** `surface` (#131313) – Use for the primary canvas.
*   **Submerged Content:** `surface_container_lowest` (#0e0e0e) – Use for recessed areas like search bars or inactive sidebars.
*   **Elevated Modules:** `surface_container_high` (#2a2a2a) – Use for primary interactive modules (e.g., the move list).

### The "No-Line" Rule
**1px solid borders are prohibited for sectioning.** Boundaries must be defined through background color shifts. For instance, a section containing "Grandmaster Lectures" should sit on `surface_container_low` against the `background` without a stroke.

### The "Glass & Gradient" Rule
To add "soul" to the dark theme:
*   **Glassmorphism:** Floating menus or modals must use `surface_variant` at 60% opacity with a `24px` backdrop blur.
*   **Signature Textures:** For primary CTAs and Hero sections, use a subtle linear gradient (45°) from `primary` (#f2ca50) to `primary_container` (#d4af37). This prevents the gold from looking like a flat yellow.

---

## 3. Typography: Tradition vs. Precision
The typography is a dialogue between the history of the game and the speed of modern play.

*   **The Traditionalist (Newsreader):** Used for `display` and `headline` scales. This serif font conveys the weight of history. It should be tracked slightly tighter (-2%) to feel like a premium printed journal.
*   **The Strategist (Inter):** Used for `title`, `body`, and `label` scales. This sans-serif provides the "sharpness" required for move notations, clock timings, and data-heavy analysis.

**Scale Highlight:**
*   **Display LG:** `newsreader`, 3.5rem. Use for hero headers that command attention.
*   **Title MD:** `inter`, 1.125rem. Use for UI labels where legibility is paramount.

---

## 4. Elevation & Depth
In this design system, elevation is a matter of light and transparency, not just shadows.

*   **The Layering Principle:** Place a `surface_container_highest` (#353534) element inside a `surface_container_low` (#1c1b1b) section to create a soft, natural lift.
*   **Ambient Shadows:** When a component must "float" (like a chess piece being dragged), use a shadow tinted with `surface_tint` (#e9c349) at 5% opacity. Blur should be high (`40px+`) to mimic soft, ambient lighting.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline_variant` at **20% opacity**. Never use 100% opaque borders; they shatter the "tactile monolith" feel.

---

## 5. Components

### Buttons
*   **Primary (The Queen):** Background is the gold gradient (`primary` to `primary_container`). Text is `on_primary`. Shape: `DEFAULT` (0.25rem) for a crisp, architectural look.
*   **Secondary (The Knight):** `surface_variant` background with a `Ghost Border` of `outline`.
*   **Tertiary (The Pawn):** No background. Text in `primary`. Underline on hover only.

### Cards & Lists
*   **Card Anatomy:** Forbid divider lines. Separate "Lesson Title" from "Description" using vertical whitespace (e.g., `1.5rem`). Use `surface_container_low` as the card base.
*   **Move Notation Lists:** Use alternating backgrounds (`surface` and `surface_container_low`) instead of lines. Highlight the "Current Move" using a `primary` left-border accent (4px).

### Input Fields
*   **State:** Unfocused inputs use `surface_container_lowest`. On focus, the background shifts to `surface_container_high` and the `Ghost Border` opacity increases to 40% using the `tertiary` (Electric Blue) color for a high-contrast micro-interaction.

### Signature Component: The Analysis HUD
A floating glass container (`backdrop-blur`) utilizing `tertiary_container` for data visualizations (win-rate bars) to provide that "electric" modern precision against the dark charcoal background.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. A headline should often be offset further to the left than the body text.
*   **Do** use `tertiary` (Electric Blue) exclusively for "active" data, like an engine evaluation or a ticking clock.
*   **Do** allow images of chess pieces to overlap container boundaries to break the "box" feel.

### Don't:
*   **Don't** use pure white (#FFFFFF). Always use `on_surface` (#e5e2e1) to maintain the "Ivory" premium feel.
*   **Don't** use standard shadows. If it looks like a "Material Design" shadow, it’s too heavy.
*   **Don't** use large corner radiuses. Stick to `DEFAULT` (4px) or `none`. Rounded "pill" buttons feel too casual for a prestigious academy.

---

## 7. Spacing & Rhythm
Use a strict 8px grid, but intentionally skip steps to create hierarchy. 
*   **Section Spacing:** 80px to 120px to allow the "Editorial" feel to breathe.
*   **Component Padding:** 24px internal padding for containers to ensure no element feels "choked" by its border.```