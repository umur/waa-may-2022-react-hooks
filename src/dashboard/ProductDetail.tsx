import { Box } from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';

interface ProductDetailProps {
  id: number;
}

const ProductDetail: React.FunctionComponent<ProductDetailProps> = (props) => {

  const fetchProduct = React.useCallback(async () => {
    const result = await axios.get('http://localhost:8080/api/v1/products/' + props.id);
    if (result.status === 200) {
      setProductDetailState(result.data);
    }
  }, [props.id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const [productDetailState, setProductDetailState] = useState({
    id: 0,
    name: 'test',
    price: 0,
  });

  return <Box>
    <Box>Id: {productDetailState.id}</Box>
    <Box>Name: {productDetailState.name}</Box>
    <Box>Price: {productDetailState.price}</Box>
  </Box>;
};

export default ProductDetail;