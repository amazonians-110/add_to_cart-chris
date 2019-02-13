import React from 'react';
import './Buttons.css';

const Buttons = () => (
  <div className="buttons">
    <span className="qty">
      {'Qty:'}
      {' '}
    </span>
    <select id="quantity">
      <option>1 </option>
      <option>2 </option>
      <option>3 </option>
    </select>

    <div className="cart">
      <button className="addToCart" type="button">
        <img className="cartimage" src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/amazoncart3.png" alt="cart" />
        {' Add To Cart'}
      </button>
    </div>   

    <div className="buyNow">
      <button className="buy" type="button">
        <img className="buyimage" src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/amazonbuynow.png" alt="buynow" />
        {' Buy Now'}
      </button>
    </div>
  </div>
);


export default Buttons;
