"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Copy, ExternalLink, Key, Shield, Zap } from "lucide-react"

export default function DeveloperPage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Developer Documentation</h1>
        <p className="text-gray-600 mt-2">
          Integrate with our EMR system using our comprehensive API. Access patient data, code mappings, and
          FHIR-compliant resources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <Key className="h-4 w-4 text-primary" />
            <CardTitle className="text-sm font-medium ml-2">API Keys</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Active keys</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <Zap className="h-4 w-4 text-primary" />
            <CardTitle className="text-sm font-medium ml-2">API Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <Shield className="h-4 w-4 text-primary" />
            <CardTitle className="text-sm font-medium ml-2">Rate Limit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1000/hr</div>
            <p className="text-xs text-muted-foreground">Current limit</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
          <TabsTrigger value="endpoints">API Endpoints</TabsTrigger>
          <TabsTrigger value="examples">Code Examples</TabsTrigger>
          <TabsTrigger value="fhir">FHIR Compliance</TabsTrigger>
          <TabsTrigger value="testing">API Testing</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Welcome to the EMR API documentation. Our RESTful API provides access to patient data, code mappings,
                and FHIR-compliant resources.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Base URL</h4>
                <div className="bg-gray-100 p-3 rounded-md font-mono text-sm flex items-center justify-between">
                  <span>https://api.emr-namaste.com/v1</span>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard("https://api.emr-namaste.com/v1")}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Quick Start</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Generate an API key from your dashboard</li>
                  <li>Include the API key in your request headers</li>
                  <li>Make your first API call to retrieve patient data</li>
                  <li>Explore code mappings and FHIR resources</li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Rate Limits</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Standard:</span> 1,000 requests/hour
                  </div>
                  <div>
                    <span className="font-medium">Premium:</span> 10,000 requests/hour
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="authentication" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Authentication</CardTitle>
              <CardDescription>Secure your API requests using API keys and OAuth 2.0 flows.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">API Key Authentication</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Include your API key in the Authorization header of every request.
                </p>
                <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">
                  <div>Authorization: Bearer YOUR_API_KEY</div>
                  <div>Content-Type: application/json</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">OAuth 2.0 Flow</h4>
                <p className="text-sm text-gray-600 mb-3">
                  For applications requiring patient consent, use OAuth 2.0 with ABHA ID integration.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">1</Badge>
                    <span className="text-sm">Redirect to authorization endpoint</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">2</Badge>
                    <span className="text-sm">Patient grants consent</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">3</Badge>
                    <span className="text-sm">Exchange code for access token</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">4</Badge>
                    <span className="text-sm">Use token to access patient data</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Generate API Key</h4>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="key-name">Key Name</Label>
                    <Input id="key-name" placeholder="My Application Key" />
                  </div>
                  <div>
                    <Label htmlFor="key-scope">Scope</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Read Only</option>
                      <option>Read/Write</option>
                      <option>Admin</option>
                    </select>
                  </div>
                  <Button>Generate API Key</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="endpoints" className="space-y-4">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    GET
                  </Badge>
                  <span>/patients</span>
                </CardTitle>
                <CardDescription>Retrieve patient list with optional filtering</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">Query Parameters</h5>
                    <div className="text-sm space-y-1">
                      <div>
                        <code>abha_id</code> - Filter by ABHA ID
                      </div>
                      <div>
                        <code>name</code> - Filter by patient name
                      </div>
                      <div>
                        <code>limit</code> - Number of results (default: 20)
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium">Response</h5>
                    <div className="bg-gray-100 p-3 rounded-md font-mono text-xs">
                      {`{
  "patients": [
    {
      "id": "pat_123",
      "abha_id": "12-3456-7890-1234",
      "name": "John Doe",
      "age": 45,
      "gender": "male"
    }
  ],
  "total": 1,
  "page": 1
}`}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    GET
                  </Badge>
                  <span>/patients/{`{patientId}`}/encounters</span>
                </CardTitle>
                <CardDescription>Get patient encounter history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">Response</h5>
                    <div className="bg-gray-100 p-3 rounded-md font-mono text-xs">
                      {`{
  "encounters": [
    {
      "id": "enc_456",
      "date": "2024-01-15",
      "diagnosis": "Hypertension",
      "namaste_code": "NAM_001",
      "icd11_code": "BA00",
      "doctor": "Dr. Smith"
    }
  ]
}`}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Badge variant="outline" className="bg-blue-100 text-blue-800">
                    POST
                  </Badge>
                  <span>/encounters</span>
                </CardTitle>
                <CardDescription>Create a new patient encounter</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">Request Body</h5>
                    <div className="bg-gray-100 p-3 rounded-md font-mono text-xs">
                      {`{
  "patient_id": "pat_123",
  "diagnosis": "Diabetes Type 2",
  "namaste_code": "NAM_002",
  "icd11_code": "5A11",
  "symptoms": ["Increased thirst", "Fatigue"],
  "treatment_plan": "Metformin 500mg twice daily"
}`}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Badge variant="outline" className="bg-green-100 text-green-800">
                    GET
                  </Badge>
                  <span>/codes/mapping</span>
                </CardTitle>
                <CardDescription>Get NAMASTE to ICD-11 code mappings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">Query Parameters</h5>
                    <div className="text-sm space-y-1">
                      <div>
                        <code>namaste_code</code> - Specific NAMASTE code
                      </div>
                      <div>
                        <code>search</code> - Search by description
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium">Response</h5>
                    <div className="bg-gray-100 p-3 rounded-md font-mono text-xs">
                      {`{
  "mappings": [
    {
      "namaste_code": "NAM_001",
      "namaste_desc": "Essential Hypertension",
      "icd11_code": "BA00",
      "icd11_desc": "Essential hypertension",
      "snomed_code": "59621000",
      "loinc_code": "8480-6"
    }
  ]
}`}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="examples" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Code Examples</CardTitle>
              <CardDescription>Sample implementations in popular programming languages</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                  <TabsTrigger value="php">PHP</TabsTrigger>
                </TabsList>

                <TabsContent value="javascript">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-2">Fetch Patient Data</h5>
                      <div className="bg-gray-100 p-3 rounded-md font-mono text-xs">
                        {`const response = await fetch('https://api.emr-namaste.com/v1/patients', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data.patients);`}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Create Encounter</h5>
                      <div className="bg-gray-100 p-3 rounded-md font-mono text-xs">
                        {`const encounter = {
  patient_id: 'pat_123',
  diagnosis: 'Hypertension',
  namaste_code: 'NAM_001',
  icd11_code: 'BA00'
};

const response = await fetch('https://api.emr-namaste.com/v1/encounters', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(encounter)
});`}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="python">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-2">Fetch Patient Data</h5>
                      <div className="bg-gray-100 p-3 rounded-md font-mono text-xs">
                        {`import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.emr-namaste.com/v1/patients', headers=headers)
patients = response.json()['patients']
print(patients)`}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Create Encounter</h5>
                      <div className="bg-gray-100 p-3 rounded-md font-mono text-xs">
                        {`encounter_data = {
    'patient_id': 'pat_123',
    'diagnosis': 'Hypertension',
    'namaste_code': 'NAM_001',
    'icd11_code': 'BA00'
}

response = requests.post(
    'https://api.emr-namaste.com/v1/encounters',
    headers=headers,
    json=encounter_data
)`}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="curl">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-2">Fetch Patient Data</h5>
                      <div className="bg-gray-100 p-3 rounded-md font-mono text-xs">
                        {`curl -X GET "https://api.emr-namaste.com/v1/patients" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Create Encounter</h5>
                      <div className="bg-gray-100 p-3 rounded-md font-mono text-xs">
                        {`curl -X POST "https://api.emr-namaste.com/v1/encounters" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "patient_id": "pat_123",
    "diagnosis": "Hypertension",
    "namaste_code": "NAM_001",
    "icd11_code": "BA00"
  }'`}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="php">
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium mb-2">Fetch Patient Data</h5>
                      <div className="bg-gray-100 p-3 rounded-md font-mono text-xs">
                        {`<?php
$headers = [
    'Authorization: Bearer YOUR_API_KEY',
    'Content-Type: application/json'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.emr-namaste.com/v1/patients');
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$data = json_decode($response, true);
print_r($data['patients']);
?>`}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fhir" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>FHIR Compliance</CardTitle>
              <CardDescription>
                Our API is fully compliant with FHIR R4 standards for healthcare interoperability.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Supported FHIR Resources</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Badge variant="outline">Patient</Badge>
                  <Badge variant="outline">Encounter</Badge>
                  <Badge variant="outline">Condition</Badge>
                  <Badge variant="outline">Observation</Badge>
                  <Badge variant="outline">Consent</Badge>
                  <Badge variant="outline">Organization</Badge>
                  <Badge variant="outline">Practitioner</Badge>
                  <Badge variant="outline">CodeSystem</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">FHIR Patient Resource Example</h4>
                <div className="bg-gray-100 p-3 rounded-md font-mono text-xs">
                  {`{
  "resourceType": "Patient",
  "id": "pat_123",
  "identifier": [
    {
      "system": "https://healthid.ndhm.gov.in",
      "value": "12-3456-7890-1234"
    }
  ],
  "name": [
    {
      "use": "official",
      "family": "Doe",
      "given": ["John"]
    }
  ],
  "gender": "male",
  "birthDate": "1979-01-15"
}`}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">FHIR Condition Resource Example</h4>
                <div className="bg-gray-100 p-3 rounded-md font-mono text-xs">
                  {`{
  "resourceType": "Condition",
  "id": "cond_456",
  "subject": {
    "reference": "Patient/pat_123"
  },
  "code": {
    "coding": [
      {
        "system": "http://namaste.ayush.gov.in",
        "code": "NAM_001",
        "display": "Essential Hypertension"
      },
      {
        "system": "http://id.who.int/icd11/mms",
        "code": "BA00",
        "display": "Essential hypertension"
      }
    ]
  },
  "clinicalStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
        "code": "active"
      }
    ]
  }
}`}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Validation & Compliance</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      ✓
                    </Badge>
                    <span className="text-sm">FHIR R4 Schema Validation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      ✓
                    </Badge>
                    <span className="text-sm">HL7 FHIR Terminology Services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      ✓
                    </Badge>
                    <span className="text-sm">SMART on FHIR Authorization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      ✓
                    </Badge>
                    <span className="text-sm">US Core Implementation Guide</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="testing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Testing Console</CardTitle>
              <CardDescription>Test API endpoints directly from the documentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <Label htmlFor="endpoint">Endpoint</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>GET /patients</option>
                    <option>GET /patients/{`{patientId}`}/encounters</option>
                    <option>POST /encounters</option>
                    <option>GET /codes/mapping</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="api-key">API Key</Label>
                  <Input id="api-key" type="password" placeholder="Enter your API key" />
                </div>

                <div>
                  <Label htmlFor="request-body">Request Body (for POST requests)</Label>
                  <Textarea
                    id="request-body"
                    placeholder='{"patient_id": "pat_123", "diagnosis": "Hypertension"}'
                    rows={4}
                  />
                </div>

                <Button className="w-full">Send Request</Button>
              </div>

              <div>
                <Label>Response</Label>
                <div className="bg-gray-100 p-3 rounded-md font-mono text-xs min-h-[100px]">
                  <span className="text-gray-500">Response will appear here...</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Postman Collection</CardTitle>
              <CardDescription>Download our Postman collection for easy API testing</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent">
                <ExternalLink className="h-4 w-4 mr-2" />
                Download Postman Collection
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
