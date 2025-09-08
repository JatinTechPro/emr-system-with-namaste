"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DashboardNav } from "@/components/dashboard-nav"
import { User, Calendar, Phone, FileText, Plus, Save, History, ArrowRight, Clock } from "lucide-react"

export default function PatientRecordPage({ params }: { params: { id: string } }) {
  const [selectedNamasteCode, setSelectedNamasteCode] = useState("")
  const [selectedIcdCode, setSelectedIcdCode] = useState("")
  const [symptoms, setSymptoms] = useState("")
  const [diagnosis, setDiagnosis] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Mock patient data
  const patient = {
    id: params.id,
    name: "Priya Sharma",
    abhaId: "12-3456-7890-1234",
    phone: "+91 98765 43210",
    email: "priya.sharma@email.com",
    dateOfBirth: "1985-03-15",
    gender: "Female",
    address: "123 MG Road, Bangalore, Karnataka 560001",
    bloodGroup: "O+",
    allergies: ["Penicillin", "Shellfish"],
    emergencyContact: {
      name: "Rajesh Sharma",
      relation: "Husband",
      phone: "+91 98765 43211",
    },
    avatar: "/placeholder.svg?height=100&width=100",
  }

  // Mock NAMASTE codes
  const namasteCodes = [
    { code: "NAM001", name: "Vata Dosha Imbalance", description: "Constitutional imbalance of Vata" },
    { code: "NAM002", name: "Pitta Aggravation", description: "Excessive Pitta causing inflammation" },
    { code: "NAM003", name: "Kapha Stagnation", description: "Sluggish Kapha metabolism" },
    { code: "NAM004", name: "Ama Accumulation", description: "Toxic accumulation in body" },
    { code: "NAM005", name: "Agni Mandya", description: "Weak digestive fire" },
  ]

  // Mock ICD-11 codes
  const icdCodes = [
    { code: "DA90.0", name: "Functional Dyspepsia", description: "Chronic indigestion" },
    { code: "FB31.0", name: "Chronic Gastritis", description: "Inflammation of stomach lining" },
    { code: "FA40.2", name: "Joint Pain", description: "Arthralgia, unspecified" },
    { code: "MG30.0", name: "Fever, unspecified", description: "Pyrexia of unknown origin" },
    { code: "ME84.0", name: "Chronic Fatigue", description: "Persistent tiredness" },
  ]

  // Mock code mappings
  const codeMappings = [
    {
      namaste: { code: "NAM001", name: "Vata Dosha Imbalance" },
      icd11: { code: "FA40.2", name: "Joint Pain" },
      snomed: { code: "57676002", name: "Arthralgia" },
      loinc: { code: "72133-2", name: "Pain assessment" },
    },
    {
      namaste: { code: "NAM002", name: "Pitta Aggravation" },
      icd11: { code: "FB31.0", name: "Chronic Gastritis" },
      snomed: { code: "4556007", name: "Gastritis" },
      loinc: { code: "33747-0", name: "General appearance" },
    },
    {
      namaste: { code: "NAM005", name: "Agni Mandya" },
      icd11: { code: "DA90.0", name: "Functional Dyspepsia" },
      snomed: { code: "162031009", name: "Indigestion" },
      loinc: { code: "72133-2", name: "Digestive assessment" },
    },
  ]

  // Mock medical history
  const medicalHistory = [
    {
      date: "2024-01-15",
      condition: "Chronic Gastritis",
      namasteCode: "NAM002",
      icdCode: "FB31.0",
      doctor: "Dr. Sharma",
      status: "Active",
      notes: "Patient reports burning sensation in stomach, prescribed Ayurvedic treatment",
    },
    {
      date: "2024-01-10",
      condition: "Joint Pain",
      namasteCode: "NAM001",
      icdCode: "FA40.2",
      doctor: "Dr. Patel",
      status: "Resolved",
      notes: "Vata imbalance treated with Panchakarma therapy",
    },
  ]

  // Mock audit trail
  const auditTrail = [
    {
      timestamp: "2024-01-15 14:30:00",
      action: "Record Updated",
      user: "Dr. Sharma",
      details: "Added new diagnosis: Chronic Gastritis (NAM002 → FB31.0)",
      fhirResource: "Condition/12345",
    },
    {
      timestamp: "2024-01-15 14:25:00",
      action: "Encounter Created",
      user: "Dr. Sharma",
      details: "New patient encounter initiated",
      fhirResource: "Encounter/67890",
    },
    {
      timestamp: "2024-01-10 11:15:00",
      action: "Consent Updated",
      user: "Priya Sharma",
      details: "Patient granted access to medical records",
      fhirResource: "Consent/54321",
    },
  ]

  const handleSaveEncounter = async () => {
    setIsLoading(true)
    // Simulate saving encounter to FHIR
    setTimeout(() => {
      setIsLoading(false)
      // Reset form or show success message
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav currentPage="patients" />

      <div className="container mx-auto px-4 py-8">
        {/* Patient Header */}
        <div className="mb-8">
          <div className="flex items-center gap-6 mb-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src={patient.avatar || "/placeholder.svg"} />
              <AvatarFallback className="text-lg">
                {patient.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground mb-2">{patient.name}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  ABHA: {patient.abhaId}
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  {patient.phone}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  DOB: {patient.dateOfBirth}
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {patient.gender}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <History className="h-4 w-4 mr-2" />
                View History
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Encounter
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="encounter" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="encounter">New Encounter</TabsTrigger>
            <TabsTrigger value="history">Medical History</TabsTrigger>
            <TabsTrigger value="mapping">Code Mapping</TabsTrigger>
            <TabsTrigger value="audit">Audit Trail</TabsTrigger>
          </TabsList>

          {/* New Encounter Tab */}
          <TabsContent value="encounter">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Symptom Entry */}
                <Card>
                  <CardHeader>
                    <CardTitle>Symptom & Diagnosis Entry</CardTitle>
                    <CardDescription>Document patient symptoms and assign appropriate codes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="symptoms">Chief Complaints & Symptoms</Label>
                      <Textarea
                        id="symptoms"
                        placeholder="Describe patient's symptoms in detail..."
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        className="min-h-[100px]"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="namaste-search">NAMASTE Code</Label>
                        <Select value={selectedNamasteCode} onValueChange={setSelectedNamasteCode}>
                          <SelectTrigger>
                            <SelectValue placeholder="Search NAMASTE codes..." />
                          </SelectTrigger>
                          <SelectContent>
                            {namasteCodes.map((code) => (
                              <SelectItem key={code.code} value={code.code}>
                                <div>
                                  <div className="font-medium">
                                    {code.code} - {code.name}
                                  </div>
                                  <div className="text-xs text-muted-foreground">{code.description}</div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="icd-search">ICD-11 TM2 Code</Label>
                        <Select value={selectedIcdCode} onValueChange={setSelectedIcdCode}>
                          <SelectTrigger>
                            <SelectValue placeholder="Search ICD-11 codes..." />
                          </SelectTrigger>
                          <SelectContent>
                            {icdCodes.map((code) => (
                              <SelectItem key={code.code} value={code.code}>
                                <div>
                                  <div className="font-medium">
                                    {code.code} - {code.name}
                                  </div>
                                  <div className="text-xs text-muted-foreground">{code.description}</div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="diagnosis">Clinical Assessment</Label>
                      <Textarea
                        id="diagnosis"
                        placeholder="Enter clinical assessment and treatment plan..."
                        value={diagnosis}
                        onChange={(e) => setDiagnosis(e.target.value)}
                        className="min-h-[80px]"
                      />
                    </div>

                    <Button onClick={handleSaveEncounter} disabled={isLoading} className="w-full">
                      {isLoading ? (
                        "Saving to FHIR..."
                      ) : (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Save Encounter
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Patient Details Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Patient Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium">Blood Group</Label>
                      <p className="text-sm text-muted-foreground">{patient.bloodGroup}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Address</Label>
                      <p className="text-sm text-muted-foreground">{patient.address}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Allergies</Label>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {patient.allergies.map((allergy) => (
                          <Badge key={allergy} variant="destructive" className="text-xs">
                            {allergy}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <Label className="text-sm font-medium">Emergency Contact</Label>
                      <div className="text-sm text-muted-foreground">
                        <p>{patient.emergencyContact.name}</p>
                        <p>{patient.emergencyContact.relation}</p>
                        <p>{patient.emergencyContact.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Medical History Tab */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Medical History</CardTitle>
                <CardDescription>Complete medical history with NAMASTE and ICD-11 code mappings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {medicalHistory.map((record, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{record.condition}</h3>
                          <p className="text-sm text-muted-foreground">
                            {record.date} • Dr. {record.doctor}
                          </p>
                        </div>
                        <Badge variant={record.status === "Active" ? "default" : "secondary"}>{record.status}</Badge>
                      </div>
                      <div className="flex gap-4 mb-3">
                        <Badge variant="outline">NAMASTE: {record.namasteCode}</Badge>
                        <Badge variant="outline">ICD-11: {record.icdCode}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{record.notes}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Code Mapping Tab */}
          <TabsContent value="mapping">
            <Card>
              <CardHeader>
                <CardTitle>Code Mapping Table</CardTitle>
                <CardDescription>NAMASTE → ICD-11 → SNOMED/LOINC code mappings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {codeMappings.map((mapping, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="grid md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <Label className="text-xs font-medium text-primary">NAMASTE</Label>
                          <div className="bg-primary/10 p-3 rounded-md">
                            <div className="font-medium text-sm">{mapping.namaste.code}</div>
                            <div className="text-xs text-muted-foreground">{mapping.namaste.name}</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center">
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs font-medium text-accent">ICD-11 TM2</Label>
                          <div className="bg-accent/10 p-3 rounded-md">
                            <div className="font-medium text-sm">{mapping.icd11.code}</div>
                            <div className="text-xs text-muted-foreground">{mapping.icd11.name}</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs font-medium text-muted-foreground">SNOMED/LOINC</Label>
                          <div className="space-y-2">
                            <div className="bg-muted p-2 rounded-md">
                              <div className="text-xs font-medium">SNOMED: {mapping.snomed.code}</div>
                              <div className="text-xs text-muted-foreground">{mapping.snomed.name}</div>
                            </div>
                            <div className="bg-muted p-2 rounded-md">
                              <div className="text-xs font-medium">LOINC: {mapping.loinc.code}</div>
                              <div className="text-xs text-muted-foreground">{mapping.loinc.name}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Audit Trail Tab */}
          <TabsContent value="audit">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="h-5 w-5 text-primary" />
                  Audit Trail
                </CardTitle>
                <CardDescription>Complete record of all changes and access to patient data</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-4">
                    {auditTrail.map((entry, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-medium text-foreground">{entry.action}</h3>
                            <span className="text-xs text-muted-foreground">{entry.timestamp}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{entry.details}</p>
                          <div className="flex items-center gap-4 text-xs">
                            <span className="text-muted-foreground">User: {entry.user}</span>
                            <Badge variant="outline" className="text-xs">
                              {entry.fhirResource}
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
        </Tabs>
      </div>
    </div>
  )
}
