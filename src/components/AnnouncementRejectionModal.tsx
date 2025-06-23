
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { X, XCircle } from "lucide-react";

interface AnnouncementRejectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReject: (reason: string) => void;
  contentTitle: string;
}

const AnnouncementRejectionModal = ({ isOpen, onClose, onReject, contentTitle }: AnnouncementRejectionModalProps) => {
  const [rejectionReason, setRejectionReason] = useState("");

  const handleReject = () => {
    onReject(rejectionReason);
    setRejectionReason("");
  };

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

        <div className="py-6">
          <div className="text-center mb-6">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Reject Announcement
            </h2>
            <p className="text-gray-600">
              You are about to reject the announcement titled "{contentTitle}". Please provide a reason. The Information Department will be notified and the content will remain unpublished.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Reason for Rejection
              </label>
              <Textarea
                placeholder="Reason here"
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                className="min-h-[150px] resize-none"
              />
            </div>

            <div className="flex space-x-4 pt-4">
              <Button 
                variant="outline" 
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleReject}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                disabled={!rejectionReason.trim()}
              >
                Reject & Notify
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementRejectionModal;
