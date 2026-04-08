# Design System Specification: Editorial Neo-Brutalism
 
## 1. Overview & Creative North Star
This design system is anchored by the Creative North Star of **"The Digital Curator."** Unlike traditional corporate minimalism that seeks to disappear, this system is a protagonist. It rejects the polite, "safe" UI of the last decade in favor of a raw, honest, and high-impact editorial experience. 
 
By utilizing intentional asymmetry, heavy-weight strokes, and a "physical" approach to layering, we move away from digital abstraction and toward a tactile, zine-like aesthetic. We break the template look by treating every screen as a composition, using overlapping cards and a "human-error" rotation (1-2 degrees) to breathe life into the grid.
 
---
 
## 2. Colors: High-Contrast Vibrancy
The palette is unapologetically bold. It uses high-saturation primaries to anchor the eye and deep blacks to provide structural authority.
 
### Core Palette
- **Primary (`#6a5b00` / Container `#fddc00`):** Our flagship Vibrant Yellow. Use this for the most critical actions and primary hero cards.
- **Secondary (`#22683a` / Container `#abf3b9`):** Mint Green. Used for success states, secondary sections, and navigation sidebars.
- **Tertiary (`#943681` / Container `#fe90e1`):** Pink. Reserved for highlight callouts, student reviews, or accents.
- **Surfaces (`#f6f6f6` to `#ffffff`):** Neutral ground that allows the vibrant containers to pop without causing visual fatigue.
 
### The "No-Line" Rule for Sectioning
While components use heavy borders, **layout sections must never use 1px dividers.** Sectioning is achieved through color blocks. For example, a Mint Green navigation rail (`secondary_container`) should sit flush against a Light Grey (`surface`) workspace. 
 
### Surface Hierarchy & Nesting
Treat the UI as a series of physical cards stacked on a desk.
- **Bottom Layer:** `surface` (#f6f6f6)
- **Mid Layer:** `surface_container_low` (#f1f1f1)
- **Top Layer (Interactive Cards):** `surface_container_lowest` (#ffffff) or a brand color container (`primary_container`).
 
### The Glass & Gradient Rule
To elevate the "Neo-Brutalist" look from a trend to a premium experience:
- **Glassmorphism:** Use `surface_container_lowest` at 80% opacity with a `backdrop-blur: 12px` for floating navigation bars or modals.
- **Signature Textures:** Apply a subtle linear gradient on primary CTAs (e.g., `primary` to `primary_dim`) to add "soul" and depth to otherwise flat shapes.
 
---
 
## 3. Typography: The Editorial Voice
Typography is our primary tool for hierarchy. We pair a high-character geometric sans for displays with a highly legible sans for utility.
 
- **Display & Headlines (`Space Grotesk`):** Heavy weight, tight letter spacing. `display-lg` (3.5rem) should feel like a newspaper headline—authoritative and loud.
- **Body & Titles (`Manrope`):** Modern and clean. `body-lg` (1rem) provides the "Editorial" feel, ensuring that long-form content remains readable despite the chaotic visual environment.
- **Labeling:** Use `label-md` (0.75rem) in all-caps for metadata to mimic architectural blueprints.
 
---
 
## 4. Elevation & Depth: The Hard Shadow
We reject blurred, naturalistic shadows. In this system, depth is a graphic statement.
 
### The Layering Principle
Depth is primarily achieved by stacking colors. A Mint card on a Yellow background is "elevated" by contrast alone.
 
### Hard Offset Shadows
When an element needs to float, use a **Hard Shadow**:
- **Token:** `box-shadow: 4px 4px 0px 0px #000;`
- **Direction:** Always bottom-right.
- **Color:** Always 100% opaque black (`inverse_surface`).
 
### The "Ghost Border"
Standard 1px lines are forbidden. If an element requires a subtle boundary (like an image within a card), use the **Ghost Border**: `outline-variant` at 20% opacity. For all other components, use the **Signature Border**: `3px solid #000`.
 
---
 
## 5. Components: Raw & Intentional
 
### Buttons
- **Primary:** `primary_container` background, `3px solid #000` border, `4px 4px 0px 0px #000` shadow.
- **States:** 
  - *Hover:* Move up 2px, left 2px. Increase shadow to `6px 6px 0px 0px #000`.
  - *Pressed:* Move down 4px, right 4px. Shadow becomes `0px 0px 0px 0px #000`.
 
### Cards
Cards are the soul of the system.
- **Styling:** Thick borders, no border-radius (`0px`).
- **Human Touch:** Apply a subtle rotation `transform: rotate(-1deg)` to every third card in a list to break the "perfect" digital grid.
 
### Input Fields
- **Default:** `surface_container_lowest` background, `3px solid #000` border.
- **Focus:** Background shifts to `primary_fixed` (Yellow) to create an unmistakable "active" state.
 
### Lists & Dividers
**Never use horizontal rules.** Separate list items using `surface_container` background shifts or generous vertical spacing from the typography scale.
 
---
 
## 6. Do's and Don'ts
 
### Do
- **Do** overlap elements. Let a card "hang" over the edge of a container.
- **Do** use massive typography. If a headline feels too big, it’s probably just right.
- **Do** use high-contrast color pairings (Yellow next to Black).
- **Do** keep corner radii at `0px` for everything.
 
### Don't
- **Don't** use soft shadows or blurs for elevation.
- **Don't** use 1px "Grey" borders. It looks "default" and weakens the brand.
- **Don't** use rounded corners. This system is built on hard edges and rigid geometry.
- **Don't** center everything. Use left-aligned, asymmetrical layouts to maintain the editorial feel.