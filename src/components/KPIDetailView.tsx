
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface KPIDetailViewProps {
  onBack: () => void;
  kpi?: any;
}

export function KPIDetailView({ onBack, kpi }: KPIDetailViewProps) {
  const kpiData = {
    name: "Public Wi-Fi Coverage Expansion",
    department: "ICT",
    targetValue: "50",
    currentValue: "0",
    unitOfMeasurement: "Number of Locations",
    priorityLevel: "High",
    targetDate: "December 15, 2025",
    description: "This KPI measures the number of strategic public areas where free, high-speed public Wi-Fi is successfully deployed and operational under the Smart City Initiative. It will be tracked through monthly progress reports, physical verification, and technical performance logs. Achieving this target will directly support the goal of increasing digital connectivity and accessibility for all citizens."
  };

  const handleMarkAsCompleted = () => {
    // Handle mark as completed logic
    console.log("Marking KPI as completed");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Planning
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-orange-600 text-sm">● On Track</span>
          <span className="text-sm text-gray-600">80%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
        </div>
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

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                KPI Name
              </label>
              <input
                type="text"
                value={kpiData.name}
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
                value={kpiData.department}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Value
              </label>
              <input
                type="text"
                value={kpiData.targetValue}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Value
              </label>
              <input
                type="text"
                value={kpiData.currentValue}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unit of Measurement
              </label>
              <input
                type="text"
                value={kpiData.unitOfMeasurement}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority Level
              </label>
              <input
                type="text"
                value={kpiData.priorityLevel}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Date
              </label>
              <input
                type="text"
                value={kpiData.targetDate}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              KPI Description
            </label>
            <textarea
              value={kpiData.description}
              readOnly
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 resize-none"
            />
          </div>

          <Button onClick={handleMarkAsCompleted} className="bg-green-100 text-green-800 hover:bg-green-200">
            Mark as Completed
          </Button>
        </div>
      </div>
    </div>
  );
}
