import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("users", JSON.stringify(input));
    navigate("/login");
  };

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.username) {
  //     errors.username = "Username is required!";
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password must be more than 4 characters";
  //   } else if (values.password.length > 10) {
  //     errors.password = "Password cannot exceed more than 10 characters";
  //   }
  //   return errors;
  // };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} autoComplete="off">
          <h1>Registration</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="username"
                placeholder="Enter FullName"
                value={input.username}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={input.email}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={input.password}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
            </div>
            <button className="fluid ui button blue">Submit</button>
          </div>
          <br />
          <p className="text-right">
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              Already registered login?
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Register;
