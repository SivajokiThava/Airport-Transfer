import { useState } from "react";
import Button from "../../Components/Button";

const Users = () => {
  const [activeTab, setActiveTab] = useState("System Users");

  const tabs = ["System Users", "Operators", "Drivers", "Customers"];

  const systemUsersHeaders = [
    { label: "Si.NO", key: "id" },
    { label: "Username", key: "username" },
    { label: "Email", key: "email" },
    { label: "Phone number", key: "phone" },
    { label: "Created on", key: "created" },
    { label: "Status", key: "status" },
    { label: "Action", key: "action" },
  ];

  const operatorsHeaders = [
    { label: "Si.NO", key: "id" },
    { label: "Customer name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone number", key: "phone" },
    { label: "Created on", key: "created" },
    { label: "Status", key: "status" },
    { label: "Action", key: "action" },
  ];

  const getCurrentHeaders = () => {
    switch (activeTab) {
      case "Operators":
        return operatorsHeaders;
      default:
        return systemUsersHeaders;
    }
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-4">Users</h1>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Search & Button */}
      <div className="flex items-center justify-end gap-2 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-4 py-2 border rounded-lg w-64"
          />
          <svg
            className="w-4 h-4 absolute left-2 top-3 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <Button>New</Button>
      </div>

      {/* Responsive Table with Scroll on Mobile */}
      <div className="border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50">
              <tr className="bg-blue-600/20">
                {getCurrentHeaders().map((header) => (
                  <th key={header.key} className="text-left p-3 border-b">
                    {header.label}
                    {header.key === "status" && (
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
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 flex gap-2">
        <button className="p-2 hover:text-blue-600">
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
        <button className="p-2 hover:text-red-600">
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
    </div>
  );
};

export default Users;
