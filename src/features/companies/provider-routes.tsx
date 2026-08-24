import { lazy } from 'react'
import type { RouteObject } from 'react-router'
const CreateCompany = lazy(() =>
  import('./screens/CreateCompany').then((m) => ({ default: m.CreateCompany })),
)
const ProviderCompanies = lazy(() =>
  import('./screens/Companies').then((m) => ({ default: m.ProviderCompanies })),
)

export const companiesProviderRoutes: RouteObject[] = [
  { path: 'companies', Component: ProviderCompanies },
  { path: 'companies/create', Component: CreateCompany },
  { path: 'companies/:id/edit', Component: CreateCompany },
  { path: 'clients', Component: ProviderCompanies }, // placeholder until a dedicated clients screen exists
]
