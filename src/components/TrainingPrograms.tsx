
import { Search } from "lucide-react";

export function TrainingPrograms() {
  const trainingPrograms = [
    {
      id: 1,
      title: "Employee Onboarding & Orientation",
      type: "Mandatory",
      participants: 15,
      status: "Ongoing"
    },
    {
      id: 2,
      title: "Workplace Ethics & Anti-Harassment Training",
      type: "Mandatory",
      participants: 23,
      status: "Ongoing"
    },
    {
      id: 3,
      title: "Leadership Development Workshop",
      type: "Optional",
      participants: 9,
      status: "Upcoming"
    },
    {
      id: 4,
      title: "Mental Health & Wellness Seminar",
      type: "Optional",
      participants: 18,
      status: "Ongoing"
    },
    {
      id: 5,
      title: "Performance Management Training",
      type: "Mandatory",
      participants: 20,
      status: "Upcoming"
    },
    {
      id: 6,
      title: "Time Management & Productivity Skills",
      type: "Optional",
      participants: 12,
      status: "Upcoming"
    },
    {
      id: 7,
      title: "HR Policies & Compliance Session",
      type: "Mandatory",
      participants: 25,
      status: "Ongoing"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ongoing":
        return "text-green-600 bg-green-50";
      case "Upcoming":
        return "text-yellow-600 bg-yellow-50";
      case "Completed":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Ongoing":
        return "● ";
      case "Upcoming":
        return "● ";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Training Programs</h2>
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
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Program Title</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Participants</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {trainingPrograms.map((program) => (
                <tr key={program.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm text-gray-900">{program.id}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{program.title}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{program.type}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{program.participants}</td>
                  <td className="py-4 px-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(program.status)}`}>
                      {getStatusIcon(program.status)}{program.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm">
                    <button className="text-gray-600 hover:text-gray-800 font-medium">View</button>
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
