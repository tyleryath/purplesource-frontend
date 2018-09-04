import React, { Component } from 'react';
import './css/App.css';
import CategoryBar from './Components/CategoryBar';
import ArticlePairGenerator from './Components/ArticlePairGenerator';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';
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
            <p>HEALTH CARE</p>
          </div>
          <div className="newsCardsContainer">
            <ArticlePairGenerator />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
