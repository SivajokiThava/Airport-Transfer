import React, { useState } from "react";
import { Car } from "lucide-react";
import BaseModal from "../Components/BaseModal";
import Button from "../Components/Button";

interface AirportPickupFeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AirportPickupFeeModal: React.FC<AirportPickupFeeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    generalFee: "",
    applyToAll: false,
    customFees: {
      sedan: "",
      suv: "",
      auto: "",
    },
  });

  const handleGeneralFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, generalFee: value }));
  };

  const handleApplyToAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData((prev) => ({ ...prev, applyToAll: checked }));
  };

  const handleCustomFeeChange = (
    vehicleType: keyof typeof formData.customFees,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      customFees: {
        ...prev.customFees,
        [vehicleType]: value,
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
        <div className="space-y-1">
          <div className="text-sm text-gray-600">
            Ratecard → Colombo → Edit airport pick-up fee
          </div>
          <h2 className="text-xl font-semibold">
            Edit your airport pick-up fee
          </h2>
          <p className="text-gray-600 text-sm">
            (This is paid by the customer, and includes 60 minutes of waiting
            time at the agreed meeting point.)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* General Fee Section */}
          <div className="bg-white p-4 sm:p-6 border rounded-lg space-y-4">
            <div>
              <h3 className="font-medium">Set airport pickup fee</h3>
              <p className="text-sm text-gray-600">
                This fee will apply to all vehicle types. If you customise
                airport fees for different pick up types, this will be ignored.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start space-x-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Airport fee
                  </label>
                  <input
                    type="number"
                    value={formData.generalFee}
                    onChange={handleGeneralFeeChange}
                    className="w-full sm:w-48 border rounded p-2"
                    placeholder="Enter fee amount"
                  />
                </div>
                <div className="mt-8">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.applyToAll}
                      onChange={handleApplyToAllChange}
                      className="h-4 w-4 text-[#9C4C7C] border-gray-300 rounded"
                    />
                    <span className="text-sm">
                      apply fee to all vehicle types
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Fees Section */}
          <div className="bg-white p-4 sm:p-6 border rounded-lg space-y-4">
            <h3 className="font-medium">Customized airport pickup fee</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Sedan */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Car className="h-5 w-5" />
                  <span className="text-sm font-medium">Sedan</span>
                </div>
                <input
                  type="number"
                  value={formData.customFees.sedan}
                  onChange={(e) =>
                    handleCustomFeeChange("sedan", e.target.value)
                  }
                  className="w-full border rounded p-2"
                  placeholder="Enter fee"
                />
              </div>

              {/* SUV */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Car className="h-5 w-5" />
                  <span className="text-sm font-medium">SUV</span>
                </div>
                <input
                  type="number"
                  value={formData.customFees.suv}
                  onChange={(e) => handleCustomFeeChange("suv", e.target.value)}
                  className="w-full border rounded p-2"
                  placeholder="Enter fee"
                />
              </div>

              {/* Auto */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Car className="h-5 w-5" />
                  <span className="text-sm font-medium">Auto</span>
                </div>
                <input
                  type="number"
                  value={formData.customFees.auto}
                  onChange={(e) =>
                    handleCustomFeeChange("auto", e.target.value)
                  }
                  className="w-full border rounded p-2"
                  placeholder="Enter fee"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit">Save and update</Button>
          </div>
        </form>
      </div>
    </BaseModal>
  );
};

export default AirportPickupFeeModal;
