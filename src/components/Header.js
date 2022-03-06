import React from "react";
import "./components.css";
import Drawer from "./Drawer";
export default function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <div className="header">
      {drawerOpen && <Drawer close={setDrawerOpen} />}
      <img className="logo" src={require("../assets/logo.png")} />
      <div className="header-mobile">
        <i class="fas fa-bars" onClick={() => setDrawerOpen(true)} />
      </div>
      <div className="header-desktop">
        <div className="header-right">
          <p>Home</p>
          <p>About Us</p>
          <p>Our Services</p>
          <p>Team</p>
          <button className="header-button">
            Download App{" "}
            <i
              class="fab fa-google-play"
              style={{ color: "rgb(161 95 205)" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
