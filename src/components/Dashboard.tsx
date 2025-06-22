import { Calendar, Users, FileText, Clock, ChevronRight, Bell, Menu } from "lucide-react";
import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Dashboard() {
  const [currentDate] = useState(new Date());
  
  const overviewStats = [
    {
      icon: Users,
      value: "125",
      label: "TOTAL STAFF",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: FileText,
      value: "4",
      label: "ACTIVE PROJECTS",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600",
    },
    {
      icon: Clock,
      value: "5",
      label: "PENDING APPROVALS",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
  ];

  const recentRequests = [
    {
      id: 1,
      title: "Leave Request",
      department: "PSIRS",
      dateCreated: "04/02/2025",
      priority: "Paid",
      priorityColor: "text-green-600",
    },
    {
      id: 2,
      title: "New Project",
      department: "PSIRS",
      dateCreated: "04/02/2025",
      priority: "Paid",
      priorityColor: "text-green-600",
    },
    {
      id: 3,
      title: "Dynamic Project",
      department: "PSIRS",
      dateCreated: "04/02/2025",
      priority: "Unpaid",
      priorityColor: "text-red-600",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Strategy Review",
      time: "10:30 AM - 11:30 AM",
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 2,
      title: "Annual Budget Finalization",
      time: "Today, 5:00 PM",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      id: 3,
      title: "New Project Launch",
      time: "Today, 5:00 PM",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 4,
      title: "New Project Launch",
      time: "Today, 5:00 PM",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 5,
      title: "Annual Budget Finalization",
      time: "Today, 5:00 PM",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.toDateString() === today.toDateString();
      const isSecond = date.getDate() === 2 && isCurrentMonth;
      
      days.push({
        date: date.getDate(),
        isCurrentMonth,
        isToday,
        isSecond,
        fullDate: date,
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div className="space-y-6">
      {/* Mobile Header with Sidebar Toggle */}
      <div className="flex items-center justify-between lg:hidden mb-4">
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        <SidebarTrigger />
      </div>

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-4 lg:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-xl lg:text-3xl font-bold text-gray-900 mb-2">
              Good Morning, Dr. Adam 👋
            </h1>
            <p className="text-sm lg:text-base text-gray-700 mb-4">
              You have 3 approvals pending and 2 departments needing attention.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 lg:px-6 py-2 rounded-lg font-medium transition-colors text-sm lg:text-base">
              Go to Action Center
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-green-200 rounded-lg flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                <Users className="w-12 h-12 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="xl:col-span-2 space-y-6">
          {/* Overview Section - Improved Mobile Layout */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 lg:p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
              <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                View all <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="p-4 lg:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {overviewStats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
                    <div className={`p-4 rounded-full ${stat.bgColor} mb-4`}>
                      <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-xs lg:text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Requests */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 lg:p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Recent Request</h2>
              <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                View all <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4 lg:px-6 font-medium text-gray-500 text-sm">S/N</th>
                    <th className="text-left py-3 px-4 lg:px-6 font-medium text-gray-500 text-sm">Request Title</th>
                    <th className="text-left py-3 px-4 lg:px-6 font-medium text-gray-500 text-sm hidden sm:table-cell">Department</th>
                    <th className="text-left py-3 px-4 lg:px-6 font-medium text-gray-500 text-sm hidden md:table-cell">Date Created</th>
                    <th className="text-left py-3 px-4 lg:px-6 font-medium text-gray-500 text-sm">Priority</th>
                    <th className="text-left py-3 px-4 lg:px-6 font-medium text-gray-500 text-sm">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentRequests.map((request) => (
                    <tr key={request.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 lg:px-6 text-sm text-gray-900">{request.id}</td>
                      <td className="py-4 px-4 lg:px-6 text-sm text-gray-900">{request.title}</td>
                      <td className="py-4 px-4 lg:px-6 text-sm text-gray-600 hidden sm:table-cell">{request.department}</td>
                      <td className="py-4 px-4 lg:px-6 text-sm text-gray-600 hidden md:table-cell">{request.dateCreated}</td>
                      <td className="py-4 px-4 lg:px-6">
                        <span className={`text-sm font-medium ${request.priorityColor}`}>
                          • {request.priority}
                        </span>
                      </td>
                      <td className="py-4 px-4 lg:px-6">
                        <button className="text-sm text-blue-600 hover:text-blue-800">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Calendar */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Calendar</h3>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-medium text-gray-900">{monthNames[currentDate.getMonth()]}</h4>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
                <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`
                    text-center text-sm py-2 cursor-pointer rounded
                    ${day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
                    ${day.isToday ? 'bg-blue-600 text-white font-medium' : ''}
                    ${day.isSecond ? 'bg-blue-600 text-white font-medium' : ''}
                    ${!day.isToday && !day.isSecond && day.isCurrentMonth ? 'hover:bg-gray-100' : ''}
                  `}
                >
                  {day.date}
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Upcoming events</h3>
              <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                View all <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <div className={`p-2 rounded-lg ${event.color}`}>
                    <Bell className={`w-4 h-4 ${event.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{event.title}</p>
                    <p className="text-xs text-gray-500">{event.time}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className="w-1 h-1 bg-current rounded-full"></div>
                      <div className="w-1 h-1 bg-current rounded-full mx-1"></div>
                      <div className="w-1 h-1 bg-current rounded-full"></div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
