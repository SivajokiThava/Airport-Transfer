import { useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import BookingProgress from "./BookingProgress ";

const Confirm = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Get booking details from URL params
  const bookingDetails = {
    from: searchParams.get("from") || "",
    to: searchParams.get("to") || "",
    date: searchParams.get("date") || "",
    time: searchParams.get("time") || "",
    bookingId: `#${Math.floor(100000 + Math.random() * 900000)}`, // Generate random 6-digit booking ID
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <BookingProgress />
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">
            Yay! Your Booking is Confirmed
          </h1>
          <p className="text-gray-600">
            Booking ID: {bookingDetails.bookingId}
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Trip Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">From</p>
                <p className="font-medium">{bookingDetails.from}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">To</p>
                <p className="font-medium">{bookingDetails.to}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Travel date and time</p>
                <p className="font-medium">
                  {new Date(bookingDetails.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  at {bookingDetails.time}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Vehicle type</p>
                <p className="font-medium">Standard Sedan</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Passenger</p>
                <p className="font-medium">1-4 passengers</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Fare details</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Base fare</span>
                <span className="font-medium">$49.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Service fee</span>
                <span className="font-medium">$5.00</span>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$54.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          Thanks for booking, have a safe ride
        </div>
      </div>
    </div>
  );
};

export default Confirm;
