import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [productsState, setProductsState] = useState(
    [
      { id: 1, name: "test1", price: 100 },
      { id: 2, name: "test2", price: 200 }
    ]
  );

  const handleCreateProductClick = () => {
    navigate('/add-product');
  }

  const fetchProducts = () => {
    axios.get('http://localhost:8080/api/v1/products')
      .then(
        response => {
          setProductsState(response.data);
        }
      )
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(fetchProducts, []);

  const handleDeleteButtonClick = (id) => {
    axios.delete('http://localhost:8080/api/v1/products/' + id)
      .then(response => {
        fetchProducts();
      })
      .catch(err => {
        console.error(err);
      })
  }

  return (
    <div>
      <div>
        <input type="button" value="Create new Product" onClick={handleCreateProductClick}></input>
      </div>

      {productsState.map(product => {
        return (
          <Product id={product.id}
            key={product.id}
            name={product.name}
            price={product.price}
            deleteProduct={() => { handleDeleteButtonClick(product.id) }} />
        )
      })}

    </div>
  );

}

export default Products;