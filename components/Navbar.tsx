import { FC } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Navbar: FC = () => {
  return (
    <Box>
      <Stack
        direction="row"
        gap={4}
        justifyContent="space-between"
        alignItems="center"
        p={2}
        maxWidth={1024}
        m="auto"
      >
        <img src="" alt="logo" />
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: 400,
            backgroundColor: "#eee7",
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="TIM KIEM" />
          <IconButton type="button" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Stack direction="row" gap={2}>
          <PersonOutlinedIcon />
          <ShoppingCartOutlinedIcon />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
