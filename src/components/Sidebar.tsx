
import { 
  LayoutDashboard, 
  Activity, 
  Building2, 
  Users, 
  Calendar, 
  Calculator, 
  Bot, 
  FileText, 
  Monitor, 
  Info, 
  Database, 
  BarChart3, 
  Settings, 
  Wrench 
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  onShowPlanning?: () => void;
  currentView?: string;
}

export function AppSidebar({ onShowPlanning, currentView }: AppSidebarProps) {
  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: currentView === "dashboard" },
    { icon: Activity, label: "Action Center" },
    { icon: Building2, label: "Departments", color: "text-green-400" },
    { icon: Users, label: "Human Resources", active: currentView === "dashboard", bgColor: currentView === "dashboard" ? "bg-green-600" : "" },
    { icon: Calendar, label: "Planning", color: "text-green-400", onClick: onShowPlanning, active: currentView === "planning", bgColor: currentView === "planning" ? "bg-green-600" : "" },
    { icon: Calculator, label: "Accounting" },
    { icon: Bot, label: "AI & Robotics" },
    { icon: FileText, label: "Registry" },
    { icon: Monitor, label: "ICT Solutions" },
    { icon: Info, label: "Information" },
    { icon: Database, label: "Data Processing" },
    { icon: BarChart3, label: "Data Analyst" },
    { icon: Wrench, label: "Maintenance" },
  ];

  return (
    <Sidebar collapsible="none" className="w-64">
      <SidebarContent className="bg-gray-900 text-white">
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">Y</span>
            </div>
            <span className="text-white font-bold text-lg">YITDA</span>
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup className="flex-1 p-4">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {sidebarItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      item.bgColor 
                        ? `${item.bgColor} text-white hover:${item.bgColor}/90`
                        : item.active 
                        ? "bg-gray-800 text-white hover:bg-gray-700" 
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    <a 
                      href="#" 
                      className="flex items-center space-x-3 w-full"
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.onClick) {
                          item.onClick();
                        }
                      }}
                    >
                      <item.icon size={18} className={item.color || ""} />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Account Section */}
      <SidebarFooter className="p-4 border-t border-gray-700 bg-gray-900">
        <div className="text-green-400 text-xs font-semibold mb-2 uppercase tracking-wide">
          Your Account
        </div>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <a href="#" className="flex items-center space-x-3 w-full">
                <Settings size={18} />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
