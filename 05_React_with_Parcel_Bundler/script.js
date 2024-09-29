// {user} => use this in case 'user' named variable comes out
import user from './value.js';
//import {createElement} from "react";
import React from "react";
import {createRoot} from 'react-dom/client';
console.log("Hello World!! " + user.name);

const h1 = (<h1>hello<p style = {{color: 'teal'}}>target</p></h1>);
const root = createRoot(document.getElementById('root1'));
root.render(h1);
console.log(React);
const h3 = React.createElement('h1', {className:"new_build"}, "Hi! This is the first change");
const root2 = createRoot(document.getElementById('root2'));
root2.render(h3);

// npx parcel index.html => to run the server
