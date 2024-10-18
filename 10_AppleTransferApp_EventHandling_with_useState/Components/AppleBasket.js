import React from "react";
import styles from '../App.module.css';

const AppleBasket = (props) => {
    return(
        <div>
            <h4 className={styles.abc3}>{props.appleCount} Apples</h4>
            <h5 className={styles.abc3}>Basket {props.number}</h5>
            <h5 className={styles.abc3}>{props.appleCount === 0? "empty": false}</h5>
            <h5 className={styles.abc3}>{props.appleCount === 10? "full": false}</h5>
        </div>
    )
}

export default AppleBasket;