import React from 'react';
import './Certification.css';

// Import your PDF files
import cert1 from '../assets/4967 DRONAGIRI HEALTHCARE.pdf';
import cert2 from '../assets/DRONAGIRI HEALTHCARE.pdf';
import cert3 from '../assets/WHO-GMP DRONAGIRI HEALTHCARE.pdf';
// Add more as needed

const certificates = [
  { src: cert1, name: 'ISO 9001 Certificate' },
  { src: cert2, name: 'fssai Certificate' },
  { src: cert3, name: 'WHO-GMP Certificate' },
  // Add more as needed
];

const Certification = () => {
  return (
    <div className="page certification-page">
      <h1>Certifications and Accreditations</h1>
      <p>Certified by recognized institutions for quality and compliance.</p>
      <div className="certificates-grid">
        {certificates.map((cert, idx) => (
          <div className="certificate-card" key={idx}>
            <a href={cert.src} target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="PDF icon"
                className="pdf-icon"
              />
              <p>{cert.name}</p>
              <span className="view-link">View PDF</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;