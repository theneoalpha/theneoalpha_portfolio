import React from 'react';
import "../components/assets/project.css";
import bear from "../images/bear-recogniser.png";
import carbon from "../images/carbon.png";
import campus from "../images/campus.png";
import event from "../images/event.png";
import qrcode from "../images/qrcode.png";
import file from "../images/file.png";


import { FaGithub} from "react-icons/fa";

import {FaLink} from "react-icons/fa";

export default function Projects() {
  return (
    <>
    <div className='project'>
    <h1 className="projectTitle">Projects</h1>
      <div className="projectFirst">
        <div className="card">
          <img
            src={bear}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Bear Recogniser</h5>
            
            <a href="https://github.com/theneoalpha/bear_recogniser"  className="link">
            <FaGithub/>
            </a>
           
            
          </div>
        </div>

        <div className="card">
          <img
            src={carbon}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Carbon Footprint</h5>
          
            <a href="https://github.com/theneoalpha/carbon_footprint"  className="link">
            <FaGithub/>
            </a>
          </div>
        </div>

        <div className="card">
          <img
            src={event}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Event Organiser</h5>
          
            <a href="https://github.com/theneoalpha/carbon_footprint"  className="link">
            <FaGithub/>
            </a>
          </div>
        </div>
      </div>

      <div className="projectSecond">
      <div className="card">
          <img
            src={campus}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Campus-Diary</h5>
          
            <a href="https://github.com/theneoalpha/campusdiary"  className="link">
            <FaGithub/>
            </a>
            <a href="https://campusdiary.vercel.app/"  className="link">
            < FaLink/>
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={qrcode}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Text to QR Code Generator</h5>
          
            <a href="https://github.com/theneoalpha/qrcodegen"  className="link">
            <FaGithub/>
            </a>
          </div>
        </div>

        <div className="card">
          <img
            src={file}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">File Sharing - MERN-Stack </h5>
          
            <a href="https://github.com/theneoalpha/filesharing"  className="link">
            <FaGithub/>
            </a>
          </div>
        </div>



      </div>
      </div>
    </>
  )
}
