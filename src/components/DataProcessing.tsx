
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, FileText, Clock, MessageSquare, AlertTriangle } from "lucide-react";

const DataProcessing = () => {
  const [activeTab, setActiveTab] = useState("audit-log");

  // Stats data
  const stats = [
    {
      title: "TOTAL RECORDS",
      value: "12,487",
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "CLEAN RECORDS", 
      value: "10,234",
      icon: Clock,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      title: "ISSUES FOUND",
      value: "1,567",
      icon: MessageSquare,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "DUPLICATES",
      value: "686",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  // Audit Log data
  const auditLogData = [
    {
      issueType: "Missing Email Address",
      affectedRecords: 12,
      suggestedFix: "Prompt department to complete entry",
      department: "Finance",
      status: "Notify",
      action: "Fix"
    },
    {
      issueType: "Invalid Date of Birth",
      affectedRecords: 4,
      suggestedFix: "Merge records or confirm duplicates",
      department: "HR",
      status: "Review",
      action: "Merge"
    },
    {
      issueType: "Unlinked Asset Record",
      affectedRecords: 3,
      suggestedFix: "Correct format or flag for HR check",
      department: "HR",
      status: "Correct",
      action: null
    },
    {
      issueType: "Expired Certificate Entry",
      affectedRecords: 5,
      suggestedFix: "Assign to valid user or mark as unowned",
      department: "IT",
      status: "Reassign",
      action: null
    },
    {
      issueType: "Department Mismatch",
      affectedRecords: 6,
      suggestedFix: "Update with renewed file or archive",
      department: "Planning",
      status: "Achieve",
      action: "Update"
    },
    {
      issueType: "Blank Job Title Field",
      affectedRecords: 2,
      suggestedFix: "Match record to correct department",
      department: "Planning",
      status: "Notify HR",
      action: null
    },
    {
      issueType: "Duplicate National ID",
      affectedRecords: 9,
      suggestedFix: "Request completion from uploader",
      department: "Information",
      status: "Correct",
      action: null
    }
  ];

  // Departmental Records data
  const departmentalRecords = [
    {
      recordId: "REC-2024-001",
      title: "Quarterly Budget Report",
      department: "Finance",
      submittedBy: "Amina Ibrahim Bello",
      status: "Pending",
      date: "2024-06-10",
      actions: ["View", "Approve"]
    },
    {
      recordId: "REC-2024-002",
      title: "Employee Training Records",
      department: "HR",
      submittedBy: "Sani Musa Abdullahi",
      status: "Approved",
      date: "2024-06-08",
      actions: ["View"]
    },
    {
      recordId: "REC-2024-003",
      title: "Infrastructure Maintenance Log",
      department: "HR",
      submittedBy: "Hauwa'u Umar Farouk",
      status: "Approved",
      date: "2024-06-05",
      actions: ["View"]
    },
    {
      recordId: "REC-2024-004",
      title: "Emergency Response Protocol Update",
      department: "IT",
      submittedBy: "Bashir Lawal Dantata",
      status: "Approved",
      date: "2024-06-12",
      actions: ["View"]
    },
    {
      recordId: "REC-2024-005",
      title: "Emergency Response Protocol Update",
      department: "Planning",
      submittedBy: "Zainab Salisu Garba",
      status: "Issues",
      date: "2024-06-15",
      actions: ["View", "Fix"]
    },
    {
      recordId: "REC-2024-006",
      title: "Environmental Impact Study",
      department: "Planning",
      submittedBy: "Yusuf Abdulkadir Nuhu",
      status: "Pending",
      date: "2024-06-12",
      actions: ["View", "Approve"]
    },
    {
      recordId: "REC-2024-007",
      title: "Environmental Impact Study",
      department: "Information",
      submittedBy: "Maryam Kabir Jibrin",
      status: "Published",
      date: "2024-06-15",
      actions: ["View"]
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      "Pending": { variant: "secondary" as const, className: "bg-yellow-100 text-yellow-800" },
      "Approved": { variant: "secondary" as const, className: "bg-green-100 text-green-800" },
      "Issues": { variant: "destructive" as const, className: "bg-red-100 text-red-800" },
      "Published": { variant: "secondary" as const, className: "bg-blue-100 text-blue-800" },
      "Notify": { variant: "secondary" as const, className: "bg-gray-100 text-gray-800" },
      "Review": { variant: "secondary" as const, className: "bg-blue-100 text-blue-800" },
      "Correct": { variant: "secondary" as const, className: "bg-purple-100 text-purple-800" },
      "Reassign": { variant: "secondary" as const, className: "bg-orange-100 text-orange-800" },
      "Achieve": { variant: "secondary" as const, className: "bg-green-100 text-green-800" },
      "Notify HR": { variant: "secondary" as const, className: "bg-yellow-100 text-yellow-800" }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || { variant: "secondary" as const, className: "" };
    
    return (
      <Badge variant={config.variant} className={config.className}>
        {status}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Data Processing</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="departmental-records">Departmental Records</TabsTrigger>
          <TabsTrigger value="smart-validation">Smart Validation</TabsTrigger>
          <TabsTrigger value="audit-log">Audit Log</TabsTrigger>
        </TabsList>

        {/* Departmental Records Tab */}
        <TabsContent value="departmental-records" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Departmental Records</CardTitle>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search"
                    className="pl-10"
                  />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Record ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Submitted By</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {departmentalRecords.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{record.recordId}</TableCell>
                      <TableCell>{record.title}</TableCell>
                      <TableCell>{record.department}</TableCell>
                      <TableCell>{record.submittedBy}</TableCell>
                      <TableCell>{getStatusBadge(record.status)}</TableCell>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {record.actions.map((action, actionIndex) => (
                            <Button
                              key={actionIndex}
                              variant={action === "View" ? "outline" : "default"}
                              size="sm"
                              className={action === "Approve" ? "bg-green-600 hover:bg-green-700 text-white" : 
                                        action === "Fix" ? "bg-blue-600 hover:bg-blue-700 text-white" : ""}
                            >
                              {action}
                            </Button>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Smart Validation Tab */}
        <TabsContent value="smart-validation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Smart Validation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search"
                    className="pl-10"
                  />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Issue Type</TableHead>
                    <TableHead>Affected Records</TableHead>
                    <TableHead>Suggested Fix</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {auditLogData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.issueType}</TableCell>
                      <TableCell>{item.affectedRecords}</TableCell>
                      <TableCell>{item.suggestedFix}</TableCell>
                      <TableCell>{item.department}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <span className="text-gray-600">{item.status}</span>
                          {item.action && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="bg-green-600 hover:bg-green-700 text-white border-green-600"
                            >
                              {item.action}
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audit Log Tab */}
        <TabsContent value="audit-log" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Audit Log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search"
                    className="pl-10"
                  />
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Issue Type</TableHead>
                    <TableHead>Affected Records</TableHead>
                    <TableHead>Suggested Fix</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {auditLogData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.issueType}</TableCell>
                      <TableCell>{item.affectedRecords}</TableCell>  
                      <TableCell>{item.suggestedFix}</TableCell>
                      <TableCell>{item.department}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <span className="text-gray-600">{item.status}</span>
                          {item.action && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="bg-green-600 hover:bg-green-700 text-white border-green-600"
                            >
                              {item.action}
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="bg-green-600 text-white">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <span className="px-4 py-2">...</span>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">8</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">9</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default DataProcessing;
