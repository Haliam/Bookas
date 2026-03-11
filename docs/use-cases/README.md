# Bookas Use Cases

This directory contains detailed use case documentation for the Bookas booking management system.

---

## Provider Setup Flow — Under 5 Minutes

A new provider goes from registration to ready-to-receive-bookings in 4 mandatory steps. Everything else is optional and can be configured at any time.

```mermaid
flowchart TD
    A([📝 Register as Provider]) --> B[🎬 Welcome — 3 Quick Slides]
    B --> C[🏢 Create Company\nname · type · contact · address]
    C --> D[⚙️ Add First Service\nname · duration · price]
    D --> E[🕐 Set Working Hours\ndays & available time slots]
    E --> F([🎉 Dashboard — You're live!])

    F --> G[📅 Sample Appointment from Bookas\nLearn the flow safely]
    G --> H{Try the appointment}
    H -->|Accept it| I[See how a confirmed\nbooking looks in your calendar]
    H -->|Cancel it| J[It disappears cleanly.\nYour calendar is yours.]

    F --> K[📨 Share Booking Link\nSend your first invite to customers]
    K --> L([✅ First real booking incoming!])

    F --> M[🔒 Block Time Slots\nOptional — vacations · lunch · breaks]

    style A fill:#2C2C2C,color:#fff,stroke:#2C2C2C
    style F fill:#1BBF8A,color:#fff,stroke:#1BBF8A
    style L fill:#1BBF8A,color:#fff,stroke:#1BBF8A
    style K fill:#F5B11F,color:#2C2C2C,stroke:#F5B11F
```

### Daily Operations Loop

Once live, the provider's day-to-day cycle looks like this:

```mermaid
flowchart LR
    N([New Booking Request]) --> P{Provider Action}
    P -->|Accept| CA[Confirmed\nAppointment]
    P -->|Decline| DA[Customer Notified\nSlot Released]
    CA --> R{Change needed?}
    R -->|Reschedule| RE[Propose New Time]
    R -->|Cancel| CN[Customer Notified\nRefund Processed]
    R -->|No change| AP[Appointment\nCompleted ✓]

    style N fill:#2C2C2C,color:#fff,stroke:#2C2C2C
    style AP fill:#1BBF8A,color:#fff,stroke:#1BBF8A
```

> **Accept vs Decline vs Cancel** — These are three distinct actions:
> - **Accept** — Confirm a pending booking request (commitment made)
> - **Decline** — Refuse a pending request before any commitment (no obligation incurred)
> - **Cancel** — Break an already-confirmed commitment (may incur cancellation policy / refund)

---

## Use Cases

**28 use cases** across 8 sections. UC-001 → UC-028 follow the provider journey in order.

### Registration

| ID | Use Case | Page |
|----|----------|------|
| [UC-001](./01-registration/uc_001_user_registration.md) | User Registration | `/register` |
| [UC-002](./01-registration/uc_002_user_login.md) | User Login | `/login` |
| [UC-003](./01-registration/uc_003_password_recovery.md) | Password Recovery | `/forgot-password` |
| [UC-004](./01-registration/uc_004_provider_onboarding.md) | Provider Onboarding | `/onboarding-provider` |

> UC-004: 3 welcome slides followed by a forced redirect into company creation. Skippable but always ends at Create Company.

### Company

| ID | Use Case | Page |
|----|----------|------|
| [UC-005](./02-company/uc_005_create_company.md) | Create Company | `/provider/companies/create` |
| [UC-006](./02-company/uc_006_edit_company.md) | Edit Company | `/provider/companies/:id/edit` |
| [UC-007](./02-company/uc_007_delete_company.md) | Delete Company | `/provider/companies` |
| [UC-008](./02-company/uc_008_view_companies.md) | View Companies | `/provider/companies` |
| [UC-009](./02-company/uc_009_share_booking_link.md) | Share Booking Link | `/provider/companies/:id` |

### Services

| ID | Use Case | Page |
|----|----------|------|
| [UC-010](./03-services/uc_010_create_service.md) | Create Service | `/provider/companies/:id/services/create` |
| [UC-011](./03-services/uc_011_edit_service.md) | Edit Service | `/provider/companies/:id/services` |
| [UC-012](./03-services/uc_012_delete_service.md) | Delete Service | `/provider/companies/:id/services` |
| [UC-013](./03-services/uc_013_view_services.md) | View Services | `/provider/companies/:id/services` |

### Calendar

| ID | Use Case | Page |
|----|----------|------|
| [UC-014](./04-calendar/uc_014_configure_working_hours.md) | Configure Working Hours | `/provider/hours` |
| [UC-015](./04-calendar/uc_015_block_time_slots.md) | Block Time Slots | `/provider/block-time` |
| [UC-016](./04-calendar/uc_016_unblock_time_slots.md) | Unblock Time Slots | `/provider/block-time` |
| [UC-017](./04-calendar/uc_017_view_calendar.md) | View Calendar | `/provider/calendar` |

### Appointments

| ID | Use Case | Page |
|----|----------|------|
| [UC-018](./05-appointments/uc_018_view_appointments.md) | View Appointments | `/provider/appointments` |
| [UC-019](./05-appointments/uc_019_view_appointment_details.md) | View Appointment Details | `/provider/appointments/:id` |
| [UC-020](./05-appointments/uc_020_accept_decline_appointment.md) | Accept / Decline Appointment | `/provider/appointments/:id` |
| [UC-021](./05-appointments/uc_021_reschedule_appointment.md) | Reschedule Appointment | `/provider/appointments/:id` |
| [UC-022](./05-appointments/uc_022_cancel_appointment.md) | Cancel Appointment | `/provider/appointments/:id` |
| [UC-023](./05-appointments/uc_023_view_notifications.md) | View Notifications | `/provider/notifications` |

### Profile

| ID | Use Case | Page |
|----|----------|------|
| [UC-024](./06-profile/uc_024_edit_provider_profile.md) | Edit Provider Profile | `/provider/profile` |
| [UC-025](./06-profile/uc_025_view_provider_profile.md) | View Provider Profile | `/provider/profile` |

### Analytics

| ID | Use Case | Page |
|----|----------|------|
| [UC-026](./07-analytics/uc_026_view_analytics_dashboard.md) | View Analytics Dashboard | `/provider` (dashboard) |

> MVP: 5 summary cards (today / this week / this month / pending / cancelled) + next upcoming appointment. Charts, revenue and export are post-MVP.

### Settings

| ID | Use Case | Page |
|----|----------|------|
| [UC-027](./08-settings/uc_027_manage_settings.md) | Manage Settings | `/provider/settings` |
| [UC-028](./08-settings/uc_028_manage_notification_preferences.md) | Notification Preferences | `/provider/settings` |

> UC-028 is a section within the Settings page, not a separate screen.

---

## Use Case Template

Each use case follows this structure:

**ID**: Unique identifier  
**Name**: Short descriptive name  
**Actor**: Who performs the action  
**Preconditions**: What must be true before the use case  
**Diagram**: Visual Mermaid sequence diagram showing actor-system interaction  
**Main Flow**: Step-by-step normal flow  
**Alternative Flows**: Variations or error cases  
**Postconditions**: State after successful completion  
**Business Rules**: Constraints and validations

### Diagram Notation

All use cases include **Mermaid sequence diagrams** that visualize:
- Actor-system interactions
- Data flow between components
- Decision points and alternative paths
- Integration with external services

These diagrams render automatically in GitHub, VS Code, and other Markdown viewers that support Mermaid.

---

*Last updated: March 11, 2026*



