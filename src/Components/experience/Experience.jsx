import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What do I know ?</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Technologies and Framework</h3>
            <div className="experience__content">
              {/* Dummy */}

              {/* <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article> */}

              {/* End*/ }
              
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>MERN Stack</h4>
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
                  <h4>Flask</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>SQL</h4>
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
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
                            
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Machine Learning</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>RESTful API</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Deep Learning</h4>
                  <small className='text-light'>Internmediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>TensorBoard</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

            </div>
        </div>

        {/* End Development */}

        <div className="experience__backend">
        <h3>Languages and Libraries</h3>
            <div className="experience__content">

              {/* Dummy */}

              {/* <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article> */}

              {/* End*/ }
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>C/C++</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              
              

              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML/CSS</h4>
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
                  <h4>TensorFlow</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Oracle Apex</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>PL/SQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>SeaBorn</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              


            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience