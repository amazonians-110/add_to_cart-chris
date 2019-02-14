import React from 'react';
import './AddToListModal.css';

class AddToListModal extends React.Component {
  constructor(props) {
    super(props);
    this.addToListModalShow = this.addToListModalShow.bind(this);
    this.addToListModalHide = this.addToListModalHide.bind(this);
    this.state = {
      addToListModalShow: false,
    };
  }

  addToListModalShow() {
    this.setState({ addToListModalShow: true });
  }

  addToListModalHide(event) {
    if (event.target.className === 'list') {
      this.setState({ addToListModalShow: false });
    }
  }

  render() {
    const style = { display: this.state.addToListModalShow ? 'block' : 'none' };
    return (
      <div className="addToList">

        <div className="list" style={style} onClick={this.addToListModalHide} >
           <div className="list-header">
           Add to your list
           <button type="button" value="x" className="exitButton">X</button>
          </div>
          <div className="list-content">
            <div className="listOwner">
            <span className="ownerText">This list is for</span> 
            <select className="owners">
                <option>You</option>
                <option>Someone else</option>
            </select>
            </div>
            <div className="list-types">
              <div className="shopping-list">
                <div className="shopping-list-inner">
                <input type="radio" />
                <h3 className="shopping-list-text">Shopping List</h3><br></br>
                <span className="shopping-list-text2">Add items you want to shop for</span>
              </div>
              </div>
              <div className="wish-list">
              <div className="wish-list-inner">
                <input type="radio" />
                <h3 className="wish-list-text">Wish List</h3><br></br>
                <span className="wish-list-text2">Let people know what gifts you'd like.</span>
              </div> 
              </div> 
              <div className="idea-list">
              <div className="idea-list-inner">
                <input type="radio" />
                <h3 className="idea-list-text">Idea List</h3><br></br>
                <span className="idea-list-text2">Make a list for the Amazon community</span>
              </div> 
              </div>
            </div>

            <div className="list-names-section">
              <div className="list-name">
              <span className="list-name-text">List name</span>
              <input type="text" value="Shopping List" className="list-name-input"/>
              <input type="checkbox"/>Keep purchased items on your list
              </div>
              <div className="privacy">
              <span className="privacy-text">Privacy</span>
              </div>
            </div>
         </div>
        </div>
        <input type="submit" value="Add To List" className="addButton" onClick={this.addToListModalShow} />
    </div>
    );
  }
}

export default AddToListModal;
