import { useState } from "react";

const GeoLocations = () => {
  const [locations] = useState([
    {
      id: 1,
      name: "Colombo airport",
      type: "Airport",
      createdOn: "2025-09-10",
      status: "Active",
    },
  ]);

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Geo Locations</h1>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="bg-blue-600/20">
              <th className="text-left p-3 border-b">Si.NO</th>
              <th className="text-left p-3 border-b">Location List</th>
              <th className="text-left p-3 border-b">Type</th>
              <th className="text-left p-3 border-b">Created on</th>
              <th className="text-left p-3 border-b">
                Status
                <svg
                  className="w-4 h-4 inline-block ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </th>
              <th className="text-left p-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{location.id}</td>
                <td className="p-3">{location.name}</td>
                <td className="p-3">{location.type}</td>
                <td className="p-3">{location.createdOn}</td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded-full text-sm bg-green-100 text-green-800">
                    {location.status}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GeoLocations;
