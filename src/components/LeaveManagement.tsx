import { Search } from "lucide-react";

interface LeaveManagementProps {
  onViewLeaveRequest?: (request: any) => void;
}

export function LeaveManagement({ onViewLeaveRequest }: LeaveManagementProps) {
  const leaveRequests = [
    {
      id: 1,
      name: "Amina Ibrahim Bello",
      type: "Annual Leave",
      date: "10-Jun-2025 to 21-Jun-2025",
      status: "Approved"
    },
    {
      id: 2,
      name: "Sani Musa Abdullahi",
      type: "Casual Leave",
      date: "3-Jun-2025 to 05-Jun-2025",
      status: "Approved"
    },
    {
      id: 3,
      name: "Hauwa'u Umar Farouk",
      type: "Sick Leave",
      date: "May-2025 to 31-May-2025",
      status: "Pending"
    },
    {
      id: 4,
      name: "Bashir Lawal Dantata",
      type: "Paternity Leave",
      date: "15-Jun-2025 to 29-Jun-2025",
      status: "Approved"
    },
    {
      id: 5,
      name: "Zainab Salisu Garba",
      type: "Casual Leave",
      date: "01-Jun-2025",
      status: "Rejected"
    },
    {
      id: 6,
      name: "Yusuf Abdulkadir Nuhu",
      type: "Annual Leave",
      date: "01-Jul-2025 to 15-Jul-2025",
      status: "Approved"
    },
    {
      id: 7,
      name: "Maryam Kabir Jibrin",
      type: "Study Leave",
      date: "03-Jun-2025 to 10-Jun-2025",
      status: "Approved"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "text-yellow-600 bg-yellow-50";
      case "Approved":
        return "text-green-600 bg-green-50";
      case "Rejected":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return "● ";
      case "Rejected":
        return "● ";
      case "Pending":
        return "● ";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Leave Management</h2>
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
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((request) => (
                <tr key={request.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm text-gray-900">{request.id}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{request.name}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{request.type}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{request.date}</td>
                  <td className="py-4 px-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(request.status)}`}>
                      {getStatusIcon(request.status)}{request.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm">
                    <div className="flex items-center space-x-2">
                      {request.status === "Pending" && (
                        <>
                          <button className="text-green-600 hover:text-green-700 border border-green-600 px-3 py-1 rounded text-xs font-medium">Approve</button>
                          <button className="text-red-600 hover:text-red-700 border border-red-600 px-3 py-1 rounded text-xs font-medium">Reject</button>
                        </>
                      )}
                      <button 
                        onClick={() => onViewLeaveRequest?.(request)}
                        className="text-gray-600 hover:text-gray-800 font-medium"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <span>← Previous</span>
          </button>
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 bg-green-600 text-white rounded text-sm font-medium">1</button>
            <button className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded text-sm font-medium">2</button>
            <button className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded text-sm font-medium">3</button>
            <span className="text-gray-400">...</span>
            <button className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded text-sm font-medium">8</button>
            <button className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded text-sm font-medium">9</button>
            <button className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded text-sm font-medium">10</button>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <span>Next →</span>
          </button>
        </div>
      </div>
    </div>
  );
}
