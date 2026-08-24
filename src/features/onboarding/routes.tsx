import { lazy } from 'react'
import type { RouteObject } from 'react-router'
const Offline = lazy(() =>
  import('./screens/Offline').then((m) => ({ default: m.Offline })),
)
const Onboarding = lazy(() =>
  import('./screens/Onboarding').then((m) => ({ default: m.Onboarding })),
)
const ProviderOnboarding = lazy(() =>
  import('./screens/ProviderOnboarding').then((m) => ({
    default: m.ProviderOnboarding,
  })),
)

export const onboardingRoutes: RouteObject[] = [
  { path: '/onboarding', Component: Onboarding },
  { path: '/provider/onboarding', Component: ProviderOnboarding },
  { path: '/offline', Component: Offline },
]
