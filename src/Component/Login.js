import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleLogin(e) {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("users"));

    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Incorrect Email Or Password!");
    }
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleLogin} autoComplete="off">
          <h1>Login</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="field">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={input.password}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <button className="fluid ui button blue">Submit</button>
          </div>
          <br />
          <p className="forgot-password text-right">
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              Create a new account?
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
