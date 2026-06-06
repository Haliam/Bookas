---
title: Bookas – Use Cases (aligned with BookPro API)
description: Frontend use cases aligned with the BookPro Booking Service API, sequenced for provider onboarding and customer flows.
version: 1.0.0
date: 2026-06-06
author: Haliam Perez
---

# Bookas – Use Cases (Frontend)

This file lists the frontend use cases and maps them to the BookPro API use cases where applicable. Missing API support is noted so implementation can be prioritized.

## Mapping notes
- Where an API UC exists we map to `API UC-##` and include the route.
- Items marked `[NO API YET]` indicate frontend features that have no direct backend endpoint today.

## 1. Onboarding
- UC-001: User Registration → API UC-01 (`POST /api/v1/accounts/register`)
- UC-002: User Login → API UC-02 (`POST /api/v1/accounts/login`)
- UC-003: Google Login → API UC-03 (`POST /api/v1/accounts/google-login`) — add if providing social auth
- UC-004: Password Recovery → API UC-04 / UC-05 (`POST /api/v1/accounts/forgot-password`, `POST /api/v1/accounts/reset-password`)
- UC-005: Provider Onboarding (minimum info) → uses `Create Company` + `Add Service` flows (see below)

## 2. Profile
- UC-006: View Provider Profile → API UC-06 (`GET /api/v1/users/profile`)
- UC-007: Edit Provider Profile → API UC-08 (`PUT /api/v1/users/profile`)

## 3. Company (Provider)
- UC-008: Create Company → API UC-09 (`POST /api/v1/companies`)
- UC-009: View Companies → API UC-10 (`GET /api/v1/companies`)
- UC-010: Edit Company → API UC-13 (`PUT /api/v1/companies/{id}`)
- UC-011: Delete Company → [NO API YET] (consider restricting or implementing)
- UC-012: Search Companies → API UC-14 (`GET /api/v1/companies/search`)

## 4. Services (Offerings)
- UC-013: View Services → API UC-22 (`GET /api/v1/companies/{companyId}/services`)
- UC-014: Create Service → API UC-21 (`POST /api/v1/companies/{companyId}/services`)
- UC-015: Edit Service → API UC-23 (`PUT /api/v1/companies/{companyId}/services/{serviceId}`)
- UC-016: Delete Service → API UC-24 (`DELETE /api/v1/companies/{companyId}/services/{serviceId}`)

## 5. Calendar (Frontend-first; limited API support)
- UC-017: View Calendar → [FRONTEND]
- UC-018: Configure Working Hours → [NO API YET]
- UC-019: Block Time Slots → [NO API YET]
- UC-020: Unblock Time Slots → [NO API YET]

Note: Calendar features are primarily UI/UX and will require new backend endpoints or a document store if provider-side scheduling is to be persisted.

## 6. Appointments — Customer flows
- UC-021: Get Available Slots → API UC-15 (`GET /api/v1/companies/{companyId}/available-slots`)
- UC-022: Book an Appointment → API UC-25 (`POST /api/v1/appointments`)
- UC-023: View My Appointments → API UC-26 (`GET /api/v1/appointments`)
- UC-024: Get Appointment Details → API UC-27 (`GET /api/v1/appointments/{id}`)
- UC-025: Update/Reschedule Appointment → API UC-28 (`PUT /api/v1/appointments/{id}`)
- UC-026: Cancel Appointment → API UC-29 (`PUT /api/v1/appointments/{id}/cancel`)
- UC-027: Delete Appointment → API UC-30 (`DELETE /api/v1/appointments/{id}`)
- UC-028: Upcoming Appointments view → API UC-32 (`GET /api/v1/appointments/upcoming`)
- UC-029: Appointment History → API UC-33 (`GET /api/v1/appointments/history`)

## 7. Appointments — Provider flows
- UC-030: View Appointments as Provider → API UC-34 (`GET /api/v1/appointments/as-provider`)
- UC-031: Update Appointment Status (Accept/Confirm/Reject) → API UC-31 (`PUT /api/v1/appointments/{id}/status`)

Mapping note: combine "accept" and "reject" into the `Update Appointment Status` flow to avoid duplicate UCs.

## 8. Payments (Important — add to frontend)
- UC-032: Process Payment → API UC-35 (`POST /api/v1/payments/process`)
- UC-033: Get Payment Status → API UC-36 (`GET /api/v1/payments/{id}/status`)
- UC-034: Refund Payment → API UC-37 (`POST /api/v1/payments/{paymentId}/refund`)
- UC-035: Payment History → API UC-38 (`GET /api/v1/payments/history`)
- UC-036: Add/View Payment Methods → API UC-39 / UC-40 (`POST/GET /api/v1/payments/methods/{userId}`)

Note: Payments are defined on the API but were missing from the original Bookas notes — add them to the checkout flow.

## 9. Notifications & Settings
- UC-037: View Notifications → [NO API YET]
- UC-038: Manage Settings → [NO API YET]
- UC-039: Manage Notification Preferences → [NO API YET]

## 10. Analytics & Reports
- UC-040: View Analytics Dashboard → [NO API YET]
- UC-041: Generate Reports → [NO API YET]

---

## Frontend sequencing recommendation (minimal provider onboarding)
1. Sign up / Login
2. Create Company (basic details)
3. Add one Service (name, duration, price)
4. Configure simple availability (quick UI) — if backend missing, use client-side defaults
5. Publish booking link and create first example appointment (onboarding demo)
6. Add payment method (optional)

This sequence reduces friction while showing value quickly.
