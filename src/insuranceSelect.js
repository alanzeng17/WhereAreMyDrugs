import React, { Component } from 'react';
import './App.css';
import './App.js';
import {transition,getInsuranceVal} from './App.js'

class InsuranceSelect extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        value: '-Select Value-',
        flag1: 'xxx'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handlePrint = this.handlePrint.bind(this);
}
    handlePrint() {
        //TODO: handle "x" cases, make the transition invalid
        if (this.state.value != 'xxx') {
            if(this.state.flag1 === 'yes')
                transition(4);//Enter prescription name
            else
                transition(3);
            //transition(3);//remove this later, switch numbers.
            getInsuranceVal(this.state.value);
        }
        else {
            alert("Please select an option.");
        }
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    handleChange2(e) {
        this.setState({ flag1: e.target.value });
    }

    render() {
        var ret1=(
            <div>
            <div>
                <select class="dropdown" onChange={this.handleChange}>
                    <option value="xxx">-Select Insurance-</option>
                    <option value="Blue Cross Blue Shield">Blue Cross Blue Shield</option>
                    <option value="Aetna">Aetna</option>
                    <option value="Cigna">Cigna</option>
                </select>
                <h2>Do you have a Prescription?</h2>
                <select class="dropdown" onChange={this.handleChange2}>
                    <option value ='xxx'>-Select-</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <hr></hr>
            <button class='cool' onClick={this.handlePrint}> Continue </button>
            </div>);

        return (ret1);
    }
}

export default InsuranceSelect;