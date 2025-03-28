import { useState } from "react";
import { Phone, Mail, Car } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Tracking = () => {
  const [activeTab, setActiveTab] = useState("onJob");

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 40.7128,
    lng: -74.006,
  };

  const driverLocation = {
    lat: 40.7148,
    lng: -74.0068,
  };

  const destinationLocation = {
    lat: 40.7108,
    lng: -74.003,
  };

  return (
    <div className="flex gap-4 p-4 h-[calc(100vh-80px)]">
      <div className="w-80 bg-white rounded-lg shadow-sm">
        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-3 text-center ${
              activeTab === "onJob"
                ? "border-b-2 border-blue-800 text-blue-800 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("onJob")}
          >
            On job
          </button>
          <button
            className={`flex-1 py-3 text-center ${
              activeTab === "upcoming"
                ? "border-b-2 border-blue-800 text-blue-800 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming
          </button>
        </div>

        {/* Driver Details */}
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Trip Id</span>
              <span className="font-medium">#12345</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Vehicle Type</span>
              <div className="flex items-center gap-1">
                <Car className="h-4 w-4" />
                <span className="font-medium">Sedan</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-gray-600 mb-3">Driver Details</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <p className="font-medium">John Doe</p>
                <div className="flex gap-3">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Phone className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Mail className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={14}
          >
            {/* Driver's current location marker */}
            <Marker
              position={driverLocation}
              icon={{
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              }}
            />

            {/* Destination marker */}
            <Marker
              position={destinationLocation}
              icon={{
                url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
              }}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Tracking;
