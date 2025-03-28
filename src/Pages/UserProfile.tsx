import { useState } from "react";
import { Search, Filter, Calendar, ChevronDown } from "lucide-react";

interface UserDetails {
  title: string;
  name: string;
  email: string;
  mobile: string;
}

interface RideFilters {
  dates: string;
  status: string;
}

const UserProfile = () => {
  const [activeMainTab, setActiveMainTab] = useState("rides");
  const [activeSettingTab, setActiveSettingTab] = useState("contact");
  const [] = useState<RideFilters>({
    dates: "",
    status: "ALL",
  });
  const [passwordFields, setPasswordFields] = useState({
    password1: "",
    password2: "",
  });

  const userDetails: UserDetails = {
    title: "Mr.",
    name: "John Doe",
    email: "john@example.com",
    mobile: "+1 234 567 8900",
  };

  const renderRidesContent = () => (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Rides:</h2>

        {/* Tabs */}
        <div className="border-b mb-4">
          <div className="flex gap-4">
            <button className="border-b-2 border-blue-600 pb-2 text-blue-600">
              upcoming
            </button>
            <button className="border-b-2 border-transparent pb-2 text-gray-500">
              upcoming
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-4">0 bookings</div>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search by booking id, name etc"
            className="w-full p-2 pr-16 border rounded-md"
          />
          <div className="absolute right-0 top-0 h-full flex items-center gap-2 pr-2">
            <button>
              <Search className="w-5 h-5 text-gray-500" />
            </button>
            <button>
              <Filter className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="border rounded-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Filter rides</h3>
            <button className="text-gray-600 underline">Reset</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <button className="flex items-center justify-between p-2 bg-blue-50 rounded">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Start and end dates</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>

            <button className="flex items-center justify-between p-2 bg-blue-50 rounded">
              <span>ALL</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="flex justify-end gap-4">
            <button className="px-4 py-2 border rounded">Cancel</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Continue
            </button>
          </div>
        </div>

        <div className="text-center py-12">
          <h3 className="font-medium mb-2">No Result</h3>
          <p className="text-gray-600">
            You have no upcoming rides matching that criteria. Try searching for
            something else or changing the filters.
          </p>
        </div>
      </div>
    </div>
  );

  const renderSettingsContent = () => (
    <div className="max-w-4xl mx-auto">
      <div className="flex">
        <div className="w-48 border rounded-t-lg overflow-hidden">
          <button
            onClick={() => setActiveSettingTab("contact")}
            className={`w-full p-3 text-left ${
              activeSettingTab === "contact"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-50"
            }`}
          >
            Contact details
          </button>
          <button
            onClick={() => setActiveSettingTab("password")}
            className={`w-full p-3 text-left border-t ${
              activeSettingTab === "password"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-50"
            }`}
          >
            Change password
          </button>
          <button
            onClick={() => setActiveSettingTab("payment")}
            className={`w-full p-3 text-left border-t ${
              activeSettingTab === "payment"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-50"
            }`}
          >
            Payment
          </button>
        </div>

        <div className="flex-1 px-8">
          {activeSettingTab === "contact" && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Contact details</h2>
              <div className="space-y-4 max-w-lg">
                <div className="flex justify-between items-start">
                  <div className="space-y-4 flex-1">
                    <div>
                      <label className="block mb-1">Title:</label>
                      <div className="text-gray-700">{userDetails.title}</div>
                    </div>
                    <div>
                      <label className="block mb-1">Name:</label>
                      <div className="text-gray-700">{userDetails.name}</div>
                    </div>
                    <div>
                      <label className="block mb-1">Email:</label>
                      <div className="text-gray-700">{userDetails.email}</div>
                    </div>
                    <div>
                      <label className="block mb-1">Mobile:</label>
                      <div className="text-gray-700">{userDetails.mobile}</div>
                    </div>
                  </div>
                  <button className="text-blue-600 underline">Change</button>
                </div>
              </div>
            </div>
          )}

          {activeSettingTab === "password" && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Change password</h2>
              <div className="max-w-lg">
                <p className="mb-4">Please set your new password below:</p>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1">Set new password:</label>
                    <div className="flex gap-4 items-start">
                      <input
                        type="password"
                        className="border p-2 rounded w-48"
                        value={passwordFields.password1}
                        onChange={(e) =>
                          setPasswordFields((prev) => ({
                            ...prev,
                            password1: e.target.value,
                          }))
                        }
                      />
                      <input
                        type="password"
                        className="border p-2 rounded w-48"
                        value={passwordFields.password2}
                        onChange={(e) =>
                          setPasswordFields((prev) => ({
                            ...prev,
                            password2: e.target.value,
                          }))
                        }
                      />
                      <button className="bg-blue-600 text-white px-4 py-2 rounded">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSettingTab === "payment" && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Payment</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Add new card
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex gap-6 border-b">
          <button
            onClick={() => setActiveMainTab("rides")}
            className={`pb-2 px-2 ${
              activeMainTab === "rides"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600"
            }`}
          >
            Rides
          </button>
          <button
            onClick={() => setActiveMainTab("settings")}
            className={`pb-2 px-2 ${
              activeMainTab === "settings"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600"
            }`}
          >
            Settings
          </button>
        </div>
      </div>

      {activeMainTab === "rides"
        ? renderRidesContent()
        : renderSettingsContent()}
    </div>
  );
};

export default UserProfile;
