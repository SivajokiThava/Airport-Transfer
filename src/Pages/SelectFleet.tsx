import { Clock, Users, Gift } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../Components/Button";
import BookingProgress from "./BookingProgress ";

const SelectFleet = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";
  const flightNo = searchParams.get("flightNo") || "";

  const handleSelect = () => {
    const currentParams = new URLSearchParams(searchParams);
    navigate({
      pathname: "/payment",
      search: currentParams.toString(),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <BookingProgress />
      {/* Booking Summary Section */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-lg font-semibold">Booking summary</h2>
          <button className="text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-between items-center text-sm">
          <div className="flex flex-col">
            <span className="text-gray-600">From:</span>
            <div className="mt-1 border-b border-gray-400 w-32">{from}</div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600">To:</span>
            <div className="mt-1 border-b border-gray-400 w-32">{to}</div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600">Date and time</span>
            <div className="mt-1 border-b border-gray-400 w-32">{`${date} ${time}`}</div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600">Flight no:</span>
            <div className="mt-1 border-b border-gray-400 w-24">{flightNo}</div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600">Passenger</span>
            <div className="mt-1 border-b border-gray-400 w-20">-</div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600">Luggage</span>
            <div className="mt-1 border-b border-gray-400 w-20">-</div>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          **Free cancellation up to 60 min before pickup
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4">
          <div>
            <h3 className="text-xl font-semibold">Sedan</h3>
            <p className="text-gray-600">Toyota Axio</p>
          </div>
          <div className="flex items-center gap-8 mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>Max 3</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 2a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm9-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 2a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zM19 9.5V3h-9v11h-2V3H5v11H3V3H1v15h2v3h18v-3h2V9.5h-4z" />
              </svg>
              <span>max 2</span>
            </div>
          </div>
        </div>

        <div className="py-4 space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-600" />
            <span>Free 60 minutes wait time</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
              <path d="M13 7h-2v6h6v-2h-4z" />
            </svg>
            <span>Includes Meet & Greet</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
              <path d="m9 17 8-8-1.414-1.414L9 14.172l-2.293-2.293L5.293 13.293z" />
            </svg>
            <span>Free cancellation up until 1 hour before pickup</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-gray-600" />
            <span>Complimentary bottled water</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-4 pt-4 border-t">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-2xl font-bold text-rose-400">1100 Rs</p>
          </div>
          <Button onClick={handleSelect}>Select</Button>
        </div>
      </div>
    </div>
  );
};

export default SelectFleet;
