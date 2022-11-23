import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  const userName = JSON.parse(localStorage.getItem("users"));

  const handleLogout = (e) => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <>
      <div className="container">
        <h1>Home</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <h1>Welcome, {userName.username}</h1>
          </div>
          <br />
          <br />
          <button className="fluid ui button blue" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
