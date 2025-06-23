
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface AssignTechnicianModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAssign: (department: string, technician: string) => void;
  selectedTicket?: any;
}

const AssignTechnicianModal = ({ isOpen, onClose, onAssign, selectedTicket }: AssignTechnicianModalProps) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedTechnician, setSelectedTechnician] = useState("");

  const departments = ["Maintenance", "Planning", "ICT", "Registry", "Admin Office"];
  const technicians = {
    "Maintenance": ["Madu Kasimu", "Aliyu Bello", "Ibrahim Sani"],
    "Planning": ["Danjuma Buba", "Fatima Ahmed", "Yusuf Musa"],
    "ICT": ["Sani Abubakar", "Amina Jibril", "Musa Bello"],
    "Registry": ["Aisha Bello", "Mohammed Ali", "Zainab Ibrahim"],
    "Admin Office": ["Halima Garba", "Usman Kano", "Bilkisu Yusuf"]
  };

  const handleAssign = () => {
    if (selectedDepartment && selectedTechnician) {
      onAssign(selectedDepartment, selectedTechnician);
      setSelectedDepartment("");
      setSelectedTechnician("");
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="relative">
          <DialogTitle className="text-center text-xl font-semibold text-gray-900">
            Assign Technician
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
          <p className="text-center text-gray-600">
            You are about to assign this ticket to:
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => {
                  setSelectedDepartment(e.target.value);
                  setSelectedTechnician("");
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
                Technician
              </label>
              <select
                value={selectedTechnician}
                onChange={(e) => setSelectedTechnician(e.target.value)}
                disabled={!selectedDepartment}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
              >
                <option value="">Search or select Technician</option>
                {selectedDepartment && technicians[selectedDepartment]?.map((tech) => (
                  <option key={tech} value={tech}>{tech}</option>
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
              disabled={!selectedDepartment || !selectedTechnician}
              className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white"
            >
              Assign Technician
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssignTechnicianModal;
