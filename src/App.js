import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display:false 
    }
  }
  display=()=> {
    this.setState({
      display:!this.state.display
    })
  }
  render() {
    return (<div>
      <ul className="list">
        <li style ={{}}> home</li>
        <li onMouseEnter = {this.display}  onMouseLeave={()=>{this.setState({display:!this.state.display})}} >service
         <ul className={this.state.display ?"display":"service"} >
            <li> for entrepreneurs</li>
            <li> for student</li>
            <li> for hobbyists</li>
          </ul>
        </li>
        <li>contact</li>
      </ul>

    </div>);
  }
}

export default App;
