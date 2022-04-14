import React, { useEffect } from "react";
import "./about.css";
import lottie from "lottie-web";
import space from "../../assets/lottieImage/space.json";
import ME from "../../assets/Astraunauta.png";
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#space"),
      animationData: space,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
  }, []);

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

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>7+ years working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>100 Clients</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Complete</small>
            </article>
            </div>
            <p>
            Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável.
“Conjunto de palavras e frases articuladas, escritas sobre qualquer suporte”.[1]
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>

          
        </div>
      </div>
    </section>
  );
};

export default About;
