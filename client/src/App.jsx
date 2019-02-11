import React from 'react';
import CSSModules from 'react-css-modules';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="container">
        <div className="price"> $19.99 </div>
        <div className="freeshipping">
           &
          {' '}
          <b>FREE Shipping</b>
          {' '}
          on orders over $25 shipped by Amazon.
          {' '}
          <span className="details">Details</span>
        </div>
      </div>
    );
  }
}

export default App;
