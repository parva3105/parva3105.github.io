import React from 'react'
import './about.css'
import ME from '../../Assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="My Image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>2+Years Working</small>
            </article>

            {/* <article className="about__card">
              <FaAward className="about__icon"/>
              <h5></h5>
              <small></small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>

            <p>
            Greetings! I am a fourth-year student pursuing a Bachelor's degree in 
            Information Technology. My journey in website development began almost two years ago at the start of the
             lockdown, and since then, I have completed several projects. Currently, I am working with a startup as a Web Developer
             . As a curious learner, I find Artificial Intelligence to be a fascinating subject. I am a self-taught coder with 
             expertise in debugging and adaptability to different technology stacks.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About