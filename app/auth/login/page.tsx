"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, User, Lock } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleABHALogin = async () => {
    setIsLoading(true)
    // Simulate ABHA OAuth flow
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to consent page or dashboard
    }, 2000)
  }

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Handle email/password login
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">MediCore EMR</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to access your healthcare records</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Choose your preferred authentication method</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="abha" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="abha" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  ABHA ID
                </TabsTrigger>
                <TabsTrigger value="email" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Email
                </TabsTrigger>
              </TabsList>

              <TabsContent value="abha" className="space-y-4">
                <div className="text-center py-4">
                  <Badge variant="secondary" className="mb-4">
                    <Shield className="h-3 w-3 mr-1" />
                    Secure OAuth 2.0
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-6">
                    Sign in securely using your Ayushman Bharat Health Account (ABHA) ID
                  </p>
                  <Button onClick={handleABHALogin} disabled={isLoading} className="w-full" size="lg">
                    {isLoading ? "Connecting..." : "Sign in with ABHA ID"}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="email" className="space-y-4">
                <form onSubmit={handleEmailLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="doctor@hospital.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <Link href="/auth/forgot-password" className="text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Button type="submit" disabled={isLoading} className="w-full" size="lg">
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <Separator className="my-6" />

            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/auth/register" className="text-primary hover:underline font-medium">
                Register here
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" />
            <span>EHR 2016 Compliant • HIPAA Secure</span>
          </div>
        </div>
      </div>
    </div>
  )
}
