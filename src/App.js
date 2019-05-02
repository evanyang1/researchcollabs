import React, { Component} from "react";
//import "./App.css";

import Button from './Components/Button'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> ResearchCollabs </h1>
        <Button name="Login" />
      </div>
    );
  }
}

export default App;
