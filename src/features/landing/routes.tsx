import { lazy } from 'react'
import type { RouteObject } from 'react-router'
const Landing = lazy(() =>
  import('./screens/Landing').then((m) => ({ default: m.Landing })),
)

export const landingRoutes: RouteObject[] = [{ path: '/', Component: Landing }]
