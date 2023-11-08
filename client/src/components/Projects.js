import React from 'react';
import "../components/assets/project.css";
import bear from "../images/bear-recogniser.png";
import carbon from "../images/carbon.png";
export default function Projects() {
  return (
    <>
    
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
            
            <a href="https://github.com/theneoalpha/bear_recogniser"  className="btn btn-primary">
              Link
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
          
            <a href="https://github.com/theneoalpha/carbon_footprint"  className="btn btn-primary">
              Link
            </a>
          </div>
        </div>

        <div className="card">
          <img
            src={carbon}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Event Organiser</h5>
          
            <a href="https://github.com/theneoalpha/carbon_footprint"  className="btn btn-primary">
              Link
            </a>
          </div>
        </div>
      </div>

      <div className="projectSecond">
      <div className="card">
          <img
            src={carbon}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Campus-Diary</h5>
          
            <a href="https://github.com/theneoalpha/campusdiary"  className="btn btn-primary">
              Link
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src={carbon}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Text to QR Code Generator</h5>
          
            <a href="https://github.com/theneoalpha/qrcodegen"  className="btn btn-primary">
              Link
            </a>
          </div>
        </div>

        <div className="card">
          <img
            src={carbon}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">File Sharing - MERN-Stack </h5>
          
            <a href="https://github.com/theneoalpha/filesharing"  className="btn btn-primary">
              Link
            </a>
          </div>
        </div>



      </div>
  
    </>
  )
}
