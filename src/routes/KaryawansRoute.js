import { Route, Routes } from "react-router-dom";

import Karyawans from "../pages/karyawans";
import Create from "../pages/karyawans/create";

export function KaryawanRoute() {
  return (
    <Routes>
      <Route path="/" element={<Karyawans />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}
