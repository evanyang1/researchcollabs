import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";

export default function Landing() {
  return (
    <main>
      <section className="header">
        <h1 className="is-size-1">Research Collabs</h1>
        <Link to="/register">
            <Button className="is-primary is-large">Register</Button>
        </Link>
      </section>
      <section className="center">
        <h1 className="is-size-2">Login</h1>
        <label>Email</label>
        <div className="control">
          <input type="text" />
        </div>
        <label>Password</label>
        <div className="control">
          <input type="password" />
        </div>
        <Button className="is-link is-rounded">Login</Button>
      </section>
    </main>
  );
}
