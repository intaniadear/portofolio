---
name: anti-slop-audit
description: Audits the portfolio codebase for generic AI slop, corporate buzzwords, and template UI anti-patterns.
---

# Anti-Slop Audit Skill

Use this skill when auditing or reviewing the portfolio codebase to ensure top-tier human craftsmanship.

## Step-by-Step Audit Procedure

1. **Run Static Slop Check**:
   ```bash
   npm run check:slop
   ```
   Inspect any reported buzzwords, banned phrases, or generic placeholders.

2. **Visual & Styling Review**:
   - Verify that colors use semantic design tokens (`bg-background`, `text-typography-body`, `border-border`).
   - Check that no generic purple/cyan neon blobs or tacky gradient text exist without deliberate design intent.
   - Verify responsive behavior on mobile (`sm:`, `md:`, `lg:` breakpoints).

3. **Content & Copywriting Review**:
   - Read hero, about, project descriptions, and experience entries out loud.
   - If it sounds like a LinkedIn bot or generic resume template, rewrite it with genuine personality, specific metrics, and real context.

4. **Code Quality**:
   - Ensure clean TypeScript types in `src/types/portfolio.ts`.
   - Ensure `src/data/portfolioData.ts` holds all editable personal information for easy maintenance.

