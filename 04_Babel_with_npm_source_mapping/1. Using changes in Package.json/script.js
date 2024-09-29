const user = "Amitabh";


const h2 = (<h1 style={{color: "red"}}><p>Initials</p>Intro to Babel with NPM{user} </h1>);
console.log(h2);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(h2);