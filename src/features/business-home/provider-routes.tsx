import { lazy } from "react";
import type { RouteObject } from "react-router";
const BusinessHome = lazy(() => import("./screens/BusinessHome").then(m => ({ default: m.BusinessHome })));

export const businessHomeProviderRoutes: RouteObject[] = [{ index: true, Component: BusinessHome }];
