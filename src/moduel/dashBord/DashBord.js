import { Home } from "..";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "master";

export const DashBord = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/about/*" element={<Sidebar />} />
      {/* <Route path="/home/*" element={<Home />} />
      <Route path="/home/*" element={<Home />} /> */}
    </Routes>
  );
};
