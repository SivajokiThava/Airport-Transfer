// components/AreaOperationModal.tsx
import { useState } from "react";
import BaseModal from "../Components/BaseModal";

interface AreaOperationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AreaOperationModal: React.FC<AreaOperationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    latitude: "",
    longitude: "",
    centralZoneRadius: "",
    maxDistance: "",
    leadTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-5xl">
      <div className="space-y-4">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            Edit your area of operation for colombo
          </h2>
          <p className="text-gray-600">
            (Use this area to manage how far your fleet travels)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Central Zone Coordinates */}
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">Mark your central zone?</h3>
              <p className="text-sm text-gray-600 mb-2">
                (Enter the coordinates at the centre of your main working area)
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Latitude</label>
                  <input
                    type="text"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Longitude</label>
                  <input
                    type="text"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />
                </div>
              </div>
            </div>

            {/* Central Zone Size */}
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">
                How big is your central zone?
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                (We'll show you on search results for any trips within this
                area)
              </p>
              <div>
                <label className="block text-sm mb-1">
                  Maximum radius of central zone
                </label>
                <input
                  type="text"
                  name="centralZoneRadius"
                  value={formData.centralZoneRadius}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Maximum Distance */}
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">
                How far will you go out of your central zone?
              </h3>
              <div>
                <label className="block text-sm mb-1">
                  Furthest distance from coordinates
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="maxDistance"
                    value={formData.maxDistance}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />
                  <span className="absolute right-3 top-2 text-gray-500">
                    km
                  </span>
                </div>
              </div>
            </div>

            {/* Lead Time */}
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">
                advance notice time to fulfil a booking?
              </h3>
              <div>
                <label className="block text-sm mb-1">Lead time</label>
                <div className="relative">
                  <input
                    type="text"
                    name="leadTime"
                    value={formData.leadTime}
                    onChange={handleChange}
                    className="w-full border rounded p-2"
                  />
                  <span className="absolute right-3 top-2 text-gray-500">
                    hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Help Text */}
          <div className="grid grid-cols-3 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
            <div>
              <h4 className="font-medium mb-1">
                What is latitude and longitude?
              </h4>
              <p className="text-gray-600">
                Latitude and longitude are a series of numbers that point to an
                exact location
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">What is a central zone?</h4>
              <p className="text-gray-600">
                This is the main area you cover. You'll have capacity to take
                all trips that start and end within this radius.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">
                How far can you go from the central zone?
              </h4>
              <p className="text-gray-600">
                We recommend setting a distance you can cover without harming
                quality of service.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </BaseModal>
  );
};

export default AreaOperationModal;
