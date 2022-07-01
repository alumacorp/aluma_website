import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  };

  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
      >
        <div className="mobile-navbar">
          <div className="mobile-nav-item">about us</div>
          <div className="mobile-nav-item">our team</div>
        </div>
      </div>
      <div className="max-width flex header">
        <h1>Aluma</h1>
       {/*  <img src="" className="header-logo" /> */}
        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            class={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-item">about us</div>
          <div className="header-nav-item">our team</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
