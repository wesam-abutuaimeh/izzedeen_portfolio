import React from "react";
import "./style.css";
import LANDING_SECTION_IMAGE from "./hello.png";
import CustomLink from "../../components/CustomLink";

function LandingSection() {
  return (
    <section className="home-section align-items-center" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="home-text">
            <p>Hello, I'm</p>
            <h1>Izzedeen Alfarra</h1>
            <h2>
              Backend Web Developer | Technical Inctractor On YouTube Channel
            </h2>
            <div className="btns">
              <CustomLink target="/about" text="More About Me" />
              <CustomLink
                target="https://www.youtube.com/channel/UC1hgEmeE-bCt4_MFwQQa7qw"
                text="Youtube Channel"
              />
            </div>
          </div>
          <div className="home-img">
            <div className="img-box">
              <img src={LANDING_SECTION_IMAGE} alt="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
