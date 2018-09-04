import React, { Component } from 'react';
import '../css/CategoryButton.css';

class CategoryButton extends Component {
  render() {
    return (
      <button
        className="categoryButton"
        onClick={() => console.log(this.props.category)}
      >
        <p className="buttonText">{ this.props.category }</p>
      </button>
    );
  }
}

export default CategoryButton;
