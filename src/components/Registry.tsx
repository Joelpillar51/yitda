
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { FileText, Clock, Upload, AlertTriangle, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Registry() {
  const [activeTab, setActiveTab] = useState("uploaded-documents");
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const stats = [
    {
      icon: FileText,
      value: "5,247",
      label: "TOTAL DOCUMENTS",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Clock,
      value: "12",
      label: "PENDING APPROVAL",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: Upload,
      value: "45",
      label: "RECENTLY UPLOADED",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: AlertTriangle,
      value: "8",
      label: "EXPIRING DOCUMENTS",
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ];

  const uploadedDocuments = [
    {
      title: "Contract Ref: YT/2025/001",
      category: "Contract",
      department: "Planning",
      dateUploaded: "May 15, 2025"
    },
    {
      title: "Business License Certificate",
      category: "Certificate",
      department: "Registry",
      dateUploaded: "May 10, 2025"
    },
    {
      title: "Procurement Policy 2025",
      category: "Policy",
      department: "Admin Office",
      dateUploaded: "May 08, 2025"
    },
    {
      title: "Staff Promotion Memo Q2",
      category: "Memo",
      department: "Human Resources",
      dateUploaded: "May 04, 2025"
    },
    {
      title: "Partnership MOU - TechCorp",
      category: "MOU",
      department: "Planning",
      dateUploaded: "April 25, 2025"
    },
    {
      title: "Recruitment Framework",
      category: "Guideline",
      department: "HR",
      dateUploaded: "April 20, 2025"
    },
    {
      title: "Cybersecurity Report (2024)",
      category: "Report",
      department: "ICT",
      dateUploaded: "April 10, 2025"
    }
  ];

  const legalVerificationDocuments = [
    {
      title: "Business License Certificate",
      category: "Certificate",
      department: "Registry",
      expiryDate: "May 30, 2025",
      status: "Valid"
    },
    {
      title: "Contract Ref: YT/2025/001",
      category: "Contract",
      department: "Registry",
      expiryDate: "N/A",
      status: "Pending"
    },
    {
      title: "Partnership MOU - TechCorp",
      category: "MOU",
      department: "Planning",
      expiryDate: "April 30, 2025",
      status: "Expired"
    },
    {
      title: "NGO Collaboration Agreement",
      category: "Agreement",
      department: "Human Resources",
      expiryDate: "N/A",
      status: "Pending"
    },
    {
      title: "Tax Clearance Certificate",
      category: "Certificate",
      department: "Accounting",
      expiryDate: "April 30, 2026",
      status: "Valid"
    },
    {
      title: "Land Use Permit",
      category: "Permit",
      department: "Super Admin",
      expiryDate: "May 01, 2026",
      status: "Valid"
    },
    {
      title: "Insurance Bond Document",
      category: "Insurance",
      department: "ICT",
      expiryDate: "Feb 12, 2026",
      status: "Pending"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Valid":
        return <Badge className="bg-green-100 text-green-800 border-green-200">• Valid</Badge>;
      case "Pending":
        return <Badge className="bg-orange-100 text-orange-800 border-orange-200">• Pending</Badge>;
      case "Expired":
        return <Badge className="bg-red-100 text-red-800 border-red-200">• Expired</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handleAction = (action: string, document: string) => {
    toast({
      title: `${action} Initiated`,
      description: `${action} action for "${document}" has been initiated.`,
    });
  };

  const filteredUploadedDocuments = uploadedDocuments.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLegalDocuments = legalVerificationDocuments.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Registry</h1>
      
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs Section */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <TabsList className="grid w-fit grid-cols-2">
            <TabsTrigger value="uploaded-documents">Uploaded Documents</TabsTrigger>
            <TabsTrigger value="legal-verification">Legal Verification</TabsTrigger>
          </TabsList>
          
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full"
            />
          </div>
        </div>

        <TabsContent value="uploaded-documents" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Date Uploaded</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUploadedDocuments.map((doc, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{doc.title}</TableCell>
                      <TableCell>{doc.category}</TableCell>
                      <TableCell>{doc.department}</TableCell>
                      <TableCell>{doc.dateUploaded}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleAction("View", doc.title)}
                        >
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-green-600 border-green-600 hover:bg-green-50"
                          onClick={() => handleAction("Download", doc.title)}
                        >
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="legal-verification" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLegalDocuments.map((doc, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{doc.title}</TableCell>
                      <TableCell>{doc.category}</TableCell>
                      <TableCell>{doc.department}</TableCell>
                      <TableCell>{doc.expiryDate}</TableCell>
                      <TableCell>{getStatusBadge(doc.status)}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleAction("View", doc.title)}
                        >
                          View
                        </Button>
                        {doc.status === "Valid" ? (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600 border-green-600 hover:bg-green-50"
                            onClick={() => handleAction("Download", doc.title)}
                          >
                            Download
                          </Button>
                        ) : doc.status === "Expired" ? (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-orange-600 border-orange-600 hover:bg-orange-50"
                            onClick={() => handleAction("Renew", doc.title)}
                          >
                            Renew
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-blue-600 border-blue-600 hover:bg-blue-50"
                            onClick={() => handleAction("Verify", doc.title)}
                          >
                            Verify
                          </Button>
                        )}
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
            <PaginationLink href="#" className="bg-green-600 text-white hover:bg-green-700">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <span className="px-3 py-2">...</span>
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
}
