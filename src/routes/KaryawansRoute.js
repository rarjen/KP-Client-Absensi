import { Route, Routes } from "react-router-dom";

import Karyawans from "../pages/karyawans";

export function KaryawanRoute() {
  return (
    <Routes>
      <Route path="/" element={<Karyawans />} />
    </Routes>
  );
}
