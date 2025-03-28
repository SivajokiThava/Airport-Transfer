import React, { useState } from "react";
import Button from "../../Components/Button";

const CreateAvailabilityModal = ({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    locations: [] as string[],
  });

  const locations = [
    "Batticaloa",
    "Bandaranaike International Airport",
    "Colombo International Airport, Ratmalana",
    "Jaffna International Airport",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", startDate: "", endDate: "", locations: [] });
    onClose();
  };

  const handleLocationChange = (location: string) => {
    setFormData((prev) => ({
      ...prev,
      locations: prev.locations.includes(location)
        ? prev.locations.filter((loc) => loc !== location)
        : [...prev.locations, location],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold">Create Availability</h2>
              <p className="text-sm text-gray-500">
                (You will not be receiving jobs for the specified dates and
                locations)
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-sm text-blue-600 hover:underline flex items-center"
            >
              ← Back to availability
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Name Section */}
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Name your stop sale</h3>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full border rounded p-2"
                  placeholder="Name"
                  required
                />
              </div>

              {/* Validity Period */}
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Validity period</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="datetime-local"
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        startDate: e.target.value,
                      }))
                    }
                    className="border rounded p-2"
                    required
                  />
                  <input
                    type="datetime-local"
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        endDate: e.target.value,
                      }))
                    }
                    className="border rounded p-2"
                    required
                  />
                </div>
              </div>

              {/* Locations */}
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">
                  Locations{" "}
                  <span className="text-sm text-gray-500">
                    (Select the locations you'd like this to be applied)
                  </span>
                </h3>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <label
                      key={location}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        checked={formData.locations.includes(location)}
                        onChange={() => handleLocationChange(location)}
                        className="rounded"
                      />
                      <span>{location}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button type="submit">Create stop sale</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Availability = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [availabilityData, setAvailabilityData] = useState([
    {
      name: "24 Hours Stop sale",
      startDate: "26-May-2022 04:00",
      endDate: "27-May-2022 07:00",
      locations: [
        "Colombo International Airport, Ratmalana",
        "Jaffna International Airport",
        "Moratuwa",
        "Sri Jayawardenepura Kotte",
      ],
    },
  ]);

  const handleCreateAvailability = (newData: any) => {
    const formattedData = {
      ...newData,
      startDate: new Date(newData.startDate).toLocaleString(),
      endDate: new Date(newData.endDate).toLocaleString(),
    };
    setAvailabilityData((prev) => [...prev, formattedData]);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Availability</h2>
        <Button onClick={() => setIsModalOpen(true)}>Set Stop Sale</Button>
      </div>

      <div className="flex mb-4 border-b">
        <button
          className={`px-4 py-2 ${
            activeTab === "active"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("active")}
        >
          Active
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "expired"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("expired")}
        >
          Expired
        </button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50">
              <tr className="bg-blue-600/20">
                <th className="text-left py-2 px-4">Name</th>
                <th className="text-left py-2 px-4">Start date</th>
                <th className="text-left py-2 px-4">End date</th>
                <th className="text-left py-2 px-4">Locations</th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {availabilityData.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.startDate}</td>
                  <td className="py-3 px-4">{item.endDate}</td>
                  <td className="py-3 px-4">
                    {item.locations.map((location, i) => (
                      <div key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                        {location}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CreateAvailabilityModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateAvailability}
        />
      </div>
    </div>
  );
};

export default Availability;
