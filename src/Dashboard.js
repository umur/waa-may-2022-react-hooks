import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import NewProduct from "./NewProduct";
import ProductDetail from "./ProductDetail";
import Products from "./Products";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";

const Dashboard = () => {
  const [products, setProduct] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0 });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    (async () => {
      let response = await axios.get("http://localhost:8080/api/v1/products");
      if (response.status) {
        setProduct(response.data);
      }
    })();
  }, []);

  const onChangeProduct = (evt) => {
    let obj = { ...newProduct };
    obj[evt.target.name] = evt.target.value;
    setNewProduct(obj);
  };

  console.log(selected);

  return (
    <>
      <div>My Dashboard</div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              productList={products}
              onSelect={(id) => setSelected(id)}
            />
          }
        ></Route>
        <Route
          path="/new-product"
          element={<NewProduct {...newProduct} onChange={onChangeProduct} />}
        ></Route>
      </Routes>

      <div>{selected !== 0 && <ProductDetail id={selected} />}</div>
    </>
  );
};

export default Dashboard;
