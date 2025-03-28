import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  LogOut,
  ChevronRight,
  Menu,
  X,
  ClipboardList,
  Car,
  Calendar,
  PieChart,
  DollarSign,
  FileBarChart,
  BookOpen,
  Percent,
  Tags,
  ChevronDown,
} from "lucide-react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState<string>("");
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (!role) {
      navigate("/login");
      return;
    }
    setUserRole(role);
  }, [navigate]);

  const operatorMenuItems = [
    {
      path: "/admin/bookings",
      icon: <ClipboardList size={20} />,
      label: "Bookings",
    },
    {
      path: "/admin/drivers",
      icon: <Car size={20} />,
      label: "Drivers",
    },
    {
      path: "/admin/availability",
      icon: <Calendar size={20} />,
      label: "Availability",
    },
    {
      path: "/admin/discount",
      icon: <DollarSign size={20} />,
      label: "Charges & Discount",
    },
    {
      path: "/admin/ratecard",
      icon: <FileText size={20} />,
      label: "Rate card",
    },
    {
      path: "/admin/reports",
      icon: <FileBarChart size={20} />,
      label: "Reports",
    },
  ];

  const adminMenuItems = [
    {
      path: "/admin",
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
    },
    {
      path: "/admin/bookings",
      icon: <ClipboardList size={20} />,
      label: "Bookings",
    },
    {
      path: "/admin/newbooking",
      icon: <FileText size={20} />,
      label: "New Booking",
    },
    {
      path: "/admin/pendinglist",
      icon: <Settings size={20} />,
      label: "Pending List",
    },
    {
      path: "/admin/users",
      icon: <Users size={20} />,
      label: "Users",
    },
    {
      path: "/admin/tracking",
      icon: <PieChart size={20} />,
      label: "Tracking",
    },
    {
      path: "/admin/promos",
      icon: <Settings size={20} />,
      label: "Offers & Promos",
    },
    {
      label: "Promo Rule Engine",
      icon: <BookOpen size={20} />,
      isGroupHeader: true,
      subItems: [
        {
          path: "/admin/promo-rule-engine/discount-rules",
          icon: <Percent size={20} />,
          label: "Discount Rules",
        },
        {
          path: "/admin/promo-rule-engine/new-rule",
          icon: <FileText size={20} />,
          label: "New Rule",
        },
        {
          path: "/admin/promo-rule-engine/promo-rule",
          icon: <Tags size={20} />,
          label: "Promo Rules",
        },
      ],
    },
    {
      path: "/admin/ratecard",
      icon: <FileText size={20} />,
      label: "Rate card",
    },
    {
      path: "/admin/geolocations",
      icon: <Settings size={20} />,
      label: "Geo Locations",
    },
    {
      path: "/admin/settings",
      icon: <Settings size={20} />,
      label: "System Settings",
    },
    {
      path: "/admin/operatingarea",
      icon: <Settings size={20} />,
      label: "Operating Area",
    },
    {
      path: "/admin/notifications",
      icon: <Settings size={20} />,
      label: "Notifications",
    },
    {
      path: "/admin/reports",
      icon: <FileBarChart size={20} />,
      label: "Reports",
    },
  ];

  const menuItems =
    userRole === "operator" ? operatorMenuItems : adminMenuItems;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  const toggleSubmenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const NavLinks = () => (
    <>
      {menuItems.map((item, index) => {
        if ("isGroupHeader" in item && item.isGroupHeader) {
          const isOpen = openMenus.includes(item.label);
          const isActiveGroup = item.subItems.some(
            (subItem) => location.pathname === subItem.path
          );

          return (
            <div key={index}>
              <button
                onClick={() => toggleSubmenu(item.label)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-[#1e40af] transition-colors duration-200 font-medium ${
                  isActiveGroup ? "bg-[#1e40af] text-white font-semibold" : ""
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                <ChevronDown
                  size={16}
                  className={`ml-auto transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="bg-[#151b59]">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 px-8 py-3 text-white hover:bg-[#1e40af] transition-colors duration-200 font-medium ${
                        location.pathname === subItem.path
                          ? "bg-[#1e40af] text-white font-semibold"
                          : ""
                      }`}
                    >
                      {subItem.icon}
                      <span>{subItem.label}</span>
                      {location.pathname === subItem.path && (
                        <ChevronRight size={16} className="ml-auto" />
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.path || index}
            to={item.path || "#"}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center space-x-3 px-4 py-3 text-white hover:bg-[#1e40af] transition-colors duration-200 font-medium ${
              location.pathname === item.path
                ? "bg-[#1e40af] text-white font-semibold"
                : ""
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
            {location.pathname === item.path && (
              <ChevronRight size={16} className="ml-auto" />
            )}
          </Link>
        );
      })}
    </>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <button
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static w-64 flex flex-col h-screen bg-[#1a237e] shadow-lg transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-4 border-b border-opacity-20 border-gray-600">
          <h2 className="text-xl font-bold text-white">
            {userRole === "operator" ? "Operator Portal" : "Admin Portal"}
          </h2>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <NavLinks />
        </nav>

        <div className="p-4 border-t border-opacity-20 border-gray-600 bg-[#1a237e]">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 text-gray-300 hover:text-white w-full"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="flex-1 md:overflow-auto p-4 md:p-8 mt-16 md:mt-0">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
