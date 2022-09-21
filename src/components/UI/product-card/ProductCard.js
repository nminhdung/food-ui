import React from "react";
import "../../../styles/product-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

function ProductCard({ data }) {
  const dispatch = useDispatch();
  const { id, title, price, image01 } = data;
  const addToCart = () => {
    dispatch(cartActions.addItem({ id, title, price, image01 }));
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="productImg" className="w-50" />
      </div>
      <div className="product__content">
        <h5 className="product__title">
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between product__content-info">
          <span className="product__price">${price}</span>
          <button className="addToCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
