import React from 'react';
import CSSModules from 'react-css-modules';
import './App.css';
import DetailsBox from './DetailsBox.jsx';
import Dates from './Dates.jsx';
import Buttons from './Buttons.jsx';
import DeliverModal from './DeliverModal.jsx';
import AddToListModal from './AddToListModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    this.child = React.createRef();
    this.clickOutside = this.clickOutside.bind(this);
  }

  clickOutside(event) {
    if (event.target.className === 'body' || event.target.className === 'container') {
      this.child.current.setState({ clicked: false });
    }
  }

  render() {
    return (
      <div className="body" onClick ={this.clickOutside}>
        <div className="container">
          <div className="price"> $19.99 </div>
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
