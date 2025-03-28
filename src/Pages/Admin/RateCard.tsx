import { ReactNode, useState } from "react";
import Button from "../../Components/Button";
import AreaOperationModal from "../../Modals/AreaOperationModal";
import DistanceRatesModal from "../../Modals/DistanceRatesModal";
import HourlyRuleModal from "../../Modals/HourlyRuleModal";
import DailyRuleModal from "../../Modals/DailyRuleModal";
import AirportPickupFeeModal from "../../Modals/AirportPickupFeeModal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
}

interface AirportManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

const AirportManagementModal: React.FC<AirportManagementModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-5xl">
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Airport coverage area</h2>
          <p className="text-gray-600">
            (Add airports you serve for your chosen location)
          </p>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="text-lg mb-2">
            Do you serve any airports at this location?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            (Find an airport by entering the IATA airport code, like 'CMB' for
            Bandaranaike International Airport)
          </p>

          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter IATA Code"
                className="border p-2 rounded flex-grow"
              />
              <button className="px-4 py-2 border rounded hover:bg-gray-50">
                Add
              </button>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p>
                **This tool is unavailable right now. Please contact your
                account manager to make any changes to the airports you serve.
              </p>
              <p>
                **Please note that you must not add any airports that you do not
                currently serve as part of your agreement with airports1.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={onClose}>Submit</Button>
        </div>
      </div>
    </Modal>
  );
};

const RateCard: React.FC = () => {
  const [isAirportModalOpen, setIsAirportModalOpen] = useState(false);
  const [isAreaModalOpen, setIsAreaModalOpen] = useState(false);
  const [isDistanceRatesModal, setIsDistanceRatesModalOpen] = useState(false);
  const [isHourlyRuleModal, setIsHourlyRuleModalOpen] = useState(false);
  const [isDailyRuleModal, setIsDailyRuleModalOpen] = useState(false);
  const [isAirportPickupFeeModal, setIsAirportPickupFeeModalOpen] =
    useState(false);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="mb-4">
        <p className="text-gray-600">
          Ratecard-&gt; <span className="text-gray-900">Matara</span>
        </p>
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Matara</h1>
        <p className="text-gray-600">
          Manage your rates, vehicles, routes and general information for this
          location
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-6">
          {/* Airport Card */}
          <div className="border rounded-lg p-4 bg-blue-100">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <h2 className="font-semibold">Airport</h2>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Manage the airports you cover for fixed route rates
            </p>
            <Button onClick={() => setIsAirportModalOpen(true)}>Set Now</Button>
          </div>

          {/* Area of Operation Card */}
          <div className="border rounded-lg p-4 bg-blue-100">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h2 className="font-semibold">Area of operation</h2>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
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
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-2 mb-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Lead time</span>
                <span>12 Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Latitude</span>
                <span>12.254668</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Longitude</span>
                <span>-45.2531</span>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="text-red-600 hover:text-red-700 text-sm"
                onClick={() => setIsAreaModalOpen(true)}
              >
                Add more
              </button>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="border rounded-lg p-4 bg-blue-100">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h2 className="font-semibold">Contact details</h2>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
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
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Contact information for your dispatch office
            </p>
            <div className="space-y-2 mb-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Contact name</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Address</span>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="text-red-600 hover:text-red-700 text-sm">
                Add more
              </button>
            </div>
          </div>
        </div>

        {/* Distance rate card */}
        <div className="border rounded-lg p-4 bg-blue-100">
          <h2 className="font-semibold mb-4">Ratecard</h2>
          <button
            onClick={() => setIsDistanceRatesModalOpen(true)}
            className="text-red-600 mb-4 underline hover:text-red-800 "
          >
            You have 3 distance rates
          </button>
          <DistanceRatesModal
            isOpen={isDistanceRatesModal}
            onClose={() => setIsDistanceRatesModalOpen(false)}
          />
          <div className="border-b border-black mb-4"></div>

          {/* Hourly rate rules */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="font-medium">Set hourly rate</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Increase rates for a set amount of time to earn more
            </p>
            <Button onClick={() => setIsHourlyRuleModalOpen(true)}>
              Set now
            </Button>
            <HourlyRuleModal
              isOpen={isHourlyRuleModal}
              onClose={() => setIsHourlyRuleModalOpen(false)}
            />
          </div>
          <div className="border-b border-black mb-4"></div>

          {/*Daily rate rules */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h3 className="font-medium">Daily rate rules</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Increase your rates by a percentage during peak
            </p>
            <Button onClick={() => setIsDailyRuleModalOpen(true)}>
              Set now
            </Button>
            <HourlyRuleModal
              isOpen={isDailyRuleModal}
              onClose={() => setIsDailyRuleModalOpen(false)}
            />
          </div>
          <div className="border-b border-black mb-4"></div>

          {/* Airport pickup */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="font-medium">Airport pickup fees</h3>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
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
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Fee for picking up passengers for rides with
            </p>
            <div className="space-y-2 mb-3">
              <div className="flex justify-between">
                <span>Sedan</span>
                <span>20 GBP</span>
              </div>
              <div className="flex justify-between">
                <span>SUV</span>
                <span>30 GBP</span>
              </div>
              <div className="flex justify-between">
                <span>Auto</span>
                <span>12 GBP</span>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="text-red-600 hover:text-red-700 text-sm"
                onClick={() => setIsAirportPickupFeeModalOpen(true)}
              >
                Add more
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Vehicle Types */}
        <div className="space-y-6">
          <div className="border rounded-lg p-4 bg-blue-100">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
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
                    d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
                <h2 className="font-semibold">Sedan</h2>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
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
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Toyota etios or similar
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Lead time</span>
                <span>12 Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max passengers</span>
                <span>3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max suitcases</span>
                <span>2</span>
              </div>
            </div>
          </div>

          {/* SUV Card */}
          <div className="border rounded-lg p-4 bg-blue-100">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
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
                    d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
                <h2 className="font-semibold">SUV</h2>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
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
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Toyota Fortuner or similar
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Lead time</span>
                <span>12 Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max passengers</span>
                <span>6</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max suitcases</span>
                <span>4</span>
              </div>
            </div>
          </div>

          {/* Auto Card */}
          <div className="border rounded-lg p-4 bg-blue-100">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
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
                    d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
                <h2 className="font-semibold">Auto</h2>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
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
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">Tata Nano or similar</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Lead time</span>
                <span>12 Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max passengers</span>
                <span>2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max suitcases</span>
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AirportManagementModal
        isOpen={isAirportModalOpen}
        onClose={() => setIsAirportModalOpen(false)}
      />
      <AreaOperationModal
        isOpen={isAreaModalOpen}
        onClose={() => setIsAreaModalOpen(false)}
      />
      <DistanceRatesModal
        isOpen={isDistanceRatesModal}
        onClose={() => setIsDistanceRatesModalOpen(false)}
      />
      <HourlyRuleModal
        isOpen={isHourlyRuleModal}
        onClose={() => setIsHourlyRuleModalOpen(false)}
      />
      <DailyRuleModal
        isOpen={isDailyRuleModal}
        onClose={() => setIsDailyRuleModalOpen(false)}
      />
      <AirportPickupFeeModal
        isOpen={isAirportPickupFeeModal}
        onClose={() => setIsAirportPickupFeeModalOpen(false)}
      />
    </div>
  );
};

export default RateCard;
