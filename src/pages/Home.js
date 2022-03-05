import React from "react";
import Header from "../components/Header";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <Header />

      <h1>
        Making life <span className="tag-line" style={{ color: "rgb(161 95 205)" }}>easy</span>
      </h1>
      <img className="phone-image" src={require("../assets/phone.png")} />
      <button className="download-button">
        Coming soon <i class="fab fa-apple" />
      </button>
    </div>
  );
}
