import React from "react";
import "./Hamburger.css"


interface Props {
    Style: any,
    onClick: () => void
}

const Hamburger = ({Style, onClick}: Props) => {

    return (
        <div className="Square" style={Style}>
            <button onClick={onClick} className="Ham">
                &#128196;
            </button>
        </div>
    );
}

export default Hamburger