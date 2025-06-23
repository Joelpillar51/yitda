
import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface UpdatePublishedSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  updateTitle: string;
}

const UpdatePublishedSuccessModal = ({ isOpen, onClose, updateTitle }: UpdatePublishedSuccessModalProps) => {
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
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
              <Check className="w-6 h-6 text-green-600" />
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Update Published Successfully
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Your announcement "{updateTitle}" has been published and a notification has been sent to the selected audience.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatePublishedSuccessModal;
