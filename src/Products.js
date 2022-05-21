import React from "react";
import Product from "./Product";

const Products = (props) => {
  console.log(props);
  return (
    <>
      {props.productList.map((item) => (
        <Product
          id={item.id}
          name={item.name}
          price={item.price}
          key={item.id}
          onSelect={props.onSelect}
        />
      ))}
    </>
  );
};

export default Products;
