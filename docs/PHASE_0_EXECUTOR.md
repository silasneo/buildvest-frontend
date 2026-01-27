# PHASE_0_EXECUTOR.md
## BuildVest Frontend Refactor — Phase 0 Self‑Validating Executor

> Paste this prompt **after** `COPILOT_SYSTEM_PROMPT.md` when starting a Copilot Pro Agent session.
> This executor replaces manual checklists by validating PHASE 0 requirements and
> performing only missing setup steps.

---

## MODE OF OPERATION

You are operating in **PHASE 0** of the BuildVest frontend refactor.

Your responsibilities:

1. **VERIFY** whether each PHASE 0 requirement is already satisfied  
2. **EXECUTE** the minimal action required *only if something is missing*  
3. **DO NOTHING** for requirements that are already satisfied  
4. **STOP** once PHASE 0 is fully complete  

You must work **sequentially and defensively**.  
Never assume PHASE 0 is complete without verification.

---

## ABSOLUTE CONSTRAINTS (NON‑NEGOTIABLE)

- Do NOT modify anything inside `/legacy`
- Do NOT change legacy paths, names, or structure
- Do NOT invent APIs, auth logic, backend logic, or data models
- Do NOT copy CSS or images into `/src`
- Do NOT redesign, optimize, or “improve” UI
- Do NOT introduce new UI libraries
- All code must be **TypeScript**

If any required action would violate these constraints, **STOP and REPORT** instead.

---

## STEP 1 — VERIFY LEGACY SNAPSHOT

Verify that all of the following exist:

- `/legacy/index.html`
- `/legacy/css/`


### Decision
- If **all are present** → do nothing and continue
- If **anything is missing** → STOP and report exactly what is missing  
  (Do NOT attempt to recreate or repair legacy files)

---

## STEP 2 — VERIFY DOCUMENTATION & GUARDRAILS

Verify the existence of:

- `README.md`
- `COPILOT_SYSTEM_PROMPT.md`
- `COPILOT_SYSTEM_PROMPT_SHORT.md`
- `PHASE_0_KICKOFF_PROMPT.md`

### Decision
- If any file is missing → create only the missing file(s)
- If all exist → continue without changes

Do NOT modify existing documentation.

---

## STEP 3 — VERIFY REACT + TYPESCRIPT SCAFFOLD

Verify that:

- A React project exists
- TypeScript is enabled and compiling
- No backend, auth, wallet, Prisma, or Solana dependencies exist

### Decision
- If scaffold is missing → initialize a **minimal React + TypeScript setup**
- If scaffold exists → do nothing

Do NOT add routing, state libraries, or backend dependencies.

---

## STEP 4 — VERIFY REQUIRED FOLDER STRUCTURE

Verify the following structure exists **exactly**:

```
src/
├── layouts/
├── pages/public
├── pages/auth
├── pages/investor
├── pages/originator
├── pages/superadmin
├── components/ui
├── components/forms
├── components/cards
├── components/tables
├── components/modals
├── features
├── hooks
├── types
└── utils
```

### Decision
- If any folder is missing → create only the missing folders
- If structure matches → continue

Do NOT create files unnecessarily.

---

## STEP 5 — VERIFY LAYOUT SHELLS

Verify the existence of:

- `src/layouts/PublicLayout.tsx`
- `src/layouts/InvestorLayout.tsx`
- `src/layouts/OriginatorLayout.tsx`
- `src/layouts/SuperAdminLayout.tsx`

Each layout must:
- Accept `children`
- Contain **no business logic**
- Contain **no auth logic**
- Be clearly commented as a placeholder

### Decision
- If any layout is missing → create a minimal placeholder
- If all exist → continue

Do NOT implement real logic.

---

## STEP 6 — FINAL PHASE 0 VALIDATION

Re‑scan the repository and confirm:

- No files inside `/legacy` were modified
- No HTML → React conversion has begun
- No backend logic exists
- No CSS or images were copied into `/src`

### Final Output
- If all conditions are satisfied → output **“PHASE 0 COMPLETE”** and STOP
- If any violation exists → STOP and report the violation clearly

---

## IMPORTANT

You are **not allowed** to proceed to PHASE 1.

Your final response must be **one of the following only**:

- `PHASE 0 COMPLETE`
- A clear list of missing items or violations
