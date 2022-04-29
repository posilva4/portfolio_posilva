import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {AiOutlineLinkedin} from 'react-icons/ai';

const Contact = () => {
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
        <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="messege" rows="7" placeholder='Your Messege' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Messsage</button>
        </form>        
      </div>
    </section>
  )
}

export default Contact