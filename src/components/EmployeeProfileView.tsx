
import { ArrowLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmployeeProfileViewProps {
  onBack: () => void;
  employee: any;
}

export function EmployeeProfileView({ onBack, employee }: EmployeeProfileViewProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={20} />
            <span>Back to HR Dashboard</span>
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Employee Profile Card */}
        <div className="flex items-start space-x-6">
          <div className="w-48 h-64 bg-gray-100 rounded-lg flex flex-col items-center justify-center p-4">
            <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center">Amina Ibrahim Bello</h3>
            <p className="text-sm text-gray-600 text-center">HR Officer</p>
          </div>

          {/* Personal Information */}
          <div className="flex-1">
            <div className="border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                  <p className="text-sm text-gray-900">Amina Ibrahim Bello</p>
                </div>
                <div></div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Gender</label>
                  <p className="text-sm text-gray-900">Female</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Date of Birth</label>
                  <p className="text-sm text-gray-900">April 12, 1994</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">National ID / Staff ID</label>
                  <p className="text-sm text-gray-900">YITDA-HR-0021</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Contact Number</label>
                  <p className="text-sm text-gray-900">+234 806 123 4567</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                  <p className="text-sm text-gray-900">E.g. madu@example.com</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Address</label>
                  <p className="text-sm text-gray-900">12 GRA Extension, Nguru, Yobe State</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employment Details */}
        <div className="border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Employment Details</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Department</label>
              <p className="text-sm text-gray-900">Human Resources</p>
            </div>
            <div></div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Job Title</label>
              <p className="text-sm text-gray-900">HR Officer</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Employment Type</label>
              <p className="text-sm text-gray-900">Full-time</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Date of Employment</label>
              <p className="text-sm text-gray-900">May 1, 2025</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Reporting Manager</label>
              <p className="text-sm text-gray-900">Aisha Suleiman</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Grade / Level</label>
              <p className="text-sm text-gray-900">Level 09</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Office Location</label>
              <p className="text-sm text-gray-900">YITDA HQ, Admin Block</p>
            </div>
          </div>
        </div>

        {/* Payroll Information */}
        <div className="border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Payroll Information</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Bank Name</label>
              <p className="text-sm text-gray-900">Zenith Bank</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Bank Account Number</label>
              <p className="text-sm text-gray-900">1234567890</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Salary Structure</label>
              <p className="text-sm text-gray-900">Monthly</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Base Salary</label>
              <p className="text-sm text-gray-900">₦250,000</p>
            </div>
          </div>
        </div>

        {/* Uploaded Documents */}
        <div className="border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Uploaded Documents:</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Profile Photo</label>
              <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                    <span className="text-green-600 text-xs">📄</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Profile_Photo.pdf</p>
                    <p className="text-xs text-gray-500">200 KB</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-green-600 hover:text-green-700 text-sm">Click to view</button>
                  <Trash2 size={16} className="text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Offer Letter / Appointment Letter</label>
              <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                    <span className="text-green-600 text-xs">📄</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Offer Letter.pdf</p>
                    <p className="text-xs text-gray-500">200 KB</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-green-600 hover:text-green-700 text-sm">Click to view</button>
                  <Trash2 size={16} className="text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Identity Document</label>
              <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                    <span className="text-green-600 text-xs">📄</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">My NIN.pdf</p>
                    <p className="text-xs text-gray-500">200 KB</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-green-600 hover:text-green-700 text-sm">Click to view</button>
                  <Trash2 size={16} className="text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
