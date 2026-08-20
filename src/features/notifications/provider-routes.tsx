import { lazy } from "react";
import type { RouteObject } from "react-router";
const ProviderNotifications = lazy(() => import("./screens/Notifications").then(m => ({ default: m.ProviderNotifications })));

export const notificationsProviderRoutes: RouteObject[] = [{ path: "notifications", Component: ProviderNotifications }];
