import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
}
  from "../../content_option";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Myself } from "../../components/section/Myself";
import { Skills } from "../../components/section/Skill";
import { Link } from "react-router-dom";

export const About = () => {

  const [activeTab, setActiveTab] = useState('about');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-4 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row>
          <Col lg="3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <button className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} onClick={() => handleTabChange('about')}>About Myself</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => handleTabChange('experience')}>Experience</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => handleTabChange('skills')}>My Skills</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${activeTab === 'services' ? 'active' : ''}`} onClick={() => handleTabChange('services')}>Services I Provide</button>
              </li>
            </ul>
          </Col>
          <Col lg="9">
            <div className="tab-content">
              {activeTab === 'about' && (
                <div className="tab-pane fade show active">
                  <Myself aboutmeHtml={dataabout.aboutme} hobbies={dataabout.hobbies}></Myself>
                </div>
              )}
              {activeTab === 'experience' && (
                <div className="tab-pane fade show active">
                  <p>I'm in the process of detailing my professional experiences right here. In the meantime, please feel free to <Link to="/contact"><span style={{ color: "blue" }}>[Contact Me]</span></Link> directly for any inquiries about my work history or to see my full resume.
                  </p>
                </div>
              )}
              {activeTab === 'skills' && (
                <div className="tab-pane fade show active">
                  <Skills skills={skills}></Skills>
                </div>
              )}
              {activeTab === 'services' && (
                <div className="tab-pane fade show active services">
                  <ul>
                    {services.map((service, index) => (
                      <li key={index}>
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                        <hr></hr>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Col>

        </Row>




      </Container>
    </HelmetProvider>
  );
};
