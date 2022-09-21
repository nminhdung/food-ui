import React, { useRef } from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form action="" className="form mb-5" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form__group">
                  <input type="text" placeholder="Phone number" required />
                </div>
                <div className="form__group">
                  <textarea
                    placeholder="Enter your Message"
                    rows={7}
                  ></textarea>
                </div>
                <button className="addToCart__btn" type="submit">
                  Send
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Contact;
