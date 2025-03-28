import Button from "../../../Components/Button";

const DiscountRule = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-2 sm:p-4">
      <div className="bg-white rounded-lg">
        <div className="border rounded-lg p-3 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-3 sm:space-y-0">
            <h2 className="text-xl font-semibold">New Discount</h2>
            <div className="space-x-2">
              <Button variant="outline" size="sm">
                New
              </Button>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
          </div>

          <form className="space-y-6">
            {/* Discount Information Section */}
            <div>
              <h3 className="text-lg font-medium mb-4 border-b pb-2">
                Discount Information
              </h3>
              <div className="space-y-4">
                {/* Booking Source Row */}
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                  <label className="w-full sm:w-32">Booking Source</label>
                  <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:space-x-6 w-full sm:w-auto">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="bookingSource"
                        className="mr-2"
                      />
                      All
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" name="web" className="mr-2" />
                      Web
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" name="cp" className="mr-2" />
                      CP
                    </label>
                    <label className="inline-flex items-center">
                      <input type="checkbox" name="app" className="mr-2" />
                      App
                    </label>
                    <span className="sm:ml-6">Agent</span>
                    <label className="inline-flex items-center">
                      <input type="radio" name="agent" className="mr-2" />
                      All
                    </label>
                    <select className="border rounded px-2 py-1 w-full sm:w-auto">
                      <option>Agent List</option>
                    </select>
                  </div>
                </div>

                {/* Middle Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1">Discount Name</label>
                      <input
                        type="text"
                        className="w-full border rounded p-2"
                      />
                    </div>
                    <div>
                      <label className="block mb-1">Description</label>
                      <textarea
                        className="w-full border rounded p-2"
                        rows={4}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1">Valid From</label>
                        <input
                          type="text"
                          className="w-full border rounded p-2"
                        />
                      </div>
                      <div>
                        <label className="block mb-1">Valid To</label>
                        <input
                          type="text"
                          className="w-full border rounded p-2"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1">Discount Type</label>
                      <select className="w-full border rounded p-2">
                        <option>Trip</option>
                      </select>
                    </div>
                  </div>

                  {/* Middle Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1">Booked By</label>
                      <select className="w-full border rounded p-2">
                        <option>Customer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1">Discount</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          className="border rounded p-2 flex-1 sm:w-20"
                        />
                        <select className="border rounded p-2 flex-1">
                          <option>Percent</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <label>Requires Coupon Code</label>
                    </div>
                    <select className="w-full border rounded p-2">
                      <option>Coupon</option>
                    </select>
                    <div>
                      <label className="block mb-1">Discount Value</label>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          placeholder="Min"
                          type="text"
                          className="w-full border rounded p-2"
                        />
                        <input
                          placeholder="Max"
                          type="text"
                          className="w-full border rounded p-2"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1">Discount Status</label>
                      <div className="space-x-4">
                        <label className="inline-flex items-center">
                          <input type="radio" name="status" className="mr-2" />
                          Active
                        </label>
                        <label className="inline-flex items-center">
                          <input type="radio" name="status" className="mr-2" />
                          Inactive
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2">Validity Period</label>
                      <div className="space-y-2">
                        <div>
                          <label className="inline-flex items-center mb-2">
                            <input type="checkbox" className="mr-2" />
                            Based on Booking Date
                          </label>
                          <div className="space-y-2">
                            <input
                              type="text"
                              placeholder="Booking Date From"
                              className="w-full border rounded p-2"
                            />
                            <input
                              type="text"
                              placeholder="Booking Date To"
                              className="w-full border rounded p-2"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="inline-flex items-center mb-2">
                            <input type="checkbox" className="mr-2" />
                            Based on Travel Date
                          </label>
                          <div className="space-y-2">
                            <input
                              type="text"
                              placeholder="Travel Date From"
                              className="w-full border rounded p-2"
                            />
                            <input
                              type="text"
                              placeholder="Travel Date To"
                              className="w-full border rounded p-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1">Applicable On</label>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="applicableOn"
                            className="mr-2"
                          />
                          Booking Date
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="applicableOn"
                            className="mr-2"
                          />
                          Travel Date
                        </label>
                      </div>
                      <select className="w-full border rounded p-2">
                        <option>Sunday</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Limits Section */}
            <div>
              <h3 className="text-lg font-medium mb-4 border-b pb-2">Limits</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1">Discount Limit</label>
                    <div className="flex flex-wrap gap-2 items-center">
                      <select className="border rounded p-2 flex-1 sm:flex-none">
                        <option>Per User</option>
                      </select>
                      <input
                        placeholder="Min"
                        type="text"
                        className="border rounded p-2 w-16"
                      />
                      <input
                        placeholder="Max"
                        type="text"
                        className="border rounded p-2 w-16"
                      />
                      <span className="text-gray-500">Unlimited</span>
                      <button className="px-3 py-1 bg-gray-100 rounded">
                        Off
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1">Country</label>
                      <select className="w-full border rounded p-2">
                        <option>United Kingdom</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1">City</label>
                      <select className="w-full border rounded p-2">
                        <option>All</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1">Budget</label>
                      <input
                        placeholder="Discount Budget"
                        type="text"
                        className="w-full border rounded p-2"
                      />
                    </div>
                    <div>
                      <label className="block mb-1">Currency</label>
                      <select className="w-full border rounded p-2">
                        <option>USD</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block mb-1">Discount Fare For</label>
                  <div className="space-y-2 sm:space-y-0 sm:space-x-4">
                    <label className="inline-flex items-center">
                      <input type="radio" name="faretype" className="mr-2" />
                      Base fare
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="faretype" className="mr-2" />
                      Trip fare
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Applicability Section */}
            <div>
              <h3 className="text-lg font-medium mb-4 border-b pb-2">
                Applicability
              </h3>
              <div className="space-y-4">
                <label className="block mb-1">Vehicle Type</label>
                <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:space-x-6">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="mr-2" />4 Seater
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="mr-2" />6 Seater
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="mr-2" />8 Seater
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Luxury
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="mr-2" />
                    All
                  </label>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <Button>Create</Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DiscountRule;
