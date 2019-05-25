import React from 'react'
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom"

const JumbotronAbout = () => (

    <div className="container" id='jumbotron-about'>
      <div className="jumbotron">

        <h1> About </h1>
        <p> ResearchCollabs is a web research platform where professors and researchers can post research problems, and
        anyone with an Internet connection can participate. The research lead must specify academic prerequisites
        along with resources to learn them, as well as resources to consult to tackle the problem.
        </p>
        <ul>
        Goals:
        <li> Enable anyone to participate in research, thus allowing them to boost their research experience.</li>
        <li> Accelerate research progress by increasing the research labor force. </li>
        <li> Encourage people to delve and work on fields they find interesting. </li>
        <li> Give bored people meaningful tasks to undertake that can positively impact the world. </li>
        </ul>

      </div>
      <Link to="/about">About</Link> <br />
      <a href="#">Contact</a>
    </div>

)

export default withRouter(JumbotronAbout)
