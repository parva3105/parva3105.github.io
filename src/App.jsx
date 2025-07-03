import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Header from './Components/header/Header';
import Nav from './Components/nav/Nav';
import About from './Components/about/About';
import Experience from './Components/experience/Experience';
import Services from './Components/services/Services';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import ScrollToTop from './Components/scrollToTop/ScrollToTop';

// Analytics
import { Analytics } from '@vercel/analytics/react';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time for smooth transitions
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="loading-screen">
                <div className="loader">
                    <div className="loader-inner"></div>
                </div>
                <p>Loading Portfolio...</p>
            </div>
        );
    }

    return (
        <div className="App">
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
            <ScrollToTop />
            <Analytics />
        </div>
    );
};

export default App;
