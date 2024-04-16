import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title> {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <section id="home" className="home">
        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div className="h_bg-image order-1 order-lg-2 h-100">
            <img id="my_image" src={introdata.your_img_url} alt="my image" />
          </div>

          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <h3 className="mb-1x hello">Hello, I am</h3>
                <h2 className="mb-1x">
                  <span className="hollow-text">{introdata.title}</span>
                </h2>
                <h1 className="fluidz-48 mb-1x" style={{ color: 'var(--text-color-3)' }}>
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,

                    }}
                  />
                </h1>
                <p className="mb-1x mx-2 description-home" dangerouslySetInnerHTML={{ __html: introdata.description }}></p>
                <div className="intro_btn-action pb-5 my-4">
                  <Link to="/portfolio" className="text_2 mx-4">
                    <div className="button-51">
                      My Portfolio
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div className="button-51 mx-4">
                      Contact Me
                    </div>
                  </Link>
                  <Link to="assests/Resume.pdf" className="text_2 mx-4" target="_blank" download>
                    <div className="button-51">
                      Download CV
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider >
  );
};
