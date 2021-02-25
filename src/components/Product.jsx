import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

  function Product({ id, title, image, price, rating }) {
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
          rating: rating,
        },
      });
    };

    return (
      <div className="product__wrapper">
        <div className="product__titleContainer">
        <p className="product__name">{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p key = {_} >⭐</p>
            ))}
        </div>
        <p className="product__price">
          $<strong>{price}</strong>
        </p>
        </div>
        <img src={image} alt="Nivea cream" />
        <button type="button" onClick={addToBasket} >Add To Cart</button>
      </div>
    );
  }


export default Product;
