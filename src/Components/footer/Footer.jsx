import React from 'react';
import './footer.css';
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        {
            icon: <FaLinkedinIn />,
            url: "https://linkedin.com/in/parvashah",
            label: "LinkedIn"
        },
        {
            icon: <FaGithub />,
            url: "https://github.com/parvashah",
            label: "GitHub"
        },
        {
            icon: <FaTwitter />,
            url: "https://twitter.com/parvashah",
            label: "Twitter"
        },
        {
            icon: <FaInstagram />,
            url: "https://instagram.com/parvashah",
            label: "Instagram"
        }
    ];

    const quickLinks = [
        { text: "Home", href: "#home" },
        { text: "About", href: "#about" },
        { text: "Experience", href: "#experience" },
        { text: "Services", href: "#services" },
        { text: "Portfolio", href: "#portfolio" },
        { text: "Contact", href: "#contact" }
    ];

    const contactInfo = [
        {
            icon: <FiMail />,
            text: "parva.shah@email.com",
            href: "mailto:parva.shah@email.com"
        },
        {
            icon: <FiPhone />,
            text: "+1 (555) 123-4567",
            href: "tel:+15551234567"
        },
        {
            icon: <FiMapPin />,
            text: "Rochester, NY",
            href: "#"
        }
    ];

    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__content">
                    <div className="footer__section footer__about">
                        <h3 className="footer__logo gradient-text">Parva Shah</h3>
                        <p className="footer__description">
                            Full-stack developer passionate about creating innovative digital solutions 
                            with modern technologies and clean, efficient code.
                        </p>
                        <div className="footer__socials">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__social-link hover-lift"
                                    aria-label={social.label}
                                    title={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer__section footer__links">
                        <h4 className="footer__section-title">Quick Links</h4>
                        <ul className="footer__nav">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href} 
                                        className="footer__nav-link"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector(link.href)?.scrollIntoView({
                                                behavior: 'smooth'
                                            });
                                        }}
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer__section footer__contact">
                        <h4 className="footer__section-title">Get In Touch</h4>
                        <div className="footer__contact-info">
                            {contactInfo.map((contact, index) => (
                                <a
                                    key={index}
                                    href={contact.href}
                                    className="footer__contact-item"
                                    target={contact.href.startsWith('mailto:') || contact.href.startsWith('tel:') ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                >
                                    <span className="contact-icon">{contact.icon}</span>
                                    <span className="contact-text">{contact.text}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <div className="footer__line"></div>
                    <div className="footer__copyright">
                        <p>
                            © {currentYear} Parva Shah. Made with{' '}
                            <FaHeart className="heart-icon" />{' '}
                            using React & Modern Web Technologies
                        </p>
                        <p className="footer__rights">
                            All rights reserved. Design & Development by Parva Shah
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Background Elements */}
            <div className="footer__bg-elements">
                <div className="footer__bg-circle footer__bg-circle-1"></div>
                <div className="footer__bg-circle footer__bg-circle-2"></div>
            </div>
        </footer>
    );
};

export default Footer;