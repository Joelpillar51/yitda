
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { StatsCards } from "@/components/StatsCards";
import { RecentActivities } from "@/components/RecentActivities";
import { TabNavigation } from "@/components/TabNavigation";

const Index = () => {
  return (
    <div className="min-h-screen flex w-full bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">HR Dashboard</h1>
            <TabNavigation />
            <StatsCards />
            <RecentActivities />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
