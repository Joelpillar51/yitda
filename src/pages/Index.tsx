
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
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

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [currentView, setCurrentView] = useState("dashboard");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedLeaveRequest, setSelectedLeaveRequest] = useState(null);

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

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
    setSelectedEmployee(null);
    setSelectedLeaveRequest(null);
  };

  const renderMainContent = () => {
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

    // Default dashboard view
    return (
      <>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">HR Dashboard</h1>
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        {renderTabContent()}
      </>
    );
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
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {renderMainContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
