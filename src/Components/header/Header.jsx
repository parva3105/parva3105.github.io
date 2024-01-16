import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/me.png'
import HS from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>   
            <h1>Parva Shah</h1>
            <h5 className="text-light">Software Engineer</h5>
            <CTA/>
            <HS />
            
            <div className="me">
              <img src={ME} alt="My Photo" />
            </div>
            
            <a href="#contact" className='scroll__down'>Scroll Down</a>

        </div>
    </header>
  )
}

export default Header