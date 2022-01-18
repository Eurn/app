import React from "react";

function Button({click, name}) {
    return <button onClick={click}>{name}</button>
}

export default Button;