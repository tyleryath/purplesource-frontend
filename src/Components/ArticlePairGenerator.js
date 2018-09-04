import React, { Component } from 'react';
import $ from 'jquery';
import CardPair from './CardPair.js'

class ArticlePairGenerator extends Component {

  componentWillMount() {
    this.setState({ newsList : [] });
    this.loadNews("trump")
  }

  pushToNewsCards(newsList) {
    this.setState({ newsList: newsList })
  }

  loadNews(category) {
    var newsList = [];
      $.getJSON("https://api.myjson.com/bins/6jfkc", (articles) => {
        var articlesByCurrentCategory = articles[category]
        articlesByCurrentCategory.forEach( (currentArticle) => {
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
        })
        this.pushToNewsCards(newsList);
      })
    }


  render() {
    return (
      <div>
        {this.state.newsList.map((article, index) =>
          <CardPair
            key={index}
            score={article.score}
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
        )}
      </div>
    );
  }
}

export default ArticlePairGenerator;
