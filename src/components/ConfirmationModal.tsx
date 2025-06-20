
import { X, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "approve-payroll" | "approve-leave" | "reject-payroll" | "reject-leave" | "add-employee";
  data?: any;
}

export function ConfirmationModal({ isOpen, onClose, type, data }: ConfirmationModalProps) {
  const [rejectionReason, setRejectionReason] = useState("");
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleApprove = () => {
    if (type === "approve-payroll") {
      toast({
        title: "Payroll approved successfully!",
        description: "The file has been locked and forwarded to the Accounting Department for payment processing.",
        duration: 5000,
      });
    } else if (type === "approve-leave") {
      toast({
        title: "Leave Approved Successfully",
        description: `${data?.name || "Employee"}'s ${data?.type?.toLowerCase() || "leave"} from ${data?.startDate || "date"} to ${data?.endDate || "date"} has been approved. A notification has been sent to the HR department and the employee.`,
        duration: 5000,
      });
    } else if (type === "add-employee") {
      toast({
        title: "New staff member has been successfully added to the system.",
        description: "A notification has been sent to the Department Admin for further onboarding steps. You can view the staff profile or return to the Human Resources dashboard.",
        duration: 5000,
      });
    }
    onClose();
  };

  const handleReject = () => {
    if (!rejectionReason.trim() && (type === "reject-payroll" || type === "reject-leave")) {
      return;
    }

    if (type === "reject-payroll") {
      toast({
        title: "Payroll rejected",
        description: "A notification has been sent to the HR department with your comments. The file remains unapproved until corrected and resubmitted.",
        duration: 5000,
      });
    } else if (type === "reject-leave") {
      toast({
        title: "Leave Rejected",
        description: `${data?.name || "Employee"}'s leave request from ${data?.startDate || "date"} to ${data?.endDate || "date"} has been rejected. A notification with your reason has been sent to the HR department and the employee.`,
        duration: 5000,
      });
    }
    onClose();
    setRejectionReason("");
  };

  const getModalContent = () => {
    switch (type) {
      case "approve-payroll":
        return {
          icon: <Check className="w-12 h-12 text-green-600" />,
          iconBg: "bg-green-100",
          title: "Approve Payroll",
          description: "Are you sure you want to approve the payroll for May 2025? Once approved, no further changes can be made to this file. A notification will be sent to the Accounting Department for payment processing.",
          primaryButton: "Approve Payroll",
          primaryAction: handleApprove,
        };

      case "approve-leave":
        return {
          icon: <Check className="w-12 h-12 text-green-600" />,
          iconBg: "bg-green-100",
          title: "Approve Leave Request",
          description: `Are you sure you want to approve ${data?.name || "this employee"}'s ${data?.type?.toLowerCase() || "leave"} request from ${data?.startDate || "start date"} to ${data?.endDate || "end date"}?`,
          primaryButton: "Approve Request",
          primaryAction: handleApprove,
        };

      case "reject-payroll":
        return {
          icon: <X className="w-12 h-12 text-red-600" />,
          iconBg: "bg-red-100",
          title: "Reject Payroll File",
          description: "You are about to reject the payroll file for May 2025. Please provide a reason for rejection. The HR department will be notified and required to re-submit a corrected file.",
          primaryButton: "Reject Payroll",
          primaryAction: handleReject,
          showTextarea: true,
        };

      case "reject-leave":
        return {
          icon: <X className="w-12 h-12 text-red-600" />,
          iconBg: "bg-red-100",
          title: "Please provide a reason for rejecting this request",
          description: "",
          primaryButton: "Reject Request",
          primaryAction: handleReject,
          showTextarea: true,
        };

      case "add-employee":
        return {
          icon: <Check className="w-12 h-12 text-green-600" />,
          iconBg: "bg-green-100",
          title: "Add New Employee",
          description: "Are you sure you want to add this employee to the system?",
          primaryButton: "Add Employee",
          primaryAction: handleApprove,
        };

      default:
        return null;
    }
  };

  const content = getModalContent();
  if (!content) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className={`w-24 h-24 ${content.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
            {content.icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.title}</h3>
          {content.description && (
            <p className="text-gray-600 text-sm leading-relaxed">{content.description}</p>
          )}
        </div>

        {content.showTextarea && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {type === "reject-payroll" ? "Reason for Rejection" : "Reason for Rejection"}
            </label>
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              placeholder={type === "reject-payroll" ? "Missing bank details for 2 staff members" : "This employee has only 1 day of sick leave left for the year"}
              className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
          </div>
        )}

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={content.primaryAction}
            className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
          >
            {content.primaryButton}
          </button>
        </div>
      </div>
    </div>
  );
}
