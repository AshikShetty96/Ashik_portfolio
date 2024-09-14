import React from 'react';
import './css/skills.css'; // Ensure CSS import

function Skills() {
  return (
    <div className="skills-frame">
      <h2>Skills</h2>
      <div className="skills-content">
        <div className="skill-item">
          <h3>C</h3>
          <p>Proficient in C programming for system-level programming and efficient data structures and algorithms. Experience includes memory management, pointers, and file handling.</p>
        </div>
        <div className="skill-item">
          <h3>Java (Basic)</h3>
          <p>Basic knowledge of Java covering object-oriented programming, inheritance, polymorphism, and file I/O. Developed small projects involving desktop applications and data handling.</p>
        </div>
        <div className="skill-item">
          <h3>HTML</h3>
          <p>Expertise in HTML5, using semantic tags for improved SEO, accessibility, and building structured web pages from scratch with well-defined layouts.</p>
        </div>
        <div className="skill-item">
          <h3>CSS</h3>
          <p>Experienced in modern CSS techniques like Flexbox, Grid, and responsive media queries. Skilled in making web pages responsive across devices, ensuring design consistency.</p>
        </div>
        <div className="skill-item">
          <h3>JavaScript</h3>
          <p>Strong command of JavaScript, including ES6+ features, event handling, asynchronous programming (promises, async/await), and DOM manipulation for creating dynamic web pages.</p>
        </div>
        <div className="skill-item">
          <h3>React.js</h3>
          <p>Experienced in building single-page applications with React. Proficient in React hooks, state management, and component lifecycle methods for efficient and dynamic UIs.</p>
        </div>
        <div className="skill-item">
          <h3>MySQL</h3>
          <p>Experienced in MySQL database management. Proficient in creating optimized queries, database design, and connecting databases to applications for seamless data flow.</p>
        </div>
        <div className="skill-item">
          <h3>Python</h3>
          <p>Proficient in Python programming, including data structures, libraries like NumPy and Pandas, and familiarity with Machine Learning algorithms using frameworks such as Scikit-learn.</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
