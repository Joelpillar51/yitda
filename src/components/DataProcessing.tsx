
import { useState } from "react";
import { Search, Download, Upload, Eye, Edit2, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DataProcessing() {
  const [activeTab, setActiveTab] = useState("departmental-records");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const tabs = [
    { id: "departmental-records", label: "Departmental Records", active: activeTab === "departmental-records" },
    { id: "smart-validation", label: "Smart Validation", active: activeTab === "smart-validation" },
    { id: "audit-log", label: "Audit Log", active: activeTab === "audit-log" }
  ];

  const departmentalRecords = [
    { id: 1, recordType: "Staff Record", department: "Human Resources", lastModified: "2025-05-26", status: "Validated", modifiedBy: "Admin" },
    { id: 2, recordType: "Budget Data", department: "Finance", lastModified: "2025-05-25", status: "Pending", modifiedBy: "CFO" },
    { id: 3, recordType: "Project Files", department: "Planning", lastModified: "2025-05-24", status: "Validated", modifiedBy: "Project Manager" },
    { id: 4, recordType: "Training Records", department: "Human Resources", lastModified: "2025-05-23", status: "Error", modifiedBy: "HR Manager" },
    { id: 5, recordType: "Asset Inventory", department: "ICT", lastModified: "2025-05-22", status: "Validated", modifiedBy: "IT Admin" }
  ];

  const validationResults = [
    { id: 1, fileName: "staff_records_may_2025.xlsx", validationDate: "2025-05-26", status: "Passed", errors: 0, warnings: 2 },
    { id: 2, fileName: "budget_allocation_q2.csv", validationDate: "2025-05-25", status: "Failed", errors: 5, warnings: 1 },
    { id: 3, fileName: "project_timeline_2025.xlsx", validationDate: "2025-05-24", status: "Passed", errors: 0, warnings: 0 },
    { id: 4, fileName: "training_completion.csv", validationDate: "2025-05-23", status: "Warning", errors: 0, warnings: 3 }
  ];

  const auditLogs = [
    { id: 1, action: "Data Import", user: "admin@yitda.gov.ng", timestamp: "2025-05-26 10:30:00", details: "Imported staff records", status: "Success" },
    { id: 2, action: "Validation Run", user: "validator@yitda.gov.ng", timestamp: "2025-05-26 09:15:00", details: "Validated budget data", status: "Failed" },
    { id: 3, action: "Data Export", user: "analyst@yitda.gov.ng", timestamp: "2025-05-25 16:45:00", details: "Exported project files", status: "Success" },
    { id: 4, action: "Schema Update", user: "admin@yitda.gov.ng", timestamp: "2025-05-25 14:20:00", details: "Updated validation rules", status: "Success" }
  ];

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      "Validated": "bg-green-100 text-green-800",
      "Pending": "bg-yellow-100 text-yellow-800",
      "Error": "bg-red-100 text-red-800",
      "Passed": "bg-green-100 text-green-800",
      "Failed": "bg-red-100 text-red-800",
      "Warning": "bg-yellow-100 text-yellow-800",
      "Success": "bg-green-100 text-green-800"
    };
    return `px-2 py-1 text-xs font-medium rounded-full ${statusStyles[status] || "bg-gray-100 text-gray-800"}`;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "departmental-records":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <h3 className="text-lg font-semibold">Departmental Records</h3>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white text-sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Import Data
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export All
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg border">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search records..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">S/N</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Record Type</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Department</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Last Modified</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {departmentalRecords.map((record) => (
                      <tr key={record.id} className="hover:bg-gray-50">
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.id}</td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">
                          <div className="font-medium">{record.recordType}</div>
                          <div className="text-xs text-gray-500 sm:hidden">{record.department}</div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600 hidden sm:table-cell">{record.department}</td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600 hidden md:table-cell">{record.lastModified}</td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <span className={getStatusBadge(record.status)}>{record.status}</span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm space-x-1 sm:space-x-2">
                          <Button variant="ghost" size="sm" className="text-xs p-1 sm:p-2">
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-xs p-1 sm:p-2">
                            <Edit2 className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-4 py-3 bg-gray-50 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
                  <span className="font-medium">5</span> results
                </p>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled className="text-xs">
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" disabled className="text-xs">
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      case "smart-validation":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <h3 className="text-lg font-semibold">Smart Validation Results</h3>
              <Button className="bg-green-600 hover:bg-green-700 text-white text-sm">
                Run Validation
              </Button>
            </div>

            <div className="bg-white rounded-lg border">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search validation results..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">S/N</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">File Name</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Validation Date</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">Errors</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {validationResults.map((result) => (
                      <tr key={result.id} className="hover:bg-gray-50">
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{result.id}</td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">
                          <div className="font-medium truncate max-w-[150px] sm:max-w-none">{result.fileName}</div>
                          <div className="text-xs text-gray-500 md:hidden">{result.validationDate}</div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600 hidden md:table-cell">{result.validationDate}</td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <span className={getStatusBadge(result.status)}>{result.status}</span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600 hidden sm:table-cell">
                          <span className="text-red-600">{result.errors} errors</span>
                          <span className="text-yellow-600 ml-2">{result.warnings} warnings</span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                          <Button variant="ghost" size="sm" className="text-xs">View Details</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "audit-log":
        return (
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg font-semibold">Audit Log</h3>
            
            <div className="bg-white rounded-lg border">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search audit logs..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">S/N</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">User</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase hidden md:table-cell">Timestamp</th>
                      <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {auditLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-gray-50">
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.id}</td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-900">
                          <div className="font-medium">{log.action}</div>
                          <div className="text-xs text-gray-500">{log.details}</div>
                          <div className="text-xs text-gray-500 sm:hidden">{log.user}</div>
                          <div className="text-xs text-gray-500 md:hidden">{log.timestamp}</div>
                        </td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600 hidden sm:table-cell">{log.user}</td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600 hidden md:table-cell">{log.timestamp}</td>
                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                          <span className={getStatusBadge(log.status)}>{log.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Data Processing</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-600 rounded"></div>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">1.2K</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">TOTAL RECORDS</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded"></div>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">98.5%</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">VALIDATION RATE</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-600 rounded"></div>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">15</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">PENDING REVIEWS</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded"></div>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">3</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">CRITICAL ERRORS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="border-b border-gray-200 overflow-x-auto">
          <nav className="flex space-x-4 sm:space-x-8 px-4 sm:px-6 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                  tab.active
                    ? "border-green-500 text-green-600 bg-green-50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 sm:p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
