const user = "Amitabh";
const h2 = /*#__PURE__*/React.createElement("h1", {
  style: {
    color: "red"
  }
}, /*#__PURE__*/React.createElement("p", null, "Initials"), "Intro to Babel with NPM", user, " ");
console.log(h2);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(h2);