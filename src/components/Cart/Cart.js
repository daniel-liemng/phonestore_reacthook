import React, { useContext } from "react";

import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";
import CartTotals from "./CartTotals";

import { ProductContext } from "../../context";

const Cart = () => {
  const { cart } = useContext(ProductContext);

  if (cart.length <= 0) {
    return <EmptyCart />;
  }

  return (
    <section className="mt-4">
      <Title name="your" title="cart" />
      <CartColumns />
      <CartList />
      <CartTotals />
    </section>
  );
};

export default Cart;
