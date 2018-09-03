import React, { Component } from 'react';
import './css/App.css';
import CardPair from './Components/CardPair.js'
import CategoryButton from './Components/CategoryButton.js';
import { updateTitle } from './Actions/UpdateNewsCard';

class App extends Component {
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
            <p>PRESIDENT TRUMP</p>
          </div>
          <div className="newsCardsContainer">
            <CardPair />
            <CardPair />
            <CardPair />
            <CardPair />
            <CardPair />
            <CardPair />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
