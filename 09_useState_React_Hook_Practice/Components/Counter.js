import { useState, Fragment } from "react";
import styles from '../App.module.css';

console.log(styles);
const Counter = () => {
    const [Count, setCount] = useState(0);
    console.log(Count);
    return(
        <Fragment>
            <h1 className={styles.abc1}>{Count}</h1>
            <button className={styles.abc} onClick={(e)=>{
                console.log(e);
                setCount(Count+1);
            }}>Increase Count</button>
        </Fragment>
    )
}

export default Counter;