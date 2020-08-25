import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';

ReactDOM.render(<App /> , document.getElementById('root'));

const sGame =["call of duty","far city","PUBG"];
const rGame =['Aspal8', 'Need For Speed'];

var game =[...sGame,...rGame];
console.log(game);