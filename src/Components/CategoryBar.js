import React, { Component } from 'react';
import CategoryButton from './CategoryButton';
import '../css/CategoryBar.css';

class CategoryBar extends Component {

  setCategory = (category) => {
    this.setState({
      active: category
    })
  }

  render() {
    return (
      <div className="categoryBar">
        <CategoryButton
          category='PRESIDENT TRUMP'
        />
        <CategoryButton
          category='HEALTH CARE'
        />
        <CategoryButton
          category='GUN CONTROL'
        />
        <CategoryButton
          category='IMMIGRATION'
        />
        <CategoryButton
          category='ABORTION'
        />
      </div>
    );
  }
}

export default CategoryBar;
