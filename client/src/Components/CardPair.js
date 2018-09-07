import React, { Component } from 'react';
import '../css/CardPair.css';
import NewsCard from './NewsCard.js'

class CardPair extends Component {

  render() {
    return (
      <div className="pairContainer">
        <NewsCard
          title={ this.props.liberalTitle }
          date={this.props.liberalSource}
          author={this.props.liberalDate}
          imageURL={ this.props.liberalImageURL }
          description={ this.props.liberalDescription }
          articleURL={ this.props.liberalArticleURL}
        />
        <div>
          <p className="percentageText">
            { ((parseFloat(this.props.score) * 100) + 30).toFixed(2) + '%' }
          </p>
        </div>
        <NewsCard
          title={ this.props.conservativeTitle }
          date={this.props.conservativeSource}
          author={this.props.conservativeDate}
          imageURL={ this.props.conservativeImageURL }
          description={ this.props.conservativeDescription }
          articleURL={ this.props.conservativeArticleURL }
        />
      </div>
    );
  }
}

export default CardPair;
