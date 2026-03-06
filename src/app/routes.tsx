import { createBrowserRouter } from "react-router";

// Layouts
import { ProviderLayout } from "./layouts/ProviderLayout";

// Public
import { Landing } from "./screens/public/Landing";
import { Login } from "./screens/public/Login";
import { Register } from "./screens/public/Register";
import { ForgotPassword } from "./screens/public/ForgotPassword";

// Extra
import { Onboarding } from "./screens/extra/Onboarding";
import { RoleSwitchLanding } from "./screens/extra/RoleSwitchLanding";
import { Offline } from "./screens/extra/Offline";

// Provider
import { ProviderDashboard } from "./screens/provider/Dashboard";
import { ProviderCompanies } from "./screens/provider/Companies";
import { CreateCompany } from "./screens/provider/CreateCompany";
import { ProviderServices } from "./screens/provider/Services";
import { CreateService } from "./screens/provider/CreateService";
import { ProviderAppointments } from "./screens/provider/ProviderAppointments";
import { ProviderAppointmentDetail } from "./screens/provider/ProviderAppointmentDetail";
import { ProviderProfile } from "./screens/provider/ProviderProfile";
import { ProviderSettings } from "./screens/provider/ProviderSettings";
import { ProviderReports } from "./screens/provider/Reports";
import { ProviderCalendar } from "./screens/provider/Calendar";
import { ProviderHours } from "./screens/provider/Hours";
import { BlockTime } from "./screens/provider/BlockTime";
import { ProviderNotifications } from "./screens/provider/Notifications";
import { ProviderOnboarding } from "./screens/provider/ProviderOnboarding";

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
      { index: true, Component: ProviderDashboard },
      { path: "companies", Component: ProviderCompanies },
      { path: "companies/create", Component: CreateCompany },
      { path: "companies/:id/services", Component: ProviderServices },
      { path: "companies/:id/services/create", Component: CreateService },
      { path: "companies/:id/edit", Component: CreateCompany },
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