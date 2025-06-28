
import { Users, FileText, Clock, DollarSign } from "lucide-react";

export function StatsCards() {
  const stats = [
    {
      icon: Users,
      value: "236",
      label: "TOTAL EMPLOYEES",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: FileText,
      value: "4",
      label: "LEAVE REQUESTS PENDING",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Clock,
      value: "2",
      label: "UPCOMING TRAININGS",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: DollarSign,
      value: "1B",
      label: "TOTAL PAYMENT PROCESSED",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs font-medium text-gray-500 mt-1 leading-tight">{stat.label}</p>
            </div>
            <div className={`p-2 sm:p-3 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.iconColor}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
