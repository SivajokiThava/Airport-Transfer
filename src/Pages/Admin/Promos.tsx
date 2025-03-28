import { useState } from "react";
import { Search, ArrowLeft } from "lucide-react";
import Button from "../../Components/Button";

const Promos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return (
      <div className="w-full p-4 bg-white rounded-lg shadow-sm">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Promos</h1>
        </div>

        <div className="flex items-center justify-end gap-4 mb-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="search"
              className="pl-8 pr-3 py-2 w-[200px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button onClick={() => setIsModalOpen(true)}>New</Button>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="bg-blue-600/20">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Sl.no
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Coupon code
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Type
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Value
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Validity
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Budget
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2 text-sm">1</td>
                <td className="px-4 py-2 text-sm">001</td>
                <td className="px-4 py-2 text-sm">Percentage</td>
                <td className="px-4 py-2 text-sm">50%</td>
                <td className="px-4 py-2 text-sm">2024-12-31</td>
                <td className="px-4 py-2 text-sm">$1000</td>
                <td className="px-4 py-2 text-sm">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Active
                  </span>
                </td>
                <td className="px-4 py-2 text-sm">
                  <div className="flex gap-2">
                    <button className="p-1 text-blue-600 hover:text-blue-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button className="p-1 text-red-600 hover:text-red-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <h2 className="text-lg font-semibold">Add new promo</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Promo code
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="type"
                      value="flat"
                      className="mr-2"
                      defaultChecked
                    />
                    Flat
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="type"
                      value="percentage"
                      className="mr-2"
                    />
                    Percentage
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Value
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Percentage max
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="status"
                      value="active"
                      className="mr-2"
                      defaultChecked
                    />
                    Active
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="status"
                      value="inactive"
                      className="mr-2"
                    />
                    Inactive
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Validity
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="date"
                    className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Limit per user
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="limit"
                      value="count"
                      className="mr-2"
                      defaultChecked
                    />
                    Count
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="limit"
                      value="budget"
                      className="mr-2"
                    />
                    Budget
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Count/Budget
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Min cart value
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-20" />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Promos;
