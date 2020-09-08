/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// eslint-disable-next-line react/prefer-stateless-function
class Flat extends Component {
  handleClick = () => {
    const { flat, selectFlat } = this.props;
    if (selectFlat) {
      selectFlat(flat);
    }
  }

  render () {
    const {
      name, imageUrl, price, priceCurrency
    } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})` }} onClick={this.handleClick}>
        <div className="card-category">
          { price }
          { priceCurrency }
        </div>
        <div className="card-description">
          <h2>{ name }</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
