import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import './HeaderSocials.css';

const HeaderSocials = () => {
    const socialLinks = [
        {
            icon: <FaLinkedinIn />,
            url: "https://linkedin.com/in/parvashah",
            label: "LinkedIn Profile",
            color: "#0077b5"
        },
        {
            icon: <FaGithub />,
            url: "https://github.com/parvashah",
            label: "GitHub Profile",
            color: "#333"
        },
        {
            icon: <FaTwitter />,
            url: "https://twitter.com/parvashah",
            label: "Twitter Profile",
            color: "#1da1f2"
        },
        {
            icon: <FaInstagram />,
            url: "https://instagram.com/parvashah",
            label: "Instagram Profile",
            color: "#e4405f"
        }
    ];

    return (
        <div className="header__socials">
            <div className="social-links">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link hover-lift"
                        aria-label={social.label}
                        style={{ '--social-color': social.color }}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
            <div className="social-line"></div>
        </div>
    );
};

export default HeaderSocials;