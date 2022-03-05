import React from "react";
import "./components.css";
export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={require("../assets/logo.png")} />
      <div className="header-right">
        <p>Home</p>
        <p>About Us</p>
        <p>Our Services</p>
        <p>Team</p>
        <button className="header-button">
          Download App{" "}
          <i class="fab fa-google-play" style={{ color: "rgb(161 95 205)" }} />
        </button>
      </div>
    </div>
  );
}
