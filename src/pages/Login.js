import React, { useRef } from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
function Login() {
  const loginNameRef = useRef();
  const loginPassRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Helmet title="Login">
      <CommonSection title="Login"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form action="" className="form mb-5" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPassRef}
                  />
                </div>
                <button className="addToCart__btn" type="submit">
                  Login
                </button>
              </form>
              <Link to="/register">
                Already have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Login;
