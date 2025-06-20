
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

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

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
        return <EmployeeRecords />;
      case "payroll-management":
        return <PayrollManagement />;
      case "leave-management":
        return <LeaveManagement />;
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
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">HR Dashboard</h1>
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
