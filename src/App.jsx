import React from 'react';
import './App.css'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import About from './Components/about/About'
import Experience from './Components/experience/Experience'
import Services from './Components/services/Services'
import Portfolio from './Components/portfolio/Portfolio'
import Testimonials from './Components/testimonials/Testimonials'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import { Analytics } from '@vercel/analytics/react';

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Contact />
            <Analytics />
            {/* <Footer /> */}
        </>
    )
}

export default App;
