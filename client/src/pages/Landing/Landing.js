import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import { Button } from "react-bulma-components";

export default function Landing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleClick = () => {
    if (!email) return setErrorEmail(true);
    if (!password) return setErrorPassword(true);
  };
  return (
    <main>
      <section className="header">
        <h1 className="is-size-1">Research Collabs</h1>
      </section>
      <section className="center">
        <h1 className="is-size-2 has-text-centered">Login</h1>
        <label>Email</label>
        <div className="control">
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <label>Password</label>
        <div className="control">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="is-link is-rounded login-btn" onClick={handleClick}>
          Login
        </Button>
      </section>
      <section className="register-btn">
        <Link to="/register">
          <Button className="is-primary is-large is-outlined">Make an Account</Button>
        </Link>
      </section>
    </main>
  );
}
