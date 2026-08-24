import { Outlet } from 'react-router'
import { BottomNav } from '../../shared/components/navigation/BottomNav'

export function ProviderLayout() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <div className="pb-[80px]">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  )
}
