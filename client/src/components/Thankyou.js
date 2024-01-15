import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import Navbar2 from "./Navbar2";
import thankyou from "../images/thankyou.svg";
import "../components/assets/thankyou.css";

import Footer from "./Footer";
export default function Contact() {
 

  

  return (
    <>
      <Navbar2 />
      <section className="thankyou">
        <div className="container mt-5">
           <h2 className="form-title">Thanking You</h2>
          <div className="thankyou-content">
            <img src={thankyou} />
            <div className="thankyou_content">
              <h4>I'm so grateful to you </h4>
              <p>Thank you so much for taking the time to visit my portfolio site. I truly appreciate your interest and support.</p>
              <h6>- Vikash Kaushik</h6>
            </div>

            
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
