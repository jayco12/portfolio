import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import x from "../assets/img/x.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from "../assets/img/github.png";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h1><a className="name" href="#">Joseph Oduyebo</a> </h1>       
            </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/oduyebo-joseph-287b851b5"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://twitter.com/Joseph_oduyebo"><img src={x} alt="Icon" /></a>
              <a href="https://github.com/jayco12"><img src={github} alt="" /></a>
              <a href="https://www.instagram.com/josephoduyebo/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 202. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}