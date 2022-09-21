import React, { useRef } from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function Register() {
  const signupNameRef = useRef();
  const signupPassRef = useRef();
  const signupEmailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Helmet title="Register">
      <CommonSection title="Register"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form action="" className="form mb-5" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPassRef}
                  />
                </div>
                <button className="addToCart__btn" type="submit">
                  Sign up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Register;
