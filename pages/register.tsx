import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
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

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Register</title>
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
          >
            <Stack alignItems="center" gap={2} maxWidth={600} flex={1}>
              <h1 className="d-flex gap-2 m-0">
                <Typography fontSize={30} sx={{ color: "#FFB744" }}>
                  DAISYLIGHT
                </Typography>
                -<Typography fontSize={30}>Đăng ký tài khoản</Typography>
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
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Xác nhận mật khẩu
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
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  marginTop: 3,
                }}
              >
                ĐĂNG KÝ
              </Button>

              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Tôi đồng ý với quy định sử dụng và chính sách bảo mật của DAISYLIGHT"
                sx={{
                  width: "100%",
                  marginBottom: 1,
                }}
              />
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
                Bạn đã có tài khoản?{" "}
                <a href="/login" className="text-primary">
                  Đăng nhập
                </a>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}
