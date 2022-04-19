import React from "react";
import "./education.css";
import { RiBook2Fill } from "react-icons/ri";
import Lottie from "lottie-react-web";
import animation from "../../assets/lottieImage/rocketEdu.json";

const Education = () => {
  return (
    <section id="education">
      <h5>My Eductation and Formation</h5>
      <h2>Education and Formation</h2>

      <div className="container education__container">
        <article className="education">
          <div className="education__head">
            <h3>Education</h3>
          </div>
          <ul className="education__list">
            <li>
              <div className="education__details-Title">
                <RiBook2Fill className="education__list-icon" />
                <h5 className="education__list-date">2022 - PRESENT</h5>
              </div>
              <div className="education__details-Desc">
                <h4>Teste</h4>
                <p className="education__list-description">
                  Teste sadasdasdasds
                </p>
              </div>
            </li>
            <li>
              <div className="education__details-Title">
                <RiBook2Fill className="education__list-icon" />
                <h5 className="education__list-date">2022</h5>
              </div>
              <div className="education__details-Desc">
                <h4>Teste</h4>
                <p className="education__list-description">
                  Teste sadasdasdasds
                </p>
              </div>
            </li>
          </ul>
        </article>
        {/* end of first list */}
        <article className="educationsImage">
          <Lottie
            height={350}
            width={350}
            options={{
              animationData: animation,
              loop: true,              
            }}
          />
        </article>
        {/* end of image */}
        <article className="education">
          <div className="education__head">
            <h3>Formation</h3>
          </div>
          <ul className="education__list">
            <li>
              <div className="education__details-Title">
                <RiBook2Fill className="education__list-icon" />
                <h5 className="education__list-date">2022 - PRESENT</h5>
              </div>
              <div className="education__details-Desc">
                <h4>Teste</h4>
                <p className="education__list-description">
                  Teste sadasdasdasds
                </p>
              </div>
            </li>
            <li>
              <div className="education__details-Title">
                <RiBook2Fill className="education__list-icon" />
                <h5 className="education__list-date">2022</h5>
              </div>
              <div className="education__details-Desc">
                <h4>Teste</h4>
                <p className="education__list-description">
                  Teste sadasdasdasds
                </p>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Education;
