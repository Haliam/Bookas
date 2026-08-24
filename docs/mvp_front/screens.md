---
title: Bookas – MVP Screens
description: Minimal screen inventory for the Bookas MVP, provider-focused, mapped to API endpoints.
version: 1.0.0
date: 2026-06-06
author: Haliam Perez
---

# MVP Screens

## Auth — public, no layout wrapper

| Screen              | Route                  | API endpoint                            |
| ------------------- | ---------------------- | --------------------------------------- |
| Landing             | `/`                    | —                                       |
| Login               | `/login`               | `POST /api/v1/accounts/login`           |
| Register            | `/register`            | `POST /api/v1/accounts/register`        |
| Forgot Password     | `/forgot-password`     | `POST /api/v1/accounts/forgot-password` |
| Reset Password      | `/reset-password`      | `POST /api/v1/accounts/reset-password`  |
| Provider Onboarding | `/onboarding-provider` | — (3 intro slides → create company)     |

## Provider — inside ProviderLayout (auth-gated)

| Screen                | Route                                                         | API endpoint                                                           |
| --------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Dashboard             | `/provider`                                                   | `GET /api/v1/appointments/as-provider`                                 |
| Calendar              | `/provider/calendar`                                          | `GET /api/v1/appointments/as-provider` (reuse)                         |
| Appointments          | `/provider/appointments`                                      | `GET /api/v1/appointments/as-provider`                                 |
| Appointment Detail    | `/provider/appointments/:id`                                  | `GET /api/v1/appointments/:id` · `PUT /api/v1/appointments/:id/status` |
| Companies             | `/provider/companies`                                         | `GET /api/v1/companies/my-companies`                                   |
| Create / Edit Company | `/provider/companies/create` · `/provider/companies/:id/edit` | `POST` · `PUT /api/v1/companies`                                       |
| Services              | `/provider/companies/:id/services`                            | `GET /api/v1/companies/:id/services`                                   |
| Create / Edit Service | `/provider/companies/:id/services/create`                     | `POST` · `PUT /api/v1/companies/:id/services/:serviceId`               |
| Profile               | `/provider/profile`                                           | `GET` · `PUT /api/v1/users/profile`                                    |
| Settings              | `/provider/settings`                                          | local only (MVP)                                                       |

**Total MVP screens: 15**

---

## Screens to remove from router

| Screen             | File                    | Reason                                       |
| ------------------ | ----------------------- | -------------------------------------------- |
| Generic Onboarding | `Onboarding.tsx`        | Redundant — `ProviderOnboarding` covers this |
| Role Switch        | `RoleSwitchLanding.tsx` | Deleted per design decisions                 |

---

## Deferred screens (no API yet)

These files can stay as stubs but should not appear in navigation until the API is ready:

- `Notifications.tsx` — no API endpoint
- `Reports.tsx` — no API endpoint
- `Hours.tsx` — no API endpoint
- `BlockTime.tsx` — no API endpoint

---

## Navigation structure

```
Landing
├── Login ──────────────────────┐
│   └── Forgot Password         │
└── Register ───────────────────┤
                                 ↓
                    ProviderOnboarding
                                 ↓
               ProviderLayout (auth guard)
               ├── Dashboard  (index)
               ├── Calendar
               ├── Appointments
               │   └── Appointment Detail
               ├── Companies
               │   ├── Create / Edit Company
               │   └── Services
               │       └── Create / Edit Service
               ├── Profile
               └── Settings
```

Bottom nav tabs (mobile): Dashboard · Appointments · Companies · Profile
Desktop sidebar: same 4 links + Settings
