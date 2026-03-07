# Use Cases Quick Reference

This document provides a quick overview of all use cases in the Bookas application.

## Summary

**Total Use Cases**: 31+ core use cases covering all major functionality  
**Visualization**: All use cases include Mermaid sequence diagrams  
**Documentation Format**: Structured with preconditions, flows, postconditions, and business rules

## Use Case Index by Category

### Authentication & Access (4 use cases)
| ID | Use Case | Actor | Page | Priority |
|----|----------|-------|------|----------|
| UC-001 | User Registration | New User | `/register` | High |
| UC-002 | User Login | Registered User | `/login` | High |
| UC-003 | Password Recovery | Registered User | `/forgot-password` | Medium |
| UC-004 | Role Switching | Multi-role User | `/role-switch` | Medium |

### Onboarding (2 use cases)
| ID | Use Case | Actor | Page | Priority |
|----|----------|-------|------|----------|
| UC-005 | General User Onboarding | New User | `/onboarding` | High |
| UC-006 | Provider Onboarding | New Provider | `/onboarding-provider` | High |

### Company Management (4 use cases)
| ID | Use Case | Actor | Page | Priority |
|----|----------|-------|------|----------|
| UC-007 | View Companies | Provider | `/provider/companies` | High |
| UC-008 | Create Company | Provider | `/provider/companies/create` | High |
| UC-009 | Edit Company | Provider | `/provider/companies/:id/edit` | High |
| UC-010 | Delete Company | Provider | `/provider/companies` | Medium |

### Service Management (4 use cases)
| ID | Use Case | Actor | Page | Priority |
|----|----------|-------|------|----------|
| UC-011 | View Services | Provider | `/provider/companies/:id/services` | High |
| UC-012 | Create Service | Provider | `/provider/companies/:id/services/create` | High |
| UC-013 | Edit Service | Provider | inline/edit page | High |
| UC-014 | Delete Service | Provider | services list | Medium |

### Appointment Management (5 use cases)
| ID | Use Case | Actor | Page | Priority |
|----|----------|-------|------|----------|
| UC-015 | View Appointments | Provider | `/provider/appointments` | High |
| UC-016 | View Appointment Details | Provider | `/provider/appointments/:id` | High |
| UC-017 | Accept/Reject Appointment | Provider | appointment detail | Critical |
| UC-018 | Cancel Appointment | Provider | appointment detail | High |
| UC-019 | Reschedule Appointment | Provider | appointment detail | High |

### Calendar & Scheduling (4 use cases)
| ID | Use Case | Actor | Page | Priority |
|----|----------|-------|------|----------|
| UC-020 | View Calendar | Provider | `/provider/calendar` | High |
| UC-021 | Configure Working Hours | Provider | `/provider/hours` | High |
| UC-022 | Block Time Slots | Provider | `/provider/block-time` | High |
| UC-023 | Unblock Time Slots | Provider | `/provider/block-time` | Medium |

### Profile & Settings (3 use cases)
| ID | Use Case | Actor | Page | Priority |
|----|----------|-------|------|----------|
| UC-024 | View Provider Profile | Provider | `/provider/profile` | High |
| UC-025 | Edit Provider Profile | Provider | `/provider/profile` | High |
| UC-026 | Manage Settings | Provider | `/provider/settings` | Medium |

### Notifications & Reports (4 use cases)
| ID | Use Case | Actor | Page | Priority |
|----|----------|-------|------|----------|
| UC-027 | View Notifications | Provider | `/provider/notifications` | High |
| UC-028 | Manage Notification Preferences | Provider | `/provider/settings` | Medium |
| UC-029 | Generate Reports | Provider | `/provider/reports` | High |
| UC-030 | View Analytics Dashboard | Provider | `/provider` (dashboard) | High |

### Special Functions (1+ use cases)
| ID | Use Case | Actor | Page | Priority |
|----|----------|-------|------|----------|
| UC-031 | Offline Mode | Any User | `/offline` | Medium |
| UC-032 | Bulk Operations | Provider | Various | Low |
| UC-033 | Search and Discovery | Provider | Various | Medium |
| UC-034 | Help and Support | Any User | Various | Low |

## Use Case Priorities

### Critical Priority
- UC-017: Accept/Reject Appointment - Core business functionality

### High Priority (19 use cases)
Essential features that directly impact core user workflows and business operations.

### Medium Priority (10 use cases)
Important features that enhance user experience and operational efficiency.

### Low Priority (2 use cases)
Nice-to-have features that provide additional value but are not essential.

## Actor Summary

### Primary Actors
1. **New User** - Unregistered person creating an account
2. **Registered User** - User with an account
3. **Provider** - Service provider managing bookings and business
4. **Multi-role User** - User with both customer and provider roles

### System Actors
- **System** - Automated processes and validations
- **External Calendar Services** - Google, Outlook, Apple Calendar
- **Payment Gateway** - Payment processing systems
- **Notification Service** - Email, SMS, Push notification systems

## Business Process Flows

### Provider Onboarding Flow
1. UC-001: User Registration → 
2. UC-006: Provider Onboarding → 
3. UC-008: Create Company → 
4. UC-012: Create Service → 
5. UC-021: Configure Working Hours →
6. Ready to accept bookings

### Booking Management Flow
1. UC-015: View Appointments → 
2. UC-017: Accept/Reject Appointment → 
3. UC-016: View Appointment Details → 
4. UC-018 or UC-019: Cancel/Reschedule (if needed) →
5. Mark as completed

### Schedule Management Flow
1. UC-020: View Calendar → 
2. UC-021: Configure Working Hours → 
3. UC-022: Block Time Slots →
4. UC-023: Unblock Time Slots (as needed)

## Integration Points

### External Integrations
- **Calendar Services**: UC-020, UC-026
- **Payment Processing**: UC-017, UC-029
- **Email/SMS**: UC-027, UC-028
- **Analytics**: UC-029, UC-030

### Internal Dependencies
Many use cases depend on prior completion of others:
- Services require Companies (UC-012 depends on UC-008)
- Appointments require Services (UC-015 depends on UC-012)
- Reports require Bookings (UC-029 depends on UC-015)

## Error Handling Patterns

Common error scenarios across use cases:
1. **Validation Errors** - Invalid input data
2. **Conflict Errors** - Double booking, scheduling conflicts
3. **Permission Errors** - Unauthorized access
4. **Network Errors** - Connection issues (handled by UC-031)
5. **Business Rule Violations** - Policy constraints

## Success Metrics

### User Engagement
- Onboarding completion rate (UC-005, UC-006)
- Profile completion rate (UC-024, UC-025)
- Settings configuration rate (UC-026)

### Business Performance
- Booking acceptance rate (UC-017)
- Cancellation rate (UC-018)
- Average response time (UC-016, UC-017)
- Revenue per booking (UC-029)

### System Performance
- Page load times
- Data sync success rate (UC-031)
- Notification delivery rate (UC-027)
- Report generation time (UC-029)

---

## Document Navigation

**Detailed Use Case Documentation:**
- [Authentication & Access](./authentication/index.md) - UC-001 to UC-004
- [Onboarding](./onboarding/index.md) - UC-005 to UC-006
- [Company Management](./company-management/index.md) - UC-007 to UC-010
- [Service Management](./service-management/index.md) - UC-011 to UC-014
- [Appointment Management](./appointment-management/index.md) - UC-015 to UC-019
- [Calendar & Scheduling](./calendar-scheduling/index.md) - UC-020 to UC-023
- [Profile & Settings](./profile-settings/index.md) - UC-024 to UC-026
- [Notifications & Reports](./notifications-reports/index.md) - UC-027 to UC-030
- [Special Functions](./special-functions/index.md) - UC-031 to UC-034

---

## Visual Diagrams

Each use case includes a **Mermaid sequence diagram** that visualizes:

### Diagram Components
- **Actors**: Users performing actions (Provider, Customer, Admin)
- **System**: Main application logic
- **Database**: Data persistence layer
- **External Services**: Third-party integrations (Email, SMS, Payment, Calendar)
- **Specialized Components**: Auth, Notification, Analytics, Storage services

### Diagram Benefits
- ✅ **Clear visualization** of actor-system interactions
- ✅ **Easy to understand** complex workflows
- ✅ **Decision points** and alternative paths shown visually
- ✅ **Integration flows** with external services
- ✅ **Renders automatically** in GitHub, VS Code, and documentation tools

### Example Flow Patterns
- **Simple CRUD**: User → System → Database → User
- **With Validation**: User → System → Validation → Database (success/error)
- **With External Service**: User → System → External API → Database → User
- **With Notifications**: User → System → Database → Notification Service → Other Users
- **Conflict Resolution**: System detects conflict → User resolves → System applies

---

*Last updated: March 6, 2026*
