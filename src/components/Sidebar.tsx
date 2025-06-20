
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

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Activity, label: "Action Center" },
  { icon: Building2, label: "Departments", color: "text-green-400" },
  { icon: Users, label: "Human Resources", active: true, bgColor: "bg-green-600" },
  { icon: Calendar, label: "Planning" },
  { icon: Calculator, label: "Accounting" },
  { icon: Bot, label: "AI & Robotics" },
  { icon: FileText, label: "Registry" },
  { icon: Monitor, label: "ICT Solutions" },
  { icon: Info, label: "Information" },
  { icon: Database, label: "Data Processing" },
  { icon: BarChart3, label: "Data Analyst" },
  { icon: Wrench, label: "Maintenance" },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
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
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  item.bgColor 
                    ? `${item.bgColor} text-white`
                    : item.active 
                    ? "bg-gray-800 text-white" 
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <item.icon size={18} className={item.color || ""} />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Account Section */}
      <div className="p-4 border-t border-gray-700">
        <div className="text-green-400 text-xs font-semibold mb-2 uppercase tracking-wide">
          Your Account
        </div>
        <a
          href="#"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <Settings size={18} />
          <span>Settings</span>
        </a>
      </div>
    </div>
  );
}
