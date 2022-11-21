import React, { useEffect } from "react";
import "./about.css";

import ME from "../../assets/Astraunauta.png";
import { SiCsharp } from "react-icons/si";
import { FaSatellite } from "react-icons/fa";
import { BiHomeHeart } from "react-icons/bi";

const About = () => {

  
function getAge() 
{
    var today = new Date();
    var birthDate = new Date("1986/11/13");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        {/* <div id='space' className='rocket'/>*/}

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <SiCsharp className="about__icon" />
              <h5>7+ years working</h5>
              <small></small>
            </article>

            <article className="about__card">
              <FaSatellite className="about__icon" />
              <h5>Technology Enthusiast</h5>
              <small></small>
            </article>

            <article className="about__card">
              <BiHomeHeart className="about__icon" />
              <h5>Family & Friends</h5>
              <small></small>
            </article>
            
          </div>
          <div className="about__personalInfo">
            <h4>Personal Infos</h4>
            <div className="about__list">
              <div className="item">
                <div className="header">First Name:</div><small>Pedro</small>
              </div>
              <div className="item">
                <div className="header">Last Name:</div><small>Silva</small>
              </div>
              <div className="item">
                <div className="header">Age:</div><small>{getAge()}</small>
              </div>
              <div className="item">
                <div className="header">Nationality:</div><small>Portuguese</small>
              </div>
              <div className="item">
                <div className="header">Languages:</div><small>Portuguese (Native), English</small>
              </div>
              <div className="item">
                <div className="header">Email:</div><small>posilva4@gmail.com</small>
              </div>              
            </div>
          </div>
          <p>
          I’m a nice, fun and friendly person, I love to share moments with my family and friends! I'm addicted to sports and technology.  I believe in a fair world and don't like injustice.
I’m honest and punctual and love to work in a team because it gives me the opportunity to learn and also share my knowledge. 
  I try to be organized and always plan ahead to make sure I manage my time well.
             I'm a good listener and I love communicate. 
              I am always up for new challenges, even when I don't fell comfortable. 
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};



export default About;
