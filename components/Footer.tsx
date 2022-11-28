import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Footer: FC = () => {
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
        <img src="/img/logo.png" alt="logo" />
        <Stack gap={2}>
          <h2>Contact Info</h2>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <LocalPhoneOutlinedIcon />
            +84 919 163 981
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <EmailOutlinedIcon />
            daisylight@gmail.com
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <LocationOnOutlinedIcon />
            96 Định Công, Hoàng Mai, Hà Nội
          </Box>
        </Stack>
        <Stack gap={2}>
          <h2>Danh mục sản phẩm</h2>
          <span>ĐÈN LED BÚP</span>
          <span>ĐÈN TUYP LED</span>
          <span>ĐÈN LED PANEL</span>
          <span>ĐÈN PHA LED</span>
        </Stack>
        <Stack gap={2}>
          <h2>Thông tin</h2>
          <span>Quy định sử dụng</span>
          <span>Mẫu hợp đồng</span>
          <span>Profile</span>
        </Stack>
      </Stack>
      <Box maxWidth={1024} paddingX={2} m="auto">
        <hr />
      </Box>
      <Stack
        maxWidth={1024}
        direction="row"
        justifyContent="space-between"
        p={2}
        m="auto"
        color="gray"
      >
        <span>© 2022 Tech500 JSC. All rights reserved.</span>
        <span>Privacy policy | Disclaimer</span>
      </Stack>
    </Box>
  );
};

export default Footer;
