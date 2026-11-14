# Portfolio Intan — Agent Operating Guidelines

This workspace is strictly governed by **Anti-Slop Design & Engineering Principles**.
Any AI agent modifying code, content, or styling in this repository must comply with these guidelines.

## Core Directives

1. **Anti-Slop Visual Standards**:
   - Do NOT default to generic "AI templates": no arbitrary purple/cyan glowing blobs, no repetitive dark glassmorphism cards with zero hierarchy, and no low-contrast illegible text.
   - Use intentional typography (pairing Newsreader display serif with Plus Jakarta Sans body), warm human-crafted palettes, generous white space, and subtle, tactile micro-interactions.
   - Maintain full light & dark mode support with accessible contrast ratios (WCAG 2.1 AA compliant).

2. **Grounded, Authentic Copywriting**:
   - Forbid empty buzzwords: Never use *"passionate visionary developer"*, *"spearheading innovative solutions"*, *"crafting digital symphonies"*, or *"leveraging synergies"*.
   - Use direct, authentic language that explains concrete problems solved, measurable impact, and real technical decisions.
   - Keep tone professional, confident, approachable, and human.

3. **Engineering Craftsmanship**:
   - TypeScript with strict typing (no `any`, no unhandled promises).
   - Component purity: keep presentation decoupled from data (`src/data/portfolioData.ts`).
   - Semantic HTML: use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, proper heading hierarchies (`<h1>`-`<h3>`), and accessible ARIA attributes where needed.
   - Run `npm run check:slop` before finalizing any modification.

## Special Subagent

When design review or deep anti-slop auditing is needed, invoke the `@antislop` subagent.

