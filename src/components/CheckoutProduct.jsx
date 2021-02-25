import React from "react";
import "./Product.css";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
      // remove the item from the basket
      dispatch({
          type: 'REMOVE_FROM_BASKET',
          id: id,
      })
  }

  return (
    <div className="checkoutProduct__wrapper">
      <div className="checkoutProduct__imageWrapper">
        <img src={image} alt="alit" />
      </div>
      <div className="checkoutProduct__titleContainer">
        <p className="checkoutProduct__name">{title}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p key={_}>⭐</p>
            ))}
        </div>
        <p className="checkoutProduct__price">
          $<strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>Remove From Cart</button>
      </div>
      
    </div>
  );
}

export default CheckoutProduct;
