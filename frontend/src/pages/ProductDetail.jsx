import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Footer, Header, Rating } from "../components";
import { data } from "../data";

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    function fetchData() {
      const product = data.products.find((x) => +x.id === +params.id);
      return product;
    }
    console.log(fetchData());
    setProduct(fetchData());
  }, [params.id]);
  if (!product) {
    return <div className="row center">Product Not Found</div>;
  } else {
    return (
      <div className="grid-container">
        <Header />
        <div className="row top">
          <span className="back-home">
            <a href="/">Back to Home</a>
          </span>
          <div className="col-2">
            <img className="large" src={product.image} alt={product.name} />
          </div>
          <div className="col-1">
            <ul>
              <li>{product.name}</li>
              <li>
                <Rating
                  numReviews={product.numReviews}
                  rating={product.rating}
                />
              </li>
              <li>${product.price}</li>
              <li> {product.description}</li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row direction">
                    <div>Price : </div>
                    <div>${product.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row direction">
                    <div>Status : </div>
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="success">In stock</span>
                      ) : (
                        <span className="C">Unavailable</span>
                      )}
                    </div>
                  </div>
                </li>
                <li>
                  <button className="primary block"> Add to cart</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default ProductDetail;
