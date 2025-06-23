
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface KnowledgeArticleDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: {
    title: string;
    department: string;
    status: string;
    lastUpdated: string;
    views: string;
    description: string;
    content: string;
  };
}

const KnowledgeArticleDetailModal = ({ isOpen, onClose, article }: KnowledgeArticleDetailModalProps) => {
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
            {article.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <div className="flex items-center space-x-4">
            <Badge className={`${
              article.department === "HR" ? "bg-purple-100 text-purple-800" :
              article.department === "ICT" ? "bg-blue-100 text-blue-800" :
              "bg-green-100 text-green-800"
            }`}>
              {article.department}
            </Badge>
            <span className="text-gray-600">Last Updated: {article.lastUpdated}</span>
            <span className="text-gray-600">Views: {article.views}</span>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Published</Badge>
          </div>

          <div className="pt-4 border-t">
            <p className="text-gray-600 mb-4">{article.description}</p>
            <p className="text-gray-700 leading-relaxed">
              {article.content}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default KnowledgeArticleDetailModal;
