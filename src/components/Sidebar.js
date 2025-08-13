import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaUsers,
  FaCogs,
  FaGift,
  FaTags,
  FaBullhorn,
  FaSignOutAlt,
  FaUserCircle
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
        <div className="logo">
          {isOpen ? (
            <>
              <span className="logo-en">Khud</span>
              <span className="logo-hi">पे</span>
            </>
          ) : (
            <span className="logo-icon">Khud पे</span> // collapse hone par small logo
          )}
        </div>

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
    `menu-link ${isActive ? "active" : ""} ${isOpen ? "" : "closed"}`
  }
  data-tooltip={item.label}
            >
              <div className="icon">{item.icon}</div>
<span className={`label ${isOpen ? "open" : "closed"}`}>{item.label}</span>

            </NavLink>
          </li>
        ))}
      </ul>

      <div className="bottom-section">
        <NavLink
          to="/user-details"
          className="user-info"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          <FaUserCircle className="user-icon" />
          {isOpen && <span className="user-name">username</span>}
        </NavLink>

        <NavLink to="/logout" className="logout" data-tooltip="Logout">
          <FaSignOutAlt />
          {isOpen && <span>Logout</span>}
        </NavLink>
      </div>
    </div>
  );
}
