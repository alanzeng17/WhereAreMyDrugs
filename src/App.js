import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var flag1 = false;
var val = 0;
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
    if (this.state.value == 1) {
      ret1 = (
        <div class="outer">
          <div class="middle">
            <div class="inner">
              <div class="ill">
                <h2 class='label'> Please choose your illness: </h2>
                <select>
                  <option value="d">--Select--</option>
                  <option value="1"> Meningococcal Meningitis </option>
                  <option value="2"> Influenza </option>
                  <option value="3"> Food Borne Illness </option>
                  <option value="4"> HIV </option>
                  <option value="5"> Mono </option>
                  <option value="6"> Strep </option>
                  <option value="7"> HPV </option>
                  <option value="8"> Pinkeye </option>
                  <option value="9"> MRSA </option>
                  <option value="10"> Pinkeye </option>
                  <option value="11"> UTIs </option>
                  <option value="12"> Athletes Foot </option>
                  <option value="13"> Allergies </option>
                </select>
                <hr></hr>
                <button class='cool' onClick={() => ak(this)}> Continue </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (this.state.value == 2) {
      ret1 = (
        <div class="outer">
          <div class="middle">
            <div class="inner">
              <div class="insurance">
                <h2 class='label'> Choose the Insurance Are You Under: </h2>
                <select>
                  <option value="d">--Select--</option>
                  <option value="1"> Blue Cross </option>
                  <option value="2"> Humana </option>
                  <option value="3"> Aetna</option>
                  <option value="4"> Cigna </option>
                </select>
                <hr></hr>
                <button class='cool' onClick={() => ak(this)}> Continue </button>
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
  val += 1;
  if (val == 3){

    val = 2;
  }
  s.setState({value: val})
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
