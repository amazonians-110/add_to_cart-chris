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
      if(event.target.className === 'list' || event.target.className === 'exitButton')
      this.setState({ addToListModalShow: false });

  }

  render() {
    const style = { display: this.state.addToListModalShow ? 'block' : 'none' };
    return (
      <div className="addToList">

        <div className="list" style={style} onClick={this.addToListModalHide} >
           <div className="list-header">
           <span className="list-header-text">Add to your list</span>
           <button type="button" value="x" className="exitButton" onClick={this.addToListModalHide}><b>x</b></button>
          </div>

          <div className="list-content">
            <div className="listOwner">
            <span className="ownerText">This list is for</span> 

        
            <select className="ownerType">
                <option>You</option>
                <option>Someone else</option>
            </select>
            </div>
          <div className="choose">
            <span className="chooseText">Choose a list type</span>
            <div className="list-types">
              <div className="shopping-list">
                <div className="shopping-list-inner">
                <input type="radio" name="radio" />
                <h3 className="shopping-list-text">Shopping List</h3><br></br>
                <div className="shopping-list-text2">
                <span>Add items you want to shop for</span>
                </div>
              </div>
              </div>
              <div className="wish-list">
              <div className="wish-list-inner">
                <input type="radio" name="radio"/>
                <h3 className="wish-list-text">Wish List</h3><br></br>
                <div className="wish-list-text2">
                <span>Let people know what gifts you'd like.</span>
                </div>
              </div> 
              </div> 
              <div className="idea-list">
              <div className="idea-list-inner">
                <input type="radio" name="radio" />
                <h3 className="idea-list-text">Idea List</h3><br></br>
                <div className="idea-list-text2">
                <span>Make a list for the Amazon community</span>
                </div>
              </div> 
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
              <span className="privacy-text">Privacy</span><br></br>
                <button type="button" value="Private" className="private">Private</button>
                <button type="button" value="Public" className="public">Public</button>
                <span className="personal">Only you can see this list.</span>
              </div>
            </div>
         </div>
         <div className="list-footer">
            <button type="button" className="cancel">Cancel</button>
            <button type="button" className="createList">Create List</button>
        </div>
        </div>
        <input type="submit" value="Add To List" className="addButton" onClick={this.addToListModalShow} />
    </div>
    );
  }
}

export default AddToListModal;
