"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts"
import {
  BarChart3,
  Download,
  Filter,
  TrendingUp,
  Users,
  FileText,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState("last30days")
  const [selectedDoctor, setSelectedDoctor] = useState("all")
  const [disorderType, setDisorderType] = useState("all")

  // Mock data for charts
  const diagnosisDistribution = [
    { name: "Chronic Gastritis", value: 45, color: "hsl(var(--chart-1))" },
    { name: "Joint Pain", value: 38, color: "hsl(var(--chart-2))" },
    { name: "Fever", value: 32, color: "hsl(var(--chart-3))" },
    { name: "Constipation", value: 28, color: "hsl(var(--chart-4))" },
    { name: "Back Pain", value: 24, color: "hsl(var(--chart-5))" },
    { name: "Others", value: 33, color: "hsl(var(--muted))" },
  ]

  const monthlyCases = [
    { month: "Aug", cases: 145, namasteUsage: 89, icdUsage: 56 },
    { month: "Sep", cases: 167, namasteUsage: 102, icdUsage: 65 },
    { month: "Oct", cases: 189, namasteUsage: 115, icdUsage: 74 },
    { month: "Nov", cases: 203, namasteUsage: 128, icdUsage: 75 },
    { month: "Dec", cases: 234, namasteUsage: 145, icdUsage: 89 },
    { month: "Jan", cases: 267, namasteUsage: 162, icdUsage: 105 },
  ]

  const topUsedCodes = [
    { rank: 1, code: "NAM001", name: "Vata Dosha Imbalance", type: "NAMASTE", usage: 67, trend: "+12%", trendUp: true },
    { rank: 2, code: "NAM045", name: "Pitta Aggravation", type: "NAMASTE", usage: 54, trend: "+8%", trendUp: true },
    { rank: 3, code: "ICD-K30", name: "Functional Dyspepsia", type: "ICD-11", usage: 43, trend: "-5%", trendUp: false },
    { rank: 4, code: "NAM023", name: "Kapha Stagnation", type: "NAMASTE", usage: 39, trend: "+15%", trendUp: true },
    { rank: 5, code: "ICD-M25", name: "Joint Disorders", type: "ICD-11", usage: 35, trend: "+3%", trendUp: true },
    { rank: 6, code: "NAM067", name: "Ama Accumulation", type: "NAMASTE", usage: 32, trend: "+7%", trendUp: true },
    { rank: 7, code: "ICD-R50", name: "Fever, unspecified", type: "ICD-11", usage: 28, trend: "-2%", trendUp: false },
    { rank: 8, code: "NAM089", name: "Agni Mandya", type: "NAMASTE", usage: 25, trend: "+9%", trendUp: true },
    { rank: 9, code: "ICD-K59", name: "Constipation", type: "ICD-11", usage: 23, trend: "+4%", trendUp: true },
    { rank: 10, code: "NAM012", name: "Ojas Depletion", type: "NAMASTE", usage: 21, trend: "+6%", trendUp: true },
  ]

  const doctorPerformance = [
    { doctor: "Dr. Sharma", patients: 156, encounters: 234, namasteUsage: 145, icdUsage: 89, satisfaction: 4.8 },
    { doctor: "Dr. Patel", patients: 142, encounters: 198, namasteUsage: 132, icdUsage: 66, satisfaction: 4.6 },
    { doctor: "Dr. Kumar", patients: 128, encounters: 176, namasteUsage: 98, icdUsage: 78, satisfaction: 4.7 },
    { doctor: "Dr. Singh", patients: 134, encounters: 189, namasteUsage: 115, icdUsage: 74, satisfaction: 4.5 },
  ]

  const keyMetrics = {
    totalPatients: 1247,
    totalEncounters: 2156,
    namasteCodeUsage: 1456,
    icdCodeUsage: 987,
    avgEncountersPerPatient: 1.73,
    complianceRate: 98.5,
  }

  const handleExport = (format: "pdf" | "csv") => {
    // Simulate export functionality
    console.log(`Exporting data as ${format.toUpperCase()}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Reports & Analytics</h1>
            <p className="text-muted-foreground">Comprehensive insights into patient care and code usage</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => handleExport("csv")}>
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button onClick={() => handleExport("pdf")}>
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>

        {/* Filter Bar */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              Filters
            </CardTitle>
            <CardDescription>
              Customize your analytics view with date range, doctor, and disorder type filters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Date Range</label>
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last7days">Last 7 days</SelectItem>
                    <SelectItem value="last30days">Last 30 days</SelectItem>
                    <SelectItem value="last3months">Last 3 months</SelectItem>
                    <SelectItem value="last6months">Last 6 months</SelectItem>
                    <SelectItem value="lastyear">Last year</SelectItem>
                    <SelectItem value="custom">Custom range</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Doctor</label>
                <Select value={selectedDoctor} onValueChange={setSelectedDoctor}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Doctors</SelectItem>
                    <SelectItem value="dr-sharma">Dr. Sharma</SelectItem>
                    <SelectItem value="dr-patel">Dr. Patel</SelectItem>
                    <SelectItem value="dr-kumar">Dr. Kumar</SelectItem>
                    <SelectItem value="dr-singh">Dr. Singh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Disorder Type</label>
                <Select value={disorderType} onValueChange={setDisorderType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Disorders</SelectItem>
                    <SelectItem value="digestive">Digestive Disorders</SelectItem>
                    <SelectItem value="musculoskeletal">Musculoskeletal</SelectItem>
                    <SelectItem value="respiratory">Respiratory</SelectItem>
                    <SelectItem value="neurological">Neurological</SelectItem>
                    <SelectItem value="metabolic">Metabolic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full">Apply Filters</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{keyMetrics.totalPatients}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Encounters</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{keyMetrics.totalEncounters}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +8% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">NAMASTE Usage</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{keyMetrics.namasteCodeUsage}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +15% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ICD-11 Usage</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{keyMetrics.icdCodeUsage}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +5% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Encounters</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{keyMetrics.avgEncountersPerPatient}</div>
              <p className="text-xs text-muted-foreground">Per patient</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{keyMetrics.complianceRate}%</div>
              <p className="text-xs text-muted-foreground">EHR 2016 Standards</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="diagnoses">Diagnoses</TabsTrigger>
            <TabsTrigger value="codes">Code Usage</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Monthly Cases Trend */}
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Cases Trend</CardTitle>
                  <CardDescription>Patient encounters over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyCases}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="cases"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        name="Total Cases"
                      />
                      <Line
                        type="monotone"
                        dataKey="namasteUsage"
                        stroke="hsl(var(--chart-1))"
                        strokeWidth={2}
                        name="NAMASTE Codes"
                      />
                      <Line
                        type="monotone"
                        dataKey="icdUsage"
                        stroke="hsl(var(--chart-2))"
                        strokeWidth={2}
                        name="ICD-11 Codes"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Diagnosis Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Diagnosis Distribution</CardTitle>
                  <CardDescription>Most common diagnoses this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={diagnosisDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {diagnosisDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Diagnoses Tab */}
          <TabsContent value="diagnoses">
            <Card>
              <CardHeader>
                <CardTitle>Diagnosis Analytics</CardTitle>
                <CardDescription>Detailed breakdown of diagnoses and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={diagnosisDistribution}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Code Usage Tab */}
          <TabsContent value="codes">
            <Card>
              <CardHeader>
                <CardTitle>Top 10 Used Codes</CardTitle>
                <CardDescription>Most frequently used NAMASTE and ICD-11 codes</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Rank</TableHead>
                      <TableHead>Code</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead className="text-right">Usage</TableHead>
                      <TableHead className="text-right">Trend</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topUsedCodes.map((code) => (
                      <TableRow key={code.rank}>
                        <TableCell className="font-medium">#{code.rank}</TableCell>
                        <TableCell className="font-mono text-sm">{code.code}</TableCell>
                        <TableCell>{code.name}</TableCell>
                        <TableCell>
                          <Badge variant={code.type === "NAMASTE" ? "default" : "secondary"}>{code.type}</Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">{code.usage}</TableCell>
                        <TableCell className="text-right">
                          <div
                            className={`flex items-center justify-end gap-1 ${
                              code.trendUp ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {code.trendUp ? (
                              <ArrowUpRight className="h-3 w-3" />
                            ) : (
                              <ArrowDownRight className="h-3 w-3" />
                            )}
                            {code.trend}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Performance Tab */}
          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle>Doctor Performance Analytics</CardTitle>
                <CardDescription>Performance metrics by healthcare provider</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Doctor</TableHead>
                      <TableHead className="text-right">Patients</TableHead>
                      <TableHead className="text-right">Encounters</TableHead>
                      <TableHead className="text-right">NAMASTE Usage</TableHead>
                      <TableHead className="text-right">ICD-11 Usage</TableHead>
                      <TableHead className="text-right">Satisfaction</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {doctorPerformance.map((doctor) => (
                      <TableRow key={doctor.doctor}>
                        <TableCell className="font-medium">{doctor.doctor}</TableCell>
                        <TableCell className="text-right">{doctor.patients}</TableCell>
                        <TableCell className="text-right">{doctor.encounters}</TableCell>
                        <TableCell className="text-right">{doctor.namasteUsage}</TableCell>
                        <TableCell className="text-right">{doctor.icdUsage}</TableCell>
                        <TableCell className="text-right">
                          <Badge variant="outline">⭐ {doctor.satisfaction}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
