import React from "react";
import '../App.css';

const Button = (props) => {
    return (
        <img className="abc" src={props.imageURL}/>
    )
}

export default Button;