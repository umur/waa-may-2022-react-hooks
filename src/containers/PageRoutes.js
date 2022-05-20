import React from "react";
import { Routes, Route } from "react-router-dom";
import { Counter } from "../Component/Counter/Counter";
import EditProduct from "../Component/EditProduct";
import Login from "../Component/Login";
import NewProduct from "../Component/NewProduct";
import ProductDetail from "../Component/ProductDetail";
import Products from "../Component/Products";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/user' element={<Login />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product-detail/:id' element={<ProductDetail />} />
      <Route path='/add-product' element={<NewProduct />} />
      <Route path='/edit-product' element={<EditProduct />} />
      <Route path='/counter' element={<Counter />} />



    </Routes>
  )
}

export default PageRoutes;