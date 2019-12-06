import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { withRouter } from "react-router";

function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);

  const handleChange = event => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URI}/users/authentication`, user)
      .then(result => {
        console.log(result);
        localStorage.setItem("token", result.data.token);
        props.history.push("/dashboard");
      })
      .catch(error => setError(error.message));
  };

  return (
    <div className="text-center form-login">
      <form className="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Email address"
          id="inputEmail"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Password"
          id="inputPassword"
          name="password"
          onChange={handleChange}
          value={user.password}
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          onClick={handleSubmit}
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
export default withRouter(Login);
