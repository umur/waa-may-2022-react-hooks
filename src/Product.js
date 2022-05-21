import React from "react";

const Product = (props) => {
  return (
    <div onClick={() => props.onSelect(props.id)}>
      <h1>{props.name}</h1>
      <h4>{props.price}</h4>
    </div>
  );
};
export default Product;
