/**
 * ─────────────────────────────────────────────────────────────
 *  PUBLIC LAYOUT — LOCKED (PHASE 2 ONLY)
 * ─────────────────────────────────────────────────────────────
 *
 *  ⚠️ DO NOT USE OR MODIFY IN PHASE 1 ⚠️
 *
 *  This file exists as a FUTURE ARCHITECTURAL PLACEHOLDER.
 *  It is intentionally inactive and must NOT be imported,
 *  referenced, or wired into routing during PHASE 1.
 *
 *  PURPOSE (FUTURE — PHASE 2):
 *  - Wrap all public-facing pages (marketing, SEO, informational)
 *  - Centralize shared UI such as Navbar and Footer
 *  - Enforce consistent public layout boundaries
 *
 *  CURRENT RULES (PHASE 1 — STRICT):
 *  - DO NOT add Navbar, Footer, or any markup here
 *  - DO NOT add styles, hooks, effects, or logic
 *  - DO NOT refactor existing pages to use this layout
 *  - DO NOT modify this file unless explicitly instructed
 *
 *  This file MUST remain visually and behaviorally inert.
 *
 *  Any deviation from these rules is considered a violation
 *  of the PHASE 1 refactor constraints.
 *
 *  Activation of this layout will be done explicitly
 *  in PHASE 2 via a dedicated migration prompt.
 *
 * ─────────────────────────────────────────────────────────────
 */

import type { ReactNode } from 'react';

type PublicLayoutProps = {
  children: ReactNode;
};

export default function PublicLayout({ children }: PublicLayoutProps) {
  // INTENTIONALLY NO WRAPPERS, NO MARKUP, NO SIDE EFFECTS
  return <>{children}</>;
}
