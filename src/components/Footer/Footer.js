import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi deleniti
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0 bg-transparent ">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0 bg-transparent">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0 bg-transparent ">
                <p>
                  Location: 20 Tang Nhon Phu, Thu Duc City, Ho Chi Minh city
                </p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0 bg-transparent ">
                <span>Phone: 0909123456</span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0 bg-transparent">
                <span>Email:example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Follow our Newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6" >
            <p className="copyright__text">
              Copyright - {new Date().getFullYear()}, website made by Dung. All
              Rights Reserved.
            </p>
          </Col>
          <Col lg="6" md="6" >
            <div className="social__links d-flex align-items-center gap-3 ">
              <p className="m-0">Follow: </p>
              <span>
                <Link to="https://www.facebook.com/minhdung1102">
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://github.com/nminhdung">
                  <i className="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.youtube.com/channel/UC2OrLZcNOJu0SulGfAEb7hw">
                  <i className="ri-youtube-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.instagram.com/mdung112">
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
