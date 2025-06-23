import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useToast } from "@/hooks/use-toast";
import { 
  Search, 
  FileText, 
  Clock, 
  Monitor, 
  MessageSquare, 
  ArrowLeft,
  Megaphone,
  BookOpen,
  PlusCircle,
  Eye,
  Edit
} from "lucide-react";
import AnnouncementDetailModal from './AnnouncementDetailModal';
import KnowledgeArticleDetailModal from './KnowledgeArticleDetailModal';
import UpdatePublishedSuccessModal from './UpdatePublishedSuccessModal';
import AnnouncementApprovedModal from './AnnouncementApprovedModal';
import AnnouncementRejectionModal from './AnnouncementRejectionModal';
import AnnouncementRejectedModal from './AnnouncementRejectedModal';

const Information = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showNewUpdateForm, setShowNewUpdateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAnnouncementDetail, setShowAnnouncementDetail] = useState(false);
  const [showArticleDetail, setShowArticleDetail] = useState(false);
  const [showUpdateSuccess, setShowUpdateSuccess] = useState(false);
  const [showAnnouncementApproved, setShowAnnouncementApproved] = useState(false);
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [showRejectedModal, setShowRejectedModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [rejectionReason, setRejectionReason] = useState("");
  const { toast } = useToast();

  const handleBackToInformation = () => {
    setShowNewUpdateForm(false);
  };

  const handleNewUpdate = () => {
    setShowNewUpdateForm(true);
  };

  const handleNewAnnouncement = () => {
    // Handle new announcement logic
    console.log("New announcement clicked");
  };

  const handleNewArticle = () => {
    // Handle new article logic
    console.log("New article clicked");
  };

  const handleViewAnnouncement = (announcement: any) => {
    setSelectedItem(announcement);
    setShowAnnouncementDetail(true);
  };

  const handleViewArticle = (article: any) => {
    setSelectedItem({
      ...article,
      content: "This comprehensive guide provides detailed information about all employee benefits available to government workers. It covers health insurance options, retirement plans, vacation policies, professional development opportunities, and compensation structures. The guide is updated annually to reflect current policies and benefit changes."
    });
    setShowArticleDetail(true);
  };

  const handlePublishUpdate = () => {
    setShowNewUpdateForm(false);
    setShowUpdateSuccess(true);
    toast({
      title: "Update Published",
      description: "Your update has been published successfully.",
    });
  };

  const handleApproveAnnouncement = (announcement: any) => {
    setSelectedItem(announcement);
    setShowAnnouncementApproved(true);
    toast({
      title: "Announcement Approved",
      description: "The announcement has been approved and published.",
    });
  };

  const handleRejectAnnouncement = (announcement: any) => {
    setSelectedItem(announcement);
    setShowRejectionModal(true);
  };

  const handleConfirmRejection = (reason: string) => {
    setRejectionReason(reason);
    setShowRejectionModal(false);
    setShowRejectedModal(true);
    toast({
      title: "Announcement Rejected",
      description: "The rejection has been sent to the Information Department.",
    });
  };

  if (showNewUpdateForm) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-2 mb-6">
          <Button 
            variant="ghost" 
            onClick={() => setShowNewUpdateForm(false)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Information</span>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">New Update</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <Input 
                  placeholder="e.g., 'Staff Promotion Announcement'"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Department</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hr">Human Resources</SelectItem>
                    <SelectItem value="ict">ICT Department</SelectItem>
                    <SelectItem value="finance">Finance Department</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Date</label>
                <Input 
                  placeholder="DDMMYYYY"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Priority</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Content</label>
              <Textarea 
                placeholder="Your content here"
                className="min-h-[200px] resize-none"
              />
            </div>

            <div className="flex justify-between pt-6">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-8"
                onClick={handlePublishUpdate}
              >
                Publish Now
              </Button>
              <Button 
                variant="outline" 
                className="text-green-600 border-green-600 hover:bg-green-50 px-8"
              >
                Save as Draft
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const statsCards = [
    {
      title: "TOTAL ANNOUNCEMENTS",
      value: "247",
      icon: FileText,
      iconColor: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "PUBLISHED ARTICLES",
      value: "1,892",
      icon: Clock,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "PUBLISHED ARTICLES",
      value: "156",
      icon: Monitor,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "UNRESOLVED QUERIES",
      value: "23",
      icon: MessageSquare,
      iconColor: "text-red-600",
      bgColor: "bg-red-100"
    }
  ];

  const recentActivities = [
    {
      text: "New press release published",
      time: "2 hours ago",
      color: "text-blue-600"
    },
    {
      text: "Knowledge article updated",
      time: "6 hours ago",
      color: "text-green-600"
    },
    {
      text: "Chatbot query pending response",
      time: "4 hours ago",
      color: "text-orange-600"
    }
  ];

  const quickActions = [
    {
      title: "New Announcement",
      icon: Megaphone,
      color: "text-blue-600",
      onClick: handleNewAnnouncement
    },
    {
      title: "Add Article",
      icon: PlusCircle,
      color: "text-green-600",
      onClick: handleNewArticle
    },
    {
      title: "Internal Memo",
      icon: FileText,
      color: "text-purple-600",
      onClick: () => console.log("Internal memo clicked")
    },
    {
      title: "Manage Chatbot",
      icon: MessageSquare,
      color: "text-yellow-600",
      onClick: () => console.log("Manage chatbot clicked")
    }
  ];

  const newsUpdates = [
    {
      title: "Updated Security Protocols for Remote Work",
      description: "New guidelines for secure remote access and VPN usage...",
      department: "ICT",
      date: "2024-06-04",
      priority: "High",
      status: "Published"
    },
    {
      title: "Q2 Performance Review Schedule",
      description: "Performance review meetings scheduled for June 15-30...",
      department: "ICT",
      date: "2024-06-03",
      priority: "High",
      status: "Published"
    },
    {
      title: "Budget Allocation Changes for FY 2024",
      description: "Performance review meetings scheduled for June 15-30...",
      department: "ICT",
      date: "2024-06-03",
      priority: "Medium",
      status: "Draft"
    },
    {
      title: "New Employee Onboarding Process",
      description: "Streamlined onboarding process for new hires...",
      department: "HR",
      date: "2024-06-01",
      priority: "Medium",
      status: "Published"
    }
  ];

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

  const knowledgeArticles = [
    {
      title: "Employee Benefits and Compensation Guide",
      description: "Comprehensive guide covering all employee benefits, compensation packages, and policy updates.",
      department: "HR",
      status: "Published",
      lastUpdated: "2024-06-01",
      views: "1,247"
    },
    {
      title: "IT Security Best Practices",
      description: "Essential cybersecurity guidelines and protocols for all government employees.",
      department: "ICT",
      status: "Published",
      lastUpdated: "2024-06-01",
      views: "892"
    },
    {
      title: "Budget Request and Approval Process",
      description: "Step-by-step guide for submitting and tracking budget requests across departments.",
      department: "Finance",
      status: "Published",
      lastUpdated: "2024-06-01",
      views: "1,247"
    },
    {
      title: "Remote Work Policy and Guidelines",
      description: "Updated policies for remote work arrangements, including equipment and security requirements.",
      department: "HR",
      status: "Published",
      lastUpdated: "2024-06-01",
      views: "1,156"
    },
    {
      title: "Digital Transformation Roadmap",
      description: "Strategic plan for digital modernization across all government services and departments.",
      department: "ICT",
      status: "Published",
      lastUpdated: "2024-06-01",
      views: "445"
    },
    {
      title: "Financial Reporting Standards",
      description: "Guidelines for financial reporting, compliance requirements, and audit preparation.",
      department: "HR",
      status: "Published",
      lastUpdated: "2024-06-01",
      views: "723"
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
        <h1 className="text-2xl font-semibold text-gray-900">Information</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-gray-100">
          <TabsTrigger 
            value="overview" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger 
            value="internal-news" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            Internal News & Updates
          </TabsTrigger>
          <TabsTrigger 
            value="announcements" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            Announcements
          </TabsTrigger>
          <TabsTrigger 
            value="knowledge-hub" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            Knowledge Hub
          </TabsTrigger>
          <TabsTrigger 
            value="ai-chatbot" 
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
          >
            AI Chatbot Manager
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsCards.map((stat, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-2">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activities and Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Recent Activities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${activity.color.replace('text-', 'bg-')}`}></div>
                      <span className="text-sm text-gray-900">{activity.text}</span>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-20 flex flex-col items-center justify-center space-y-2 hover:bg-gray-50"
                      onClick={action.onClick}
                    >
                      <action.icon className={`w-6 h-6 ${action.color}`} />
                      <span className="text-sm font-medium">{action.title}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="internal-news" className="space-y-6 mt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Internal News & Updates</h2>
            <Button 
              onClick={handleNewUpdate}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              New Update
            </Button>
          </div>

          {/* Filters */}
          <div className="flex space-x-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Department</label>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                  <SelectItem value="ict">ICT Department</SelectItem>
                  <SelectItem value="finance">Finance Department</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* News Updates List */}
          <div className="space-y-4">
            {newsUpdates.map((update, index) => (
              <Card key={index} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{update.title}</h3>
                        {update.priority === "High" && (
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High</Badge>
                        )}
                        {update.priority === "Medium" && (
                          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Medium</Badge>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{update.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Department: {update.department}</span>
                        <span>Date: {update.date}</span>
                        {getStatusBadge(update.status)}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="text-gray-600 border-gray-200 hover:bg-gray-50">
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="announcements" className="space-y-6 mt-6">
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
                        <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                          View
                        </Button>
                        {announcement.status === "Pending" && (
                          <>
                            <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50">
                              Approve
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
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
        </TabsContent>

        <TabsContent value="knowledge-hub" className="space-y-6 mt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Knowledge Hub</h2>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              + New Article
            </Button>
          </div>

          {/* Knowledge Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {knowledgeArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={`${
                      article.department === "HR" ? "bg-purple-100 text-purple-800" :
                      article.department === "ICT" ? "bg-blue-100 text-blue-800" :
                      "bg-green-100 text-green-800"
                    } hover:${
                      article.department === "HR" ? "bg-purple-100" :
                      article.department === "ICT" ? "bg-blue-100" :
                      "bg-green-100"
                    }`}>
                      {article.department}
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Published</Badge>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex justify-between">
                      <span>Last Updated</span>
                      <span>{article.lastUpdated}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Views</span>
                      <span>{article.views}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 text-green-600 border-green-200 hover:bg-green-50">
                      View Article
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 text-gray-600 border-gray-200 hover:bg-gray-50">
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ai-chatbot" className="space-y-6 mt-6">
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500 text-lg">AI Chatbot Manager - Coming Soon</p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Modals */}
      <AnnouncementDetailModal
        isOpen={showAnnouncementDetail}
        onClose={() => setShowAnnouncementDetail(false)}
        announcement={selectedItem || {
          title: "Public Service Improvement Initiative",
          department: "Policy",
          author: "Communications Team",
          publishDate: "2024-06-04",
          status: "Published",
          content: "The government is launching a comprehensive public service improvement initiative aimed at enhancing citizen experience and streamlining bureaucratic processes. This initiative includes digital transformation of key services, improved customer service training for staff, and the implementation of citizen feedback systems."
        }}
      />

      <KnowledgeArticleDetailModal
        isOpen={showArticleDetail}
        onClose={() => setShowArticleDetail(false)}
        article={selectedItem || {
          title: "Employee Benefits and Compensation Guide",
          department: "HR",
          status: "Published",
          lastUpdated: "2024-06-01",
          views: "1,247",
          description: "Comprehensive guide covering all employee benefits, compensation packages, and policy updates.",
          content: "This comprehensive guide provides detailed information about all employee benefits available to government workers."
        }}
      />

      <UpdatePublishedSuccessModal
        isOpen={showUpdateSuccess}
        onClose={() => setShowUpdateSuccess(false)}
        updateTitle="Staff Promotion Announcement"
      />

      <AnnouncementApprovedModal
        isOpen={showAnnouncementApproved}
        onClose={() => setShowAnnouncementApproved(false)}
        contentTitle={selectedItem?.title || "Content Title"}
      />

      <AnnouncementRejectionModal
        isOpen={showRejectionModal}
        onClose={() => setShowRejectionModal(false)}
        onReject={handleConfirmRejection}
        contentTitle={selectedItem?.title || "Content Title"}
      />

      <AnnouncementRejectedModal
        isOpen={showRejectedModal}
        onClose={() => setShowRejectedModal(false)}
        rejectionReason={rejectionReason}
      />
    </div>
  );
};

export default Information;
