import { lazy } from 'react'
import type { RouteObject } from 'react-router'
const ProviderProfile = lazy(() =>
  import('./screens/ProviderProfile').then((m) => ({
    default: m.ProviderProfile,
  })),
)
const ProviderSettings = lazy(() =>
  import('./screens/ProviderSettings').then((m) => ({
    default: m.ProviderSettings,
  })),
)

export const settingsProfileProviderRoutes: RouteObject[] = [
  { path: 'profile', Component: ProviderProfile },
  { path: 'settings', Component: ProviderSettings },
]
