import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import logo from "../assets/logo.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <nav className="bg-blue-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="Company Logo"
                className="h-16 w-auto hover:opacity-90 transition-opacity object-contain"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/about" className="text-blue-700 hover:text-blue-900">
              About
            </a>
            <a href="/contact" className="text-blue-700 hover:text-blue-900">
              Contact
            </a>
            <a href="/blog" className="text-blue-700 hover:text-blue-900">
              Blog
            </a>
            <a href="/blog" className="text-blue-700 hover:text-blue-900">
              Airport Transfer
            </a>{" "}
            <a href="/blog" className="text-blue-700 hover:text-blue-900">
              Our Services
            </a>{" "}
            <a href="/blog" className="text-blue-700 hover:text-blue-900">
              Help
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleProfileDropdown}
                className="text-blue-700 hover:text-blue-900 focus:outline-none"
              >
                <User className="h-6 w-6" />
              </button>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-100"
                  >
                    My Profile
                  </Link>
                </div>
              )}
            </div>

            <Link to="/login">
              <Button variant="primary" size="md" onClick={() => {}}>
                Sign In
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-blue-700 hover:text-blue-900"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-50">
              <a
                href="/about"
                className="block px-3 py-2 text-blue-700 hover:bg-blue-100 rounded-md"
              >
                About
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-blue-700 hover:bg-blue-100 rounded-md"
              >
                Contact
              </a>
              <a
                href="/blog"
                className="block px-3 py-2 text-blue-700 hover:bg-blue-100 rounded-md"
              >
                Blog
              </a>
              <Button>Sign In</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
