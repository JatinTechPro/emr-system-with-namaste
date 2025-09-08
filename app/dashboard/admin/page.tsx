"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Settings,
  Users,
  Shield,
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Plus,
  Edit,
  Trash2,
  Eye,
  Database,
  FileText,
  Lock,
  TrendingUp,
  AlertCircle,
} from "lucide-react"

export default function AdminPage() {
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false)

  // Mock users data
  const users = [
    {
      id: "1",
      name: "Dr. Rajesh Sharma",
      email: "rajesh.sharma@hospital.com",
      role: "doctor",
      status: "active",
      lastLogin: "2024-01-15 14:30",
      patientsCount: 156,
      encountersCount: 234,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      name: "Dr. Priya Patel",
      email: "priya.patel@hospital.com",
      role: "doctor",
      status: "active",
      lastLogin: "2024-01-15 12:15",
      patientsCount: 142,
      encountersCount: 198,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      name: "Sarah Johnson",
      email: "sarah.johnson@hospital.com",
      role: "coder",
      status: "active",
      lastLogin: "2024-01-15 09:45",
      patientsCount: 0,
      encountersCount: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "4",
      name: "Admin User",
      email: "admin@hospital.com",
      role: "admin",
      status: "active",
      lastLogin: "2024-01-15 16:20",
      patientsCount: 0,
      encountersCount: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "5",
      name: "Dr. Amit Kumar",
      email: "amit.kumar@hospital.com",
      role: "doctor",
      status: "disabled",
      lastLogin: "2024-01-10 11:30",
      patientsCount: 89,
      encountersCount: 145,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  // Mock audit trail data
  const auditTrail = [
    {
      id: "1",
      timestamp: "2024-01-15 16:45:23",
      user: "Dr. Sharma",
      action: "Patient Record Updated",
      resource: "Patient/12345",
      details: "Updated diagnosis for Priya Sharma - Added NAMASTE code NAM002",
      ipAddress: "192.168.1.100",
      status: "success",
    },
    {
      id: "2",
      timestamp: "2024-01-15 16:30:15",
      user: "System",
      action: "FHIR Validation",
      resource: "Encounter/67890",
      details: "Encounter resource validated against FHIR R4 schema",
      ipAddress: "127.0.0.1",
      status: "success",
    },
    {
      id: "3",
      timestamp: "2024-01-15 16:15:42",
      user: "Patient Portal",
      action: "Consent Updated",
      resource: "Consent/54321",
      details: "Patient granted access to medical records sharing",
      ipAddress: "203.0.113.45",
      status: "success",
    },
    {
      id: "4",
      timestamp: "2024-01-15 15:58:30",
      user: "Dr. Patel",
      action: "API Call Failed",
      resource: "CodeSystem/NAMASTE",
      details: "Failed to retrieve NAMASTE code NAM999 - Code not found",
      ipAddress: "192.168.1.101",
      status: "error",
    },
    {
      id: "5",
      timestamp: "2024-01-15 15:45:18",
      user: "Admin User",
      action: "User Role Changed",
      resource: "User/coder123",
      details: "Changed role from 'coder' to 'doctor' for Sarah Johnson",
      ipAddress: "192.168.1.50",
      status: "success",
    },
  ]

  // Mock compliance data
  const complianceMetrics = {
    ehrCompliance: 98.5,
    fhirValidation: 99.2,
    dataIntegrity: 97.8,
    securityCompliance: 99.8,
    auditTrailCompleteness: 100,
    consentCompliance: 96.5,
  }

  const complianceIssues = [
    {
      id: "1",
      severity: "high",
      category: "Data Integrity",
      description: "Missing required fields in 3 patient records",
      affectedRecords: 3,
      lastDetected: "2024-01-15 14:30",
      status: "open",
    },
    {
      id: "2",
      severity: "medium",
      category: "FHIR Validation",
      description: "Non-standard code system reference in encounter",
      affectedRecords: 1,
      lastDetected: "2024-01-15 12:15",
      status: "resolved",
    },
    {
      id: "3",
      severity: "low",
      category: "Consent Management",
      description: "Expired consent for data sharing - 5 patients",
      affectedRecords: 5,
      lastDetected: "2024-01-15 10:00",
      status: "open",
    },
  ]

  const systemStats = {
    totalUsers: 45,
    activeUsers: 38,
    totalPatients: 1247,
    totalEncounters: 2156,
    apiCallsToday: 15420,
    systemUptime: "99.9%",
  }

  const handleUserStatusToggle = (userId: string, newStatus: string) => {
    console.log(`Toggling user ${userId} status to ${newStatus}`)
  }

  const handleDeleteUser = (userId: string) => {
    console.log(`Deleting user ${userId}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Admin Panel</h1>
            <p className="text-muted-foreground">System administration and compliance monitoring</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Button>
            <Dialog open={isCreateUserOpen} onOpenChange={setIsCreateUserOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New User</DialogTitle>
                  <DialogDescription>
                    Add a new user to the EMR system with appropriate role and permissions.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input id="email" type="email" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="role" className="text-right">
                      Role
                    </Label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="doctor">Doctor</SelectItem>
                        <SelectItem value="coder">Medical Coder</SelectItem>
                        <SelectItem value="admin">Administrator</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Create User</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* System Overview */}
        <div className="grid md:grid-cols-6 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{systemStats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">{systemStats.activeUsers} active</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{systemStats.totalPatients}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 inline mr-1" />
                +12% this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Encounters</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{systemStats.totalEncounters}</div>
              <p className="text-xs text-muted-foreground">Total recorded</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">API Calls Today</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{systemStats.apiCallsToday}</div>
              <p className="text-xs text-muted-foreground">System activity</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{systemStats.systemUptime}</div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance</CardTitle>
              <Shield className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{complianceMetrics.ehrCompliance}%</div>
              <p className="text-xs text-muted-foreground">EHR 2016 Standards</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="audit">Audit Trail</TabsTrigger>
            <TabsTrigger value="compliance">Compliance Monitor</TabsTrigger>
            <TabsTrigger value="system">System Settings</TabsTrigger>
          </TabsList>

          {/* User Management Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage user accounts, roles, and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead>Activity</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={user.avatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-muted-foreground">{user.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              user.role === "admin" ? "default" : user.role === "doctor" ? "secondary" : "outline"
                            }
                          >
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Switch
                              checked={user.status === "active"}
                              onCheckedChange={(checked) =>
                                handleUserStatusToggle(user.id, checked ? "active" : "disabled")
                              }
                            />
                            <span className="text-sm">{user.status}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">{user.lastLogin}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>Patients: {user.patientsCount}</div>
                            <div>Encounters: {user.encountersCount}</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center gap-2 justify-end">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleDeleteUser(user.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Audit Trail Tab */}
          <TabsContent value="audit">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  System Audit Trail
                </CardTitle>
                <CardDescription>Complete log of all system activities, API calls, and user actions</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px]">
                  <div className="space-y-4">
                    {auditTrail.map((entry) => (
                      <div key={entry.id} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                        <div
                          className={`p-2 rounded-full ${
                            entry.status === "success" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                          }`}
                        >
                          {entry.status === "success" ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <XCircle className="h-4 w-4" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-medium text-foreground">{entry.action}</h3>
                            <span className="text-xs text-muted-foreground">{entry.timestamp}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{entry.details}</p>
                          <div className="flex items-center gap-4 text-xs">
                            <span className="text-muted-foreground">User: {entry.user}</span>
                            <span className="text-muted-foreground">IP: {entry.ipAddress}</span>
                            <Badge variant="outline" className="text-xs">
                              {entry.resource}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance Monitor Tab */}
          <TabsContent value="compliance">
            <div className="space-y-6">
              {/* Compliance Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Compliance Metrics
                  </CardTitle>
                  <CardDescription>EHR 2016 standards and FHIR validation compliance status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">EHR 2016 Compliance</span>
                        <span className="text-sm font-bold">{complianceMetrics.ehrCompliance}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${complianceMetrics.ehrCompliance}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">FHIR Validation</span>
                        <span className="text-sm font-bold">{complianceMetrics.fhirValidation}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${complianceMetrics.fhirValidation}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Data Integrity</span>
                        <span className="text-sm font-bold">{complianceMetrics.dataIntegrity}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${complianceMetrics.dataIntegrity}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Security Compliance</span>
                        <span className="text-sm font-bold">{complianceMetrics.securityCompliance}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: `${complianceMetrics.securityCompliance}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Audit Trail</span>
                        <span className="text-sm font-bold">{complianceMetrics.auditTrailCompleteness}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${complianceMetrics.auditTrailCompleteness}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Consent Management</span>
                        <span className="text-sm font-bold">{complianceMetrics.consentCompliance}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full"
                          style={{ width: `${complianceMetrics.consentCompliance}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Compliance Issues */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Compliance Issues
                  </CardTitle>
                  <CardDescription>Active compliance issues requiring attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {complianceIssues.map((issue) => (
                      <div key={issue.id} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                        <div
                          className={`p-2 rounded-full ${
                            issue.severity === "high"
                              ? "bg-red-100 text-red-600"
                              : issue.severity === "medium"
                                ? "bg-orange-100 text-orange-600"
                                : "bg-yellow-100 text-yellow-600"
                          }`}
                        >
                          <AlertCircle className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium text-foreground">{issue.description}</h3>
                            <Badge variant={issue.status === "open" ? "destructive" : "secondary"}>
                              {issue.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Category: {issue.category}</span>
                            <span>Affected Records: {issue.affectedRecords}</span>
                            <span>Detected: {issue.lastDetected}</span>
                            <Badge
                              variant={
                                issue.severity === "high"
                                  ? "destructive"
                                  : issue.severity === "medium"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {issue.severity}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* System Settings Tab */}
          <TabsContent value="system">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Database Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Auto Backup</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Data Encryption</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Audit Logging</span>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Two-Factor Authentication</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Session Timeout (30 min)</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">IP Whitelisting</span>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
