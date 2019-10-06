import React, { Component} from "react"
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'

// GraphQL stuff
import { ApolloProvider } from "react-apollo"
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import './Styles/styles.scss';

import Button from './Components/Button'

import Logo from './Components/Logo';
import Login from './Components/Login';
import ResearchAreaLink from './Components/ResearchAreaLink';
import Jumbotron from './Components/Jumbotron'
import JumbotronAbout from './Pages/AboutPage'
import ResearchArea from './Pages/ResearchArea'
import LoginPage from './Pages/LoginPage'

const EntryQuery = gql`
{
  entries {
    id
    title
  }
}
`


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

export default graphql(EntryQuery)(App)
