import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";
import { UserContext } from '../../contexts/userContext';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  const isEmail = (email) => /^\S+@\S+$/.test(email);

  const { userState, userActions } = useContext(UserContext);

  const handleSubmit = () => {
    if (!isEmail(email)) setErrorEmail(true);
    if (!password) setErrorPassword(true);
    if (password !== confirmPassword) setErrorConfirmPassword(true);
    if (isErrorFree()) {
      userActions.signup(email, password);
    }
  };

  const isErrorFree = () => {
    if (!isEmail(email)) {
      setErrorEmail(true);
      return false;
    }
    if (password.length <= 5) {
      setErrorPassword(true);
      return false;
    }
    if (password !== confirmPassword) {
      setErrorConfirmPassword(true);
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (isEmail(email)) setErrorEmail(false);
    if (password.length > 5) setErrorPassword(false);
    if (password === confirmPassword) setErrorConfirmPassword(false);
  }, [email, password, confirmPassword]);

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
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <label>Password</label>
        <div className="control">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <label>Confirm Password</label>
        <div className="control">
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Button className="is-link is-rounded" onClick={handleSubmit}>
          Create Account
        </Button>
      </section>
    </main>
  );
}
