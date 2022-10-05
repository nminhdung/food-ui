import React, { useState } from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import "../styles/checkout.css";

function Checkout() {
  const [infoCheckout, setInfoCheckout] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    voucher: "",
  });
  const shippingInfo = [];
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInfoCheckout({ ...infoCheckout, [name]: value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(infoCheckout);
    const userShippingAddress = {
      name: infoCheckout.name,
      email: infoCheckout.email,
      phone: infoCheckout.phone,
      country: infoCheckout.country,
      city: infoCheckout.city,
      voucher: infoCheckout.voucher,
    };
    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost);
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={submitHandle}>
                <div className="form__group">
                  <input
                    value={infoCheckout.name}
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    value={infoCheckout.email}
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    value={infoCheckout.phone}
                    name="phone"
                    type="number"
                    placeholder="Phone number"
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    value={infoCheckout.country}
                    name="country"
                    type="text"
                    placeholder="Country"
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    value={infoCheckout.city}
                    name="city"
                    type="text"
                    placeholder="City"
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    value={infoCheckout.voucher}
                    name="voucher"
                    type="number"
                    placeholder="Voucher code"
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn__primary">
                  Payment
                </button>
              </form>
            </Col>
            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Checkout;
