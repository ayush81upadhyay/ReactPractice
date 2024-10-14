import { createRoot } from "react-dom/client";
import imgURL from './assests/images/apple-iphone-12-r1.jpg';
import './style.css';

// Created a function which is returning the jSX
const Card = (key) => {
    return (
    <div className="card" key={key}>
        <img src={imgURL} alt="iphone12"></img>
        <h1>Apple</h1>
        <h3>$24</h3>
        <h3>5 Star</h3>
        <h3>256 GB Ram</h3>
    </div>
    );
}

// Passed functions in an array with arguments in it
const card_container = [Card(1), Card(2), Card(3), Card(4)];
const root = createRoot(document.getElementById("root"));
root.render(card_container);
