import React, { Component } from 'react';
import '../css/CardPair.css';
import NewsCard from './NewsCard.js'

class CardPair extends Component {
  render() {
    return (
      <div className="pairContainer">
        <NewsCard />
        <div className="dot" />
        <NewsCard />
      </div>
    );
  }
}

export default CardPair;
