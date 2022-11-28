import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import Head from "next/head";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import Router from "next/router";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Stack direction="row">
          <Box flex={1} bgcolor="#fff" height="100vh" color="#000">
            <img
              src="/img/bg-login.png"
              width="100%"
              alt="img"
              className="img-fluid"
            />
          </Box>
          <Box
            flex={1}
            bgcolor="#fff"
            height="100vh"
            color="#000"
            padding={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Stack alignItems="center" gap={2} maxWidth={600} flex={1}>
              <h1 className="d-flex gap-2 m-0">
                <Typography fontSize={30} sx={{ color: "#FFB744" }}>
                  DAISYLIGHT
                </Typography>
                -<Typography fontSize={30}>Đăng Nhập</Typography>
              </h1>
              <p>Xin chào, vui lòng điền vào thông tin đăng nhập</p>
              <TextField
                id="outlined-basic"
                label="Tên Đăng Nhập"
                variant="outlined"
                sx={{
                  marginTop: 2,
                  width: "100%",
                }}
              />
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Mật khẩu
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <Visibility />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  marginTop: 3,
                }}
                onClick={() => Router.push("/")}
              >
                ĐĂNG NHẬP
              </Button>
              <Box textAlign="right" width="100%">
                <Link href="/forgotpassword">
                  <small>Quên mật khẩu?</small>
                </Link>
              </Box>
              <Box textAlign="center">
                <small>Hoặc</small>
              </Box>
              <Stack justifyContent="center" direction="row" gap={3}>
                <IconButton>
                  <FacebookRoundedIcon />
                </IconButton>
                <IconButton>
                  <GoogleIcon />
                </IconButton>
              </Stack>
              <Box>
                Bạn chưa có tài khoản?{" "}
                <Link className="text-primary" href="/register">
                  Đăng ký ngay
                </Link>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}
