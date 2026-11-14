# Anti-Slop Quality & Design Rules

## 1. Design & UI
- **Palette**: Use grounded, curated colors (e.g. rich slate/obsidian, warm cream/sand, deep teal/sage, terracotta accent). Avoid generic neon purple gradients on black backgrounds.
- **Typography**: Hierarchy must be distinct. Use the serif display font (`font-display`) for editorial elegance in headlines and quotes, and clean sans-serif (`font-sans`) for body copy and UI controls.
- **Cards & Containers**: Avoid generic "glassmorphism cards with purple border stroke". Use crisp 1px borders with subtle hover shifts, tactile elevation, or clean flat background shifts.
- **Motion**: Keep animations swift (<250ms), purposeful, and respect `prefers-reduced-motion`. No unnecessary bouncy elements.

## 2. Copywriting & Voice
- Banned phrases:
  - "Passionate about building scalable solutions"
  - "Crafting seamless user experiences"
  - "Leveraging cutting-edge technologies"
  - "Spearheading modern digital innovation"
  - "Bridging the gap between design and technology"
- Recommended structure for project entries:
  - **Context/Problem**: What was the real challenge?
  - **Approach/Solution**: What did Intan specifically build or decide?
  - **Impact**: What was the quantitative or qualitative outcome?

## 3. Accessibility & Semantics
- Every interactive element (`<button>`, `<a>`, `<input>`) must have an accessible name / `aria-label`.
- All images must include descriptive `alt` text.
- Focus outlines must be visible for keyboard users (`focus-visible:ring-2`).

