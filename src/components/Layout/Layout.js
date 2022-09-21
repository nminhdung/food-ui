import React from "react";

import Header from "../Header/Header.js";
import Cart from "../UI/cart/Cart";
import Footer from "../Footer/Footer.js";
import Routers from "../../routes/Routers.js";
import { useSelector } from "react-redux";
function Layout() {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />
      {showCart &&<Cart />}
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
