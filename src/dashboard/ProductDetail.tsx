import { Box, Grid, Paper } from "@mui/material";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface ProductDetailProps {
  id: number;
}

const ProductDetail: React.FunctionComponent<ProductDetailProps> = (props) => {
  const params = useParams();

  const fetchProduct = React.useCallback(async () => {
    const result = await axios.get(
      "http://localhost:8080/api/v1/products/" + params.id
    );
    if (result.status === 200) {
      setProductDetailState(result.data);
    }
  }, [params.id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const [productDetailState, setProductDetailState] = useState({
    id: 0,
    name: "test",
    price: 0,
  });

  return (
    <Grid container spacing={1} justifyContent="center" sx={{ mt: 3 }}>
      <Grid item xs={3}>
        <Paper>
          <Box>Id: {productDetailState.id}</Box>
          <Box>Name: {productDetailState.name}</Box>
          <Box>Price: {productDetailState.price}</Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
