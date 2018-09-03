import React, { Component } from 'react';
import $ from 'jquery';
import './css/App.css';
import CardPair from './Components/CardPair.js'
import CategoryButton from './Components/CategoryButton.js';
class App extends Component {

  pushToNewsCards = (newsList) => {
    var news = [];
    newsList.forEach(function(article) {
      news.push(
        <CardPair
          liberalTitle={article.liberal.title}
          liberalDate={article.liberal.date}
          liberalAuthor={article.liberal.author}
          liberalImageURL={article.liberal.imageURL}
          liberalDescription={article.liberal.description}
          conservativeTitle={article.conservative.title}
          conservativeDate={article.conservative.date}
          conservativeAuthor={article.conservative.author}
          conservativeImageURL={article.conservative.imageURL}
          conservativeDescription={article.conservative.description}
        />
      )
    });
    return news;
  }

  loadNews = (category) => {
    var newsList = [];
    $.getJSON("https://api.myjson.com/bins/6jfkc", function (articles) {
      var articlesByCurrentCategory = articles[category];
      articlesByCurrentCategory.forEach( function(currentArticle) {
        newsList.push({
          score: currentArticle.score,
          liberal: {
            source: {
              id: currentArticle.liberal.source.id,
              name: currentArticle.liberal.source.name
            },
            title: currentArticle.liberal.title,
            description: currentArticle.liberal.description,
            articleURL: currentArticle.liberal.url,
            imageURL: currentArticle.liberal.urlToImage,
            date: currentArticle.liberal.publishedAt
          },
          conservative: {
            source: {
              id: currentArticle.conservative.id,
              name: currentArticle.conservative.name
            },
            title: currentArticle.conservative.title,
            description: currentArticle.conservative.description,
            articleURL: currentArticle.conservative.url,
            imageURL: currentArticle.conservative.urlToImage,
            date: currentArticle.conservative.publishedAt
          }
        })
      });
      this.pushToNewsCards(newsList);
    });
  }

  render() {
    return (
      <div className="app">
        <div className="body">
          <header className="navbar">
            <h1 className="header">navbar</h1>
          </header>
          <div className="categorySelectorContainer">
            <CategoryButton />
            <CategoryButton />
            <CategoryButton />
          </div>
          <div className="categoryTitleContainer">
            <p>HEALTH CARE</p>
          </div>
          <div className="newsCardsContainer">
            {this.loadNews("gun control")}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
