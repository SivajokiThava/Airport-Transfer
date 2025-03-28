import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import SelectFleet from "./Pages/SelectFleet";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Payment from "./Pages/Payment";
import Confirm from "./Pages/Confirm";
import UserProfile from "./Pages/UserProfile";
import AdminLayout from "./Layout/AdminLayout";
import Dashboard from "./Pages/Admin/Dashboard";
import Bookings from "./Pages/Admin/Bookings";
import NewBooking from "./Pages/Admin/NewBooking";
import PendingList from "./Pages/Admin/PendingList";
import Users from "./Pages/Admin/Users";
import GeoLocations from "./Pages/Admin/GeoLocations";
import RateCard from "./Pages/Admin/RateCard";
import Promos from "./Pages/Admin/Promos";
import Notifications from "./Pages/Admin/Notifications";
import Reports from "./Pages/Admin/Reports";
import Tracking from "./Pages/Admin/Tracking";
import Drivers from "./Pages/Admin/Drivers";
import Availability from "./Pages/Admin/Availability";
import Discount from "./Pages/Admin/Discount";
import ProtectedRoute from "./Routes/ProtectedRoute";
import NotFound from "./Pages/NotFound";
import SystemSettings from "./Pages/Admin/SystemSettings";
import OperatingArea from "./Pages/Admin/OperatingArea";
import NewRule from "./Pages/Admin/PromoRuleEngine/NewRule";
import DiscountRule from "./Pages/Admin/PromoRuleEngine/DiscountRule";
import PromoRule from "./Pages/Admin/PromoRuleEngine/PromoRule";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin", "operator"]}>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute allowedRoles={["admin", "operator"]}>
              <AdminLayout>
                <Bookings />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/newbooking"
          element={
            <AdminLayout>
              <NewBooking />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/pendinglist"
          element={
            <AdminLayout>
              <PendingList />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminLayout>
              <Users />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/notifications"
          element={
            <AdminLayout>
              <Notifications />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/geolocations"
          element={
            <AdminLayout>
              <GeoLocations />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/ratecard"
          element={
            <ProtectedRoute allowedRoles={["admin", "operator"]}>
              <AdminLayout>
                <RateCard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/promos"
          element={
            <AdminLayout>
              <Promos />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute allowedRoles={["admin", "operator"]}>
              <AdminLayout>
                <Reports />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/tracking"
          element={
            <AdminLayout>
              <Tracking />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/drivers"
          element={
            <ProtectedRoute allowedRoles={["admin", "operator"]}>
              <AdminLayout>
                <Drivers />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/availability"
          element={
            <ProtectedRoute allowedRoles={["admin", "operator"]}>
              <AdminLayout>
                <Availability />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/discount"
          element={
            <ProtectedRoute allowedRoles={["operator"]}>
              <AdminLayout>
                <Discount />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <SystemSettings />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/operatingarea"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <OperatingArea />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/promo-rule-engine/new-rule"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <NewRule />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/promo-rule-engine/discount-rules"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <DiscountRule />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/promo-rule-engine/promo-rule"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout>
                <PromoRule />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Regular Routes*/}
        <Route
          path="/*"
          element={
            <div>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/fleet" element={<SelectFleet />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/confirm" element={<Confirm />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/notfound" element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
