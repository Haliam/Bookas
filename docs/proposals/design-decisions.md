---
title: Bookas – Design Decisions & Open Questions
description: Short log of design decisions, open questions, and recommended resolutions for the Bookas frontend.
version: 1.0.0
date: 2026-06-06
author: Haliam Perez
---

# Design Decisions & Open Questions

This file captures the unresolved UX/architectural questions from the original notes and recommends decisions to move forward.

- Onboarding flow: Recommend a single default flow offering two quick paths:
  - "Quick Start": Create Company → Add 1 Service → Publish booking link
  - "Detailed Setup": Create Company → Add Services → Configure Availability → Configure Payments
  Choose "Quick Start" as default; allow switching to "Detailed Setup" later.

- Onboarding demo appointment: Create a pre-populated demo appointment showing how to accept/cancel/reschedule. It should be easy to dismiss.

- Cancel vs Reject: Use distinct semantics:
  - Cancel: action by customer to cancel their booking (API: `PUT /appointments/{id}/cancel`).
  - Reject: action by provider to refuse a booking request (API: use `PUT /appointments/{id}/status` with `Rejected`/`Cancelled` status). Document both in the UI.

- Invitations / booking cards: Allow providers to generate a shareable card (URL + preview) after creating a company. Clicking the card opens the public booking flow (no auth required).

- Notifications UI: Show a compact bell in the top bar; clicking opens a slide-over with recent notifications. If notifications need persistence, create API endpoints later.

- Calendar features vs API:
  - Visibility-only calendar can be implemented now using appointments data.
  - Provider-controlled working hours and blocking slots require new API endpoints or a lightweight persistence layer. Defer backend design and add pragmatic client-side defaults until endpoints exist.

- Payments:
  - Implement client checkout screens and wire to API UC-35 (Stripe integration on backend). Treat payments as optional for MVP (allow cash/no-pay methods).

- Analytics & Reports: Keep dashboards frontend-driven using aggregated data endpoints (not implemented). Defer report generation until product needs are concrete.

- Settings: Start with a minimal settings page (profile, company info, notification toggles). Expand as backend endpoints become available.

- File & docs placement: Move notes from `src/docs/BOOKAS NOTES.txt` into `docs/features/use-cases.md` and `docs/proposals/design-decisions.md` at the repository root so they match BookPro's structure.

---

Next steps
- Prioritize API endpoints for calendar management and notifications if provider persistence is required.
- Add payment UI components and connect them to the payment endpoints already present in the API.
- Iterate on onboarding flows after a short user test with the quick-start default.
