
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface InternalNewsTabProps {
  onNewUpdate: () => void;
}

const InternalNewsTab = ({ onNewUpdate }: InternalNewsTabProps) => {
  const newsUpdates = [
    {
      title: "Updated Security Protocols for Remote Work",
      description: "New guidelines for secure remote access and VPN usage...",
      department: "ICT",
      date: "2024-06-04",
      priority: "High",
      status: "Published"
    },
    {
      title: "Q2 Performance Review Schedule",
      description: "Performance review meetings scheduled for June 15-30...",
      department: "ICT",
      date: "2024-06-03",
      priority: "High",
      status: "Published"
    },
    {
      title: "Budget Allocation Changes for FY 2024",
      description: "Performance review meetings scheduled for June 15-30...",
      department: "ICT",
      date: "2024-06-03",
      priority: "Medium",
      status: "Draft"
    },
    {
      title: "New Employee Onboarding Process",
      description: "Streamlined onboarding process for new hires...",
      department: "HR",
      date: "2024-06-01",
      priority: "Medium",
      status: "Published"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Published":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">● Published</Badge>;
      case "Pending":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">● Pending</Badge>;
      case "Draft":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">● Draft</Badge>;
      case "Rejected":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">● Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Internal News & Updates</h2>
        <Button 
          onClick={onNewUpdate}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          New Update
        </Button>
      </div>

      {/* Filters */}
      <div className="flex space-x-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Department</label>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="hr">Human Resources</SelectItem>
              <SelectItem value="ict">ICT Department</SelectItem>
              <SelectItem value="finance">Finance Department</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Status</label>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* News Updates List */}
      <div className="space-y-4">
        {newsUpdates.map((update, index) => (
          <Card key={index} className="hover:shadow-sm transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{update.title}</h3>
                    {update.priority === "High" && (
                      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High</Badge>
                    )}
                    {update.priority === "Medium" && (
                      <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Medium</Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mb-3">{update.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Department: {update.department}</span>
                    <span>Date: {update.date}</span>
                    {getStatusBadge(update.status)}
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="text-gray-600 border-gray-200 hover:bg-gray-50">
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InternalNewsTab;
