import React from "react";
import '../App.css';

const Button = (props) => {
    return (
        <img className="abc" src={props.imageURL} onClick={props.clickHandler} title={props.name}/>
    )
}

export default Button;