import { createContext, useContext, useState, ReactNode } from 'react'

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  phone: string
}

interface AppContextType {
  user: User
  isLoggedIn: boolean
  setIsLoggedIn: (v: boolean) => void
}

const defaultUser: User = {
  id: 'u1',
  name: 'Sofía Ramírez',
  email: 'sofia@email.com',
  avatar:
    'https://images.unsplash.com/photo-1758922584983-82ffd5720c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwbWluaW1hbHxlbnwxfHx8fDE3NzIzMjAwODd8MA&ixlib=rb-4.1.0&q=80&w=400',
  phone: '+34 612 345 678',
}

const AppContext = createContext<AppContextType>({
  user: defaultUser,
  isLoggedIn: false,
  setIsLoggedIn: () => {},
})

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <AppContext.Provider
      value={{ user: defaultUser, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
