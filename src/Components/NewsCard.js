import React, { Component } from 'react';
import '../css/NewsCard.css';

class NewsCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="titleContainer">
          <p className="titleText">John McCain Is Honored in Arizona, With Tears and Tributes</p>
        </div>
        <div className="dateAndAuthorContainer">
          <div className="date">
            <p className="subText">28 August 2018</p>
          </div>
          <div className="author">
            <p className="subText">Simon Romero</p>
          </div>
        </div>
        <div className="imageAndDescriptionContainer">
          <div className="imageContainer">
            <img src="https://static01.nyt.com/images/2018/08/30/us/30mccain-02/30mccain-02-videoSixteenByNineJumbo1600.jpg" className="cardImage">
            </img>
          </div>
          <div className="descriptionContainer">
            <p>Only two other people have had the honor of lying in state in the Arizona State Capitol.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsCard;
