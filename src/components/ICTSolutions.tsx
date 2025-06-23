import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { 
  Search, 
  ChevronLeft, 
  ChevronDown, 
  ChevronUp,
  Monitor,
  Clock,
  Laptop,
  AlertTriangle,
  FileText,
  Download
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AssignTechnicianModal from "./AssignTechnicianModal";
import AssignAssetModal from "./AssignAssetModal";
import TicketResolutionModal from "./TicketResolutionModal";
import AssetAssignmentSuccessModal from "./AssetAssignmentSuccessModal";

const ICTSolutions = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedTicket, setExpandedTicket] = useState(null);
  const [showTicketDetails, setShowTicketDetails] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showAssignTechnicianModal, setShowAssignTechnicianModal] = useState(false);
  const [showAssignAssetModal, setShowAssignAssetModal] = useState(false);
  const [showTicketResolutionModal, setShowTicketResolutionModal] = useState(false);
  const [showAssetSuccessModal, setShowAssetSuccessModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const { toast } = useToast();

  // Mock data for statistics
  const stats = [
    {
      icon: Monitor,
      value: "7",
      label: "OPEN TICKETS",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Clock,
      value: "3",
      label: "PENDING TICKETS",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Laptop,
      value: "112",
      label: "TOTAL IT ASSETS",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: AlertTriangle,
      value: "26",
      label: "SOFTWARE INSTALLED",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  // Mock data for tickets
  const tickets = [
    {
      id: "#T-00124",
      title: "Printer not working",
      department: "Planning",
      status: "Open",
      priority: "High",
      assignedTo: "—",
      dateCreated: "May 25, 2025 – 09:42 AM",
      submittedBy: {
        name: "Aisha Bello",
        email: "aisha.bello@yitda.ng",
        phone: "+234 7060124567",
        department: "Registry"
      },
      description: "Printer not working in Registry office. The HP LaserJet printer shows a 'paper jam' error even though it's clear. Staff cannot print any official memos or forms. Issue has affected productivity since yesterday.",
      documents: [
        { name: "printer_error.jpg", size: "245 KB" },
        { name: "troubleshooting Steps.pdf", size: "300 KB" }
      ]
    },
    {
      id: "#T-00125",
      title: "Internet is down",
      department: "Registry",
      status: "In Progress",
      priority: "Medium",
      assignedTo: "Sani A.",
      dateCreated: "May 25, 2025 – 09:42 AM"
    },
    {
      id: "#T-00126",
      title: "Email not syncing",
      department: "Admin Office",
      status: "Resolved",
      priority: "Medium",
      assignedTo: "Yusuf M.",
      dateCreated: "May 24, 2025 – 14:30 PM"
    },
    {
      id: "#T-00127",
      title: "Projector won't connect",
      department: "Human Resources",
      status: "Open",
      priority: "Low",
      assignedTo: "—",
      dateCreated: "May 24, 2025 – 11:15 AM"
    },
    {
      id: "#T-00128",
      title: "Software installation needed",
      department: "Planning",
      status: "In Progress",
      priority: "Medium",
      assignedTo: "Musa Bello",
      dateCreated: "May 24, 2025 – 09:45 AM"
    },
    {
      id: "#T-00129",
      title: "Intranet slow",
      department: "HR",
      status: "In Progress",
      priority: "High",
      assignedTo: "Yusuf M.",
      dateCreated: "May 23, 2025 – 16:20 PM"
    },
    {
      id: "#T-00130",
      title: "Laptop screen flickering",
      department: "ICT",
      status: "Resolved",
      priority: "Medium",
      assignedTo: "Amina J.",
      dateCreated: "May 23, 2025 – 13:10 PM"
    }
  ];

  // Mock data for IT assets
  const assets = [
    {
      name: "Dell Latitude 5510",
      type: "Laptop",
      assignedTo: "Musa Ahmed",
      department: "Planning",
      status: "In Use",
      condition: "Good"
    },
    {
      name: "HP LaserJet 107a",
      type: "Printer",
      assignedTo: "—",
      department: "Registry",
      status: "Available",
      condition: "New"
    },
    {
      name: "MiFi Router ZTE",
      type: "Network",
      assignedTo: "Fatima Bello",
      department: "Admin Office",
      status: "In Use",
      condition: "Fair"
    },
    {
      name: "Lenovo ThinkPad X1",
      type: "Laptop",
      assignedTo: "Aisha Bello",
      department: "Human Resources",
      status: "In Use",
      condition: "Good"
    },
    {
      name: "Epson Scanner 310",
      type: "Scanner",
      assignedTo: "—",
      department: "Planning",
      status: "Available",
      condition: "Excellent"
    },
    {
      name: "Dell Monitor 24\"",
      type: "Monitor",
      assignedTo: "Ibrahim Sulaiman",
      department: "HR",
      status: "In Use",
      condition: "Fair"
    },
    {
      name: "HP Envy 13",
      type: "Laptop",
      assignedTo: "—",
      department: "ICT",
      status: "Available",
      condition: "New"
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      "Open": { variant: "default", className: "bg-blue-100 text-blue-700 border-blue-200" },
      "In Progress": { variant: "secondary", className: "bg-orange-100 text-orange-700 border-orange-200" },
      "Resolved": { variant: "secondary", className: "bg-green-100 text-green-700 border-green-200" },
      "In Use": { variant: "default", className: "bg-blue-100 text-blue-700 border-blue-200" },
      "Available": { variant: "secondary", className: "bg-green-100 text-green-700 border-green-200" }
    };
    
    const config = statusConfig[status] || { variant: "outline", className: "" };
    return <Badge className={config.className}>{status}</Badge>;
  };

  const getPriorityBadge = (priority) => {
    const priorityConfig = {
      "High": "text-red-600",
      "Medium": "text-orange-600",
      "Low": "text-blue-600"
    };
    
    return <span className={priorityConfig[priority] || "text-gray-600"}>{priority}</span>;
  };

  const getConditionBadge = (condition) => {
    const conditionConfig = {
      "Good": "text-green-600",
      "Fair": "text-orange-600",
      "Excellent": "text-green-700",
      "New": "text-blue-600"
    };
    
    return <span className={conditionConfig[condition] || "text-gray-600"}>{condition}</span>;
  };

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowTicketDetails(true);
  };

  const handleAssignTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowAssignTechnicianModal(true);
  };

  const handleAssignAsset = (asset) => {
    setSelectedAsset(asset);
    setShowAssignAssetModal(true);
  };

  const handleResolveTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowTicketResolutionModal(true);
  };

  const handleTechnicianAssignment = (department, technician) => {
    toast({
      title: `Ticket assigned to ${technician}`,
      description: "The technician has been notified and the assignment logged.",
    });
  };

  const handleAssetAssignment = (department, staff) => {
    setShowAssetSuccessModal(true);
  };

  const handleTicketResolution = () => {
    setShowTicketResolutionModal(false);
    toast({
      title: `Ticket ${selectedTicket?.id} marked as resolved`,
      description: "A notification has been sent to the requester and ICT logs have been updated.",
    });
  };

  const handleCloseTicket = () => {
    toast({
      title: "Ticket closed successfully",
      description: "The ticket has been marked as resolved and archived.",
    });
    setShowTicketDetails(false);
  };

  const handleAssignTechnician = () => {
    setShowAssignTechnicianModal(true);
  };

  const handleReassignTechnician = () => {
    setShowAssignTechnicianModal(true);
  };

  const handleViewAssetRecord = () => {
    setShowAssetSuccessModal(false);
    toast({
      title: "Redirecting to asset record",
      description: "Opening detailed asset information.",
    });
  };

  const filteredTickets = tickets.filter(ticket =>
    ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    asset.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (showTicketDetails && selectedTicket) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <Button
            variant="ghost"
            onClick={() => setShowTicketDetails(false)}
            className="p-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to ICT Solutions
          </Button>
        </div>

        <div className="space-y-6">
          {/* Ticket Summary */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Ticket Summary</h3>
              <ChevronUp className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <label className="text-sm text-gray-500">Ticket ID</label>
                <p className="font-medium">{selectedTicket.id}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Date Created</label>
                <p className="font-medium">{selectedTicket.dateCreated}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Status</label>
                <div className="mt-1">{getStatusBadge(selectedTicket.status)}</div>
              </div>
              <div>
                <label className="text-sm text-gray-500">Priority</label>
                <p className="font-medium">{getPriorityBadge(selectedTicket.priority)}</p>
              </div>
            </div>
          </div>

          {/* Submitted By */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Submitted By</h3>
              <ChevronUp className="h-5 w-5 text-gray-400" />
            </div>
            
            {selectedTicket.submittedBy && (
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-500">Name</label>
                  <p className="font-medium">{selectedTicket.submittedBy.name}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Department</label>
                  <p className="font-medium">{selectedTicket.submittedBy.department}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Email</label>
                  <p className="font-medium">{selectedTicket.submittedBy.email}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500">Phone Number</label>
                  <p className="font-medium">{selectedTicket.submittedBy.phone}</p>
                </div>
              </div>
            )}
          </div>

          {/* Issue Description */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Issue Description</h3>
              <ChevronUp className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">Issue Title / Subject</label>
                <p className="font-medium">{selectedTicket.title}</p>
              </div>
              
              <div>
                <label className="text-sm text-gray-500 block mb-2">Description</label>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">{selectedTicket.description}</p>
                  {selectedTicket.description?.includes("Issue has affected productivity") && (
                    <p className="text-red-600 mt-2 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Issue has affected productivity since yesterday.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Uploaded Documents */}
          {selectedTicket.documents && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Uploaded Documents:</h3>
                <ChevronUp className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedTicket.documents.map((doc, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-gray-400" />
                      <div className="flex-1">
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-gray-500">{doc.size}</p>
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                          Click to view
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Assigned Technician */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Assigned Technician</h3>
              <ChevronUp className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-500">Assigned To</label>
                <p className="font-medium">
                  {selectedTicket.assignedTo === "—" ? "Not Yet Assigned" : selectedTicket.assignedTo}
                </p>
              </div>
              {selectedTicket.assignedTo !== "—" && (
                <div>
                  <label className="text-sm text-gray-500">Assigned On</label>
                  <p className="font-medium">May 25, 2025 - 10:15 AM</p>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <div>
              {selectedTicket.assignedTo === "—" ? (
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={handleAssignTechnician}
                >
                  Assign Technician
                </Button>
              ) : (
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={handleReassignTechnician}
                >
                  Reassign Technician
                </Button>
              )}
            </div>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={handleCloseTicket}
            >
              Close Ticket
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <Button
            variant="ghost"
            onClick={() => window.location.reload()}
            className="p-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to ICT Solutions
          </Button>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900">ICT Solutions</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
              Overview
            </TabsTrigger>
            <TabsTrigger value="help-support" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
              IT Help/Support
            </TabsTrigger>
            <TabsTrigger value="asset-inventory" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
              IT Asset Inventory
            </TabsTrigger>
            <TabsTrigger value="software-deployment" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
              Software Deployment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6 space-y-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className={`${stat.bgColor} rounded-lg p-6 border border-gray-200`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Tickets */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Tickets</h3>
                
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ticket</TableHead>
                      <TableHead>Issue Title / Subject</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Assigned to</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTickets.map((ticket) => (
                      <TableRow key={ticket.id}>
                        <TableCell className="font-medium">{ticket.id}</TableCell>
                        <TableCell>{ticket.title}</TableCell>
                        <TableCell>{ticket.department}</TableCell>
                        <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                        <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                        <TableCell>{ticket.assignedTo}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleViewTicket(ticket)}
                            >
                              View
                            </Button>
                            {ticket.assignedTo === "—" ? (
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-green-600 border-green-600 hover:bg-green-50"
                                onClick={() => handleAssignTicket(ticket)}
                              >
                                Assign
                              </Button>
                            ) : ticket.status !== "Resolved" ? (
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-green-600 border-green-600 hover:bg-green-50"
                                onClick={() => handleResolveTicket(ticket)}
                              >
                                Resolve
                              </Button>
                            ) : null}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="p-4 border-t border-gray-200">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
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
            </div>
          </TabsContent>

          <TabsContent value="help-support" className="mt-6">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">IT Help/Support</h3>
                
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ticket</TableHead>
                      <TableHead>Issue Title / Subject</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Assigned to</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTickets.map((ticket) => (
                      <TableRow key={ticket.id}>
                        <TableCell className="font-medium">{ticket.id}</TableCell>
                        <TableCell>{ticket.title}</TableCell>
                        <TableCell>{ticket.department}</TableCell>
                        <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                        <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                        <TableCell>{ticket.assignedTo}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleViewTicket(ticket)}
                            >
                              View
                            </Button>
                            {ticket.assignedTo === "—" ? (
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-green-600 border-green-600 hover:bg-green-50"
                                onClick={() => handleAssignTicket(ticket)}
                              >
                                Assign
                              </Button>
                            ) : ticket.status === "In Progress" ? (
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-green-600 border-green-600 hover:bg-green-50"
                                onClick={() => handleResolveTicket(ticket)}
                              >
                                Resolve
                              </Button>
                            ) : null}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="p-4 border-t border-gray-200">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
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
            </div>
          </TabsContent>

          <TabsContent value="asset-inventory" className="mt-6">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">IT Asset Inventory</h3>
                
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Asset Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Condition</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAssets.map((asset, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{asset.name}</TableCell>
                        <TableCell>{asset.type}</TableCell>
                        <TableCell>{asset.assignedTo}</TableCell>
                        <TableCell>{asset.department}</TableCell>
                        <TableCell>{getStatusBadge(asset.status)}</TableCell>
                        <TableCell>{getConditionBadge(asset.condition)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            {asset.status === "Available" && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-green-600 border-green-600 hover:bg-green-50"
                                onClick={() => handleAssignAsset(asset)}
                              >
                                Assign
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="p-4 border-t border-gray-200">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
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
            </div>
          </TabsContent>

          <TabsContent value="software-deployment" className="mt-6">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Software Deployment</h3>
                
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ticket</TableHead>
                      <TableHead>Issue Title / Subject</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Assigned to</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTickets.filter(ticket => ticket.title.includes("Software") || ticket.title.includes("installation")).map((ticket) => (
                      <TableRow key={ticket.id}>
                        <TableCell className="font-medium">{ticket.id}</TableCell>
                        <TableCell>{ticket.title}</TableCell>
                        <TableCell>{ticket.department}</TableCell>
                        <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                        <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                        <TableCell>{ticket.assignedTo}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                            {ticket.status === "In Progress" && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-green-600 border-green-600 hover:bg-green-50"
                              >
                                Resolved
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="p-4 border-t border-gray-200">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
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
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modals */}
      <AssignTechnicianModal
        isOpen={showAssignTechnicianModal}
        onClose={() => setShowAssignTechnicianModal(false)}
        onAssign={handleTechnicianAssignment}
        selectedTicket={selectedTicket}
      />

      <AssignAssetModal
        isOpen={showAssignAssetModal}
        onClose={() => setShowAssignAssetModal(false)}
        onAssign={handleAssetAssignment}
        selectedAsset={selectedAsset}
      />

      <TicketResolutionModal
        isOpen={showTicketResolutionModal}
        onClose={() => setShowTicketResolutionModal(false)}
        onConfirm={handleTicketResolution}
        ticket={selectedTicket}
      />

      <AssetAssignmentSuccessModal
        isOpen={showAssetSuccessModal}
        onClose={() => setShowAssetSuccessModal(false)}
        onViewRecord={handleViewAssetRecord}
        assetName={selectedAsset?.name}
      />
    </>
  );
};

export default ICTSolutions;
