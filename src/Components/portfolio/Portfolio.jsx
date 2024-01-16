import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/api.png'
import IMG2 from '../../Assets/blogapp.png'
import IMG3 from '../../Assets/car price.jpeg'
import IMG4 from '../../Assets/catordog.jpeg'
import IMG6 from '../../Assets/ToDo React.png'
import IMG7 from '../../Assets/WeatherImg.png'
import IMG8 from '../../Assets/nightclub.png'
import IMG9 from '../../Assets/rideshare_app.png'




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
          <a href="#" className='btn'>Github</a>
          <a href="#"className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG9} alt="" />
          </div>
          <h3>RideShare App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/parva3105/" className='btn'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG8} alt="" />
          </div>
          <h3>NightClub Managment App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/parva3105/" className='btn'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Weather App using NodeJs</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/parva3105/weather-app" className='btn'>Github</a>
          {/* <a href="#"className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Todo's App in React</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/parva3105/todos-react" className='btn'>Github</a>
          <a href="https://todos-react-mtsn6tq95-parva3105.vercel.app/"className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Task Managing API using NodeJs</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/parva3105/task-manager" className='btn'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Blog App in Django</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/parva3105/blog-app" className='btn'>Github</a>
          </div>
        </article>

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>School Tracker in Django</h3>
          <div className="portfolio__item-cta">
          <a href="#" className='btn'>Github</a>
          <a href="#"className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Used Car Price prediciton Model</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/parva3105/car-price-predicitions" className='btn'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Cat or Dog prediciton Model</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/parva3105/cat-or-dog" className='btn'>Github</a>
          </div>
        </article>

        

        
      </div>

    </section>
  )
}

export default Portfolio