import React from "react";
import './Sidebar.css'
const Sidebar = ({ menu }) => {
    return (
        <>
            <div className={`sidebar ${menu ? "active" : ""}`}>
                <ul className="menu-items">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Web Apps</li>
                    <li>Privacy Policy</li>
                    <li>About Us</li>
                    <li>Contact Us</li>

                </ul>
            </div>
        </>
    )
}

export default Sidebar;