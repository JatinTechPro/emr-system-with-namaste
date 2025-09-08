"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardNav } from "@/components/dashboard-nav"
import { Search, Plus, Filter, Calendar, Phone, FileText } from "lucide-react"
import Link from "next/link"

export default function PatientsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchType, setSearchType] = useState("name")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock patients data
  const patients = [
    {
      id: "1",
      name: "Priya Sharma",
      abhaId: "12-3456-7890-1234",
      phone: "+91 98765 43210",
      lastVisit: "2024-01-15",
      condition: "Chronic Gastritis",
      status: "active",
      age: 39,
      gender: "Female",
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
      age: 45,
      gender: "Male",
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
      age: 32,
      gender: "Female",
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
      age: 52,
      gender: "Male",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const filteredPatients = patients.filter((patient) => {
    const matchesSearch =
      searchQuery === "" ||
      (searchType === "name" && patient.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (searchType === "abha" && patient.abhaId.includes(searchQuery)) ||
      (searchType === "phone" && patient.phone.includes(searchQuery))

    const matchesStatus = statusFilter === "all" || patient.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav currentPage="patients" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Patient Records</h1>
            <p className="text-muted-foreground">Manage and view all patient records</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Patient
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Search Patients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <Select value={searchType} onValueChange={setSearchType}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="abha">ABHA ID</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder={`Search by ${searchType}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="follow-up">Follow-up</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Patients List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>All Patients ({filteredPatients.length})</CardTitle>
                <CardDescription>Complete list of patient records</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filter
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredPatients.map((patient) => (
                <Link key={patient.id} href={`/dashboard/patients/${patient.id}`}>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
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
                        <div className="text-sm text-muted-foreground">
                          {patient.age} years • {patient.gender}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <FileText className="h-3 w-3" />
                            {patient.abhaId}
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {patient.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-foreground">{patient.condition}</div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        Last visit: {patient.lastVisit}
                      </div>
                      <Badge
                        variant={
                          patient.status === "active"
                            ? "default"
                            : patient.status === "follow-up"
                              ? "secondary"
                              : "outline"
                        }
                        className="mt-2"
                      >
                        {patient.status}
                      </Badge>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
