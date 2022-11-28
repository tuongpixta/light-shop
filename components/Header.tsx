import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";

interface Props {
  categories: string[];
}

const Header: FC<Props> = ({ categories }) => {
  return (
    <Box bgcolor="#1C3FAA" color="#fff">
      <Stack
        direction="row"
        gap={4}
        justifyContent="space-between"
        p={2}
        maxWidth={1024}
        m="auto"
      >
        {categories.map((category, index) => (
          <Typography key={index} fontWeight="bold">
            {category}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default Header;
