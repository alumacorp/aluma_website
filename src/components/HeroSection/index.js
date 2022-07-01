import React from "react";
import Button from "../common/Button";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-claim-label">
        <div>enrolling beta soon</div>
        <div className="claim-anchor">
          access now
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            className="claim-arrow"
          />
        </div>
      </div>
      <div className="flex flex-col absolute-center hero-section max-width">
        <div className="hero-heading">servies at your finger tips</div>
        <div className="hero-subheading">
          join large community of people who are using our services
        </div>
        <Button buttonText="Download Aluma" />
      </div>
    </div>
  );
};

export default HeroSection;
