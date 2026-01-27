# PHASE_0_CHECKLIST.md
## BuildVest Frontend (UI Refactor) — Phase 0 Completion Checklist

> PHASE 0 is complete **only if every required item below is satisfied**.
> If anything is unchecked, do **not** proceed to PHASE 1.

---

## 1️⃣ Repository Integrity

### Legacy Snapshot (NON-NEGOTIABLE)
- [ ] `/legacy/` exists and mirrors the original repo root exactly
- [ ] `legacy/index.html` exists and opens correctly
- [ ] `legacy/css/` exists with original CSS files intact
- [ ] `legacy/img/` exists with original image assets intact
- [ ] No legacy file has been modified, renamed, or reorganized
- [ ] Relative paths inside legacy HTML (`../css`, `../index.html`) still resolve

---

## 2️⃣ Documentation & Guardrails

- [ ] `README.md` reflects UI-only refactor scope
- [ ] `README.md` documents frozen legacy snapshot correctly
- [ ] `README.md` identifies `legacy/index.html` as canonical homepage
- [ ] `COPILOT_SYSTEM_PROMPT.md` exists
- [ ] `PHASE_0_KICKOFF_PROMPT.md` exists
- [ ] Copilot instructions clearly state `/legacy` is read-only

---

## 3️⃣ React + TypeScript Scaffold

- [ ] React project is initialized
- [ ] TypeScript is enabled and compiling
- [ ] No backend dependencies are installed
- [ ] No auth, wallet, Solana, or Prisma code exists
- [ ] No API clients or server logic exist

---

## 4️⃣ Folder Structure (STRICT)

Confirm the following structure exists **exactly**:

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

- [ ] No extra folders
- [ ] No alternative naming conventions
- [ ] No legacy files inside `src/`

---

## 5️⃣ Layout Shells (PLACEHOLDERS ONLY)

- [ ] `PublicLayout.tsx` exists
- [ ] `InvestorLayout.tsx` exists
- [ ] `OriginatorLayout.tsx` exists
- [ ] `SuperAdminLayout.tsx` exists
- [ ] Layouts accept `children`
- [ ] Layouts contain no business logic
- [ ] Layouts contain no auth logic
- [ ] Layouts are clearly commented as placeholders

---

## 6️⃣ Code Discipline

- [ ] All new code is TypeScript
- [ ] No `any` types unless explicitly justified
- [ ] No premature abstractions
- [ ] Files are readable and reasonably sized
- [ ] TODOs used instead of implementing future logic

---

## 7️⃣ AI Discipline Check

- [ ] Copilot sessions always start with:
  - [ ] `COPILOT_SYSTEM_PROMPT.md`
  - [ ] `PHASE_0_KICKOFF_PROMPT.md`
- [ ] Copilot has **not**:
  - [ ] Invented APIs
  - [ ] Added routing guards
  - [ ] Moved legacy files
  - [ ] Copied CSS/images into `src`
  - [ ] Introduced new UI libraries

---

## 8️⃣ Sanity Verification

- [ ] `legacy/index.html` renders correctly in browser
- [ ] `legacy/pages/landing_page.html` renders correctly
- [ ] No React code imports from `/legacy`
- [ ] No HTML → React conversion started prematurely

---

## ✅ PHASE 0 SIGN-OFF

Only sign off PHASE 0 if **all** boxes above are checked.

**PHASE 0 COMPLETE:** ⬜ YES ⬜ NO  
**Date:** __________  
**Verified by:** __________

---

## 🚦 Gate Rule

🚫 **Do not begin PHASE 1 (Public Pages)** unless PHASE 0 is fully complete.

PHASE 1 assumes:
- Stable scaffolding
- Frozen legacy source
- AI discipline fully enforced
