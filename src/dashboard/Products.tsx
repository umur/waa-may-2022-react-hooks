import { Grid } from '@mui/material';
import * as React from 'react';
import Product from './Product';

interface ProductsProps {
  products: Array<any>;
  onSelect: (id: number) => void;
}

const Products: React.FunctionComponent<ProductsProps> = (props) => {
  const { products, onSelect } = props;
  
  return <Grid container spacing={1}>
  {products.map((p) => (
    <Product
      onClick={(id) => {
        onSelect(id);
      }}
      key={p.id}
      id={p.id}
      name={p.name}
      price={p.price}
    />
  ))}
</Grid>;
};

export default Products;