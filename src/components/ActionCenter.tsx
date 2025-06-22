
import { useState } from "react";
import { ArrowLeft, Search, ChevronDown, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { toast } from "sonner";

interface ApprovalItem {
  id: number;
  type: string;
  requestedBy: string;
  dateSubmitted: string;
  details: string;
  status: "Approved" | "Pending" | "Rejected";
}

interface ActivityItem {
  id: number;
  time: string;
  activity: string;
}

export function ActionCenter() {
  const [activeTab, setActiveTab] = useState("pending-approvals");
  const [selectedApproval, setSelectedApproval] = useState<ApprovalItem | null>(null);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [comment, setComment] = useState("");

  const approvals: ApprovalItem[] = [
    {
      id: 1,
      type: "Leave Request",
      requestedBy: "Amina Sani - HR",
      dateSubmitted: "May 27, 2025",
      details: "Medical leave (June 3 - June 7, 2025)",
      status: "Approved"
    },
    {
      id: 2,
      type: "Budget Approval",
      requestedBy: "Ibrahim Musa - Projects",
      dateSubmitted: "May 25, 2025",
      details: "₦450,000 - Software license renewal",
      status: "Approved"
    },
    {
      id: 3,
      type: "Project Proposal",
      requestedBy: "Fatima Yusuf - IT",
      dateSubmitted: "May 26, 2025",
      details: "Staff Biometric Attendance System",
      status: "Rejected"
    },
    {
      id: 4,
      type: "Expense Claim",
      requestedBy: "Musa Abdullahi - Admin",
      dateSubmitted: "May 28, 2025",
      details: "₦32,500 - Transport & logistics for team retreat",
      status: "Approved"
    },
    {
      id: 5,
      type: "Leave Request",
      requestedBy: "Maryam Bello - Accounting",
      dateSubmitted: "May 24, 2025",
      details: "Annual leave (June 10-21, 2025)",
      status: "Approved"
    },
    {
      id: 6,
      type: "Procurement Request",
      requestedBy: "Sulaiman Tijjani - Registry",
      dateSubmitted: "May 23, 2025",
      details: "Office chairs (10 units) - ₦120,000 total cost",
      status: "Pending"
    },
    {
      id: 7,
      type: "Budget Adjustment",
      requestedBy: "David Okoro - Maintenance",
      dateSubmitted: "May 22, 2025",
      details: "Adjusting Q2 campaign budget - Increase of ₦75,000",
      status: "Pending"
    }
  ];

  const activities: ActivityItem[] = [
    {
      id: 1,
      time: "25 mins ago",
      activity: "Amina Sani's leave request was approved by HR Manager."
    },
    {
      id: 2,
      time: "1 hour ago",
      activity: "New project proposal submitted by Fatima Yusuf (IT Dept)."
    },
    {
      id: 3,
      time: "2 hours ago",
      activity: "Musa Abdullahi Filed An Expense Claim For ₦32,500."
    },
    {
      id: 4,
      time: "5 hours ago",
      activity: "Budget request from Projects Dept was rejected by CFO."
    },
    {
      id: 5,
      time: "Yesterday",
      activity: "IT Team Updated Biometric System Roadmap In Project Portal."
    },
    {
      id: 6,
      time: "2 days ago",
      activity: "5 New Tax Records Were Imported By Admin Via CMS."
    },
    {
      id: 7,
      time: "2 days ago",
      activity: "Sulaiman Tijjani Edited Procurement Request For Office Chairs."
    }
  ];

  const handleViewDetails = (approval: ApprovalItem) => {
    setSelectedApproval(approval);
  };

  const handleApprove = (approval: ApprovalItem) => {
    setSelectedApproval(approval);
    setShowApprovalModal(true);
  };

  const handleReject = (approval: ApprovalItem) => {
    setSelectedApproval(approval);
    setShowRejectionModal(true);
  };

  const confirmApproval = () => {
    setShowApprovalModal(false);
    toast.success("Request approved successfully!");
  };

  const confirmRejection = () => {
    setShowRejectionModal(false);
    setShowCommentModal(true);
  };

  const submitComment = () => {
    setShowCommentModal(false);
    setComment("");
    toast.success("Request rejected with comment sent!");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return <span className="inline-flex items-center text-green-600 text-sm">• Approved</span>;
      case "Pending":
        return <span className="inline-flex items-center text-orange-600 text-sm">• Pending</span>;
      case "Rejected":
        return <span className="inline-flex items-center text-red-600 text-sm">• Rejected</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Approvals
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-900">Action Center</h1>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="px-6 pt-4">
            <TabsList className="bg-transparent p-0 h-auto">
              <TabsTrigger 
                value="pending-approvals" 
                className="bg-green-100 text-green-700 data-[state=active]:bg-green-200 data-[state=active]:text-green-800 px-4 py-2 rounded-lg mr-2"
              >
                Pending Approvals
              </TabsTrigger>
              <TabsTrigger 
                value="recent-activities" 
                className="bg-gray-100 text-gray-700 data-[state=active]:bg-green-200 data-[state=active]:text-green-800 px-4 py-2 rounded-lg"
              >
                Recent Activities
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="pending-approvals" className="p-6 pt-4">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Approvals</h2>
              
              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">S/N</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Requested By</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Date Submitted</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Details</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">
                        <div className="flex items-center">
                          Status <ChevronDown className="w-4 h-4 ml-1" />
                        </div>
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {approvals.map((approval) => (
                      <tr key={approval.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 text-sm text-gray-900">{approval.id}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{approval.type}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{approval.requestedBy}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{approval.dateSubmitted}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{approval.details}</td>
                        <td className="py-4 px-4">{getStatusBadge(approval.status)}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            {approval.status === "Pending" && (
                              <Button
                                onClick={() => handleApprove(approval)}
                                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-sm"
                                size="sm"
                              >
                                Approve
                              </Button>
                            )}
                            <button 
                              onClick={() => handleViewDetails(approval)}
                              className="text-blue-600 hover:text-blue-800 text-sm"
                            >
                              View
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-6">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" className="bg-green-600 text-white">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <span className="px-3 py-2">...</span>
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
            </div>
          </TabsContent>

          <TabsContent value="recent-activities" className="p-6 pt-4">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Recent Activities</h2>
              
              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Activities Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">S/N</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Time</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 text-sm">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activities.map((activity) => (
                      <tr key={activity.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 text-sm text-gray-900">{activity.id}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{activity.time}</td>
                        <td className="py-4 px-4 text-sm text-gray-900">{activity.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-6">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" className="bg-green-600 text-white">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <span className="px-3 py-2">...</span>
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
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Request Details Modal */}
      {selectedApproval && !showApprovalModal && !showRejectionModal && (
        <Dialog open={!!selectedApproval} onOpenChange={() => setSelectedApproval(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Request Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800">
                  • Pending
                </span>
                <div className="flex space-x-2">
                  <Button 
                    onClick={() => handleApprove(selectedApproval)}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Approve
                  </Button>
                  <Button 
                    onClick={() => handleReject(selectedApproval)}
                    variant="destructive"
                  >
                    Reject
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Request Type</h3>
                  <p className="text-lg font-semibold text-gray-900">{selectedApproval.type}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Sent By</h3>
                  <p className="text-lg font-semibold text-gray-900">{selectedApproval.requestedBy.split(' - ')[0]}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Department</h3>
                  <p className="text-lg font-semibold text-gray-900">{selectedApproval.requestedBy.split(' - ')[1] || 'Human Resources'}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Status</h3>
                  <p className="text-lg font-semibold text-gray-900">{selectedApproval.requestedBy.split(' - ')[0]}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Request Details</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-900">
                    {selectedApproval.type === "Leave Request" 
                      ? "Medical leave is scheduled from June 3 to June 7, 2025. During this period, I will be unable to attend work due to health-related reasons. I appreciate your understanding and support during my recovery."
                      : selectedApproval.details
                    }
                  </p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Approval Success Modal */}
      <Dialog open={showApprovalModal} onOpenChange={setShowApprovalModal}>
        <DialogContent className="max-w-lg text-center">
          <div className="flex flex-col items-center space-y-4">
            <button 
              onClick={() => setShowApprovalModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-green-600" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900">Request Approved Successfully!</h2>
            <p className="text-gray-600">
              The request has been approved and the requester has been notified.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <Button 
                variant="outline" 
                onClick={() => setShowApprovalModal(false)}
                className="px-8"
              >
                Close
              </Button>
              <Button 
                onClick={confirmApproval}
                className="bg-green-600 hover:bg-green-700 text-white px-8"
              >
                View Next Request
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Rejection Modal */}
      <Dialog open={showRejectionModal} onOpenChange={setShowRejectionModal}>
        <DialogContent className="max-w-lg text-center">
          <div className="flex flex-col items-center space-y-4">
            <button 
              onClick={() => setShowRejectionModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center">
                <X className="w-8 h-8 text-red-600" />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900">Request Rejected</h2>
            <p className="text-gray-600">
              The request has been rejected. The requester will receive a notification.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <Button 
                variant="outline" 
                onClick={() => setShowRejectionModal(false)}
                className="px-8"
              >
                Close
              </Button>
              <Button 
                onClick={confirmRejection}
                className="bg-green-600 hover:bg-green-700 text-white px-8"
              >
                Add Comment
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Comment Modal */}
      <Dialog open={showCommentModal} onOpenChange={setShowCommentModal}>
        <DialogContent className="max-w-lg">
          <div className="space-y-4">
            <button 
              onClick={() => setShowCommentModal(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <X className="w-8 h-8 text-red-600" />
            </div>
            
            <h2 className="text-xl font-bold text-gray-900">Comment</h2>
            
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Comment here"
              className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
            
            <div className="flex space-x-4 pt-4">
              <Button 
                variant="outline" 
                onClick={() => setShowCommentModal(false)}
                className="flex-1"
              >
                Close
              </Button>
              <Button 
                onClick={submitComment}
                className="bg-green-600 hover:bg-green-700 text-white flex-1"
              >
                Send
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
