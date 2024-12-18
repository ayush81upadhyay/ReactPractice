import { createRoot } from "react-dom/client";
import imgURL from './assests/images/apple-iphone-12-r1.jpg';
import './style.css';
console.log(imgURL);

// Created a basic JSX of a Card
const Card = (
    <div className="card">
        <img src={imgURL} alt="iphone12"></img>
        <h1>Apple</h1>
        <h3>$24</h3>
        <h3>5 Star</h3>
        <h3>256 GB Ram</h3>
    </div>
    );

// passing multiple such cards them in an array 
const card_container = [Card, Card, Card, Card];
const root = createRoot(document.getElementById("root"));

// Rendering all those cards by simply passing array to render method ; React takes care of how to render
root.render(card_container);
