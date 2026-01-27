# BuildVest Frontend (UI Refactor)

This repository contains the **React + TypeScript frontend refactor** of the BuildVest platform.

It is a **UI-first rewrite workspace**, created to safely convert the existing
HTML + Tailwind implementation into a modern, maintainable React codebase —
**without touching backend logic or APIs** at this stage.

---

## 🎯 Purpose of This Repository

This repo exists to:

- Convert the existing **HTML + Tailwind UI** into **React + TypeScript**
- Preserve **UX, copy, layout, and visual intent exactly**
- Establish a clean, scalable frontend architecture
- Serve as the **source of truth for future API contracts**
- Enable aggressive AI-assisted refactoring without risking the main product

> This is **not** a redesign.
> This is **not** a backend implementation.
> This is a **faithful UI refactor**.

---

## 🧭 Project Status

**Current Phase:** Frontend Refactor (UI-only)

- ✅ React + TypeScript setup
- ✅ Layouts, pages, and components
- 🚫 No backend APIs
- 🚫 No authentication logic
- 🚫 No database, Prisma, or Solana logic
- 🚫 No production integrations

All data used at this stage is **mocked**.

---

## 🗂 Repository Structure

.
├── legacy/                        # Read-only legacy HTML source
│   └── pages/                     # Original BuildVest HTML + Tailwind files
│
├── src/                           # New React + TypeScript frontend
│   ├── layouts/                   # Role-aware layout shells
│   ├── pages/                     # Route-level pages
│   │   ├── public/
│   │   ├── auth/
│   │   ├── investor/
│   │   ├── originator/
│   │   └── superadmin/
│   ├── components/                # Reusable UI components
│   │   ├── ui/
│   │   ├── forms/
│   │   ├── cards/
│   │   ├── tables/
│   │   └── modals/
│   ├── features/                  # Business-domain groupings (UI only)
│   ├── hooks/
│   ├── types/
│   └── utils/
│
├── COPILOT_SYSTEM_PROMPT.md
└── README.md


## 🔒 Legacy UI (IMPORTANT)

The `/legacy/pages` directory contains the **original BuildVest HTML files**.

**Rules:**
- These files are **read-only**
- Do **not** modify them
- They serve as the **visual and UX reference**
- All React components must faithfully reflect these files

If something differs between React and legacy HTML, the **legacy HTML is correct**.

---

## 🧠 AI Usage Rules

This repo is designed for **Copilot Pro Agent–assisted development**.

Before starting any AI coding session:
1. Open `COPILOT_SYSTEM_PROMPT.md` (or the short version)
2. Paste it at the **start of the Copilot Agent session**
3. Then issue phase-specific prompts

If Copilot begins to drift:
> “Re-read and strictly follow the Copilot System Prompt.”

---

## 🚧 What Is Explicitly Out of Scope (For Now)

The following will be implemented **later** and must NOT appear in this repo yet:

- Backend APIs or endpoints
- Prisma schemas or database logic
- JWT authentication or session management
- Wallet logic or balances
- Solana SPL token operations
- Real KYC integrations
- Production environment config

This repo is **frontend-only** by design.

---

## 🔮 Future Phases (Planned)

Once the UI is stable, this repo will inform:

1. API contract design
2. Backend implementation (Node.js + Prisma)
3. Authentication & KYC workflows
4. Solana tokenization logic
5. Final integration with the main BuildVest platform

At that point, this frontend may:
- Be merged into the main BuildVest repo, or
- Remain a standalone frontend service

---

## 🧑‍💻 Contribution Philosophy

- Clarity over cleverness
- Faithful conversion over redesign
- Small components over abstractions
- UI first, backend later

This repo prioritizes **correctness and maintainability** over speed.

---

## 📌 Final Note

This repository is a **controlled refactor environment**.

Its success is measured by:
- How closely the React UI matches the original HTML
- How clearly it communicates product intent
- How easily backend APIs can be derived from it later

If you’re unsure whether something belongs here yet — it probably doesn’t.

---
