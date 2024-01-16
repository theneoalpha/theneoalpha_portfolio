import React, { useState } from "react";
import Navbar2 from "./Navbar2";
import contact from "../images/boy.svg";
import "../components/assets/contact.css";
import Footer from "./Footer";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact() {
  const [user, setUser] = useState({
    name: "",
    text: "",
    email: "",
    phone: "",
    
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, text, email, phone} = user;

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          text,
          email,
          phone,
        }),
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        window.alert("Invalid Message");
        console.log("Invalid Message");
      } else {
        window.alert("Message Sent");
        console.log("Message Sent");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar2 />
      <section className="contact">
        <div className="container mt-5">
          <h2 className="form-title">Message</h2>
          <div className="contact-content">
            <img src={contact} />
            <div className="contact-form">
              <form method="POST" className="contactpage-form">
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your name"
                    value={user.name}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    value={user.email}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"></label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                    value={user.phone}
                    onChange={handleInputs}
                  />
                </div>
                
                <div className="pt-0 mb-3 form-group">
                  <textarea
                    placeholder="Your message"
                    name="text"
                    id="text"
                    className="focus:outline-none focus:ring relative w-full px-3 py-8 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
                    required
                    value={user.text}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="contact"
                    value="Submit"
                    className="submit"
                    onClick={handleSubmit}
                  />
                </div>
              </form>
              
              
            </div>
            
      
          </div>
          <div className="connect">
              <a href="mailto:vikashkaushik910@gmail.com"><i className="" /><EmailIcon/></a>
              <a href="https://www.linkedin.com/in/vikashkaushik79/"><i className="" /><LinkedInIcon/></a>
              </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
