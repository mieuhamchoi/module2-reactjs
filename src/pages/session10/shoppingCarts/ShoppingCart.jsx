import React from "react";
import "./ShoppingCart.scss";
import ProductList from "./components/ProductList";
import ShoppingCartCom from "./components/ShoppingCart";
export default function ShoppingCart() {
  return (
    <div className="shoppingCart_container">
      {/* Product List */}
      <ProductList></ProductList>
      {/* Shopping Cart */}
      <ShoppingCartCom></ShoppingCartCom>
    </div>
  );
}
