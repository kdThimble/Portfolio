import React, { useEffect } from "react";

import "./Intro.css";
import TrackVisibility from "react-on-screen";


import ScrollDownLeft from "./scroll-down/ScrollDownLeft";
import ScrollDownRight from "./scroll-down/ScrollDownRight";
const Intro = () => {
  useEffect(() => {
    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountains_back = document.getElementById("mountains_back");
    let mountains_front = document.getElementById("mountains_front");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      stars!.style.left = value * 0.55 + "px";
      moon!.style.top = value * 2 + "px";
      moon!.style.left = value * 1.05 + "px";
      mountains_back!.style.top = value * 0.5 + "px";
      mountains_front!.style.top = value * 0 + "px";
    });
  });

  return (
    <div className="flex  align-items-start p-0 ">
      <section className="home-section">
        <img src={"/assets/stars.png"} alt="Stars overlay" id="stars" />
        <img src={"/assets/moon.png"} alt="Moon" id="moon" />
        <img
          src={"/assets/mountains_behind.png"}
          alt="Mountains back"
          id="mountains_back"
        />
        {/* <a href="#about" id="btn-letsgo">Let's go!</a> */}
        <img
          src={"/assets/mountains_front.png"}
          alt="Mountains front"
          id="mountains_front"
        />
        <div className="w-full">
          <div className="heading-container offset-lg-2">
            <TrackVisibility once>
              {({ isVisible }) => (
                <h1
                  className={`main-heading ${
                    isVisible ? "text-animation" : ""
                  }`}
                >
                  <span className="blast hover-red">H</span>
                  <span className="blast hover-red">i</span>
                  <span className="blast hover-red">,</span> <br />
                  <span className="blast hover-red">I</span>
                  <span className="blast hover-red">'</span>
                  <span className="blast hover-red">m&nbsp;</span>
                  <span className="blast hover-red">K</span>
                  <span className="blast hover-red">u</span>
                  <span className="blast hover-red">n</span>
                  <span className="blast hover-red">d</span>
                  <span className="blast hover-red">a</span>
                  <span className="blast hover-red">n</span>
                  <span className="blast hover-red">,</span> <br />
                  <span className="blast hover-red">S</span>
                  <span className="blast hover-red">o</span>
                  <span className="blast hover-red">f</span>
                  <span className="blast hover-red">t</span>
                  <span className="blast hover-red">w</span>
                  <span className="blast hover-red">a</span>
                  <span className="blast hover-red">r</span>
                  <span className="blast hover-red">e</span>
                  <br />
                  <span className="blast hover-red">D</span>
                  <span className="blast hover-red">e</span>
                  <span className="blast hover-red">v</span>
                  <span className="blast hover-red">e</span>
                  <span className="blast hover-red">l</span>
                  <span className="blast hover-red">o</span>
                  <span className="blast hover-red">p</span>
                  <span className="blast hover-red">e</span>
                  <span className="blast hover-red">r</span>
                </h1>
              )}
            </TrackVisibility>
            <h3 className="sub-heading">Full Stack Web Developer </h3>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="pad">Open My Resume</button>
            </a>
            {/* <Button href={resume} target="_blank"  className='button my-4'>My resume!</Button> */}
            {/* <button className="pad"> Resume</button> */}
          </div>
        </div>
        <ScrollDownLeft />
        <ScrollDownRight />
      </section>
    </div>
  );
};

export default Intro;
