
import { useState } from "react";
import { Search, Download } from "lucide-react";

export function PayrollManagement() {
  const [activeSubTab, setActiveSubTab] = useState("uploaded-files");

  const payrollFiles = [
    {
      id: 1,
      fileName: "Payroll_May_2025.xlsx",
      uploadedBy: "HR Admin",
      uploadDate: "May 25, 2025 – 10:30 AM",
      status: "Pending"
    },
    {
      id: 2,
      fileName: "Payroll_April_2025.pdf",
      uploadedBy: "HR Admin",
      uploadDate: "April 25, 2025 – 11:00 AM",
      status: "Approved"
    },
    {
      id: 3,
      fileName: "Payroll_March_2025.csv",
      uploadedBy: "HR Admin",
      uploadDate: "March 24, 2025 – 09:45 AM",
      status: "Approved"
    },
    {
      id: 4,
      fileName: "Payroll_February_2025.csv",
      uploadedBy: "HR Admin",
      uploadDate: "February 24, 2025 – 09:45 AM",
      status: "Approved"
    },
    {
      id: 5,
      fileName: "Payroll_January_2025.csv",
      uploadedBy: "HR Admin",
      uploadDate: "January 25, 2025 – 09:45 AM",
      status: "Approved"
    },
    {
      id: 6,
      fileName: "Payroll_December_2024.csv",
      uploadedBy: "HR Admin",
      uploadDate: "December 20, 2024 – 09:45 AM",
      status: "Approved"
    },
    {
      id: 7,
      fileName: "Payroll_November_2024.csv",
      uploadedBy: "HR Admin",
      uploadDate: "November 25, 2024 – 09:45 AM",
      status: "Approved"
    }
  ];

  const payrollSummary = [
    {
      id: 1,
      name: "Amina Ibrahim Bello",
      department: "ICT",
      paymentStatus: "Paid"
    },
    {
      id: 2,
      name: "Sani Musa Abdullahi",
      department: "Registry",
      paymentStatus: "Paid"
    },
    {
      id: 3,
      name: "Hauwa'u Umar Farouk",
      department: "Registry",
      paymentStatus: "Error"
    },
    {
      id: 4,
      name: "Bashir Lawal Dantata",
      department: "Registry",
      paymentStatus: "Paid"
    },
    {
      id: 5,
      name: "Zainab Salisu Garba",
      department: "Maintenance",
      paymentStatus: "Paid"
    },
    {
      id: 6,
      name: "Yusuf Abdulkadir Nuhu",
      department: "Maintenance",
      paymentStatus: "Paid"
    },
    {
      id: 7,
      name: "Maryam Kabir Jibrin",
      department: "Maintenance",
      paymentStatus: "Error"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "text-orange-600 bg-orange-50";
      case "Approved":
        return "text-green-600 bg-green-50";
      case "Paid":
        return "text-green-600";
      case "Error":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid":
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
        <h2 className="text-lg font-semibold text-gray-900">Uploaded Payroll File</h2>
      </div>
      
      <div className="border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveSubTab("uploaded-files")}
            className={`px-6 py-3 text-sm font-medium border-b-2 ${
              activeSubTab === "uploaded-files"
                ? "border-gray-900 text-gray-900 bg-gray-50"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Uploaded Payroll File
          </button>
          <button
            onClick={() => setActiveSubTab("payroll-summary")}
            className={`px-6 py-3 text-sm font-medium border-b-2 ${
              activeSubTab === "payroll-summary"
                ? "border-gray-900 text-gray-900 bg-gray-50"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Payroll Summary
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
            />
          </div>
          <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center space-x-2">
            <Download size={16} />
            <span>Download Report</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">S/N</th>
                {activeSubTab === "uploaded-files" ? (
                  <>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">File Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Uploaded By</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Upload Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Action</th>
                  </>
                ) : (
                  <>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Department</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Payment Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Action</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {activeSubTab === "uploaded-files" ? (
                payrollFiles.map((file) => (
                  <tr key={file.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm text-gray-900">{file.id}</td>
                    <td className="py-4 px-4 text-sm text-gray-900">{file.fileName}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{file.uploadedBy}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{file.uploadDate}</td>
                    <td className="py-4 px-4 text-sm">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(file.status)}`}>
                        {getStatusIcon(file.status)}{file.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <button className="text-gray-600 hover:text-gray-800 font-medium">View</button>
                        {file.status === "Pending" && (
                          <>
                            <button className="text-green-600 hover:text-green-700 border border-green-600 px-3 py-1 rounded text-xs font-medium">Approve</button>
                            <button className="text-red-600 hover:text-red-700 border border-red-600 px-3 py-1 rounded text-xs font-medium">Reject</button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                payrollSummary.map((employee) => (
                  <tr key={employee.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-sm text-gray-900">{employee.id}</td>
                    <td className="py-4 px-4 text-sm text-gray-900">{employee.name}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{employee.department}</td>
                    <td className="py-4 px-4 text-sm">
                      <span className={`${getStatusColor(employee.paymentStatus)}`}>
                        {getStatusIcon(employee.paymentStatus)}{employee.paymentStatus}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm">
                      {employee.paymentStatus === "Error" ? (
                        <button className="text-gray-600 hover:text-gray-800 font-medium">Resolve</button>
                      ) : (
                        <button className="text-gray-600 hover:text-gray-800 font-medium">View Details</button>
                      )}
                    </td>
                  </tr>
                ))
              )}
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
