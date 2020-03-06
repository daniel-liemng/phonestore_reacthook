import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../context";
import { ButtonContainer } from "./Button";

const Details = () => {
  const { specificProduct, addToCart, openModal } = useContext(ProductContext);
  // console.log(specificProduct);
  const { id, title, img, price, info, company, inCart } = specificProduct;

  return (
    <div className="container py-5">
      {/* Title */}
      <div className="row">
        <div className="col-10 mx-auto text-center text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>
      {/* End - Title */}

      {/* Info */}
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} alt="product" className="img-fluid" />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>model: {title}</h2>
          <h4 className="text-title text-uppercase text-muted my-3">
            made by: <span className="text-uppercase">{company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price: <span>$</span>
              {price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold my-3">
            some info about the product:
          </p>
          <p className="text-muted">{info}</p>
          {/* Button */}
          <div>
            <Link to="/">
              <ButtonContainer>back to products</ButtonContainer>
            </Link>
            <ButtonContainer
              cart
              disabled={inCart}
              onClick={() => {
                addToCart(id);
                openModal(id);
              }}
            >
              {inCart ? "inCart" : "add to cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
      {/* End - Info */}
    </div>
  );
};

export default Details;
