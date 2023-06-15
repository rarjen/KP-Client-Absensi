import { Navigate, Route, Routes } from "react-router-dom";
import GuardRoute from "../components/GuardRoute";
import GuestOnlyRoute from "../components/GuestOnlyRoute";

import Login from "../pages/signin";
import Register from "../pages/signup";

import { KaryawanRoute } from "./KaryawansRoute";
import { JabatanRoute } from "./JabatanRoute";
import { ShiftRoute } from "./ShiftRoute";
import { AbsensiRoute } from "./AbsensiRoute";

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
        <Route path="/" element={<Navigate to="/dashboard" replace={true} />} />
        <Route path="karyawan/*" element={<KaryawanRoute />} />
        <Route path="jabatan/*" element={<JabatanRoute />} />
        <Route path="shift/*" element={<ShiftRoute />} />
        <Route path="absensi/*" element={<AbsensiRoute />} />
      </Route>
    </Routes>
  );
}
