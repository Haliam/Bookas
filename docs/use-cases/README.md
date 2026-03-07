# Bookas Use Cases

This directory contains detailed use case documentation for the Bookas booking management system.

## Use Cases (Sequential)

- [UC-001: User Registration](./authentication/uc_001_user_registration.md)
- [UC-002: User Login](./authentication/uc_002_user_login.md)
- [UC-003: Password Recovery](./authentication/uc_003_password_recovery.md)
- [UC-004: Role Switching](./authentication/uc_004_role_switching.md)
- [UC-005: General User Onboarding](./onboarding/uc_001_general_user_onboarding.md)
- [UC-006: Provider Onboarding](./onboarding/uc_002_provider_onboarding.md)
- [UC-007: View Companies](./company-management/uc_001_view_companies.md)
- [UC-008: Create Company](./company-management/uc_002_create_company.md)
- [UC-009: Edit Company](./company-management/uc_003_edit_company.md)
- [UC-010: Delete Company](./company-management/uc_004_delete_company.md)
- [UC-011: View Services](./service-management/uc_001_view_services.md)
- [UC-012: Create Service](./service-management/uc_002_create_service.md)
- [UC-013: Edit Service](./service-management/uc_003_edit_service.md)
- [UC-014: Delete Service](./service-management/uc_004_delete_service.md)
- [UC-015: View Appointments](./appointment-management/uc_001_view_appointments.md)
- [UC-016: View Appointment Details](./appointment-management/uc_002_view_appointment_details.md)
- [UC-017: Accept/Reject Appointment](./appointment-management/uc_003_accept_reject_appointment.md)
- [UC-018: Cancel Appointment](./appointment-management/uc_004_cancel_appointment.md)
- [UC-019: Reschedule Appointment](./appointment-management/uc_005_reschedule_appointment.md)
- [UC-020: View Calendar](./calendar-scheduling/uc_001_view_calendar.md)
- [UC-021: Configure Working Hours](./calendar-scheduling/uc_002_configure_working_hours.md)
- [UC-022: Block Time Slots](./calendar-scheduling/uc_003_block_time_slots.md)
- [UC-023: Unblock Time Slots](./calendar-scheduling/uc_004_unblock_time_slots.md)
- [UC-024: View Provider Profile](./profile-settings/uc_001_view_provider_profile.md)
- [UC-025: Edit Provider Profile](./profile-settings/uc_002_edit_provider_profile.md)
- [UC-026: Manage Settings](./profile-settings/uc_003_manage_settings.md)
- [UC-027: View Notifications](./notifications-reports/uc_001_view_notifications.md)
- [UC-028: Manage Notification Preferences](./notifications-reports/uc_002_manage_notification_preferences.md)
- [UC-029: Generate Reports](./notifications-reports/uc_003_generate_reports.md)
- [UC-030: View Analytics Dashboard](./notifications-reports/uc_004_view_analytics_dashboard.md)
- [UC-031: Offline Mode](./special-functions/uc_001_offline_mode.md)

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

*Last updated: March 6, 2026*



