import React, { useState } from 'react';
import './css/styles.css'; // Ensure the path to your CSS file is correct

function Education() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const educationData = [
    { 
      title: "B. Tech | Computer Science | Srinivas University", 
      details: "CGPA: 7.70 (2022 - Present)" 
    },
    { 
      title: "Diploma | Computer Science | Government Polytechnic, Udupi", 
      details: "Percentage: 72% (2019 - 2022)" 
    },
    { 
      title: "PUC | Commerce | Govt PU College, Muniyal", 
      details: "Percentage: 64.04% (2019)" 
    },
    { 
      title: "SSLC | Ambrutha Bharathi Vidyalaya, Hebri", 
      details: "Percentage: 60.48% (2017)" 
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-grid">
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`education-item ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <div className="education-header">
              <h3>{item.title}</h3>
            </div>
            <p className="education-details">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
