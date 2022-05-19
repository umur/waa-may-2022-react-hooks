import { Grid, Paper } from "@mui/material";
import * as React from "react";

interface IProductProps {
  id: number;
  name: string;
  price: number;
  onClick: (id: number) => void;
}

const Product: React.FunctionComponent<IProductProps> = (props) => {
  const { name, price, onClick } = props;
  
  return (
    <Grid item xs={3}>
    <div
      onClick={() => {
        onClick(props.id);
      }}
    >
        <Paper>
          <h1>{name}</h1>
          <h4>{price}</h4>
        </Paper>
    </div>
      </Grid>
  );
};

export default Product;
