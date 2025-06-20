
import { Search } from "lucide-react";

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      time: "25 mins ago",
      activity: "HR added a new staff record: Fatima Bello (Information Dept.)",
    },
    {
      id: 2,
      time: "1 hour ago",
      activity: "Leave request submitted by Aisha Bello (Registry) - Awaiting approval",
    },
    {
      id: 3,
      time: "2 hours ago",
      activity: "Leave Request For Musa Ahmed (ICT) Approved By HR",
    },
    {
      id: 4,
      time: "5 hours ago",
      activity: "May 2025 payroll processed and uploaded to system",
    },
    {
      id: 5,
      time: "Yesterday",
      activity: "New Training Program Scheduled: Cybersecurity 101 (May 28, 2025)",
    },
    {
      id: 6,
      time: "2 days ago",
      activity: "Employee Ibrahim Sulaiman (Maintenance) Marked As \"Terminated\" By HR",
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activities</h2>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">S/N</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Time</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Activity</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm text-gray-900">{activity.id}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{activity.time}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{activity.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
