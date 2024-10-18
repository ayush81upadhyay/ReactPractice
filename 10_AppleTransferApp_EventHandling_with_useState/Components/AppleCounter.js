import {useState} from 'react';
import LeftArrow from "../assests/images/left_arrow.png";
import RightArrow from "../assests/images/right_arrow.png";
import AppleBasket from "./AppleBasket";
import Button from "./Button";
import styles from '../App.module.css';

const AppleCounter = () => {
    const totalBasketApple = 10;
    const [leftBasketApple, setleftBasketApple] = useState(0);
    const [rightBasketApple, setrightBasketApple] = useState(totalBasketApple - leftBasketApple)
    const leftClickHandler = () => {
        if(rightBasketApple>0){
            setleftBasketApple(leftBasketApple+1);
            setrightBasketApple(rightBasketApple-1);
        }
    }
    const rightClickHandler = () => {
        if(leftBasketApple>0){
            setleftBasketApple(leftBasketApple-1);
            setrightBasketApple(rightBasketApple+1);
        }
    }
    return (
        <div className={styles.abc2}>
            <AppleBasket number="1" appleCount = {leftBasketApple}/>
            <Button imageURL={LeftArrow} clickHandler={leftClickHandler} name='left-arrow'/>
            <Button imageURL={RightArrow} clickHandler={rightClickHandler} name='right-arrow'/>
            <AppleBasket number="2" appleCount = {rightBasketApple}/>
        </div>
    )
}

export default AppleCounter;