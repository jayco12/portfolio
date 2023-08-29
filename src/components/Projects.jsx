import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import j from "../assets/img/j.png";
import r from "../assets/img/r.png";
import onedoc from "../assets/img/onedoc.png";
import bmi from "../assets/img/bmi.png";
import balablue from "../assets/img/balablue.png";
import portfolio from "../assets/img/portfolio.png";
import weather from "../assets/img/weather.png";
import hayster from "../assets/img/hayster.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "  Rex",
      description: "A gas purchase app",
      imgUrl: r,
      link:""
    },
    {
      title: "Hayster laundromat",
      description: "It is a laundry service ordering app",
      imgUrl: hayster,
      link:""
    },
    {
      title: "Portfolio",
      description: "My personal portfolio app",
      imgUrl: portfolio,
      link:""
    },
    {
      title: "Instagram clone",
      description: "A slight clone of instagram",
      imgUrl: j,
      link:""
    },
    {
      title: "Bmi calculator",
      description: "A Bmi calculator mini project",
      imgUrl: bmi,
      link:""
    },
    {
      title: "Balablue",
      description: "A social app",
      imgUrl: balablue,
      link:""
    },
    {
      title: "weather app",
      description: "A weather app",
      imgUrl: weather,
      link:""
    },
    {
      title: "Onedoc waitlist",
      description: "waitlist for a telemed app",
      imgUrl: onedoc,
      link:""
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are some of my projects  </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-4 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index === 3}
                                {...project}
                                
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> </Tab.Pane>
                   
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}