import { createRoot } from "react-dom/client";
import imgURL from './assests/images/apple-iphone-12-r1.jpg';
import './style.css';
console.log(imgURL);

const Card = (
    <div className="card">
        <img src={imgURL} alt="iphone12"></img>
        <h1>Apple</h1>
        <h3>$24</h3>
        <h3>5 Star</h3>
        <h3>256 GB Ram</h3>
    </div>
    );

const card_container = [Card, Card, Card, Card];
const root = createRoot(document.getElementById("root"));
root.render(card_container);
