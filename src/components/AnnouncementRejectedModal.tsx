
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, XCircle } from "lucide-react";

interface AnnouncementRejectedModalProps {
  isOpen: boolean;
  onClose: () => void;
  rejectionReason: string;
}

const AnnouncementRejectedModal = ({ isOpen, onClose, rejectionReason }: AnnouncementRejectedModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-0 top-0 p-2 rounded-sm opacity-70 hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="text-center py-8">
          <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Announcement Rejected
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Your rejection has been sent to the Information Department with the following note: "{rejectionReason}"
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementRejectedModal;
