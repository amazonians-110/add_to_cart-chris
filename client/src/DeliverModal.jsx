import React from 'react';
import './DeliverModal.css';

class DeliverModal extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.state = {
      modalShow: false,
    };
  }

  showModal() {
    this.setState({ modalShow: true });
  }

  hideModal(event) {
    if (event.target.className === 'delivery') {
      this.setState({ modalShow: false });
    }
  }

  render() {
    const { modalShow } = this.state;
    const style = { display: modalShow ? 'block' : 'none' };

    return (
      <div className="deliverTo">
        <div className="delivery" style={style} onClick={this.hideModal}>
          <div className="delivery-header">
            <span className="chooseLocation"><h3>Choose your location</h3></span>
          </div>
          <div className="delivery-content">
            <span>Delivery options and delivery speeds may vary for different locations</span>
            <div className="delivery-content-orangebox">
              <span>
                <span className="myName">
                 christopher tso- chicago
                 {' '}
                - 60632
                </span>  
                <br />
                <div className="address">
                  <span >Default address</span>
                </div>
              </span>
            </div>
            <span className="addressBook">Manage address book</span>
            <br />
            <p className="UsZip">or enter a US zip code</p>
            <input type="text" className="textInput" /> 
            {' '}
            <input type="submit" value="Apply" className="textSubmit" />
            <p className="or">or</p>
            <select className="options">
              <option>Ship outside the US</option>
            </select>
          </div>
          <div className="delivery-footer">
            <button type="button" className="done">Done</button>
          </div>
        </div>
        <div className="deliverToZipCode">
          <div className="locator">
            <img className="locatorimage" src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/Location.png" alt="locator" />
          </div>
          <div className="zipCodeText">
            <span className="zipCode" onClick={this.showModal}>
              {' '}
              {'Deliver to Chicago 60632'}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default DeliverModal;
