import React from 'react';
import './css/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I am <span className="highlight">Ashik Shetty</span>, a dedicated and passionate web developer with a deep love for building innovative and dynamic web solutions. I have honed my skills over the years in both frontend and backend development.
        </p>

        <h3 className="subsection-title">Technical Experience</h3>
        <p className="about-text">
          I specialize in web development using modern technologies like React.js, MongoDB, HTML5, CSS3, and JavaScript. I have also worked with backend technologies like Node.js and Express, as well as databases such as MySQL and MongoDB. I am proficient in building full-stack applications and integrating APIs to create responsive and efficient web solutions.
        </p>

        <h3 className="subsection-title">Seeking Opportunities</h3>
        <p className="about-text">
          I am always looking for exciting opportunities to work with innovative companies where I can contribute my skills and continue to grow as a developer. I thrive in fast-paced environments where I can tackle complex challenges and collaborate with talented individuals.
        </p>

        <h3 className="subsection-title">Education</h3>
        <p className="about-text">
          I am pursuing a B.Tech in Computer Science at Srinivas University, where I have gained a solid foundation in programming, algorithms, and software development methodologies. I have also completed a diploma in Computer Science at Government Polytechnic, Udupi.
        </p>

        <h3 className="subsection-title">Skills & Expertise</h3>
        <p className="about-text">
          - Programming Languages: Java, Python, C <br/>
          - Web Technologies: HTML, CSS, JavaScript, React.js <br/>
          - Databases: MySQL, MongoDB <br/>
          - Frameworks: Node.js, Express <br/>
          - Version Control: Git, GitHub
        </p>
      </div>
    </section>
  );
}

export default About;
