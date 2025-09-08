"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Users,
  Activity,
  FileText,
  Plus,
  Calendar,
  Phone,
  User,
  Heart,
  TrendingUp,
  Clock,
  Filter,
} from "lucide-react"

export default function DoctorDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchType, setSearchType] = useState("name")

  // Mock data
  const stats = {
    totalPatients: 1247,
    todayAppointments: 12,
    pendingReports: 8,
    activeConditions: 156,
  }

  const topDiagnoses = [
    { code: "N73.2", name: "Chronic Gastritis", count: 45, trend: "+12%" },
    { code: "M25.5", name: "Joint Pain", count: 38, trend: "+8%" },
    { code: "R50.9", name: "Fever, unspecified", count: 32, trend: "-5%" },
    { code: "K59.0", name: "Constipation", count: 28, trend: "+15%" },
    { code: "M79.3", name: "Back Pain", count: 24, trend: "+3%" },
  ]

  const mostUsedCodes = [
    { code: "NAM001", name: "Vata Dosha Imbalance", usage: 67, type: "NAMASTE" },
    { code: "NAM045", name: "Pitta Aggravation", usage: 54, type: "NAMASTE" },
    { code: "ICD-K30", name: "Functional Dyspepsia", usage: 43, type: "ICD-11" },
    { code: "NAM023", name: "Kapha Stagnation", usage: 39, type: "NAMASTE" },
    { code: "ICD-M25", name: "Joint Disorders", usage: 35, type: "ICD-11" },
  ]

  const recentPatients = [
    {
      id: "1",
      name: "Priya Sharma",
      abhaId: "12-3456-7890-1234",
      phone: "+91 98765 43210",
      lastVisit: "2024-01-15",
      condition: "Chronic Gastritis",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      name: "Rajesh Kumar",
      abhaId: "12-3456-7890-5678",
      phone: "+91 98765 43211",
      lastVisit: "2024-01-14",
      condition: "Joint Pain",
      status: "follow-up",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      name: "Anita Patel",
      abhaId: "12-3456-7890-9012",
      phone: "+91 98765 43212",
      lastVisit: "2024-01-13",
      condition: "Fever",
      status: "resolved",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "4",
      name: "Suresh Gupta",
      abhaId: "12-3456-7890-3456",
      phone: "+91 98765 43213",
      lastVisit: "2024-01-12",
      condition: "Back Pain",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const handleSearch = () => {
    // Implement search functionality
    console.log(`Searching for ${searchQuery} by ${searchType}`)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-foreground">MediCore EMR</span>
              </div>
              <Badge variant="secondary">Doctor Dashboard</Badge>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Patient
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Good morning, Dr. Sharma</h1>
          <p className="text-muted-foreground">Here's your patient overview for today</p>
        </div>

        {/* Patient Search */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Patient Search
            </CardTitle>
            <CardDescription>Search for patients by ABHA ID, name, or phone number</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Select value={searchType} onValueChange={setSearchType}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Name
                    </div>
                  </SelectItem>
                  <SelectItem value="abha">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      ABHA ID
                    </div>
                  </SelectItem>
                  <SelectItem value="phone">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder={`Search by ${searchType}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleSearch}>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.totalPatients}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.todayAppointments}</div>
              <p className="text-xs text-muted-foreground">
                <Clock className="h-3 w-3 inline mr-1" />
                Next at 10:30 AM
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Reports</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.pendingReports}</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Conditions</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.activeConditions}</div>
              <p className="text-xs text-muted-foreground">Under treatment</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Patients */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Patients</CardTitle>
                    <CardDescription>Your most recent patient interactions</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <div
                      key={patient.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={patient.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {patient.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-foreground">{patient.name}</div>
                          <div className="text-sm text-muted-foreground">ABHA: {patient.abhaId}</div>
                          <div className="text-sm text-muted-foreground">{patient.phone}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">{patient.condition}</div>
                        <div className="text-sm text-muted-foreground">Last visit: {patient.lastVisit}</div>
                        <Badge
                          variant={
                            patient.status === "active"
                              ? "default"
                              : patient.status === "follow-up"
                                ? "secondary"
                                : "outline"
                          }
                          className="mt-1"
                        >
                          {patient.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline">View All Patients</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Sidebar */}
          <div className="space-y-6">
            {/* Top Diagnoses */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top Diagnoses</CardTitle>
                <CardDescription>Most common conditions this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topDiagnoses.map((diagnosis, index) => (
                    <div key={diagnosis.code} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">{diagnosis.name}</div>
                        <div className="text-xs text-muted-foreground">{diagnosis.code}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-foreground">{diagnosis.count}</div>
                        <div
                          className={`text-xs ${diagnosis.trend.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                        >
                          {diagnosis.trend}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Most Used Codes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Most Used Codes</CardTitle>
                <CardDescription>NAMASTE & ICD-11 code usage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mostUsedCodes.map((code, index) => (
                    <div key={code.code} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">{code.name}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{code.code}</span>
                          <Badge variant={code.type === "NAMASTE" ? "default" : "secondary"} className="text-xs">
                            {code.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-sm font-bold text-foreground">{code.usage}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
