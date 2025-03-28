import React, { useState } from "react";
import BaseModal from "../Components/BaseModal";
import Button from "../Components/Button";

interface DistanceRatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DistanceRatesModal: React.FC<DistanceRatesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    initialRate: "40",
    includedDistance: "20",
    slab1Price: "15",
    slab1Distance: "",
    slab2Price: "13",
    slab2Distance: "",
    slab3Price: "12",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
      <div className="space-y-4">
        {/* Header - Responsive padding */}
        <div className="px-4 sm:px-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Distance Rates</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Make adjustments to your distance rates
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Flex column on mobile, row on desktop */}
        <div className="flex flex-col sm:flex-row">
          {/* Left Panel - Full width on mobile, fixed width on desktop */}
          <div className="w-full sm:w-48 border-b sm:border-b-0 sm:border-r p-4 sm:pr-4">
            <div className="flex sm:flex-col items-center sm:items-start space-x-4 sm:space-x-0 sm:space-y-2">
              <h3 className="font-medium text-lg">Sedan</h3>
              <p className="text-sm text-gray-600">Toyota etios or similar</p>
              <div className="flex justify-center py-2 sm:py-4">
                <svg
                  viewBox="0 0 24 24"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 17h14m-7-2v2m-5-7h10l2 5H3l2-5zm0 0l1-3h8l1 3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Panel - Form Fields */}
          <div className="flex-1 p-4 sm:pl-6 space-y-6">
            {/* Initial Rate Section */}
            <div className="space-y-3">
              <h3 className="font-medium">Initial rate</h3>
              <p className="text-sm text-gray-600">
                Please enter the minimum fare you're willing to accept for a
                booking and the distance that is included in that price.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Price</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="initialRate"
                      value={formData.initialRate}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">
                      GBP
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    Included distance
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="includedDistance"
                      value={formData.includedDistance}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">
                      km
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slabs - Stack on mobile, grid on desktop */}
            <div className="space-y-6">
              {/* Slab 1 */}
              <div className="space-y-3">
                <h3 className="font-medium">Slab1</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Price (per KM)</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="slab1Price"
                        value={formData.slab1Price}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        gbp
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Next distance</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="slab1Distance"
                        value={formData.slab1Distance}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        km
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  **This covers distances within 20.0km and 50.0km
                </p>
              </div>

              {/* Slab 2 */}
              <div className="space-y-3">
                <h3 className="font-medium">Slab2</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Price (per KM)</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="slab2Price"
                        value={formData.slab2Price}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        GBP
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Next distance</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="slab2Distance"
                        value={formData.slab2Distance}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        km
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  **This covers distances within 50.0km and 70.0km
                </p>
              </div>

              {/* Slab 3 */}
              <div className="space-y-3">
                <h3 className="font-medium">Slab3</h3>
                <div>
                  <label className="block text-sm mb-1">Price (per KM)</label>
                  <div className="relative w-full sm:w-1/2">
                    <input
                      type="text"
                      name="slab3Price"
                      value={formData.slab3Price}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">
                      GBP
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  **This covers any distance from 70.0km and up to your maximum
                  distance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button - Full width on mobile */}
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </BaseModal>
  );
};

export default DistanceRatesModal;
