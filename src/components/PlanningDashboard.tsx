import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, FileText } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { PlanningSuccessModal } from "@/components/PlanningSuccessModal";
import { PlanningRejectionModal } from "@/components/PlanningRejectionModal";
import { useToast } from "@/hooks/use-toast";

interface PlanningDashboardProps {
  onViewProject?: (project: any) => void;
  onAddProject?: () => void;
  onViewDocument?: (document: any) => void;
  onUploadDocument?: () => void;
  onViewKPI?: (kpi: any) => void;
  onAddKPI?: () => void;
}

export function PlanningDashboard({ 
  onViewProject, 
  onAddProject, 
  onViewDocument, 
  onUploadDocument,
  onViewKPI,
  onAddKPI 
}: PlanningDashboardProps) {
  const [activeTab, setActiveTab] = useState("strategic-projects");
  const [successModal, setSuccessModal] = useState({ isOpen: false, title: "", message: "" });
  const [rejectionModal, setRejectionModal] = useState({ isOpen: false, title: "", message: "", confirmButtonText: "", projectName: "" });
  const { toast } = useToast();

  const strategicProjects = [
    { id: 1, name: "Smart City Initiative", budget: "₦25,000,000", department: "ICT & Planning", status: "Pending", timeline: "Jan-Dec 2025", progress: "0%" },
    { id: 2, name: "Youth Tech Engagement", budget: "₦1billion", department: "Planning", status: "Approved", timeline: "Q2 2025", progress: "40%" },
    { id: 3, name: "Infrastructure Review", budget: "₦25,000,000", department: "Planning", status: "Approved", timeline: "Q3 2025", progress: "60%" },
    { id: 4, name: "Digital Maintenance Request System", budget: "₦25,000,000", department: "HR Admin", status: "Approved", timeline: "Jan-Dec 2025", progress: "40%" },
    { id: 5, name: "Training", budget: "₦25,000,000", department: "Planning", status: "Approved", timeline: "2026", progress: "40%" },
    { id: 6, name: "AI Research Documentation Hub", budget: "₦25,000,000", department: "AI & Robotics", status: "Approved", timeline: "2026", progress: "40%" },
    { id: 7, name: "Digital HR Management System", budget: "₦25,000,000", department: "HR Admin", status: "Approved", timeline: "2026", progress: "40%" },
  ];

  const policyDocuments = [
    { id: 1, title: "Strategic Development Plan 2024-2028", type: "Strategic Plan", uploadedBy: "Admin (Planning)", dateAdded: "2024-03-15" },
    { id: 2, title: "Digital Transformation Guidelines", type: "Framework", uploadedBy: "Ibrahim Musa", dateAdded: "2024-03-10" },
    { id: 3, title: "Community Engagement Standards", type: "Policy", uploadedBy: "Amina Ibrahim", dateAdded: "2024-03-08" },
    { id: 4, title: "Infrastructure Investment Strategy", type: "Strategic Plan", uploadedBy: "Musa Tanko", dateAdded: "2024-03-05" },
    { id: 5, title: "Environmental Protection Policy", type: "Policy", uploadedBy: "Bafa Usman", dateAdded: "2024-03-05" },
    { id: 6, title: "2025 Strategic Plan", type: "Strategic Plan", uploadedBy: "Admin (Planning)", dateAdded: "2024-03-05" },
    { id: 7, title: "Internal Policy Guide", type: "Policy", uploadedBy: "HR Admin", dateAdded: "2024-03-01" },
  ];

  const departmentalGoals = [
    { id: 1, department: "Human Resources", assignedKPIs: "6 KPIs", targetTimeline: "Q2 2025", progress: "1/6", status: "Behind" },
    { id: 2, department: "Planning & Strategy", assignedKPIs: "8 KPIs", targetTimeline: "Q1 2025", progress: "6/8", status: "On Track" },
    { id: 3, department: "Accounting & Finance", assignedKPIs: "5 KPIs", targetTimeline: "Q3 2025", progress: "3/5", status: "On Track" },
    { id: 4, department: "AI & Robotics", assignedKPIs: "7 KPIs", targetTimeline: "Q4 2025", progress: "2/7", status: "Behind" },
    { id: 5, department: "Registry Management", assignedKPIs: "4 KPIs", targetTimeline: "Q1 2025", progress: "4/4", status: "Completed" },
    { id: 6, department: "ICT Solutions", assignedKPIs: "6 KPIs", targetTimeline: "Q2 2025", progress: "5/6", status: "On Track" },
    { id: 7, department: "Information & Public Engagement", assignedKPIs: "5 KPIs", targetTimeline: "Q2 2025", progress: "3/5", status: "On Track" },
  ];

  const handleApproveProject = (project: any) => {
    setSuccessModal({
      isOpen: true,
      title: "Project Approved",
      message: `The ${project.name} has been successfully approved. You can now proceed with the next phase of execution.`
    });
  };

  const handleRejectProject = (project: any) => {
    setRejectionModal({
      isOpen: true,
      title: "Project Rejected",
      message: `The ${project.name} has been rejected. Please review the feedback provided and make the necessary adjustments before resubmission.`,
      confirmButtonText: "Reject Payroll",
      projectName: project.name
    });
  };

  const handleRejectionConfirm = (reason: string) => {
    setRejectionModal({ ...rejectionModal, isOpen: false });
    toast({
      title: "Project Rejected",
      description: `${rejectionModal.projectName} has been rejected with reason: ${reason}`,
      variant: "destructive"
    });
  };

  const handleBackToPlanning = () => {
    setSuccessModal({ ...successModal, isOpen: false });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">● Pending</Badge>;
      case "Approved":
        return <Badge className="bg-green-100 text-green-800 border-green-200">● Approved</Badge>;
      case "Behind":
        return <Badge className="bg-red-100 text-red-800 border-red-200">● Behind</Badge>;
      case "On Track":
        return <Badge className="bg-orange-100 text-orange-800 border-orange-200">● On Track</Badge>;
      case "Completed":
        return <Badge className="bg-green-100 text-green-800 border-green-200">● Completed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const statsCards = [
    { icon: FileText, title: "236", subtitle: "TOTAL PROJECTS", color: "text-gray-600" },
    { icon: FileText, title: "4", subtitle: "COMPLETED PROJECTS", color: "text-gray-600" },
    { icon: FileText, title: "2", subtitle: "ONGOING PROJECTS", color: "text-gray-600" },
    { icon: FileText, title: "2", subtitle: "DELAYED PROJECT", color: "text-gray-600" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "strategic-projects":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsCards.map((card, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <card.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{card.title}</div>
                      <div className={`text-sm ${card.color}`}>{card.subtitle}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Strategic Projects</h3>
                  <Button onClick={onAddProject} className="bg-green-600 hover:bg-green-700 text-white">
                    Add New Project
                  </Button>
                </div>
                <div className="mt-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full max-w-md pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>S/N</TableHead>
                    <TableHead>Project Name</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Timeline</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {strategicProjects.map((project, index) => (
                    <TableRow key={project.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{project.name}</TableCell>
                      <TableCell>{project.budget}</TableCell>
                      <TableCell>{project.department}</TableCell>
                      <TableCell>{getStatusBadge(project.status)}</TableCell>
                      <TableCell>{project.timeline}</TableCell>
                      <TableCell>{project.progress}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onViewProject?.(project)}
                          >
                            View
                          </Button>
                          {project.status === "Pending" && (
                            <>
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700 text-white"
                                onClick={() => handleApproveProject(project)}
                              >
                                Approve
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleRejectProject(project)}
                              >
                                Reject
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="p-4 border-t border-gray-200">
                <Pagination>
                  <PaginationContent>
                    <PaginationPrevious href="#" />
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        );

      case "policy-documents":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Policy & Planning Documents</h3>
                  <Button onClick={onUploadDocument} className="bg-green-600 hover:bg-green-700 text-white">
                    Upload Document
                  </Button>
                </div>
                <div className="mt-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full max-w-md pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>S/N</TableHead>
                    <TableHead>Document Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Uploaded By</TableHead>
                    <TableHead>Date Added</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {policyDocuments.map((document, index) => (
                    <TableRow key={document.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{document.title}</TableCell>
                      <TableCell>{document.type}</TableCell>
                      <TableCell>{document.uploadedBy}</TableCell>
                      <TableCell>{document.dateAdded}</TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onViewDocument?.(document)}
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="p-4 border-t border-gray-200">
                <Pagination>
                  <PaginationContent>
                    <PaginationPrevious href="#" />
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        );

      case "departmental-goals":
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Departmental Goals & KPIs</h3>
                  <Button onClick={onAddKPI} className="bg-green-600 hover:bg-green-700 text-white">
                    Add KPI
                  </Button>
                </div>
                <div className="mt-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full max-w-md pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>S/N</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Assigned KPIs</TableHead>
                    <TableHead>Target Timeline</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {departmentalGoals.map((goal, index) => (
                    <TableRow key={goal.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{goal.department}</TableCell>
                      <TableCell>{goal.assignedKPIs}</TableCell>
                      <TableCell>{goal.targetTimeline}</TableCell>
                      <TableCell>{goal.progress}</TableCell>
                      <TableCell>{getStatusBadge(goal.status)}</TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onViewKPI?.(goal)}
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="p-4 border-t border-gray-200">
                <Pagination>
                  <PaginationContent>
                    <PaginationPrevious href="#" />
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("strategic-projects")}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === "strategic-projects"
                ? "border-green-500 text-green-600 bg-green-100"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Strategic Projects
          </button>
          <button
            onClick={() => setActiveTab("policy-documents")}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === "policy-documents"
                ? "border-green-500 text-green-600 bg-green-100"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Policy & Documents
          </button>
          <button
            onClick={() => setActiveTab("departmental-goals")}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
              activeTab === "departmental-goals"
                ? "border-green-500 text-green-600 bg-green-100"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Departmental Goals
          </button>
        </nav>
      </div>

      {renderTabContent()}

      <PlanningSuccessModal
        isOpen={successModal.isOpen}
        onClose={() => setSuccessModal({ ...successModal, isOpen: false })}
        title={successModal.title}
        message={successModal.message}
        onBackToPlanning={handleBackToPlanning}
      />

      <PlanningRejectionModal
        isOpen={rejectionModal.isOpen}
        onClose={() => setRejectionModal({ ...rejectionModal, isOpen: false })}
        title={rejectionModal.title}
        message={rejectionModal.message}
        confirmButtonText={rejectionModal.confirmButtonText}
        onConfirm={handleRejectionConfirm}
      />
    </div>
  );
}
