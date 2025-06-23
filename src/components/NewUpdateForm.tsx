
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";

interface NewUpdateFormProps {
  onBack: () => void;
  onPublish: () => void;
}

const NewUpdateForm = ({ onBack, onPublish }: NewUpdateFormProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Information</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">New Update</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input 
                placeholder="e.g., 'Staff Promotion Announcement'"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Department</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hr">Human Resources</SelectItem>
                  <SelectItem value="ict">ICT Department</SelectItem>
                  <SelectItem value="finance">Finance Department</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Date</label>
              <Input 
                placeholder="DDMMYYYY"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Priority</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Content</label>
            <Textarea 
              placeholder="Your content here"
              className="min-h-[200px] resize-none"
            />
          </div>

          <div className="flex justify-between pt-6">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white px-8"
              onClick={onPublish}
            >
              Publish Now
            </Button>
            <Button 
              variant="outline" 
              className="text-green-600 border-green-600 hover:bg-green-50 px-8"
            >
              Save as Draft
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewUpdateForm;
