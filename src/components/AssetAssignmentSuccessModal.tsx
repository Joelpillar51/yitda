
import React from 'react';
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, X } from "lucide-react";

interface AssetAssignmentSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewRecord: () => void;
  assetName?: string;
  assignedTo?: string;
  department?: string;
}

const AssetAssignmentSuccessModal = ({ 
  isOpen, 
  onClose, 
  onViewRecord, 
  assetName = "Dell Latitude 5510", 
  assignedTo = "Musa Ahmed", 
  department = "ICT Department" 
}: AssetAssignmentSuccessModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6 pt-4 text-center">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Asset Assigned Successfully
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              {assetName} has been assigned to {assignedTo} ({department}). An update has been logged in the asset history.
            </p>
          </div>

          <div className="flex space-x-4 pt-6">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 py-3 text-gray-700 border-gray-300"
            >
              Close
            </Button>
            <Button
              onClick={onViewRecord}
              className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white"
            >
              View Asset Record
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssetAssignmentSuccessModal;
