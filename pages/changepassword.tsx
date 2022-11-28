import { Box, Button, Checkbox, IconButton, Stack, TextField } from "@mui/material";
import Head from "next/head";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Change password</title>
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
            <h1 className="m-0">-Đổi mật khẩu</h1>
              <p>Vui lòng nhập tên đăng nhập và mật khẩu để đổi mật khẩu của bạn.</p>
              <TextField
                id="outlined-basic"
                label="Tên Đăng Nhập"
                variant="outlined"
                sx={{
                  marginTop: 2,
                  width: "100%",
                }}
              />
              <TextField
                id="outlined-basic"
                label="Nhập mật khẩu cũ"
                variant="outlined"
                sx={{
                  width: "100%",
                }}
              />
              <TextField
                id="outlined-basic"
                label="Nhập mật khẩu mới"
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
               ĐỔI MẬT KHẨU
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}
