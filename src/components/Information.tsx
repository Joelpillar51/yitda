
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import InformationOverview from './InformationOverview';
import InternalNewsTab from './InternalNewsTab';
import AnnouncementsTab from './AnnouncementsTab';
import KnowledgeHubTab from './KnowledgeHubTab';
import NewUpdateForm from './NewUpdateForm';
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

  const handleNewUpdate = () => {
    setShowNewUpdateForm(true);
  };

  const handleNewAnnouncement = () => {
    console.log("New announcement clicked");
  };

  const handleNewArticle = () => {
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
      <NewUpdateForm 
        onBack={() => setShowNewUpdateForm(false)}
        onPublish={handlePublishUpdate}
      />
    );
  }

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
          <InformationOverview 
            onNewAnnouncement={handleNewAnnouncement}
            onNewArticle={handleNewArticle}
          />
        </TabsContent>

        <TabsContent value="internal-news" className="space-y-6 mt-6">
          <InternalNewsTab onNewUpdate={handleNewUpdate} />
        </TabsContent>

        <TabsContent value="announcements" className="space-y-6 mt-6">
          <AnnouncementsTab 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onViewAnnouncement={handleViewAnnouncement}
            onApproveAnnouncement={handleApproveAnnouncement}
            onRejectAnnouncement={handleRejectAnnouncement}
          />
        </TabsContent>

        <TabsContent value="knowledge-hub" className="space-y-6 mt-6">
          <KnowledgeHubTab onViewArticle={handleViewArticle} />
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
