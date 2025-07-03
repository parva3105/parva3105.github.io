import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './scrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show/hide button based on scroll position
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`}>
            <button 
                onClick={scrollToTop}
                className="scroll-btn"
                aria-label="Scroll to top"
                title="Back to top"
            >
                <FaArrowUp />
            </button>
        </div>
    );
};

export default ScrollToTop;