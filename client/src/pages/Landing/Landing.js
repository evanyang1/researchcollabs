import React, { useState, useEffect, useContext }  from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";
import { UserContext } from '../../contexts/userContext';

export default function Landing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const { userActions, userState } = useContext(UserContext);

  const handleClick = () => {
    if (!email) return setErrorEmail(true);
    if (!password) return setErrorPassword(true);
    userActions.login(email, password);
  }
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
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </div>
        <label>Password</label>
        <div className="control">
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <Button className="is-link is-rounded" onClick={handleClick}>Login</Button>
      </section>
    </main>
  );
}
