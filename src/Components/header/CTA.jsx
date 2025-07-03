import React from 'react';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import CV from '../../Assets/ParvaShah_Resume.pdf';

const CTA = () => {
    return (
        <div className="cta">
            <a 
                href={CV} 
                download="Parva_Shah_Resume.pdf" 
                className="btn btn-primary hover-lift"
                aria-label="Download Resume"
            >
                <FaDownload />
                Download CV
            </a>
            <a 
                href="#contact" 
                className="btn btn-secondary hover-lift"
                aria-label="Contact Me"
            >
                <FaEnvelope />
                Let's Talk
            </a>
        </div>
    );
};

export default CTA;