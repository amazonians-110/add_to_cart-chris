import React from 'react';
import CSSModules from 'react-css-modules';
import './App.css';
import axios from 'axios';
import DetailsBox from './DetailsBox.jsx';
import Dates from './Dates.jsx';
import Buttons from './Buttons.jsx';
import DeliverModal from './DeliverModal.jsx';
import AddToListModal from './AddToListModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: ''
    };
    this.child = React.createRef();
    this.clickOutside = this.clickOutside.bind(this);
  }


  componentDidMount() {
    const urlArray = document.URL.split('/');
    const productID = Number(urlArray[urlArray.length - 2]);
    axios.get(`/product/${productID}/item`)
      .then((res) => {
        this.setState({ price: res.data[0].price });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  clickOutside(event) {
    if (event.target.className === 'body' || event.target.className === 'container') {
      this.child.current.setState({ clicked: false });
    }
  }

  render() {
    return (
      <div className="body" onClick={this.clickOutside}>
        <div className="navbar">

          <div className="navbar1">
            <div className="threeStripes">
              <img className="threeStripesImage" src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/threestripes.png" alt="menu"/>
            </div> 
            <div className="amazonLogo">
              <img className="amazonLogoImage" src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/amazonlogo.png" alt="logo"/>
            </div>

          <div className="searchBar">
            <select className="searchSelect">
              <option>All</option>  
            </select> 
            <input className="searchInput" type = "text" />
            <input className="searchSubmit" type = "image" src = "https://s3.us-east-2.amazonaws.com/chrisfakephotos/amazonmagglass2.png" height= "5px" width="5px"></input>
          </div>

            <div className="womenOwned">
              <img className="womenOwnedImage"  src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2019/img/Small_Business_Empowerment/XCM_Manual_1158428_swm_February_Editorial_400x39_Small_Business_Empowerment_1158428_us_storefronts_feb_swms_400x39_1548366110_jpg._CB455105052_.jpg" />
            </div>
          </div> 


          <div className="navbar2">
            <div className="locator2">
              <img className="locatorImage2"  src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/locator3.png" />
              <div className="locator2-text">
                <span>Deliver to chris</span> <span className="chicagoAddress">Chicago 60632</span>
              </div>
            </div>
            <div className="barOptions">
              <div className ="pickupLocation">
                <span className="yourPickup">Your Pickup Location</span>
              </div>
              <div className ="history">
                <span className="browsingHistory">Browsing History</span>
              </div>
              <div className ="myAmazon">
                <span className="myAmazon-text">chris's Amazon.com</span>
              </div>
              <div className ="todaysDeals">
                <span className="todaysDeals-text">Today's Deals</span>
              </div>
            </div>

            <div className="personalName">
              <div className="language">
                <span className="language-text">EN</span>
                <img className="globe" src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/globe2.png" />
              </div> 
              <div className="myName2">
                <div className="myName-text2">Hello, christopher</div>
                <div className="accountsandlists">Account & Lists</div>
              </div> 
              <div className="orders">
                <span className="orders-text">Orders</span>
              </div>
              <div className="prime">
                <span className="prime-text">Try Prime</span>
              </div>
              <div className="cart2">
                <img className="cart-image" src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/cart.png" />
                <span className="cart-text">Cart</span>
              </div>
            </div> 

          </div>

      </div>  
        <div className="container">
          <div className="price"> ${this.state.price} </div>
          <div className="freeshipping">
            &
            {' '}
            <b>FREE Shipping</b>
            {' '}
            on orders over $25 shipped by Amazon.
            {' '}
            <DetailsBox ref={this.child} />
            <Dates />
            <Buttons />
            <DeliverModal />
            <AddToListModal />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
