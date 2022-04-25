import React from "react";
// import { toCapitalize } from "../services/functions";

import Rating from "./Rating";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <a href={`/product/${product.id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="card-body">
        <a href={`/product/${product.id}`}>
          <h2>{product.name}</h2>
        </a>
        <Rating numReviews={product.numReviews} rating={product.rating} />
      </div>
    </div>
  );
};

export default ProductCard;
