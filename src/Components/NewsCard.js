import React, { Component } from 'react';
import '../css/NewsCard.css';

class NewsCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="titleContainer">
          <p className="titleText">{this.props.title}</p>
        </div>
        <div className="dateAndAuthorContainer">
          <div className="date">
            <p className="subText">{this.props.date}</p>
          </div>
          <div className="author">
            <p className="subText">{this.props.author}</p>
          </div>
        </div>
        <div className="imageAndDescriptionContainer">
          <div className="imageContainer">
            <img src={this.props.imageURL} className="cardImage" alt="">
            </img>
          </div>
          <div className="descriptionContainer">
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsCard;
