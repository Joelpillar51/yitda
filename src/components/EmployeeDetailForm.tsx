
import { useState } from "react";
import { ArrowLeft, Upload, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface EmployeeDetailFormProps {
  onBack: () => void;
  employee?: any;
}

export function EmployeeDetailForm({ onBack, employee }: EmployeeDetailFormProps) {
  const [formData, setFormData] = useState({
    fullName: employee?.name || "",
    gender: employee?.gender || "",
    dateOfBirth: employee?.dateOfBirth || "",
    nationalId: employee?.nationalId || "",
    contactNumber: employee?.contactNumber || "",
    emailAddress: employee?.emailAddress || "",
    address: employee?.address || "",
    department: employee?.department || "",
    jobTitle: employee?.role || "",
    employmentType: employee?.status || "",
    dateOfEmployment: employee?.dateOfEmployment || "",
    reportingManager: employee?.reportingManager || "",
    gradeLevel: employee?.gradeLevel || "",
    officeLocation: employee?.officeLocation || "",
    bankName: employee?.bankName || "",
    bankAccountNumber: employee?.bankAccountNumber || "",
    salaryStructure: employee?.salaryStructure || "",
    baseSalary: employee?.baseSalary || ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

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
        {/* Personal Information Section */}
        <div className="border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="Input"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
              />
            </div>
            <div></div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <select 
                id="gender"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={formData.gender}
                onChange={(e) => handleInputChange("gender", e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                placeholder="DD/MM/YYYY"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="nationalId">National ID / Staff ID</Label>
              <Input
                id="nationalId"
                placeholder="Enter Unique Identifier"
                value={formData.nationalId}
                onChange={(e) => handleInputChange("nationalId", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="contactNumber">Contact Number</Label>
              <Input
                id="contactNumber"
                placeholder="e.g 070 1111 111 111"
                value={formData.contactNumber}
                onChange={(e) => handleInputChange("contactNumber", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="emailAddress">Email Address</Label>
              <Input
                id="emailAddress"
                placeholder="E.g. madu@example.com"
                value={formData.emailAddress}
                onChange={(e) => handleInputChange("emailAddress", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="e.g. House 1 street"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Employment Details Section */}
        <div className="border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Employment Details</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="department">Department</Label>
              <select 
                id="department"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={formData.department}
                onChange={(e) => handleInputChange("department", e.target.value)}
              >
                <option value="">Select Department</option>
                <option value="Human Resources">Human Resources</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
            <div></div>
            <div>
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                placeholder="Enter Job Title"
                value={formData.jobTitle}
                onChange={(e) => handleInputChange("jobTitle", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="employmentType">Employment Type</Label>
              <select 
                id="employmentType"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={formData.employmentType}
                onChange={(e) => handleInputChange("employmentType", e.target.value)}
              >
                <option value="">Select Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div>
              <Label htmlFor="dateOfEmployment">Date of Employment</Label>
              <Input
                id="dateOfEmployment"
                placeholder="DD/MM/YYYY"
                value={formData.dateOfEmployment}
                onChange={(e) => handleInputChange("dateOfEmployment", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="reportingManager">Reporting Manager</Label>
              <select 
                id="reportingManager"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={formData.reportingManager}
                onChange={(e) => handleInputChange("reportingManager", e.target.value)}
              >
                <option value="">Select</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
              </select>
            </div>
            <div>
              <Label htmlFor="gradeLevel">Grade / Level</Label>
              <Input
                id="gradeLevel"
                placeholder="E.g. Level 1"
                value={formData.gradeLevel}
                onChange={(e) => handleInputChange("gradeLevel", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="officeLocation">Office Location</Label>
              <Input
                id="officeLocation"
                placeholder="e.g. House 1 street"
                value={formData.officeLocation}
                onChange={(e) => handleInputChange("officeLocation", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Payroll Information Section */}
        <div className="border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Payroll Information</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="bankName">Bank Name</Label>
              <Input
                id="bankName"
                placeholder="Enter Bank Name"
                value={formData.bankName}
                onChange={(e) => handleInputChange("bankName", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="bankAccountNumber">Bank Account Number</Label>
              <Input
                id="bankAccountNumber"
                placeholder="Enter Account Number"
                value={formData.bankAccountNumber}
                onChange={(e) => handleInputChange("bankAccountNumber", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="salaryStructure">Salary Structure</Label>
              <select 
                id="salaryStructure"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={formData.salaryStructure}
                onChange={(e) => handleInputChange("salaryStructure", e.target.value)}
              >
                <option value="">Select Salary structure</option>
                <option value="Monthly">Monthly</option>
                <option value="Weekly">Weekly</option>
                <option value="Hourly">Hourly</option>
              </select>
            </div>
            <div>
              <Label htmlFor="baseSalary">Base Salary</Label>
              <Input
                id="baseSalary"
                placeholder="Enter"
                value={formData.baseSalary}
                onChange={(e) => handleInputChange("baseSalary", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Document Uploads Section */}
        <div className="border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Document Uploads</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label>Profile Photo</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-8 w-8 text-green-500 mb-2" />
                <p className="text-sm text-green-600">Click to Upload</p>
                <p className="text-xs text-gray-500">(Max file size: 25 MB)</p>
              </div>
            </div>
            <div>
              <Label>Offer Letter / Appointment Letter</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-8 w-8 text-green-500 mb-2" />
                <p className="text-sm text-green-600">Click to Upload</p>
                <p className="text-xs text-gray-500">(Max file size: 25 MB)</p>
              </div>
            </div>
            <div>
              <Label>Identity Document</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-8 w-8 text-green-500 mb-2" />
                <p className="text-sm text-green-600">Click to Upload</p>
                <p className="text-xs text-gray-500">(Max file size: 25 MB)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-6">
          <Button variant="outline" onClick={onBack}>
            Cancel
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            Save & Exit
          </Button>
        </div>
      </div>
    </div>
  );
}
