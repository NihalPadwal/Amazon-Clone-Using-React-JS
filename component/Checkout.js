import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./Stateprovider.js";
import CheckoutProduct from "./checkoutProduct.js";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src="" alt="" />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
