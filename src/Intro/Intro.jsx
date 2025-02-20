import React from "react";
import "./Intro.css";
const Intro = () => {
  return (
    <div className="intro-container">
      <div className="i-left">
        <p className="i-name">Hi i'm Amith p</p>
        <p className="i-webd">Web developer</p>
        <p className="i-web-para">
          I'm a web developer skilled in front-end and back-end technologies,
          including HTML, CSS, JavaScript, and React. I focus on creating
          responsive, user-friendly web applications with a strong emphasis on
          performance and usability
        </p>
        <div className="i-btn">
          <button className="i-btn-works"><a href="#project">works</a></button>
          <button className="i-btn-contact"><a href="#contact">contact</a></button>
        </div>
      </div>
      <div className="i-right">
        <div className="user-img">
          <img src="/user.jpg" alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
