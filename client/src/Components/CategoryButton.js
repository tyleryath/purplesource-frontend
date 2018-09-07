import React, { Component } from 'react';
import '../css/CategoryButton.css';
import { connect } from 'react-redux';
import { setActiveCategory } from '../actions/SetActiveCategory';

class CategoryButton extends Component {

  render() {
    return (
      <button
        className={this.props.active === this.props.category ? 'active' : 'categoryButton'}
        onClick={() => this.props.setActiveCategory(this.props.category)}
      >
        <p className="buttonText">{ this.props.category }</p>
      </button>
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
})(CategoryButton);
