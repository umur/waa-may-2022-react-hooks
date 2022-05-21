import React from "react";

const NewProduct = (props) => {
  return (
    <>
      <div>
        Name:
        <input
          type="text"
          value={props.name}
          onChange={props.onChange}
          name="name"
        />
      </div>
      <div>
        Price:
        <input
          type="number"
          value={props.price}
          onChange={props.onChange}
          name="price"
        />
      </div>
    </>
  );
};

export default NewProduct;
