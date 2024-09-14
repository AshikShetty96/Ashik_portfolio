import React from 'react';
import './css/skills.css'; // Ensure CSS import

function Experience() {
  return (
    <div className="experience-frame">
      <h2>Experience</h2>
      <div className="experience-content">
        <div className="experience-item">
          <h3>Internship | Chipsy IT Services Pvt Ltd (May 2024 - June 2024)</h3>
          <p>Contributed to frontend development using React.js and integrated MongoDB for backend operations. Enhanced user experience and optimized the performance of web applications, focusing on scalable and maintainable code.</p>
        </div>

        <div className="experience-item">
          <h3>Web Developer | Codesoft IT Services Pvt Ltd (August 2023 - September 2023)</h3>
          <p>Developed interactive and responsive web interfaces using HTML, CSS, and JavaScript. Improved usability across platforms, collaborating closely with the design and backend teams to create consistent, user-friendly websites.</p>
        </div>

        <div className="experience-item">
          <h3>Frontend Web Development Intern | Udupi Web Solutions (April 2022 - May 2022)</h3>
          <p>Worked on basic web development projects using HTML, CSS, and Bootstrap. Created informational websites, including a hotel website, to improve online presence and attract more customers, helping businesses grow through digital transformation.</p>
        </div>

        {/* Example of adding another experience */}
        <div className="experience-item">
          <h3>Freelance Web Developer (July 2022 - November 2022)</h3>
          <p>Worked with small businesses to develop responsive websites, focusing on mobile-first design. Developed features like product listings, contact forms, and blog pages using HTML, CSS, JavaScript, and Bootstrap, improving their online visibility.</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
