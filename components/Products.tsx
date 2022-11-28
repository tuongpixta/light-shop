import { FC } from "react";
import { Box, Button, Stack } from "@mui/material";

import Product, { ProductProps } from "./Product";

interface Props {
  title: string;
  products?: ProductProps[];
  newProduct?: boolean;
}

const Products: FC<Props> = (props) => {
  const { products = Array(4).fill(null) } = props;
  return (
    <Box mb={6}>
      <Box px={2} position="relative" maxWidth={1024} m="auto">
        <h2>{props.title}</h2>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            marginRight: 2,
            textTransform: "capitalize",
          }}
        >
          Xem tất cả &gt;&gt;
        </Button>
        <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="center">
          {products.map((product, index) => (
            <Product
              key={index}
              product={product}
              newProduct={props.newProduct}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Products;
