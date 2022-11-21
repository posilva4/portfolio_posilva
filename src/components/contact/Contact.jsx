import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {AiOutlineLinkedin} from 'react-icons/ai';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fs6pb01', 'template_uewp6vn', form.current, 'RKtKeTY7opIN9h2U7')
      e.target.reset();
  };

  return (
    
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='.contact__option-icon'/>
          <h4>Email</h4>
          <h5>posilva4@gmail.com</h5>
          <a href="mailto:posilva4@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='.contact__option-icon'/>
          <h4>Linkedin</h4>
          <h5>pedro-o-silva</h5>
          <a href="https://www.linkedin.com/in/pedro-o-silva/" target="_blank" rel="noreferrer">Visit page</a>
          </article>

        </div>
        {/*end of contact options*/}
        <div className="contact__options contact__form">
          <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required/>
              <input type="email" name='email' placeholder='Your Email' required/>
              <textarea name="messege" rows="4" placeholder='Your Messege' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Messsage</button>
          </form>   
        </div>     
      </div>
    </section>
  )
}

export default Contact