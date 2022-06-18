import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

const Nav = () => {

    const [isActive, setActive] = useState("false");

    const toggleActive = () => {
        setActive(!isActive);
    }

    return (
        <div className="nav">
            <div className="Logo"></div>
            <Link onClick={toggleActive} spy={true} smooth={true} offset={-70} duration={500} to="section1"><div className={isActive ? 'subItemU' : 'subItem'}><b>Overview and Users</b></div></Link>
            <Link onClick={toggleActive} spy={true} smooth={true} offset={-70} duration={500} to="section2"><div className={isActive ? 'subItem' : 'subItemU'}><b>Savings and Expenses</b></div></Link>
        </div>
    );
};

export default Nav;