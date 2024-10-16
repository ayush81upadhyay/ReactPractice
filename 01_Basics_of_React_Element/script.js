// Creating pure React Element using React method : createElement
const h1 = React.createElement('h1', {className:"new_build"}, "Hi! This is the first change");

// Rendering the React Element inside Pure JS based DOM using ReactDOM Library
    
    // 1st argument of ReactDOM takes 'container' where the React Element has to be rendered
    const root1 = ReactDOM.createRoot(document.querySelector('#root1'));

    // render is a method available on root for rendering : Check console
    root1.render(h1);

// Nesting example related to React Elements and style prop is added in different way : using an object with key value pair in it
const bigelement = React.createElement('div', {id:"container", className: "container", style: {textDecoration:'underline'}}, [
    React.createElement('section', {id:"abc", key:1}, [

        // Key must be passed in an array. having React elements as it's items, inside their respective props and they must be unique
        React.createElement('p', {key:1}, "This is a nested tag"),
        React.createElement('p', {key:2}, "This is a nested tag")
    ])
]);

const root2 = ReactDOM.createRoot(document.querySelector('#root2'));
root2.render(bigelement);
