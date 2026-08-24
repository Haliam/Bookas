import { Suspense } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './routes'
import { AppProvider } from './providers/AppContext'
import '../styles/booka.css'

function RouteFallback() {
  return (
    <div className="min-h-screen bg-[#F4FAF4] flex items-center justify-center px-6">
      <p className="text-sm text-[#6B7280]">Cargando...</p>
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      {/* Mobile container — centers on desktop, full width on mobile */}
      <div className="min-h-screen bg-[#E5E7EB] flex justify-center">
        <div className="w-full max-w-[430px] min-h-screen bg-[#F4FAF4] relative overflow-x-hidden">
          <Suspense fallback={<RouteFallback />}>
            <RouterProvider router={router} />
          </Suspense>
        </div>
      </div>
    </AppProvider>
  )
}
