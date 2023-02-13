import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills ?</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
            <div className="experience__content">
              {/* Dummy */}

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              {/* End*/ }
                            
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React Js</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Node Js</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Django</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
                            
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Dummy</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Dummy</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>


            </div>
        </div>

        {/* End Development */}

        <div className="experience__backend">
        <h3>Languages</h3>
            <div className="experience__content">
              {/* Dummy */}

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              {/* End*/ }
                            
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React Js</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Node Js</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Django</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>


            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience