
import { Search, Download, Plus } from "lucide-react";

export function EmployeeRecords() {
  const employees = [
    {
      id: 1,
      name: "Amina Ibrahim Bello",
      role: "HR Officer",
      department: "Human Resources",
      status: "Full-time"
    },
    {
      id: 2,
      name: "Sani Musa Abdullahi",
      role: "Payroll Accountant",
      department: "Finance",
      status: "Full-time"
    },
    {
      id: 3,
      name: "Hauwa'u Umar Farouk",
      role: "Digital Marketing Executive",
      department: "Marketing",
      status: "Contract"
    },
    {
      id: 4,
      name: "Bashir Lawal Dantata",
      role: "Network Administrator",
      department: "IT",
      status: "Full-time"
    },
    {
      id: 5,
      name: "Zainab Salisu Garba",
      role: "Call Center Representative",
      department: "Customer Service",
      status: "Part-time"
    },
    {
      id: 6,
      name: "Yusuf Abdulkadir Nuhu",
      role: "Logistics Coordinator",
      department: "Operations",
      status: "Full-time"
    },
    {
      id: 7,
      name: "Maryam Kabir Jibrin",
      role: "Product Research Analyst",
      department: "Research & Development",
      status: "Internship"
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Digital Employee Records</h2>
          <div className="flex items-center space-x-4">
            <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center space-x-2">
              <Download size={16} />
              <span>Download Report</span>
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
              <Plus size={16} />
              <span>Add Employee</span>
            </button>
          </div>
        </div>
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
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Role</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Department</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm text-gray-900">{employee.id}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{employee.name}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{employee.role}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{employee.department}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{employee.status}</td>
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
