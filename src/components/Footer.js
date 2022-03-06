import React from "react";
import "./components.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img className="big-logo" src={require("../assets/logo.png")} />
      </div>
      <div className="footer-right">
        <div className="col">
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Leagal</p>
        </div>
        <div className="col">
          <p>Privacy Policy</p>
          <p>Team</p>
          <p>Download App</p>
        </div>
        <div className="col">
          <p>About Us</p>
          <p>Our Services</p>
          <div className="row" style={{ fontSize: "xx-large" }}>
            <a
              style={{ color: "white" }}
              href="https://twitter.com/barbaofficial_?s=08"
            >
              <i class="fab fa-twitter-square" />
            </a>
            <a
              style={{ color: "white" }}
              href="https://www.facebook.com/BARBA-100277189288948"
            >
              <i class="fab fa-facebook-square" />
            </a>
            <a
              style={{ color: "white" }}
              href="https://instagram.com/thebarbaofficial?utm_medium=copy_link"
            >
              <i class="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
