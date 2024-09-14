import React from 'react';
import './css/Project.css';
import ecommerceImage from '../Assets/Screenshot 2024-09-12 130753.png';
import todoImage from '../Assets/Screenshot 2024-09-12 131203.png';
import taxiBookImage from '../Assets/Screenshot 2024-09-12 131853.png';
import resumeBuilderImage from '../Assets/online-resume-website-builders-in-post.png';
import smartCityImage from '../Assets/smart-city-1-1024x683.jpg';
import studentManagementImg from '../Assets/-student-reporting-management-system.png'; // Ensure this path is correct

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {/* E-commerce Website */}
        <div className="project-card">
          <img src={ecommerceImage} alt="E-commerce Website" className="project-image" />
          <h3>E-commerce Website</h3>
          <p>Developed a responsive e-commerce frontend using React.js.</p>
          <p><strong>Tools used:</strong> React.js, HTML, CSS</p>
          <a href="https://ashikshetty96.github.io/AshikShetty96-ecommerce-react-project1/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        {/* To-Do List */}
        <div className="project-card">
          <img src={todoImage} alt="TO DO LIST" className="project-image" />
          <h3>TO DO LIST</h3>
          <p>Built a To-Do List app using React.</p>
          <p><strong>Tools used:</strong> React.js, HTML, CSS</p>
          <a href="https://to-do-list-react-tau-one.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        {/* Taxi Book */}
        <div className="project-card">
          <img src={taxiBookImage} alt="Taxi Book" className="project-image" />
          <h3>Taxi Book</h3>
          <p>Taxi booking platform built using modern web technologies.</p>
          <p><strong>Tools used:</strong> HTML, CSS, JavaScript</p>
          <a href="https://taxi-web-page.vercel.app/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        {/* Resume Builder */}
        <div className="project-card">
          <img src={resumeBuilderImage} alt="Resume Builder" className="project-image" />
          <h3>Resume Builder</h3>
          <p>Online Resume Builder developed using React.js.</p>
          <p><strong>Tools used:</strong> React.js, HTML, CSS</p>
          <a href="https://ashikshetty96.github.io/Resumebuilder/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        {/* Smart City App */}
        <div className="project-card">
          <img src={smartCityImage} alt="Smart City App" className="project-image" />
          <h3>Smart City App</h3>
          <p>Developed a smart city app using Java, MySQL, JDBC, and SMTP.</p>
          <p><strong>Tools used:</strong> Java, MySQL, JDBC</p>
        </div>

        {/* Student Management System */}
        <div className="project-card">
          <img src={studentManagementImg} alt="Student Management System" className="project-image" />
          <h3>Student Management System</h3>
          <p>Built a student management system using Java and MySQL for managing student data.</p>
          <p><strong>Tools used:</strong> Java, MySQL</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
