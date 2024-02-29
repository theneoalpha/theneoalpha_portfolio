import React from "react";
import "../components/assets/project.css";
import bear from "../images/bear-recogniser.jpg";
import carbon from "../images/carbon.png";
import campus from "../images/campus.png";
import event from "../images/event.png";
import qrcode from "../images/qrcode.png";
import carbonexten from "../images/carbon_exten.png";
import file from "../images/file.png";

import { FaGithub } from "react-icons/fa";

import { FaLink } from "react-icons/fa";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";

export default function Projects() {
  return (
    <>
      <Navbar2 />
      <div className="project">
        <h1 className="projectTitle">Projects</h1>
        <div className="projectFirst">
          <div className="card">
            <a
              href="https://github.com/theneoalpha/carbon_footprint_chrome_extension"
              className="link"
            >
              <img src={carbonexten} className="card-img-top" alt="..." />
            </a>

            <div className="card-body">
              <h5 className="card-title">FootPrint Chrome Extension</h5>

              <a
                href="https://github.com/theneoalpha/carbon_footprint_chrome_extension"
                className="link"
              >
                <FaGithub />
              </a>
              <span className="techstack">#JavaScript #chromeExtension</span>
            </div>
          </div>
          <div className="card">
            <a
              href="https://github.com/theneoalpha/bear_recogniser"
              className="link"
            >
              <img src={bear} className="card-img-top" alt="..." />
            </a>

            <div className="card-body">
              <h5 className="card-title">Bear Recogniser</h5>

              <a
                href="https://github.com/theneoalpha/bear_recogniser"
                className="link"
              >
                <FaGithub />
              </a>
              <span className="techstack">#Dart #Flutter #Tensorflow</span>
            </div>
          </div>
          <div className="card">
            <a
              href="https://github.com/theneoalpha/campusdiary"
              className="link"
            >
              <img src={campus} alt="..." />
            </a>

            <div className="card-body">
              <h5 className="card-title">Campus-Diary</h5>

              <a
                href="https://github.com/theneoalpha/campusdiary"
                className="link"
              >
                <FaGithub />
              </a>
              <a href="https://campusdiary.vercel.app/" className="link">
                <FaLink />
              </a>
              <span className="techstack">#MERN #ReactJs #Web</span>
            </div>
          </div>
          
        </div>

        <div className="projectSecond">
        <div className="card">
            <a
              href="https://github.com/theneoalpha/carbon_footprint"
              className="link"
            >
              <img src={carbon} alt="..." />
            </a>

            <div className="card-body">
              <h5 className="card-title">Carbon Footprint</h5>

              <a
                href="https://github.com/theneoalpha/carbon_footprint"
                className="link"
              >
                <FaGithub />
              </a>
              <span className="techstack">#MERN #ReactJs #Web</span>
            </div>
          </div>
          <div className="card">
            <a
              href="https://github.com/theneoalpha/event_organizer"
              className="link"
            >
              <img src={event} alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">Event Organiser</h5>

              <a
                href="https://github.com/theneoalpha/event_organizer"
                className="link"
              >
                <FaGithub />
              </a>
              <span className="techstack">#Web3.0 #Solidity</span>
            </div>
          </div>
          <div className="card">
            <a href="https://github.com/theneoalpha/qrcodegen" className="link">
              <img src={qrcode} alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">Text to QR Code Generator</h5>

              <a
                href="https://github.com/theneoalpha/qrcodegen"
                className="link"
              >
                <FaGithub />
              </a>

              <a
                href="https://theneoalpha.github.io/qrcodegen/"
                className="link"
              >
                <FaLink />
              </a>

              <span className="techstack">#HTML , #JavaScript</span>
            </div>
          </div>

          
        </div>
        <div className="projectThird">
        <div className="card">
            <a
              href="https://github.com/theneoalpha/filesharing"
              className="link"
            >
              <img src={file} alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">File Sharing - MERN-Stack </h5>

              <a
                href="https://github.com/theneoalpha/filesharing"
                className="link"
              >
                <FaGithub />
              </a>
              <span className="techstack">#MERN #ReactJs #Web</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
