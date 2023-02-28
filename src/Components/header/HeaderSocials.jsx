import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="www.linkedin.com/in/parva3105" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/parva3105" target="_blank"><FaGithub/></a>    
        <a href="https://twitter.com" target="_blank"><FaTwitterSquare/></a> {/* Target blank to open in new tab */}
    </div>
  )
}

export default HeaderSocials