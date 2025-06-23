
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface AssignAssetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAssign: (department: string, staff: string) => void;
  selectedAsset?: any;
}

const AssignAssetModal = ({ isOpen, onClose, onAssign, selectedAsset }: AssignAssetModalProps) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedStaff, setSelectedStaff] = useState("");

  const departments = ["Planning", "Registry", "Admin Office", "Human Resources", "ICT", "Maintenance"];
  const staff = {
    "Planning": ["Danjuma Buba", "Fatima Ahmed", "Yusuf Musa", "Aliyu Hassan"],
    "Registry": ["Aisha Bello", "Mohammed Ali", "Zainab Ibrahim", "Usman Garba"],
    "Admin Office": ["Halima Garba", "Usman Kano", "Bilkisu Yusuf", "Aminu Sani"],
    "Human Resources": ["Fatima Bello", "Ibrahim Sulaiman", "Khadija Musa", "Sani Ahmed"],
    "ICT": ["Sani Abubakar", "Amina Jibril", "Musa Bello", "Yusuf Mohammed"],
    "Maintenance": ["Madu Kasimu", "Aliyu Bello", "Ibrahim Sani", "Mohammed Kano"]
  };

  const handleAssign = () => {
    if (selectedDepartment && selectedStaff) {
      onAssign(selectedDepartment, selectedStaff);
      setSelectedDepartment("");
      setSelectedStaff("");
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="relative">
          <DialogTitle className="text-center text-xl font-semibold text-gray-900">
            Assign Asset
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => {
                  setSelectedDepartment(e.target.value);
                  setSelectedStaff("");
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Staff
              </label>
              <select
                value={selectedStaff}
                onChange={(e) => setSelectedStaff(e.target.value)}
                disabled={!selectedDepartment}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
              >
                <option value="">Search or select Select Staff</option>
                {selectedDepartment && staff[selectedDepartment]?.map((person) => (
                  <option key={person} value={person}>{person}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex space-x-4 pt-6">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 py-3 text-gray-700 border-gray-300"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAssign}
              disabled={!selectedDepartment || !selectedStaff}
              className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white"
            >
              Assign Asset
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssignAssetModal;
