
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PayrollDetailViewProps {
  onBack: () => void;
}

export function PayrollDetailView({ onBack }: PayrollDetailViewProps) {
  const payrollData = [
    {
      id: 1,
      name: "Amina Ibrahim Bello",
      department: "ICT",
      salary: "₦150,000",
      deductions: "₦10,000",
      netPay: "₦140,000",
      bankAccount: "Zenith - 0123456789",
      status: "Okay"
    },
    {
      id: 2,
      name: "Sani Musa Abdullahi",
      department: "Registry",
      salary: "₦120,000",
      deductions: "₦5,000",
      netPay: "₦115,000",
      bankAccount: "Zenith - 0123456789",
      status: "Okay"
    },
    {
      id: 3,
      name: "Hauwa'u Umar Farouk",
      department: "Registry",
      salary: "₦120,000",
      deductions: "₦5,000",
      netPay: "₦115,000",
      bankAccount: "Access - 0123456789",
      status: "Okay"
    },
    {
      id: 4,
      name: "Bashir Lawal Dantata",
      department: "Registry",
      salary: "₦120,000",
      deductions: "₦5,000",
      netPay: "₦115,000",
      bankAccount: "Union - 0123456789",
      status: "Okay"
    },
    {
      id: 5,
      name: "Zainab Salisu Garba",
      department: "Maintenance",
      salary: "₦150,000",
      deductions: "₦10,000",
      netPay: "₦140,000",
      bankAccount: "Missing",
      status: "Error"
    },
    {
      id: 6,
      name: "Yusuf Abdulkadir Nuhu",
      department: "Maintenance",
      salary: "₦150,000",
      deductions: "₦10,000",
      netPay: "₦140,000",
      bankAccount: "Zenith - 0123456789",
      status: "Okay"
    },
    {
      id: 7,
      name: "Maryam Kabir Jibrin",
      department: "Maintenance",
      salary: "₦150,000",
      deductions: "₦10,000",
      netPay: "₦140,000",
      bankAccount: "Union - 0123456789",
      status: "Okay"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Okay":
        return "text-green-600";
      case "Error":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Okay":
        return "● ";
      case "Error":
        return "● ";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">Payroll May 2025</h1>
          <div></div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-green-600 hover:bg-green-700">
              Approve Payroll
            </Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              Reject & Send Back
            </Button>
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
              <Download size={16} className="mr-2" />
              Download Report
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">S/N</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Staff Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Department</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Salary</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Deductions</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Net Pay</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Bank Account</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {payrollData.map((employee) => (
                <tr key={employee.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-sm text-gray-900">{employee.id}</td>
                  <td className="py-4 px-4 text-sm text-gray-900">{employee.name}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{employee.department}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{employee.salary}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{employee.deductions}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{employee.netPay}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{employee.bankAccount}</td>
                  <td className="py-4 px-4 text-sm">
                    <span className={`${getStatusColor(employee.status)}`}>
                      {getStatusIcon(employee.status)}{employee.status}
                    </span>
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
