// Creating pure React Element using React method : createElement
const h1 = React.createElement('h1', {className:"new_build", textDecoration:"underline"}, "This is how it is");

// Rendering the React Element inside Pure JS based DOM using ReactDOM Library
    
    // 1st argument of ReactDOM takes 'container' where the React Element has to be rendered
    const root = ReactDOM.createRoot(document.querySelector('#root'));

    // render is a method available on root for rendering : Check console
    root.render(h1);
