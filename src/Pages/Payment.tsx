import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Lock } from "lucide-react";
import Button from "../Components/Button";
import BookingProgress from "./BookingProgress ";

const Payment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";
  const flightNo = searchParams.get("flightNo") || "";

  const [formData, setFormData] = useState({
    cardHolderName: "",
    cardNumber: 0,
    expirationMonth: "",
    expirationYear: "",
    cvv: 0,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const formattedValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Payment details:", formData);
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

      {/* Payment Form Section */}
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Card holder name
            </label>
            <input
              type="text"
              name="cardHolderName"
              value={formData.cardHolderName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Card number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              maxLength={19}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="XXXX XXXX XXXX XXXX"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Expiration date
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  name="expirationMonth"
                  value={formData.expirationMonth}
                  onChange={handleInputChange}
                  placeholder="MM"
                  maxLength={2}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="text"
                  name="expirationYear"
                  value={formData.expirationYear}
                  onChange={handleInputChange}
                  placeholder="YY"
                  maxLength={2}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                maxLength={3}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <Button type="submit" className="w-full px-4 py-2">
              Pay 1100 Rs
            </Button>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" />
              Secure payment
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
