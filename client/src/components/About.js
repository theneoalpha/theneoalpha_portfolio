import React from 'react';
import "../components/assets/about.css";
import image from "../images/about.jpg";

export default function About() {
  return (
   <>
   
   <section className="about" id="about">
  <div className="heading">
    <h2>About Me</h2>
    <span />
  </div>
  {/* About Content */}
  <div className="about-container">
    <div className="about-img">
      <img src={image} alt="" />
    </div>
    <div className="about-text">
      <p>
      I'm a tech enthusiast experienced in Flutter, TensorFlow, React, MERN stack web development. I'm dedicated to pushing the boundaries of technology to create innovative solutions. Passionate about coding, learning, and collaborating to build amazing digital experiences.
      </p>
      <div className="information">
        {/* Box 1 >
              <div class="info-box">
                  <i class='bx bxs-user' ></i>
                  <span>Tasnia Farin</span>
              </div*/}
        {/* Box 2 >
              <div class="info-box">
                  <i class='bx bxs-phone' ></i>
                  <span>+1 444 444 4444</span>
              </div*/}
        {/* Box 3 */}
        <div className="info-box">
          <i className="bx bxs-envelope" />
          <span>
            <a
              href="mailto:vikashkaushik910@gmail.com"
              style={{ color: "black" }}
            >
              vikashkaushik910@gmail.com
            </a>
          </span>
        </div>
      </div>
      <a
        href="https://drive.google.com/drive/u/1/folders/1IGH0PRbSSnA6yJAL1AItOMkfy7kGk42V"
        className="cvbutton"
       
      >
        Download Resume
      </a>
    </div>
  </div>
</section>

   
   
   
   </>
  )
}
