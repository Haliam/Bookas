---
title: Bookas – API Contracts
description: Key request/response schemas for Bookas frontend integration with the BookPro API.
version: 1.0.0
date: 2026-06-06
author: Haliam Perez
---

# API Contracts

**Base URL (dev):** `https://localhost:7093`
**Auth:** All authenticated endpoints require `Authorization: Bearer {accessToken}`
**Format:** JSON camelCase (FastEndpoints default)

---

## Error shape (all failures)

```json
{
  "success": false,
  "code": "domain.action.reason",
  "message": "Human-readable message",
  "details": { "fieldName": ["error"] }
}
```

HTTP codes: `400` Validation · `401` Unauthorized · `403` Forbidden · `404` Not found · `409` Conflict · `500` Server error

---

## Auth

**POST /api/v1/accounts/register**

```json
// Request
{ "email": "user@example.com", "name": "Ana García", "password": "Secure123!", "dateBirth": "1990-05-15", "phoneNumber": 5551234567 }
// Response 200
{ "accessToken": "eyJ...", "refreshToken": "...", "userId": 1 }
```

**POST /api/v1/accounts/login**

```json
// Request
{ "email": "user@example.com", "password": "Secure123!" }
// Response 200
{ "accessToken": "eyJ...", "refreshToken": "..." }
```

**POST /api/v1/auth/refresh-token** _(requires valid JWT)_

```json
// Response 200
{ "accessToken": "eyJ..." }
```

**POST /api/v1/accounts/forgot-password** · `{ "email": "..." }` → `{}` (no account confirmation revealed)
**POST /api/v1/accounts/reset-password** · `{ "token": "...", "newPassword": "..." }` → `{}`

---

## Users

**GET /api/v1/users/profile**

```json
// Response 200
{
  "id": 1,
  "name": "Ana García",
  "email": "user@example.com",
  "phone": "+34 612 345 678",
  "dateOfBirth": "1990-05-15",
  "profilePictureUrl": "https://..."
}
```

**PUT /api/v1/users/profile**

```json
// Request (all optional)
{
  "name": "Ana García",
  "phoneNumber": "+34 612 345 678",
  "dateOfBirth": "1990-05-15"
}
// Response 200 → same shape as GET
```

---

## Companies

**GET /api/v1/companies/my-companies** → `Company[]`

```json
// Company shape
{
  "id": 1,
  "companyName": "Zen Studio",
  "phoneNumber": "...",
  "companyType": { "id": 1, "name": "Spa" },
  "address": { "street": "...", "city": "Madrid", "country": "Spain" }
}
```

**POST /api/v1/companies**

```json
// Request
{
  "name": "Zen Studio",
  "phoneNumber": "+34 91 234 5678",
  "companyTypeId": 1,
  "address": {
    "street": "Calle Serrano 45",
    "city": "Madrid",
    "country": "Spain"
  }
}
// Response 201 → Company shape
```

**PUT /api/v1/companies/:id** · same body as POST → updated Company

**GET /api/v1/company-types** → `[{ "id": 1, "name": "Hair Salon", "description": "..." }]`

---

## Services

**GET /api/v1/companies/:companyId/services** → `Service[]`

```json
// Service shape
{
  "id": 1,
  "name": "Corte de cabello",
  "description": "...",
  "durationMinutes": 30,
  "price": 25.0,
  "isActive": true
}
```

**POST /api/v1/companies/:companyId/services**

```json
// Request
{
  "name": "Corte de cabello",
  "description": "...",
  "durationMinutes": 30,
  "price": 25.0
}
// Response 201 → Service shape
```

**PUT /api/v1/companies/:companyId/services/:serviceId** · same body → updated Service
**DELETE /api/v1/companies/:companyId/services/:serviceId** → `{}`

---

## Appointments

**GET /api/v1/appointments/as-provider** → `Appointment[]`

```json
// Appointment shape
{
  "id": 1,
  "companyId": 1,
  "companyName": "Zen Studio",
  "serviceId": 1,
  "serviceName": "Corte de cabello",
  "userId": 2,
  "userName": "Carlos López",
  "date": "2026-06-10",
  "time": "10:00",
  "durationMinutes": 30,
  "price": 25.0,
  "status": "Pending",
  "isPaid": false,
  "notes": ""
}
```

**GET /api/v1/appointments/:id** → single Appointment shape

**PUT /api/v1/appointments/:id/status**

```json
// Request
{ "status": "Confirmed" }
// Status values: "Pending" | "Confirmed" | "Cancelled" | "Completed" | "NoShow"
// Response 200 → updated Appointment
```

**GET /api/v1/companies/:companyId/available-slots?serviceId=1&date=2026-06-10**

```json
// Response 200
{ "slots": ["09:00", "09:30", "10:00", "11:00"] }
```
