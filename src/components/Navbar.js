import React from "react";
import { Link } from "react-router-dom";

import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
import { NavWrapper } from "./NavWrapper";

const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-5">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link className="nav-link" to="/">
            products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus"></i>
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};

export default Navbar;
