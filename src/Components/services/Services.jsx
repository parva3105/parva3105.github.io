import React from 'react'
import './services.css'
import { RxDotFilled } from 'react-icons/rx'
import { RiHomeLine } from 'react-icons/ri'
import { CiLocationOn } from 'react-icons/ci'
import { BsArrowUpRight } from 'react-icons/bs'
import mitacs from '../../Assets/Certificates/Certificate of Completion - Shah.pdf'
import jp from '../../Assets/Certificates/JP Morgan Virtual Forage.pdf'
import acc from '../../Assets/Certificates/Accenture Dev Forage.pdf'




const Services = () => {
  return (
    <section id='service'>
      <h5>What I've done so far?</h5>
      <h2>Work Experience</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Industry Experience</h3>
          </div>

          <ul className='service__list'>
              <li>
                <RxDotFilled className='service__list-icon'/>
                  <div className="details">
                    <p className='job__name'>Reseacher</p>
                      <div className='job__details'>
                        <div className="company__name"><RiHomeLine className='details__icon'/> Rochester Institute of Technology</div>
                        <div className="location"><CiLocationOn className='details__icon'/> NY, USA</div>
                      </div>
                  </div>
              </li>
              <li>
                <RxDotFilled className='service__list-icon'/>
                  <div className="details">
                    <p className='job__name'>Junior Web Developer</p>
                      <div className='job__details'>
                        <div className="company__name"><RiHomeLine className='details__icon'/> Zentire IT Solutions</div>
                        <div className="location"><CiLocationOn className='details__icon'/> Pune</div>
                      </div>
                  </div>
              </li>
              <li>
                <RxDotFilled className='service__list-icon'/>
                  <div className="details">
                    <p className='job__name'>Research Developer <a href={mitacs} target='_blank'><BsArrowUpRight /> </a></p>
                    <div className='job__details'>
                      <div className="company__name"><RiHomeLine className='details__icon'/> Concordia University</div>
                      <div className="location"><CiLocationOn className='details__icon'/> Montreal , QC , CA</div>
                    </div>
                  </div>
              </li>
              <li>
                <RxDotFilled className='service__list-icon'/>
                  <div className="details">
                    <p className='job__name'>Data Analyst <a><BsArrowUpRight /></a></p>
                    <div className='job__details'>
                      <div className="company__name"><RiHomeLine className='details__icon'/> St. Louis University</div>
                      <div className="location"><CiLocationOn className='details__icon'/> Remote</div>
                    </div>
                  </div>                  
              </li>
              <li>
                <RxDotFilled className='service__list-icon'/>
                  <div className="details">
                    <p className='job__name'>JP Morgan Chase and Co. Software Development Intern 
                    <a href={jp} target='_blank'><BsArrowUpRight /></a></p>
                    <div className='job__details'>
                      <div className="company__name"><RiHomeLine className='details__icon'/> Forage</div>
                      <div className="location"><CiLocationOn className='details__icon'/> Virtual</div>
                    </div>
                  </div>
              </li>
              <li >
                <RxDotFilled className='service__list-icon'/>
                  <div className="details">
                    <p className='job__name'>Accenture Software Development Intern 
                    <a href={acc} target='_blank'><BsArrowUpRight /></a></p>
                    <div className='job__details'>
                      <div className="company__name"><RiHomeLine className='details__icon'/> Forage</div>
                      <div className="location"><CiLocationOn className='details__icon'/> Virtual</div>
                    </div>
                </div>    
              </li>
          </ul>

        </article>
        {/*End of Work Ex*/ }
        <article className="service">
          <div className="service__head">
            <h3>Certifications</h3>
          </div>

          <ul className='service__list'>
              <li>
                <RxDotFilled className='service__list-icon'/>
                  <div className="details">
                    <p className='job__name'>Neural Networks and Deep Learning - Deeplearning.AI</p>
                      <div className='job__details'>
                        <div className="company__name"><RiHomeLine className='details__icon'/> Coursera </div>
                      </div>
                  </div>
              </li>
              <li>
                <RxDotFilled className='service__list-icon'/>
                  <div className="details">
                    <p className='job__name'>Responsive Web Design</p>
                      <div className='job__details'>
                        <div className="company__name"><RiHomeLine className='details__icon'/> freeCodeCamp </div>
                      </div>
                  </div>
              </li>
              <li>
                <RxDotFilled className='service__list-icon'/>
                  <div className="details">
                    <p className='job__name'>Python and Django Full Stack Devloper</p>
                      <div className='job__details'>
                        <div className="company__name"><RiHomeLine className='details__icon'/> Udemy </div>
                      </div>
                  </div>
              </li>
              <li>
                <RxDotFilled className='service__list-icon'/>
                  <div className="details">
                    <p className='job__name'>Node.Js Developer</p>
                      <div className='job__details'>
                        <div className="company__name"><RiHomeLine className='details__icon'/> Udemy </div>
                      </div>
                  </div>
              </li>
              <li>
                <RxDotFilled className='service__list-icon'/>
                  <div className="details">
                    <p className='job__name'>Python for Everybody Specialization - University of Michigan </p>
                      <div className='job__details'>
                        <div className="company__name"><RiHomeLine className='details__icon'/> Coursera </div>
                      </div>
                  </div>
              </li>
              <li>
                <RxDotFilled className='service__list-icon'/>
                  <div className="details">
                    <p className='job__name'>Data Science Orientation - IBM </p>
                      <div className='job__details'>
                        <div className="company__name"><RiHomeLine className='details__icon'/> Coursera </div>
                      </div>
                  </div>
              </li>
              <li>
                <RxDotFilled className='service__list-icon'/>
                  <div className="details">
                    <p className='job__name'>Machine Learning For All - University of London </p>
                      <div className='job__details'>
                        <div className="company__name"><RiHomeLine className='details__icon'/> Coursera </div>
                      </div>
                  </div>
              </li>
              <li>
                <RxDotFilled className='service__list-icon'/>
                  <div className="details">
                    <p className='job__name'>Introduction To Big Data - UC San Diego</p>
                      <div className='job__details'>
                        <div className="company__name"><RiHomeLine className='details__icon'/> Coursera </div>
                      </div>
                  </div>
              </li>
              <li>
                <RxDotFilled className='service__list-icon'/>
                  <div className="details">
                    <p className='job__name'>Scientific Computing with Python</p>
                      <div className='job__details'>
                        <div className="company__name"><RiHomeLine className='details__icon'/> freeCodeCamp</div>
                      </div>
                  </div>
              </li>
          </ul>

        </article>
        {/*End of Work Ex*/ }
      </div>

    </section>
  )
}

export default Services