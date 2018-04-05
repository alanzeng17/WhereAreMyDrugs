import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import IllnessSelect from './IllnessSelect.js'

var flag1 = false;
var globalState = null;
var illnessVal = null;
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
    globalState = this;
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
              <button class="cool" onClick={() => transition(1)}> Start </button>          
            </div>
          </div>
        </div>
      </div>
      );
    }
    else if (this.state.value == 1){
      ret1 = (
        <div class="outer">
          <div class="middle">
            <div class="inner">
              <div class="ill">
                <h2 class='label'> Please choose your illness: </h2>
                  <div>
                    <IllnessSelect />
                  </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else if (this.state.value == 2) {
      ret1 = (        
      <div class="outer">
        <div class="middle">
          <div class="inner">
            <p>{illnessVal}</p>
          </div>
        </div>
      </div>
      );
    }
    return (ret1)
  }
}

export const transition = (value)=>{
  if (globalState != null)
    globalState.setState({value: value});
  else 
    alert("ERROR");
}

export const getIllnessVal = (value)=>{
  illnessVal = value;
}


export default App;
