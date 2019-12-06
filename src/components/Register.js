import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);

  const handleChange = event => {
    const { name, value } = event.target;

    setNewUser({
      ...newUser,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newUser);

    axios
      .post(process.env.REACT_APP_BACKEND_URI + "users/register", newUser)
      .then(result => console.log(result))
      .catch(error => setError(error.response.data.message));
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h3>Register Form</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <hr />
      <div className="form-group row">
        <label htmlFor="inputNameReg" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            value={newUser.name}
          />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="inputEmailReg" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="inputEmailReg"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            value={newUser.email}
          />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="inputPassReg" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassReg"
            name="password"
            placeholder="Your Password"
            onChange={handleChange}
            value={newUser.password}
          />
        </div>
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
