import React, { Component } from 'react';
import Items from '../containers/items';
import ShoppingCart from '../containers/shoppingCart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-mainbody">
        <Items />
        <ShoppingCart />
      </div>
    );
  }
}

export default App;
