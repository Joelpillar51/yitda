
import { CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlanningSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onBackToPlanning: () => void;
}

export function PlanningSuccessModal({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  onBackToPlanning 
}: PlanningSuccessModalProps) {
  if (!isOpen) return null;

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
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600">{message}</p>
          </div>

          <Button
            onClick={onBackToPlanning}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
          >
            Back to Planning
          </Button>
        </div>
      </div>
    </div>
  );
}
