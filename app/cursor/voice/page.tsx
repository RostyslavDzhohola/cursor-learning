"use client";

import React, { useState, useEffect } from 'react';
import { CompanyForm } from '@/components/ui/CompanyForm';
import { ApiKeyDisplay } from '@/components/ui/ApiKeyDisplay';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function VoicePage() {
  const [isClient, setIsClient] = useState(false);
  const [step, setStep] = useState(1);
  const [companyInfo, setCompanyInfo] = useState({
    name: '',
    address: '',
    contact: '',
  });
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    // This useEffect hook runs once when the component mounts
    // It sets the isClient state to true, indicating that we're now on the client-side
    // This is useful for avoiding hydration mismatches and ensuring client-side only code runs properly
    setIsClient(true);
  }, []); // The empty dependency array means this effect runs only once after the initial render

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyInfo({ ...companyInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (companyInfo.name && companyInfo.address && companyInfo.contact) {
      setStep(2);
      setApiKey(generateApiKey());
    } else {
      alert('Please fill all fields');
    }
  };

  const generateApiKey = () => {
    return 'API_' + Math.random().toString(36).slice(2, 11);
  };

  const refreshApiKey = () => {
    setApiKey(generateApiKey());
  };

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    alert('API key copied to clipboard!');
  };

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="container mx-auto p-4 min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6 text-center">Voice AI Setup</h1>
      <div className="w-full max-w-md">
        {step === 1 ? (
          <CompanyForm
            companyInfo={companyInfo}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        ) : (
          <ApiKeyDisplay 
            apiKey={apiKey} 
            onCopy={copyApiKey} 
            onRefresh={
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Refresh API Key</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action will generate a new API key. The previous API key will be lost and cannot be recovered.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                      <Button variant="outline">Cancel</Button>
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={refreshApiKey}>
                      <Button variant="default">Continue</Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            } 
          />
        )}
      </div>
    </div>
  );
}

