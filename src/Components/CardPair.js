import React, { Component } from 'react';
import '../css/CardPair.css';
import NewsCard from './NewsCard.js'

class CardPair extends Component {

  render() {
    return (
      <div className="pairContainer">
        <NewsCard
          title={ this.props.liberalTitle }
          date={ this.props.liberalDate }
          author={ this.props.liberalAuthor }
          imageURL={ this.props.liberalImageURL }
          description={ this.props.liberalDescription }
        />
        <div>
          <p className="percentageText">
            { (parseFloat(this.props.score) * 100).toFixed(2) + '%'}
          </p>
        </div>
        <NewsCard
          title={ this.props.conservativeTitle }
          date={ this.props.conservativeDate }
          author={ this.props.conservativeAuthor }
          imageURL={ this.props.conservativeImageURL }
          description={ this.props.conservativeDescription }
        />
      </div>
    );
  }
}

export default CardPair;
