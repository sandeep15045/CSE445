import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
       
 <div className="checkout__left">
        <Subtotal />
      </div>
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Donation Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            
            />
          ))}

        </div>
      </div>

     
    </div>
  );
}

export default Checkout;
