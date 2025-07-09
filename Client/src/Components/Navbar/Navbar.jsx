import React, { useState } from "react";
import { CiMenuBurger, CiSearch, CiLocationOn } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";
import { assets } from "../../assets/assets";
import './Navbar.css';
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <div className="navbar">
                <div className="left">
                    <div className="menu" onClick={() => setMenu(prev => !prev)} role="button" aria-label="Toggle Menu">
                        {menu ? <RiCloseLargeFill size={27} /> : <CiMenuBurger size={27} />}
                        {menu ? "CLOSE" : "MENU"}
                    </div>
                    <div className="search">
                        <CiSearch size={27} />
                    </div>
                    <div className="location">
                        <CiLocationOn size={27} />
                    </div>
                </div>
                <div className="right">
                    <div className="logo">
                        <img src={assets.tarkPrime} alt="Tark Prime Logo" />
                    </div>
                </div>
            </div>
           <div className="margin-setup" style={{ marginTop: '72px' }}></div>
            <Sidebar menu={menu} />
        </>
    )
}

export default Navbar;
