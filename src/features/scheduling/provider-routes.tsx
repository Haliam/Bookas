import { lazy } from "react";
import type { RouteObject } from "react-router";
const BlockTime = lazy(() => import("./screens/BlockTime").then(m => ({ default: m.BlockTime })));
const ProviderCalendar = lazy(() => import("./screens/Calendar").then(m => ({ default: m.ProviderCalendar })));
const ProviderHours = lazy(() => import("./screens/Hours").then(m => ({ default: m.ProviderHours })));

export const schedulingProviderRoutes: RouteObject[] = [
  { path: "calendar", Component: ProviderCalendar },
  { path: "hours", Component: ProviderHours },
  { path: "block-time", Component: BlockTime },
];
