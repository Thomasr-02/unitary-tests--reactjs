import React, { Component } from 'react'
import './ConvertTemp.less'
import './ConvertTemp.css'
export default class ConvertTemp extends Component{
    constructor(){
        super();
        this.state={
            tempA:0,
            unitA:'Celsius',
            unitB:'Celsius'
        }
    }
    
    converterTemperature() {
        if (this.state.tempA) {
            var tempB = document.getElementById("tempB");
            // Celsius para Fahrenheit ou Kelvin
            if (this.state.unitA === "Celsius") {
                if (this.state.unitB === "Fahrenheit") {
                    tempB.value = this.celsiusToFahrenheit(this.state.tempA);
                }
                else if (this.state.unitB === "Kelvin") {
                    tempB.value = this.celsiusToKelvin(this.state.tempA);
                }
                else {
                    tempB.value = this.state.tempA;
                }
            }
            // Fahrenheit para Celsius ou Kelvin
            if (this.state.unitA === "Fahrenheit") {
                if (this.state.unitB === "Celsius") {
                    tempB.value = this.fahrenheitToCelsius(this.state.tempA);
                }
                else if (this.state.unitB === "Kelvin") {
                    tempB.value = this.fahrenheitToKelvin(this.state.tempA);
                }
                else {
                    tempB.value = this.state.tempA;
                }
            }
            // Kelvin para Celsius ou Fahrenheit
            if (this.state.unitA === "Kelvin") {
                if (this.state.unitB === "Celsius") {
                    tempB.value = this.kelvinToCelsius(this.state.tempA);
                }
                else if (this.state.unitB === "Fahrenheit") {
                    tempB.value = this.kelvinToFahrenheit(this.state.tempA);
                }
                else {
                    tempB.value = this.state.tempA;
                }
            }
        }
    }

    celsiusToFahrenheit(value) {
        return (value * 1.8 + 32) ;
    }
    celsiusToKelvin(value) {
        return (value + 273.15) ;
    }
    fahrenheitToCelsius(value) {
        return (value - 32) * 5 / 9;
    }
    fahrenheitToKelvin(value) {
        return (value + 459.67) * 5 / 9;
    }
    kelvinToCelsius(value) {
        return value - 273.15;
    }
    kelvinToFahrenheit(value) {
        return value * 1.8 - 459.67;
    }

    componentDidUpdate(){
        this.converterTemperature();

    }
    render(){
        return(
            <div id="container">
                <div id="blockA">
                    <input type="number" id="tempA" name="tempA" onChange={(e) => this.setState({ tempA: !isNaN(e.target.value) ? parseFloat(e.target.value) : 0 })}  />
                    <select id="unitA" name="unitA" onChange={(e) => this.setState({ unitA: e.target.value })}>
                        <option value="Celsius">Grau Celsius</option>
                        <option value="Fahrenheit">Grau Fahrenheit</option>
                        <option value="Kelvin">Kelvin</option>
                    </select>
                </div>
                <span name="unit2" id="equal">=</span>
                <div id="blockB">
                    <input type="number" id="tempB" disabled="disabled" name="tempB" />
                    <select id="unitB" name="unitB" onChange={(e) => this.setState({ unitB: e.target.value })}>
                        <option value="Celsius">Grau Celsius</option>
                        <option value="Fahrenheit">Grau Fahrenheit</option>
                        <option value="Kelvin">Kelvin</option>
                    </select>
                </div>
        </div>
    
        )
    }
}