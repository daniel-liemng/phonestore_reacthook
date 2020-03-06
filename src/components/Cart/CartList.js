import React, { useContext } from "react";

import CartItem from "./CartItem";
import { ProductContext } from "../../context";

const CartList = () => {
  const { cart } = useContext(ProductContext);
  return (
    <div className="container-fluid">
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
