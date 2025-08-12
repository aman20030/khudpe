import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaChevronLeft, FaChevronRight, FaHome, FaUsers,
  FaCogs, FaGift, FaTags, FaBullhorn, FaSignOutAlt, FaUserCircle
} from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: <FaHome />, label: "Dashboard", path: "/" },
    { icon: <FaUsers />, label: "Client Onboard", path: "/client" },
    { icon: <FaCogs />, label: "Admin Console", path: "/admin" },
    { icon: <FaTags />, label: "Offers", path: "/offers" },
    { icon: <FaGift />, label: "Rewards", path: "/rewards" },
    { icon: <FaUsers />, label: "Requests", path: "/requests" },
    { icon: <FaBullhorn />, label: "Ads", path: "/ads" },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="top-section">
        {isOpen && (
          <div className="logo">
            <span className="logo-en">Khud</span>
            <span className="logo-hi">पे</span>
          </div>
        )}
        <div className="toggle-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </div>
      </div>

      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `menu-link ${isActive ? "active" : ""}`
              }
              data-tooltip={item.label}
            >
              <div className="icon">{item.icon}</div>
              {isOpen && <span className="label">{item.label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="bottom-section">
        <div className="user-info">
          <FaUserCircle className="user-icon" />
          {isOpen && <span className="user-name">Raj Sharma</span>}
        </div>
        <NavLink to="/logout" className="logout" data-tooltip="Logout">
          <FaSignOutAlt />
          {isOpen && <span>Logout</span>}
        </NavLink>
      </div>
    </div>
  );
}
