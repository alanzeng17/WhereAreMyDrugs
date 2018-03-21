import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var flag1 = false;
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="startComp">
          <Start />
        </div>
      </div>
    );
  }
}

class Start extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0,
    };
  }
  
  render() {
    var ret1;
    if (this.state.value == 0){
      ret1 = (      
      <div class="start">
        <div class="outer">
          <div class="middle">
            <div class="inner">
              <h1>ApotheCare</h1>
              <h4>Find the appropriate medicine for you!</h4>
              <button class="cool" onClick={() => ak(this)}> Start </button>          
            </div>
          </div>
        </div>
      </div>
      );
    }
    else {
      ret1 = (
        <div class="outer">
          <div class="middle">
            <div class="inner">
              <div class="ill">
                <h2 class='label'> Please choose your illness: </h2>
                <select>
                  <option value="d">--Select--</option>
                  <option value="1"> Flu </option>
                </select>
                <hr></hr>
                <button class='cool'> Continue </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (ret1)
  }
}

class Illness extends React.Component {
  render() {
    return (
      <p>wooorking</p>
    );
  }
}

function ak(s) {
  //do something
  flag1 = true;
  s.setState({value: 1})
  /*           <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">Dropdown</button>
            <div id="myDropdown" class="dropdown-content">
              <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()">
                <a href="#at">At</a>
              </input>
            </div>
          </div>*/
  
}

export default App;
