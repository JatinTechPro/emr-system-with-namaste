"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

interface User {
  id: string
  name: string
  email: string
  role: "doctor" | "patient" | "admin" | "developer"
  abhaId?: string
  organization?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  loginWithABHA: (abhaId: string) => Promise<void>
  logout: () => void
  register: (userData: any) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const PROTECTED_ROUTES = ["/dashboard"]
const PUBLIC_ROUTES = ["/auth/login", "/auth/register"]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const savedUser = localStorage.getItem("user")
        if (savedUser) {
          setUser(JSON.parse(savedUser))
        }
      } catch (error) {
        console.error("Auth check failed:", error)
        setUser(null)
        localStorage.removeItem("user")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  useEffect(() => {
    if (isLoading) {
      return
    }

    const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname.startsWith(route))
    const isPublicRoute = PUBLIC_ROUTES.includes(pathname)

    if (!user && isProtectedRoute) {
      router.push("/auth/login")
    } else if (user && isPublicRoute) {
      router.push("/dashboard")
    }
  }, [user, isLoading, pathname, router])

  const login = async (email: string, password: string) => {
    try {
      const mockUser: User = {
        id: "1",
        name: "Dr. John Doe",
        email,
        role: "doctor",
        organization: "City Hospital",
      }
      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
    } catch (error) {
      throw new Error("Login failed")
    }
  }

  const loginWithABHA = async (abhaId: string) => {
    try {
      const mockUser: User = {
        id: "2",
        name: "Patient Name",
        email: "patient@example.com",
        role: "patient",
        abhaId,
      }
      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
    } catch (error) {
      throw new Error("ABHA login failed")
    }
  }

  const register = async (userData: any) => {
    try {
      const newUser: User = {
        id: Date.now().toString(),
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        role: userData.userType,
        organization: userData.organization,
      }
      setUser(newUser)
      localStorage.setItem("user", JSON.stringify(newUser))
    } catch (error) {
      throw new Error("Registration failed")
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        loginWithABHA,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
