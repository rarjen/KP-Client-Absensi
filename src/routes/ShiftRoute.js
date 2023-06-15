import { Route, Routes } from "react-router-dom";

import Shift from "../pages/shifts";
import Create from "../pages/shifts/create";
import Edit from "../pages/shifts/edit";

export function ShiftRoute() {
  return (
    <Routes>
      <Route path="/" element={<Shift />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:categoryId" element={<Edit />} />
    </Routes>
  );
}
