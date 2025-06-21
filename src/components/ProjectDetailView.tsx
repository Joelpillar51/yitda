
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";

interface ProjectDetailViewProps {
  onBack: () => void;
  project?: any;
}

export function ProjectDetailView({ onBack, project }: ProjectDetailViewProps) {
  const [status] = useState(project?.status || "Pending");

  const projectData = {
    name: "Smart City Initiative",
    department: "ICT",
    timeline: "Jan-Dec 2025",
    budget: "₦150,000,000",
    description: "The Smart City Initiative aims to enhance urban living by leveraging digital technology to improve public services, infrastructure, and citizen engagement within the city. This project will focus on deploying smart technologies such as IoT-enabled street lighting, traffic management systems, public Wi-Fi zones, and digital service platforms for easier access to government services...."
  };

  const getStatusBadge = (status: string) => {
    if (status === "Pending") {
      return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">● Pending</Badge>;
    }
    return <Badge className="bg-green-100 text-green-800 border-green-200">● {status}</Badge>;
  };

  const getProgressBar = () => {
    if (status === "Pending") {
      return (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-yellow-600 text-sm">● Pending</span>
            <span className="text-sm text-gray-600">40%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: "40%" }}></div>
          </div>
        </div>
      );
    }
    return null;
  };

  const handleMarkAsCompleted = () => {
    // Handle mark as completed logic
    console.log("Marking project as completed");
  };

  const handleApprove = () => {
    // Handle approve logic
    console.log("Approving project");
  };

  const handleReject = () => {
    // Handle reject logic
    console.log("Rejecting project");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Planning
        </button>
      </div>

      {getProgressBar()}

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Project Details</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Name
              </label>
              <input
                type="text"
                value={projectData.name}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <input
                type="text"
                value={projectData.department}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timeline
              </label>
              <input
                type="text"
                value={projectData.timeline}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget
              </label>
              <input
                type="text"
                value={projectData.budget}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Description
            </label>
            <textarea
              value={projectData.description}
              readOnly
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 resize-none"
            />
          </div>

          {status === "Pending" ? (
            <div className="flex space-x-4">
              <Button onClick={handleApprove} className="bg-green-600 hover:bg-green-700 text-white">
                Approve
              </Button>
              <Button onClick={handleReject} variant="destructive">
                Reject Request
              </Button>
            </div>
          ) : (
            <Button onClick={handleMarkAsCompleted} className="bg-green-100 text-green-800 hover:bg-green-200">
              Mark as Completed
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
