import React from "react";

function About() {
  return (
    <div className="main-about">
      <div className="main-about-body">
        <div className="main-about-images">
          <img
            className="main-about-image"
            src={require("../../images/zoomedpic.png")}
            alt=""
          ></img>
        </div>
        <div className="main-about-text">
          <div>
            I'm a full-stack developer currently experienced with{" "}
            <span style={{ color: "rgb(73, 174, 164)" }}>
              TypeScript, JavaScript, React, Next.js, HTML, CSS
            </span>{" "}
            and <span style={{ color: "rgb(73, 174, 164)" }}>Node.js,</span> but
            I'm motivated and looking forward to expanding my skills.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
