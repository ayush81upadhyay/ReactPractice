import LeftArrow from "../assests/images/left_arrow.png";
import RightArrow from "../assests/images/right_arrow.png";
import AppleBasket from "./AppleBasket";
import Button from "./Button";
import "../App.css";

const AppleCounter = () => {
    return (
        <div className="abc2">
            <AppleBasket number="1"/>
            <Button imageURL={LeftArrow}/>
            <Button imageURL={RightArrow}/>
            <AppleBasket number="2"/>   
        </div>
    )
}

export default AppleCounter;