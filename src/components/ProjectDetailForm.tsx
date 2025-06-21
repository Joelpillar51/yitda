import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { PlanningSuccessModal } from "@/components/PlanningSuccessModal";

interface ProjectDetailFormProps {
  onBack: () => void;
  project?: any;
}

export function ProjectDetailForm({ onBack, project }: ProjectDetailFormProps) {
  const [formData, setFormData] = useState({
    projectName: project?.name || "",
    department: project?.department || "",
    timeline: project?.timeline || "",
    budget: project?.budget || "",
    description: project?.description || ""
  });
  const [successModal, setSuccessModal] = useState({ isOpen: false });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Project data:", formData);
    setSuccessModal({ isOpen: true });
  };

  const handleBackToPlanning = () => {
    setSuccessModal({ isOpen: false });
    onBack();
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Planning
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Project Details</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  placeholder="Enter project name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select Department</option>
                  <option value="ICT & Planning">ICT & Planning</option>
                  <option value="Planning">Planning</option>
                  <option value="HR Admin">HR Admin</option>
                  <option value="AI & Robotics">AI & Robotics</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline
                </label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  placeholder="Select timeline"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  placeholder="e.g., ₦10,000"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe the project objective, scope, and expected outcome"
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="flex space-x-4">
              <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                Create Project
              </Button>
              <Button type="button" variant="outline" onClick={onBack}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>

      <PlanningSuccessModal
        isOpen={successModal.isOpen}
        onClose={handleBackToPlanning}
        title="Project Created Successfully!"
        message="A new project has been successfully created! and a notification has been sent to the concerned department."
        onBackToPlanning={handleBackToPlanning}
      />
    </>
  );
}
