import React, { useState } from "react";
import "./Banner.css";
import Hamburger from '../Button/Hamburger';

const Banner = () => {
    const [isOpen, setOpen] = useState<boolean>(false)

    const OnClick = () => {
        { isOpen ? setOpen(false) : setOpen(true)}
    }

    return (
        <div className="banner">
            <Hamburger Style={{marginLeft: "2vw"}} onClick={OnClick}></Hamburger>
            <p style={{color:"White"}}>{isOpen? "Open": "Closed"}</p>
        </div>
    );
}

export default Banner