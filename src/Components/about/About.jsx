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
              <small>3+ Years Working</small>
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
            Hey there! I'm Parva Shah, currently diving deep into my Masters in Software Engineering at the Rochester Institute of Technology, New York. My adventure in web development kicked off about three years ago, and it's been a fantastic ride of continuous learning and self-improvement ever since.

I’ve been freelancing as a web developer, tackling projects like Personal Portfolios, E-Commerce sites, and API Designing. I’m a self-taught coder who’s pretty good at debugging and can easily adapt to different tech stacks. I’m all about learning new things and love being part of a team.

When I’m not coding, you can find me exploring the latest tech trends, experimenting with new frameworks, or contributing to exciting projects. 
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About