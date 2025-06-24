
import { useState } from "react";
import { Search, Check, Clock, MessageSquare, AlertTriangle, Plus, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Maintenance = () => {
  const [activeTab, setActiveTab] = useState("repair-requests");
  const [searchTerm, setSearchTerm] = useState("");
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showAssignAssetModal, setShowAssignAssetModal] = useState(false);
  const [showAssignTechnicianModal, setShowAssignTechnicianModal] = useState(false);
  const [showTaskScheduledModal, setShowTaskScheduledModal] = useState(false);
  const [showTaskAssignedModal, setShowTaskAssignedModal] = useState(false);
  const [showAssetAssignedModal, setShowAssetAssignedModal] = useState(false);

  const stats = [
    { icon: Check, value: "1,247", label: "TOTAL ACTIVE ASSETS", bgColor: "bg-green-50", iconColor: "text-green-500" },
    { icon: Clock, value: "23", label: "PENDING REPAIR REQUESTS", bgColor: "bg-orange-50", iconColor: "text-orange-500" },
    { icon: MessageSquare, value: "89", label: "SCHEDULED TASKS THIS MONTH", bgColor: "bg-blue-50", iconColor: "text-blue-500" },
    { icon: AlertTriangle, value: "8", label: "ITEMS 'OUT OF SERVICE'", bgColor: "bg-red-50", iconColor: "text-red-500" },
  ];

  const assetInventory = [
    { assetName: "Dell Latitude 5510", type: "Laptop", assignedTo: "Musa Ahmed", location: "Building A - Roof", condition: "Good", status: "Active" },
    { assetName: "HP LaserJet 107a", type: "Printer", assignedTo: "—", location: "Building A - Roof", condition: "New", status: "Active" },
    { assetName: "MiFi Router ZTE", type: "Network", assignedTo: "Fatima Bello", location: "Building A - Roof", condition: "Fair", status: "Need Service" },
    { assetName: "Lenovo ThinkPad X1", type: "Laptop", assignedTo: "Aisha Bello", location: "Building A - Roof", condition: "Good", status: "Active" },
    { assetName: "Epson Scanner 310", type: "Scanner", assignedTo: "—", location: "Building A - Roof", condition: "Excellent", status: "Active" },
    { assetName: "Dell Monitor 24\"", type: "Monitor", assignedTo: "Ibrahim Sulaiman", location: "Building A - Roof", condition: "Fair", status: "Need Service" },
    { assetName: "HP Envy 13", type: "Laptop", assignedTo: "—", location: "Building A - Roof", condition: "New", status: "Active" },
  ];

  const repairRequests = [
    { recordId: "REQ-001", issueSummary: "Air conditioning malfunction", assetInvolved: "HVAC Unit - Building A", department: "Finance", status: "In Progress", assignedTechnician: "Musa Ahmed" },
    { recordId: "REQ-002", issueSummary: "Electrical outlet not working", assetInvolved: "Power System - Room 204", department: "HR", status: "Completed", assignedTechnician: "Fatima Bello" },
    { recordId: "REQ-003", issueSummary: "Water leak in ceiling", assetInvolved: "Plumbing - Floor 3", department: "HR", status: "Completed", assignedTechnician: "Aisha Bello" },
    { recordId: "REQ-004", issueSummary: "Security camera offline", assetInvolved: "CCTV System - Entrance", department: "IT", status: "Completed", assignedTechnician: "Aisha Bello" },
    { recordId: "REQ-005", issueSummary: "Security camera offline", assetInvolved: "CCTV System - Entrance", department: "Planning", status: "Pending", assignedTechnician: "-" },
    { recordId: "REQ-006", issueSummary: "Security camera offline", assetInvolved: "CCTV System - Back", department: "Planning", status: "In Progress", assignedTechnician: "Aisha Bello" },
    { recordId: "REQ-007", issueSummary: "Water leak in ceiling", assetInvolved: "Plumbing - Floor 3", department: "Information", status: "Published", assignedTechnician: "Aisha Bello" },
  ];

  const maintenanceTasks = [
    { title: "Generator Inspection", subtitle: "Backup Generator - Building A", assignedTo: "John Smith", dueDate: "Dec 15, 2024", status: "Pending" },
    { title: "Safety Audit", subtitle: "Main Generator - Building B", assignedTo: "Sarah Johnson", dueDate: "Jan 10, 2025", status: "Completed" },
    { title: "Performance Review", subtitle: "Emergency Generator - Building C", assignedTo: "Mike Lee", dueDate: "Nov 5, 2024", status: "Completed" },
    { title: "Fuel Inspection", subtitle: "Standby Generator - Building D", assignedTo: "Emma Wilson", dueDate: "Feb 20, 2025", status: "Pending" },
    { title: "Maintenance Check", subtitle: "Portable Generator - Outdoor", assignedTo: "David Brown", dueDate: "Mar 15, 2025", status: "Scheduled" },
    { title: "Battery Replacement", subtitle: "Uninterruptible Power Supply (UPS)", assignedTo: "Sarah Johnson", dueDate: "Jan 10, 2025", status: "Completed" },
    { title: "Software Update", subtitle: "Network Router", assignedTo: "Mike Lee", dueDate: "Feb 20, 2025", status: "Scheduled" },
    { title: "Safety Inspection", subtitle: "Fire Alarm System", assignedTo: "Emily Davis", dueDate: "Apr 5, 2025", status: "Scheduled" },
    { title: "Parts Replacement", subtitle: "HVAC Unit", assignedTo: "John Smith", dueDate: "May 30, 2025", status: "Pending" },
  ];

  const technicians = [
    { name: "Musa Tanimu", department: "HVAC & Electrical", currentTasks: 3, completed: 12, status: "Available" },
    { name: "Musa Tanimu", department: "HVAC & Electrical", currentTasks: 3, completed: 12, status: "Busy" },
    { name: "Lara Alabi", department: "Plumbing", currentTasks: 5, completed: 8, status: "Busy" },
    { name: "Ibrahim Khan", department: "Electrical", currentTasks: 3, completed: 10, status: "Available" },
    { name: "Omar Farooq", department: "Carpentry", currentTasks: 4, completed: 7, status: "Available" },
    { name: "Zaid Ahmed", department: "Masonry", currentTasks: 2, completed: 12, status: "Busy" },
    { name: "Yusuf Malik", department: "Landscaping", currentTasks: 1, completed: 15, status: "Available" },
    { name: "Khalid Rahman", department: "HVAC", currentTasks: 6, completed: 9, status: "Available" },
    { name: "Sultan Ali", department: "Roofing", currentTasks: 7, completed: 5, status: "Available" },
  ];

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      "Active": "bg-green-100 text-green-800",
      "Need Service": "bg-red-100 text-red-800",
      "In Progress": "bg-orange-100 text-orange-800",
      "Completed": "bg-green-100 text-green-800",
      "Pending": "bg-red-100 text-red-800",
      "Published": "bg-blue-100 text-blue-800",
      "Scheduled": "bg-blue-100 text-blue-800",
      "Available": "bg-green-100 text-green-800",
      "Busy": "bg-red-100 text-red-800",
    };
    return statusStyles[status as keyof typeof statusStyles] || "bg-gray-100 text-gray-800";
  };

  const getConditionBadge = (condition: string) => {
    const conditionStyles = {
      "Good": "bg-green-100 text-green-800",
      "New": "bg-blue-100 text-blue-800",
      "Fair": "bg-orange-100 text-orange-800",
      "Excellent": "bg-green-100 text-green-800",
    };
    return conditionStyles[condition as keyof typeof conditionStyles] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Maintenance</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className={`${stat.bgColor} rounded-lg p-6`}>
                <div className="flex items-center">
                  <div className={`${stat.iconColor} mr-4`}>
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="repair-requests" className="text-sm">
                Repair & Technical Support Requests
              </TabsTrigger>
              <TabsTrigger value="asset-inventory" className="text-sm">
                Asset Inventory
              </TabsTrigger>
              <TabsTrigger value="routine-maintenance" className="text-sm">
                Routine Maintenance Schedule
              </TabsTrigger>
              <TabsTrigger value="technician-assignment" className="text-sm">
                Technician Assignment
              </TabsTrigger>
            </TabsList>

            {/* Repair & Technical Support Requests Tab */}
            <TabsContent value="repair-requests">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium">Repair & Technical Support Requests</h2>
                    <Button className="bg-green-600 hover:bg-green-700">Export</Button>
                  </div>
                  <div className="mt-4">
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Record ID</TableHead>
                        <TableHead>Issue Summary</TableHead>
                        <TableHead>Asset Involved</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Assigned Technician</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {repairRequests.map((request, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{request.recordId}</TableCell>
                          <TableCell>{request.issueSummary}</TableCell>
                          <TableCell>{request.assetInvolved}</TableCell>
                          <TableCell>{request.department}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(request.status)}`}>
                              {request.status}
                            </span>
                          </TableCell>
                          <TableCell>{request.assignedTechnician}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">View</Button>
                              {request.status === "Pending" && (
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">Assign</Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="p-4 border-t">
                  <Pagination>
                    <PaginationContent>
                      <PaginationPrevious />
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>...</PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">8</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">9</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">10</PaginationLink>
                      </PaginationItem>
                      <PaginationNext />
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </TabsContent>

            {/* Asset Inventory Tab */}
            <TabsContent value="asset-inventory">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-medium mb-4">Asset Inventory</h2>
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
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
                        <TableHead>Location</TableHead>
                        <TableHead>Condition</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {assetInventory.map((asset, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{asset.assetName}</TableCell>
                          <TableCell>{asset.type}</TableCell>
                          <TableCell>{asset.assignedTo}</TableCell>
                          <TableCell>{asset.location}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionBadge(asset.condition)}`}>
                              {asset.condition}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(asset.status)}`}>
                              {asset.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            {asset.status === "Need Service" ? (
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">Assign</Button>
                            ) : null}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="p-4 border-t">
                  <Pagination>
                    <PaginationContent>
                      <PaginationPrevious />
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>...</PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">8</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">9</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">10</PaginationLink>
                      </PaginationItem>
                      <PaginationNext />
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </TabsContent>

            {/* Routine Maintenance Schedule Tab */}
            <TabsContent value="routine-maintenance">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium">Routine Maintenance Schedule</h2>
                    <Button 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => setShowScheduleModal(true)}
                    >
                      Schedule New Task
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {maintenanceTasks.map((task, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(task.status)}`}>
                            {task.status}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">{task.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{task.subtitle}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="font-medium">Assigned:</span>
                            <span>{task.assignedTo}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Due:</span>
                            <span>{task.dueDate}</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full mt-4 bg-green-600 hover:bg-green-700"
                          onClick={() => setShowAssignTechnicianModal(true)}
                        >
                          Assign Task
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t">
                  <Pagination>
                    <PaginationContent>
                      <PaginationPrevious />
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>...</PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">8</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">9</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">10</PaginationLink>
                      </PaginationItem>
                      <PaginationNext />
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </TabsContent>

            {/* Technician Assignment Tab */}
            <TabsContent value="technician-assignment">
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-medium mb-4">Routine Maintenance Schedule</h2>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technicians.map((technician, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(technician.status)}`}>
                            {technician.status}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">{technician.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{technician.department}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="font-medium">Current Tasks</span>
                            <span>{technician.currentTasks}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Completed:</span>
                            <span>{technician.completed}</span>
                          </div>
                        </div>
                        <Button 
                          className="w-full mt-4 bg-green-600 hover:bg-green-700"
                          onClick={() => setShowAssignTechnicianModal(true)}
                        >
                          Assign Task
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t">
                  <Pagination>
                    <PaginationContent>
                      <PaginationPrevious />
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>...</PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">8</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">9</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">10</PaginationLink>
                      </PaginationItem>
                      <PaginationNext />
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Schedule New Task Modal */}
      <Dialog open={showScheduleModal} onOpenChange={setShowScheduleModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Schedule New Task</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setShowScheduleModal(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Task Name</label>
              <input
                type="text"
                placeholder="Enter Task Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Description</label>
              <textarea
                placeholder="Enter Description"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Assigned To?</label>
              <input
                type="text"
                placeholder="Select Technician"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Due Date</label>
              <input
                type="text"
                placeholder="Select Date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <Button
              variant="outline"
              className="flex-1 py-3"
              onClick={() => setShowScheduleModal(false)}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 py-3 bg-green-600 hover:bg-green-700"
              onClick={() => {
                setShowScheduleModal(false);
                setShowTaskScheduledModal(true);
              }}
            >
              Schedule Task
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Assign Asset Modal */}
      <Dialog open={showAssignAssetModal} onOpenChange={setShowAssignAssetModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Assign Asset</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setShowAssignAssetModal(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Department</label>
              <input
                type="text"
                placeholder="Select Department"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Select Staff</label>
              <input
                type="text"
                placeholder="Search or select Select Staff"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <Button
              variant="outline"
              className="flex-1 py-3"
              onClick={() => setShowAssignAssetModal(false)}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white"
              onClick={() => {
                setShowAssignAssetModal(false);
                setShowAssetAssignedModal(true);
              }}
            >
              Assign Asset
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Assign Technician Modal */}
      <Dialog open={showAssignTechnicianModal} onOpenChange={setShowAssignTechnicianModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Assign Technician</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setShowAssignTechnicianModal(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Department</label>
              <input
                type="text"
                placeholder="Select Department"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Technician</label>
              <input
                type="text"
                placeholder="Search or select Select Staff"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <Button
              variant="outline"
              className="flex-1 py-3"
              onClick={() => setShowAssignTechnicianModal(false)}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 py-3 bg-green-600 hover:bg-green-700"
              onClick={() => {
                setShowAssignTechnicianModal(false);
                setShowTaskAssignedModal(true);
              }}
            >
              Assign Asset
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Task Scheduled Success Modal */}
      <Dialog open={showTaskScheduledModal} onOpenChange={setShowTaskScheduledModal}>
        <DialogContent className="max-w-2xl text-center">
          <DialogHeader>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setShowTaskScheduledModal(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          <div className="py-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Maintenance Task Scheduled</h2>
            <p className="text-gray-600 mb-8">
              The maintenance task has been successfully added to the schedule. A notification has been sent to the assigned team.
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 py-3"
              onClick={() => setShowTaskScheduledModal(false)}
            >
              Close
            </Button>
            <Button className="flex-1 py-3 bg-green-600 hover:bg-green-700">
              Schedule Another
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Task Assigned Success Modal */}
      <Dialog open={showTaskAssignedModal} onOpenChange={setShowTaskAssignedModal}>
        <DialogContent className="max-w-2xl text-center">
          <DialogHeader>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setShowTaskAssignedModal(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          <div className="py-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Task Assigned Successfully</h2>
            <p className="text-gray-600 mb-8">
              The repair/maintenance task has been assigned. The technician has been notified.
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 py-3"
              onClick={() => setShowTaskAssignedModal(false)}
            >
              Close
            </Button>
            <Button className="flex-1 py-3 bg-green-600 hover:bg-green-700">
              Assign Another
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Asset Assigned Success Modal */}
      <Dialog open={showAssetAssignedModal} onOpenChange={setShowAssetAssignedModal}>
        <DialogContent className="max-w-2xl text-center">
          <DialogHeader>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setShowAssetAssignedModal(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          <div className="py-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Asset Assigned Successfully</h2>
            <p className="text-gray-600 mb-8">
              Dell Latitude 5510 has been assigned to Musa Ahmed (ICT Department). An update has been logged in the asset history.
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 py-3"
              onClick={() => setShowAssetAssignedModal(false)}
            >
              Close
            </Button>
            <Button className="flex-1 py-3 bg-green-600 hover:bg-green-700">
              View Asset Record
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Maintenance;
