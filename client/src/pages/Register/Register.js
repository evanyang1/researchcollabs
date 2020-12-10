import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";

export default function Register() {
  return (
    <main>
      <section className="header">
        <h1 className="is-size-1">Research Collabs</h1>
        <Link to="/">
            <Button className="is-primary is-large">Login</Button>
        </Link>
      </section>
      <section className="center">
        <h1 className="is-size-2">Create a New Account</h1>
        <label>Email</label>
        <div className="control">
          <input type="text" />
        </div>
        <label>Password</label>
        <div className="control">
          <input type="password" />
        </div>
        <label>Confirm Password</label>
        <div className="control">
          <input type="password" />
        </div>
        <Button className="is-link is-rounded">Create Account</Button>
      </section>
    </main>
  );
}
