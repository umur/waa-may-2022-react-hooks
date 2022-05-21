import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const counter = useSelector((state) => state.counter.value);
  console.log(counter);
  return (
    <>
      <h1>Welcome to my palace!</h1>
      <Link to="/products">product</Link>
      <Link to="/new-product">New product</Link>
    </>
  );
};

export default Home;
