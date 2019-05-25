import React from 'react';
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";


const LoginPage = () => (
  <div className="container" id='login-page'>
    <div className="jumbotron">
        <h2> Log In </h2>
          <form>
            Email:<br />
            <input type="text" name="Email" />
            <br />
            Password:<br />
            <input type="password" name="Password"  />
            <br /><br />
            <button type="button" class="btn btn-primary btn-lg" id='log-in-actual'>Log In</button>
            <button id='create-an-account'> Create an Account</button>
            <button id='log-in-facebook'> Log in with Facebook </button>
            <LogInWithGoogle />
            <br />
            <button type="button" class="btn btn-info btn-lg" id='log-off-actual'>Log Off</button>
          </form>

    </div>
  </div>
);

const LogInWithGoogle = ( {startLogin} ) => (
  <button onClick={startLogin} id='login-google'> Log in with Google </button>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

//export default connect(undefined, mapDispatchToProps)(LoginPage);
export default withRouter(LoginPage);
