import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CompanyFormProps {
  companyInfo: {
    name: string;
    address: string;
    contact: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const CompanyForm: React.FC<CompanyFormProps> = ({ companyInfo, onInputChange, onSubmit }) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Company Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground">Company Name</label>
            <Input
              type="text"
              id="name"
              name="name"
              value={companyInfo.name}
              onChange={onInputChange}
              className="mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-foreground">Company Address</label>
            <Input
              type="text"
              id="address"
              name="address"
              value={companyInfo.address}
              onChange={onInputChange}
              className="mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-foreground">Contact Information</label>
            <Input
              type="text"
              id="contact"
              name="contact"
              value={companyInfo.contact}
              onChange={onInputChange}
              className="mt-1"
              required
            />
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};