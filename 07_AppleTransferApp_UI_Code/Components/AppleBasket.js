import React from "react";
import '../App.css';

const AppleBasket = (props) => {
    return(
        <div>
            <h4 className="abc3">20 Apples</h4>
            <h5 className="abc3">Basket {props.number}</h5>
        </div>
    )
}

export default AppleBasket;