
import { useState } from "react";
import { Search, Plus, Calendar, User, Wrench, Package, Eye, Edit2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface ScheduleTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSchedule: () => void;
}

function ScheduleTaskModal({ isOpen, onClose, onSchedule }: ScheduleTaskModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-4 sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Schedule Maintenance Task</DialogTitle>
          <DialogDescription>Schedule a new maintenance task for the selected equipment.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Task Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Equipment</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Select equipment</option>
              <option>Generator Set A</option>
              <option>Air Conditioning Unit B</option>
              <option>Network Server</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Scheduled Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Normal</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button onClick={onSchedule} className="bg-green-600 hover:bg-green-700 text-white flex-1">
              Schedule Task
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface AssignAssetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAssign: () => void;
}

function AssignAssetModal({ isOpen, onClose, onAssign }: AssignAssetModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-4 sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Assign Asset</DialogTitle>
          <DialogDescription>Assign this asset to a department or individual.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Asset</label>
            <input
              type="text"
              value="Dell Laptop - DL001"
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Assign To</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Select assignee</option>
              <option>John Doe - IT Department</option>
              <option>Jane Smith - HR Department</option>
              <option>Planning Department</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Assignment Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={3}
              placeholder="Additional notes..."
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button onClick={onAssign} className="bg-green-600 hover:bg-green-700 text-white flex-1">
              Assign Asset
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface AssignTechnicianModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAssign: () => void;
}

function AssignTechnicianModal({ isOpen, onClose, onAssign }: AssignTechnicianModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-4 sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Assign Technician</DialogTitle>
          <DialogDescription>Assign a technician to this maintenance task.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Task</label>
            <input
              type="text"
              value="Generator Maintenance - GEN-001"
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Technician</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Select technician</option>
              <option>Ahmed Bello - Electrical</option>
              <option>Fatima Usman - Mechanical</option>
              <option>Ibrahim Musa - IT Support</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Duration</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>2 hours</option>
              <option>4 hours</option>
              <option>1 day</option>
              <option>2-3 days</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Instructions</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={3}
              placeholder="Any special instructions for the technician..."
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button onClick={onAssign} className="bg-green-600 hover:bg-green-700 text-white flex-1">
              Assign Technician
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

function SuccessModal({ isOpen, onClose, title, message }: SuccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-4 sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-green-600">{title}</DialogTitle>
          <DialogDescription>{message}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button onClick={onClose} className="bg-green-600 hover:bg-green-700 text-white">
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Maintenance() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("repair-requests");
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showAssignAssetModal, setShowAssignAssetModal] = useState(false);
  const [showAssignTechnicianModal, setShowAssignTechnicianModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successData, setSuccessData] = useState({ title: "", message: "" });

  const tabs = [
    { id: "repair-requests", label: "Repair & Technical Support Requests", active: activeTab === "repair-requests" },
    { id: "asset-inventory", label: "Asset Inventory", active: activeTab === "asset-inventory" },
    { id: "maintenance-schedule", label: "Routine Maintenance Schedule", active: activeTab === "maintenance-schedule" },
    { id: "technician-assignment", label: "Technician Assignment", active: activeTab === "technician-assignment" }
  ];

  const repairRequests = [
    { id: "REQ-001", equipment: "Generator Set A", department: "Administration", dateReported: "2025-05-26", priority: "High", status: "In Progress", assignedTo: "Ahmed Bello" },
    { id: "REQ-002", equipment: "Air Conditioning Unit", department: "HR", dateReported: "2025-05-25", priority: "Medium", status: "Pending", assignedTo: "-" },
    { id: "REQ-003", equipment: "Network Server", department: "ICT", dateReported: "2025-05-24", priority: "Critical", status: "Completed", assignedTo: "Ibrahim Musa" },
  ];

  const assetInventory = [
    { id: "AST-001", name: "Dell Laptop", model: "Latitude 5520", serialNumber: "DL001", department: "IT", status: "Active", lastMaintenance: "2025-04-15" },
    { id: "AST-002", name: "HP Printer", model: "LaserJet Pro", serialNumber: "HP002", department: "Admin", status: "Maintenance", lastMaintenance: "2025-05-20" },
    { id: "AST-003", name: "Projector", model: "Epson EB-X41", serialNumber: "EP003", department: "Conference", status: "Active", lastMaintenance: "2025-03-10" },
  ];

  const maintenanceSchedule = [
    { id: "SCH-001", equipment: "Generator Set A", type: "Preventive", scheduledDate: "2025-06-01", frequency: "Monthly", technician: "Ahmed Bello", status: "Scheduled" },
    { id: "SCH-002", equipment: "HVAC System", type: "Inspection", scheduledDate: "2025-06-05", frequency: "Quarterly", technician: "Fatima Usman", status: "Overdue" },
    { id: "SCH-003", equipment: "Fire Safety Equipment", type: "Testing", scheduledDate: "2025-06-10", frequency: "Monthly", technician: "Musa Ibrahim", status: "Scheduled" },
  ];

  const technicianAssignments = [
    { id: "TECH-001", name: "Ahmed Bello", specialty: "Electrical", currentTasks: 3, availability: "Available", department: "Maintenance", phone: "+234-xxx-xxxx" },
    { id: "TECH-002", name: "Fatima Usman", specialty: "Mechanical", currentTasks: 2, availability: "Busy", department: "Maintenance", phone: "+234-xxx-xxxx" },
    { id: "TECH-003", name: "Ibrahim Musa", specialty: "IT Support", currentTasks: 1, availability: "Available", department: "ICT", phone: "+234-xxx-xxxx" },
  ];

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      "In Progress": "bg-blue-100 text-blue-800",
      "Pending": "bg-yellow-100 text-yellow-800",
      "Completed": "bg-green-100 text-green-800",
      "Critical": "bg-red-100 text-red-800",
      "Active": "bg-green-100 text-green-800",
      "Maintenance": "bg-yellow-100 text-yellow-800",
      "Scheduled": "bg-blue-100 text-blue-800",
      "Overdue": "bg-red-100 text-red-800",
      "Available": "bg-green-100 text-green-800",
      "Busy": "bg-red-100 text-red-800"
    };
    return `px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || "bg-gray-100 text-gray-800"}`;
  };

  const getPriorityBadge = (priority: string) => {
    const priorityStyles = {
      "High": "bg-orange-100 text-orange-800",
      "Medium": "bg-yellow-100 text-yellow-800",
      "Critical": "bg-red-100 text-red-800",
      "Low": "bg-green-100 text-green-800"
    };
    return `px-2 py-1 text-xs font-medium rounded-full ${priorityStyles[priority] || "bg-gray-100 text-gray-800"}`;
  };

  const handleScheduleTask = () => {
    setShowScheduleModal(false);
    setSuccessData({
      title: "Task Scheduled Successfully",
      message: "The maintenance task has been scheduled and assigned to the selected technician."
    });
    setShowSuccessModal(true);
    toast({
      title: "Task Scheduled",
      description: "The maintenance task has been scheduled successfully.",
    });
  };

  const handleAssignAsset = () => {
    setShowAssignAssetModal(false);
    setSuccessData({
      title: "Asset Assigned Successfully",
      message: "The asset has been assigned to the selected person/department and updated in the inventory."
    });
    setShowSuccessModal(true);
    toast({
      title: "Asset Assigned",
      description: "The asset has been assigned successfully.",
    });
  };

  const handleAssignTechnician = () => {
    setShowAssignTechnicianModal(false);
    setSuccessData({
      title: "Technician Assigned Successfully",
      message: "The technician has been assigned to the maintenance task and will be notified."
    });
    setShowSuccessModal(true);
    toast({
      title: "Technician Assigned",
      description: "The technician has been assigned successfully.",
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "repair-requests":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <h3 className="text-lg font-semibold">Repair & Technical Support Requests</h3>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white text-sm"
                onClick={() => setShowScheduleModal(true)}
              >
                <Plus className="w-4 h-4 mr-2" />
                New Request
              </Button>
            </div>

            <div className="bg-white rounded-lg border">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search requests..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Request ID</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Equipment</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Department</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Date Reported</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {repairRequests.map((request) => (
                      <tr key={request.id} className="hover:bg-gray-50">
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{request.id}</td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">
                          <div className="font-medium">{request.equipment}</div>
                          <div className="text-xs text-gray-500 sm:hidden">{request.department}</div>
                          <div className="text-xs text-gray-500 md:hidden">{request.dateReported}</div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600 hidden sm:table-cell">{request.department}</td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600 hidden md:table-cell">{request.dateReported}</td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <span className={getPriorityBadge(request.priority)}>{request.priority}</span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <span className={getStatusBadge(request.status)}>{request.status}</span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm space-x-1 sm:space-x-2">
                          <Button variant="ghost" size="sm" className="text-xs p-1 sm:p-2">
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-xs p-1 sm:p-2"
                            onClick={() => setShowAssignTechnicianModal(true)}
                          >
                            <User className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "asset-inventory":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <h3 className="text-lg font-semibold">Asset Inventory</h3>
              <Button className="bg-green-600 hover:bg-green-700 text-white text-sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Asset
              </Button>
            </div>

            <div className="bg-white rounded-lg border">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search assets..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Asset ID</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Model</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Serial Number</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {assetInventory.map((asset) => (
                      <tr key={asset.id} className="hover:bg-gray-50">
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{asset.id}</td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">
                          <div className="font-medium">{asset.name}</div>
                          <div className="text-xs text-gray-500 sm:hidden">{asset.model}</div>
                          <div className="text-xs text-gray-500 md:hidden">{asset.serialNumber}</div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600 hidden sm:table-cell">{asset.model}</td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600 hidden md:table-cell">{asset.serialNumber}</td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <span className={getStatusBadge(asset.status)}>{asset.status}</span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm space-x-1 sm:space-x-2">
                          <Button variant="ghost" size="sm" className="text-xs p-1 sm:p-2">
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-xs p-1 sm:p-2"
                            onClick={() => setShowAssignAssetModal(true)}
                          >
                            <Package className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "maintenance-schedule":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <h3 className="text-lg font-semibold">Routine Maintenance Schedule</h3>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white text-sm"
                onClick={() => setShowScheduleModal(true)}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Task
              </Button>
            </div>

            <div className="bg-white rounded-lg border">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search schedule..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Schedule ID</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Equipment</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Type</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Scheduled Date</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {maintenanceSchedule.map((schedule) => (
                      <tr key={schedule.id} className="hover:bg-gray-50">
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{schedule.id}</td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">
                          <div className="font-medium">{schedule.equipment}</div>
                          <div className="text-xs text-gray-500 sm:hidden">{schedule.type}</div>
                          <div className="text-xs text-gray-500 md:hidden">{schedule.scheduledDate}</div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600 hidden sm:table-cell">{schedule.type}</td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600 hidden md:table-cell">{schedule.scheduledDate}</td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <span className={getStatusBadge(schedule.status)}>{schedule.status}</span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm space-x-1 sm:space-x-2">
                          <Button variant="ghost" size="sm" className="text-xs p-1 sm:p-2">
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-xs p-1 sm:p-2">
                            <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "technician-assignment":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <h3 className="text-lg font-semibold">Technician Assignment</h3>
              <Button className="bg-green-600 hover:bg-green-700 text-white text-sm">
                <User className="w-4 h-4 mr-2" />
                Add Technician
              </Button>
            </div>

            <div className="bg-white rounded-lg border">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search technicians..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Technician ID</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Specialty</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Current Tasks</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Availability</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {technicianAssignments.map((technician) => (
                      <tr key={technician.id} className="hover:bg-gray-50">
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{technician.id}</td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">
                          <div className="font-medium">{technician.name}</div>
                          <div className="text-xs text-gray-500 sm:hidden">{technician.specialty}</div>
                          <div className="text-xs text-gray-500 md:hidden">{technician.currentTasks} tasks</div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600 hidden sm:table-cell">{technician.specialty}</td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600 hidden md:table-cell">{technician.currentTasks}</td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <span className={getStatusBadge(technician.availability)}>{technician.availability}</span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm space-x-1 sm:space-x-2">
                          <Button variant="ghost" size="sm" className="text-xs p-1 sm:p-2">
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-xs p-1 sm:p-2"
                            onClick={() => setShowAssignTechnicianModal(true)}
                          >
                            <Wrench className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Maintenance</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">12</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">ACTIVE REQUESTS</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">248</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">TOTAL ASSETS</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">8</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">SCHEDULED TASKS</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">6</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">TECHNICIANS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="border-b border-gray-200 overflow-x-auto">
          <nav className="flex space-x-4 sm:space-x-8 px-4 sm:px-6 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  tab.active
                    ? "border-green-500 text-green-600 bg-green-50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 sm:p-6">
          {renderTabContent()}
        </div>
      </div>

      {/* Modals */}
      <ScheduleTaskModal
        isOpen={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
        onSchedule={handleScheduleTask}
      />

      <AssignAssetModal
        isOpen={showAssignAssetModal}
        onClose={() => setShowAssignAssetModal(false)}
        onAssign={handleAssignAsset}
      />

      <AssignTechnicianModal
        isOpen={showAssignTechnicianModal}
        onClose={() => setShowAssignTechnicianModal(false)}
        onAssign={handleAssignTechnician}
      />

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title={successData.title}
        message={successData.message}
      />
    </div>
  );
}
