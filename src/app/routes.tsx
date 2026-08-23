import { createBrowserRouter } from "react-router";

// Layouts
import { ProviderLayout } from "./layouts/ProviderLayout";

import { landingRoutes } from "../features/landing/routes";
import { authRoutes } from "../features/auth/routes";
import { onboardingRoutes } from "../features/onboarding/routes";
import { businessHomeProviderRoutes } from "../features/business-home/provider-routes";
import { companiesProviderRoutes } from "../features/companies/provider-routes";
import { servicesProviderRoutes } from "../features/services/provider-routes";
import { appointmentsProviderRoutes } from "../features/appointments/provider-routes";
import { schedulingProviderRoutes } from "../features/scheduling/provider-routes";
import { notificationsProviderRoutes } from "../features/notifications/provider-routes";
import { settingsProfileProviderRoutes } from "../features/settings-profile/provider-routes";
import { reportsProviderRoutes } from "../features/reports/provider-routes";


export const router = createBrowserRouter([
  ...landingRoutes,
  ...authRoutes,
  ...onboardingRoutes,

  // Provider
  {
    path: "/provider",
    Component: ProviderLayout,
    children: [
      ...businessHomeProviderRoutes,
      ...companiesProviderRoutes,
      ...servicesProviderRoutes,
      ...appointmentsProviderRoutes,
      ...schedulingProviderRoutes,
      ...notificationsProviderRoutes,
      ...settingsProfileProviderRoutes,
      ...reportsProviderRoutes,
    ],
  },
]);