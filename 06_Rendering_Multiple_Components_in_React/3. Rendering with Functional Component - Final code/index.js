import { createRoot } from "react-dom/client";
import './style.css';

// Used object destructuring in very beginning
const Card = ({imgURL, title, brand, price, rating}) => {
    console.log(imgURL + title + brand + price + rating)
    return (
    <div className="card">
        <img src={imgURL} alt="iphone12"></img>
        <h1>{title}</h1>
        <h3>{brand}</h3>
        <h3>{price}</h3>
        <h3>{rating}</h3>
    </div>
    );
}

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
    console.log(data);
    // map iterates over an array and for each element of it, runs the function inside
    const card_container = data.products.map((product)=>{

        //Way-1
       //return Card({imgURL: product.thumbnail, key: product.id, title: product.title, brand: product.brand, price: product.price, rating: product.rating});
             //OR Way-2
       return <Card 
                imgURL={product.thumbnail}              
                title={product.title}
                brand={product.brand}
                price={product.price}
                rating={product.rating}
                />
    })
    const root = createRoot(document.getElementById("root"));
    root.render(card_container);
});

