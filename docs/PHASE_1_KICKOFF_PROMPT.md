# PHASE_1_KICKOFF_PROMPT.md
## BuildVest Frontend Refactor — Phase 1A (Public Entry Pages)

> Paste this **after** `COPILOT_SYSTEM_PROMPT.md`.  
> Paste **only after** `PHASE_0_EXECUTOR.md` has reported **PHASE 0 COMPLETE**.

---

## PHASE CONTEXT

You are now entering **PHASE 1A** of the BuildVest frontend refactor.

PHASE 1A is strictly limited to **core public entry pages**.  
Additional public pages will be handled in later sub-phases.

This phase converts legacy HTML into React + TypeScript **faithfully and mechanically**.

---

## PRE-CONDITION (MANDATORY)

Before doing anything else:

- Confirm PHASE 0 completed successfully
- Confirm `/legacy` remains unchanged
- If PHASE 0 is not complete, STOP immediately

---

## SCOPE OF PHASE 1A (STRICT)

### You MAY work on:
- `legacy/index.html` — canonical public homepage
- `legacy/pages/landing_page.html` — investor marketing landing page

### You MUST NOT work on:
- Any other public pages
- Authentication pages
- Investor dashboard pages
- Originator pages
- SuperAdmin pages
- KYC flows
- Secondary market pages
- Any backend-related logic

🚨 **Other public pages are explicitly out of scope for PHASE 1A.**

---

## PHASE 1A OBJECTIVE

Your objectives are to:

1. Convert the two public entry pages into React + TypeScript
2. Preserve **layout, copy, spacing, and visual intent exactly**
3. Produce clean, readable React components
4. Introduce **no business logic**

This is a **faithful refactor**, not a redesign.

---

## ABSOLUTE CONSTRAINTS (NON-NEGOTIABLE)

- Do NOT modify anything inside `/legacy`
- Do NOT change text, copy, headings, or wording
- Do NOT redesign layout or spacing
- Do NOT invent data, APIs, or backend logic
- Do NOT introduce authentication logic
- Do NOT add routing guards
- Do NOT add new UI libraries
- Preserve **all Tailwind classes verbatim**
- All code must be **TypeScript**

---

## CONVERSION RULES

For each legacy page:

1. Read the legacy HTML carefully
2. Create a **single React page component first**
3. Extract subcomponents only if:
   - A section is visually distinct, AND
   - Extraction improves readability (not abstraction)
4. Keep extracted components presentational
5. Use mock data only if required
6. Avoid premature props drilling

If unsure whether to extract — **do not extract**.

---

## FILE PLACEMENT (STRICT)

| Legacy File | React Target |
|------------|--------------|
| `legacy/index.html` | `src/pages/public/HomePage.tsx` |
| `legacy/pages/landing_page.html` | `src/pages/public/InvestorLandingPage.tsx` |

Layouts:
- Wrap public pages with `PublicLayout`
- Do NOT modify layout behavior

---

## ASSETS & STYLES (CRITICAL)

- Do NOT copy CSS or images yet
- Assume legacy CSS will be imported later
- Preserve class names and asset references as-is
- If an asset path is unclear, leave a TODO comment

---

## STEP-BY-STEP EXECUTION MODEL

For **each page**, follow this order:

1. Acknowledge which legacy file you are converting
2. Briefly describe the intended React page structure
3. Generate the React page component
4. STOP and wait for confirmation before proceeding

🚫 Do NOT batch-convert pages.

---

## QUALITY BAR

Each React page must:

- Visually match the legacy HTML
- Compile cleanly with TypeScript
- Contain no business or backend logic
- Be readable and maintainable

When in doubt:
> **Faithfulness > cleverness**

---

## FAILURE MODE

If you encounter:
- Ambiguous markup
- Unclear asset paths
- Layout inconsistencies

STOP and report the issue.  
Do NOT guess or fix.

---

## FINAL INSTRUCTION

Acknowledge this prompt.

Then:
1. Ask which page to convert first (`index.html` or `landing_page.html`)
2. Wait for explicit confirmation
3. Convert **only one page at a time**
