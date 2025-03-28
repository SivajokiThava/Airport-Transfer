import { useState } from "react";

const Reports = () => {
  const [activeTab, setActiveTab] = useState("enquiries");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });

  const tabs = [
    { id: "enquiries", label: "Enquiries" },
    { id: "trips", label: "Trips" },
    { id: "operators", label: "Operators" },
    { id: "invoice", label: "Invoice" },
  ];

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold">Reports</h1>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg shadow-sm border">
        {/* Custom Tab Navigation */}
        <div className="border-b">
          <div className="flex flex-wrap sm:flex-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex-1 px-4 py-3 text-sm font-medium min-w-[120px]
                  transition-colors duration-200
                  ${
                    activeTab === tab.id
                      ? "bg-gray-100 text-gray-900 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 space-y-2">
              <label className="text-sm font-medium text-gray-700">From</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={dateRange.from}
                onChange={(e) =>
                  setDateRange((prev) => ({ ...prev, from: e.target.value }))
                }
              />
            </div>
            <div className="flex-1 space-y-2">
              <label className="text-sm font-medium text-gray-700">To</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={dateRange.to}
                onChange={(e) =>
                  setDateRange((prev) => ({ ...prev, to: e.target.value }))
                }
              />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md self-end hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Generate
            </button>
          </div>

          <div className="min-h-[400px] border rounded-md p-4">
            {/* Dynamic content based on active tab */}
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`${activeTab === tab.id ? "block" : "hidden"}`}
              >
                <div className="text-center text-gray-500">
                  {tab.label} content will be displayed here
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
