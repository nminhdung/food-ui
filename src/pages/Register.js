import React, { useRef } from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function Register() {
  const formRegister = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Please enter your username")
        .min(4, "Must be 4 characters or more"),
      email: Yup.string()
        .required("Please enter your email")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid Email address"
        ),
      password: Yup.string()
        .required("Please enter your password")
        .matches(
          /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
          "Password must be 8-20 characters and at least one uppercase letter, one lowercase letter, one number and one special character"
        ),
      confirmPassword: Yup.string()
        .required("Please enter your password")
        .oneOf([Yup.ref("password"), null], "Password must match"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Helmet title="Register">
      <CommonSection title="Register"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form
                action=""
                className="form mb-5"
                onSubmit={formRegister.handleSubmit}
              >
                <div className="form__group">
                  <input
                    type="text"
                    name="username"
                    placeholder="User name"
                    value={formRegister.values.username}
                    onChange={formRegister.handleChange}
                    onBlur={formRegister.handleBlur}
                  />
                  {formRegister.touched.username &&
                    formRegister.errors.username && (
                      <p className="error-msg">
                        {formRegister.errors.username}
                      </p>
                    )}
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formRegister.values.email}
                    onChange={formRegister.handleChange}
                    onBlur={formRegister.handleBlur}
                  />
                  {formRegister.touched.email && formRegister.errors.email && (
                    <p className="error-msg">{formRegister.errors.email}</p>
                  )}
                </div>

                <div className="form__group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formRegister.values.password}
                    onChange={formRegister.handleChange}
                    onBlur={formRegister.handleBlur}
                  />
                  {formRegister.touched.password &&
                    formRegister.errors.password && (
                      <p className="error-msg">
                        {formRegister.errors.password}
                      </p>
                    )}
                </div>

                <div className="form__group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formRegister.values.confirmPassword}
                    onChange={formRegister.handleChange}
                    onBlur={formRegister.handleBlur}
                  />
                  {formRegister.touched.confirmPassword &&
                    formRegister.errors.confirmPassword && (
                      <p className="error-msg">
                        {formRegister.errors.confirmPassword}
                      </p>
                    )}
                </div>

                <button className="btn__primary" type="submit">
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
