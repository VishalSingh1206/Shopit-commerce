import React from "react";
import "./Order.css";
import moment from "moment/moment";
function Order() {
  return (
    <div className="order">
      {/* <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="postOrder__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item, i) => {
        return (
          <CheckoutProduct
            key={i}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            hideButton={true}
          />
        );
      })} */}
    </div>
  );
}

export default Order;
