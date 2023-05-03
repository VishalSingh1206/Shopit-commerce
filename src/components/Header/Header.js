import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../Checkout/Stateprovider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://raw.githubusercontent.com/VishalSingh1206/Shopit-commerce/master/public/Asset%203final.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchIn" type="text"></input>
        <SearchIcon className="header__searchIcon"></SearchIcon>
        {/*Logo*/}
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionOne">Hello</span>
          <span className="header__optionTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="header__optionTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Get</span>
          <span className="header__optionTwo">Premium</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionbasket">
            <ShoppingCartIcon />
            <span className="header__basketcount header__optionTwo">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
