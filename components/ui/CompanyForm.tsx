"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, MapPin, Phone, Users } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CompanyFormProps {
  companyInfo: {
    name: string;
    address: string;
    contact: string;
    size: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1 
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 24 
    }
  }
};

export const CompanyForm: React.FC<CompanyFormProps> = ({ companyInfo, onInputChange, onSelectChange, onSubmit }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
          <CardTitle className="text-2xl font-bold">Company Registration</CardTitle>
        </CardHeader>
        <CardContent className="mt-6">
          <form onSubmit={onSubmit} className="space-y-6">
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Company Name</label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={companyInfo.name}
                  onChange={onInputChange}
                  className="pl-10 pr-4 py-2 border-2 border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 rounded-md shadow-sm"
                  required
                  placeholder="Enter your company name"
                />
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">Company Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  id="address"
                  name="address"
                  value={companyInfo.address}
                  onChange={onInputChange}
                  className="pl-10 pr-4 py-2 border-2 border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 rounded-md shadow-sm"
                  required
                  placeholder="Enter your company address"
                />
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="contact" className="block text-sm font-medium text-foreground mb-2">Contact Information</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  id="contact"
                  name="contact"
                  value={companyInfo.contact}
                  onChange={onInputChange}
                  className="pl-10 pr-4 py-2 border-2 border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 rounded-md shadow-sm"
                  required
                  placeholder="Enter your contact information"
                />
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="size" className="block text-sm font-medium text-foreground mb-2">Company Size</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-10" />
                <Select name="size" value={companyInfo.size} onValueChange={onSelectChange}>
                  <SelectTrigger className="w-full pl-10">
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-500">201-500 employees</SelectItem>
                    <SelectItem value="501+">501+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Register Company
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};