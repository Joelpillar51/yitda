
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Download, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PlanningSuccessModal } from "@/components/PlanningSuccessModal";

interface AccountingDashboardProps {
  onViewPaymentRequest?: (request: any) => void;
  onProcessPayment?: (request: any) => void;
}

export function AccountingDashboard({ onViewPaymentRequest, onProcessPayment }: AccountingDashboardProps) {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("payment-requests");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalData, setModalData] = useState({ title: "", message: "" });

  const tabs = [
    { id: "financial-reports", label: "Financial Reports", active: activeTab === "financial-reports" },
    { id: "payroll-requests", label: "Payroll Requests", active: activeTab === "payroll-requests" },
    { id: "payment-requests", label: "Payment Requests", active: activeTab === "payment-requests" },
    { id: "budget-overview", label: "Budget Overview", active: activeTab === "budget-overview" },
    { id: "transactions", label: "Transactions", active: activeTab === "transactions" },
    { id: "audit-trail", label: "Audit Trail", active: activeTab === "audit-trail" }
  ];

  const handleApprove = (requestId: string) => {
    setModalData({
      title: "Payment Request Approved",
      message: "The payment request has been approved successfully and is now ready for processing."
    });
    setShowSuccessModal(true);
    
    toast({
      title: "Payment Request Approved",
      description: "The payment request has been approved successfully.",
    });
  };

  const handleProcessPayment = (requestId: string) => {
    setModalData({
      title: "Payment Successfully Processed",
      message: "The payroll for May 2025 – HR Department has been successfully marked as processed. Disbursement will now proceed according to the payment schedule."
    });
    setShowSuccessModal(true);
    
    toast({
      title: "Payment Processed",
      description: "The payment has been successfully processed.",
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "financial-reports":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Financial Reports</h3>
              <div className="space-x-2">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Create Budget Plan
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Report
                </Button>
              </div>
            </div>
            {/* Financial Reports Table */}
            <div className="bg-white rounded-lg border">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">S/N</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Report Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Period</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Uploaded By</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date Uploaded</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Q1 Financial Report</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Quarterly</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Jan - Mar 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">CFO Office</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Apr 15, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <Button variant="ghost" size="sm">View</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "payment-requests":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Payment Requests</h3>
            <div className="bg-white rounded-lg border">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ref No</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Requested By</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">PAY-2025-001</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Human Resources Department</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₦1,800,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">May 26, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">High</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">Pending</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                        <Button variant="ghost" size="sm">View</Button>
                        <Button 
                          size="sm" 
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => handleApprove("PAY-2025-001")}
                        >
                          Approve
                        </Button>
                        <Button variant="outline" size="sm">Reject</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "payroll-requests":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Payroll Requests</h3>
            <div className="bg-white rounded-lg border">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ref No</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">File Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Upload Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Approval Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#PY0525-01</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Payroll_May_2025.xlsx</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">May 25, 2025 – 10:30 AM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">May 26, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">Pending</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                        <Button variant="ghost" size="sm">View</Button>
                        <Button 
                          size="sm" 
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => handleProcessPayment("#PY0525-01")}
                        >
                          Process Payment
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "budget-overview":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Budget Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Total Budget</h4>
                <p className="text-2xl font-bold text-gray-900">₦230M</p>
                <p className="text-sm text-green-600">+12% from last year</p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Allocated</h4>
                <p className="text-2xl font-bold text-gray-900">₦185M</p>
                <p className="text-sm text-blue-600">80.4% of total</p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h4 className="text-sm font-medium text-gray-600 mb-2">Remaining</h4>
                <p className="text-2xl font-bold text-gray-900">₦45M</p>
                <p className="text-sm text-orange-600">19.6% remaining</p>
              </div>
            </div>
          </div>
        );

      case "transactions":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <div className="bg-white rounded-lg border">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search transactions"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">TXN-2025-001</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Staff Salary Payment</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">-₦1,800,000</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">May 26, 2025</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Debit</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Completed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "audit-trail":
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Audit Trail</h3>
            <div className="bg-white rounded-lg border">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search audit logs"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">IP Address</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">May 26, 2025 10:30 AM</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">admin@yitda.gov.ng</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Payment Approved</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">PAY-2025-001</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">192.168.1.100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <p className="text-gray-500">Content for {activeTab} will be implemented here.</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-600 rounded"></div>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">₦230M</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">TOTAL BUDGET (YTD)</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded"></div>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">₦185M</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">TOTAL EXPENSES</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-600 rounded"></div>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">₦5.2M</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">PENDING PAYMENTS</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-600 rounded"></div>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">₦12M</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-tight">UNALLOCATED FUNDS</p>
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

      <PlanningSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title={modalData.title}
        message={modalData.message}
        onBackToPlanning={() => setShowSuccessModal(false)}
      />
    </div>
  );
}
