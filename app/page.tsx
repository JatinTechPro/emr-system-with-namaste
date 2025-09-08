import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-8">
      <div className="text-center max-w-2xl">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Heart className="h-12 w-12 text-primary" />
          <h1 className="text-5xl font-bold">MediCore EMR</h1>
        </div>
        <p className="text-xl text-muted-foreground mb-4">
          Standardizing AYUSH & ICD-11 Integration for Digital Health Records.
        </p>
        <p className="text-lg text-muted-foreground mb-10">
          A seamless, secure, and compliant Electronic Health Records system designed for modern healthcare providers.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/auth/login" passHref>
            <Button size="lg">Login</Button>
          </Link>
          <Link href="/auth/register" passHref>
            <Button size="lg" variant="outline">
              Register
            </Button>
          </Link>
        </div>
      </div>
      <footer className="absolute bottom-8 text-sm text-muted-foreground">
        EHR 2016 Compliant • HIPAA Secure
      </footer>
    </div>
  );
}
