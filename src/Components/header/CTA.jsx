import React from 'react';
import CV from '../../Assets/ParvaShah_Resume.pdf';

const CTA = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.setAttribute('download', 'Parvash_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="cta">
      <a 
        href="#" 
        className="btn btn-primary" 
        onClick={handleDownload}
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">Contact</a>
    </div>
  );
};

export default CTA;