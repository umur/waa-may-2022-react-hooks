import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { ThemeColorContext } from "../theme/ThemeColor";
import NewProduct from "./NewProduct";
import Product from "./product";
import ProductDetail from "./ProductDetail";

interface DashboardProps {}

function Dashboard(props: DashboardProps) {
  const colorContext = React.useContext(ThemeColorContext);

  const [products, setProducts] = React.useState([
    { id: 1, name: "iphone", price: 100 },
    { id: 2, name: "macbook", price: 200 },
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
    }
  };

  const [selectedProductId, setSelectedProductId] = useState<number>(0);

  return (
    <div>
      <div style={{ color: colorContext.color }}>My Dashboard</div>
      <div>
        {products.map((p) => (
          <Product
            onClick={(id) => {
              setSelectedProductId(id);
            }}
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
          />
        ))}
      </div>
      <NewProduct onChange={onFieldsChanged} onSave={onNewProduct} />

      <ProductDetail id={selectedProductId} />
    </div>
  );
}

export default Dashboard;
