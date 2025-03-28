import { useState } from "react";
import Button from "../../Components/Button";
import { X } from "lucide-react";

interface FormData {
  name: string;
  type: "increase" | "decrease";
  value: string;
  location: string;
  vehicleType: string;
  startDate: string;
  endDate: string;
}

interface DiscountData {
  name: string;
  adjustment: string;
  startDate: string;
  endDate: string;
  location: string;
  vehicleTypes: string[];
}

interface CreateDiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

const CreateDiscountModal: React.FC<CreateDiscountModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    type: "increase",
    value: "",
    location: "",
    vehicleType: "",
    startDate: "",
    endDate: "",
  });

  const locations = [
    "Batticaloa International Airport",
    "Bandaranaike International Airport",
    "Jaffna International Airport",
    "Colombo International Airport, Ratmalana",
  ];

  const vehicleTypes = ["Sedan", "SUV", "Luxury", "Van"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      type: "increase",
      value: "",
      location: "",
      vehicleType: "",
      startDate: "",
      endDate: "",
    });
    onClose();
  };
  if (!isOpen) return null;

  const handleTypeChange = (value: "increase" | "decrease") => {
    setFormData({ ...formData, type: value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-3xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold">Charges and Discounts</h2>
              <p className="text-sm text-gray-500">
                (Increase or decrease your distance and fixed route rates for a
                specific time period.)
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Name and Type Section */}
            <div className="border rounded-lg p-4 mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-medium">Name:</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border rounded p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Type</label>
                  <div className="space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="increase"
                        checked={formData.type === "increase"}
                        onChange={() => handleTypeChange("increase")}
                        className="mr-2"
                      />
                      Increase
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="decrease"
                        checked={formData.type === "decrease"}
                        onChange={() => handleTypeChange("decrease")}
                        className="mr-2"
                      />
                      Decrease
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Section */}
            <div className="border rounded-lg p-4 mb-4">
              <label className="block mb-2 font-medium">Enter the value</label>
              <div className="flex items-center">
                <span className="mr-2">
                  {formData.type === "increase" ? "Increase" : "Decrease"} by
                </span>
                <input
                  type="number"
                  value={formData.value}
                  onChange={(e) =>
                    setFormData({ ...formData, value: e.target.value })
                  }
                  className="border rounded p-2 w-24"
                  required
                />
                <span className="ml-2">%</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                (This will be applied to the total price of an applicable
                distance and fixed route rates.)
              </p>
            </div>

            {/* Locations and Vehicle Type Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Locations */}
              <div className="border rounded-lg p-4">
                <label className="block mb-2 font-medium">
                  Locations
                  <span className="block text-sm font-normal text-gray-500">
                    (Select Location)
                  </span>
                </label>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <label key={location} className="flex items-center">
                      <input
                        type="radio"
                        name="location"
                        value={location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="mr-2"
                      />
                      {location}
                    </label>
                  ))}
                </div>
              </div>

              {/* Vehicle Type */}
              <div className="border rounded-lg p-4">
                <div className="mb-4">
                  <label className="block mb-2 font-medium">Vehicle Type</label>
                  <select
                    value={formData.vehicleType}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicleType: e.target.value })
                    }
                    className="w-full border rounded p-2"
                  >
                    <option value="">Select Car Type</option>
                    {vehicleTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">Vehicle Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">Start date</label>
                      <input
                        type="datetime-local"
                        value={formData.startDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            startDate: e.target.value,
                          })
                        }
                        className="w-full border rounded p-2"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">End date</label>
                      <input
                        type="datetime-local"
                        value={formData.endDate}
                        onChange={(e) =>
                          setFormData({ ...formData, endDate: e.target.value })
                        }
                        className="w-full border rounded p-2"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Create campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Discount: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"active" | "expired">("active");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [discountData, setDiscountData] = useState<DiscountData[]>([
    {
      name: "Christmas hike",
      adjustment: "20% increase",
      startDate: "20-Dec-2022",
      endDate: "27-Dec-2022",
      location: "Colombu",
      vehicleTypes: ["Sedan", "SUV", "Luxury"],
    },
    {
      name: "Christmas hike",
      adjustment: "20% increase",
      startDate: "20-Dec-2022",
      endDate: "27-Dec-2022",
      location: "Colombu",
      vehicleTypes: ["Sedan", "SUV", "Luxury"],
    },
    {
      name: "Christmas hike",
      adjustment: "10% Decrease",
      startDate: "20-Dec-2022",
      endDate: "27-Dec-2022",
      location: "Colombu",
      vehicleTypes: ["Sedan", "SUV", "Luxury"],
    },
  ]);

  const handleSubmit = (formData: FormData) => {
    const newDiscount: DiscountData = {
      name: formData.name,
      adjustment: `${formData.value}% ${formData.type}`,
      startDate: new Date(formData.startDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      endDate: new Date(formData.endDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      location: formData.location,
      vehicleTypes: [formData.vehicleType],
    };

    setDiscountData([...discountData, newDiscount]);
  };
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">Charges and Discounts</h2>
          <p className="text-sm text-gray-500">
            (Change your distance and fixed route rates for specific events)
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>Create New</Button>
      </div>

      <div className="flex mb-4 border-b">
        <button
          className={`px-4 py-2 ${
            activeTab === "active"
              ? "border-b-2 border-blue-500 text-blue-500 font-medium"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("active")}
        >
          Active
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "expired"
              ? "border-b-2 border-blue-500 text-blue-500 font-medium"
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
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-3 px-4 font-medium">Name</th>
                <th className="text-left py-3 px-4 font-medium">Adjustment</th>
                <th className="text-left py-3 px-4 font-medium">Start date</th>
                <th className="text-left py-3 px-4 font-medium">End date</th>
                <th className="text-left py-3 px-4 font-medium">Location</th>
                <th className="text-left py-3 px-4 font-medium">
                  Vehicle Type
                </th>
              </tr>
            </thead>
            <tbody>
              {discountData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.adjustment}</td>
                  <td className="py-3 px-4">{item.startDate}</td>
                  <td className="py-3 px-4">{item.endDate}</td>
                  <td className="py-3 px-4">{item.location}</td>
                  <td className="py-3 px-4">
                    <div>Multiple vehicles</div>
                    {item.vehicleTypes.map((type, i) => (
                      <div key={i} className="flex items-center mt-1">
                        <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                        {type}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CreateDiscountModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Discount;
