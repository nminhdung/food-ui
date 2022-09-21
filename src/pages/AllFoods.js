import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import "../styles/all-foods.css";
import "../styles/pagination.css";

function AllFoods() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 8;

  const searchedProducts = products.filter((item) => {
    if (searchTerm === "") return item;
    if (item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
      return item;
  });

  const offset = pageNumber * productPerPage;

  const displayPage = searchedProducts.slice(offset, offset + productPerPage);
  const pageCount = Math.ceil(products.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-content-centet justify-content-between">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="I'm looking for...."
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetical, A-Z</option>
                  <option value="descending">Alphabetical, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {displayPage.map((item) => {
              return (
                <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                  <ProductCard data={item}></ProductCard>
                </Col>
              );
            })}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="paginationBtns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default AllFoods;
