import React from "react";
import { ListGroupItem } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import "../../../styles/cart-item.css";

function CartItem({ data }) {
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(cartActions.addItem(data));
  };
  const decreaseItem = () => {
    dispatch(cartActions.removeItem(data));
  };
  const removeItem = () => {
    dispatch(cartActions.deleteItem(data));
  };
  return (
    <ListGroupItem className="border-0 ">
      <div className="cart__item d-flex gap-2">
        <img src={data.image01} alt="product-img" className="cart__item-img" />
        <div className="cart__item-info d-flex align-items-center justify-content-between flex-fill">
          <div>
            <h6 className="cart__item-title">{data.title}</h6>
            <p className="d-flex align-items-center gap-5 cart__item-price">
              {data.quantity}x <span>${data.totalPrice}</span>
            </p>
            <div className="d-flex justify-content-between align-items-center quantity__btn">
              <span className="increase__btn" onClick={incrementItem}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{data.quantity}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete__btn" onClick={removeItem}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
}

export default CartItem;
