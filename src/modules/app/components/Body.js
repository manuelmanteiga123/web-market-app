import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "../../users";
import { Navigate } from "react-router-dom";
import { InventoryList } from "../../inventory/components/InventoryList";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/articles" element={<InventoryList />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Body;
