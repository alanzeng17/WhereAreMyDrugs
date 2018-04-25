import React, { Component } from 'react';
import './App.css';
import './App.js';
import {transition,getIllnessVal} from './App.js'
class IllnessSelect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'xxx'
      };
      this.handleChange = this.handleChange.bind(this);
      this.handlePrint = this.handlePrint.bind(this);
    }

     handlePrint() {
      if (this.state.value != "xxx") {
        transition(2);
        getIllnessVal(this.state.value);
      }
      else {
        alert("Please select an illness.");
      }
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }
  
    render() {
      return (
        <div>
          <div>
            <select class="dropdown" onChange={this.handleChange}>
              <option value="xxx">-Select-</option>
              <option value="flu">Flu</option>
              <option value="strep">Strep Throat</option>
              <option value="mono">Mono</option>
              <option value ="pink">Pink Eye</option>
              <option value ="FBI">Food Bourne Illness</option>
          </select>
          </div>
          <hr></hr>
          <button class='cool' onClick={this.handlePrint}> Continue </button>
        </div>
      );
    }
  }
  
  export default IllnessSelect;