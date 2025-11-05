import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUserAlt, FaUsers, FaTrophy, FaPlusCircle } from "react-icons/fa";
import "./Navbar.css"; // Stile personalizzato

export default function Navbar() {
    const location = useLocation();

    const navItems = [
        { to: "/feed", icon: <FaHome />, label: "Feed" },
        { to: "/checkin", icon: <FaPlusCircle />, label: "Check-In" },
        { to: "/groups", icon: <FaUsers />, label: "Gruppi" },
        { to: "/badges", icon: <FaTrophy />, label: "Badge" },
        { to: "/profile", icon: <FaUserAlt />, label: "Profilo" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span role="img" aria-label="logo" className="logo-emoji">🏆</span>
                <span className="navbar-title">BeSporty</span>
            </div>
            <div className="navbar-tabs">
                {navItems.map(item => (
                    <Link
                        key={item.to}
                        to={item.to}
                        className={location.pathname === item.to ? "nav-link active" : "nav-link"}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}
