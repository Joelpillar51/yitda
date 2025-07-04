
import { useState } from "react";
import { AppSidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";
import { StatsCards } from "@/components/StatsCards";
import { RecentActivities } from "@/components/RecentActivities";
import { TabNavigation } from "@/components/TabNavigation";
import { EmployeeRecords } from "@/components/EmployeeRecords";
import { PayrollManagement } from "@/components/PayrollManagement";
import { LeaveManagement } from "@/components/LeaveManagement";
import { TrainingPrograms } from "@/components/TrainingPrograms";
import { EmployeeDetailForm } from "@/components/EmployeeDetailForm";
import { EmployeeProfileView } from "@/components/EmployeeProfileView";
import { LeaveRequestDetailView } from "@/components/LeaveRequestDetailView";
import { PayrollDetailView } from "@/components/PayrollDetailView";
import { PlanningDashboard } from "@/components/PlanningDashboard";
import { AccountingDashboard } from "@/components/AccountingDashboard";
import { ProjectDetailForm } from "@/components/ProjectDetailForm";
import { ProjectDetailView } from "@/components/ProjectDetailView";
import { DocumentUploadForm } from "@/components/DocumentUploadForm";
import { KPIForm } from "@/components/KPIForm";
import { KPIDetailView } from "@/components/KPIDetailView";
import { ActionCenter } from "@/components/ActionCenter";
import { AIRobotics } from "@/components/AIRobotics";
import { Registry } from "@/components/Registry";
import ICTSolutions from "@/components/ICTSolutions";
import Information from "@/components/Information";
import DataProcessing from "@/components/DataProcessing";
import Maintenance from "@/components/Maintenance";
import { SidebarInset } from "@/components/ui/sidebar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentView, setCurrentView] = useState("dashboard");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedLeaveRequest, setSelectedLeaveRequest] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedKPI, setSelectedKPI] = useState(null);

  // HR Dashboard handlers
  const handleViewEmployee = (employee: any) => {
    setSelectedEmployee(employee);
    setCurrentView("employee-profile");
  };

  const handleAddEmployee = () => {
    setSelectedEmployee(null);
    setCurrentView("employee-form");
  };

  const handleViewLeaveRequest = (request: any) => {
    setSelectedLeaveRequest(request);
    setCurrentView("leave-detail");
  };

  const handleViewPayrollDetail = () => {
    setCurrentView("payroll-detail");
  };

  // Planning handlers
  const handleViewProject = (project: any) => {
    setSelectedProject(project);
    setCurrentView("project-detail");
  };

  const handleAddProject = () => {
    setSelectedProject(null);
    setCurrentView("project-form");
  };

  const handleViewDocument = (document: any) => {
    setSelectedDocument(document);
    setCurrentView("document-detail");
  };

  const handleUploadDocument = () => {
    setCurrentView("document-upload");
  };

  const handleViewKPI = (kpi: any) => {
    setSelectedKPI(kpi);
    setCurrentView("kpi-detail");
  };

  const handleAddKPI = () => {
    setSelectedKPI(null);
    setCurrentView("kpi-form");
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
    setSelectedEmployee(null);
    setSelectedLeaveRequest(null);
    setSelectedProject(null);
    setSelectedDocument(null);
    setSelectedKPI(null);
  };

  const handleShowPlanning = () => {
    setCurrentView("planning");
  };

  const handleShowAccounting = () => {
    setCurrentView("accounting");
  };

  const handleShowHR = () => {
    setCurrentView("hr");
  };

  const handleShowActionCenter = () => {
    setCurrentView("action-center");
  };

  const handleShowAIRobotics = () => {
    setCurrentView("ai-robotics");
  };

  const handleShowRegistry = () => {
    setCurrentView("registry");
  };

  const handleShowICTSolutions = () => {
    setCurrentView("ict-solutions");
  };

  const handleShowInformation = () => {
    setCurrentView("information");
  };

  const handleShowDataProcessing = () => {
    setCurrentView("data-processing");
  };

  const handleShowMaintenance = () => {
    setCurrentView("maintenance");
  };

  const renderMainContent = () => {
    // Maintenance view
    if (currentView === "maintenance") {
      return <Maintenance />;
    }

    // Data Processing view
    if (currentView === "data-processing") {
      return <DataProcessing />;
    }

    // ICT Solutions view
    if (currentView === "ict-solutions") {
      return <ICTSolutions />;
    }

    // Registry view
    if (currentView === "registry") {
      return <Registry />;
    }

    // Action Center view
    if (currentView === "action-center") {
      return <ActionCenter />;
    }

    // AI & Robotics view
    if (currentView === "ai-robotics") {
      return <AIRobotics />;
    }

    // HR Dashboard views
    if (currentView === "employee-form") {
      return <EmployeeDetailForm onBack={handleBackToDashboard} employee={selectedEmployee} />;
    }

    if (currentView === "employee-profile") {
      return <EmployeeProfileView onBack={handleBackToDashboard} employee={selectedEmployee} />;
    }

    if (currentView === "leave-detail") {
      return <LeaveRequestDetailView onBack={handleBackToDashboard} leaveRequest={selectedLeaveRequest} />;
    }

    if (currentView === "payroll-detail") {
      return <PayrollDetailView onBack={handleBackToDashboard} />;
    }

    // Planning views
    if (currentView === "planning") {
      return (
        <>
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Planning</h1>
          <PlanningDashboard 
            onViewProject={handleViewProject}
            onAddProject={handleAddProject}
            onViewDocument={handleViewDocument}
            onUploadDocument={handleUploadDocument}
            onViewKPI={handleViewKPI}
            onAddKPI={handleAddKPI}
          />
        </>
      );
    }

    if (currentView === "project-form") {
      return <ProjectDetailForm onBack={() => setCurrentView("planning")} project={selectedProject} />;
    }

    if (currentView === "project-detail") {
      return <ProjectDetailView onBack={() => setCurrentView("planning")} project={selectedProject} />;
    }

    if (currentView === "document-upload") {
      return <DocumentUploadForm onBack={() => setCurrentView("planning")} />;
    }

    if (currentView === "kpi-form") {
      return <KPIForm onBack={() => setCurrentView("planning")} kpi={selectedKPI} />;
    }

    if (currentView === "kpi-detail") {
      return <KPIDetailView onBack={() => setCurrentView("planning")} kpi={selectedKPI} />;
    }

    // Accounting views
    if (currentView === "accounting") {
      return (
        <>
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Accounting</h1>
          <AccountingDashboard />
        </>
      );
    }

    // HR views
    if (currentView === "hr") {
      return (
        <>
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">HR Dashboard</h1>
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          {renderTabContent()}
        </>
      );
    }

    // Information view
    if (currentView === "information") {
      return <Information />;
    }

    // Default dashboard view - show the new Dashboard component
    return <Dashboard />;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <StatsCards />
            <RecentActivities />
          </>
        );
      case "employee-records":
        return (
          <EmployeeRecords 
            onViewEmployee={handleViewEmployee}
            onAddEmployee={handleAddEmployee}
          />
        );
      case "payroll-management":
        return <PayrollManagement onViewPayroll={handleViewPayrollDetail} />;
      case "leave-management":
        return <LeaveManagement onViewLeaveRequest={handleViewLeaveRequest} />;
      case "training-programs":
        return <TrainingPrograms />;
      default:
        return (
          <>
            <StatsCards />
            <RecentActivities />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <AppSidebar 
        onShowPlanning={handleShowPlanning} 
        onShowAccounting={handleShowAccounting}
        onShowHR={handleShowHR}
        onShowActionCenter={handleShowActionCenter}
        onShowAIRobotics={handleShowAIRobotics}
        onShowRegistry={handleShowRegistry}
        onShowICTSolutions={handleShowICTSolutions}
        onShowInformation={handleShowInformation}
        onShowDataProcessing={handleShowDataProcessing}
        onShowMaintenance={handleShowMaintenance}
        currentView={currentView} 
      />
      <SidebarInset className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-3 sm:p-4 lg:p-6">
          <div className="max-w-full mx-auto">
            {renderMainContent()}
          </div>
        </div>
      </SidebarInset>
    </div>
  );
};

export default Index;
