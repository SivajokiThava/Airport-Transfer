import React, { useState } from "react";
import { X, Edit } from "lucide-react";
import Button from "../../Components/Button";

interface Driver {
  id: number;
  firstName: string;
  lastName: string;
  status: "Activated" | "Not Activated";
  contact: string;
  location: string;
}

interface DriverModalProps {
  open: boolean;
  onClose: () => void;
  mode: "add" | "edit";
  driverData?: Driver;
}

const DriverModal: React.FC<DriverModalProps> = ({
  open,
  onClose,
  mode,
  driverData,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">
              {mode === "add" ? "Add a new driver" : "Edit driver details"}
            </h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-4 space-y-4">
          <input
            placeholder="First name"
            defaultValue={driverData?.firstName}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            placeholder="Last name"
            defaultValue={driverData?.lastName}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue={driverData?.location || ""}
          >
            <option value="" disabled>
              Location
            </option>
            <option value="matara">Matara</option>
            <option value="colombo">Colombo</option>
            <option value="galle">Galle</option>
          </select>

          <div className="flex">
            <div className="bg-gray-100 p-2 border rounded-l">+94</div>
            <input
              placeholder="Contact No"
              defaultValue={driverData?.contact.replace("+94 ", "")}
              className="flex-1 p-2 border border-l-0 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="pt-4">
            <Button className="w-full">
              {mode === "add" ? "Add Driver" : "Save Changes"}
            </Button>
          </div>

          <p className="text-sm text-gray-500 text-center">
            ** {mode === "add" ? "Activation" : "Updation"} link will be sent to
            the driver
          </p>
        </div>
      </div>
    </div>
  );
};

const Drivers: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: "add" | "edit";
    driverData?: Driver;
  }>({
    isOpen: false,
    mode: "add",
  });

  const drivers: Driver[] = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      status: "Activated",
      contact: "+94 0711234567",
      location: "Matara",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      status: "Not Activated",
      contact: "+94 0711234567",
      location: "Matara",
    },
  ];

  const handleEdit = (driver: Driver) => {
    setModalState({
      isOpen: true,
      mode: "edit",
      driverData: driver,
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold">Drivers</h1>
          <p className="text-sm text-gray-500">
            (Add drivers to the bookings.)
          </p>
        </div>
        <Button onClick={() => setModalState({ isOpen: true, mode: "add" })}>
          Add New Driver
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-gray-50">
              <tr className="bg-blue-600/20">
                <th className="text-left p-4">Driver</th>
                <th className="text-left p-4">Contact NO</th>
                <th className="text-left p-4">Location</th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver) => (
                <tr key={driver.id} className="border-b">
                  <td className="p-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span>
                          {driver.firstName} {driver.lastName}
                        </span>
                        <span
                          className={`px-2 py-1 text-sm rounded ${
                            driver.status === "Activated"
                              ? "bg-green-100 text-green-800"
                              : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {driver.status}
                        </span>
                      </div>
                      <a href="#" className="text-sm text-blue-600">
                        Send activation Link
                      </a>
                    </div>
                  </td>
                  <td className="p-4">{driver.contact}</td>
                  <td className="p-4">{driver.location}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleEdit(driver)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Edit className="h-5 w-5 text-gray-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <DriverModal
          open={modalState.isOpen}
          onClose={() => setModalState({ isOpen: false, mode: "add" })}
          mode={modalState.mode}
          driverData={modalState.driverData}
        />
      </div>
    </div>
  );
};

export default Drivers;
