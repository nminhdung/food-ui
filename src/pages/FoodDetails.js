import React, { useState, useEffect } from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import "../styles/product-details.css";
import ProductCard from "../components/UI/product-card/ProductCard";

function FoodDetails() {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();

  const singleProduct = products.find((item) => item.id === id);
  const [previewImg, setPreviewImg] = useState(singleProduct.image01);

  const relatedProduct = products
    .filter((item) => item.category === singleProduct.category)
    .slice(0, 4);

  const addItem = () => {
    dispatch(cartActions.addItem(singleProduct));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  useEffect(() => {
    setPreviewImg(singleProduct.image01);
  }, [singleProduct]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleProduct]);
  return (
    <Helmet title="Product-details">
      <CommonSection title={singleProduct.title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images">
                <div
                  className="img__item mb-3  "
                  onClick={() => setPreviewImg(singleProduct.image01)}
                >
                  <img src={singleProduct.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3 "
                  onClick={() => setPreviewImg(singleProduct.image02)}
                >
                  <img src={singleProduct.image02} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3 "
                  onClick={() => setPreviewImg(singleProduct.image03)}
                >
                  <img src={singleProduct.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{singleProduct.title}</h2>
                <p className="product__price">
                  Price: <span>${singleProduct.price}</span>
                </p>
                <p className="product__content-category mb-5">
                  Category: <span>{singleProduct.category}</span>
                </p>
                <button className="btn__primary" onClick={addItem}>
                  Add to Cart
                </button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-3 py-3">
                <h6
                  className={`${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "tab__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{singleProduct.desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3 ">
                  <div className="review__text pt-5">
                    <p className="user__name mb-0">Gutts</p>
                    <p className="user__email">gutts@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <div className="review__text">
                    <p className="user__name mb-0">Gutts</p>
                    <p className="user__email">gutts@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <div className="review__text">
                    <p className="user__name mb-0">Gutts</p>
                    <p className="user__email">gutts@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>
                  <form className="form" onSubmit={handleSubmit}>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={enteredName}
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        value={enteredEmail}
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <textarea
                        rows={5}
                        type="text"
                        placeholder="Write your review"
                        onChange={(e) => setReviewMsg(e.target.value)}

                      />
                    </div>
                    <button type="submit" className="btn__primary">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>
            <Col lg="12" className="mb-5 mt-5">
              <h2 className="related__product-title">You might also like</h2>
            </Col>
            {relatedProduct.map((item) => {
              return (
                <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                  <ProductCard data={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default FoodDetails;
