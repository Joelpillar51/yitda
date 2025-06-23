
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface AnnouncementDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  announcement: {
    title: string;
    department?: string;
    author?: string;
    publishDate?: string;
    date?: string;
    status: string;
    content: string;
  };
}

const AnnouncementDetailModal = ({ isOpen, onClose, announcement }: AnnouncementDetailModalProps) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Published":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Published</Badge>;
      case "Pending":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Pending</Badge>;
      case "Draft":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Draft</Badge>;
      case "Rejected":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-0 top-0 p-2 rounded-sm opacity-70 hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
          <DialogTitle className="text-2xl font-semibold pr-8">
            {announcement.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {announcement.department && (
              <div>
                <span className="text-gray-700 font-medium">Department: </span>
                <span className="text-gray-900">{announcement.department}</span>
              </div>
            )}
            {announcement.author && (
              <div>
                <span className="text-gray-700 font-medium">Author: </span>
                <span className="text-gray-900">{announcement.author}</span>
              </div>
            )}
            <div>
              <span className="text-gray-700 font-medium">Publish Date: </span>
              <span className="text-gray-900">Date: {announcement.publishDate || announcement.date}</span>
            </div>
            <div>
              <span className="text-gray-700 font-medium">Status: </span>
              {getStatusBadge(announcement.status)}
            </div>
          </div>

          <div className="pt-4 border-t">
            <p className="text-gray-700 leading-relaxed">
              {announcement.content}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementDetailModal;
