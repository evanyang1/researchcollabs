import React, { Component} from "react"
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'


//import "./App.css";

import Button from './Components/Button'

import Logo from './Components/Logo';
import Login from './Components/Login';
import ResearchAreaLink from './Components/ResearchAreaLink';
import Jumbotron from './Components/Jumbotron'
import JumbotronAbout from './Pages/AboutPage'
import ResearchArea from './Pages/ResearchArea'
import LoginPage from './Pages/LoginPage'

// This is the homepage! It contains the components for the homepage.
class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Logo />
          <ResearchAreaLink />
          <Login />
          <Switch>
            <Route exact path="/" component={Jumbotron} />
            <Route path="/about" component={JumbotronAbout} />
            <Route path="/research-area" component={ResearchArea} />
            <Route path="/login" component={LoginPage} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App
