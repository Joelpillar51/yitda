
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
  onShowAccounting?: () => void;
  onShowHR?: () => void;
  onShowActionCenter?: () => void;
  onShowAIRobotics?: () => void;
  onShowRegistry?: () => void;
  onShowICTSolutions?: () => void;
  onShowInformation?: () => void;
  onShowDataProcessing?: () => void;
  onShowMaintenance?: () => void;
  currentView?: string;
}

export function AppSidebar({ onShowPlanning, onShowAccounting, onShowHR, onShowActionCenter, onShowAIRobotics, onShowRegistry, onShowICTSolutions, onShowInformation, onShowDataProcessing, onShowMaintenance, currentView }: AppSidebarProps) {
  const handleDashboardClick = () => {
    // Reset to main dashboard
    window.location.reload();
  };

  const sidebarItems = [
    { 
      icon: LayoutDashboard, 
      label: "Dashboard", 
      active: currentView === "dashboard",
      onClick: handleDashboardClick
    },
    { 
      icon: Activity, 
      label: "Action Center",
      active: currentView === "action-center",
      onClick: onShowActionCenter
    },
    { 
      icon: Building2, 
      label: "Departments", 
      color: "text-green-400",
      active: false,
      onClick: undefined
    },
    { 
      icon: Users, 
      label: "Human Resources", 
      active: currentView === "hr",
      onClick: onShowHR
    },
    { 
      icon: Calendar, 
      label: "Planning", 
      color: "text-green-400", 
      onClick: onShowPlanning, 
      active: currentView === "planning"
    },
    { 
      icon: Calculator, 
      label: "Accounting",
      active: currentView === "accounting",
      onClick: onShowAccounting
    },
    { 
      icon: Bot, 
      label: "AI & Robotics",
      active: currentView === "ai-robotics",
      onClick: onShowAIRobotics
    },
    { 
      icon: FileText, 
      label: "Registry",
      active: currentView === "registry",
      onClick: onShowRegistry
    },
    { 
      icon: Monitor, 
      label: "ICT Solutions",
      active: currentView === "ict-solutions",
      onClick: onShowICTSolutions
    },
    { 
      icon: Info, 
      label: "Information",
      active: currentView === "information",
      onClick: onShowInformation
    },
    { 
      icon: Database, 
      label: "Data Processing",
      active: currentView === "data-processing",
      onClick: onShowDataProcessing
    },
    { 
      icon: BarChart3, 
      label: "Data Analyst",
      active: false,
      onClick: undefined
    },
    { 
      icon: Wrench, 
      label: "Maintenance",
      active: currentView === "maintenance",
      onClick: onShowMaintenance
    },
  ];

  return (
    <Sidebar collapsible="icon" className="w-64">
      <SidebarContent className="bg-gray-900 text-white">
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">Y</span>
            </div>
            <span className="text-white font-bold text-lg group-data-[collapsible=icon]:hidden">YITDA</span>
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
                      item.active 
                        ? "bg-green-600 text-white hover:bg-green-700"
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
                      <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
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
        <div className="text-green-400 text-xs font-semibold mb-2 uppercase tracking-wide group-data-[collapsible=icon]:hidden">
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
                <span className="group-data-[collapsible=icon]:hidden">Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
