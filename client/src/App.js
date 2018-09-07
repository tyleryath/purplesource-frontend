import React, { Component } from 'react';
import './css/App.css';
import CategoryBar from './Components/CategoryBar';
import ArticlePairGenerator from './Components/ArticlePairGenerator';
import { connect } from 'react-redux';
import { setActiveCategory } from './actions/SetActiveCategory';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="body">
          <div className="headerContainer">
            <p>purplesource</p>
          </div>
          <div className="categorySelectorContainer">
            <CategoryBar />
          </div>
          <div className="categoryTitleContainer">
            <p>{this.props.active}</p>
          </div>
          <div className="newsCardsContainer">
            <ArticlePairGenerator />
          </div>
        </div>
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
})(App);
