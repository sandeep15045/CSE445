import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
       <strong> <p>{title}</p></strong>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      
      
      </div>

      <img src={image} alt="" />

    <button onClick={addToBasket} > <strong> Add to Donation</strong></button>
    </div>
  );
}

export default Product;
