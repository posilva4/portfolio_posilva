import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Csharp from "../../assets/Csharp.png";
import netCore from "../../assets/netCore.png";
import sql from "../../assets/sql.png";
import azure from "../../assets/Azure.png";
import git from "../../assets/git.png";
import react from "../../assets/react.png";
import ts from "../../assets/ts.png";
import docker from "../../assets/docker.png";

// Import Swiper styles
import "swiper/swiper.min.css";
//import "swiper/components/pagination/pagination.min.css"
//import "swiper/components/navigation/navigation.min.css"

const experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Technologies</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Sql Server</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>GitHub</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>DevOps Azure</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>.Net Core</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
     
      
      <div className="container experience__container_teste">
       
          <div class="swiper-wrapper">
            <Swiper
              autoHeight={false}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              slidesPerView={"auto"}
              initialSlide={1}
              speed={5000}
              centeredSlides={false}
              modules={[Autoplay, Pagination]}
            >
              <SwiperSlide>
                <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">
                  <img src={Csharp} alt="c" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://dotnet.microsoft.com/en-us/download">
                  <img src={netCore} alt="netCore" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://azure.microsoft.com/pt-pt/">
                  <img src={azure} alt="azure" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://github.com/">
                  <img src={git} alt="git" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://www.microsoft.com/pt-br/sql-server/sql-server-downloads">
                  <img src={sql} alt="sql" />
                </a>
              </SwiperSlide>    
              <SwiperSlide>
                <a href="https://react.com/">
                  <img src={react} alt="react" />
                </a>
              </SwiperSlide>               
              
              <SwiperSlide>
                <a href="https://www.typescriptlang.org/">
                  <img src={ts} alt="tes" />
                </a>
              </SwiperSlide> 
              <SwiperSlide>
                <a href="https://docker.com/">
                  <img src={docker} alt="docker" />
                </a>
              </SwiperSlide> 
            </Swiper>
          </div>
     
      </div>
    </section>
  );
};

export default experience;
