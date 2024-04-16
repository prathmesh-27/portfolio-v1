import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { socialprofils } from "../../content_option";
import { ProjectItem } from "../../components/ProjectItem"

export const Portfolio = () => {
  const projectsSection = dataportfolio.find(section => section.section === "Projects");
  const certificatesSection = dataportfolio.find(section => section.section === "Certificates");

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row>
          <Col lg="4">
            <h3 className=""> Latest-Projects </h3>{" "}
            <hr className="t_border my-4 ml-0 text-right" />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <div className="">
              <ul className="projects-grid">
                <Row>
                  {projectsSection.items.slice(0, 5).map((data, i) => {
                    return (
                      < ProjectItem key={i} project={data} />
                    );
                  })}
                </Row>
              </ul>
              <div className="more my-4" align="center"><a href={socialprofils.github}> Explore my coding journey further on GitHub! </a></div>
            </div>
          </Col>
        </Row>
        <hr className="t_border my-6 " style={{ margin: '3em 0' }} />
        <Row>
          <Col lg="4">
            <h3 className=""> Certification </h3>{" "}
            <hr className="t_border my-2 ml-0 text-right" />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <div className="">
              {certificatesSection.items.slice(0, 5).map((data, i) => {
                return (
                  <Row className="my-4" key={i} style={{ justifyContent: 'space-between' }}>
                    <Col lg="7">
                      <div className="portflio-list">
                        <div className="my-2">
                          <div className="project-item" > <b>Certificate Title : </b> {data.title}</div>
                          <div className="duration2"><b>Duration: </b>{data.duration}</div>
                        </div>
                        <div className="content my-2">
                          <div className="project-item description" > <b>Description: </b> {data.description}</div>
                        </div>
                        <hr className="t_border my-2 ml-0 text-right" />
                      </div>
                    </Col>
                    <Col lg="4">
                      <div className="image_div">
                        <a href={data.link}> <img className="thumbnail" src={data.img} alt="Certificate" style={{ filter: 'none' }} /></a>
                      </div>
                    </Col>
                  </Row>
                );
              })}
            </div>
          </Col>
        </Row>

      </Container>
    </HelmetProvider>
  );
};
