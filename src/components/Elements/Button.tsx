// @ts-ignore
import React from "react";

const Button = (props:any) => {
    return (
        <div>
        <button onClick={props.onClick? props.onClick: ""} className="bg-red-300">
            {props.text}
        </button>
        </div>
    )
}

export default Button