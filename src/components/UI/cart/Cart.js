import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
import CartItem from "./CartItem";
import "../../../styles/shopping-cart.css";
function Cart() {
  const listCartProduct = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const closeCart = () => {
    dispatch(cartUiActions.toggle());
  };
  
  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="close__btn" onClick={closeCart}>
          <span>
            <i className="ri-close-fill"></i>
          </span>
        </div>
        <div className="cart__item-list">
          {listCartProduct.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            listCartProduct.map((item)=>(
              <CartItem data={item} key={item.id}/>
            ))
          )}
          
        </div>
        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal amount:<span> ${totalAmount}</span>
          </h6>
          <button>
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
}

export default Cart;
