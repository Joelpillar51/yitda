
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Clock, 
  Monitor, 
  MessageSquare, 
  Megaphone,
  PlusCircle
} from "lucide-react";

interface InformationOverviewProps {
  onNewAnnouncement: () => void;
  onNewArticle: () => void;
}

const InformationOverview = ({ onNewAnnouncement, onNewArticle }: InformationOverviewProps) => {
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
      onClick: onNewAnnouncement
    },
    {
      title: "Add Article",
      icon: PlusCircle,
      color: "text-green-600",
      onClick: onNewArticle
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

  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default InformationOverview;
