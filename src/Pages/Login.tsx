import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../Components/Button";

const USER_CREDENTIALS = {
  ADMIN: {
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
  OPERATOR: {
    email: "operator@example.com",
    password: "operator123",
    role: "operator",
  },
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [error, setError] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (
        formData.email === USER_CREDENTIALS.ADMIN.email &&
        formData.password === USER_CREDENTIALS.ADMIN.password
      ) {
        localStorage.setItem("userRole", "admin");
        navigate("/admin");
        return;
      }

      if (
        formData.email === USER_CREDENTIALS.OPERATOR.email &&
        formData.password === USER_CREDENTIALS.OPERATOR.password
      ) {
        localStorage.setItem("userRole", "operator");
        navigate("/admin/bookings");
        return;
      }

      setError("Invalid email or password");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-48 relative">
        <div className="container mx-auto px-2">
          <h1 className="text-white text-4xl font-bold pt-16 text-center">
            Welcome Back
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-2 -mt-15">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-auto">
          {error && (
            <div className="bg-red-50 text-red-500 px-4 py-2 rounded-md mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>

            <div className="mt-4 text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Sign up
              </Link>
            </div>

            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="w-full p-3 border rounded-md flex justify-center items-center gap-2 hover:bg-gray-50"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
            </div>
            <div className="text-sm text-gray-500 mt-4">
              <p>Demo Admin Credentials:</p>
              <p>Email: {USER_CREDENTIALS.ADMIN.email}</p>
              <p>Password: {USER_CREDENTIALS.ADMIN.password}</p>
            </div>
            <div className="text-sm text-gray-500 mt-4">
              <p className="font-semibold">Operator:</p>
              <p>Email: {USER_CREDENTIALS.OPERATOR.email}</p>
              <p>Password: {USER_CREDENTIALS.OPERATOR.password}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
