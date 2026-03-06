# Bookas Project Structure

## Overview
Bookas is a booking management system built with React, TypeScript, and Vite. It provides a comprehensive platform for service providers to manage their appointments, companies, services, and schedules.

## Technology Stack
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router
- **UI Components**: Radix UI, Material-UI
- **Styling**: Tailwind CSS
- **Animations**: Motion (Framer Motion)

## Folder Structure

```
Bookas/
├── doc/                          # Documentation files
│   └── project-structure.md      # This file
├── guidelines/                   # Development guidelines
│   └── Guidelines.md
├── src/                         # Source code
│   ├── main.tsx                 # Application entry point
│   ├── app/                     # Main application folder
│   │   ├── App.tsx              # Root component
│   │   ├── routes.tsx           # Route definitions
│   │   ├── components/          # Reusable components
│   │   │   ├── figma/           # Figma-related components
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   ├── navigation/      # Navigation components
│   │   │   │   ├── BottomNav.tsx
│   │   │   │   └── TopBar.tsx
│   │   │   └── ui/              # UI component library
│   │   │       ├── accordion.tsx
│   │   │       ├── alert-dialog.tsx
│   │   │       ├── alert.tsx
│   │   │       ├── aspect-ratio.tsx
│   │   │       ├── avatar.tsx
│   │   │       ├── Badge.tsx
│   │   │       ├── breadcrumb.tsx
│   │   │       ├── Button.tsx
│   │   │       ├── calendar.tsx
│   │   │       ├── card.tsx
│   │   │       ├── carousel.tsx
│   │   │       ├── chart.tsx
│   │   │       ├── checkbox.tsx
│   │   │       ├── collapsible.tsx
│   │   │       ├── command.tsx
│   │   │       ├── context-menu.tsx
│   │   │       ├── dialog.tsx
│   │   │       ├── drawer.tsx
│   │   │       ├── dropdown-menu.tsx
│   │   │       ├── EmptyState.tsx
│   │   │       ├── form.tsx
│   │   │       ├── hover-card.tsx
│   │   │       ├── input-otp.tsx
│   │   │       ├── Input.tsx
│   │   │       ├── label.tsx
│   │   │       ├── menubar.tsx
│   │   │       ├── Modal.tsx
│   │   │       ├── navigation-menu.tsx
│   │   │       ├── pagination.tsx
│   │   │       ├── popover.tsx
│   │   │       ├── progress.tsx
│   │   │       ├── radio-group.tsx
│   │   │       ├── resizable.tsx
│   │   │       ├── scroll-area.tsx
│   │   │       ├── select.tsx
│   │   │       ├── separator.tsx
│   │   │       ├── sheet.tsx
│   │   │       ├── sidebar.tsx
│   │   │       ├── Skeleton.tsx
│   │   │       ├── slider.tsx
│   │   │       ├── sonner.tsx
│   │   │       ├── switch.tsx
│   │   │       ├── table.tsx
│   │   │       ├── tabs.tsx
│   │   │       ├── textarea.tsx
│   │   │       ├── toggle-group.tsx
│   │   │       ├── toggle.tsx
│   │   │       ├── tooltip.tsx
│   │   │       ├── use-mobile.ts
│   │   │       └── utils.ts
│   │   ├── context/             # React Context providers
│   │   │   └── AppContext.tsx
│   │   ├── data/                # Mock data and constants
│   │   │   └── mockData.ts
│   │   ├── layouts/             # Layout components
│   │   │   └── ProviderLayout.tsx
│   │   └── screens/             # Page components
│   │       ├── extra/           # Special pages
│   │       │   ├── Offline.tsx
│   │       │   ├── Onboarding.tsx
│   │       │   └── RoleSwitchLanding.tsx
│   │       ├── provider/        # Provider portal pages
│   │       │   ├── BlockTime.tsx
│   │       │   ├── Calendar.tsx
│   │       │   ├── Companies.tsx
│   │       │   ├── CreateCompany.tsx
│   │       │   ├── CreateService.tsx
│   │       │   ├── Dashboard.tsx
│   │       │   ├── Hours.tsx
│   │       │   ├── Notifications.tsx
│   │       │   ├── ProviderAppointmentDetail.tsx
│   │       │   ├── ProviderAppointments.tsx
│   │       │   ├── ProviderOnboarding.tsx
│   │       │   ├── ProviderProfile.tsx
│   │       │   ├── ProviderSettings.tsx
│   │       │   ├── Reports.tsx
│   │       │   └── Services.tsx
│   │       └── public/          # Public pages (authentication)
│   │           ├── ForgotPassword.tsx
│   │           ├── Landing.tsx
│   │           ├── Login.tsx
│   │           └── Register.tsx
│   └── styles/                  # CSS styles
│       ├── booka.css
│       ├── fonts.css
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
├── vite.config.ts               # Vite configuration
├── ATTRIBUTIONS.md              # Third-party attributions
└── README.md                    # Project readme

```

## Application Pages

### Public Pages (Unauthenticated)
These pages are accessible to all users without authentication:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Landing | Landing page - main entry point |
| `/login` | Login | User login page |
| `/register` | Register | New user registration |
| `/forgot-password` | ForgotPassword | Password recovery |

### Onboarding & Special Pages
| Route | Component | Description |
|-------|-----------|-------------|
| `/onboarding` | Onboarding | General user onboarding flow |
| `/onboarding-provider` | ProviderOnboarding | Provider-specific onboarding |
| `/role-switch` | RoleSwitchLanding | Switch between user roles |
| `/offline` | Offline | Offline mode page |

### Provider Portal Pages
All provider pages are under the `/provider` route and use the `ProviderLayout` wrapper:

| Route | Component | Description |
|-------|-----------|-------------|
| `/provider` | ProviderDashboard | Main dashboard with overview |
| `/provider/companies` | ProviderCompanies | List of managed companies |
| `/provider/companies/create` | CreateCompany | Create new company |
| `/provider/companies/:id/edit` | CreateCompany | Edit existing company |
| `/provider/companies/:id/services` | ProviderServices | Services for a company |
| `/provider/companies/:id/services/create` | CreateService | Create new service |
| `/provider/appointments` | ProviderAppointments | List of appointments |
| `/provider/appointments/:id` | ProviderAppointmentDetail | Appointment details |
| `/provider/calendar` | ProviderCalendar | Calendar view |
| `/provider/hours` | ProviderHours | Working hours configuration |
| `/provider/block-time` | BlockTime | Block time slots |
| `/provider/notifications` | ProviderNotifications | Notifications center |
| `/provider/profile` | ProviderProfile | Provider profile management |
| `/provider/settings` | ProviderSettings | Settings and preferences |
| `/provider/reports` | ProviderReports | Reports and analytics |
| `/provider/reviews` | ProviderReports | Reviews (placeholder) |

## Key Features

### Provider Management
- **Dashboard**: Overview of business metrics and recent activity
- **Companies**: Manage multiple business entities
- **Services**: Define and manage services offered
- **Appointments**: View and manage bookings

### Scheduling
- **Calendar**: Visual calendar for appointments
- **Hours**: Set available working hours
- **Block Time**: Block specific time slots

### Administration
- **Profile**: Manage provider information
- **Settings**: Configure application preferences
- **Notifications**: Stay updated on important events
- **Reports**: Analytics and business insights

## UI Component Library
The project includes a comprehensive UI component library based on Radix UI primitives and custom components:
- Forms (Input, Textarea, Select, Checkbox, Radio, etc.)
- Layout (Card, Separator, Accordion, Tabs, etc.)
- Feedback (Alert, Toast, Dialog, Modal, etc.)
- Navigation (Breadcrumb, Navigation Menu, etc.)
- Data Display (Table, Badge, Avatar, etc.)

## Navigation Components
- **TopBar**: Top navigation bar with app branding and user actions
- **BottomNav**: Mobile-friendly bottom navigation

## Development
- **Dev Server**: `npm run dev`
- **Build**: `npm run build`

---

*Last updated: March 6, 2026*
