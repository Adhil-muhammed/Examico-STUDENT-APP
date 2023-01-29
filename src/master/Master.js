import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from ".";

export const Master = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};
