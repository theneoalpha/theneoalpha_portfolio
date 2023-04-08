import React from "react";
import Footer from "./Footer";
import "../components/assets/home.css";
import Navbar2 from './Navbar2';

export default function Home() {
  return (
    <>
        <Navbar2/>
      <div className="detail">
        <h2> Wants to Hire Someone</h2>
        <h2>Why not me</h2>
        <h1>Hey! This is Vikash</h1>
        <span>Kaushik</span>
        <ul>
          {" "}
          <a href="/contact">Hire Me</a>
        </ul>

        <div className="image">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEiOV8rx7GJda1OztM911FFfCdJUNQCToY6f7-sTJWnUX7B9fpXjaMrlCc4goqgyWcG1tV12z4I6AU0QIBO5q7gdGNozV_RavQ8FkXvExVqNZqVOvW-629jZ_3RKTwNTKNY7aOWKW-_kJcz5_kSHoTrSiJVF4hLL7SJFu_uNbh9zJ2B1ml44bc3KB3oi"
            alt="shape"
            className="shape"
          />
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEi1CLU3JyYyVVsrFaQ3B_tvC7JgZMERuJTM2bGGRn655NviS7mFRjEy7y5f1FQrBfe8cUBcE7X3cp7otPxvMLLT2Qa9FAljeFyjNE2jNXghwpOhl5mD2O7ViZSvmuJqScSG8_sH8G8xRKwc0Z9npMb94Nn1nDg_9Ywkg84Divzi1PD2HFnsngpxSywk=s320"
            alt="boy"
            className="boy"
          />
        </div>
      </div>
      <div className="myskills">
        <div className="skilllist">
          <h2>Web Developer</h2>
          <h2>Video Editor</h2>
          <h2>Graphic Designer</h2>
        </div>
        <div className="myskillanimat">
          <div className="progress first">
            <div className="progress-value firstanimation"></div>
          </div>
          <div className="progress second">
            <div className="progress-value secondanimation"></div>
          </div>
          <div className="progress third">
            <div className="progress-value thirdanimation"></div>
          </div>
        </div>
      </div>
      <div className="thirdpage">
        <div className="skill">
          <h2>My Skills</h2>
        </div>
        <div className="skillcontent">
          <div className="skillone skills">
            <div className="webimage">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgCc7Pj6LBxjbh3M6Dw8zE6c3w2tu0y_Q11mwrzeBISPCBBtoUlGa2nkvvrpklWkcYtlz6yFbeQcbmEK9XVnz3PdlIwStSjhGhuInocx1dOowW34KY91Ygqc-pRdZLi3BHnTA1V2cKWUqhCzWIxF_Yqs9doXD0gfro1uv9NEt4R1N8P38TNdgeNqIQt=s16000"
                alt=""
              />

              <h3>Web Developer</h3>
            </div>
            <div className="line">
              <p>
                Complete Web development from scratch ,front-end to backend with
                proper responsivness code using complete CODING
              </p>
            </div>{" "}
          </div>
          <div className="skilltwo skills">
            <div className="videoimage">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhNOe9TGX3VBA4IIWJMzYFOO5BfK7xPD_9AKi1b_wPkdZPWMxJirqYSgZaNyj75bNSevMf3Orqr-MLzC1zDlwB8rrQSJ_Fz_Gd0Ir3eg4c67nVSLaXl8HvXp3tkDE75tWJmMVg92bMgMqpTok870qMvctAa89AYoOBn_3z5Ropn_xR-6RDeDf4Wj8NM=s16000"
                alt=""
              />
              <h3>Video Editor</h3>
            </div>
            <div className="line">
              <p>
                I have proper command in Adobe Premier Pro and also little bit
                in Adobe After Effect,B-Rolls,Cinematography,Motion Graphics
                too.
              </p>
            </div>
          </div>
          <div className="skillthird skills">
            <div className="graphicimage">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhOskDVEzaMnDw18StJFAHl8PnoUTrC6Jn8C9qZa0TqhrH_7pIzLGbzt5fwg_QiO9CbLXqJIkwqwfbC2hVq5u5-puTI4GIig6adnV4cdGCyL3yv-sSQRRmDhdznlFxNaGHEBCDwJxH-N_kbSn_3RuOCJuoheLomjcdnkJsVBBjM1Mhm3xTjzpQOP5jj=s16000"
                alt=""
              />
              <h3>Graphic Design</h3>

              <div className="line">
                <p>
                  {" "}
                  I design lots of Banners, Group Icons,Youtube Thumbnail,logo's
                  Design{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
