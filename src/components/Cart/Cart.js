import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h1>Cart Page</h1>
      <Link to="/checkout">CheckOut</Link>
    </div>
  );
};

export default Cart;
