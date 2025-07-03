import React, { useState, useEffect } from 'react';
import './nav.css';
import { 
    FaHome, 
    FaUser, 
    FaBriefcase, 
    FaCog, 
    FaProjectDiagram, 
    FaEnvelope 
} from 'react-icons/fa';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#home');
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { id: '#home', icon: <FaHome />, label: 'Home' },
        { id: '#about', icon: <FaUser />, label: 'About' },
        { id: '#experience', icon: <FaBriefcase />, label: 'Experience' },
        { id: '#services', icon: <FaCog />, label: 'Services' },
        { id: '#portfolio', icon: <FaProjectDiagram />, label: 'Portfolio' },
        { id: '#contact', icon: <FaEnvelope />, label: 'Contact' }
    ];

    // Handle scroll to update active nav and navbar style
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 100);

            // Update active nav based on scroll position
            const sections = navItems.map(item => ({
                id: item.id,
                element: document.querySelector(item.id)
            })).filter(section => section.element);

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const rect = section.element.getBoundingClientRect();
                
                if (rect.top <= 100 && rect.bottom >= 100) {
                    setActiveNav(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    const handleNavClick = (id) => {
        setActiveNav(id);
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
            <div className="nav__container">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.id}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.id);
                        }}
                        className={`nav__link ${activeNav === item.id ? 'active' : ''}`}
                        aria-label={item.label}
                        title={item.label}
                    >
                        <span className="nav__icon">{item.icon}</span>
                        <span className="nav__label">{item.label}</span>
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Nav;