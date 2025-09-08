"use client";

import type React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function RecordsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Patient Records</h1>
        <p className="text-muted-foreground">Search and manage patient records.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Records
          </CardTitle>
          <CardDescription>This is a placeholder page for patient records.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Future content for managing records will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
