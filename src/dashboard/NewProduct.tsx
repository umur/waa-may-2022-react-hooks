import { Box, Button, TextField } from "@mui/material";
import * as React from "react";

interface INewProductProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSave: () => void;
}

const NewProduct: React.FunctionComponent<INewProductProps> = (props) => {
  const { onChange, onSave } = props;
  return (
    <Box>
      Add new product
      <Box mb={1}>
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          onChange={onChange}
        />
      </Box>
      <Box mb={1}>
        <TextField
          id="price"
          name="price"
          label="Price"
          variant="outlined"
          onChange={onChange}
        />
      </Box>

      <Button variant="contained" onClick={onSave}>Save</Button>

    </Box>
  );
};

export default NewProduct;
