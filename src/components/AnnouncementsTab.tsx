
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search } from "lucide-react";

interface AnnouncementsTabProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onViewAnnouncement: (announcement: any) => void;
  onApproveAnnouncement: (announcement: any) => void;
  onRejectAnnouncement: (announcement: any) => void;
}

const AnnouncementsTab = ({ 
  searchTerm, 
  setSearchTerm, 
  onViewAnnouncement, 
  onApproveAnnouncement, 
  onRejectAnnouncement 
}: AnnouncementsTabProps) => {
  const announcements = [
    {
      title: "Public Service Improvement Initiative",
      status: "Pending",
      priority: "High",
      author: "Communications Team",
      publishDate: "2024-06-10"
    },
    {
      title: "New Digital Services Portal Launch",
      status: "Published",
      priority: "Medium",
      author: "ICT Department",
      publishDate: "2024-06-08"
    },
    {
      title: "Community Engagement Program",
      status: "Published",
      priority: "Medium",
      author: "Public Relations",
      publishDate: "2024-06-05"
    },
    {
      title: "Emergency Response Protocol Update",
      status: "Draft",
      priority: "Low",
      author: "Emergency Services",
      publishDate: "2024-06-12"
    },
    {
      title: "Emergency Response Protocol Update",
      status: "Rejected",
      priority: "Medium",
      author: "Emergency Services",
      publishDate: "2024-06-15"
    },
    {
      title: "Annual Budget Transparency Report",
      status: "Pending",
      priority: "High",
      author: "Finance Department",
      publishDate: "2024-06-12"
    },
    {
      title: "Annual Budget Transparency Report",
      status: "Published",
      priority: "Medium",
      author: "Finance Department",
      publishDate: "2024-06-15"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Published":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">● Published</Badge>;
      case "Pending":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">● Pending</Badge>;
      case "Draft":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">● Draft</Badge>;
      case "Rejected":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">● Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High</Badge>;
      case "Medium":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Medium</Badge>;
      case "Low":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Low</Badge>;
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Public Announcements & Press Releases</h2>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          New Announcement
        </Button>
      </div>

      {/* Search */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Announcements Table */}
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Publish Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {announcements.map((announcement, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{announcement.title}</TableCell>
                <TableCell>{getStatusBadge(announcement.status)}</TableCell>
                <TableCell>{getPriorityBadge(announcement.priority)}</TableCell>
                <TableCell>{announcement.author}</TableCell>
                <TableCell>{announcement.publishDate}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-blue-600 border-blue-200 hover:bg-blue-50"
                      onClick={() => onViewAnnouncement(announcement)}
                    >
                      View
                    </Button>
                    {announcement.status === "Pending" && (
                      <>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-green-600 border-green-200 hover:bg-green-50"
                          onClick={() => onApproveAnnouncement(announcement)}
                        >
                          Approve
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-red-600 border-red-200 hover:bg-red-50"
                          onClick={() => onRejectAnnouncement(announcement)}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                    {announcement.status === "Draft" && (
                      <Button variant="outline" size="sm" className="text-gray-600 border-gray-200 hover:bg-gray-50">
                        Edit
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="bg-green-600 text-white hover:bg-green-700">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <span className="px-4 py-2">...</span>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">8</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">9</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default AnnouncementsTab;
