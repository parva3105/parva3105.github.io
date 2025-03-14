import React , { useRef } from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { SiUpwork } from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oylp4hq', 'template_wq2cc7h', form.current, '_nUNTR2dBbWD0PJ0h')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <div className='contact__info'>parvashah.work@gmail.com</div>
            <a href="mailto:parvashah.work@gmail.com" target='_blank'>Send a Mail</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <div className='contact__info'>+18484820769</div>
            <a href="https://api.whatsapp.com/send/?phone=%2B18484820769&text&type=phone_number&app_absent=0" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <SiUpwork className="contact__option-icon"/>
            <h4>UpWork</h4>
            <div className='contact__info'>Parva Shah</div>
            <a href="https://www.upwork.com/freelancers/~01cd60256783773a19https://www.upwork.com/freelancers/~01cd60256783773a19" target='_blank'>Connect</a>
          </article>
        </div>
        {/* END OF OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='E-Mail' />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact