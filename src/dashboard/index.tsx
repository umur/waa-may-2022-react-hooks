import {
  Box,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { ThemeColorContext } from "../theme/ThemeColor";
import NewProduct from "./NewProduct";
import ProductDetail from "./ProductDetail";
import Products from "./Products";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface DashboardProps {}

function Dashboard(props: DashboardProps) {
  const colorContext = React.useContext(ThemeColorContext);
  const navigate = useNavigate();

  const [products, setProducts] = React.useState([
    { id: 1, name: "iPhone", price: 100 },
    { id: 2, name: "MacBook", price: 200 },
  ]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8080/api/v1/products");

    console.log(result.data);
    setProducts(result.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const [newProductState, setNewProductState] = React.useState({
    name: "",
    price: 0,
  });

  const onFieldsChanged = (event: any) => {
    console.log(event.target.value + " " + event.target.name);
    let copy: any = { ...newProductState };
    copy[event.target.name] = event.target.value;
    setNewProductState(copy);
  };

  const onNewProduct = async () => {
    const result = await axios.post("http://localhost:8080/api/v1/products", {
      name: newProductState.name,
      price: newProductState.price,
    });
    if (result.status === 200) {
      setProducts((products) => {
        return [...products, result.data];
      });

      navigate("/products")
    }
  };

  const [selectedProductId, setSelectedProductId] = useState<number>(0);

  return (
      <Box>
        <Link to={"/products"}>
          <ListItemButton>
            <ListItemIcon>
              <InventoryIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
        </Link>
        <Link to={"/new-product"}>
          <ListItemButton>
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="New product" />
          </ListItemButton>
        </Link>
        <Routes>
          <Route
            path="/products"
            element={
              <Products products={products} onSelect={(id) => {
                setSelectedProductId(id)
                navigate(`/products/${id}`)
              }} />
            }
          />
          <Route
            path="/new-product"
            element={
              <NewProduct onChange={onFieldsChanged} onSave={onNewProduct} />
            }
          />
          <Route
            path={`/products/:id`}
            element={
              <ProductDetail id={selectedProductId} />
            }
          />
        </Routes>

        {/* <div style={{ color: colorContext.color }}>My Dashboard</div> */}
      </Box>
  );
}

export default Dashboard;
