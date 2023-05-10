import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Checkoutproduct from "./Checkoutproduct";
import { useStateValue } from "./Stateprovider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__leftimg"
          src="https://raw.githubusercontent.com/VishalSingh1206/Shopit-commerce/master/public/banner%202%20checkout%20page.png"
          alt="Image Here"
        />
        <h2 className="checkout__title">
          <h3>Hello , {user?.email}</h3>Your Shopping Basket
        </h2>
        {basket.map((item) => (
          <Checkoutproduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
