import React, { useState, useEffect } from "react";

import {
  Header,
  Product,
  Footer,
  MessageError,
  LoadingBox,
} from "../components";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="grid-container">
        <Header />
        <main>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageError variant="danger">{error}</MessageError>
          ) : (
            <div className="row center">
              {products.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
