const user = "Amitabh";

// JSX alongwith JS variable & styling being used inside it within curly braces
const h2 = (<h1 style={{color: "red"}}><p>Initials</p>Intro to JSX and Babel {user} </h1>);
console.log(h2);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(h2);