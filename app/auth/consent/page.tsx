"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Heart, Shield, Eye, Clock, User, FileText, CheckCircle, XCircle } from "lucide-react"

export default function ConsentPage() {
  const [consents, setConsents] = useState({
    viewRecords: false,
    shareData: false,
    research: false,
    analytics: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleConsentChange = (key: string, value: boolean) => {
    setConsents((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmitConsent = async () => {
    setIsLoading(true)
    // Submit consent preferences
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  const consentHistory = [
    {
      id: 1,
      action: "Record Access Granted",
      provider: "Dr. Sharma - City Hospital",
      date: "2024-01-15",
      status: "approved",
      fhirId: "Consent/12345",
    },
    {
      id: 2,
      action: "Data Sharing Approved",
      provider: "Research Institute",
      date: "2024-01-10",
      status: "approved",
      fhirId: "Consent/12346",
    },
    {
      id: 3,
      action: "Analytics Consent",
      provider: "MediCore Analytics",
      date: "2024-01-05",
      status: "denied",
      fhirId: "Consent/12347",
    },
  ]

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">MediCore EMR</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Patient Consent Management</h1>
          <p className="text-muted-foreground">Manage your healthcare data access permissions</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Consent Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Data Access Permissions
              </CardTitle>
              <CardDescription>Control who can access your medical records and how your data is used</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="viewRecords"
                    checked={consents.viewRecords}
                    onCheckedChange={(checked) => handleConsentChange("viewRecords", checked as boolean)}
                  />
                  <div className="space-y-1">
                    <label htmlFor="viewRecords" className="text-sm font-medium cursor-pointer">
                      Healthcare Provider Access
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Allow authorized healthcare providers to view your complete medical records
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="shareData"
                    checked={consents.shareData}
                    onCheckedChange={(checked) => handleConsentChange("shareData", checked as boolean)}
                  />
                  <div className="space-y-1">
                    <label htmlFor="shareData" className="text-sm font-medium cursor-pointer">
                      Inter-facility Data Sharing
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Share your records with other healthcare facilities for continuity of care
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="research"
                    checked={consents.research}
                    onCheckedChange={(checked) => handleConsentChange("research", checked as boolean)}
                  />
                  <div className="space-y-1">
                    <label htmlFor="research" className="text-sm font-medium cursor-pointer">
                      Medical Research Participation
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Allow anonymized data to be used for medical research and studies
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="analytics"
                    checked={consents.analytics}
                    onCheckedChange={(checked) => handleConsentChange("analytics", checked as boolean)}
                  />
                  <div className="space-y-1">
                    <label htmlFor="analytics" className="text-sm font-medium cursor-pointer">
                      Healthcare Analytics
                    </label>
                    <p className="text-xs text-muted-foreground">
                      Use aggregated data for healthcare quality improvement and analytics
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex gap-3">
                <Button onClick={handleSubmitConsent} disabled={isLoading} className="flex-1">
                  {isLoading ? "Updating..." : "Update Consent"}
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Revoke All Access
                </Button>
              </div>

              <div className="text-xs text-muted-foreground bg-muted p-3 rounded-lg">
                <Shield className="h-4 w-4 inline mr-1" />
                Your consent choices are recorded in FHIR-compliant format and can be updated at any time.
              </div>
            </CardContent>
          </Card>

          {/* Consent History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Consent History
              </CardTitle>
              <CardDescription>Track all consent decisions and data access approvals</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  {consentHistory.map((item) => (
                    <div key={item.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {item.status === "approved" ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500" />
                          )}
                          <span className="font-medium text-sm">{item.action}</span>
                        </div>
                        <Badge variant={item.status === "approved" ? "default" : "destructive"}>{item.status}</Badge>
                      </div>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {item.provider}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {item.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          FHIR ID: {item.fhirId}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Patient Rights */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              Your Rights & Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Right to Access</h3>
                <p className="text-muted-foreground">
                  You have the right to view, download, and transmit your health information.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Right to Correct</h3>
                <p className="text-muted-foreground">
                  You can request corrections to inaccurate or incomplete health information.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Right to Restrict</h3>
                <p className="text-muted-foreground">
                  You can request restrictions on how your health information is used or shared.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
