import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProductState, setCurrentProductState] = useState({
    id: 0,
    name: '',
    price: 0
  });

  const fetchCurrentProduct = () => {
    axios.get('http://localhost:8080/api/v1/products/' + id)
      .then(response => setCurrentProductState(response.data))
      .catch(error => console.log(error));
  };

  const handleEditClick = () => {
    navigate('/edit-product')
  }

  useEffect(fetchCurrentProduct, [id])

  return (
    <div>
      <input type="button" value="edit" onClick={handleEditClick} />
      <div>
        ID: {currentProductState.id}
        Name: {currentProductState.name}
        Price: {currentProductState.price}
      </div>
    </div>
  )
}

export default ProductDetail;