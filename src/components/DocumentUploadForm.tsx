import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Upload } from "lucide-react";
import { PlanningSuccessModal } from "@/components/PlanningSuccessModal";

interface DocumentUploadFormProps {
  onBack: () => void;
}

export function DocumentUploadForm({ onBack }: DocumentUploadFormProps) {
  const [formData, setFormData] = useState({
    documentTitle: "",
    type: ""
  });
  const [successModal, setSuccessModal] = useState({ isOpen: false });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Document data:", formData);
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
            <h2 className="text-xl font-semibold text-gray-900">Document Details</h2>
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
                  Document Title
                </label>
                <input
                  type="text"
                  name="documentTitle"
                  value={formData.documentTitle}
                  onChange={handleInputChange}
                  placeholder="Enter document title"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select document type</option>
                  <option value="Strategic Plan">Strategic Plan</option>
                  <option value="Policy">Policy</option>
                  <option value="Framework">Framework</option>
                </select>
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <div className="text-green-600 font-medium mb-2">Click or drag and drop</div>
              <div className="text-gray-500 text-sm">(Max File size: 25 MB)</div>
            </div>

            <div className="flex space-x-4">
              <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                Upload Document
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
        title="Document Uploaded!"
        message="New document has been uploaded successfully!"
        onBackToPlanning={handleBackToPlanning}
      />
    </>
  );
}
