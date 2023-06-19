import { Route, Routes } from "react-router-dom";

import PostAbsen from "../pages/postAbsen/create";

export function PostAbsensiRoute() {
  return (
    <Routes>
      <Route path="/" element={<PostAbsen />} />
    </Routes>
  );
}
