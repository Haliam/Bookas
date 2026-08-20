import { createBrowserRouter } from "react-router";

// Layouts
import { ProviderLayout } from "./layouts/ProviderLayout";

// Auth / public
import { Landing } from "../features/landing/screens/Landing";
import { Login } from "../features/auth/screens/Login";
import { Register } from "../features/auth/screens/Register";
import { ForgotPassword } from "../features/auth/screens/ForgotPassword";

// Onboarding
import { Onboarding } from "../features/onboarding/screens/Onboarding";
import { RoleSwitchLanding } from "../features/auth/screens/RoleSwitchLanding";
import { Offline } from "../features/onboarding/screens/Offline";

// Provider features
import { BusinessHome } from "../features/business-home/screens/BusinessHome";
import { ProviderCompanies } from "../features/companies/screens/Companies";
import { CreateCompany } from "../features/companies/screens/CreateCompany";
import { ProviderServices } from "../features/services/screens/Services";
import { CreateService } from "../features/services/screens/CreateService";
import { ProviderAppointments } from "../features/appointments/screens/ProviderAppointments";
import { ProviderAppointmentDetail } from "../features/appointments/screens/ProviderAppointmentDetail";
import { ProviderProfile } from "../features/settings-profile/screens/ProviderProfile";
import { ProviderSettings } from "../features/settings-profile/screens/ProviderSettings";
import { ProviderReports } from "../features/reports/screens/Reports";
import { ProviderCalendar } from "../features/scheduling/screens/Calendar";
import { ProviderHours } from "../features/scheduling/screens/Hours";
import { BlockTime } from "../features/scheduling/screens/BlockTime";
import { ProviderNotifications } from "../features/notifications/screens/Notifications";
import { ProviderOnboarding } from "../features/onboarding/screens/ProviderOnboarding";


export const router = createBrowserRouter([
  // Public
  { path: "/", Component: Landing },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
  { path: "/forgot-password", Component: ForgotPassword },

  // Extra
  { path: "/onboarding", Component: Onboarding },
  { path: "/onboarding-provider", Component: ProviderOnboarding },
  { path: "/role-switch", Component: RoleSwitchLanding },
  { path: "/offline", Component: Offline },

  // Provider
  {
    path: "/provider",
    Component: ProviderLayout,
    children: [
      { index: true, Component: BusinessHome },
      { path: "companies", Component: ProviderCompanies },
      { path: "companies/create", Component: CreateCompany },
      { path: "companies/:id/services", Component: ProviderServices },
      { path: "companies/:id/services/create", Component: CreateService },
      { path: "companies/:id/edit", Component: CreateCompany },
      { path: "clients", Component: ProviderCompanies }, // placeholder until a dedicated clients screen exists
      { path: "appointments", Component: ProviderAppointments },
      { path: "appointments/:id", Component: ProviderAppointmentDetail },
      { path: "calendar", Component: ProviderCalendar },
      { path: "hours", Component: ProviderHours },
      { path: "block-time", Component: BlockTime },
      { path: "notifications", Component: ProviderNotifications },
      { path: "profile", Component: ProviderProfile },
      { path: "settings", Component: ProviderSettings },
      { path: "reports", Component: ProviderReports },
      { path: "reviews", Component: ProviderReports }, // placeholder
    ],
  },
]);