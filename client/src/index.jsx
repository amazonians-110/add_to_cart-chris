import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import './styles.css';


class App extends React.Component{
  constructor(props){
   super(props);
   this.detailsMouseEnter = this.detailsMouseEnter.bind(this);
   this.detailsMouseLeave = this.detailsMouseLeave.bind(this);
   this.showDetails = this.showDetails.bind(this);
   this.hideDetails = this.hideDetails.bind(this);
   this.hideBorder = this.hideBorder.bind(this);
   this.state = {
     details : false, 
     detailWindow : false,
     clicked : true
   }
}

detailsMouseEnter(){
  this.setState({details: true});
}
detailsMouseLeave(){
  this.setState({details: false});
} 
showDetails(){
  this.setState({detailWindow : true});
  this.setState({clicked : true});
}
hideBorder(){
  this.setState({clicked : false});
}
hideDetails(event){
  this.setState({detailWindow : false});   
}
 render(){
    var style = {color : this.state.details ? '#B12704' : '#0066c0'};
    var style1 = {border: this.state.clicked ? '1px  solid orange' : '1px solid white', 
                  boxShadow : this.state.clicked ? '0 0 3px #ff8000' : '', float: 'right'};
    var style2 = { display : this.state.detailWindow ? 'block': 'none' };              
  
    return(
     
    <div className = 'container' > 
    <p className = 'price'>$19.99</p>
    <div className = 'modal' onClick = {this.hideBorder} style = {style2}>
        <p> <b> Get free shipping. </b>
        <button onClick = {this.hideDetails} style = {style1}>X</button><br></br>
          Free 5-8 business-day shipping within the U.S. when you order $25 of eligible items sold or fulfilled by Amazon.
        Or get 4-5 business-day shipping on this item for $5.99. (Prices may vary for AK and HI.)
        <a href = '#'>
        Learn more about free shipping</a>
        </p>
        <div className = 'triangle'> </div>
      </div>
    <p>& <b>FREE Shipping</b> on orders over $25 shipped by Amazon. 
    <span onMouseEnter = {this.detailsMouseEnter} 
    onMouseLeave = {this.detailsMouseLeave} style = {style} onClick = {this.showDetails}> Details</span> </p>
    </div>

    )
 }

}

{/* class ExitButton extends React.Component{
  constructor(props){
    super(props){
      this.state = {
        clicked : true
      }
      render(){
        var style = {border : this.state.clicked ? '' : 'orange'}
        return (
          <input type = 'submit' value = 'x'></input>
        )
      }
    }
  }
} */}


ReactDOM.render(<App />, document.getElementById('app'));
