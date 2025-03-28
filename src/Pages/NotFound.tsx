import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          The page you're looking for doesn't exist or you don't have permission
          to access it.
        </p>
        <div className="mt-8">
          <Button onClick={() => navigate(-1)} className="mr-4">
            Go Back
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="bg-gray-600 hover:bg-gray-700"
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
