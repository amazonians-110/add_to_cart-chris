import React from 'react';
import './Buttons.css';
import axios from 'axios';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: [],
    };
  }

  componentDidMount() {
    const { quantity } = this.state;
    const urlArray = document.URL.split('/');
    const productID = Number(urlArray[urlArray.length - 1]);
    axios.get(`http://127.0.0.1:3002/api/product/${productID}`)
      .then((res) => {
        for (let i = 1; i < res.data[0].quantity + 1; i += 1) {
          quantity.push(<option>{i}</option>);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { quantity } = this.state;
    return (
      <div className="buttons">
        <span className="qty">
          {'Qty:'}
          {' '}
        </span>
        <select id="quantity">
          { quantity }
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
  }
}


export default Buttons;
