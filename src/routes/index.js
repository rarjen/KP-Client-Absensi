import { Navigate, Route, Routes } from "react-router-dom";
import GuardRoute from "../components/GuardRoute";
import GuestOnlyRoute from "../components/GuestOnlyRoute";

import Login from "../pages/signin";
import Register from "../pages/signup";
import { HomeRoute } from "./HomeRoute";
import { CategoriesRoute } from "./CategoriesRoute";
import { TalentsRoute } from "./TalentsRoute";
import { PaymentsRoute } from "./PaymentsRoute";
import { EventsRoute } from "./EventsRoute";
import { OrdersRoute } from "./OrdersRoute";
import PNavbar from "../components/Navbar";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/signin"
        element={
          <GuestOnlyRoute>
            <Login />
          </GuestOnlyRoute>
        }
      />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <>
            <PNavbar />
            <GuardRoute />
          </>
        }
      >
        <Route path="dashboard/*" element={<HomeRoute />} />
        <Route path="categories/*" element={<CategoriesRoute />} />
        <Route path="talents/*" element={<TalentsRoute />} />
        <Route path="payments/*" element={<PaymentsRoute />} />
        <Route path="events/*" element={<EventsRoute />} />
        <Route path="orders/*" element={<OrdersRoute />} />
        <Route path="/" element={<Navigate to="/dashboard" replace={true} />} />
      </Route>
    </Routes>
  );
}
