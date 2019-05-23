import React, { Component} from "react"
import {Link, BrowserRouter} from 'react-router-dom'


//import "./App.css";

import Button from './Components/Button'


// This is the homepage! It contains the components for the homepage.
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <h1 className="logo"> <Link to="/"> ResearchCollabs </Link> </h1>

        </div>
      </BrowserRouter>
    )
  }
}

export default App
