import React from "react";
import "./login.css";
export default function Login() {
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
        />
        <label htmlFor="inputPassword" className="sr-only">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Password"
          id="inputPassword"
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}
