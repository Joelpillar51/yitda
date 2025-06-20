import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConfirmationModal } from "./ConfirmationModal";

interface LeaveRequestDetailViewProps {
  onBack: () => void;
  leaveRequest: any;
}

export function LeaveRequestDetailView({ onBack, leaveRequest }: LeaveRequestDetailViewProps) {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "approve-leave" | "reject-leave" | null;
    data?: any;
  }>({
    isOpen: false,
    type: null,
  });

  const handleApprove = () => {
    setModalState({
      isOpen: true,
      type: "approve-leave",
      data: {
        name: "Musa Ahmed",
        type: "Sick Leave",
        startDate: "May 26, 2025",
        endDate: "May 27, 2025",
      },
    });
  };

  const handleReject = () => {
    setModalState({
      isOpen: true,
      type: "reject-leave",
      data: {
        name: "Musa Ahmed",
        type: "Sick Leave",
        startDate: "May 26, 2025",
        endDate: "May 27, 2025",
      },
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      type: null,
    });
  };

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft size={20} />
              <span>Back to HR Dashboard</span>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-start space-x-6">
            <div className="w-48 h-64 bg-gray-100 rounded-lg flex flex-col items-center justify-center p-4 relative">
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs font-medium">● Pending</span>
              </div>
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">Musa Ahmed</h3>
              <p className="text-sm text-gray-600 text-center">System Analyst</p>
            </div>

            <div className="flex-1">
              <div className="border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                  <h3 className="text-lg font-semibold text-gray-900">Employee Information</h3>
                </div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                    <p className="text-sm text-gray-900">Musa Ahmed</p>
                  </div>
                  <div></div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Department</label>
                    <p className="text-sm text-gray-900">ICT</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Position</label>
                    <p className="text-sm text-gray-900">System Analyst</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Employee ID</label>
                    <p className="text-sm text-gray-900">YT-0157</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-1">Contact Number</label>
                    <p className="text-sm text-gray-900">+234 806 123 4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Leave Details</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Leave Type</label>
                <p className="text-sm text-gray-900">Sick Leave</p>
              </div>
              <div></div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Start Date</label>
                <p className="text-sm text-gray-900">May 26, 2025</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">End Date</label>
                <p className="text-sm text-gray-900">May 27, 2025</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Total Days</label>
                <p className="text-sm text-gray-900">2 working days</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Requested On</label>
                <p className="text-sm text-gray-900">May 25, 2025</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Leave Balance</label>
                <p className="text-sm text-gray-900">10 of 15 days remaining</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Office Location</label>
                <p className="text-sm text-gray-900">YITDA HQ, Admin Block</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Note from Employee</h3>
            </div>
            <div className="p-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 min-h-24">
                <p className="text-sm text-gray-700">I have a health appointment scheduled for May 26 and 27. Please approve my sick leave.</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Attached File</h3>
            </div>
            <div className="p-6">
              <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between max-w-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                    <span className="text-green-600 text-sm">📄</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">medical_note.pdf</p>
                    <p className="text-xs text-gray-500">200 KB</p>
                  </div>
                </div>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                  Click to view
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6">
            <Button 
              variant="outline" 
              className="border-red-600 text-red-600 hover:bg-red-50"
              onClick={handleReject}
            >
              Reject Request
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={handleApprove}
            >
              Approve Request
            </Button>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type!}
        data={modalState.data}
      />
    </>
  );
}
