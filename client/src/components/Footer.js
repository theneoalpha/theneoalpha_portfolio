import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

import "../components/assets/footer.css";
export default function Footer(props) {

  return (
    <>
  <div className='footer_page'>
        <div className="footer">
          <h2>Connect with me on Social Media</h2>
          <div className="footer-social">
            <a href="https://www.youtube.com/@TheNeoAlpha"><i className="bx bxl-linkedin" /><YouTubeIcon/></a>

            <a href="https://www.linkedin.com/in/vikashkaushik79/"><i className="" /><LinkedInIcon/></a>
            <a href="https://www.instagram.com/theneoalpha"><i className="" /><InstagramIcon/></a>
            <a href="https://github.com/theneoalpha"><i className="bx bxl-github" /><GitHubIcon/></a>
            <a href="https://twitter.com/vikashkaushik79"><i className="bx bxl-github" /><TwitterIcon/></a>
          </div>
        </div>
        {/* Copyright */}
        <div className="copyright">
          <p>
            Created and Managed By
            <a href="https://linktr.ee/kaushikvikash079"> Vikash Kaushik</a> | 2024 All
            Rights
          </p></div></div>
    
    
    </>
  )
}
