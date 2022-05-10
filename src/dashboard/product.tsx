import * as React from 'react';

interface IProductProps {
  id: number;
  name: string;
  price: number;
  onClick: (id: number) => void;
}

const Product: React.FunctionComponent<IProductProps> = (props) => {
  const { name, price, onClick } = props; 
  return <div onClick={() => {
    onClick(props.id);
  }}>
  <h1>{name}</h1>
  <h4>{price}</h4>
</div>;
};

export default Product;
