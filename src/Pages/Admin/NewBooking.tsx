import React, { useState } from "react";
import { Calendar } from "lucide-react";
import Button from "../../Components/Button";
import PriceModal from "../../Modals/PriceModal";

const NewBooking = () => {
  const [formData, setFormData] = useState({
    bookingId: "",
    type: "Book ride",
    country: "",
    operator: "",
    customerName: "",
    email: "",
    phone: "",
    pickup: "",
    dropoff: "",
    dateTime: "",
    customerCount: "1",
    luggage: "1",
    vehicleType: "Sedan",
    tripFare: "",
    operatorFare: "",
    paymentType: "cash",
    flightNo: "",
    driverNotes: "",
    adminNotes: "",
    promoCode: "",
  });
  const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPriceModalOpen(true); // Open the modal on form submission
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">New booking</h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Top Row */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Book ride">Book ride</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Country</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Operator
                </label>
                <select
                  name="operator"
                  value={formData.operator}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Ops name</option>
                </select>
              </div>
            </div>

            {/* Customer Info */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer name
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Location Info */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pickup
                </label>
                <input
                  type="text"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Drop off
                </label>
                <input
                  type="text"
                  name="dropoff"
                  value={formData.dropoff}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date and Time
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="dateTime"
                      value={formData.dateTime}
                      onChange={handleInputChange}
                      className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                      placeholder="/ /"
                    />
                    <Calendar className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Customers
                  </label>
                  <select
                    name="customerCount"
                    value={formData.customerCount}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="1">1</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Vehicle and Payment Info */}
            <div className="grid grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vehicle type
                </label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Sedan">Sedan</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Trip fare
                </label>
                <input
                  type="text"
                  name="tripFare"
                  value={formData.tripFare}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Operator fare
                </label>
                <input
                  type="text"
                  name="operatorFare"
                  value={formData.operatorFare}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payment type
                </label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentType"
                      value="cash"
                      checked={formData.paymentType === "cash"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Cash
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentType"
                      value="online"
                      checked={formData.paymentType === "online"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Online
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Flight NO
                </label>
                <input
                  type="text"
                  name="flightNo"
                  value={formData.flightNo}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Notes Section */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Driver notes
                </label>
                <textarea
                  name="driverNotes"
                  value={formData.driverNotes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Admin notes
                </label>
                <textarea
                  name="adminNotes"
                  value={formData.adminNotes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Promo Code */}
            <div className="flex gap-4 items-end">
              <div className="flex-1 max-w-xs">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Promo code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={handleInputChange}
                    className="flex-1 border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
                  />
                  <button type="button" className="px-4 py-2 border rounded-md">
                    Apply
                  </button>
                </div>
              </div>
              <Button type="submit">Get Price</Button>
            </div>
          </form>
        </div>

        {/* Right Map Section */}
        <div className="bg-gray-100 rounded-lg">
          <div className="h-full min-h-[500px] rounded-lg"></div>
        </div>
      </div>
      <PriceModal
        isOpen={isPriceModalOpen}
        onClose={() => setIsPriceModalOpen(false)}
      />
    </div>
  );
};

export default NewBooking;
