import React, { useEffect, useState } from "react";

const EditProduct = (props) => {
  const [productState, setProductState] = useState({
    name: "",
    price: 0,
    id: 0
  });

  useEffect(() => {
    setProductState({
      name: props.name,
      price: props.price
    });
  }, [props.id])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productState);

  };

  const handleOnChange = (field, value) => {
    setProductState({ ...productState, [field]: value })
  }

  return (
    <form onSubmit={handleSubmit}>
      Name: <input name="name" onChange={(e) => { handleOnChange('name', e.target.value) }} />
      Price: <input name="price" onChange={(e) => { handleOnChange('price', e.target.value) }} />
    </form>
  )
}

export default EditProduct;