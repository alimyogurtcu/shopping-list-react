import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingApp from './components/ShoppingApp';
import './styles/main.scss';
import '../node_modules/@fortawesome/fontawesome-free/js/brands'
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome'
import '../node_modules/@fortawesome/fontawesome-free/js/solid'

var root = document.getElementById("root");

ReactDOM.render(<ShoppingApp />, root)