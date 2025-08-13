import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SidebarAndNavbar from "./components/SidebarAndNavbar";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./components/UserDetails";
export default function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "20px", flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
             <Route path="/user-details" element={<UserDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
