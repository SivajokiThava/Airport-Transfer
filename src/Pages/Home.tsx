import { useState } from "react";
import { Car, Clock, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [bookingType, setBookingType] = useState("one-way");
  const [currentSlide, setCurrentSlide] = useState(0);

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  const maxDate = nextYear.toISOString().split("T")[0];

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const searchParams = new URLSearchParams({
      from: formData.from,
      to: formData.to,
      date: formData.date,
      time: formData.time,
      bookingType,
    });

    navigate(`/confirm?${searchParams.toString()}`);

    // Navigate to selct fleet page with params
    navigate(`/fleet?${searchParams.toString()}`);
  };

  const offers = [
    {
      id: 1,
      title: "Special Airport Transfer",
      description: "20% off on your first booking",
      price: "$49",
    },
    {
      id: 2,
      title: "Business Class Transfer",
      description: "Premium service at best rates",
      price: "$99",
    },
    {
      id: 3,
      title: "Group Booking Offer",
      description: "Special rates for group bookings",
      price: "$79",
    },
    {
      id: 4,
      title: "Holiday Special",
      description: "Festive season discounts",
      price: "$69",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === offers.length - 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? offers.length - 3 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-64 relative">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl font-bold pt-16 text-center">
            Airport Transfer Services
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32">
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl mx-auto">
          <div className="flex mb-6 border-b">
            <button
              type="button"
              className={`pb-2 px-4 ${
                bookingType === "one-way"
                  ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                  : "text-gray-500"
              }`}
              onClick={() => setBookingType("one-way")}
            >
              One way
            </button>
            <button
              type="button"
              className={`pb-2 px-4 ${
                bookingType === "rentals"
                  ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                  : "text-gray-500"
              }`}
              onClick={() => setBookingType("rentals")}
            >
              Rentals
            </button>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                name="from"
                value={formData.from}
                onChange={handleInputChange}
                placeholder="From: airport, hotel, address..."
                className="w-full p-3 border rounded-md pl-10"
                required
              />
              <Car className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="relative">
              <input
                type="text"
                name="to"
                value={formData.to}
                onChange={handleInputChange}
                placeholder="To: airport, hotel, address..."
                className="w-full p-3 border rounded-md pl-10"
                required
              />
              <Car className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="relative">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={today}
                max={maxDate}
                className="w-full p-3 border rounded-md pl-10"
                required
              />
              <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="relative">
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md pl-10"
                required
              />
              <Clock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="relative"></div>

            <Button type="submit" className="w-full">
              Search
            </Button>
          </form>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-12 mt-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Special Offers
          </h2>

          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
              >
                {offers.map((offer) => (
                  <div key={offer.id} className="min-w-[33.33%] px-4">
                    <div className="border rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-semibold mb-2">
                        {offer.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{offer.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-blue-600">
                          {offer.price}
                        </span>
                        <Button>Book Now</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-blue-100">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Low cost transfer</h3>
              <p className="text-gray-600">
                Best rates guaranteed for all your transportation needs
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-blue-100">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free cancellation</h3>
              <p className="text-gray-600">
                Flexible booking with free cancellation options
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-blue-100">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Professional service
              </h3>
              <p className="text-gray-600">
                Experienced drivers and top-quality service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
