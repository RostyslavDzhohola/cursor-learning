import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ApiKeyDisplayProps {
  apiKey: string;
  onCopy: () => void;
  onRefresh: React.ReactNode;
}

export const ApiKeyDisplay: React.FC<ApiKeyDisplayProps> = ({ apiKey, onCopy, onRefresh }) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Your API Key</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-mono bg-secondary p-2 rounded mb-4">{apiKey}</p>
        <div className="flex justify-between">
          <Button onClick={onCopy} variant="secondary">
            Copy API Key
          </Button>
          {onRefresh}
        </div>
      </CardContent>
    </Card>
  );
};