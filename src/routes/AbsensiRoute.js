import { Route, Routes } from "react-router-dom";

import Absensi from "../pages/absensis";

export function AbsensiRoute() {
  return (
    <Routes>
      <Route path="/" element={<Absensi />} />
    </Routes>
  );
}
