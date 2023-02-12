import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Sidebar } from ".";

export const Master = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
};
