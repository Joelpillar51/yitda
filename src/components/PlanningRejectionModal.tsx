
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlanningRejectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm: (reason: string) => void;
  confirmButtonText: string;
}

export function PlanningRejectionModal({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  onConfirm,
  confirmButtonText 
}: PlanningRejectionModalProps) {
  const [reason, setReason] = useState("");
  const [showReasonInput, setShowReasonInput] = useState(false);

  if (!isOpen) return null;

  const handleAddReason = () => {
    setShowReasonInput(true);
  };

  const handleConfirm = () => {
    onConfirm(reason);
    setReason("");
    setShowReasonInput(false);
  };

  const handleCancel = () => {
    setReason("");
    setShowReasonInput(false);
    onClose();
  };

  if (showReasonInput) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
          <button
            onClick={handleCancel}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Reason for Rejection</h2>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Reason here"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                rows={6}
              />
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={handleCancel}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirm}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              >
                {confirmButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600 mb-6">{message}</p>
          </div>

          <div className="flex space-x-4">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddReason}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            >
              Add Reason
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
