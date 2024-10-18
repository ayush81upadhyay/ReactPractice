import LeftArrow from "../assests/images/left_arrow.png";
import RightArrow from "../assests/images/right_arrow.png";
import AppleBasket from "./AppleBasket";
import Button from "./Button";
import "../App.css";

let totalBasketApple = 10;
let leftBasketApple = 0;
let rightBasketApple = (totalBasketApple - leftBasketApple);

const AppleCounter = (props) => {
    const leftClickHandler = () => {
        if(rightBasketApple>0){
            leftBasketApple++;
            rightBasketApple--;
            console.log("Left Click Handler Working");
            props.root.render(<AppleCounter root={props.root}/>);
        }
    }
    const rightClickHandler = () => {
        if(leftBasketApple>0){
            leftBasketApple--;
            rightBasketApple++;
            console.log("Right Click Handler Working");
            props.root.render(<AppleCounter root={props.root}/>);
        }
    }
    return (
        <div className="abc2">
            <AppleBasket number="1" appleCount = {leftBasketApple}/>
            <Button imageURL={LeftArrow} clickHandler={leftClickHandler} name='left-arrow'/>
            <Button imageURL={RightArrow} clickHandler={rightClickHandler} name='right-arrow'/>
            <AppleBasket number="2" appleCount = {rightBasketApple}/>
        </div>
    )
}

export default AppleCounter;