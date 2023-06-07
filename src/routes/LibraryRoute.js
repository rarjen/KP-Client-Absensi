import { Route, Routes } from "react-router-dom";

import Library from "../pages/library";

export function LibraryRoute() {
  return (
    <Routes>
      <Route path="/" element={<Library />} />
    </Routes>
  );
}
