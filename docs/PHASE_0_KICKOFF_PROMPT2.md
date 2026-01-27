# PHASE_0_KICKOFF_PROMPT.md
## BuildVest Frontend Refactor – Phase 0 (Kickoff)

Read carefully before acting.

You are working inside the **buildvest-frontend** repository.
This repository is a **UI-only refactor workspace** for BuildVest.

---

## SOURCE OF TRUTH (CRITICAL)

The `/legacy` directory is a **direct, frozen snapshot of the original BuildVest repository root**.

It contains:
- `legacy/index.html` — canonical public homepage
- `legacy/css/` — legacy Tailwind + custom CSS
- `legacy/img/` — legacy static assets
- `legacy/pages/` — additional HTML pages (e.g. investor landing)

All **files and relative paths are intentionally preserved**.

Legacy HTML files reference:
- `../css/*`
- `../index.html`
- shared image paths

🚨 **Do not modify, rename, move, or reorganize anything inside `/legacy`.**  
If there is any conflict or ambiguity, **legacy files are always correct**.

---

## PHASE 0 OBJECTIVE

PHASE 0 is about **scaffolding and discipline**, not feature work.

Your objectives are to:

1. Prepare a clean React + TypeScript frontend structure
2. Establish folder conventions that match the repository README
3. Create placeholder layout shells
4. Set the repo up for safe, incremental HTML → React conversion later

🚫 Do NOT convert any legacy HTML pages yet unless explicitly instructed.

---

## WHAT YOU MAY DO

- Initialize or validate React + TypeScript setup
- Create the `/src` folder structure exactly as documented
- Create empty or placeholder layout components:
  - `PublicLayout`
  - `InvestorLayout`
  - `OriginatorLayout`
  - `SuperAdminLayout`
- Add comments explaining intended usage
- Add minimal placeholder files where helpful

All code must be **TypeScript**.

---

## WHAT YOU MUST NOT DO

- Do NOT modify anything in `/legacy`
- Do NOT change file paths or references
- Do NOT copy CSS or images into `/src` yet
- Do NOT invent APIs, data models, or backend logic
- Do NOT add authentication, JWT, wallet, or Solana logic
- Do NOT add routing guards or role enforcement
- Do NOT redesign or “improve” UI
- Do NOT introduce new UI libraries

---

## REQUIRED STRUCTURE (STRICT)

Create and follow this structure exactly:

```
src/
├── layouts/
├── pages/
│   ├── public/
│   ├── auth/
│   ├── investor/
│   ├── originator/
│   └── superadmin/
├── components/
│   ├── ui/
│   ├── forms/
│   ├── cards/
│   ├── tables/
│   └── modals/
├── features/
├── hooks/
├── types/
└── utils/
```

Do not invent alternatives.

---

## OUTPUT EXPECTATIONS

- Keep files small and readable
- Prefer comments over assumptions
- If uncertain, STOP and ASK before implementing
- Leave TODOs for future phases instead of implementing logic

---

## AI DISCIPLINE

You must strictly follow:
- `COPILOT_SYSTEM_PROMPT.md`
- The repository README

If there is any conflict, **the README and Copilot System Prompt win**.

---

## FINAL INSTRUCTION

Acknowledge this prompt first.

Then:
1. Propose the exact PHASE 0 steps you will take
2. Wait for confirmation
3. Only then begin writing code
