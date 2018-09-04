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
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">purplesource</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  about
                </NavItem>
                <NavItem eventKey={2} href="#">
                  contact
                </NavItem>
              </Nav>
            </Navbar.Collapse>
            </Navbar>
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
