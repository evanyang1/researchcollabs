import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink, withRouter  } from "react-router-dom"

// Middle thing.
const Jumbotron = () => (

      <div className="container" id='homepage-display'>
        <div className="jumbotron">
          <h1>ResearchCollabs</h1>
          <p>ResearchCollabs is the place where people all over the world collaborate on academic research. The only requirement to participate is an Internet Connection.
            Research papers get peer reviewed just like any other to maintain the rigor of academic research.
          </p>
        </div>
        <Link to="/about">About</Link> <br />
        <a href="#">Contact</a>
      </div>

)
export default withRouter(Jumbotron)
