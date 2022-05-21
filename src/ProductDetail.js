import React, { useEffect, useState } from "react";

const ProductDetail = ({ id }) => {
  const [product, setProduct] = useState(null);

  return (
    <>
      <h3>{product && product.name}</h3>
      <h3>{product && product.price}</h3>
    </>
  );
};

export default ProductDetail;
