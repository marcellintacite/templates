import React from "react";
import i from "../assets/marcy.png";
import 'font-awesome/css/font-awesome.css'
import cv from '../assets/cv.pdf'

function Center({ dark }) {
  return (
    <div className="first" data-aos="fade-up">
      <div className={dark ? "left active" : "left"}>
        <div className="left_container">
          <div className="tit">
            <h3>Salut !</h3>
            <div className="bottom"></div>
          </div>
          <p>
            Je suis Tacite, développeur web et mobile avec Javascript (react et
            react native). Bienvenue sur mon portfolio où vous allez découvrir qui
            je suis.
          </p>

          <div className="profile">
            <img src={i} alt="" />
            <h3>Aksanti Bahiga Tacite</h3>
            <p>Front-end dev</p>
          </div>
          <a href={cv} download className="btn">Télecharger mon CV</a>
        </div>
      </div>
      <div className="right" id="apropos">
        <div className="right_container">
          <div className="title">
            <h2>A propos</h2>
            <div className="bottom"></div>
          </div>
          <div className="text_content">
            Je suis AKSANTI BAHIGA TACITE, développeur web depuis 2020. Je fais le front-end avec react et le mobile avec react native. J’ai une très bonne maitrise en HTML, CSS, JS, et un peu du Python et du PHP. Je suis étudiant en informatique à l’université Catholique de Bukavu. A part le développement, je suis aussi créateur de contenu sur la chaine YouTube <a href="https://www.youtube.com/c/DrcMind" className="link"> Drcmind</a> et sur page Instagram <a href="https://www.instagram.com/prog_rammationweb/" className="link">programmation_web</a> .
          </div>
          <div className="icons">
            <h2>Restez connecter avec moi : </h2>

            <ul>
              <li><a href="https://twitter.com/BahigaTacite">
                <span className="fa fa-twitter"></span>
              </a></li>
              <li><a href="https://github.com/marcellintacite">
                <span className="fa fa-github"></span></a></li>
              <li><a href="https://web.facebook.com/marcellin.bt.1/">
                <span className="fa fa-facebook"></span>
              </a></li>
              <li><a href="https://www.instagram.com/aksantibahiga/">
                <span className="fa fa-instagram"></span></a></li>
              <li><a href="">
                <span className="fa fa-youtube"></span>
              </a></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center;
