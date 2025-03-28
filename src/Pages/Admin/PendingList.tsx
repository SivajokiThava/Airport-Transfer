import { useState } from "react";
import { Filter, Search, PenSquare } from "lucide-react";

interface Trip {
  id: string;
  type: string;
  dateTime: string;
  pickup: string;
  drop: string;
  vehicleType: string;
  distance: string;
  customerNo: string;
}

const PendingList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const trips: Trip[] = [
    {
      id: "T123",
      type: "One Way",
      dateTime: "2024-01-29 14:30",
      pickup: "Airport Terminal 1",
      drop: "City Center Hotel",
      vehicleType: "Sedan",
      distance: "15 km",
      customerNo: "C789",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow p-4">
        {/* Header */}
        <div className="border-b pb-4 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold">Requested Trips</h2>
            <span className="text-gray-500">(5)</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative w-full md:w-64">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded">
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="border rounded-lg overflow-x-auto mt-4">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50">
              <tr className="bg-blue-600/20 text-black text-left text-sm font-medium">
                <th className="px-6 py-3">Trip Id</th>
                <th className="px-6 py-3">Trip Type</th>
                <th className="px-6 py-3">Date & Time</th>
                <th className="px-6 py-3">Pickup</th>
                <th className="px-6 py-3">Drop</th>
                <th className="px-6 py-3">Vehicle Type</th>
                <th className="px-6 py-3">Distance</th>
                <th className="px-6 py-3">Customer No</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {trips.map((trip) => (
                <tr key={trip.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{trip.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {trip.type}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {trip.dateTime}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {trip.pickup}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {trip.drop}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {trip.vehicleType}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {trip.distance}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {trip.customerNo}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <button className="text-blue-600 hover:text-blue-700">
                      <PenSquare className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
              {trips.length === 0 && (
                <tr>
                  <td
                    colSpan={9}
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No trips found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingList;
