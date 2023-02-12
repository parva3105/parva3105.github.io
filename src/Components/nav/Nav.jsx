import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setAcctiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setAcctiveNav('#')} className={activeNav === '#'? 'active': ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setAcctiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setAcctiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#service" onClick={() => setAcctiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setAcctiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav