import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import IllnessSelect from './IllnessSelect.js'
import InsuranceSelect from './insuranceSelect';

var flag1 = false;
var globalState = null;
var illnessVal = null;
var insuranceVal = null;
//Run the main component
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

//Main componenet
class Start extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0,
      flag1: 'no'
    };
    globalState = this;
  }
  
  render() {
    var ret1;
    //Start Screen
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
    //Select Illness Screen
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
            <div class = "ill">
              <h2 class='label'> Please choose your insurance: </h2>
                <InsuranceSelect />
              </div>
          </div>
        </div>
      </div>
      );
    }
    //no presciption, display options that are covered
    ///TODO: ad llookup button
    else if(this.state.value == 3) {
      var info = "blank";
      if (illnessVal === 'flu') {
        //set info in here?
        //or could just hardcode lmfao
        info = "tamaflu";
      }
      else if(illnessVal === 'strep') {
        //alert("yo");
      }//ect.ect.
      ret1 = (
        <div class="outer">
        <div class="middle">
        <div class="inner">
          <div class='ill'>
            <h2> Here are your availible options:</h2>
            <hr></hr>
            <p>{info}</p>
            <hr></hr>
            <button class="cool" onclick={() => noWork()}>Lookup Medicine</button>
          </div>
        </div>
        </div>
        </div>
      )
    }
    //yes prescription, check to see if it's covered
    else if (this.state.value === 4) {
      //search bar
      //display result
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
export const noWork = () => {
  alert("Sorry, this functionality is coming soon! Please check back later.");
}

export const getIllnessVal = (value)=>{
  illnessVal = value;
}
export const getInsuranceVal = (value) => {
  insuranceVal = value;
}


export default App;
