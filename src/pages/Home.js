import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";
import Helmet from "../components/Helmet/Helmet.js";
import Category from "../components/UI/category/Category.js";
import heroImg from "../assets/images/hero.png";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import products from "../assets/fake-data/products.js";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import ProductCard from "../components/UI/product-card/ProductCard.js";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.js";
import "../styles/hero-section.css";
import "../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, iste.",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, iste.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, iste.",
  },
];
const menuData = [
  {
    id: "01",
    name: "Burger",
    img: foodCategoryImg01,
  },
  {
    id: "02",
    name: "Pizza",
    img: foodCategoryImg02,
  },
  {
    id: "03",
    name: "Bread",
    img: foodCategoryImg03,
  },
];
function Home() {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);
  const filterCategory = (categoryName) => {
    if (categoryName === "ALL") {
      setCategory("ALL");
      setAllProducts(products);
    } else {
      const filteredProducts = products.filter(
        (item) => item.category === categoryName
      );
      setCategory(categoryName);
      setAllProducts(filteredProducts);
    }
  };
  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait
                  <br /> food at<span> your door</span>{" "}
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  nemo aperiam itaque laudantium architecto adipisci?
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-align-content-between ">
                    Order now
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure Checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet, perferendis.
              </p>
              <p className="feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, aut!
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="4" sm="6" xs="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature__item"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12" >
              <div className="food__category d-flex align-items-center justify-content-center gap-4"  data-aos="fade-down">
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => filterCategory("ALL")}
                >
                  All
                </button>
                {menuData.map((item) => (
                  <button
                    key={item.id}
                    className={`d-flex align-items-center gap-2 ${
                      category === item.name ? "foodBtnActive" : ""
                    }`}
                    onClick={() => filterCategory(item.name)}
                  >
                    <img src={item.img} alt={item.name} />
                    {item.name}
                  </button>
                ))}
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5" data-aos="fade-up">
                <ProductCard data={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6"  data-aos="fade-right">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>
            <Col lg="6" md="6" data-aos="fade-left">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Tasty Treat ?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur maxime illo doloribus animi, excepturi sequi.
                </p>
                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Fresh and
                      tasty foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illo, sapiente.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Quality
                      support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam, quos!
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Order from any
                      location
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam, quos!
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" md="12" className="text-center ">
              <h2>Hot pizza</h2>
            </Col>
            {hotPizza.map((item) => {
              return (
                <Col lg="3" md="4" key={item.id} data-aos="fade-up">
                  <ProductCard data={item} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying?
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tenetur corrupti ducimus amet distinctio. Distinctio, totam
                  officiis et sapiente doloremque tenetur.
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6" data-aos="fade-left">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
