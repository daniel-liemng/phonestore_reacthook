import React, { createContext, useState, useEffect } from "react";

import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [specificProduct, setSpecificProduct] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const getProduct = id => {
    const product = products.find(item => item.id === id);
    return product;
  };

  const handleDetail = id => {
    const product = getProduct(id);
    setSpecificProduct(product);
    // console.log(specificProduct);
  };

  const addToCart = id => {
    // console.log(`Add to cart with ${id}`);
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getProduct(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    const newCart = [...cart, product];
    setProducts(tempProducts);
    setCart(newCart);
    setSpecificProduct(product);
    // addTotals();
  };

  const openModal = id => {
    const product = getProduct(id);
    setModalProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const increment = id => {
    console.log("Increment");
  };

  const decrement = id => {
    console.log("Decrement");
  };

  const removeItem = id => {
    console.log("remove item");
  };

  const clearCart = () => {
    // console.log("clear cart");
    setCart([]);
  };

  const addTotals = () => {
    let subTotal = 0;
    const tempCart = [...cart];
    tempCart.map(item => (subTotal += item.total));

    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));

    const total = subTotal + tax;

    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  };

  const handleData = () => {
    let tempProduct = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProduct = [...tempProduct, singleItem];
    });
    setProducts(tempProduct);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        specificProduct,
        handleDetail,
        addToCart,
        modalOpen,
        openModal,
        closeModal,
        modalProduct,
        increment,
        decrement,
        removeItem,
        clearCart,
        cart,
        cartSubTotal,
        cartTax,
        cartTotal
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
