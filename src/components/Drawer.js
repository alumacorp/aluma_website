import React from "react";
import "./components.css";
export default function Drawer(props) {
  return (
    <div className="mobile-drawer">
      <div className="mobile-drawer-inner">
        <span onClick={() => props.close(false)}>
          <i
            style={{
              color: "white",
              position: "absolute",
              color: "lightgray",
              top: "20px",
              right: "20px",
              zIndex: 10,
            }}
            class="fas fa-times"
          />
        </span>

        <div style={{ width: "100%", backgroundColor: "black" }}>
          <img src={require("../assets/logo.png")} />
        </div>

        <p>Home</p>
        <p>About Us</p>
        <p>Our Team</p>
        <button>
          Request for Service <i class="fas fa-cut"/>
        </button>
      </div>
    </div>
  );
}
