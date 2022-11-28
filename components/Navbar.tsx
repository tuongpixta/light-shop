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
import Link from "next/link";

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
        <img src="/img/logo.png" alt="logo" />
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: 400,
            backgroundColor: "#eee7",
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Tìm kiếm" />
          <IconButton type="button" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Stack direction="row" gap={2}>
          <Link href="/login">
            <PersonOutlinedIcon />
          </Link>
          <ShoppingCartOutlinedIcon />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Navbar;
