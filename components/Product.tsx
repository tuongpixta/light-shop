import { FC } from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export type ProductProps = {
  img: string;
  name: string;
  price: number;
  discount: number;
};

interface Props {
  product: ProductProps;
  newProduct?: boolean;
}

const Product: FC<Props> = (props) => {
  const product = props.product || {
    name: "Ten SP",
    img: "https://picsum.photos/200/300",
    price: 300000,
    discount: 20,
  };
  return (
    <Box maxWidth={300} position="relative">
      <Box p={1}>
        <img src={product.img} alt="img" />
      </Box>
      {(props.newProduct || product.discount > 0) && (
        <Box position="absolute" top={0} left={0}>
          <Chip
            label={props.newProduct ? "New" : `${product.discount}%`}
            sx={{
              borderRadius: 2,
              bgcolor: props.newProduct ? "#EEA400" : "#FCA4AB",
              color: props.newProduct ? "#FEE5A8" : "#D93248",
            }}
          />
        </Box>
      )}
      <Typography>{product.name}</Typography>
      <Stack direction="row" justifyContent="space-between">
        <Typography fontWeight="bold">
          {product.price.toLocaleString()}
        </Typography>
        <ShoppingCartOutlinedIcon />
      </Stack>
    </Box>
  );
};

export default Product;
