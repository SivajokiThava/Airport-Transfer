interface RideCardProps {
  time: string;
  id: string;
  status: "Awaiting Feedback" | "Cancelled" | "Completed";
  amount?: string;
}

interface CurrentRideData {
  date: string;
  time: string;
  amount: string;
  customerName: string;
  passengers: number;
  carType: string;
  pickupAddress: string;
  dropOffAddress: string;
  meetAndGreet: boolean;
  meetAndGreetMessage: string;
  customerPhone: string;
  customerNotes: string;
  operatorId?: string;
  assignedDate?: string;
  operatorFare?: string;
  operatorStatus?: string;
}

// Components
import { useState } from "react";
import {
  Filter,
  User,
  Car,
  MapPin,
  Phone,
  MessageSquare,
  Search,
  Clock,
  ChevronDown,
  X,
  ChevronUp,
  Mail,
} from "lucide-react";
import Button from "../../Components/Button";

const RideCard: React.FC<RideCardProps> = ({ time, id, status, amount }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div className="border rounded-lg shadow-sm mb-4 bg-white">
      {/* Header Section */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Clock className="w-5 h-5 text-gray-500" />
          <div>
            <span className="text-gray-600">{time}</span>
            <div className="text-sm text-gray-500">Ride Id: {id}</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div
              className={`text-sm ${
                status === "Cancelled"
                  ? "text-red-500"
                  : status === "Completed"
                  ? "text-green-500"
                  : "text-orange-400"
              }`}
            >
              {status}
            </div>
            {amount && <div className="font-semibold">£{amount}</div>}
          </div>
          <button
            className="flex items-center text-gray-600"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Less Details" : "More Details"}
            {showDetails ? (
              <ChevronUp className="w-4 h-4 ml-1" />
            ) : (
              <ChevronDown className="w-4 h-4 ml-1" />
            )}
          </button>
        </div>
      </div>

      {/* Details Section */}
      {showDetails && (
        <div className="border-t p-4">
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-4">Details</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="min-w-[24px] h-6 relative">
                  <div className="w-3 h-3 bg-black rounded-full absolute top-1 left-1"></div>
                  <div className="w-[2px] h-full bg-gray-300 absolute left-[7px] top-3"></div>
                </div>
                <div className="ml-2">
                  <div className="font-semibold">Pickup</div>
                  <div className="text-gray-600">pickup address</div>
                </div>
                <div className="ml-auto bg-gray-200 px-2 py-1 rounded text-sm">
                  4 Miles
                </div>
              </div>
              <div className="flex items-start">
                <div className="min-w-[24px]">
                  <div className="w-3 h-3 border-2 border-black rounded-full mt-1 ml-1"></div>
                </div>
                <div className="ml-2">
                  <div className="font-semibold">Drop-Off</div>
                  <div className="text-gray-600">Drop-off address</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">More Details</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-5 h-5 flex items-center">👁️</div>
                    <span>Meet and Greet</span>
                  </div>
                  <div className="text-blue-500 ml-7">YES</div>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Mail className="w-5 h-5" />
                    <span>Message</span>
                  </div>
                  <div className="ml-7">Welcome Customer</div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Phone className="w-5 h-5" />
                    <span>Customer Phone</span>
                  </div>
                  <div className="ml-7">+94 9090909090</div>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <MessageSquare className="w-5 h-5" />
                    <span>Customer Notes</span>
                  </div>
                  <div className="ml-7">Need baby seat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Bookings: React.FC = () => {
  type TabType = "Rides" | "Past Rides";
  type TimeFilterType = "Today" | "Tomorrow" | "Week" | "Month" | "All";

  const [activeTab, setActiveTab] = useState<TabType>("Rides");
  const [activeTimeFilter, setActiveTimeFilter] =
    useState<TimeFilterType>("Today");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);
  const [isAssignDriverModalOpen, setIsAssignDriverModalOpen] =
    useState<boolean>(false);
  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState<boolean>(false);
  const [drivers] = useState<string[]>(["Driver 1", "Driver 2", "Driver 3"]);
  const [] = useState<CurrentRideData>({
    date: "24-May-2022",
    time: "07:00",
    amount: "40.67",
    customerName: "John",
    passengers: 2,
    carType: "Sedan",
    pickupAddress: "pickup address",
    dropOffAddress: "Drop-off address",
    meetAndGreet: true,
    meetAndGreetMessage: "Welcome Customer",
    customerPhone: "+94 9090909090",
    customerNotes: "Need baby seat",
  });

  const timeFilters: TimeFilterType[] = [
    "Today",
    "Tomorrow",
    "Week",
    "Month",
    "All",
  ];

  const pastRides: RideCardProps[] = [
    { time: "10:00", id: "001", status: "Awaiting Feedback", amount: "50" },
    { time: "10:00", id: "009", status: "Cancelled" },
    { time: "10:00", id: "008", status: "Awaiting Feedback", amount: "25" },
    { time: "10:00", id: "004", status: "Cancelled", amount: "55" },
  ];

  const handleFilterClick = (): void => setIsFilterModalOpen(true);
  const handleCloseFilterModal = (): void => setIsFilterModalOpen(false);
  const handleAssignDriverClick = (): void => setIsAssignDriverModalOpen(true);
  const handleCloseAssignDriverModal = (): void =>
    setIsAssignDriverModalOpen(false);
  const handleDeclineClick = (): void => setIsDeclineModalOpen(true);
  const handleCloseDeclineModal = (): void => setIsDeclineModalOpen(false);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Bookings</h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-between items-center mb-6">
        <div className="space-x-2">
          <button
            className={`px-4 py-2 rounded transition-colors font-bold ${
              activeTab === "Rides"
                ? "bg-gray-500 text-gray-800"
                : "bg-gray-100 text-gray-600 hover:bg-gray-150"
            }`}
            onClick={() => setActiveTab("Rides")}
          >
            Rides
          </button>
          <button
            className={`px-4 py-2 rounded transition-colors font-bold ${
              activeTab === "Past Rides"
                ? "bg-gray-500 text-gray-800"
                : "bg-gray-100 text-gray-600 hover:bg-gray-150"
            }`}
            onClick={() => setActiveTab("Past Rides")}
          >
            Past Rides
          </button>
        </div>

        {/* Time Filters */}
        <div className="flex space-x-4 items-center">
          {timeFilters.map((filter) => (
            <button
              key={filter}
              className={`px-3 py-1 font-bold ${
                activeTimeFilter === filter
                  ? "text-[#1e40af] border-b-2 border-[#1e40af]"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTimeFilter(filter)}
            >
              {filter}
            </button>
          ))}
          <button
            className="flex items-center px-3 py-1 border rounded"
            onClick={handleFilterClick}
          >
            <Filter className="w-4 h-4 mr-1" />
            Filter
          </button>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === "Past Rides" ? (
        <div className="space-y-4">
          {pastRides.map((ride, index) => (
            <RideCard
              key={index}
              time={ride.time}
              id={ride.id}
              status={ride.status}
              amount={ride.amount}
            />
          ))}
        </div>
      ) : (
        // Current Rides View
        <div>
          <div className="flex items-center space-x-4 mb-6">
            <span className="font-bold">100 Rides</span>
            <span className="bg-gray-800 text-white px-3 py-1 rounded">
              Today
            </span>
            <span>24-May-2022</span>
          </div>

          <div className="border rounded-lg shadow-sm">
            <div className="p-4 border-b grid grid-cols-3 items-start">
              <div>
                <div className="text-lg">24-May-2022</div>
                <div className="font-bold text-xl">07:00</div>
                <div className="text-lg">£40.67</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>John</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>2</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="w-5 h-5" />
                  <span>Sedan</span>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span className="font-semibold">Pickup</span>
                    </div>
                    <div className="ml-7 text-gray-600">pickup address</div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span className="font-semibold">Drop-Off</span>
                    </div>
                    <div className="ml-7 text-gray-600">Drop-off address</div>
                  </div>
                </div>
                <Button onClick={handleAssignDriverClick}>Assign Driver</Button>
              </div>
            </div>

            <div className="w-full">
              <h4 className="font-bold text-lg mb-6">More Details</h4>

              <div className="grid grid-cols-3 gap-8">
                {/* Meet & Greet Section */}
                <div className="space-y-4">
                  <div className="mb-4">
                    <div className="text-base font-medium mb-1">
                      Meet and Greet
                    </div>
                    <div className="text-base">YES</div>
                  </div>
                  <div>
                    <div className="text-base font-medium mb-1">
                      Meet and Greet Message
                    </div>
                    <div className="text-base">Welcome Customer</div>
                  </div>
                </div>

                {/* Customer Info Section */}
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <Phone className="w-5 h-5" />
                      <span className="text-base font-medium">
                        Customer Phone
                      </span>
                    </div>
                    <div className="text-base ml-7">+94 9090909090</div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <MessageSquare className="w-5 h-5" />
                      <span className="text-base font-medium">
                        Customer Notes
                      </span>
                    </div>
                    <div className="text-base ml-7">Need baby seat</div>
                  </div>
                </div>

                {/* Operator Section */}
                <div className="space-y-4">
                  <h3 className="font-bold text-lg mb-6">Operator</h3>
                  <div className="space-y-3">
                    <div className="text-base">
                      <span className="text-gray-600">Operator Id:</span>
                    </div>
                    <div className="text-base">
                      <span className="text-gray-600">Assigned date:</span>
                    </div>
                    <div className="text-base">
                      <span className="text-gray-600">Operator Fare:</span>
                    </div>
                    <div className="text-base">
                      <span className="text-gray-600">Status:</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button>Remove Job</Button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-400 border border-gray-300 rounded shadow-sm">
                      Assign
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t flex justify-between items-center">
              <Button onClick={handleDeclineClick}>Decline Booking</Button>
              <Button>Less Details</Button>
            </div>
          </div>
        </div>
      )}

      {/* Filter Modal */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Filter</h2>
              <button
                onClick={handleCloseFilterModal}
                className="text-gray-600"
              >
                &times;
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Booking ID
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  By Location
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  By Booking Status
                </label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                  <option>Status 1</option>
                  <option>Status 2</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <Button onClick={handleCloseFilterModal}>Reset</Button>
                <Button>Apply</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Assign Driver Modal */}
      {isAssignDriverModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Assign Driver</h2>
              <button
                onClick={handleCloseAssignDriverModal}
                className="text-gray-600"
              >
                &times;
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search drivers..."
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="space-y-2">
                {drivers.map((driver, index) => (
                  <div key={index} className="p-2 border rounded-md">
                    {driver}
                  </div>
                ))}
              </div>
              <div className="flex justify-end space-x-2">
                <Button onClick={handleCloseAssignDriverModal}>Cancel</Button>
                <Button>Assign</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decline Booking Modal */}
      {isDeclineModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Decline Booking?</h2>
              <button
                onClick={handleCloseDeclineModal}
                className="text-gray-600 hover:text-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Decline Booking will have negative ratings on your operator
              account
            </p>
            <div className="mb-4">
              <select className="w-full border border-gray-300 rounded p-2">
                <option value="">Select Reason</option>
                <option value="unavailable">Driver Unavailable</option>
                <option value="distance">Too Far Distance</option>
                <option value="pricing">Pricing Issue</option>
              </select>
            </div>
            <p className="text-sm mb-4">** Charges applicable</p>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                onClick={handleCloseDeclineModal}
              >
                Go Back
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleCloseDeclineModal}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
