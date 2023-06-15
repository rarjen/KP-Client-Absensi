import { Route, Routes } from "react-router-dom";

import Jabatan from "../pages/jabatans";
import Create from "../pages/jabatans/create";
import Edit from "../pages/jabatans/edit";

export function JabatanRoute() {
  return (
    <Routes>
      <Route path="/" element={<Jabatan />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:categoryId" element={<Edit />} />
    </Routes>
  );
}
