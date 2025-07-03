import React, { useEffect, useState } from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../Assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <header id="home" className={`header ${isVisible ? 'animate' : ''}`}>
            <div className="container header__container">
                <div className="header__content">
                    <div className="header__text fade-in">
                        <h5 className="header__greeting">Hello, I'm</h5>   
                        <h1 className="header__name gradient-text">Parva Shah</h1>
                        <h5 className="text-light header__title">
                            <span className="typing-text">Software Engineer</span>
                        </h5>
                        <p className="header__description">
                            Passionate full-stack developer creating innovative digital solutions 
                            with modern technologies and clean, efficient code.
                        </p>
                        
                        <div className="header__cta fade-in-delay-1">
                            <CTA />
                        </div>
                    </div>
                    
                    <div className="header__socials fade-in-delay-2">
                        <HeaderSocials />
                    </div>
                </div>
                
                <div className="header__image fade-in-delay-3">
                    <div className="me floating">
                        <img src={ME} alt="Parva Shah - Software Engineer" />
                        <div className="image__background"></div>
                    </div>
                </div>
                
                <a href="#about" className="scroll__down fade-in-delay-3" aria-label="Scroll to About section">
                    <span>Scroll Down</span>
                    <div className="scroll__indicator">
                        <div className="scroll__wheel"></div>
                    </div>
                </a>
            </div>
            
            {/* Background Elements */}
            <div className="header__bg-elements">
                <div className="bg-circle bg-circle-1"></div>
                <div className="bg-circle bg-circle-2"></div>
                <div className="bg-circle bg-circle-3"></div>
            </div>
        </header>
    );
};

export default Header;