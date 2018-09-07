import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import CardPair from './CardPair.js';
import { setActiveCategory } from '../actions/SetActiveCategory';

class ArticlePairGenerator extends Component {

  componentWillMount() {
    const categories = {"ABORTION":"abortion",
                        "PRESIDENT TRUMP":"trump",
                        "HEALTH CARE":"healthcare",
                        "GUN CONTROL":"guns",
                        "IMMIGRATION":"immigration"}
    this.setState({ newsList : [] });
    this.loadNews(categories[this.props.active]);
  }

  componentWillUpdate() {
    const categories = {"ABORTION":"abortion",
                        "PRESIDENT TRUMP":"trump",
                        "HEALTH CARE":"healthcare",
                        "GUN CONTROL":"guns",
                        "IMMIGRATION":"immigration"}
    this.loadNews(categories[this.props.active]);
  }

  pushToNewsCards(newsList) {
    this.setState({ newsList: newsList });
  }

  loadNews(category) {
    var newsList = [];
      $.getJSON("https://api.myjson.com/bins/yvwg4", (articles) => {
        var articlesByCurrentCategory = articles[category];
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
              date: currentArticle.liberal.date
            },
            conservative: {
              source: {
                id: currentArticle.conservative.source.id,
                name: currentArticle.conservative.source.name
              },
              title: currentArticle.conservative.title,
              description: currentArticle.conservative.description,
              articleURL: currentArticle.conservative.url,
              imageURL: currentArticle.conservative.urlToImage,
              date: currentArticle.conservative.date
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
            liberalSource={article.liberal.source.name}
            liberalArticleURL={article.liberal.articleURL}
            liberalDescription={article.liberal.description}
            conservativeTitle={article.conservative.title}
            conservativeDate={article.conservative.date}
            conservativeAuthor={article.conservative.author}
            conservativeImageURL={article.conservative.imageURL}
            conservativeDescription={article.conservative.description}
            conservativeSource={article.conservative.source.name}
            conservativeArticleURL={article.conservative.articleURL}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    active: state.categoryBarReducer.active
  }
}

export default connect(mapStateToProps, {
  setActiveCategory
})(ArticlePairGenerator);
