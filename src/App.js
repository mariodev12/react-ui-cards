import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import data from './data.json';

class App extends Component {

  render() {
    var cards = data.map(function(c, i){
      return (
        <Card
            title={c.title}
            img={c.img}
            place={c.place}
            discount={c.discount}
            price={c.price}
            oprice={c.oldprice}
            key={i}
        />
      )
    });
    return (
      <div className="container">
        <h2 className="title">Trending Now</h2>
        <div className="row">
          {cards}
        </div>
      </div>
    );
  }
}

export default App;
