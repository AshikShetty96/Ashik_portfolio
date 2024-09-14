import React from 'react';
import './css/ResumeDownload.css';

// Import the local images
import githubLogo from '../Assets/291716_github_logo_social network_social_icon.png';
import linkedinLogo from '../Assets/317750_linkedin_icon.png';

function ResumeDownload() {
  return (
    <div>
      {/* Resume Download and Hire Me Buttons together */}
      <div className="resume-hire-container">
        <a href={`${process.env.PUBLIC_URL}/Resume1.pdf`} download="Ashik_Shetty_Resume.pdf" className="resume-button">
          Resume
        </a>
        <a href="mailto:shettyashik28@gmail.com" className="hire-me-button">Hire Me</a>
      </div>

      {/* GitHub and LinkedIn Icons at the bottom */}
      <div className="social-icons-container">
        <div className="social-icons">
          <a href="https://github.com/AshikShetty96" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/ashikshetty9680" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeDownload;
