import React, { Component } from 'react';
import './App.css';
import './App.js';
import {transition,getInsuranceVal} from './App.js'

class InsuranceSelect extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        value: '-Select Value-',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePrint = this.handlePrint.bind(this);


}

    handlePrint() {
        if (this.state.value) {
            console.log(this.state.value);
            transition(3);
            getInsuranceVal(this.state.vaue);
        }
        else {
            alert("failure");
        }
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
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
            </div>
            <hr></hr>
            <button class='cool' onClick={this.handlePrint}> Continue </button>
            </div>);

        return (ret1);
    }
}

export default InsuranceSelect;