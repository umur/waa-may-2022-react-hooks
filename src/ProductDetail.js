import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    (async () => {
      let response = await axios.get(
        "http://localhost:8080/api/v1/products/" + id
      );
      if (response.status) {
        setProduct(response.data);
      }
    })();
  }, [id]);
  return (
    <>
      <h3>{product && product.name}</h3>
      <h3>{product && product.price}</h3>
    </>
  );
};

export default ProductDetail;
