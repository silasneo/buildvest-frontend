# PHASE 1B–1D — Public Pages HTML → React Conversion Prompts

This document contains **step-by-step Copilot prompts** for converting the remaining
public HTML pages into React + TypeScript files.

**IMPORTANT**
- Execute these prompts **one at a time, in order**
- Do NOT batch pages
- Assume PHASE 1 rules are already loaded
- Assume `InvestorLandingPage.tsx` is complete and frozen

---

## GLOBAL CONTEXT (PASTE ONCE AT SESSION START)

You are continuing **PHASE 1** of the BuildVest frontend refactor.

This phase is a **UI-only, fidelity-first migration** from legacy HTML to React.

Global rules:
- ❌ No redesign
- ❌ No shared components
- ❌ No layouts
- ❌ No data fetching
- ❌ No routing logic
- ❌ No abstraction across pages
- ✅ One React file per HTML page
- ✅ Inline navbar and footer
- ✅ Preserve Tailwind classes and DOM order exactly

If unsure, **copy — do not improve**.

---

## 1️ ABOUT BUILDVEST

SOURCE:
```
legacy/pages/about_build_vest.html
```

TARGET:
```
src/pages/public/AboutBuildVestPage.tsx
```

PROMPT:
Convert `about_build_vest.html` into a single React + TypeScript file named
`AboutBuildVestPage.tsx`.

Rules:
- Inline navbar and footer
- Preserve all copy, spacing, and headings
- No state unless required
- No component extraction

Stop after generating this file.

---

## 2️ FREQUENTLY ASKED QUESTIONS

SOURCE:
```
legacy/pages/frequently_asked_questions.html
```

TARGET:
```
src/pages/public/FrequentlyAskedQuestionsPage.tsx
```

PROMPT:
Convert `frequently_asked_questions.html` into a single React + TypeScript file.

Rules:
- Inline FAQ accordion logic
- Use local `useState` only
- Do NOT extract FAQItem components
- Preserve accessibility attributes

Stop after generating this file.

---

## 3️ LEGAL & COMPLIANCE CENTER

SOURCE:
```
legacy/pages/legal_compliance_center.html
```

TARGET:
```
src/pages/public/LegalComplianceCenterPage.tsx
```

PROMPT:
Convert `legal_compliance_center.html` into a single React + TypeScript file.

Rules:
- Treat content as static legal text
- Preserve section ordering exactly
- No state unless already present
- Do NOT summarize or rewrite copy

Stop after generating this file.

---

## 4️ HELP & SUPPORT

SOURCE:
```
legacy/pages/help_support_page.html
```

TARGET:
```
src/pages/public/HelpSupportPage.tsx
```

PROMPT:
Convert `help_support_page.html` into a single React + TypeScript file.

Rules:
- Inline contact/help sections
- Preserve links and CTA buttons
- No backend wiring
- No form submission logic beyond mock handlers

Stop after generating this file.

---

## 5️ PUBLIC INVESTMENT MARKETPLACE (SEO)

SOURCE:
```
legacy/pages/linvestment_marketplace.html
```

TARGET:
```
src/pages/public/PublicMarketplacePage.tsx
```

PROMPT:
Convert `linvestment_marketplace.html` into a single React + TypeScript file.

Rules:
- Mock all investment data inline
- Preserve grid and card layouts
- No filtering logic beyond UI
- No API calls

Stop after generating this file.

---

## 6️ REAL ESTATE DEVELOPERS

SOURCE:
```
legacy/pages/real_estate_developers.html
```

TARGET:
```
src/pages/public/RealEstateDevelopersPage.tsx
```

PROMPT:
Convert `real_estate_developers.html` into a single React + TypeScript file.

Rules:
- Treat as marketing landing page
- Preserve hero, sections, CTAs
- No shared abstractions

Stop after generating this file.

---

## 7️ CORPORATE DEBT & PRIVATE PLACEMENTS

SOURCE:
```
legacy/pages/corporate_debt_private_placements.html
```

TARGET:
```
src/pages/public/CorporateDebtPrivatePlacementsPage.tsx
```

PROMPT:
Convert `corporate_debt_private_placements.html` into a single React + TypeScript file.

Rules:
- Preserve institutional tone and layout
- Inline all sections
- No logic extraction

Stop after generating this file.

// STOPPED HERE
---

## 8️ PRIVATE EQUITY FUNDS

SOURCE:
```
legacy/pages/private_equity_funds.html
```

TARGET:
```
src/pages/public/PrivateEquityFundsPage.tsx
```

PROMPT:
Convert `private_equity_funds.html` into a single React + TypeScript file.

Rules:
- If the "PrivateEquityFundsPage.tsx" already exist, empty it and begin code afresh.
- Preserve fund positioning content
- No dynamic behavior
- Inline everything

Stop after generating this file.

---

## 9️ INFRASTRUCTURE PROJECTS

SOURCE:
```
legacy/pages/infrastructure_projects_landing_page.html
```

TARGET:
```
src/pages/public/InfrastructureProjectsPage.tsx
```

PROMPT:
Convert `infrastructure_projects_landing_page.html` into a single React + TypeScript file.

Rules:
- Preserve storytelling flow
- Maintain CTA prominence
- No abstractions or layouts

Stop after generating this file.

---

## ✅ PHASE 1 COMPLETION CHECK

After finishing all pages:
- All public HTML pages have React equivalents
- No page imports `PublicLayout`
- Navbar & Footer are inline everywhere
- No shared UI components exist
- Visual parity confirmed

PHASE 2 must NOT begin until all checks pass.
