import React, { Component } from "react";
import "./App.css";
import ConvertTemp from './components/ConvertTemp'
class App extends Component {
  render() {
    return (
      <>
        <h2>Conversão de temperatura </h2>
        <ConvertTemp></ConvertTemp>      
      </>
    );
  }
}

export default App;
