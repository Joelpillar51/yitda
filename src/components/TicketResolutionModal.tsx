
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, X } from "lucide-react";

interface TicketResolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  ticket?: any;
}

const TicketResolutionModal = ({ isOpen, onClose, onConfirm, ticket }: TicketResolutionModalProps) => {
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
              Confirm Ticket Resolution
            </h2>
            
            <p className="text-gray-600">
              Are you sure you want to mark this ticket as resolved?
            </p>

            <div className="text-left space-y-2 bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <span className="font-medium">Ticket ID:</span> {ticket?.id || "#T-00124"}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Issue:</span> {ticket?.title || "Printer not working"} – {ticket?.department || "Registry"} Department
              </p>
            </div>

            <p className="text-gray-600">
              Once resolved, the user will be notified and the ticket will be closed.
            </p>
          </div>

          <div className="flex space-x-4 pt-6">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 py-3 text-gray-700 border-gray-300"
            >
              Cancel
            </Button>
            <Button
              onClick={onConfirm}
              className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white"
            >
              Mark as Resolved
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TicketResolutionModal;
