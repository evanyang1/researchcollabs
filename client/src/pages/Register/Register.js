import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { Button } from "react-bulma-components";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  const isEmail = (email) => /^\S+@\S+$/.test(email);

  const handleSubmit = () => {
    if (!isEmail(email)) setErrorEmail(true);
    if (!password) setErrorPassword(true);
    if (password !== confirmPassword) setErrorConfirmPassword(true);
    if (isErrorFree()) {
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
        <Button
          className="is-link is-rounded create-account-btn"
          onClick={handleSubmit}
        >
          Create Account
        </Button>
      </section>
      <section className="login-btn">
        <Link to="/">
          <Button className="is-primary is-large is-outlined">
            Have an account? Login
          </Button>
        </Link>
      </section>
    </main>
  );
}
