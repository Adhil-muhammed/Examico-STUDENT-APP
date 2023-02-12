import { DashBord } from "moduel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Master = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<DashBord />} />
      </Routes>
    </BrowserRouter>
  );
};
