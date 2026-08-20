import { lazy } from "react";
import type { RouteObject } from "react-router";
const ProviderReports = lazy(() => import("./screens/Reports").then(m => ({ default: m.ProviderReports })));

export const reportsProviderRoutes: RouteObject[] = [
  { path: "reports", Component: ProviderReports },
  { path: "reviews", Component: ProviderReports }, // placeholder
];
