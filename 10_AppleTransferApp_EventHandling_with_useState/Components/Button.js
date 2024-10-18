import React from "react";
import styles from '../App.module.css';

const Button = (props) => {
    return (
        <img className={styles.abc} src={props.imageURL} onClick={props.clickHandler} title={props.name}/>
    )
}

export default Button;