import React, { useState } from "react";
import BaseModal from "../Components/BaseModal";
import Button from "../Components/Button";

interface HourlyRuleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HourlyRuleModal: React.FC<HourlyRuleModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    increasePercentage: "",
    startTime: "",
    endTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-2xl">
      <div className="p-4 sm:p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-sm text-gray-600">
              Ratecard → Colombo → Set hourly rule
            </div>
            <h2 className="text-xl font-semibold">Set an Hourly Rule</h2>
            <p className="text-gray-600 text-sm">
              Increase your distance and fixed route rates during peak hours.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Amount Section */}
          <div className="bg-white p-4 sm:p-6 border rounded-lg space-y-4">
            <div>
              <h3 className="font-medium">Enter an amount</h3>
              <p className="text-sm text-gray-600">
                (This will be applied to distance and fixed route rates.)
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium">INcrease by</label>
              <div className="relative">
                <input
                  type="number"
                  name="increasePercentage"
                  value={formData.increasePercentage}
                  onChange={handleChange}
                  className="w-32 border rounded p-2 pr-8"
                  placeholder="0"
                />
                <span className="absolute right-3 top-2 text-gray-500">%</span>
              </div>
            </div>
          </div>

          {/* Peak Hours Section */}
          <div className="bg-white p-4 sm:p-6 border rounded-lg space-y-4">
            <div>
              <h3 className="font-medium">Enter peak hours</h3>
              <p className="text-sm text-gray-600">
                (Choose when the increase will apply.)
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Start time
                </label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  End time
                </label>
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit">Create rule set</Button>
          </div>
        </form>
      </div>
    </BaseModal>
  );
};

export default HourlyRuleModal;
