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
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit. Quo ullam, ad, tempora magni amet in pariatur praesentium illum fugiat atque est molestiae laboriosam dolore autem, provident non
              officia neque iusto.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About