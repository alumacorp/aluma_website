import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Home.css";
export default function Home() {

  return (
    <>
      <Header />
      <div className="home">
        <h1>
          Making life
          <a
            className="tag-line"
            style={{ color: "rgb(161 95 205)", marginLeft: "15px" }}
          >
            easy
          </a>
        </h1>
        <img className="phone-image" src={require("../assets/phone.png")} />
        <button className="download-button">
          Coming soon <i class="fab fa-apple" />
        </button>
        <Footer />
      </div>
    </>
  );
}
