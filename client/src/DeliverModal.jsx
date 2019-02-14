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
    console.log(event.target);
    if (event.target.className === 'delivery') {
      this.setState({ modalShow: false });
    }
  }

  render() {
    const style = { display: this.state.modalShow ? 'block' : 'none' };

    return (
      <div className="deliverTo">

        <div className="delivery" style={style} onClick={this.hideModal}>
          <div className="delivery-header">
            <span>Choose your location</span>
          </div>

          <div className="delivery-content">
            <span>Delivery options and delivery speeds may vary for different locations</span>
            <div className="delivery-content-orangebox">
              <span>
                <b>christopher tso- chicago</b>
                {' '}
                - 60632
                <br />
                <span className="address">Default address</span>
              </span>
            </div>
            <span className="addressBook">Manage address book</span>
            <br />
            {/* <div className="middleZipCode">
            <span className="enter">or enter a US zip code</span>
            <div className="middle"></div>
             </div> */}
            <h5>or enter a US zip code</h5>
            <input type="text" className="textInput"/> <input type="submit" value="Apply" className="textSubmit"></input>
            <h5 className="or">or</h5>
            <select className="options">
                <option>Ship outside the US</option>
            </select>
          </div>

          <div className="delivery-footer">
            <button type="button" className="done">Done</button>
          </div>

        </div>


        <div className="locator">
          <img className="locatorimage" src="https://s3.us-east-2.amazonaws.com/chrisfakephotos/Location.png" alt="locator" />
        </div>

        <div className="zipCodeText">
          <span className="zipCode" onClick={this.showModal}>
                  {' '}
                  {'Deliver to christopher - Chicago 60632'}
                </span>
        </div>

      </div>
    );
  }
}

export default DeliverModal;
