'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-8">
      <motion.div
        className="text-center max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex items-center justify-center gap-3 mb-6" variants={itemVariants}>
          <Heart className="h-12 w-12 text-primary" />
          <h1 className="text-5xl font-bold">MediCore EMR</h1>
        </motion.div>
        <motion.p className="text-xl text-muted-foreground mb-4" variants={itemVariants}>
          Standardizing AYUSH & ICD-11 Integration for Digital Health Records.
        </motion.p>
        <motion.p className="text-lg text-muted-foreground mb-10" variants={itemVariants}>
          A seamless, secure, and compliant Electronic Health Records system designed for modern healthcare providers.
        </motion.p>
        <motion.div className="flex justify-center gap-4" variants={itemVariants}>
          <Link href="/auth/login" passHref>
            <Button size="lg">Login</Button>
          </Link>
          <Link href="/auth/register" passHref>
            <Button size="lg" variant="outline">
              Register
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      <motion.footer
        className="absolute bottom-8 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        EHR 2016 Compliant • HIPAA Secure
      </motion.footer>
    </div>
  );
}
