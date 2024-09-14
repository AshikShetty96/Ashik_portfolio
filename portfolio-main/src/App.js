import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResumeDownload from './components/ResumeDownload';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header" id="home">
        <div className="intro">
          <img
            src={`${process.env.PUBLIC_URL}/Ashik.jpg`} // Ensure this path is correct or update if in src
            alt="Ashik Shetty"
            className="profile-pic"
          />
          <p className="greeting">Hi, I'm</p>
          <h1>Ashik Shetty</h1>
          <p className="subtitle">
            Web Developer | Specializing in Full Stack Development | React.js Enthusiast
          </p>
        </div>
        <ResumeDownload />
      </header>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
