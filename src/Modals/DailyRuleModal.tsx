import React, { useState } from "react";
import BaseModal from "../Components/BaseModal";
import Button from "../Components/Button";

interface DailyRuleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DailyRuleModal: React.FC<DailyRuleModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    increasePercentage: "",
    activeDays: {
      Sunday: false,
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
    },
  });

  const handlePercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDayToggle = (day: string) => {
    setFormData((prev) => ({
      ...prev,
      activeDays: {
        ...prev.activeDays,
        [day]: !prev.activeDays[day as keyof typeof prev.activeDays],
      },
    }));
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
              Ratecard → Colombo → Set daily rule
            </div>
            <h2 className="text-xl font-semibold">Set a Daily Rule</h2>
            <p className="text-gray-600 text-sm">
              Increase your distance and fixed route rates on peak days of the
              week.
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
                  onChange={handlePercentageChange}
                  className="w-32 border rounded p-2 pr-8"
                  placeholder="0"
                />
                <span className="absolute right-3 top-2 text-gray-500">%</span>
              </div>
            </div>
          </div>

          {/* Active Days Section */}
          <div className="bg-white p-4 sm:p-6 border rounded-lg space-y-4">
            <div>
              <h3 className="font-medium">Active days</h3>
              <p className="text-sm text-gray-600">
                (Choose when the increased distance and fixed route rate will
                apply.)
              </p>
            </div>

            <div className="space-y-3">
              {Object.keys(formData.activeDays).map((day) => (
                <div key={day} className="flex items-center">
                  <input
                    type="checkbox"
                    id={day}
                    checked={
                      formData.activeDays[
                        day as keyof typeof formData.activeDays
                      ]
                    }
                    onChange={() => handleDayToggle(day)}
                    className="h-4 w-4 text-[#9C4C7C] border-gray-300 rounded"
                  />
                  <label htmlFor={day} className="ml-2 text-sm">
                    {day}
                  </label>
                </div>
              ))}
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

export default DailyRuleModal;
